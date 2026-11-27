"use client";

import ProductCard from "@/app/components/productcard";
import { BUSINESS, STORE_CATEGORIES } from "@/app/data/business";
import {
  getProductStatus,
  productCatalog,
} from "@/app/data/productCatalog";
import { ArrowRight, Package, ShieldCheck, Truck } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const featured = productCatalog
  .filter(
    (p) =>
      getProductStatus(p) === "DIRECT_PURCHASE" &&
      p.b2c &&
      p.image &&
      !p.image.includes("sacred_remedies.png")
  )
  .slice(0, 8);

export default function Page() {
  return (
    <main className="bg-[#FFFCFA]">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-amber-100">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(217,119,6,0.08),transparent_45%),radial-gradient(circle_at_80%_0%,rgba(180,83,9,0.06),transparent_40%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-10 px-4 py-14 sm:px-6 lg:grid-cols-2 lg:py-20">
          <div>
            <p className="inline-flex rounded-full border border-amber-200 bg-amber-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-amber-900">
              Physical products only
            </p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight text-stone-900 sm:text-5xl">
              Authentic Vastu & religious products for your space
            </h1>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-stone-600 sm:text-lg">
              {BUSINESS.brandName} sells physical Vastu remedies, religious
              articles, gemstones, bracelets, and statues — with clear INR
              pricing and secure online checkout.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 rounded-xl bg-stone-900 px-6 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-amber-800"
              >
                Shop Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center rounded-xl border border-amber-200 bg-white px-6 py-3.5 text-sm font-semibold text-stone-800 hover:bg-amber-50"
              >
                About Us
              </Link>
            </div>
          </div>
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] border border-amber-100 bg-stone-100 shadow-xl">
            <Image
              src="/sacred_remedies.png"
              alt="Physical Vastu and religious products"
              fill
              priority
              className="object-cover"
              sizes="(max-width:768px) 90vw, 420px"
            />
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <div className="mb-8 max-w-2xl">
          <h2 className="text-3xl font-bold text-stone-900">Product categories</h2>
          <p className="mt-2 text-stone-600">
            Browse physical inventory categories currently available in our catalogue.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {STORE_CATEGORIES.map((cat) => (
            <Link
              key={cat.id}
              href={cat.href}
              className="rounded-2xl border border-amber-100 bg-white p-5 shadow-sm transition hover:border-amber-300 hover:shadow-md"
            >
              <h3 className="text-lg font-semibold text-stone-900">{cat.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {cat.description}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-amber-800">
                View products <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="border-y border-amber-100 bg-white/60">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-stone-900">Featured products</h2>
              <p className="mt-2 text-stone-600">
                Priced physical products ready to add to cart.
              </p>
            </div>
            <Link href="/shop" className="hidden text-sm font-semibold text-amber-800 sm:inline">
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-4 md:gap-5">
            {featured.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>

      {/* Why shop */}
      <section className="mx-auto max-w-7xl px-4 py-14 sm:px-6">
        <h2 className="text-3xl font-bold text-stone-900">Why shop with us</h2>
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {[
            {
              icon: Package,
              title: "Physical products only",
              desc: "We sell tangible Vastu and religious goods from our inventory — not consultation packages.",
            },
            {
              icon: ShieldCheck,
              title: "Secure checkout",
              desc: "Pay safely with Razorpay. Card details are processed by Razorpay; we do not store them.",
            },
            {
              icon: Truck,
              title: "Transparent policies",
              desc: "Shipping, returns, cancellation, and privacy policies are published and easy to access.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-amber-100 bg-white p-6"
            >
              <item.icon className="h-7 w-7 text-amber-700" />
              <h3 className="mt-4 text-lg font-semibold text-stone-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone-600">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact strip */}
      <section className="border-t border-amber-100 bg-stone-900 px-4 py-12 text-stone-200 sm:px-6">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-bold text-amber-100">Need help with an order?</h2>
            <p className="mt-2 text-stone-400">
              Call or WhatsApp {BUSINESS.phoneDisplay}. {BUSINESS.workingHours}.
            </p>
          </div>
          <Link
            href="/contact"
            className="rounded-xl bg-amber-500 px-5 py-3 text-sm font-bold text-stone-950 hover:bg-amber-400"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
