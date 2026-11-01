import {
  ShieldCheck, ClipboardCheck, ClipboardList, FileCheck2, Megaphone,
  GraduationCap, Siren, FolderOpen, Building2, LayoutDashboard,
} from "lucide-react";

/**
 * Single source of truth for the solutions catalogue.
 *
 * Every entry here describes a capability that exists in the Apex Clarity
 * platform today. Nothing in this file may describe a module, workflow or
 * outcome the platform does not currently ship — the listing page, the
 * detail pages, the navbar, the footer and the contact form all read from
 * this one array, so an untrue claim added here would propagate sitewide.
 *
 * Deliberately absent (not built, therefore not sold): Gantt scheduling,
 * P&L / budget-vs-actual tracking, predictive analytics, KPI dashboard
 * builders, and any quantified performance outcome.
 */
export const SOLUTIONS = [
  {
    slug: "health-safety",
    seoTitle: "Health and Safety Controls for Contractors",
    seoDescription: "Risk assessments, COSHH, method statements, toolbox talks and emergency arrangements on one governed lifecycle, with review dates tracked.",
    h1: "Health and safety controls on one governed lifecycle",
    title: "Health & Safety Governance",
    navDesc: "The H&S control centre and its governance overview",
    icon: ShieldCheck,
    color: "text-blue-400",
    bg: "bg-blue-400/10",
    accent: "from-blue-500 to-cyan-500",
    summary:
      "One control centre across risk assessments, RAMS, permits, toolbox talks, competence, COSHH and emergency arrangements — with a governance overview showing what is outstanding.",
    benefits: [
      "H&S control centre across every module",
      "Governance overview of drafts, reviews and overdue items",
      "Outstanding-item counts per module",
      "Permission-gated to what each user may see",
      "Superseded linked-record warnings",
      "Read-only administrative view for managers",
    ],
    problem:
      "H&S evidence usually lives in several places at once — a RAMS folder on the server, permits in a book on site, toolbox talk sheets in a van, competence certificates in someone's inbox. Nobody can answer \"what is outstanding right now?\" without ringing round.",
    solution:
      "Kenvio gives Health & Safety a single control centre. Every module reports into it, and a governance overview lists what is sitting in draft, what is waiting on review, what has been approved but not yet issued, and what is overdue. It is deliberately presented as an administrative view — not a compliance score — because the judgement stays with your competent person.",
    whatChanges:
      "The question \"where are we?\" stops being a phone-round. It becomes a screen your H&S lead, contracts manager and client-facing staff are all looking at.",
  },
  {
    slug: "risk-assessments",
    seoTitle: "Risk Assessments and COSHH Software",
    seoDescription: "General and COSHH risk assessments built from a reusable hazard library and moved through draft, review, approval and issue.",
    h1: "Risk assessments and COSHH on one controlled lifecycle",
    title: "Risk Assessments & COSHH",
    navDesc: "General and COSHH assessments, plus the hazard library",
    icon: ClipboardCheck,
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
    accent: "from-emerald-500 to-green-500",
    summary:
      "General and COSHH risk assessments on a controlled lifecycle, built from a reusable hazard library and a substance register.",
    benefits: [
      "General risk assessments",
      "COSHH assessments and substance register",
      "Reusable hazard library",
      "Draft → review → approve → issue lifecycle",
      "Reject or request changes with a recorded reason",
      "Review dates tracked and surfaced when overdue",
    ],
    problem:
      "Risk assessments get copied from the last job, edited in a hurry, and issued without anyone recording who checked them. When a client or the HSE asks who approved a specific version and when, the answer is often a file modification date.",
    solution:
      "Assessments are built from a reusable hazard library so common hazards are described consistently, then moved through a controlled lifecycle. Reviews, approvals, rejections and requested changes are all recorded against the record with the reason attached. COSHH assessments run on the same lifecycle and link to a substance register.",
    whatChanges:
      "Every issued assessment carries its own history: who wrote it, who reviewed it, who approved it, and when it is next due for review.",
    lucy: true,
  },
  {
    slug: "rams",
    seoTitle: "RAMS Management Software for Contractors",
    seoDescription: "Draft, review, approve and supersede RAMS and method statements, with warnings when linked records change. Lucy drafts; people approve.",
    h1: "RAMS management software with controlled revisions",
    title: "Method Statements & RAMS",
    navDesc: "Method statements and combined RAMS packs",
    icon: ClipboardList,
    color: "text-teal-400",
    bg: "bg-teal-400/10",
    accent: "from-teal-500 to-emerald-500",
    summary:
      "Step-by-step method statements and combined RAMS packs on the same controlled lifecycle as your risk assessments.",
    benefits: [
      "Step-by-step method statements",
      "Combined RAMS pack view",
      "Draft → review → approve → issue lifecycle",
      "Reviewer comments that do not change the stage",
      "Warnings when a linked record is superseded",
      "Supersession rather than silent overwrite",
    ],
    problem:
      "RAMS is the document a principal contractor or registered provider asks for first, and the one most likely to be out of date. Version confusion is normal: a site team works to a method statement that was superseded weeks ago and nobody notices until an audit.",
    solution:
      "Method statements are authored step by step and combine with their risk assessments into a RAMS pack. When a linked record moves to superseded or archived, the pack raises a warning rather than quietly carrying on. Reviewers can leave comments without advancing the lifecycle stage, so a query does not force a rejection.",
    whatChanges:
      "The pack a site team is working to, and the pack a client is shown, are provably the same current version.",
    lucy: true,
  },
  {
    slug: "permits",
    seoTitle: "Permit to Work Software for Contractors",
    seoDescription: "Issue, extend, suspend, cancel and hand back permits, with a recorded reason at each step and the completion state captured at hand-back.",
    h1: "Permit to work software that records extension, suspension and hand-back",
    title: "Permits & Control of Work",
    navDesc: "Issued permits, templates, and hand-back",
    icon: FileCheck2,
    color: "text-amber-400",
    bg: "bg-amber-400/10",
    accent: "from-amber-500 to-orange-500",
    summary:
      "Permit templates and issued permits through their full life — issue, extension, suspension, cancellation and hand-back.",
    benefits: [
      "Permit-type template catalogue",
      "Issue, extend, suspend and cancel with recorded reasons",
      "Hand-back capturing completion state",
      "Outstanding matters recorded at hand-back",
      "Expiring permits surfaced before they lapse",
      "Permits awaiting hand-back tracked",
    ],
    problem:
      "Paper permits close the wrong way. A permit is issued, the work overruns, someone extends it verbally, and the hand-back never gets recorded — so nobody can say what state the area was left in or what was still outstanding.",
    solution:
      "Permits are raised from a template catalogue and moved through their real lifecycle. Extensions, suspensions and cancellations each require a reason. Hand-back captures the completion state of the work and any outstanding matters, so the permit closes with a record rather than a signature on a page in a van.",
    whatChanges:
      "Permits that are about to expire, and permits still awaiting hand-back, are visible before they become a finding.",
  },
  {
    slug: "toolbox-talks",
    seoTitle: "Toolbox Talk Records and Attendance",
    seoDescription: "Reusable talk content, scheduled sessions and attendance recorded per session, with corrections kept on the record.",
    h1: "Toolbox talks with attendance recorded per session",
    title: "Toolbox Talks & Briefings",
    navDesc: "Talk content, sessions and attendance",
    icon: Megaphone,
    color: "text-violet-400",
    bg: "bg-violet-400/10",
    accent: "from-violet-500 to-purple-500",
    summary:
      "Talk content, scheduled delivery sessions and recorded attendance — including corrections with a recorded reason.",
    benefits: [
      "Reusable toolbox talk content",
      "Scheduled delivery sessions",
      "Attendance recorded per session",
      "Session notes and questions raised",
      "Corrections require a recorded reason",
      "Sessions delivered without attendance are flagged",
    ],
    problem:
      "The talk almost always happens. The evidence that it happened is a photograph of a signing sheet, and it goes missing exactly when a client audit asks for it.",
    solution:
      "Talk content is written once and reused. Each delivery is a session with its own attendance record, notes and any questions raised. If attendance has to be corrected afterwards, the correction requires a reason and stays on the record rather than replacing it.",
    whatChanges:
      "Delivered sessions with no attendance recorded are surfaced for confirmation instead of quietly counting as done.",
  },
  {
    slug: "competence",
    seoTitle: "Competence Management Software for Contractors",
    seoDescription: "Expected evidence per role, qualifications and licences with expiry dates, and gaps surfaced for a competent person to review.",
    h1: "Competence management software: expiry and gaps in one list",
    title: "Workforce Competence",
    navDesc: "Expected evidence, qualifications and licences by role",
    icon: GraduationCap,
    color: "text-orange-400",
    bg: "bg-orange-400/10",
    accent: "from-orange-500 to-amber-500",
    summary:
      "The evidence, qualifications and licences expected for each role — and where that evidence is missing.",
    benefits: [
      "Expected evidence defined per role",
      "Qualifications and licences recorded",
      "Evidence gaps surfaced for review",
      "Review and approval with recorded reasons",
      "Comments to the author without changing stage",
      "Presented as evidence, not a competency verdict",
    ],
    problem:
      "Competence is usually a folder of scanned cards. Whether the right people hold the right tickets for the work actually booked next week is a question somebody answers from memory.",
    solution:
      "Competence requirements define what evidence a role is expected to hold. The platform surfaces where that expected evidence is missing so it can be confirmed. It deliberately stops short of declaring anyone competent — that is a decision for your competent person, and the platform records it as an evidence gap, not a verdict.",
    whatChanges:
      "Evidence gaps are visible as a list to work through, rather than discovered during a site audit.",
  },
  {
    slug: "emergency-arrangements",
    seoTitle: "Emergency Arrangements Software",
    seoDescription: "Muster points, first aid, fire and rescue arrangements, with review and test dates tracked against each one.",
    h1: "Emergency arrangements with review and test dates tracked",
    title: "Emergency Arrangements",
    navDesc: "Muster points, first aid, fire and rescue",
    icon: Siren,
    color: "text-red-400",
    bg: "bg-red-400/10",
    accent: "from-red-500 to-orange-500",
    summary:
      "Muster points, first aid, fire and rescue arrangements — with review and test dates tracked.",
    benefits: [
      "Muster points and assembly arrangements",
      "First aid provision recorded",
      "Fire and rescue arrangements",
      "Review dates tracked per arrangement",
      "Test dates tracked and surfaced when overdue",
      "Same review and approval lifecycle as RAMS",
    ],
    problem:
      "Emergency arrangements are written once at mobilisation and rarely looked at again. The date they were last reviewed or tested is often nobody's job to track.",
    solution:
      "Arrangements for muster, first aid, fire and rescue are held as records on the same controlled lifecycle as the rest of your H&S documentation, with review and test dates tracked against each one.",
    whatChanges:
      "Arrangements whose review or test has fallen overdue appear on the governance overview instead of going unnoticed.",
  },
  {
    slug: "documents",
    seoTitle: "Compliance Document Control and Evidence",
    seoDescription: "Controlled documents held against the organisation, site or job they belong to, with expiry dates and bulk import for existing records.",
    h1: "Compliance document control with expiry dates",
    title: "Document Control & Evidence",
    navDesc: "Controlled documents and bulk import",
    icon: FolderOpen,
    color: "text-cyan-400",
    bg: "bg-cyan-400/10",
    accent: "from-cyan-500 to-blue-500",
    summary:
      "Controlled documents held against the organisations, sites and jobs they belong to — with bulk import for onboarding.",
    benefits: [
      "Documents held against organisation, site and job",
      "Document type classification",
      "Search across controlled documents",
      "Bulk import for onboarding existing records",
      "Permission-gated access",
      "Evidence linked to the work it relates to",
    ],
    problem:
      "Most contractors already have the evidence. It is spread across a server, a shared drive, several inboxes and a filing cabinet, and moving it into a system is the thing that stops people ever starting.",
    solution:
      "Documents are held against the organisation, site or job they belong to and classified by type, so evidence sits with the work rather than in a parallel folder structure. A bulk import path exists specifically so an existing back catalogue can be brought in rather than re-created.",
    whatChanges:
      "Evidence is retrieved by asking about a job or a site, rather than by remembering where somebody filed it.",
  },
  {
    slug: "projects",
    seoTitle: "Projects, Sites and Jobs for Contractors",
    seoDescription: "Organisations, sites, projects, jobs and actions in one structure, so every RAMS, permit and toolbox talk attaches to the work it was raised for.",
    h1: "Projects, sites and jobs in one structure",
    title: "Projects, Jobs & Sites",
    navDesc: "Organisations, sites, jobs and actions",
    icon: Building2,
    color: "text-indigo-400",
    bg: "bg-indigo-400/10",
    accent: "from-indigo-500 to-blue-500",
    summary:
      "The operational spine — organisations, sites, projects and jobs — that every record attaches to — jobs, actions, documents, permits and H&S controls alike.",
    benefits: [
      "Organisation and site records",
      "Projects and jobs",
      "Actions assigned and tracked to close",
      "Evidence linked to the job it belongs to",
      "Multi-site visibility",
      "Permission-gated per user",
    ],
    problem:
      "H&S systems that sit apart from the work create double entry. The site exists in one system, the RAMS for that site in another, and keeping them aligned becomes somebody's weekly admin job.",
    solution:
      "Organisations, sites, projects and jobs are first-class records in the same platform as the H&S evidence, so a RAMS pack, a permit or a toolbox talk session attaches directly to the work it was raised for. Actions are assigned against that work and tracked through to close.",
    whatChanges:
      "There is one place to ask what is happening on a site and one place to see the evidence behind it.",
  },
  {
    slug: "audits",
    seoTitle: "Audit Readiness and Approvals for Contractors",
    seoDescription: "One approvals queue with recorded decision reasons, and a governance overview of everything outstanding. It is not a compliance score.",
    h1: "Approvals and governance in one place",
    title: "Audit Readiness & Approvals",
    navDesc: "Approvals, issue, supersession and audit evidence",
    icon: LayoutDashboard,
    color: "text-pink-400",
    bg: "bg-pink-400/10",
    accent: "from-pink-500 to-rose-500",
    summary:
      "The approvals queue and the governance overview that together show whether your evidence would stand up to inspection.",
    benefits: [
      "Central approvals queue",
      "Approved-awaiting-issue tracked separately",
      "Overdue reviews listed",
      "Expiring permits and pending hand-backs",
      "Missing toolbox talk attendance",
      "Competence evidence gaps",
    ],
    problem:
      "Audit preparation is usually a fortnight of assembling evidence that already existed, because nothing was recorded in a form that could be handed over directly.",
    solution:
      "Approvals run through one queue, and the governance overview lists what is outstanding across every module — drafts, items awaiting review, items approved but not yet issued, overdue reviews, expiring permits, permits awaiting hand-back, missing attendance and competence evidence gaps. It states plainly that it is not a compliance score and that every item requires human review.",
    whatChanges:
      "Audit preparation becomes reading a list that is already maintained, rather than building one from scratch.",
  },
];

export const SOLUTIONS_BY_SLUG = Object.fromEntries(SOLUTIONS.map((s) => [s.slug, s]));

/**
 * Slugs that existed on the previous version of the site and are now either
 * renamed or withdrawn. Kept so inbound links and previously-indexed URLs
 * redirect rather than 404. `crm` and `reporting` had no equivalent shipped
 * module, so they land on the nearest truthful page.
 */
export const LEGACY_SOLUTION_SLUGS = {
  risk: "risk-assessments",
  "health-and-safety": "health-safety",
  crm: "projects",
  reporting: "audits",
  "ai-automation": "health-safety",
  compliance: "audits",
};