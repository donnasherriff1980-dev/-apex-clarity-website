import React from "react";
import SEO from "@/components/common/SEO";
import HeroSection from "../components/home/HeroSection";
import ProblemSection from "../components/home/ProblemSection";
import OperationalControlSection from "../components/home/OperationalControlSection";
import FounderSection from "../components/home/FounderSection";
import LucyCompactSection from "../components/home/LucyCompactSection";
import FaqSection from "../components/home/FaqSection";
import CTASection from "../components/home/CTASection";

// Seven blocks, hero to final CTA. The product journey, the industries grid
// and the scripted Lucy conversation remain on their own pages.
export default function Home() {
  return (
    <>
      <SEO
        description="Kenvio gives UK contractors one operational view of the work, the people, the approvals and the evidence: jobs, workforce, H&S controls, RAMS, permits, documents and the commercial record in one system, with founder-led onboarding."
        path="/"
      />
      <HeroSection />
      <ProblemSection />
      <OperationalControlSection />
      <FounderSection />
      <LucyCompactSection />
      <FaqSection />
      <CTASection />
    </>
  );
}
