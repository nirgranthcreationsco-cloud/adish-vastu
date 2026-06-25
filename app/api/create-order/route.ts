import { NextResponse } from "next/server";
import Razorpay from "razorpay";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { amount, receipt } = body;

    // Minimum amount validation (100 paise = 1 INR)
    if (!amount || amount < 100) {
      return NextResponse.json(
        { error: "Amount must be at least 100 paise" },
        { status: 400 }
      );
    }

    // Initialize Razorpay instance
    const razorpay = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID!,
      key_secret: process.env.RAZORPAY_KEY_SECRET!,
    });

    const options = {
      amount: amount.toString(), // amount in smallest currency unit (paise)
      currency: "INR",
      receipt: receipt || `receipt_${Date.now()}`,
    };

    // Create order
    const order = await razorpay.orders.create(options);

    return NextResponse.json({
      order_id: order.id,
      amount: order.amount,
      currency: order.currency,
    });
  } catch (error: any) {
    console.error("Razorpay Order Creation Error:", error);
    // Handle auth failure explicitly if possible, else generic 500
    if (error.statusCode === 401) {
       return NextResponse.json(
        { error: "Razorpay authentication failed" },
        { status: 401 }
      );
    }
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
