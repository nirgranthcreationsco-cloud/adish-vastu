import { NextResponse } from "next/server";
import Razorpay from "razorpay";
import { getPriceForVariant } from "@/app/data/productCatalog";


export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { cart, receipt } = body;

    let amountInPaise = 0;

    if (cart && Array.isArray(cart)) {
      let totalAmount = 0;
      for (const item of cart) {
        // Parse variant if present in the name
        const nameParts = item.name.split(" - ");
        const productName = nameParts[0].trim();
        const variantOption = nameParts[1] ? nameParts[1].trim() : undefined;
        
        const priceObj = getPriceForVariant(productName, variantOption);
        let itemB2CPrice = 0;
        
        if (priceObj.b2c) {
          const priceStr = String(priceObj.b2c);
          if (priceStr.includes("-")) {
            const parts = priceStr.split("-").map(p => parseFloat(p.replace(/\D/g, "")));
            itemB2CPrice = parts[parts.length - 1] || 0;
          } else if (priceStr.includes("/")) {
            const parts = priceStr.split("/").map(p => parseFloat(p.replace(/\D/g, "")));
            itemB2CPrice = parts[parts.length - 1] || 0;
          } else {
            itemB2CPrice = parseFloat(priceStr.replace(/\D/g, "")) || 0;
          }
        }
        
        totalAmount += itemB2CPrice * (item.qty || 1);
      }
      amountInPaise = Math.round(totalAmount * 100);
    } else {
      const { amount } = body;
      amountInPaise = amount;
    }

    // Minimum amount validation (100 paise = 1 INR)
    if (!amountInPaise || amountInPaise < 100) {
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
      amount: amountInPaise.toString(), // amount in smallest currency unit (paise)
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
