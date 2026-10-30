import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";

// Operator: a sole trader. Kenvio is not a limited company. Do not add a company
// number, a registered office or a home address here. The public business address
// is still to be confirmed (see docs/security-and-privacy-review.md).
const OPERATOR = "Donna Sherriff trading as Kenvio";
const PRIVACY_EMAIL = "info@kenvio.co.uk";
const LAST_UPDATED = "30 October 2026";

const SECTIONS = [
  {
    title: "1. Who we are",
    body: [
      `This website is operated by ${OPERATOR}. Kenvio is a sole trader business and is not a limited company.`,
      `${OPERATOR} is the controller of the personal data described in this policy. You can contact us about it at ${PRIVACY_EMAIL}.`,
      "This policy covers personal data you give us through this website: enquiries, demo requests and basic technical data. Kenvio software holds personal data for customers. In that case the customer is normally the controller, and Kenvio acts as processor under a written agreement. See our Security & Data Protection page.",
    ],
  },
  {
    title: "2. What we collect",
    body: [
      "Enquiries and demo requests: your name, company, work email, phone number (optional), role, contractor type, number of live projects, the challenge you describe, your preferred demo day and time, and any message you send.",
      "H&S support enquiries: in addition, the approximate size of your organisation, the number of active sites or projects, how H&S is currently handled, and the support you need.",
      "For every form: the page you submitted it from, whether you consented, and when.",
      "Technical data: when you visit this website, our hosting provider (Base44) and our font provider (Google Fonts) receive standard technical information, such as your IP address and browser type, to deliver the website and keep it running.",
      "Your preferences: your cookie choice and your Day/Night display setting, stored in your browser.",
    ],
  },
  {
    title: "3. How we use it, and our lawful bases",
    body: [
      "To respond to your enquiry, arrange and run a demo, and discuss which plan or scope of support suits you: because you asked us to take these steps before entering into a contract, and because of our legitimate interest in responding to business enquiries.",
      "To follow up on an enquiry you have started: our legitimate interest in following up a business enquiry you made.",
      "To keep this website secure and working: our legitimate interest in running a secure website.",
      "We do not sell personal data. We do not make decisions about you based solely on automated processing.",
    ],
  },
  {
    title: "4. Who we share it with",
    body: [
      "Base44, which hosts this website, stores form submissions and delivers the website to your browser. Base44 processes this data on our behalf.",
      "Base44's email service, which sends us an internal notification email when a form is submitted.",
      "Google Fonts, which provides the typeface this website uses. Your browser requests the font files from Google, which receives your IP address as part of that request.",
      "Professional advisers, and authorities where the law requires it.",
      "Where Kenvio processes customer records, the customer's agreement with us sets out our subprocessors. See our Security & Data Protection page.",
      "We only share what each recipient needs, and our service providers may only use your data on our instructions.",
    ],
  },
  {
    title: "5. International transfers",
    body: [
      "Some of our service providers may process personal data outside the United Kingdom. We have not yet confirmed the processing location for every provider.",
      "If you would like to know where your personal data is processed and what safeguards apply, contact us and we will confirm this in writing. Where personal data is transferred outside the UK, we will make sure the safeguards UK data protection law requires are in place.",
    ],
  },
  {
    title: "6. How long we keep it",
    body: [
      "Enquiry and demo request records: we keep them only for as long as we need them to respond to you and follow up on your enquiry. We review these records regularly and delete those we no longer need.",
      "Customer contract and invoice records: for the length of the relationship, and for the periods that tax and accounting law requires.",
    ],
  },
  {
    title: "7. Cookies and browser storage",
    body: [
      "We store a small number of items in your browser, all of them essential: your cookie choice, your display preference, and the settings the website needs. We do not use analytics or advertising cookies.",
      "See our Cookie Policy for details and for how to change your choice.",
    ],
  },
  {
    title: "8. Your rights",
    body: [
      "You have the right to ask for a copy of your personal data, to have it corrected or erased, to restrict or object to how we use it, and to have it transferred to you or another organisation.",
      "You can object to direct marketing at any time, and we will stop.",
      "Where we rely on your consent, you can withdraw it at any time. This does not affect anything we did before you withdrew it.",
      `To exercise any of these rights, contact us at ${PRIVACY_EMAIL}. We will respond within one month.`,
    ],
  },
  {
    title: "9. Complaints",
    body: [
      "If you are unhappy with how we have handled your personal data, please contact us first so we can try to put it right.",
      "You also have the right to complain to the Information Commissioner's Office (ICO), the UK supervisory authority for data protection: ico.org.uk, or 0303 123 1113.",
    ],
  },
  {
    title: "10. Security",
    body: [
      "We use appropriate technical and organisational measures to protect personal data against unauthorised access, loss, destruction or damage. Our Security & Data Protection page describes what is in place and what we have not yet done.",
    ],
  },
  {
    title: "11. Changes to this policy",
    body: [
      `We may update this policy from time to time. This version was last updated on ${LAST_UPDATED}.`,
    ],
  },
];

export default function Privacy() {
  return (
    <>
      <SEO title="Privacy Policy" description="How Kenvio collects, uses and protects your personal data." path="/privacy" />
      <section className="pt-32 pb-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <h1 className="text-4xl font-black text-white mb-4">Privacy Policy</h1>
          <p className="text-white/40">Last updated: {LAST_UPDATED}</p>
        </motion.div></div>
      </section>
      <section className="py-20 bg-surface">
        <div className="max-w-4xl mx-auto px-6">
          <div className="bg-surface-raised rounded-3xl p-8 md:p-12 border border-hairline/10 shadow-sm space-y-10">
            {SECTIONS.map(s => (
              <div key={s.title}>
                <h2 className="text-xl font-bold text-ink mb-3">{s.title}</h2>
                <div className="space-y-3">
                  {s.body.map((p) => (
                    <p key={p} className="text-ink-secondary leading-relaxed">{p}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
