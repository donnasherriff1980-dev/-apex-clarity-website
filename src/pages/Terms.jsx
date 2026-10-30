import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";

const OPERATOR = "Donna Sherriff trading as Kenvio";
const CONTACT_EMAIL = "info@kenvio.co.uk";
const LAST_UPDATED = "30 October 2026";

const SECTIONS = [
  {
    title: "1. Who we are",
    body: `These terms govern your use of the Kenvio website at kenvio.co.uk. They are provided by ${OPERATOR}, a sole trader business ("Kenvio", "we", "us"). You can contact us at ${CONTACT_EMAIL}.`,
  },
  {
    title: "2. Use of this website",
    body: "You may use this website for lawful purposes only. You must not attempt to gain unauthorised access to it, interfere with how it works, or use it to send unsolicited messages.",
  },
  {
    title: "3. Information on this website",
    body: "We aim to keep the information on this website accurate and up to date. Descriptions of our products are general information and do not form a contract. Prices shown are per organisation per month, plus VAT, and we confirm the exact terms in writing before you commit to anything.",
  },
  {
    title: "4. Intellectual property",
    body: `All content on this website, including text, graphics, logos and the appearance of our pages, belongs to ${OPERATOR} or its licensors. You may view and print pages for your own use. You may not copy or reuse our content without our written permission.`,
  },
  {
    title: "5. Software and services",
    body: "Use of the Kenvio software, and of any H&S support services, is governed by a separate written agreement. That agreement sets out the scope, fees, and the data-processing terms that apply to customer records. These website terms do not grant any right to use the software.",
  },
  {
    title: "6. Enquiries, demos and pilots",
    body: "Submitting an enquiry or booking a demo does not create a contract. Any demo, pilot or subscription is agreed in writing before it starts.",
  },
  {
    title: "7. No warranty",
    body: "To the extent the law allows, this website is provided as it is. We do not guarantee that it will always be available or free from errors.",
  },
  {
    title: "8. Limitation of liability",
    body: "To the extent the law allows, we are not liable for indirect or consequential loss, or for loss of profits, arising from your use of this website. Nothing in these terms limits or excludes liability for death or personal injury caused by negligence, for fraud or fraudulent misrepresentation, or for anything else that English law does not allow us to limit.",
  },
  {
    title: "9. Links to other websites",
    body: "This website may link to other websites. We are not responsible for their content or their privacy practices.",
  },
  {
    title: "10. Governing law",
    body: "These terms are governed by the law of England and Wales. The courts of England and Wales have jurisdiction over any dispute arising from them.",
  },
  {
    title: "11. Changes to these terms",
    body: `We may change these terms from time to time. This version was last updated on ${LAST_UPDATED}.`,
  },
  {
    title: "12. Privacy",
    body: "How we handle personal data is set out in our Privacy Policy and our Security & Data Protection page.",
  },
];

export default function Terms() {
  return (
    <>
      <SEO title="Terms of Service" description="The terms governing use of the Kenvio website and services." path="/terms" />
      <section className="pt-32 pb-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-black text-white mb-4">Terms of Service</h1>
          <p className="text-white/40">Last updated: {LAST_UPDATED}</p>
        </motion.div></div>
      </section>
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-raised rounded-3xl p-8 md:p-12 border border-hairline/10 shadow-sm space-y-10">
            {SECTIONS.map(s => (
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
