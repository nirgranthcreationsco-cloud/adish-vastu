/**
 * Jain Vastu Solutions — small business contact (owner-confirmed).
 * Phone-only support. No public business email.
 */
export const BUSINESS = {
  brandName: "Jain Vastu Solutions",
  legalName: "Jain Vastu Solutions",
  tagline: "Authentic physical Vastu & religious products",
  email: null as string | null,
  phoneDisplay: "+91 81036 38945",
  phoneE164: "918103638945",
  whatsappUrl: "https://wa.me/918103638945",
  addressLine: "Ahmedabad, India",
  city: "Ahmedabad",
  state: "Gujarat",
  country: "India",
  workingHours: "Mon–Sat, 10:00 AM – 6:00 PM IST",
  currency: "INR",
  gstin: null as string | null,
  grievanceOfficer: null as string | null,
} as const;

export const STORE_CATEGORIES = [
  {
    id: "vastu-remedies",
    catalogCategory: "Vastu Remedies",
    title: "Vastu Products",
    description: "Physical Vastu remedies and arrangement articles for homes and workplaces.",
    href: "/shop?category=Vastu%20Remedies",
  },
  {
    id: "gem-stone",
    catalogCategory: "Gem Stone",
    title: "Gemstones",
    description: "Natural gemstones and mineral products from our physical inventory.",
    href: "/shop?category=Gem%20Stone",
  },
  {
    id: "stone-bracelets",
    catalogCategory: "Stone Bracelets",
    title: "Stone Bracelets",
    description: "Physical stone bracelet accessories from our catalogue.",
    href: "/shop?category=Stone%20Bracelets",
  },
  {
    id: "vastu-statue",
    catalogCategory: "Vastu Statue",
    title: "Religious & Vastu Statues",
    description: "Physical statues and related religious articles.",
    href: "/shop?category=Vastu%20Statue",
  },
] as const;
