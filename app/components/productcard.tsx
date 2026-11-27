"use client";

import { CatalogProduct, getProductStatus } from "@/app/data/productCatalog";
import { useCart } from "@/app/context/cartcontext";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function formatInr(value: string | number | null | undefined) {
  if (value === null || value === undefined || value === "") return null;
  const n = Number(String(value).replace(/[^\d.]/g, ""));
  if (!n) return null;
  return `₹${n.toLocaleString("en-IN")}`;
}

export default function ProductCard({ product }: { product: CatalogProduct }) {
  const { addToCart } = useCart();
  const status = getProductStatus(product);
  const price =
    status === "DIRECT_PURCHASE"
      ? formatInr(
          product.variants?.[0]?.b2c != null
            ? product.variants[0].b2c
            : product.b2c
        )
      : null;

  const canBuy = status === "DIRECT_PURCHASE" && price;

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-amber-100 bg-white shadow-[0_8px_30px_rgba(120,80,20,0.04)] transition hover:-translate-y-0.5 hover:border-amber-200 hover:shadow-[0_16px_40px_rgba(120,80,20,0.08)]">
      <Link href={`/product/${product.id}`} className="relative block aspect-[4/5] bg-stone-100">
        <Image
          src={product.image || "/sacred_remedies.png"}
          alt={product.name}
          fill
          sizes="(max-width:768px) 50vw, 25vw"
          className="object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-3 top-3 rounded-full bg-white/95 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-amber-800">
          {canBuy ? "In stock" : "Enquire"}
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-[10px] font-bold uppercase tracking-wider text-amber-700/80">
          {product.category}
        </p>
        <Link href={`/product/${product.id}`}>
          <h3 className="mt-1 line-clamp-2 text-sm font-semibold leading-snug text-stone-900 sm:text-base">
            {product.name}
          </h3>
        </Link>

        <div className="mt-auto pt-4">
          <p className="mb-3 text-lg font-bold text-amber-800">
            {price || "Price on request"}
          </p>
          {canBuy ? (
            <button
              type="button"
              onClick={() =>
                addToCart({
                  id: product.id,
                  name: product.name,
                  price: price!,
                  image: product.image,
                })
              }
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-stone-900 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-amber-800"
            >
              <ShoppingCart className="h-3.5 w-3.5" />
              Add to Cart
            </button>
          ) : (
            <Link
              href={`/product/${product.id}`}
              className="flex w-full items-center justify-center rounded-xl border border-amber-200 bg-amber-50 px-3 py-2.5 text-xs font-bold uppercase tracking-wide text-amber-900"
            >
              View details
            </Link>
          )}
        </div>
      </div>
    </article>
  );
}
