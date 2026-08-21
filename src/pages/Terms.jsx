import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description="The terms governing use of the Apex Clarity website and services." path="/terms" />
      <section className="pt-32 pb-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-white/40">Last updated: June 2026</p>
        </motion.div></div>
      </section>
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-raised rounded-3xl p-8 md:p-12 border border-hairline/10 shadow-sm space-y-10">
            {[
              { title: "1. Services", body: "Apex Clarity provides a health, safety and compliance evidence platform, together with its implementation and support. Current functionality includes risk assessments and COSHH, method statements and RAMS, permits and control of work, toolbox talks, workforce competence evidence, emergency arrangements, document control, and the approvals and governance views across them." },
              { title: "2. Use of Website", body: "By accessing this website, you agree to use it lawfully and in a manner consistent with these terms. You must not use the website for any unlawful purpose." },
              { title: "3. Intellectual Property", body: "All content on this website, including text, graphics, logos and software, is the property of Apex Clarity Ltd and protected by applicable intellectual property laws." },
              { title: "4. Limitation of Liability", body: "Apex Clarity shall not be liable for any indirect, incidental or consequential damages arising from the use of this website or our services, except where required by law." },
              { title: "5. Contact", body: "For questions about these terms, contact us at info@apexclarity.co.uk." },
            ].map(s => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-ink mb-3">{s.title}</h2>
                <p className="text-ink-secondary leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}