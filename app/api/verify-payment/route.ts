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

    const generated_signature = crypto
      .createHmac("sha256", secret)
      .update(razorpay_order_id + "|" + razorpay_payment_id)
      .digest("hex");

    // We can use a simple string comparison or crypto.timingSafeEqual
    if (generated_signature === razorpay_signature) {
      return NextResponse.json({ success: true, verified: true });
    } else {
      return NextResponse.json(
        { error: "Signature mismatch" },
        { status: 400 }
      );
    }
  } catch (error: any) {
    console.error("Signature Verification Error:", error);
    return NextResponse.json(
      { error: "Failed to verify signature" },
      { status: 500 }
    );
  }
}
