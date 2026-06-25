"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";

export default function OrderSuccess() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-amber-50 to-amber-100 flex items-center justify-center px-6 py-16">
      
      <div className="max-w-md w-full bg-white/80 backdrop-blur-xl border border-amber-200 shadow-xl rounded-2xl p-10 text-center space-y-6">
        
        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-100 text-green-600 rounded-full mx-auto">
          <CheckCircle2 className="w-10 h-10" />
        </div>

        <h1 className="text-3xl font-bold text-amber-900">
          Order Placed Successfully!
        </h1>

        <p className="text-amber-700 text-base leading-relaxed">
          Thank you for your purchase. We will reach out to you shortly regarding delivery.
        </p>

        <div className="space-y-3">
          <Link
            href="/"
            className="block w-full py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            Back to Home
          </Link>

          
        </div>

        <p className="text-xs text-amber-600">
          Need help? Contact support
        </p>

      </div>
    </div>
  );
}
