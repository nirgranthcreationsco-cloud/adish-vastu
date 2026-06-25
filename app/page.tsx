"use client";

import AuthenticityGuaranteeSection from "@/app/components/authenticity";
import CoursesSection from "@/app/components/course";
import FinalCTASection from "@/app/components/final";
import FloatingCart from "@/app/components/floatingcart";
import HeroSection from "@/app/components/herosection";
import RemediesSection from "@/app/components/remedies";
import ServicesSection from "@/app/components/services";
import TransformationStories from "@/app/components/transformation";
import WhyOneMasterSection from "@/app/components/whyus";

export default function Page() {
  return (
    <main className="bg-orange-50 pt-8">
      <HeroSection />
      <WhyOneMasterSection />
      <ServicesSection />
      <CoursesSection />
      <RemediesSection />
      <AuthenticityGuaranteeSection />
      <TransformationStories />
      <FinalCTASection />
      <FloatingCart />
    </main>
  );
}
