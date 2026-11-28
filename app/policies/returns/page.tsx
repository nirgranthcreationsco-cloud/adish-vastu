import PolicyLayout, {
  PolicyList,
  PolicySection,
} from "@/app/components/policylayout";
import { BUSINESS } from "@/app/data/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Returns & Refunds",
  description: `Return, replacement, and refund policy for physical products purchased from ${BUSINESS.brandName}.`,
};

const LAST_UPDATED = "November 2025";

export default function ReturnsPage() {
  return (
    <PolicyLayout
      title="Returns & Refunds"
      description="We want you to receive physical products in good condition. This policy explains when returns and refunds may apply."
    >
      <p className="text-sm text-stone-500">Last updated: {LAST_UPDATED}</p>

      <PolicySection title="1. Scope">
        <p>
          This policy applies to <strong>physical products</strong> bought on
          this website. It does not cover consultations, astrology, or other
          services (which we do not sell).
        </p>
      </PolicySection>

      <PolicySection title="2. Return window">
        <p>
          For eligible items, you may request a return or replacement within a
          reasonable period after delivery—typically within{" "}
          <strong>7 days</strong> of receiving the product unless a different
          period is stated on the product page. The exact return window may be
          updated; please check this page or your order confirmation.
        </p>
        {/* OWNER CONFIRMATION: definitive return window in days for all SKUs */}
      </PolicySection>

      <PolicySection title="3. Eligible reasons">
        <PolicyList
          items={[
            "Product received is damaged or defective (with photo evidence).",
            "Wrong product or materially incorrect specification was shipped.",
            "Product is unused, in original packaging with tags/accessories, and returnable per product-specific notes.",
          ]}
        />
      </PolicySection>

      <PolicySection title="4. Non-returnable items">
        <p>
          Certain physical goods may not be returnable once opened, used,
          consecrated at the customer's request, or customised (e.g. engraved
          name on a bracelet). Perishable or intimate-use items and products
          clearly marked &quot;non-returnable&quot; on the listing are excluded
          unless defective or required by applicable consumer law.
        </p>
        <p>
          Natural variation in colour, veining, or size within normal ranges for
          gemstones and handicrafts is not a defect.
        </p>
      </PolicySection>

      <PolicySection title="5. How to request a return">
        <p>
          Email{" "}
          <a
            href={`mailto:${BUSINESS.email}`}
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            {BUSINESS.email}
          </a>{" "}
          with your order ID, item name, reason, and clear photographs. We will
          confirm eligibility and return instructions typically within{" "}
          <strong>1–3 business days</strong>; timelines may vary by case.
        </p>
        <p>
          Unless we authorise otherwise or the product was defective/incorrect,
          return shipping costs may be borne by the customer.
        </p>
      </PolicySection>

      <PolicySection title="6. Refunds">
        <p>
          Approved refunds are processed to the original payment method via
          Razorpay / banking channels. Refunds are typically initiated within{" "}
          <strong>1–3 business days</strong> after we receive and inspect the
          returned item; crediting to your account may take additional time per
          bank or card issuer rules (often 5–10 business days).
        </p>
        <p>
          Shipping charges are refundable only where the return is due to our
          error or a defective/wrong item, unless otherwise required by law.
        </p>
      </PolicySection>

      <PolicySection title="7. Replacements">
        <p>
          Where stock permits, we may offer a replacement instead of a refund
          for damaged or incorrect items. Replacement dispatch follows similar
          timelines as standard shipping described in our{" "}
          <Link
            href="/policies/shipping"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Shipping Policy
          </Link>
          .
        </p>
      </PolicySection>

      <PolicySection title="8. Statutory rights">
        <p>
          Nothing in this policy limits your rights under the Consumer
          Protection Act, 2019 or other applicable Indian law.
        </p>
      </PolicySection>

      <PolicySection title="9. Contact & grievances">
        <p>
          {BUSINESS.email} · {BUSINESS.phoneDisplay}. Unresolved issues: see{" "}
          <Link
            href="/contact"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Grievance redressal
          </Link>
          .
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}