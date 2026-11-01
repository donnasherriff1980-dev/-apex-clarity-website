# Kenvio SEO Phase 1: review pack

**Status:** prepared on branch `seo/phase-1-discovery`. Not merged, not deployed, not published. Base44 settings are proposed only.
**Base:** `origin/main` at `6014281`.
**Scope:** technical discovery and existing-page metadata only. No new content pages, no llms.txt, no FAQ schema, no SoftwareApplication schema inserted.

## 1. Files changed on the branch

| File | Change |
|---|---|
| `index.html` | Homepage title and description, social tags, Organization JSON-LD cleaned, keywords tag removed |
| `public/robots.txt` | Allow all, sitemap pointer. Auth Disallow lines removed so the noindex tags can be read |
| `public/sitemap.xml` | 23 public, indexable URLs (section 4) |
| `src/components/common/SEO.jsx` | Default title updated; noindex pages carry no canonical; stale canonicals removed |
| `src/components/AuthLayout.jsx` | Noindex on the shared auth layout (login, forgot password, reset password, OAuth consent) |
| `src/lib/solutions.js` | Per-module `seoTitle`, `seoDescription` and `h1` added. `title` (navigation and cards) unchanged |
| `src/pages/ServiceDetail.jsx` | Uses the per-module SEO fields and H1 |
| `src/pages/Home.jsx` | Description |
| `src/pages/Platform.jsx` | Title, description, H1 |
| `src/pages/Services.jsx` | Title, description, H1 |
| `src/pages/Industries.jsx` | Title, description, H1 |
| `src/pages/Contact.jsx` | Title, description, H1 |
| `src/pages/About.jsx` | Title, description |
| `src/pages/CaseStudies.jsx` | Title, description. URL kept |
| `seo/phase-1/PHASE-1-REVIEW.md` | This document |

## 2. Before and after: titles, descriptions, H1s

Homepage H1 is unchanged: "Control the work. Keep the evidence."

| Page | Title before | Title after | H1 before | H1 after |
|---|---|---|---|---|
| Home `/` | Kenvio \| The Operational Control Platform for UK Contractors | Kenvio \| Operational Control and Compliance for Contractors | Control the work. Keep the evidence. | unchanged |
| Platform | The Platform \| Kenvio | Contractor Operational Control Platform \| Kenvio | Control the work. Keep the evidence. | One operational system for projects, people and evidence |
| Solutions | Solutions \| Kenvio | Contractor Operations and Compliance Software \| Kenvio | Everything Kenvio does, by area | Software for contractor operations and compliance |
| RAMS | Method Statements & RAMS \| Kenvio | RAMS Management Software for Contractors \| Kenvio | Method Statements & RAMS | RAMS management software with controlled revisions |
| Competence | Workforce Competence \| Kenvio | Competence Management Software for Contractors \| Kenvio | Workforce Competence | Competence management software: expiry and gaps in one list |
| Permits | Permits & Control of Work \| Kenvio | Permit to Work Software for Contractors \| Kenvio | Permits & Control of Work | Permit to work software that records extension, suspension and hand-back |
| Documents | Document Control & Evidence \| Kenvio | Compliance Document Control and Evidence \| Kenvio | Document Control & Evidence | Compliance document control with expiry dates |
| Audits | Audit Readiness & Approvals \| Kenvio | Audit Readiness and Approvals for Contractors \| Kenvio | Audit Readiness & Approvals | Approvals and governance in one place |
| Health & Safety | Health & Safety Governance \| Kenvio | Health and Safety Controls for Contractors \| Kenvio | Health & Safety Governance | Health and safety controls on one governed lifecycle |
| Projects | Projects, Jobs & Sites \| Kenvio | Projects, Sites and Jobs for Contractors \| Kenvio | Projects, Jobs & Sites | Projects, sites and jobs in one structure |
| Risk assessments | Risk Assessments & COSHH \| Kenvio | Risk Assessments and COSHH Software \| Kenvio | Risk Assessments & COSHH | Risk assessments and COSHH on one controlled lifecycle |
| Toolbox talks | Toolbox Talks & Briefings \| Kenvio | Toolbox Talk Records and Attendance \| Kenvio | Toolbox Talks & Briefings | Toolbox talks with attendance recorded per session |
| Emergency arrangements | Emergency Arrangements \| Kenvio | Emergency Arrangements Software \| Kenvio | Emergency Arrangements | Emergency arrangements with review and test dates tracked |
| Industries | Industries We Serve \| Kenvio | Industries for Contractor-Led Businesses \| Kenvio | Built For Your Sector | Built for contractor-led businesses |
| Contact | Book a Demo \| Kenvio | Book a 20-Minute Demo \| Kenvio | Let's Talk | Book a 20-minute demonstration |
| About | Our Story \| Kenvio | Who Runs Kenvio and Why \| Kenvio | We didn't build Kenvio... (unchanged) | unchanged |
| Case studies | How Implementation Works \| Kenvio | How Kenvio Implementation Works \| Kenvio | What Getting Started Actually Looks Like. (unchanged) | unchanged |

Meta descriptions: every page in the approved list now carries a description of 156 characters or fewer. The one exception is HS Support, which is outside the approved list and left unchanged at 185 characters (see section 11). Homepage description is 156 characters.

## 3. Noindex list

Set on the page itself, through the SEO component:

| URL | Page | Reason |
|---|---|---|
| `/login` | Login | Account page, not for search |
| `/forgot-password` | Forgot password | Account page |
| `/reset-password` | Reset password | Account page |
| `/resources` | Resources | Already noindex. Empty until content exists |
| any unknown path | Not found | Already noindex |

Also covered by the shared auth layout: the OAuth consent page. It is not routed on `main`, so it has no live URL today.

Not noindexed: every commercial, product, industry, solution, about, case-study and legal page.

`/register`, `/health-check`, `/platform-tour` and `/consultancy` are redirects, not pages, so they need no noindex.

## 4. Sitemap: exact URLs (23)

Served only after the Base44 switch in section 8 is approved and deployed. Each URL is a public, indexable page with no noindex.

```
https://kenvio.co.uk/
https://kenvio.co.uk/platform
https://kenvio.co.uk/pricing
https://kenvio.co.uk/hs-support
https://kenvio.co.uk/contact
https://kenvio.co.uk/solutions
https://kenvio.co.uk/industries
https://kenvio.co.uk/solutions/rams
https://kenvio.co.uk/solutions/competence
https://kenvio.co.uk/solutions/permits
https://kenvio.co.uk/solutions/documents
https://kenvio.co.uk/solutions/audits
https://kenvio.co.uk/solutions/health-safety
https://kenvio.co.uk/solutions/projects
https://kenvio.co.uk/solutions/risk-assessments
https://kenvio.co.uk/solutions/toolbox-talks
https://kenvio.co.uk/solutions/emergency-arrangements
https://kenvio.co.uk/case-studies
https://kenvio.co.uk/about
https://kenvio.co.uk/vision
https://kenvio.co.uk/privacy
https://kenvio.co.uk/terms
https://kenvio.co.uk/cookie-policy
```

Excluded: `/login`, `/register`, `/forgot-password`, `/reset-password`, `/resources`, `/platform-tour`, `/health-check`, `/consultancy`, `/services`, `/services/*`, and all query-string variants.

Current Base44 served sitemap (stored scan, 26 October) lists `/Login`, `/Home`, `/ServiceDetail` and `/ServiceRedirect`, which are not real routes, and omits all solution pages. That is what this change replaces.

## 5. Redirect map (prepared, not created)

Base44 can create genuine server-side 301s through its URL-redirect API. The rules take effect on the published site once created. Base44 warns that a cached copy of a source URL can keep serving the old page for a while. Check each rule after creation.

| Source | Target | Match | Notes |
|---|---|---|---|
| `/services` | `/solutions` | single | |
| `/services/risk` | `/solutions/risk-assessments` | single | legacy slug map |
| `/services/health-and-safety` | `/solutions/health-safety` | single | legacy slug map |
| `/services/crm` | `/solutions/projects` | single | legacy slug map |
| `/services/reporting` | `/solutions/audits` | single | legacy slug map |
| `/services/ai-automation` | `/solutions/health-safety` | single | legacy slug map |
| `/services/compliance` | `/solutions/audits` | single | legacy slug map |
| `/consultancy` | `/hs-support` | single | |
| `/health-check` | `/contact` | single | No query string, since the default demo type applies |
| `/platform-tour` | `/contact` | single | |
| `/register` | `/contact` | single | Matches the existing in-app redirect |

Not redirected: any other `/services/:slug` (no legacy mapping exists, so these return 404 rather than going to the homepage). Not redirected: `/case-studies`, which keeps its URL.

**Limits to be aware of:**
- Base44 cannot redirect the old domain `apexclarity.co.uk`. It is not attached to the Base44 app, and the DNS change needed is outside this phase. If that domain is still owned and has old links, it needs a separate decision.
- The client-side redirects in the app stay as a fallback, but they are browser redirects and are not equivalent to 301s for search engines.

## 6. Structured data: before and after

| Item | Before | After |
|---|---|---|
| Organization (`index.html`) | name, url, logo (icon), description, email, areaServed, knowsAbout including "CDM 2015" | Same fields. "CDM 2015" removed from knowsAbout. Description aligned to the meta description |
| Organization (Base44 settings) | name Kenvio, logo is a test file | Logo to `https://kenvio.co.uk/brand/kenvio-icon.png` |
| Lead-to-Organization mapping (Base44 `custom_json_ld`) | Maps the Lead entity onto an Organization with name, telephone and email placeholders. Incorrect | Removed (`[]`) |
| WebSite (Base44 injected) | name Kenvio, url kenvio.co.uk | Kept |
| BreadcrumbList (Base44 synthesised) | Generated per path | Kept |
| SoftwareApplication | None | Prepared below, not inserted |
| FAQPage | None | Not added. Held until Phase 2 |
| AggregateRating, reviews, certification markup | None | None added |

**SoftwareApplication, prepared for review only.** Every material field has a source on `main`:
- Prices are the tiers on the pricing page: Core £299, Growth £599, Business £999 per month, excluding VAT.
- Enterprise is not priced, so it is not included.
- Not yet verified: `operatingSystem` "Web". Donna or Product to confirm before this is inserted.

```json
{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "Kenvio",
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "description": "Operational control and compliance platform for contractor-led businesses: projects, sites, jobs, actions, competence, documents, approvals, permits and H&S controls.",
  "provider": { "@type": "Organization", "name": "Kenvio", "url": "https://kenvio.co.uk/" },
  "offers": [
    { "@type": "Offer", "name": "Core", "price": "299", "priceCurrency": "GBP", "description": "Per organisation per month, excluding VAT" },
    { "@type": "Offer", "name": "Growth", "price": "599", "priceCurrency": "GBP", "description": "Per organisation per month, excluding VAT" },
    { "@type": "Offer", "name": "Business", "price": "999", "priceCurrency": "GBP", "description": "Per organisation per month, excluding VAT" }
  ]
}
```

## 7. Legal and entity identity

- The public brand is Kenvio throughout.
- The security PR's footer names "Donna Sherriff trading as Kenvio". This branch does not use that wording, and it adds no `legalName` to the schema.
- Donna's personal name is not a keyword and does not appear in any title or description.
- "Kenvio Ltd" is not used.

## 8. Base44 SEO settings (proposed, not applied)

Every change below is proposed. Nothing has been applied. Each one has a rollback.

| Setting | Current | Proposed | Rollback | Condition |
|---|---|---|---|---|
| `sitemap_xml_enabled` | not set, so Base44 generates | `false` | `true` | Only after this branch is deployed to a Base44 branch and `/sitemap.xml` returns the 23 URLs |
| `robots_txt_enabled` | not set, so Base44 generates | `false` | `true` | Same condition, for `/robots.txt` |
| `custom_json_ld` | Lead-to-Organization mapping | `[]` | restore the old value | Confirm the removal with a get afterwards |
| `organization_schema.logo` | test logo | `https://kenvio.co.uk/brand/kenvio-icon.png` | restore old value | |
| `llms_txt_enabled` | `true`, generated with broken paths | `false` | `true` | Until Phase 2 approval |
| `platform_meta_injection_enabled` | `true` | keep `true` | | Turning it off would leave Base44 page values unmanaged. See section 10 |
| `platform_jsonld_injection_enabled` | `true` | keep `true` | | Keeps the WebSite and BreadcrumbList blocks |
| `pages` titles and descriptions | placeholders and "Apex Clarity WEBSITE" | set to the section 2 values for each page key | clear with empty strings | Partial update, so only these fields change |
| `pages` for `Register`, `HealthCheck`, `PlatformTour` | Apex titles | title and description `""` | | These pages no longer exist |
| `pages` for `ServiceDetail` | generic placeholder | `""` | | Per-module values come from the code |
| `pages` noindex | none set | `Login`, `ForgotPassword`, `ResetPassword`, `OAuthConsent` (if routed), `Resources` = `true` | `false` | |

## 9. Security PR conflicts

Branch `security-dp-launch-2026-10-30` changes ten files. Only one overlaps this branch:

- **`public/sitemap.xml`.** The security branch adds `https://kenvio.co.uk/security` (priority 0.3, lastmod 2026-10-30). It also sets lastmod on `/privacy` and `/terms` to 2026-10-30. This branch sets those two to 2026-08-21, which is the value on `main`.
- **Resolution.** When the security PR merges, add the `/security` entry to the 23-URL list above, and keep its privacy and terms lastmod values. Nothing from that PR is modified here.
- **No other overlap.** The PR changes `App.jsx`, `Footer.jsx`, `leads.js`, `Privacy.jsx`, `Terms.jsx`, `CookiePolicy.jsx`, `Security.jsx`, the baseline manifest and the security review document. None of those files are touched on this branch.

## 10. Verification performed

- `npx vite build`: exit 0.
- `npx eslint` on all changed JS and JSX files: exit 0.
- Built preview, every route rendered in a headless browser. Titles, descriptions, canonicals, robots tags and H1s match section 2. Auth pages and the 404 are noindex with no canonical. Public pages carry no robots tag.
- Served `robots.txt` and `sitemap.xml` both return 200 from the preview. The sitemap has 23 URLs.
- `sitemap.xml` parses as XML. The JSON-LD parses as JSON.
- Visual layout: not re-screenshotted. Only text changed, and the homepage H1 is unchanged.

**Limits of these checks.** The preview runs client-rendered pages, and Base44 injects its own tags on the server. What Google receives depends on Base44's rendering and on the Base44 settings in section 8. Those can only be confirmed after deployment, using URL Inspection on the live site.

## 11. Remaining risks and unknowns

- **Base44 tag conflict.** Base44 injects server-side title and description tags from its own page settings. The app sets tags in the browser. Until the section 8 page values match section 2, crawlers that do not render JavaScript may see the old values.
- **Out of the approved list, left unchanged:**
  - HS Support description is 185 characters, with dashes.
  - Pricing description contains dashes.
  - Vision description is unchanged.
  - Privacy and terms descriptions are unchanged.
  These should be decided in Phase 1.5.
- **Titles and descriptions I chose.** Titles and descriptions are my proposals within the approved direction. Donna should review the About and Case Studies titles especially.
- **Redirect cache.** Base44 warns that cached copies of redirected URLs may keep serving the old page. Verify each rule after creation.
- **Sitemap inclusion of legal pages.** `/privacy`, `/terms` and `/cookie-policy` are included at priority 0.2, as on `main`. Confirm you want them in the sitemap.
- **`operatingSystem` on the SoftwareApplication** is unverified.
- **OAuth consent page** is not routed on `main`. If it is routed on Base44, the noindex still applies through the shared layout.
- **Core Web Vitals** are unchanged in this phase.
- **DNS host** for kenvio.co.uk is not confirmed. Search Console verification depends on it (section 12).

## 12. Search Console: steps for Donna

Nothing here changes DNS yet. These are the steps to run when you approve them.

1. Choose the Google account. It should be one Kenvio controls, not a personal account used alone. Recommended: a dedicated Google account whose recovery address is info@kenvio.co.uk, with you as a co-owner. Creating that account needs your approval.
2. Open Search Console at https://search.google.com/search-console and choose **Add property**.
3. Choose **Domain** (not URL prefix). A domain property covers kenvio.co.uk, its subdomains, and both http and https. Enter `kenvio.co.uk`.
4. Google shows a TXT record value of the form `google-site-verification=…`. Copy it exactly. Google generates this value when you add the property, so I cannot supply it in advance.
5. Add the record in the DNS settings for kenvio.co.uk:
   - Type: TXT
   - Host or name: `@` (or blank, depending on the DNS host)
   - Value: the `google-site-verification=…` string from step 4
   - TTL: default
   Where DNS is managed is not confirmed. Tell me the DNS host (your domain registrar or Base44) before you change anything.
6. Return to Search Console and select **Verify**. Verification can take some time to propagate.
7. Add owners after verification. Add info@kenvio.co.uk once that mailbox is confirmed.
8. Do not submit the sitemap yet. Submit `https://kenvio.co.uk/sitemap.xml` only after section 8 is applied and deployed.
9. After publication, run URL Inspection on the homepage, `/platform`, `/solutions/rams`, `/solutions/competence` and `/solutions/permits`. Check the rendered HTML and the title, then request indexing.
10. Check Page indexing for noindex and soft-404 reasons once a week for the first month.

## 13. Bing Webmaster Tools: steps for Donna

1. Sign in at https://www.bing.com/webmasters with a Microsoft account. Use the Microsoft 365 account that hosts info@kenvio.co.uk, since that is a Kenvio-controlled account.
2. Choose **Add a site** and enter `https://kenvio.co.uk/`.
3. Verify by **importing from Google Search Console**. This needs Search Console verified first. It is the simplest route and needs no DNS change. If import is not offered, use the DNS TXT method, or add the meta tag if Base44 supports it.
4. After verification, submit `https://kenvio.co.uk/sitemap.xml`, once section 8 is applied.
5. Run URL Inspection in Bing for the same five priority URLs.
6. IndexNow is not configured. Whether Base44 can support it is unknown.

PHASE 1 SEO READY FOR DONNA REVIEW — NOT PUBLISHED
