import {
  ShieldCheck, ClipboardList, Users2, FileText, Search,
  AlertOctagon, GraduationCap, Repeat,
} from "lucide-react";

/**
 * Single source of truth for the Apex H&S Support layer.
 *
 * POSITIONING — Apex Clarity is primarily a B2B SaaS operational control and
 * compliance platform (see src/lib/pricing.js and /pricing). H&S support is a
 * SEPARATE, OPTIONAL, COMPLEMENTARY service for customers who also need
 * competent people alongside the software. It is not the headline offer, and
 * this file must never read as though the company is principally an
 * outsourced H&S department.
 *
 * TRUTHFULNESS RULES — these are not stylistic preferences:
 *
 *  1. Never claim guaranteed compliance, full compliance, certification,
 *     accreditation or chartered status. Duties under HSWA 1974 ss.2-3 are
 *     non-delegable: the client remains the duty holder whatever they buy.
 *  2. Never advertise unlimited consultancy, calls, documents or support.
 *  3. Never state a fee covers specialist/high-risk work — see
 *     SPECIALIST_EXCLUSIONS below, which must stay visible on the page.
 *  4. Never describe Lucy as giving health & safety advice.
 *  5. Anything the platform does not ship today belongs in ROADMAP, not in
 *     PLATFORM_LIVE. Verified against the platform entity schemas: there is
 *     no Incident, near-miss, inspection-capture, training-matrix, KPI or
 *     reporting entity, so those are consultancy-delivered or roadmap.
 *  6. Never imply the software subscription includes support, advisory hours,
 *     document authoring, site visits or management of a customer's H&S
 *     function. It does not, and /pricing says so explicitly.
 *  7. No published consultancy prices, no packages, no allowances and no
 *     onboarding fee. Support is scoped and quoted per customer.
 */

export const POSITIONING = {
  core: "Competent H&S support, alongside the platform — for the parts you cannot cover in-house.",
  supporting:
    "Apex Clarity is the software your teams run the work on. H&S support is a separate, optional service for organisations that also want experienced health and safety people alongside it — scoped to what you actually need, not sold as a package you have to take.",
};

export const PROBLEMS = [
  "No competent H&S resource in-house, and no budget for a full-time manager",
  "RAMS written under time pressure, then never reviewed again",
  "A principal contractor or client audit lands with two days' notice",
  "Contractor insurance and accreditations tracked from memory",
  "Toolbox talks delivered, but the evidence sits in a van",
  "Certificates and competence cards expiring without anyone noticing",
];

export const SERVICES = [
  {
    slug: "outsourced-hs",
    icon: ShieldCheck,
    title: "Outsourced Health & Safety Support",
    summary:
      "Practical retained H&S support for SMEs without a full-time internal H&S manager — someone to call, and someone keeping things moving between calls.",
    delivery: "consultancy",
  },
  {
    slug: "rams",
    icon: ClipboardList,
    title: "Risk Assessments, RAMS & Safe Systems of Work",
    summary:
      "General workplace risk assessments, method statements, combined RAMS packs and practical work controls — written for the job, not copied from a template pack.",
    delivery: "hybrid",
  },
  {
    slug: "contractor-compliance",
    icon: Users2,
    title: "Contractor Compliance",
    summary:
      "Contractor onboarding, competence and evidence checks, insurance and accreditation tracking, and a record you can show a client.",
    delivery: "hybrid",
  },
  {
    slug: "policies",
    icon: FileText,
    title: "Policies & Management Systems",
    summary:
      "H&S policies, arrangements, procedures and action plans — kept current, and written so your teams will actually use them.",
    delivery: "consultancy",
  },
  {
    slug: "inspections",
    icon: Search,
    title: "Inspections & Compliance Reviews",
    summary:
      "Site and workplace inspections, compliance reviews and corrective-action tracking with management follow-up. These are reviews, not certification audits.",
    delivery: "consultancy",
  },
  {
    slug: "incidents",
    icon: AlertOctagon,
    title: "Incident & Near-Miss Support",
    summary:
      "Support with recording and investigating incidents and near misses, agreeing corrective actions and capturing lessons learned.",
    delivery: "consultancy",
  },
  {
    slug: "training-competence",
    icon: GraduationCap,
    title: "Training & Competency Management",
    summary:
      "Training matrices, expiry monitoring, toolbox-talk programmes and competence records — so you know who is qualified to do what, today.",
    delivery: "hybrid",
  },
  {
    slug: "managed-compliance",
    icon: Repeat,
    title: "Managed Compliance",
    summary:
      "Ongoing monthly support combining document review, action tracking, compliance oversight, reporting and scheduled management meetings.",
    delivery: "hybrid",
  },
];

export const DELIVERY_LABELS = {
  consultancy: "Delivered by our consultants",
  hybrid: "Our consultants, recorded in Apex Clarity",
};

/**
 * The three-way capability split. This is the page's central honesty
 * mechanism — do not merge these columns, and do not promote a ROADMAP item
 * into PLATFORM_LIVE without checking the platform entity schemas first.
 */
export const PLATFORM_LIVE = [
  "Risk assessments — general and COSHH, from a reusable hazard library",
  "Method statements and combined RAMS packs",
  "Permits and permit templates, including hand-back with completion state",
  "Toolbox talks, delivery sessions and attendance records",
  "Competence requirements and evidence records with expiry dates",
  "Emergency arrangements with review and test dates",
  "Document control with expiry dates and bulk import",
  "Organisations, sites, projects, jobs and actions",
  "Approvals queue with recorded decision reasons",
  "A governance overview of everything outstanding",
];

export const CONSULTANCY_DELIVERED = [
  "Site inspections and compliance reviews",
  "Incident and near-miss investigation support",
  "Policy and management-system authoring",
  "Contractor onboarding, chasing and verification",
  "Training matrices and programme management",
  "Monthly management reporting, compiled by your consultant from your Apex records",
  "Advisory calls and management meetings",
];

/**
 * INTERNAL ONLY — DO NOT RENDER THIS LIST ON A PUBLIC PAGE.
 *
 * The three-way truth model is retained deliberately: (1) platform
 * capability live today, (2) consultant-delivered workflow, (3) future
 * platform capability. Category 3 exists so that copy anywhere on the site
 * can be checked against it — it is NOT sales content. A primary sales page
 * should not carry a list of product deficiencies, which is exactly what
 * rendering this array produced.
 *
 * Where a category-3 item is relevant to a visitor, say what our consultants
 * do about it today (FUTURE_CAPABILITY_NOTE below), never that the platform
 * already does it and never as an apology.
 *
 * Canonical product roadmap status for these items lives in the platform
 * repository's operating model, not here. Do not let this array drift into
 * a second, competing roadmap.
 */
export const ROADMAP = [
  "Incident and near-miss recording in the platform",
  "Mobile inspection capture",
  "Built-in KPI dashboards",
  "Contractor self-service portal",
];

/**
 * Public-facing replacement for the old "On the roadmap / Not available
 * today" box. Truthful — it does not claim any unbuilt capability exists —
 * but framed around what the client gets rather than what the software
 * lacks.
 */
export const FUTURE_CAPABILITY_NOTE =
  "Where a workflow is not yet automated within Apex Clarity, our consultants manage the agreed process with you and maintain the compliance evidence that comes out of it. As the platform develops, more of these administrative workflows move into Apex — and your records come with them.";

export const SECTORS = [
  "Construction & trades",
  "Property maintenance",
  "Social-housing & domestic retrofit",
  "Renewables",
  "M&E / building services",
  "Facilities & contractor-heavy operations",
];

export const WHY_APEX = [
  {
    title: "We work in your sectors, not all of them",
    detail:
      "Construction, trades, property maintenance, retrofit, renewables, M&E and facilities. We are not generalist H&S consultants who will learn your industry on your time.",
  },
  {
    title: "The work lands in your platform, not our filing system",
    detail:
      "Support is delivered into your own Apex Clarity tenant, so the RAMS, permits, competence records and evidence stay yours. The software subscription and the support engagement are priced separately — if you stop the support, you keep the records and the platform.",
  },
  {
    title: "We tell you what we are not",
    detail:
      "Where work needs specialist competence, we say so and bring in or refer you to an appropriately competent specialist. You will always know who is doing what.",
  },
  {
    title: "Defined scope, not vague retainers",
    detail:
      "Every engagement is written down: what we will do, how often, and what sits outside it. You will know before you sign what is included and what is charged separately. We do not sell unlimited support.",
  },
];

/**
 * How H&S support is sold. There are deliberately NO published prices, no
 * packages, no monthly allowances and no onboarding fee here — support is
 * scoped and quoted per customer after a conversation. Do not reintroduce a
 * price grid: it was removed because it presented the company as an
 * outsourced H&S department rather than a software business.
 */
export const ENGAGEMENT_MODEL = [
  {
    title: "1. A conversation",
    detail:
      "We talk through your sites, your team, your contracts and where compliance actually hurts. No charge, and no obligation to buy anything.",
  },
  {
    title: "2. A written scope",
    detail:
      "We set out exactly what we would take on, how often, and what we would not. Anything requiring specialist competence is named, not glossed over.",
  },
  {
    title: "3. A quote against that scope",
    detail:
      "Priced against the work described, not an open-ended retainer. Work beyond the agreed scope is quoted and agreed before it starts.",
  },
  {
    title: "4. Delivered into your platform",
    detail:
      "The documents, records and evidence that come out of the engagement live in your own Apex Clarity tenant from day one.",
  },
];

export const SUPPORT_NOTES = [
  "Health & Safety support and consultancy services are not included in the software subscription. They are quoted separately.",
  "Support is scoped to your operation after a discovery conversation. We do not publish fixed consultancy prices, because the honest answer depends on what you actually need.",
  "We do not offer unlimited consultancy, unlimited support calls or unlimited documents. Defined scope is how we keep the service deliverable and the price honest.",
  "Site visits are as agreed in your scope and within our stated travel zone. Visits outside that zone, or beyond the agreed scope, are charged separately.",
  "Nothing in a support engagement transfers legal responsibility for health and safety, which remains with the duty holder.",
];

/**
 * Must stay visible on the page. Framed as professional integrity rather
 * than limitation — but the substance is a hard competence boundary.
 */
export const SPECIALIST_EXCLUSIONS = [
  "Complex fire engineering",
  "Asbestos surveying and removal advice",
  "Confined-space specialist design",
  "COMAH and major-hazard sites",
  "Specialist occupational hygiene monitoring",
  "Structural and temporary works design",
  "LOLER thorough examination",
  "Legionella risk assessment",
  "DSEAR / explosive atmospheres",
];

export const COMPETENCE_STATEMENT =
  "Apex Clarity provides health, safety and compliance support within the competence of our team. We do not provide specialist advice outside that competence: where work requires it, we will tell you and either bring in or refer you to an appropriately competent specialist. We support you to meet your legal duties — we do not assume them. Under the Health and Safety at Work etc. Act 1974 the duty holder remains responsible for health and safety in their business, and nothing we provide transfers that responsibility.";
