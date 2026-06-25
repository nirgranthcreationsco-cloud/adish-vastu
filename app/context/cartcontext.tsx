"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState([]);

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

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
