import PolicyLayout, {
  PolicyList,
  PolicySection,
} from "@/app/components/policylayout";
import { BUSINESS } from "@/app/data/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms & Conditions",
  description: `Terms of use and sale for physical products purchased from ${BUSINESS.brandName}.`,
};

const LAST_UPDATED = "November 2025";

export default function TermsPage() {
  return (
    <PolicyLayout
      title="Terms & Conditions"
      description={`These terms govern your use of this website and purchase of physical products from ${BUSINESS.legalName}. By placing an order, you agree to these terms.`}
    >
      <p className="text-sm text-stone-500">Last updated: {LAST_UPDATED}</p>

      <PolicySection title="1. Scope of business">
        <p>
          This website is operated by <strong>{BUSINESS.legalName}</strong> (
          {BUSINESS.brandName}). We sell <strong>physical products only</strong>
          —including Vastu articles, religious items, gemstones, bracelets, and
          statues—for delivery within India and as otherwise stated at checkout.
        </p>
        <p>
          We do <strong>not</strong> sell or provide consultations, astrology,
          personalised Vastu advisory, or other paid professional services
          through this store. Any general information on product pages is
          descriptive and does not create a client–advisor relationship.
        </p>
      </PolicySection>

      <PolicySection title="2. Eligibility & account">
        <PolicyList
          items={[
            "You must be at least 18 years of age and capable of entering into a binding contract under Indian law.",
            "You agree to provide accurate name, contact, and delivery details at checkout.",
            "We may refuse or cancel orders suspected of fraud, pricing errors, or violation of these terms.",
          ]}
        />
      </PolicySection>

      <PolicySection title="3. Product information & pricing">
        <p>
          We strive to display accurate titles, images, weights/sizes (where
          applicable), and prices in INR. Natural materials (e.g. gemstones) may
          vary slightly in appearance; such variation is not a defect unless it
          materially differs from the listed description.
        </p>
        <p>
          Prices are subject to change without notice. The price charged is the
          price shown at the time you complete payment, subject to availability.
        </p>
        {/* OWNER CONFIRMATION: whether GST is included in displayed prices */}
      </PolicySection>

      <PolicySection title="4. Orders & payment">
        <p>
          An order is confirmed when you receive an order confirmation
          communication after successful payment. Payment processing is handled
          by <strong>Razorpay</strong>; we do not store full card details on our
          servers.
        </p>
        <p>
          If payment succeeds but fulfilment is not possible, we will contact you
          and arrange a refund in accordance with our{" "}
          <Link
            href="/policies/returns"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Returns &amp; Refunds Policy
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection title="5. Shipping, delivery & risk">
        <p>
          Delivery terms are described in our{" "}
          <Link
            href="/policies/shipping"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Shipping Policy
          </Link>
          . Title and risk of loss pass to you upon delivery to the address you
          provide, except where applicable law provides otherwise.
        </p>
      </PolicySection>

      <PolicySection title="6. Cancellations & returns">
        <p>
          See our{" "}
          <Link
            href="/policies/cancellation"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Cancellation Policy
          </Link>{" "}
          and{" "}
          <Link
            href="/policies/returns"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Returns &amp; Refunds Policy
          </Link>{" "}
          for eligible windows and procedures. Religious or fragile items may
          have additional handling requirements stated at purchase.
        </p>
        {/* OWNER CONFIRMATION: exact return window in days */}
      </PolicySection>

      <PolicySection title="7. Acceptable use">
        <PolicyList
          items={[
            "You may not misuse the site, attempt unauthorised access, or scrape data in violation of applicable law.",
            "You may not resell products in a manner that misrepresents our brand or product authenticity.",
            "We may suspend access where we reasonably believe terms or law are violated.",
          ]}
        />
      </PolicySection>

      <PolicySection title="8. Limitation of liability">
        <p>
          To the fullest extent permitted by law, we are not liable for indirect,
          incidental, or consequential damages arising from use of the site or
          products. Our aggregate liability for a given order is limited to the
          amount you paid for that order, except where liability cannot be
          limited under Indian consumer protection law.
        </p>
      </PolicySection>

      <PolicySection title="9. Governing law & disputes">
        <p>
          These terms are governed by the laws of India. Courts at{" "}
          {BUSINESS.city}, {BUSINESS.state} shall have jurisdiction, subject to
          your statutory rights. For grievances, see our{" "}
          <Link
            href="/contact"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Contact
          </Link>{" "}
          page.
        </p>
      </PolicySection>

      <PolicySection title="10. Contact">
        <p>
          Call / WhatsApp {BUSINESS.phoneDisplay} · {BUSINESS.workingHours}
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}