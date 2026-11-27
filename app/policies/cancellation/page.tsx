import PolicyLayout, {
  PolicyList,
  PolicySection,
} from "@/app/components/policylayout";
import { BUSINESS } from "@/app/data/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Cancellation Policy",
  description: `Order cancellation terms for physical product purchases at ${BUSINESS.brandName}.`,
};

const LAST_UPDATED = "November 2025";

export default function CancellationPage() {
  return (
    <PolicyLayout
      title="Cancellation Policy"
      description="When and how you may cancel an order for physical products before or after dispatch."
    >
      <p className="text-sm text-stone-500">Last updated: {LAST_UPDATED}</p>

      <PolicySection title="1. Physical products only">
        <p>
          This policy applies to orders for tangible goods shipped to your
          address. We do not sell cancellable consultation slots or digital
          advisory services.
        </p>
      </PolicySection>

      <PolicySection title="2. Cancellation before dispatch">
        <p>
          You may request cancellation after placing an order but before the
          product is handed to the courier. Requests are typically processed
          within <strong>1–3 business days</strong>. If cancellation is
          accepted before dispatch, a full refund of the product price and
          applicable shipping charge will be initiated to your original payment
          method. Bank processing times may vary.
        </p>
        <p>
          To cancel, call or WhatsApp{" "}
          <a
            href={`tel:+${BUSINESS.phoneE164}`}
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            {BUSINESS.phoneDisplay}
          </a>{" "}
          during {BUSINESS.workingHours} with your order ID.
        </p>
      </PolicySection>

      <PolicySection title="3. Cancellation after dispatch">
        <p>
          Once an order has been dispatched, cancellation at our warehouse is
          usually not possible. You may refuse delivery (where the courier
          permits) or initiate a return under our{" "}
          <Link
            href="/policies/returns"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Returns &amp; Refunds Policy
          </Link>{" "}
          if the item is eligible. Return shipping or restocking terms may
          apply unless the product is defective or incorrectly supplied.
        </p>
      </PolicySection>

      <PolicySection title="4. Cancellation by us">
        <p>
          We may cancel an order if:
        </p>
        <PolicyList
          items={[
            "The product is out of stock or cannot be sourced in reasonable time.",
            "There is a pricing or listing error.",
            "We suspect fraud or payment irregularities.",
            "Delivery is not serviceable to your PIN code.",
          ]}
        />
        <p>
          If we cancel after payment, you will receive a full refund for the
          amount charged for the cancelled item(s). We will notify you by email
          or phone.
        </p>
      </PolicySection>

      <PolicySection title="5. Partial cancellations">
        <p>
          For multi-item orders, you may request cancellation of specific line
          items before dispatch. Refunds for removed items follow the same
          timelines as full-order cancellations. Already-dispatched items are
          subject to the return policy.
        </p>
      </PolicySection>

      <PolicySection title="6. Refund timing">
        <p>
          Refunds are initiated through Razorpay to the original payment
          instrument. While we typically process refunds within{" "}
          <strong>1–3 business days</strong> of approval, the time for funds to
          appear in your account depends on banks, card networks, or UPI
          providers and may take additional business days.
        </p>
      </PolicySection>

      <PolicySection title="7. Contact">
        <p>
          Questions:{" "}
          <Link
            href="/contact"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Contact us
          </Link>{" "}
          · {BUSINESS.phoneDisplay}
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}