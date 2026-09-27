import {
  LayoutGrid, ListChecks, GraduationCap, FolderOpen, ShieldCheck,
  ClipboardCheck, FileCheck2, Sparkles,
} from "lucide-react";

/**
 * The eight platform areas, given equal weight wherever they are listed
 * (home, footer, Platform page). Health & Safety is one of them.
 * Every line describes what ships today.
 */
export const PLATFORM_AREAS = [
  { slug: "projects", icon: LayoutGrid, title: "Projects, Sites & Jobs", short: "Every record knows the work it belongs to", detail: "Organisations, sites, projects and jobs in one structure, so every record knows the work it belongs to.", path: "/solutions/projects" },
  { slug: "actions", icon: ListChecks, title: "Work & Actions", short: "Owners, due dates, one view of what is outstanding", detail: "Work raised as actions with an owner and a due date, and one view of what is outstanding.", path: "/solutions/projects" },
  { slug: "competence", icon: GraduationCap, title: "Workforce & Competence", short: "Expected evidence per role, gaps surfaced", detail: "Expected evidence per role, qualifications and licences recorded, gaps surfaced for a competent person to confirm.", path: "/solutions/competence" },
  { slug: "documents", icon: FolderOpen, title: "Documents & Evidence", short: "Held against the site or job, bulk import", detail: "Controlled documents held against the organisation, site or job they belong to, with bulk import for existing records.", path: "/solutions/documents" },
  { slug: "approvals", icon: ClipboardCheck, title: "Approvals & Governance", short: "Recorded decisions, everything outstanding in one view", detail: "A central approvals queue with recorded decision reasons, and a governance overview of everything outstanding.", path: "/solutions/audits" },
  { slug: "permits", icon: FileCheck2, title: "Permits & Control of Work", short: "Issue, extend, suspend, hand back", detail: "Permits raised from templates and taken through issue, extension, suspension and hand-back with completion state recorded.", path: "/solutions/permits" },
  { slug: "hs", icon: ShieldCheck, title: "Health & Safety Controls", short: "RAMS, COSHH, toolbox talks and emergency arrangements, governed", detail: "Risk assessments, COSHH, method statements and RAMS, toolbox talks and emergency arrangements on one governed lifecycle.", path: "/solutions/health-safety" },
  { slug: "lucy", icon: Sparkles, title: "Lucy", short: "A governed assistant for drafts and structured tasks", detail: "A governed assistant that helps people prepare drafts and work through structured tasks. People review and approve.", path: "/vision" },
];
