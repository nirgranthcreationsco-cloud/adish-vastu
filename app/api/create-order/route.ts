import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getPriceForVariant } from "@/app/data/productCatalog";

const VALID_COUPONS: Record<string, number> = {
  VASTU20: 0.2,
};

function parseCatalogPrice(b2c: string | number | null | undefined): number {
  if (b2c === null || b2c === undefined) return 0;
  const priceStr = String(b2c);
  if (priceStr.includes("-")) {
    const parts = priceStr.split("-").map((p) => parseFloat(p.replace(/\D/g, "")));
    return parts[parts.length - 1] || 0;
  }
  if (priceStr.includes("/")) {
    const parts = priceStr.split("/").map((p) => parseFloat(p.replace(/\D/g, "")));
    return parts[parts.length - 1] || 0;
  }
  return parseFloat(priceStr.replace(/\D/g, "")) || 0;
}

function cartTotalFromCatalog(cart: any[]): number {
  let total = 0;
  for (const item of cart) {
    const nameParts = String(item.name || "").split(" - ");
    const productName = nameParts[0].trim();
    const variantOption = nameParts[1] ? nameParts[1].trim() : undefined;
    const priceObj = getPriceForVariant(productName, variantOption);
    const unit = parseCatalogPrice(priceObj.b2c);
    // Fallback to client-stored price string if catalog miss
    const fallback = Number(String(item.price || "").replace(/\D/g, "")) || 0;
    total += (unit || fallback) * (item.qty || 1);
  }
  return total;
}

export async function POST(request: Request) {
  try {
    const keyId = process.env.RAZORPAY_KEY_ID;
    const keySecret = process.env.RAZORPAY_KEY_SECRET;

    if (!keyId || !keySecret) {
      console.error("Razorpay keys not configured");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      );
    }

    const body = await request.json();
    const { cart, receipt, coupon, amount } = body;

    let amountInPaise = 0;

    if (cart && Array.isArray(cart) && cart.length > 0) {
      let totalRupees = cartTotalFromCatalog(cart);

      const code = String(coupon || "").trim().toUpperCase();
      const discountRate = VALID_COUPONS[code];
      if (discountRate) {
        totalRupees = totalRupees * (1 - discountRate);
      }

      amountInPaise = Math.round(totalRupees * 100);
    } else if (typeof amount === "number" && amount >= 100) {
      // Direct amount mode (no cart) — amount must already be in paise
      amountInPaise = Math.round(amount);
    } else {
      return NextResponse.json(
        { error: "Cart or valid amount is required" },
        { status: 400 }
      );
    }

    // Minimum amount validation (100 paise = ₹1)
    if (!amountInPaise || amountInPaise < 100) {
      return NextResponse.json(
        { error: "Amount must be at least 100 paise" },
        { status: 400 }
      );
    }

    const razorpay = new Razorpay({
      key_id: keyId,
      key_secret: keySecret,
    });

    const order = await razorpay.orders.create({
      amount: amountInPaise,
      currency: "INR",
      receipt: String(receipt || `receipt_${Date.now()}`).slice(0, 40),
    });

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: any) {
    console.error("Razorpay Order Creation Error:", error);
    if (error?.statusCode === 401) {
      return NextResponse.json(
        { error: "Razorpay authentication failed" },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: error?.error?.description || "Failed to create order" },
      { status: 500 }
    );
  }
}
