import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import LocaleProvider from "./components/localeprovider";
import PromoBanner from "./components/promobanner";
import { CartProvider } from "./context/cartcontext";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Jain Vastu Solution",
    template: "%s | Jain Vastu Solution"
  },
  description: "Spiritual Vastu Consultation, Courses & Energized Vastu Remedies by Master Aadish Jain. Align your home energy for wellness and prosperity.",
  keywords: ["Vastu remedies", "Vastu academy", "Aadish Jain vastu expert", "buy vastu yantra", "gem stones", "stone bracelets", "spiritual consultation"],
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
    description: "Vastu Consultation, Courses & Energized Vastu Remedies by Master Aadish Jain.",
    url: "https://vastuacademy.com",
    siteName: "Jain Vastu Solution",
    locale: "en_IN",
    type: "website",
  },
  alternates: {
    canonical: "https://vastuacademy.com",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-orange-50`}
      >
        <LocaleProvider>
          {/* PROMOTIONAL BANNER */}
          <PromoBanner />
          
          {/* GLOBAL CART STATE */}
          <CartProvider>
            {children}
          </CartProvider>
        </LocaleProvider>
      </body>
    </html>
  );
}
