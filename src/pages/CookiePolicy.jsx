import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";

export default function CookiePolicy() {
  return (
    <>
      <SEO title="Cookie Policy" description="How Kenvio uses cookies on this website." path="/cookie-policy" />
      <section className="pt-32 pb-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-black text-white mb-4">Cookie Policy</h1>
          <p className="text-white/40">Last updated: September 2026</p>
        </motion.div></div>
      </section>
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-raised rounded-3xl p-8 md:p-12 border border-hairline/10 shadow-sm space-y-10">
            {/* EMAIL — HOLD: info@apexclarity.co.uk stays until the Kenvio mailbox is confirmed active. */}
            {[
              { title: "1. What Are Cookies", body: "Cookies are small text files stored on your device when you visit a website. Similar technologies, such as your browser's local storage, work in the same way, and this policy covers both." },
              { title: "2. Essential Storage", body: "We store a small number of items the website needs to work: your cookie preference, your Day/Night display setting, and the settings the website uses to connect to the platform that hosts it. These do not track you and cannot be switched off." },
              { title: "3. Analytics and Advertising", body: "Kenvio does not currently use analytics tracking, and we do not set analytics or advertising cookies on this website. If that changes we will update this policy and ask for your consent through the cookie banner before any such cookie is set." },
              { title: "4. Managing Your Preference", body: "You can change your cookie preference at any time by clearing your browser's local storage for this site, which will show the cookie banner again on your next visit." },
              { title: "5. Contact", body: "For questions about this policy, contact us at info@apexclarity.co.uk." },
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
