import {
  ShieldCheck, ClipboardList, Users2, FileText, Search,
  AlertOctagon, GraduationCap, Repeat,
} from "lucide-react";

/**
 * Single source of truth for the Apex H&S Consultancy layer.
 *
 * TRUTHFULNESS RULES — these are not stylistic preferences:
 *
 *  1. Never claim guaranteed compliance, full compliance, certification,
 *     accreditation or chartered status. Duties under HSWA 1974 ss.2-3 are
 *     non-delegable: the client remains the duty holder whatever they buy.
 *  2. Never advertise unlimited consultancy, calls, documents or support.
 *  3. Never state a monthly fee covers specialist/high-risk work — see
 *     SPECIALIST_EXCLUSIONS below, which must stay visible on the page.
 *  4. Never describe Lucy as giving health & safety advice.
 *  5. Anything the platform does not ship today belongs in ROADMAP, not in
 *     PLATFORM_LIVE. Verified against the platform entity schemas: there is
 *     no Incident, near-miss, inspection-capture, training-matrix, KPI or
 *     reporting entity, so those are consultancy-delivered or roadmap.
 */

export const POSITIONING = {
  core: "Your outsourced H&S and compliance team — without the cost of a full-time department.",
  supporting:
    "Apex combines practical health, safety and operational compliance support with purpose-built compliance technology.",
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
  "Monthly management reporting and KPI packs",
  "Advisory calls and management meetings",
];

export const ROADMAP = [
  "Incident and near-miss recording in the platform",
  "Mobile inspection capture",
  "Built-in KPI dashboards",
  "Contractor self-service portal",
];

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
    title: "You get the technology as part of the service",
    detail:
      "Your RAMS, permits, competence records and evidence live in Apex Clarity from day one — not in our filing system. If you later take the platform on directly, the records are already yours.",
  },
  {
    title: "We tell you what we are not",
    detail:
      "Where work needs specialist competence, we say so and bring in or refer you to an appropriately competent specialist. You will always know who is doing what.",
  },
  {
    title: "Defined scope, not vague retainers",
    detail:
      "Every package states its allowances, review frequency and what sits outside it. You will know before you sign what is included and what is charged separately.",
  },
];

/**
 * Positioning figures, approved by the founder. Always rendered as
 * "from £X per month + VAT" and always alongside SCOPE_NOTES.
 * Essentials deliberately includes ZERO site visits — that is a margin
 * control, not an oversight. Do not add one.
 */
export const PACKAGES = [
  {
    name: "Compliance Essentials",
    from: "£395",
    onboarding: "£750",
    fits: "5–25 people, single site",
    highlights: [
      "Apex Clarity platform access (up to 10 users)",
      "H&S policy and arrangements maintained",
      "2 documents reviewed or updated per month",
      "Expiry monitoring on certificates and competence records",
      "Up to 2 hours advisory per month",
      "Quarterly 45-minute review call",
      "No site visits included",
    ],
  },
  {
    name: "Managed H&S",
    from: "£695",
    onboarding: "£1,250",
    fits: "25–75 people, multi-project",
    highlights: [
      "Apex Clarity platform access (up to 25 users)",
      "4 documents authored or reviewed per month",
      "Toolbox talk programme set up and maintained",
      "Contractor evidence — up to 5 contractors per quarter",
      "1 site visit per quarter, within our travel zone",
      "Up to 4 hours advisory per month",
      "Monthly 60-minute review call",
    ],
    featured: true,
  },
  {
    name: "H&S Partner",
    from: "£1,095",
    onboarding: "£1,950",
    fits: "75–200 people, multi-site",
    highlights: [
      "Apex Clarity platform access (up to 60 users)",
      "8 documents authored or reviewed per month",
      "1 site visit per month, within our travel zone",
      "Incident triage and corrective-action tracking",
      "Contractor compliance managed — up to 15 contractors",
      "Up to 8 hours advisory per month",
      "Monthly management report and quarterly management meeting",
    ],
  },
  {
    name: "Multi-Site / Bespoke",
    from: "£1,500",
    onboarding: "Quoted",
    fits: "Multi-site or complex operations",
    highlights: [
      "Scoped to your sites, structure and risk profile",
      "Allowances, visit frequency and reporting agreed in writing",
      "Platform user count agreed to your headcount",
      "Named lead consultant",
      "Priced on defined hours, not open-ended",
    ],
  },
];

export const SCOPE_NOTES = [
  "All prices are from, exclude VAT, and depend on scope agreed after a discovery conversation.",
  "A one-off onboarding fee applies before the monthly retainer begins. It covers your compliance baseline review, document gap analysis, platform setup and configuration, and a 90-day action plan.",
  "Allowances are per package and are not cumulative. Work beyond your allowance is quoted and agreed before it starts.",
  "Site visits are as stated per package and within our stated travel zone. Visits outside that zone, or beyond your allowance, are charged separately.",
  "We do not offer unlimited consultancy, unlimited support calls or unlimited documents. Defined allowances are how we keep the service deliverable and the price honest.",
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
