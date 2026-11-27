"use client";

import { BUSINESS } from "@/app/data/business";
import Link from "next/link";
import { usePathname } from "next/navigation";

const POLICY_LINKS = [
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact Us" },
  { href: "/policies/shipping", label: "Shipping Policy" },
  { href: "/policies/returns", label: "Returns & Refunds" },
  { href: "/policies/cancellation", label: "Cancellation Policy" },
  { href: "/policies/privacy", label: "Privacy Policy" },
  { href: "/policies/terms", label: "Terms & Conditions" },
];

export default function SiteFooter() {
  const pathname = usePathname();
  if (pathname?.startsWith("/admin")) return null;

  return (
    <footer className="border-t border-amber-100 bg-stone-900 text-stone-200">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <h3 className="text-lg font-semibold text-amber-200">
            {BUSINESS.brandName}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-stone-400">
            Physical Vastu products, religious articles, gemstones, and
            accessories — secure checkout via Razorpay.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold uppercase tracking-wider text-amber-200/90">
            Policies & Info
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
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
            Contact
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-stone-400">
            <li>
              <a
                href={`tel:+${BUSINESS.phoneE164}`}
                className="font-semibold text-amber-100 hover:text-amber-50"
              >
                {BUSINESS.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-emerald-400 hover:text-emerald-300"
              >
                WhatsApp us
              </a>
            </li>
            <li>{BUSINESS.addressLine}</li>
            <li>{BUSINESS.workingHours}</li>
          </ul>
          <p className="mt-4 text-xs text-stone-500">
            Payments for physical products are processed securely via Razorpay.
            We do not store your card details.
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 px-4 py-4 text-center text-xs text-stone-500">
        © {new Date().getFullYear()} {BUSINESS.legalName}. All rights reserved.
      </div>
    </footer>
  );
}
