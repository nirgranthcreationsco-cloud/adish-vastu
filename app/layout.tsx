import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Plus_Jakarta_Sans } from "next/font/google";
import { BUSINESS } from "./data/business";
import LocaleProvider from "./components/localeprovider";
import SiteFooter from "./components/sitefooter";
import SiteHeader from "./components/siteheader";
import { CartProvider } from "./context/cartcontext";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const notoDevanagari = Noto_Sans_Devanagari({
  variable: "--font-hindi",
  subsets: ["devanagari"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: `${BUSINESS.brandName} | Physical Vastu & Religious Products`,
    template: `%s | ${BUSINESS.brandName}`,
  },
  description:
    "Shop physical Vastu products, religious articles, gemstones, stone bracelets, and statues. Transparent INR pricing, secure Razorpay checkout, and pan-India shipping.",
  keywords: [
    "Vastu products",
    "religious articles",
    "gemstones",
    "stone bracelets",
    "Vastu statues",
    "buy Vastu remedies online",
    "Jain Vastu Solutions",
  ],
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: `${BUSINESS.brandName} | Physical Products Store`,
    description:
      "Authentic physical Vastu and religious products with clear pricing and secure online checkout.",
    url: "https://vastuacademy.com",
    siteName: BUSINESS.brandName,
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://vastuacademy.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="locale-en">
      <body
        className={`${plusJakarta.variable} ${notoDevanagari.variable} antialiased bg-[#FFFCFA] text-stone-900`}
      >
        <LocaleProvider>
          <CartProvider>
            <SiteHeader />
            {children}
            <SiteFooter />
          </CartProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
