import React from "react";
import { motion } from "framer-motion";
import SEO from "@/components/common/SEO";

// Every statement on this page is limited to what has been evidenced. Base44's own
// certifications are NOT stated here, because they have not been verified from an
// authoritative Base44 source. Kenvio holds no certifications. See
// docs/security-and-privacy-review.md for the evidence behind each statement.
const CONTACT_EMAIL = "info@kenvio.co.uk";
const LAST_UPDATED = "30 October 2026";

const SECTIONS = [
  {
    title: "1. Our approach",
    body: [
      "Kenvio is an operational control and compliance platform for UK contractors. It is run by Donna Sherriff trading as Kenvio.",
      "Access to records is checked on the server every time, not only in the browser. We are a small, founder-led business, so this page says what is in place and what is not.",
    ],
  },
  {
    title: "2. Infrastructure",
    body: [
      "Kenvio is built on infrastructure provided by Base44, the application platform it runs on. Base44 provides hosting, the database, file storage and sign-in.",
      "For Base44's own security and compliance documentation, ask us and we will share the current material.",
    ],
  },
  {
    title: "3. Sign-in and multi-factor authentication",
    body: [
      "Each user has their own account. Signing in requires a one-time code sent to the user's email address. This is a form of multi-factor authentication.",
      "Invitations are single-use and expire after 24 hours. New users complete multi-factor setup before they can use Kenvio. Platform administration actions require a session that has completed multi-factor authentication.",
    ],
  },
  {
    title: "4. Access control and permissions",
    body: [
      "Every request is checked on the server against the user's role and permissions. Users see only the records their role allows.",
    ],
  },
  {
    title: "5. Separation between customers",
    body: [
      "Each customer's records belong to its own organisation. Our server refuses requests for records that belong to another organisation.",
    ],
  },
  {
    title: "6. Encryption",
    body: [
      "Connections to Kenvio use HTTPS. Encryption of stored data is provided by our infrastructure provider. Ask us for the current details and we will share them.",
    ],
  },
  {
    title: "7. Audit history",
    body: [
      "Changes to key records are recorded in an audit history that shows what changed, who made the change and when.",
    ],
  },
  {
    title: "8. Data protection (UK GDPR)",
    body: [
      "For information you give us through this website, Donna Sherriff trading as Kenvio is the controller. Our Privacy Policy explains what we do with it.",
      "Where a customer stores its records in Kenvio, the customer is normally the controller and Kenvio acts as processor on the customer's instructions. That relationship is governed by a written data processing agreement, which we provide before a customer starts using Kenvio.",
    ],
  },
  {
    title: "9. Where your data is stored, and international transfers",
    body: [
      "We have not yet confirmed where customer data is physically stored. Some of our service providers may process personal data outside the UK.",
      `Ask us for the current processing locations and transfer safeguards, and we will confirm them in writing: ${CONTACT_EMAIL}.`,
    ],
  },
  {
    title: "10. Subprocessors",
    body: [
      "Subprocessors are the companies that process personal data for us. We will give customers advance notice of any new subprocessor that processes customer data, as the data processing agreement sets out.",
  ],
  },
  {
    title: "11. Lucy, our AI assistant",
    body: [
      "Lucy is Kenvio's governed AI assistant. She helps people find information in their own Kenvio records, and prepare first drafts such as a risk assessment or a method statement from the organisation's hazard library.",
      "Lucy does not approve, certify, sign off or issue anything. A competent person makes those decisions, and the record shows who made them.",
      "Lucy has no tools and no direct access to Kenvio records. The information she uses to answer a question is retrieved by Kenvio's server, for the signed-in user only, through Kenvio's existing record functions.",
      "Which AI model provider processes these requests, where it processes them, and how long conversation content is kept are being confirmed with our infrastructure provider. We will update this page when they are confirmed.",
    ],
  },
  {
    title: "12. Testing and certification",
    body: [
      "Kenvio does not hold ISO 27001, SOC 2 or Cyber Essentials certification.",
      "We intend to pursue Cyber Essentials. We have not yet commissioned an independent penetration test or an independent security review. We will update this page when either happens.",
    ],
  },
  {
    title: "13. Incident response",
    body: [
      "If we become aware of a breach of personal data we hold, we will notify affected customers without undue delay, as UK data protection law requires. We will report to the Information Commissioner's Office where the law requires it.",
    ],
  },
  {
    title: "14. Your data",
    body: [
      "You can ask us for a copy of your personal data, to correct it, or to delete it. When a customer agreement ends, we return or delete the customer's data as that agreement sets out.",
    ],
  },
  {
    title: "15. Security enquiries",
    body: [
      `To report a security concern, or to ask a security question, email ${CONTACT_EMAIL} with "Security" in the subject line.`,
    ],
  },
];

const SUBPROCESSORS = [
  { name: "Base44", role: "Hosting, database, file storage, sign-in and application functions. Also delivers this website and sends website notification emails.", location: "To be confirmed" },
  { name: "Resend", role: "Transactional email for Kenvio platform users, such as sign-in codes, invitations and notifications.", location: "To be confirmed" },
  { name: "Google Fonts", role: "Delivers the typefaces used on this website. Receives visitors' IP addresses when fonts load.", location: "To be confirmed" },
  { name: "AI model provider", role: "Processes requests made to Lucy.", location: "Confirmation required from Base44" },
];

export default function Security() {
  return (
    <>
      <SEO
        title="Security & Data Protection"
        description="How Kenvio protects customer information, what is in place, what has not yet been done, and how to contact us about security."
        path="/security"
      />
      <section className="pt-32 pb-16 bg-brand-dark">
        <div className="max-w-4xl mx-auto px-6"><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">Security &amp; Data Protection</span>
          <h1 className="text-4xl font-black text-white mb-4">How we protect your information</h1>
          <p className="text-white/50 text-lg">What is in place today, what we have not yet done, and who to contact. We would rather tell you plainly than overstate it.</p>
          <p className="text-white/40 mt-4">Last updated: {LAST_UPDATED}</p>
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
                {s.title.startsWith("10.") && (
                  <div className="overflow-x-auto mt-4">
                    <table className="w-full text-left text-sm">
                      <thead>
                        <tr className="border-b border-hairline/15 text-ink">
                          <th className="py-2 pr-4 font-semibold">Provider</th>
                          <th className="py-2 pr-4 font-semibold">What it does for Kenvio</th>
                          <th className="py-2 font-semibold">Processing location</th>
                        </tr>
                      </thead>
                      <tbody>
                        {SUBPROCESSORS.map((p) => (
                          <tr key={p.name} className="border-b border-hairline/10 align-top text-ink-secondary">
                            <td className="py-3 pr-4 font-medium text-ink">{p.name}</td>
                            <td className="py-3 pr-4">{p.role}</td>
                            <td className="py-3">{p.location}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
