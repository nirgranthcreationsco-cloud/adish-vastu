"use client";

import { BUSINESS } from "@/app/data/business";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function SiteFooter() {
  const pathname = usePathname();
  const t = useTranslations("footer");
  if (pathname?.startsWith("/admin")) return null;

  // Only real routes that exist in the app
  const POLICY_LINKS = [
    { href: "/about", label: t("about") },
    { href: "/contact", label: t("contactUs") },
    { href: "/policies/shipping", label: t("shipping") },
    { href: "/policies/returns", label: t("returns") },
    { href: "/policies/cancellation", label: t("cancellation") },
    { href: "/policies/privacy", label: t("privacy") },
    { href: "/policies/terms", label: t("terms") },
  ];

  const SHOP_LINKS = [
    { href: "/#remedies", label: t("shopRemedies") },
    { href: "/shop", label: t("shopAll") },
  ];

  return (
    <footer className="border-t border-amber-100 bg-stone-900 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-amber-200 product-title">
            {BUSINESS.brandName}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            {t("tagline")}
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200/90">
            {t("policies")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            {SHOP_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-stone-400 transition hover:text-amber-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            {POLICY_LINKS.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-stone-400 transition hover:text-amber-200"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200/90">
            {t("contact")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-stone-400">
            <li>{BUSINESS.phoneDisplay}</li>
            <li>{BUSINESS.addressLine}</li>
            <li>{BUSINESS.workingHours}</li>
          </ul>
          <p className="mt-4 text-xs text-stone-500">{t("payments")}</p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} {BUSINESS.legalName}. {t("rights")}
      </div>
    </footer>
  );
}
