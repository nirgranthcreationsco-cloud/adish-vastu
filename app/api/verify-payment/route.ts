import crypto from "crypto";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature } = body;

    if (!razorpay_order_id || !razorpay_payment_id || !razorpay_signature) {
      return NextResponse.json(
        { error: "Missing required signature fields" },
        { status: 400 }
      );
    }

    const secret = process.env.RAZORPAY_KEY_SECRET;
    if (!secret) {
      console.error("Razorpay secret not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const generated = crypto
      .createHmac("sha256", secret)
      .update(`${razorpay_order_id}|${razorpay_payment_id}`)
      .digest("hex");

    const a = Buffer.from(generated, "utf8");
    const b = Buffer.from(String(razorpay_signature), "utf8");

    const valid =
      a.length === b.length && crypto.timingSafeEqual(a, b);

    if (!valid) {
      return NextResponse.json(
        { error: "Signature mismatch" },
        { status: 400 }
      );
    }

    return NextResponse.json({ success: true, verified: true });
  } catch (error: any) {
    console.error("Signature Verification Error:", error);
    return NextResponse.json(
      { error: "Failed to verify signature" },
      { status: 500 }
    );
  }
}
