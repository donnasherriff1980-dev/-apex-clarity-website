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
        description="Apex Clarity is the intelligent operating system built for construction, retrofit, facilities management and property services businesses, with Lucy — your embedded AI assistant — watching over compliance every day."
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
