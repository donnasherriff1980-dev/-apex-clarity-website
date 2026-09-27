/**
 * Single source of truth for Apex Clarity SOFTWARE subscription pricing.
 *
 * Apex Clarity is sold primarily as a B2B SaaS operational control and
 * compliance platform. This file describes the software subscription only.
 * Health & Safety support and consultancy are a separate, optional offer —
 * see src/lib/consultancy.js and /hs-support.
 *
 * TRUTHFULNESS RULES — these are not stylistic preferences:
 *
 *  1. These are commercial working prices. Do NOT invent user limits, AI or
 *     Lucy allowances, module restrictions, storage caps or per-tier feature
 *     differences. None of those have been approved. Tiers are presented by
 *     customer scale and use case, and the exact fit is agreed in a
 *     conversation.
 *  2. Do NOT add an onboarding, setup or implementation fee. There is none
 *     at this stage.
 *  3. The subscription NEVER includes consultancy, advisory hours, document
 *     authoring, site visits or management of a customer's H&S function.
 *     SUBSCRIPTION_EXCLUSION_STATEMENT below must stay visible on the page.
 *  4. Never claim the software delivers, guarantees or certifies compliance.
 *     Under HSWA 1974 the duty holder remains responsible; software holds and
 *     governs the evidence, it does not assume the duty.
 *  5. Anything the platform does not ship today does not belong in
 *     SUBSCRIPTION_INCLUDES. That list is verified against the platform
 *     entity schemas.
 */

export const PRICING_POSITIONING = {
  core: "One platform to run the work and keep the evidence.",
  supporting:
    "Kenvio is the system your teams work in day to day — projects, sites and jobs, actions, people and competence, documents and approvals, permits and H&S controls — with the review and approval history recorded as you go. Priced as software, per organisation, per month.",
};

/**
 * Commercial working prices, approved by the founder.
 * Always rendered as "£X per month + VAT". Enterprise is deliberately
 * unpriced: it is scoped, not listed.
 */
export const TIERS = [
  {
    name: "Core",
    price: "£299",
    period: "/month",
    vat: "+ VAT",
    fits: "Smaller contractors",
    summary:
      "For contractors bringing their operations, H&S governance and compliance evidence into one system for the first time.",
    bestFor: [
      "Running a single operation or a small number of live projects",
      "Replacing spreadsheets, shared drives and paper files",
      "Getting jobs, actions, documents and controls onto one controlled lifecycle",
      "Being able to answer a client evidence request the same day",
    ],
    cta: "Book a Demo",
    ctaPath: "/contact?type=demo",
  },
  {
    name: "Growth",
    price: "£599",
    period: "/month",
    vat: "+ VAT",
    fits: "Growing contractors",
    summary:
      "For contractors running work across multiple projects, sites and crews who need visibility of what is outstanding.",
    bestFor: [
      "Several projects and sites running at once",
      "Work managed through actions and jobs rather than phone calls",
      "A defined author, reviewer and approver split across the team",
      "Regular client, principal-contractor or framework evidence requests",
    ],
    featured: true,
    featuredLabel: "Recommended for most growing contractors",
    cta: "Book a Demo",
    ctaPath: "/contact?type=demo",
  },
  {
    name: "Business",
    price: "£999",
    period: "/month",
    vat: "+ VAT",
    fits: "Established contractors",
    summary:
      "For established contractors with several teams, a supply chain to manage and regular external scrutiny.",
    bestFor: [
      "A wider operation with its own H&S and compliance ownership",
      "Formal review and approval across several teams",
      "Audits, accreditation submissions and client assurance as routine",
      "Governance oversight of everything outstanding across the business",
    ],
    cta: "Book a Demo",
    ctaPath: "/contact?type=demo",
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    period: null,
    vat: null,
    fits: "Multi-company or complex operations",
    summary:
      "For multi-company, multi-site or operationally complex organisations that need the commercial arrangement scoped around them.",
    bestFor: [
      "Multiple trading entities, divisions or regions",
      "Complex site, project and contractor structures",
      "Specific commercial, contractual or data requirements",
      "A rollout planned around your own operating model",
    ],
    cta: "Talk to us",
    ctaPath: "/contact?type=demo",
  },
];

/**
 * What the software subscription is. Verified against the platform entity
 * schemas — do not add a capability that does not ship today.
 */
export const SUBSCRIPTION_INCLUDES = [
  "Organisations, sites, projects and jobs",
  "Actions and work management, with owners and due dates",
  "Competence requirements and evidence records with expiry dates",
  "Document control with expiry dates and bulk import",
  "An approvals queue with recorded decision reasons",
  "A governance overview of everything outstanding",
  "A recorded review and approval history on governed records",
  "Permits and permit templates, including hand-back with completion state",
  "Health & Safety controls: risk assessments and COSHH from a reusable hazard library, method statements and RAMS packs, toolbox talks and attendance, emergency arrangements with review and test dates",
  "Lucy, the governed AI assistant built into the platform",
];

/**
 * Required verbatim. This sentence is the boundary between the software
 * business and the H&S support business — do not soften or reword it.
 */
export const SUBSCRIPTION_EXCLUSION_STATEMENT =
  "Health & Safety support and consultancy services are not included in the software subscription.";

export const PRICING_NOTES = [
  "Prices are per organisation, per month, and exclude VAT.",
  SUBSCRIPTION_EXCLUSION_STATEMENT,
  "Tiers are set by the scale and complexity of your operation and how you intend to use the platform. We agree the right fit with you before you commit to anything.",
  "Kenvio holds and governs your compliance evidence. It does not certify your compliance, and it does not transfer your legal duties — under the Health and Safety at Work etc. Act 1974 the duty holder remains responsible.",
  "Lucy assists your people with drafting and scope. She does not approve, certify or sign anything off, and she does not replace a competent person.",
];
