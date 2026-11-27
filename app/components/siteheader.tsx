"use client";

import { BUSINESS } from "@/app/data/business";
import { useCart } from "@/app/context/cartcontext";
import { Menu, ShoppingBag, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import LanguageSwitcher from "./languageswitcher";

const NAV = [
  { href: "/", label: "Home" },
  { href: "/shop", label: "Shop Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
];

export default function SiteHeader() {
  const pathname = usePathname();
  const { cart } = useCart();
  const [open, setOpen] = useState(false);
  const count = cart.reduce((acc: number, p: any) => acc + (p.qty || 0), 0);

  if (pathname?.startsWith("/admin")) return null;

  return (
    <header className="sticky top-0 z-50 border-b border-amber-100/80 bg-[#FFFCFA]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <Link href="/" className="flex min-w-0 items-center gap-2.5">
          <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-amber-600 to-amber-800 text-sm font-bold text-white">
            JV
          </span>
          <span className="truncate font-semibold tracking-tight text-stone-900">
            {BUSINESS.brandName}
          </span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV.map((item) => {
            const active =
              item.href === "/"
                ? pathname === "/"
                : pathname?.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition ${
                  active
                    ? "text-amber-800"
                    : "text-stone-600 hover:text-amber-800"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="hidden sm:block">
            <LanguageSwitcher />
          </div>
          <Link
            href="/checkoutpage"
            className="relative inline-flex items-center gap-2 rounded-full border border-amber-200 bg-white px-3 py-2 text-sm font-semibold text-stone-800 shadow-sm hover:border-amber-300"
            aria-label="Cart"
          >
            <ShoppingBag className="h-4 w-4 text-amber-700" />
            <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -right-1 -top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-amber-600 px-1 text-[10px] font-bold text-white">
                {count}
              </span>
            )}
          </Link>
          <button
            type="button"
            className="rounded-lg p-2 text-stone-700 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-amber-100 bg-[#FFFCFA] px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base font-medium text-stone-800"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <LanguageSwitcher />
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
