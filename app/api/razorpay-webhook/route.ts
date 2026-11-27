import crypto from "crypto";
import { NextResponse } from "next/server";
import { supabase } from "@/supabase";

/**
 * Razorpay webhook handler.
 * Set RAZORPAY_WEBHOOK_SECRET in env and configure the same secret
 * in the Razorpay Dashboard → Webhooks.
 *
 * Events handled: payment.captured, payment.failed
 * Updates order status only after signature verification.
 */
export async function POST(request: Request) {
  try {
    const secret = process.env.RAZORPAY_WEBHOOK_SECRET;
    if (!secret) {
      console.error("RAZORPAY_WEBHOOK_SECRET not configured");
      return NextResponse.json(
        { error: "Webhook not configured" },
        { status: 500 }
      );
    }

    const rawBody = await request.text();
    const signature = request.headers.get("x-razorpay-signature") || "";

    const expected = crypto
      .createHmac("sha256", secret)
      .update(rawBody)
      .digest("hex");

    const a = Buffer.from(expected, "utf8");
    const b = Buffer.from(signature, "utf8");
    if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
    }

    const event = JSON.parse(rawBody);
    const eventType = event?.event as string;
    const payment = event?.payload?.payment?.entity;
    const orderId = payment?.order_id as string | undefined;
    const paymentId = payment?.id as string | undefined;
    const amount = payment?.amount;
    const currency = payment?.currency;

    if (!orderId) {
      return NextResponse.json({ ok: true, skipped: true });
    }

    // Find order by razorpay_order_id stored in cart_items JSON
    const { data: orders, error: findErr } = await supabase
      .from("orders")
      .select("id, status, cart_items, total")
      .order("created_at", { ascending: false })
      .limit(50);

    if (findErr) {
      console.error("Webhook order lookup error:", findErr);
      return NextResponse.json({ error: "Lookup failed" }, { status: 500 });
    }

    const match = (orders || []).find((o: any) => {
      const items = o.cart_items;
      if (items && typeof items === "object" && !Array.isArray(items)) {
        return items.razorpay_order_id === orderId;
      }
      return false;
    });

    if (!match) {
      // Order may not be inserted yet (race) — acknowledge webhook
      return NextResponse.json({ ok: true, pending_local_order: true });
    }

    // Prevent duplicate paid updates
    if (match.status === "paid" && eventType === "payment.captured") {
      return NextResponse.json({ ok: true, duplicate: true });
    }

    if (eventType === "payment.captured") {
      // Optional amount/currency sanity check (total stored in rupees)
      if (currency && currency !== "INR") {
        return NextResponse.json({ error: "Currency mismatch" }, { status: 400 });
      }
      if (amount != null && match.total != null) {
        const expectedPaise = Math.round(Number(match.total) * 100);
        if (expectedPaise && Math.abs(expectedPaise - Number(amount)) > 1) {
          console.error("Webhook amount mismatch", {
            expectedPaise,
            amount,
            orderId,
          });
          return NextResponse.json({ error: "Amount mismatch" }, { status: 400 });
        }
      }

      const cartItems =
        match.cart_items && typeof match.cart_items === "object"
          ? { ...match.cart_items, razorpay_payment_id: paymentId, webhook_verified: true }
          : match.cart_items;

      await supabase
        .from("orders")
        .update({ status: "paid", cart_items: cartItems })
        .eq("id", match.id);
    }

    if (eventType === "payment.failed") {
      await supabase
        .from("orders")
        .update({ status: "failed" })
        .eq("id", match.id)
        .neq("status", "paid");
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Webhook error:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
