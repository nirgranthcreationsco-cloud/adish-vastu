import PolicyLayout, { PolicySection } from "@/app/components/policylayout";
import { BUSINESS } from "@/app/data/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Call or WhatsApp ${BUSINESS.brandName} at ${BUSINESS.phoneDisplay} for product and order support.`,
};

export default function ContactPage() {
  const tel = `tel:+${BUSINESS.phoneE164}`;

  return (
    <PolicyLayout
      title="Contact Us"
      description="Small business support for physical product orders — call or WhatsApp us on the number below."
    >
      <PolicySection title="Customer support">
        <p>
          For product questions, order status, shipping, returns, or
          cancellations, please call or message us during working hours. We are
          a small business and respond as quickly as we can.
        </p>
        <ul className="mt-4 space-y-3 rounded-xl border border-amber-200/80 bg-white/70 p-5 text-stone-800 shadow-sm">
          <li>
            <span className="block text-xs font-semibold uppercase tracking-wide text-amber-800">
              Phone / WhatsApp
            </span>
            <a
              href={tel}
              className="text-lg font-bold text-amber-900 underline-offset-2 hover:underline"
            >
              {BUSINESS.phoneDisplay}
            </a>
            <div className="mt-2">
              <a
                href={BUSINESS.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex rounded-lg bg-[#25D366] px-3 py-1.5 text-xs font-bold text-white hover:opacity-90"
              >
                Chat on WhatsApp
              </a>
            </div>
          </li>
          <li>
            <span className="block text-xs font-semibold uppercase tracking-wide text-amber-800">
              Location
            </span>
            {BUSINESS.addressLine}
          </li>
          <li>
            <span className="block text-xs font-semibold uppercase tracking-wide text-amber-800">
              Working hours
            </span>
            {BUSINESS.workingHours}
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="Order & product help">
        <p>
          When you message us, please share your order ID (if any), product
          name, and a short note. We sell physical Vastu and religious products
          only — we do not offer paid consultations or astrology services.
        </p>
        <p>
          Continue shopping on{" "}
          <Link
            href="/shop"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Shop products
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection title="Grievance redressal">
        <p>
          For complaints about an order or delivery, call or WhatsApp{" "}
          <a href={tel} className="font-semibold text-amber-900">
            {BUSINESS.phoneDisplay}
          </a>
          . We will record your concern and work to resolve it promptly.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}
