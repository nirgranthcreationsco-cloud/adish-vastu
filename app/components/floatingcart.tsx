"use client";

import { ShoppingCart } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { setShopReturnPath, useCart } from "../context/cartcontext";

export default function FloatingCart() {
  const { cart } = useCart();
  const router = useRouter();
  const pathname = usePathname();

  if (!cart.length) return null;

  const count = cart.reduce((acc: any, p: any) => acc + p.qty, 0);

  return (
    <button
      onClick={() => {
        // Remember where the shopper was so checkout "back" returns to product list
        if (pathname && pathname !== "/checkoutpage") {
          setShopReturnPath(pathname);
        }
        router.push("/checkoutpage");
      }}
      className="fixed top-14 right-5 z-50 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-4 py-2 rounded-full shadow-xl flex items-center gap-2 hover:scale-105 transition-all"
    >
      <ShoppingCart className="w-5 h-5" />
      <span>{count}</span>
    </button>
  );
}
