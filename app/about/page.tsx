import PolicyLayout, {
  PolicyList,
  PolicySection,
} from "@/app/components/policylayout";
import { BUSINESS, STORE_CATEGORIES } from "@/app/data/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${BUSINESS.brandName} — a physical retail store for Vastu products, religious articles, gemstones, bracelets, and statues. We do not offer consultations or paid advisory services.`,
};

export default function AboutPage() {
  return (
    <PolicyLayout
      title="About Us"
      description={`${BUSINESS.brandName} is an India-based online store for authentic physical products rooted in Vastu traditions and devotional use.`}
    >
      <PolicySection title="What we do">
        <p>
          We sell <strong>physical products only</strong>—including Vastu
          remedies, religious articles, natural gemstones, stone bracelets, and
          statues—through our website with transparent INR pricing and secure
          checkout. Our catalogue is intended for customers who wish to
          purchase tangible items for home, workplace, or personal use.
        </p>
        <p>
          We do <strong>not</strong> offer paid consultations, astrology
          services, personalised Vastu advisory, or other professional
          services through this store. Product descriptions and general
          information on the site are for educational context about the
          physical items we sell; they are not a substitute for professional
          advice.
        </p>
      </PolicySection>

      <PolicySection title="Product categories">
        <PolicyList
          items={STORE_CATEGORIES.map(
            (c) => `${c.title} — ${c.description.replace(/\.$/, "")}.`
          )}
        />
        <p>
          Browse the full catalogue on our{" "}
          <Link
            href="/shop"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            shop
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection title="How we operate">
        <PolicyList
          items={[
            "Orders are fulfilled with physical inventory or sourced items shipped to your delivery address in India.",
            "Prices are shown in Indian Rupees (INR) unless otherwise stated on a product page.",
            "Payments are processed securely via Razorpay; we do not store your card or UPI credentials.",
            "Customer support is available during our published working hours for order and delivery queries.",
          ]}
        />
      </PolicySection>

      <PolicySection title="Our commitment">
        <p>
          We aim to describe products accurately, pack fragile or devotional
          items with care, and respond promptly to legitimate order concerns.
          If something does not meet your expectations, please review our{" "}
          <Link
            href="/policies/returns"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Returns &amp; Refunds Policy
          </Link>{" "}
          and reach us via{" "}
          <Link
            href="/contact"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Contact
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection title="Legal identity">
        <p>
          Trading as <strong>{BUSINESS.legalName}</strong>. Registered address
          and support details are listed on our{" "}
          <Link
            href="/contact"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Contact
          </Link>{" "}
          page.
        </p>
        {/* OWNER CONFIRMATION: registered legal name and full address with PIN before go-live */}
      </PolicySection>
    </PolicyLayout>
  );
}