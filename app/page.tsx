"use client";

import AuthenticityGuaranteeSection from "@/app/components/authenticity";
import FinalCTASection from "@/app/components/final";
import FloatingCart from "@/app/components/floatingcart";
import HeroSection from "@/app/components/herosection";
import RemediesSection from "@/app/components/remedies";
import ServicesSection from "@/app/components/services";
import TransformationStories from "@/app/components/transformation";
import WhyOneMasterSection from "@/app/components/whyus";
import { Suspense, useEffect } from "react";

export default function Page() {
  // Ensure hash links (e.g. /#remedies) scroll correctly after navigation
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (el) {
        requestAnimationFrame(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        });
      }
    };

    scrollToHash();
    window.addEventListener("hashchange", scrollToHash);
    return () => window.removeEventListener("hashchange", scrollToHash);
  }, []);

  return (
    <main className="bg-orange-50 pt-8">
      <HeroSection />
      {/* Products first — client priority for shop-ready landing */}
      <RemediesSection />
      <WhyOneMasterSection />
      <ServicesSection />
      <AuthenticityGuaranteeSection />
      <TransformationStories />
      <Suspense fallback={null}>
        <FinalCTASection />
      </Suspense>
      <FloatingCart />
    </main>
  );
}
