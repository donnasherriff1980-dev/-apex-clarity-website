import { Home, Wrench, HardHat, Building2, Leaf, Users } from "lucide-react";

/**
 * Shared sector catalogue. Consumed by the home IndustriesSection and by
 * the /industries page, so the two cannot drift.
 *
 * Regulatory references describe the regimes these contractors report into
 * and the evidence those regimes ask them to produce. Kenvio holds and
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
        "Multiple trades sequenced across one property, one programme",
        "Named responsibility for each measure and each visit",
        "PAS 2035 / PAS 2030, TrustMark and funder evidence per property",
        "Resident safety controls within Awaab's Law timescales",
      ],
    evidence: [
        "Every property a job, every job linked to its site and programme",
        "Competence evidence by role and licence before work is assigned",
        "Property file assembled from live records for funder and TrustMark audit",
        "Toolbox talks and permit hand-back recorded against the property",
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
        "Gas, electrical, ventilation and water hygiene jobs tracked to completion",
        "Proving who was competent to do which task",
        "BS 7671 and ACOP L8 documentation per site",
        "Permits for hot works, confined space and isolation",
      ],
    evidence: [
        "Jobs, actions and hand-over held against each site",
        "Gas Safe, NICEIC/NAPIT and F-Gas requirements defined per role",
        "Controlled documents with superseded-version warnings",
        "Permit templates, COSHH assessments and emergency arrangements per site",
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
        "Subcontractor work packages coordinated across the programme",
        "CDM 2015 duty-holder responsibilities allocated and evidenced",
        "Building Safety Act golden-thread expectations",
        "Subcontractor RAMS, RIDDOR and incident controls",
      ],
    evidence: [
        "Subcontractor records, actions and approvals in one place",
        "Competence and appointment records by duty holder",
        "Approvals queue across all submitted records",
        "RAMS review status and incident evidence held against the job",
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
        "Planned and reactive works across a portfolio of sites",
        "Engineers in the field owning their own actions",
        "Statutory inspection records and client evidence on demand",
        "Permits raised by engineers in the field",
      ],
    evidence: [
        "Planned and reactive jobs with actions tracked to close",
        "Competence expectations per engineering role",
        "Bulk import for existing back catalogues, evidence per asset",
        "Permits issued, extended and handed back",
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
        "Installation jobs delivered inside funded retrofit programmes",
        "MCS and installer accreditation evidence per operative",
        "Funder and PAS 2035 documentation per installation",
        "Electrical and roof-access risk on every job",
      ],
    evidence: [
        "Installation jobs with documents held against the site",
        "Accreditation and competence evidence surfaced before assignment",
        "Method statements per installation type, approved and versioned",
        "Risk assessments from a reusable hazard library, emergency arrangements per site",
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
        "Small teams running the same standards as large ones",
        "Named, competent people behind every submitted record",
        "Pre-qualification packs and principal contractor audits at short notice",
        "RAMS and toolbox talks expected on every contract",
      ],
    evidence: [
        "Jobs and actions kept current so nothing is rebuilt for an audit",
        "Competence evidence gaps surfaced early",
        "Pre-qualification evidence assembled from live records",
        "RAMS, toolbox talk records and governance overview of what is outstanding",
      ],
    accent: "from-blue-500 to-indigo-500",
  },
];
