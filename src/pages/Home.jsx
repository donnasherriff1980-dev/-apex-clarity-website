import React from "react";
import SEO from "@/components/common/SEO";
import HeroSection from "../components/home/HeroSection";
import ProblemSection from "../components/home/ProblemSection";
import OperationalControlSection from "../components/home/OperationalControlSection";
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
        description="The operational control and compliance platform for UK contractors. Projects, sites and jobs, actions, H&S governance, RAMS, permits, competence, documents, contractor compliance and a full audit trail — on one controlled lifecycle."
        path="/"
      />
      <HeroSection />
      <ProblemSection />
      <OperationalControlSection />
      <MeetLucySection />
      <PlatformModules />
      <ProductJourney />
      <WhySection />
      <IndustriesSection />
      <CTASection />
    </>
  );
}
