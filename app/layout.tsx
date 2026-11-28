import type { Metadata } from "next";
import { Noto_Sans_Devanagari, Plus_Jakarta_Sans } from "next/font/google";
import LanguageSwitcher from "./components/languageswitcher";
import LocaleProvider from "./components/localeprovider";
import PromoBanner from "./components/promobanner";
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
    default: "Jain Vastu Solution",
    template: "%s | Jain Vastu Solution",
  },
  description:
    "Buy authentic physical Vastu products, gemstones, stone bracelets, and statues from Jain Vastu Solutions. Secure online checkout for physical goods only.",
  keywords: [
    "Vastu remedies",
    "buy vastu products",
    "Aadish Jain",
    "buy vastu yantra",
    "gem stones",
    "stone bracelets",
    "vastu statues",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    title: "Jain Vastu Solution",
    description:
      "Physical Vastu products, gemstones, bracelets & statues — secure online shopping.",
    url: "https://vastuacademy.com",
    siteName: "Jain Vastu Solution",
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
        className={`${plusJakarta.variable} ${notoDevanagari.variable} antialiased bg-orange-50`}
      >
        <LocaleProvider>
          <PromoBanner />
          {/* Global language control — left so it never fights the cart button */}
          <div className="fixed top-12 left-3 z-[60] md:top-14 md:left-6">
            <LanguageSwitcher />
          </div>
          <CartProvider>{children}</CartProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
