import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";

// LEGAL ENTITY — HOLD: fill these in once the registered company details are
// supplied. Do not substitute a guess. Until then the placeholders render as-is
// so the page cannot be mistaken for finished.
const CONTROLLER_NAME = "[Registered company name]";
const COMPANY_NUMBER = "[Company number]";
const REGISTERED_IN = "[England and Wales / Scotland / Northern Ireland]";
const REGISTERED_OFFICE = "[Registered office address]";
// EMAIL — HOLD: replace with the Kenvio privacy contact once the mailbox is
// confirmed active.
const PRIVACY_EMAIL = "[Privacy contact email]";

// ANALYTICS — this policy states that no analytics tracking runs. That is true
// because Base44 SDK analytics and the vite analyticsTracker are both switched
// off. If either is re-enabled, sections 2, 3, 6 and 7 must be updated first.

const SECTIONS = [
  {
    title: "1. Who we are",
    body: [
      `This website is operated by ${CONTROLLER_NAME}, trading as Kenvio, a company registered in ${REGISTERED_IN} under company number ${COMPANY_NUMBER}, with its registered office at ${REGISTERED_OFFICE}.`,
      `${CONTROLLER_NAME} is the controller of the personal data described in this policy. You can contact us about anything in this policy at ${PRIVACY_EMAIL}.`,
      "This policy covers personal data collected through this website — enquiries, demo requests, update sign-ups and basic website usage. Personal data held inside the Kenvio platform on behalf of a customer is governed by that customer's agreement with us, and in that context the customer is normally the controller.",
    ],
  },
  {
    title: "2. What we collect",
    body: [
      "Enquiry and demo requests: your name, company, email address, phone number (optional), industry, the solution you are interested in, the type of enquiry and your message.",
      "H&S support enquiries: in addition, the approximate size of your organisation, the number of active sites or projects, how H&S is currently resourced and the support areas you select.",
      "Update sign-ups: your email address.",
      "For every form: the page you submitted it from, whether you gave consent, and when.",
      "Technical data: when your browser loads this website, our hosting provider necessarily receives standard technical information such as your IP address and browser type, in order to deliver the page and keep the service secure. We do not currently use analytics tracking.",
      "Your preferences: your cookie choice and your Day/Night display setting, stored in your browser.",
    ],
  },
  {
    title: "3. How we use it, and our lawful bases",
    body: [
      "To respond to your enquiry, arrange and run a demo, and discuss which plan or scope of support fits — because you asked us to (steps prior to entering into a contract) and our legitimate interest in responding to business enquiries.",
      "To follow up on that enquiry — our legitimate interest in developing a business relationship you have started. You can ask us to stop at any time.",
      "To send you occasional product updates — your consent, given when you sign up. You can withdraw it at any time using the unsubscribe link or by contacting us.",
      "To keep the website secure and working, and to keep records of consent — our legitimate interest in operating a secure website, and our legal obligations.",
      "We do not sell your personal data, and we do not make decisions about you based solely on automated processing.",
    ],
  },
  {
    title: "4. Who we share it with",
    body: [
      "Base44, the platform that hosts this website, stores form submissions and delivers the website to your browser. Base44 acts as our processor and uses its own infrastructure sub-processors.",
      "Google Fonts, which serves the typeface this website uses. Your browser requests the font files from Google, which receives your IP address as part of that request.",
      "Our email provider, when we correspond with you.",
      "Professional advisers, and authorities where the law requires it.",
      "We only share what each recipient needs, and our processors may only use your data on our instructions.",
    ],
  },
  {
    title: "5. International transfers",
    body: [
      "Some of our providers process data outside the UK, for example in the United States. Where they do, we rely on UK adequacy regulations (including the UK Extension to the EU-US Data Privacy Framework where the recipient is certified) or on the ICO's International Data Transfer Agreement or Addendum, so that your data remains protected to a UK standard.",
    ],
  },
  {
    title: "6. How long we keep it",
    body: [
      "Enquiries that do not lead to a contract: up to 12 months from our last contact with you.",
      "Customer and contract records: for the duration of the contract and six years after it ends, to meet legal and accounting obligations.",
      "Marketing and update contacts: until you unsubscribe or withdraw your consent. We keep a minimal record of the unsubscribe so we do not contact you again.",
      "We delete or anonymise data at the end of these periods.",
    ],
  },
  {
    title: "7. Cookies and browser storage",
    body: [
      "We store a small number of items in your browser, all of them essential — your cookie choice, your display preference and the settings this website needs to connect to its platform. We do not currently use analytics or advertising cookies, or any other analytics tracking.",
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
      "We use appropriate technical and organisational measures to protect your personal data against unauthorised access, accidental loss, destruction or damage. No website can be guaranteed completely secure, but we limit access to the people who need it.",
    ],
  },
  {
    title: "11. Changes to this policy",
    body: [
      "We may update this policy from time to time. The date at the top shows when it last changed.",
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
          <p className="text-white/40">Last updated: September 2026</p>
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
