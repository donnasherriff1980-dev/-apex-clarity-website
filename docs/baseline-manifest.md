# Kenvio website baseline manifest (26 October 2026)

## Provenance

- Live source: Base44 app "Kenvio", id `6a24770b8156364d64a8152b`, main branch.
- Checkpoint: `6adf56d1d3b99fcbfb6cff10`, named `kenvio-website-live-baseline-2026-10-26`, saved before any file was read. It records the state of the live app with no edits made to it during this recovery.
- Text source: 132 files, read through the Base44 API and committed as `9ac66be`. Nothing was truncated or altered.
- Binary assets: 23 files, committed as `2d36d1e`, restored from branch `claude/kenvio-launch-audit-301fd9` (commit `d07467b`). Each byte size matches the Base44 file listing. This is a size check, not a content hash, so it is weaker than a hash check. A hash check against the live app is still advisable.
- Baseline tag: `kenvio-website-live-baseline-2026-10-26` should point at `2d36d1e`. It could not be pushed from the environment (the git route returned 403 for tags), so it must be created in GitHub or locally.

## Governance files (added after the baseline)

`CLAUDE.md`, `docs/source-of-truth.md`, `docs/baseline-manifest.md`, `scripts/brand-guard.sh`, `scripts/brand-guard.baseline`, `.github/workflows/brand-guard.yml`. `docs/security-and-privacy-review.md` (30 October 2026). These are repository-only. They are not part of the Base44 app, and the mirror check ignores them.

## Old branches, preserved and not modified

| Branch | Head at recovery | Status |
| --- | --- | --- |
| `claude/apex-clarity-website-audit-tqufgo` | `06bfda8` (was `30d1b04` on 26 Oct morning) | Historical. The 06bfda8 commit (SEO Stage 1 audit) was added on 26 Oct. |
| `claude/kenvio-launch-audit-301fd9` | `d07467b` | Historical. Source of the binary restore above. |

Nothing was deleted, renamed or merged.

## Old-only changes: classification

These are files or changes in the old branches that the live app does not have.

**From `claude/kenvio-launch-audit-301fd9` (7 October work)**

| Item | Classification | Note |
| --- | --- | --- |
| Homepage conversion pass: `HeroSection`, `OperationalControlSection`, `ProblemSection`, `CTASection`, `Home.jsx`, `Navbar`, `Footer`, `SEO`, `index.html`, `Pricing.jsx` changes | Obsolete | Direction not resurrected. Live already has its own homepage, and the funnel plan supersedes this. |
| `src/components/home/FounderSection.jsx` | Still useful, reconsider later | Founder-led positioning is relevant to the pilot. Photo is a placeholder. |
| `src/components/home/FaqSection.jsx` | Still useful, reconsider later | FAQ content would need to match the locked prices and the live copy before reuse. |
| `src/components/home/LucyCompactSection.jsx` | Superseded | Live `MeetLucySection` covers Lucy. |
| `src/lib/screenshots.jsx` | Superseded | Live Platform page renders its own demo screens. Reconsider with the screenshot capture spec. |
| `docs/showcase/screenshot-capture-spec.md` | Still useful, reconsider later | Planning document only. Not website code. |
| `docs/showcase/product-video-storyboard.md` | Obsolete | The commercial workstream's approximately 2:30 master replaces it. It also contains the "30-minute" copy. |
| `base44/entities/Lead.jsonc` (branch version) | Obsolete | Live schema is newer and includes a `read` rule the branch lacks. |
| Pricing values | Identical | No change. |

**From `claude/apex-clarity-website-audit-tqufgo` (September Apex work, plus SEO commit)**

| Item | Classification | Note |
| --- | --- | --- |
| The whole Apex Clarity site (all files that differ from live) | Obsolete | Older versions of live files, with Apex branding. |
| `src/pages/HealthCheck.jsx`, `PlatformTour.jsx`, `Register.jsx`, `src/lib/PageNotFound.jsx`, `src/components/home/ProcessSection.jsx` | Obsolete | Removed from the live app. The live app redirects the retired routes to the demo page. |
| `seo/stage-1/` (added 26 Oct: audit, opportunity map, research, mock-ups, screenshots) | Still useful, reconsider later | SEO workstream output. It should move to a documentation path on `main` when SEO resumes. Not website code. |

**Live-only, absent from the old branches, and not affected by this recovery**

`base44/workflows/New Kenvio website lead — email Donna.jsonc` and `base44/emails/new_lead_notification.jsonc` are in the live app and in `main`. They are missing from the 7 October branch. Nothing needed porting.

## Brand guard baseline

15 files hold 23 "Apex Clarity" references, recorded in `scripts/brand-guard.baseline`. They are deliberate or waiting on a decision: the footer and Terms legal-entity text (waiting for the registered company name), the `Platform` demo domain, and comments.

## Live app decisions still open

- Legal entity name in the footer copyright line and Terms clauses 3 and 4.
- The demo environment domain in `src/pages/Platform.jsx`, which contains the old brand name.
- Whether to connect Base44's GitHub integration (see below).

## Base44 GitHub integration (checked 26 Oct 2026)

Not connected. The connection call creates a **new** private repository, pushes the current app there, and keeps it in sync. It cannot attach to this repository. Adopting it would make the new repository the mirror and this one archive-only. That is an owner decision, because it creates a repository and installs the Base44 GitHub app on the account.
