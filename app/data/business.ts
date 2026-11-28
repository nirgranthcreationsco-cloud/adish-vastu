/**
 * Business identity for Jain Vastu Solutions.
 * Values below are taken from the existing site footer/contact UI.
 * OWNER CONFIRMATION REQUIRED before Razorpay / legal go-live:
 * - Full registered legal name
 * - Complete registered address + PIN
 * - Verified support phone & email
 * - GSTIN (if applicable)
 * - Grievance officer name/email (if required)
 */
export const BUSINESS = {
  brandName: "Jain Vastu Solutions",
  legalName: "Jain Vastu Solutions", // confirm registered entity name
  tagline: "Authentic physical Vastu & religious products",
  email: "support@adishacademy.in",
  phoneDisplay: "+91 98765 43210",
  phoneE164: "919876543210",
  addressLine: "Ahmedabad, India",
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India",
  workingHours: "Mon–Sat, 10:00 AM – 6:00 PM IST",
  currency: "INR",
  // Placeholder flags — do not invent GSTIN / officer details
  gstin: null as string | null,
  grievanceOfficer: null as string | null,
  needsOwnerConfirmation: [
    "Registered legal business name",
    "Full business / warehouse shipping address with PIN code",
    "Verified customer support phone number",
    "Verified customer support email",
    "GSTIN (if registered under GST)",
    "Grievance officer name & contact (where legally required)",
    "Actual shipping timelines and return window in days",
  ],
} as const;

export const STORE_CATEGORIES = [
  {
    id: "vastu-remedies",
    catalogCategory: "Vastu Remedies",
    title: "Vastu Products",
    description: "Physical Vastu remedies and arrangement articles for homes and workplaces.",
    href: "/shop?category=Vastu%20Remedies",
    image: "/categories/vastu-remedies.jpg",
  },
  {
    id: "gem-stone",
    catalogCategory: "Gem Stone",
    title: "Gemstones",
    description: "Natural gemstones and mineral products from our physical inventory.",
    href: "/shop?category=Gem%20Stone",
    image: "/categories/gem-stone.jpg",
  },
  {
    id: "stone-bracelets",
    catalogCategory: "Stone Bracelets",
    title: "Stone Bracelets",
    description: "Physical stone bracelet accessories from our catalogue.",
    href: "/shop?category=Stone%20Bracelets",
    image: "/categories/stone-bracelets.jpg",
  },
  {
    id: "vastu-statue",
    catalogCategory: "Vastu Statue",
    title: "Religious & Vastu Statues",
    description: "Physical statues and related religious articles.",
    href: "/shop?category=Vastu%20Statue",
    image: "/categories/vastu-statues.jpg",
  },
] as const;

/**
 * Drive folder names → catalog category.
 * Live Drive uses typo "Stone Barcelet" — must map to Stone Bracelets.
 */
export function normalizeCategoryName(name: string): string {
  const compact = name
    .toLowerCase()
    .trim()
    .replace(/[-_]+/g, " ")
    .replace(/\s+/g, " ");
  const nospace = compact.replace(/\s+/g, "");

  // Bracelet (incl. Drive typo: Barcelet / Braclet)
  if (
    nospace.includes("bracelet") ||
    nospace.includes("barcelet") ||
    nospace.includes("braclet") ||
    nospace.includes("bead")
  ) {
    return "Stone Bracelets";
  }
  if (nospace.includes("statue") || nospace.includes("murti") || nospace.includes("idol")) {
    return "Vastu Statue";
  }
  if (nospace.includes("gem")) {
    return "Gem Stone";
  }
  if (nospace.includes("remedy") || nospace.includes("yantra") || nospace === "vasturemedies") {
    return "Vastu Remedies";
  }

  const match = STORE_CATEGORIES.find(
    (c) =>
      c.catalogCategory.toLowerCase() === compact ||
      c.title.toLowerCase() === compact ||
      c.id === compact.replace(/\s+/g, "-")
  );
  return match?.catalogCategory ?? name.trim();
}

const CATEGORY_IMAGE_BY_CANONICAL: Record<string, string> = {
  "Gem Stone": "/categories/gem-stone.jpg",
  "Stone Bracelets": "/categories/stone-bracelets.jpg",
  "Vastu Remedies": "/categories/vastu-remedies.jpg",
  "Vastu Statue": "/categories/vastu-statues.jpg",
};

/** Resolve a category cover image from Drive/catalog folder name */
export function getCategoryImage(name: string): string {
  const canonical = normalizeCategoryName(name);
  return (
    CATEGORY_IMAGE_BY_CANONICAL[canonical] ??
    "/categories/vastu-remedies.jpg"
  );
}
