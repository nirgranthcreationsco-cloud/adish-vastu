"use client";

import { ShoppingCart } from "lucide-react";
import { useRouter } from "next/navigation";
import { useCart } from "../context/cartcontext";

export default function FloatingCart() {
  const { cart } = useCart();
  const router = useRouter();

  if (!cart.length) return null;

  const count = cart.reduce((acc: any, p: any) => acc + p.qty, 0);

  return (
    <button
      onClick={() => router.push("/checkoutpage")}
      className="fixed top-5 right-5 z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 hover:scale-105 transition-all"
    >
      <ShoppingCart className="w-5 h-5" />
      <span>{count}</span>
    </button>
  );
}
