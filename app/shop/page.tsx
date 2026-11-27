"use client";

import ProductCard from "@/app/components/productcard";
import { STORE_CATEGORIES } from "@/app/data/business";
import {
  getProductStatus,
  productCatalog,
} from "@/app/data/productCatalog";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ShopInner() {
  const params = useSearchParams();
  const initialCategory = params.get("category") || "all";
  const [category, setCategory] = useState(initialCategory);
  const [query, setQuery] = useState("");
  const [buyableOnly, setBuyableOnly] = useState(false);

  const products = useMemo(() => {
    return productCatalog.filter((p) => {
      if (category !== "all" && p.category !== category) return false;
      if (buyableOnly && getProductStatus(p) !== "DIRECT_PURCHASE") return false;
      const q = query.trim().toLowerCase();
      if (!q) return true;
      return (
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    });
  }, [category, query, buyableOnly]);

  return (
    <main className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-stone-900 sm:text-4xl">
          Shop Products
        </h1>
        <p className="mt-2 max-w-2xl text-stone-600">
          Physical Vastu products, religious articles, gemstones, bracelets, and
          statues. Prices shown in INR.
        </p>
      </div>

      <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-center">
        <div className="relative flex-1">
          <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-amber-700" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products..."
            className="w-full rounded-xl border border-amber-200 bg-white py-3 pl-10 pr-4 text-sm outline-none focus:border-amber-500"
          />
        </div>
        <label className="inline-flex items-center gap-2 rounded-xl border border-amber-200 bg-white px-4 py-3 text-sm font-medium text-stone-700">
          <input
            type="checkbox"
            checked={buyableOnly}
            onChange={(e) => setBuyableOnly(e.target.checked)}
            className="accent-amber-700"
          />
          Instant buy only
        </label>
      </div>

      <div className="mb-8 flex gap-2 overflow-x-auto pb-1">
        <button
          type="button"
          onClick={() => setCategory("all")}
          className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold ${
            category === "all"
              ? "bg-stone-900 text-white"
              : "border border-amber-200 bg-white text-stone-700"
          }`}
        >
          All
        </button>
        {STORE_CATEGORIES.map((c) => (
          <button
            key={c.id}
            type="button"
            onClick={() => setCategory(c.catalogCategory)}
            className={`whitespace-nowrap rounded-full px-4 py-2 text-xs font-bold ${
              category === c.catalogCategory
                ? "bg-stone-900 text-white"
                : "border border-amber-200 bg-white text-stone-700"
            }`}
          >
            {c.title}
          </button>
        ))}
      </div>

      <p className="mb-4 text-sm text-stone-500">
        {products.length} product{products.length === 1 ? "" : "s"}
      </p>

      {products.length === 0 ? (
        <p className="rounded-2xl border border-amber-100 bg-white p-10 text-center text-stone-600">
          No products match your filters.
        </p>
      ) : (
        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      )}
    </main>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="p-10 text-center text-stone-500">Loading shop…</div>}>
      <ShopInner />
    </Suspense>
  );
}
