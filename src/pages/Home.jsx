import React from "react";
import SEO from "@/components/common/SEO";
import HeroSection from "../components/home/HeroSection";
import ProblemSection from "../components/home/ProblemSection";
import MeetLucySection from "../components/home/MeetLucySection";
import PlatformModules from "../components/home/PlatformModules";
import ProductJourney from "../components/home/ProductJourney";
import WhySection from "../components/home/WhySection";
import IndustriesSection from "../components/home/IndustriesSection";
import CTASection from "../components/home/CTASection";

export default function Home() {
  return (
    <>
      <SEO
        title="Prove Your Compliance. Protect Your Contracts."
        description="Health, safety and compliance evidence for UK social-housing retrofit and M&E contractors. Risk assessments, RAMS, permits, toolbox talks and competence — drafted, reviewed, approved and issued on one controlled lifecycle."
        path="/"
      />
      <HeroSection />
      <ProblemSection />
      <MeetLucySection />
      <PlatformModules />
      <ProductJourney />
      <WhySection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
