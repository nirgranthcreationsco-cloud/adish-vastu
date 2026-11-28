import PolicyLayout, {
  PolicyList,
  PolicySection,
} from "@/app/components/policylayout";
import { BUSINESS } from "@/app/data/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Shipping Policy",
  description: `Shipping and delivery information for physical orders from ${BUSINESS.brandName}.`,
};

const LAST_UPDATED = "November 2025";

export default function ShippingPage() {
  return (
    <PolicyLayout
      title="Shipping Policy"
      description="How we pack and ship physical Vastu and religious products across India."
    >
      <p className="text-sm text-stone-500">Last updated: {LAST_UPDATED}</p>

      <PolicySection title="1. What we ship">
        <p>
          We ship <strong>physical products only</strong> purchased through
          this website. We do not ship digital downloads, consultation
          appointments, or advisory services.
        </p>
      </PolicySection>

      <PolicySection title="2. Delivery areas">
        <p>
          We currently ship to serviceable PIN codes across India through
          recognised courier partners. If your location is not serviceable at
          checkout, please contact{" "}
          <a
            href={`mailto:${BUSINESS.email}`}
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            {BUSINESS.email}
          </a>{" "}
          before placing an order.
        </p>
        {/* OWNER CONFIRMATION: remote area surcharges or exclusions */}
      </PolicySection>

      <PolicySection title="3. Order processing">
        <p>
          After payment confirmation, orders are typically processed within{" "}
          <strong>1–3 business days</strong>. Processing time may be longer
          during festivals, sale periods, or for made-to-order or customised
          physical items if clearly marked on the product page. Actual timelines
          depend on inventory, packaging requirements, and courier pickup
          schedules.
        </p>
      </PolicySection>

      <PolicySection title="4. Transit times">
        <p>
          Estimated delivery after dispatch is commonly <strong>3–10 business
          days</strong> for metro and tier-1 cities, and may be longer for
          remote areas. These ranges are indicative only; weather, holidays,
          strikes, or carrier delays can extend delivery beyond estimates.
        </p>
        {/* OWNER CONFIRMATION: carrier names and published SLA ranges */}
        <p>
          Tracking information (where available) is shared by email or SMS
          after dispatch.
        </p>
      </PolicySection>

      <PolicySection title="5. Shipping charges">
        <p>
          Shipping fees (if any) are shown at checkout before you pay. Free
          shipping promotions, when offered, apply only to qualifying orders as
          stated on the site.
        </p>
      </PolicySection>

      <PolicySection title="6. Packaging">
        <PolicyList
          items={[
            "Fragile items such as statues and glass elements are packed with protective material.",
            "Gemstones and bracelets are secured to reduce transit damage.",
            "Religious articles are handled respectfully; outer packaging is neutral for privacy.",
          ]}
        />
      </PolicySection>

      <PolicySection title="7. Failed delivery & address issues">
        <p>
          Please provide a complete address with PIN code and an active phone
          number. If a courier cannot deliver due to incorrect address,
          repeated unavailability, or refusal, the shipment may return to us.
          Re-shipping or refunds in such cases are handled per our{" "}
          <Link
            href="/policies/returns"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Returns &amp; Refunds Policy
          </Link>{" "}
          and may incur additional charges where permitted by law.
        </p>
      </PolicySection>

      <PolicySection title="8. Damaged or missing items in transit">
        <p>
          If your package arrives visibly damaged, please note it with the
          delivery executive where possible and contact us within 48 hours of
          delivery with photos of the outer packaging and product. We will
          work with the carrier and you toward a repair, replacement, or refund
          as appropriate.
        </p>
      </PolicySection>

      <PolicySection title="9. Contact">
        <p>
          Shipping questions: {BUSINESS.email} · {BUSINESS.phoneDisplay} ·{" "}
          {BUSINESS.workingHours}. See also{" "}
          <Link
            href="/contact"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Contact us
          </Link>
          .
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}