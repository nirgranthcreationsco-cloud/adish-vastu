import PolicyLayout, {
  PolicyList,
  PolicySection,
} from "@/app/components/policylayout";
import { BUSINESS } from "@/app/data/business";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${BUSINESS.brandName} collects, uses, and protects personal information when you shop for physical products online.`,
};

const LAST_UPDATED = "November 2025";

export default function PrivacyPage() {
  return (
    <PolicyLayout
      title="Privacy Policy"
      description="We respect your privacy. This policy explains what data we collect when you browse or buy physical products on our site, and how we use it."
    >
      <p className="text-sm text-stone-500">Last updated: {LAST_UPDATED}</p>

      <PolicySection title="1. Who we are">
        <p>
          The data controller for this website is{" "}
          <strong>{BUSINESS.legalName}</strong> ({BUSINESS.brandName}), contact
          details on our{" "}
          <Link
            href="/contact"
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            Contact
          </Link>{" "}
          page. We process personal data to sell and deliver physical products
          only—not for consultation or advisory services.
        </p>
      </PolicySection>

      <PolicySection title="2. Information we collect">
        <PolicyList
          items={[
            "Identity & contact: name, phone, email, billing and shipping address.",
            "Order data: products purchased, amounts, order and payment reference IDs.",
            "Technical data: IP address, browser type, device information, and cookies used for site functionality and analytics (where enabled).",
            "Communications: messages you send to customer support or grievance channels.",
          ]}
        />
        <p>
          We do <strong>not</strong> intentionally collect special categories of
          personal data unless you voluntarily include them in a support message.
        </p>
      </PolicySection>

      <PolicySection title="3. Payments (Razorpay)">
        <p>
          Online payments are processed by <strong>Razorpay Software Private
          Limited</strong> and its banking partners. Card, UPI, net banking, and
          wallet details are entered on Razorpay&apos;s secure payment flow.
        </p>
        <p>
          <strong>We do not store</strong> your full card number, CVV, or UPI
          PIN on our servers. We may receive limited payment metadata (e.g.
          transaction ID, payment method type, and status) to reconcile orders
          and provide support.
        </p>
        <p>
          Razorpay&apos;s handling of your data is governed by their privacy
          policy and applicable RBI / NPCI requirements. Please review Razorpay&apos;s
          documentation for further details.
        </p>
      </PolicySection>

      <PolicySection title="4. How we use your information">
        <PolicyList
          items={[
            "Process and fulfil orders for physical products.",
            "Arrange shipping and communicate delivery updates.",
            "Provide customer support, returns, cancellations, and grievance handling.",
            "Comply with legal, tax, and accounting obligations.",
            "Improve site security and prevent fraud.",
          ]}
        />
        <p>
          We do not use your purchase history to offer paid astrology or Vastu
          consulting services, as we do not offer those services.
        </p>
      </PolicySection>

      <PolicySection title="5. Sharing of data">
        <p>We may share necessary information with:</p>
        <PolicyList
          items={[
            "Courier and logistics partners for delivery.",
            "Razorpay and banks/payment networks to process payments.",
            "Technology providers that host our website, database, or email (under confidentiality obligations).",
            "Authorities when required by law or to protect our legal rights.",
          ]}
        />
        <p>We do not sell your personal information to third-party marketers.</p>
      </PolicySection>

      <PolicySection title="6. Data retention">
        <p>
          We retain order and transaction records as needed for fulfilment,
          customer support, and statutory record-keeping periods under Indian
          law. Support tickets may be archived after resolution. Retention
          periods may vary by data type and legal requirement.
        </p>
      </PolicySection>

      <PolicySection title="7. Security">
        <p>
          We use reasonable technical and organisational measures to protect
          data, including HTTPS for site traffic and access controls on our
          systems. No method of transmission over the internet is fully secure;
          please use strong passwords where accounts exist and report suspicious
          activity promptly.
        </p>
      </PolicySection>

      <PolicySection title="8. Your rights">
        <p>
          Subject to applicable Indian law (including the Digital Personal Data
          Protection Act, 2023, where applicable), you may request access,
          correction, or deletion of certain personal data, or withdraw consent
          where processing is consent-based. Call or WhatsApp us at{" "}
          <a
            href={`tel:+${BUSINESS.phoneE164}`}
            className="font-medium text-amber-800 underline-offset-2 hover:underline"
          >
            {BUSINESS.phoneDisplay}
          </a>
          . We will respond typically within 1–3 business days; complex
          requests may take longer.
        </p>
      </PolicySection>

      <PolicySection title="9. Children">
        <p>
          Our store is not directed at children under 18. We do not knowingly
          collect data from minors without parental consent.
        </p>
      </PolicySection>

      <PolicySection title="10. Changes">
        <p>
          We may update this policy to reflect legal or operational changes.
          The &quot;Last updated&quot; date will be revised when material changes
          are made.
        </p>
      </PolicySection>
    </PolicyLayout>
  );
}