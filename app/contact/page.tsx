import PolicyLayout, { PolicySection } from "@/app/components/policylayout";
import { BUSINESS } from "@/app/data/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Contact ${BUSINESS.brandName} for order support, shipping queries, and grievance redressal regarding physical product purchases.`,
};

export default function ContactPage() {
  const mailto = `mailto:${BUSINESS.email}`;
  const tel = `tel:+${BUSINESS.phoneE164}`;

  return (
    <PolicyLayout
      title="Contact Us"
      description="We're here to help with orders, deliveries, and product-related questions. This store sells physical products only."
    >
      <PolicySection title="Customer support">
        <p>
          For questions about products, order status, shipping, returns, or
          cancellations, please reach us during working hours. We respond to
          emails as quickly as possible; response times may be longer on
          Sundays and public holidays.
        </p>
        <ul className="mt-4 space-y-3 rounded-xl border border-amber-200/80 bg-white/70 p-5 text-stone-800 shadow-sm">
          <li>
            <span className="block text-xs font-semibold uppercase tracking-wide text-amber-800">
              Email
            </span>
            <a
              href={mailto}
              className="font-medium text-amber-900 underline-offset-2 hover:underline"
            >
              {BUSINESS.email}
            </a>
          </li>
          <li>
            <span className="block text-xs font-semibold uppercase tracking-wide text-amber-800">
              Phone
            </span>
            <a
              href={tel}
              className="font-medium text-amber-900 underline-offset-2 hover:underline"
            >
              {BUSINESS.phoneDisplay}
            </a>
          </li>
          <li>
            <span className="block text-xs font-semibold uppercase tracking-wide text-amber-800">
              Address
            </span>
            {BUSINESS.addressLine}
            {/* OWNER CONFIRMATION: full registered / dispatch address with PIN code */}
          </li>
          <li>
            <span className="block text-xs font-semibold uppercase tracking-wide text-amber-800">
              Working hours
            </span>
            {BUSINESS.workingHours}
          </li>
        </ul>
      </PolicySection>

      <PolicySection title="Order &amp; product enquiries">
        <p>
          When you write to us, please include your order ID (if applicable),
          the product name, and a brief description of your request. We do not
          provide paid Vastu consultations, astrology, or bespoke advisory
          services through this channel—only support related to physical
          product purchases.
        </p>
        <p>
          You can also continue shopping on{" "}
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
        {BUSINESS.grievanceOfficer ? (
          <p>
            For unresolved complaints relating to your purchase, you may contact
            our designated grievance officer: {BUSINESS.grievanceOfficer}.
          </p>
        ) : (
          <p>
            If your concern has not been resolved through regular customer
            support, you may lodge a grievance by writing to{" "}
            <a
              href={mailto}
              className="font-medium text-amber-800 underline-offset-2 hover:underline"
            >
              {BUSINESS.email}
            </a>{" "}
            with the subject line <strong>Grievance – Order</strong> and
            include your order ID, purchase date, and a summary of the issue.
            We will acknowledge grievances typically within 1–3 business days;
            resolution timelines may vary depending on the nature of the
            complaint and any third-party logistics involvement.
          </p>
        )}
        {/* OWNER CONFIRMATION: designated grievance officer name & email if legally required */}
        <p className="text-sm text-stone-600">
          This grievance process applies to transactions for physical products
          on this website only.
        </p>
      </PolicySection>

      <PolicySection title="Policies">
        <p>
          Please review our{" "}
          <Link
            href="/policies/terms"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Terms &amp; Conditions
          </Link>
          ,{" "}
          <Link
            href="/policies/privacy"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Privacy Policy
          </Link>
          ,{" "}
          <Link
            href="/policies/shipping"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Shipping Policy
          </Link>
          ,{" "}
          <Link
            href="/policies/returns"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Returns &amp; Refunds
          </Link>
          , and{" "}
          <Link
            href="/policies/cancellation"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Cancellation Policy
          </Link>
          .
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}