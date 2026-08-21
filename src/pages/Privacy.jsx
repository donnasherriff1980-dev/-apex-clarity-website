import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How Apex Clarity collects, uses and protects your personal data." path="/privacy" />
      <section className="pt-32 pb-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-white/40">Last updated: June 2026</p>
        </motion.div></div>
      </section>
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-raised rounded-3xl p-8 md:p-12 border border-hairline/10 shadow-sm space-y-10">
            {[
              { title: "1. Information We Collect", body: "We collect information you provide directly to us, including your name, email address, phone number, company name, and any other information you provide when filling out forms on our website or contacting us." },
              { title: "2. How We Use Your Information", body: "We use the information we collect to respond to your enquiries, provide our platform and consultancy services, send you relevant communications (with your consent), and improve our services." },
              { title: "3. Data Protection", body: "We implement appropriate technical and organisational measures to protect your personal data against unauthorised processing, accidental loss, destruction or damage." },
              { title: "4. Your Rights", body: "You have the right to access, correct or delete your personal data. You can also object to processing, request data portability and withdraw consent at any time by contacting info@apexclarity.co.uk." },
              { title: "5. Contact", body: "For privacy-related queries, contact us at info@apexclarity.co.uk." },
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