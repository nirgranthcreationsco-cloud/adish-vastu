"use client";

import { BUSINESS } from "@/app/data/business";
import {
  getEducationalInfo,
  getProductStatus,
  productCatalog,
} from "@/app/data/productCatalog";
import { useCart } from "@/app/context/cartcontext";
import {
  ArrowLeft,
  Package,
  ShieldCheck,
  ShoppingCart,
  Truck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useMemo, useState } from "react";

export default function ProductDetailPage() {
  const params = useParams();
  const router = useRouter();
  const { addToCart } = useCart();
  const id = params.id as string;

  const product = useMemo(
    () => productCatalog.find((p) => p.id === id),
    [id]
  );

  const [variant, setVariant] = useState(
    product?.variants?.[0]?.option || ""
  );

  if (!product) {
    return (
      <main className="mx-auto max-w-3xl px-4 py-20 text-center">
        <h1 className="text-2xl font-bold text-stone-900">Product not found</h1>
        <Link href="/shop" className="mt-6 inline-block text-amber-800 font-semibold">
          Back to shop
        </Link>
      </main>
    );
  }

  const status = getProductStatus(product, variant || undefined);
  const selectedVar = product.variants?.find((v) => v.option === variant);
  const rawPrice =
    selectedVar?.b2c != null ? selectedVar.b2c : product.b2c;
  const priceNum = Number(String(rawPrice ?? "").replace(/[^\d.]/g, "")) || 0;
  const priceLabel = priceNum
    ? `₹${priceNum.toLocaleString("en-IN")}`
    : null;
  const canBuy = status === "DIRECT_PURCHASE" && priceLabel;
  const info = product.info || getEducationalInfo(product.name, product.category);
  const images = [
    product.image,
    ...(product.driveUrls || [])
      .map((u) => {
        const m = u.match(/\/d\/([^/]+)/);
        return m
          ? `https://drive.google.com/thumbnail?id=${m[1]}&sz=w800`
          : null;
      })
      .filter(Boolean),
  ].filter((v, i, a) => v && a.indexOf(v) === i) as string[];

  const [activeImg, setActiveImg] = useState(images[0] || "/sacred_remedies.png");

  const incomplete: string[] = [];
  if (!product.image || product.image.includes("sacred_remedies.png")) {
    incomplete.push("High-quality product image");
  }
  if (!priceLabel) incomplete.push("Confirmed retail price (INR)");
  // Specs like material/dimensions are not in catalog — flag for admin
  incomplete.push("Material / dimensions / weight (not in catalogue — confirm with admin)");

  const handleAdd = () => {
    if (!canBuy || !priceLabel) return;
    const name = variant ? `${product.name} - ${variant}` : product.name;
    addToCart({
      id: product.id,
      name,
      price: priceLabel,
      image: activeImg,
    });
  };

  const handleBuyNow = () => {
    handleAdd();
    router.push("/checkoutpage");
  };

  return (
    <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
      <Link
        href="/shop"
        className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-stone-600 hover:text-amber-800"
      >
        <ArrowLeft className="h-4 w-4" /> Back to Shop
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        <div>
          <div className="relative aspect-square overflow-hidden rounded-3xl border border-amber-100 bg-stone-100">
            <Image
              src={activeImg}
              alt={product.name}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
              priority
            />
          </div>
          {images.length > 1 && (
            <div className="mt-3 flex gap-2 overflow-x-auto">
              {images.map((img) => (
                <button
                  key={img}
                  type="button"
                  onClick={() => setActiveImg(img)}
                  className={`relative h-16 w-16 shrink-0 overflow-hidden rounded-xl border ${
                    activeImg === img ? "border-amber-600" : "border-amber-100"
                  }`}
                >
                  <Image src={img} alt="" fill className="object-cover" sizes="64px" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div>
          <p className="text-xs font-bold uppercase tracking-wider text-amber-700">
            {product.category}
          </p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
            {product.name}
          </h1>
          <p className="mt-4 text-3xl font-bold text-amber-800">
            {priceLabel || "Price on request"}
          </p>
          <p className="mt-1 text-sm text-stone-500">
            Inclusive of applicable taxes where shown. Currency: {BUSINESS.currency}.
          </p>
          <p className="mt-3 inline-flex rounded-full bg-amber-50 px-3 py-1 text-xs font-bold text-amber-900">
            {canBuy ? "In stock — ready to order" : "Availability on enquiry"}
          </p>

          {product.variants?.length > 0 && (
            <div className="mt-6">
              <label className="text-xs font-bold uppercase tracking-wide text-stone-500">
                Specification
              </label>
              <select
                value={variant}
                onChange={(e) => setVariant(e.target.value)}
                className="mt-2 w-full rounded-xl border border-amber-200 bg-white px-3 py-3 text-sm font-semibold outline-none focus:border-amber-500"
              >
                {product.variants.map((v) => (
                  <option key={v.option} value={v.option}>
                    {v.option}
                    {v.b2c ? ` — ₹${v.b2c}` : " — on request"}
                  </option>
                ))}
              </select>
            </div>
          )}

          <div className="mt-6 space-y-3">
            <h2 className="text-sm font-bold uppercase tracking-wide text-stone-500">
              Product description
            </h2>
            <p className="text-sm leading-relaxed text-stone-700">{info.whatIsIt}</p>
            <p className="text-sm leading-relaxed text-stone-700">
              <strong>Typical use:</strong> {info.whyUsed}
            </p>
            <p className="text-sm leading-relaxed text-stone-700">
              <strong>Suitable for:</strong> {info.suitableFor}
            </p>
            <p className="text-sm leading-relaxed text-stone-700">
              <strong>Placement guidance (general):</strong> {info.howUsed}
            </p>
            <p className="text-xs text-stone-500">
              Product descriptions explain intended traditional/cultural use of
              physical items. They are not medical, financial, or guaranteed
              outcome claims.
            </p>
          </div>

          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              { icon: Truck, t: "Shipping", d: "See Shipping Policy" },
              { icon: ShieldCheck, t: "Returns", d: "See Returns Policy" },
              { icon: Package, t: "Physical item", d: "Shipped as goods" },
            ].map((x) => (
              <div key={x.t} className="rounded-xl border border-amber-100 bg-amber-50/40 p-3">
                <x.icon className="h-4 w-4 text-amber-700" />
                <p className="mt-2 text-xs font-bold text-stone-800">{x.t}</p>
                <p className="text-[11px] text-stone-500">{x.d}</p>
              </div>
            ))}
          </div>

          {incomplete.length > 0 && (
            <div className="mt-6 rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-950">
              <p className="font-bold">Administrator note — incomplete details</p>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-xs">
                {incomplete.map((i) => (
                  <li key={i}>{i}</li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            {canBuy ? (
              <>
                <button
                  type="button"
                  onClick={handleAdd}
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-xl bg-stone-900 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-amber-800"
                >
                  <ShoppingCart className="h-4 w-4" />
                  Add to Cart
                </button>
                <button
                  type="button"
                  onClick={handleBuyNow}
                  className="inline-flex flex-1 items-center justify-center rounded-xl border border-amber-300 bg-amber-500 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-stone-950 hover:bg-amber-400"
                >
                  Buy Now
                </button>
              </>
            ) : (
              <Link
                href={`/contact?product=${encodeURIComponent(product.name)}`}
                className="inline-flex flex-1 items-center justify-center rounded-xl bg-stone-900 px-5 py-3.5 text-sm font-bold uppercase tracking-wide text-white"
              >
                Enquire about this product
              </Link>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
