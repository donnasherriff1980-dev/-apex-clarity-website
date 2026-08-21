import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";

export default function CookiePolicy() {
  return (
    <>
      <SEO title="Cookie Policy" description="How Apex Clarity uses cookies on this website." path="/cookie-policy" />
      <section className="pt-32 pb-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-black text-white mb-4">Cookie Policy</h1>
          <p className="text-white/40">Last updated: June 2026</p>
        </motion.div></div>
      </section>
      <section className="py-20 bg-brand-light">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-border shadow-sm space-y-10">
            {[
              { title: "1. What Are Cookies", body: "Cookies are small text files stored on your device when you visit a website. They help the site function and let us understand how it's used." },
              { title: "2. Essential Cookies", body: "These are required for the website to work correctly (for example, remembering your cookie preference) and cannot be switched off." },
              { title: "3. Analytics Cookies", body: "With your consent, we use analytics to understand how visitors use this site, so we can improve it. These are only set if you choose “Accept All” in the cookie banner." },
              { title: "4. Managing Your Preference", body: "You can change your cookie preference at any time by clearing your browser's local storage for this site, which will show the cookie banner again on your next visit." },
              { title: "5. Contact", body: "For questions about this policy, contact us at info@apexclarity.co.uk." },
            ].map(s => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-brand-dark mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
