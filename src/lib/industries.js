import { Home, Wrench, HardHat, Building2, Leaf, Users } from "lucide-react";

/**
 * Shared sector catalogue. Consumed by the home IndustriesSection and by
 * the /industries page, so the two cannot drift.
 *
 * Regulatory references describe the regimes these contractors report into
 * and the evidence those regimes ask them to produce. Apex Clarity holds and
 * governs that evidence — it does not certify compliance with any of them.
 */
export const INDUSTRIES = [
  {
    icon: Home,
    label: "Social Housing Retrofit",
    slug: "social-housing-retrofit",
    path: "/industries#social-housing-retrofit",
    context: "Working for registered providers under PAS 2035, funded through SHDF or ECO4, and reporting into the Consumer Standards.",
    challenges: [
      "PAS 2035 / PAS 2030 evidence per property",
      "TrustMark and funder audit trails",
      "Resident safety evidence under Awaab's Law timescales",
      "Multiple trades across one property, one file",
    ],
    evidence: [
      "RAMS packs held per property and job",
      "Toolbox talk attendance per delivery session",
      "Competence evidence by role and licence",
      "Permit hand-back with completion state recorded",
    ],
    accent: "from-violet-500 to-purple-500",
  },
  {
    icon: Wrench,
    label: "M&E Contractors",
    slug: "me-contractors",
    path: "/industries#me-contractors",
    context: "Gas, electrical, ventilation and water hygiene work where the qualification behind the operative matters as much as the job.",
    challenges: [
      "Gas Safe, NICEIC/NAPIT and F-Gas evidence current",
      "BS 7671 and ACOP L8 documentation per site",
      "Permits for hot works, confined space and isolation",
      "Proving who was competent to do which task",
    ],
    evidence: [
      "Competence requirements defined per role",
      "Permit templates for control-of-work",
      "COSHH assessments and substance register",
      "Emergency arrangements with test dates tracked",
    ],
    accent: "from-teal-500 to-emerald-500",
  },
  {
    icon: HardHat,
    label: "Principal Contractors",
    slug: "principal-contractors",
    path: "/industries#principal-contractors",
    context: "CDM 2015 duty holders carrying the evidence burden for everyone on site, including the supply chain.",
    challenges: [
      "CDM 2015 duty-holder documentation",
      "Building Safety Act golden-thread expectations",
      "Subcontractor RAMS arriving in every format",
      "RIDDOR and incident evidence",
    ],
    evidence: [
      "One controlled lifecycle for every RAMS pack",
      "Approvals queue across all submitted records",
      "Superseded-record warnings on linked documents",
      "Governance overview of everything outstanding",
    ],
    accent: "from-orange-500 to-amber-500",
  },
  {
    icon: Building2,
    label: "Facilities Management",
    slug: "facilities-management",
    path: "/industries#facilities-management",
    context: "Planned and reactive works across a portfolio, where each site carries its own evidence obligations.",
    challenges: [
      "Evidence spread across many sites",
      "Statutory inspection records per asset",
      "Permits raised by engineers in the field",
      "Client-facing evidence on demand",
    ],
    evidence: [
      "Documents held against site and job",
      "Permits issued, extended and handed back",
      "Actions assigned and tracked to close",
      "Bulk import for existing back catalogues",
    ],
    accent: "from-cyan-500 to-blue-500",
  },
  {
    icon: Leaf,
    label: "Renewables & Heat",
    slug: "renewables-heat",
    path: "/industries#renewables-heat",
    context: "Heat pump, solar and storage installers working under MCS and inside funded retrofit programmes.",
    challenges: [
      "MCS and installer accreditation evidence",
      "Working inside PAS 2035 retrofit programmes",
      "Electrical and roof-access risk on every job",
      "Funder evidence requirements",
    ],
    evidence: [
      "Accreditation held as competence evidence",
      "Risk assessments from a reusable hazard library",
      "Method statements per installation type",
      "Emergency arrangements per site",
    ],
    accent: "from-emerald-500 to-green-500",
  },
  {
    icon: Users,
    label: "Specialist Subcontractors",
    slug: "specialist-subcontractors",
    path: "/industries#specialist-subcontractors",
    context: "Trades whose next contract depends on passing someone else's pre-qualification and audit.",
    challenges: [
      "Pre-qualification evidence packs",
      "Principal contractor audits at short notice",
      "Small teams, same standards as large ones",
      "Evidence requested in a different format each time",
    ],
    evidence: [
      "Issued RAMS with full approval history",
      "Competence evidence gaps surfaced early",
      "Toolbox talk records per session",
      "Audit-readiness overview maintained continuously",
    ],
    accent: "from-blue-500 to-indigo-500",
  },
];
