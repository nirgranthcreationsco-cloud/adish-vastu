"use client";

import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext<any>(null);

const CART_STORAGE_KEY = "vastu_cart";
const SHOP_RETURN_KEY = "vastu_shop_return";

export function setShopReturnPath(path: string) {
  if (typeof window === "undefined") return;
  try {
    sessionStorage.setItem(SHOP_RETURN_KEY, path);
  } catch {
    /* ignore */
  }
}

export function getShopReturnPath(fallback = "/#remedies") {
  if (typeof window === "undefined") return fallback;
  try {
    return sessionStorage.getItem(SHOP_RETURN_KEY) || fallback;
  } catch {
    return fallback;
  }
}

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<any[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CART_STORAGE_KEY);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed)) setCart(parsed);
      }
    } catch {
      /* ignore corrupt storage */
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    try {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    } catch {
      /* ignore */
    }
  }, [cart, hydrated]);

  function addToCart(product: any) {
    setCart((prev: any) => {
      const existing = prev.find((p: any) => p.name === product.name);
      if (existing) {
        return prev.map((p: any) =>
          p.name === product.name ? { ...p, qty: p.qty + 1 } : p
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  }

  function removeFromCart(name: string) {
    setCart((prev: any) => prev.filter((p: any) => p.name !== name));
  }

  function updateQuantity(name: string, delta: number) {
    setCart((prev: any) =>
      prev.map((p: any) => {
        if (p.name === name) {
          const newQty = Math.max(1, p.qty + delta);
          return { ...p, qty: newQty };
        }
        return p;
      })
    );
  }

  function clearCart() {
    setCart([]);
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart, hydrated }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
