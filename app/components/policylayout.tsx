import { BUSINESS } from "@/app/data/business";
import Link from "next/link";
import type { ReactNode } from "react";

type PolicyLayoutProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

/** Shared wrapper for policy and info pages (ivory/amber, prose-like). */
export default function PolicyLayout({
  title,
  description,
  children,
}: PolicyLayoutProps) {
  return (
    <main className="min-h-screen bg-gradient-to-b from-orange-50 via-[#FFFCFA] to-amber-50/80 px-4 py-12 sm:px-6 sm:py-16">
      <article className="mx-auto max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-wider text-amber-700">
          {BUSINESS.brandName}
        </p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-stone-900 sm:text-4xl">
          {title}
        </h1>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-stone-600">
            {description}
          </p>
        ) : null}
        <div className="policy-content mt-10 space-y-8 text-[15px] leading-relaxed text-stone-700">
          {children}
        </div>
        <nav
          className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-amber-200/80 pt-8 text-sm font-medium"
          aria-label="Related pages"
        >
          <Link
            href="/shop"
            className="text-amber-800 underline-offset-4 transition hover:text-amber-950 hover:underline"
          >
            ← Shop products
          </Link>
          <Link
            href="/contact"
            className="text-amber-800 underline-offset-4 transition hover:text-amber-950 hover:underline"
          >
            Contact us
          </Link>
        </nav>
      </article>
    </main>
  );
}

export function PolicySection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-stone-900">{title}</h2>
      <div className="mt-3 space-y-3">{children}</div>
    </section>
  );
}

export function PolicyList({ items }: { items: string[] }) {
  return (
    <ul className="list-disc space-y-2 pl-5 marker:text-amber-600">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}