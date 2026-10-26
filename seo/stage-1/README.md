# Kenvio SEO, Social and Inbound Growth: Stage 1 review

**Status:** Stage 1 complete, awaiting founder review. Nothing on the live site has been changed. All files in `seo/stage-1/` are review material on this branch only.

**Date:** 26 October 2026. **Source of truth audited:** this repo (`donnasherriff1980-dev/-apex-clarity-website`, commit `30d1b04`), the Base44 hosting layer for the website app, and live search results.

**Files in this folder**

| File | What it is |
|---|---|
| `README.md` | This review deliverable (sections 1 to 13 as briefed, plus social themes, funnel review and lead-routing design) |
| `site-inventory.csv` | Complete website inventory, one row per URL |
| `opportunity-map.csv` | Full search opportunity map, 44 clusters, every required field, 1 to 5 scores |
| `mockups/` | Five proposed screens plus a gallery (`index.html`), with desktop, phone and Day-theme screenshots in `mockups/screens/` |
| `research/` | The four raw research reports the map is built from (software intent, problem-aware intent, industry and comparison intent, resource intent and social channel) |

**Recommended zero-cost review method:** review this branch on GitHub (markdown and CSV render in the browser), and open the mock-up gallery link sent with this report. Comments go back as GitHub review comments or in chat. No Google Sheet is needed; the CSV is the single working copy and can be opened in Excel if a filterable view helps.

---

## 0. Three things to decide before Stage 2

These came out of the audit and change the whole plan, so they come first.

1. **The website still says "Apex Clarity"; the hosting says "Kenvio".** Every title, canonical URL, schema block, footer, email address and the `index.html` head in this repo use Apex Clarity and `www.apexclarity.co.uk`. That domain does not resolve. The live site is published at `kenvio.co.uk` (custom domain verified on 5 October 2026), with `app.kenvio.co.uk` and `demo.kenvio.co.uk` beside it. Base44's own injected schema and titles say Kenvio. Search engines currently receive two brands and a canonical pointing at a dead domain. Nothing in Stage 2 is worth publishing until the rebrand is finished in code. The contact email `info@apexclarity.co.uk` also needs checking: if that domain has no mail records, enquiries bounce.

2. **The website describes a product that is a year behind the real one.** The repo's truthfulness notes say inspections, incidents, inductions, training matrices and temporary works are "not built, therefore not sold". The Kenvio product data model now contains Inspection, InspectionFinding, Incident, Induction, ContractorOnboarding, OnboardingRequirement, TemporaryWorksItem, SafetyAppointment, RamsAcknowledgement, SignatureRecord and programme records. Several of the best search opportunities below depend on these. Before any of them is claimed on a page, the product team must confirm each is shipped to customers, not just modelled. I have marked every such item "verify".

3. **Two systems are writing the site's SEO tags.** Base44 injects its own titles, descriptions, JSON-LD, robots.txt and sitemap.xml by default, and the React app overwrites titles and canonicals on the client. Base44's injected descriptions are placeholders ("A high-performance digital hub for business transformation, streamlining...") on every page. Pick one owner. My recommendation is in section 2.

---

## 1. Complete website inventory

Full detail is in `site-inventory.csv` (26 rows). Summary:

- **25 URLs in the repo sitemap**: home, platform, pricing, hs-support, contact, solutions index, 10 solution pages, industries, platform-tour, health-check, case-studies, about, vision, three policy pages. `/resources` is parked and noindexed.
- **Every page is a generic title** ("The Platform", "Solutions", "Pricing", "Workforce Competence") with no commercial search phrase. No page contains the word "software" in its title.
- **Solution pages are thin and templated**: 400 to 450 words each, the same three-paragraph structure (problem, how it works, what changes), one CTA, no FAQ, no screenshots, no schema.
- **Industries are anchors on one page** (`/industries#me-contractors`), so no sector can rank on its own. Social-housing retrofit leads the list and the copy ("built for UK social-housing retrofit and M&E contractors first").
- **Overlaps**: `/solutions/health-safety` and `/solutions/audits` both describe the governance overview; `/platform` repeats the solutions catalogue; `/platform-tour` repeats `/contact`; `/about` and `/vision` tell the same story; `/case-studies` contains no case studies.
- **CTA**: every page ends in "Book a Demo" leading to one long contact form. The form asks qualification questions only for H&S support enquiries, not for demo requests.
- **Persona and industry targeting** are implicit. No page is written for a named role.

## 2. Technical SEO issues

Ordered by impact. Items marked **verify** could not be confirmed from inside this sandbox (outbound requests to the live domain are blocked here) and need a two-minute check from a normal browser.

| # | Issue | Evidence | Fix (Stage 2, zero cost) |
|---|---|---|---|
| T1 | Canonical, Open Graph, schema, robots and sitemap all point to `www.apexclarity.co.uk`, which does not resolve | `src/components/common/SEO.jsx`, `index.html`, `public/robots.txt`, `public/sitemap.xml` | Change `SITE_URL`, `SITE_NAME`, head tags, schema and footer to Kenvio / `https://kenvio.co.uk` |
| T2 | Base44 platform meta injection is on with placeholder descriptions for all 22 paths; three pages still say "Apex Clarity WEBSITE"; app description is "A high-performance digital hub for business transformation..." | Base44 SEO settings for the website app | Either set `platform_meta_injection_enabled=false` and ship complete tags from the app, or set every page's title and description in Base44 to match the app. Rewrite the app description |
| T3 | The live sitemap is Base44-generated (23 URLs) and **omits all nine `/solutions/:slug` pages** while including `/login`, `/register`, `/forgot-password`, `/reset-password`, `/consultancy`, `/services` and the noindexed `/resources` | Base44 SEO scan, 26 Oct 2026 | Disable Base44 sitemap generation and serve the repo sitemap (updated to kenvio.co.uk), or add the solution routes to Base44's page list |
| T4 | Repo `robots.txt` disallows auth pages, but the live robots.txt is Base44-generated | Scan: "robots.txt allows every page" | Decide the owner (see T2) and make auth pages `noindex` |
| T5 | Two Organization schema blocks with different names (Apex Clarity in `index.html`, Kenvio from Base44) plus a nonsensical custom JSON-LD mapping the Lead entity to an Organization | Base44 settings `custom_json_ld` | Remove the Lead mapping; keep one Organization and one WebSite block for Kenvio |
| T6 | Legacy redirects (`/services/*`, `/consultancy`) are client-side only; Base44's 301 redirect list is empty | `src/App.jsx`, Base44 url-redirects | Add server-side 301s in Base44 |
| T7 | The whole site is a client-rendered SPA gated behind a Base44 public-settings API call; Base44 says it prerenders snapshots. **Verify** what Googlebot receives for `/solutions/rams` (fetch as Googlebot in Search Console once connected) | `src/lib/AuthContext.jsx`, build output | If snapshots are missing or stale, add prerendering at build time for the public routes |
| T8 | Sections animate from `opacity: 0` on scroll, so a snapshot taken before scroll may hold invisible text. **Verify** alongside T7 | `whileInView` in most home sections (visible in the full-page screenshots) | Render content visible at rest; animate only decorative elements |
| T9 | Search Console is not connected | Scan: `gsc_not_connected` | Connect (free), submit the sitemap, read the first query data before Stage 2 writing |
| T10 | Single 838 KB JavaScript bundle; dependencies include three.js, Leaflet, Recharts, Quill, jsPDF and html2canvas; hero image served from `media.base44.com`. **Verify** Core Web Vitals with PageSpeed Insights (free) | `dist/assets`, `package.json` | Code-split routes; drop unused libraries; self-host the Lucy still or set it as a priority image |
| T11 | No FAQ, SoftwareApplication or Product schema on commercial pages | Base44 scan `faq_schema` warning | Add FAQPage schema to the new commercial and guide pages |
| T12 | `/case-studies` URL carries no case studies; `/platform-tour` has no tour | Inventory | Rename to `/how-it-works` with a 301; fold the tour page into the demo flow |
| T13 | Social image is a placeholder named `Testerlogo.png` | `index.html`, Base44 logo | Produce one branded 1200x630 image |
| T14 | Lead form captures `page_url` only; no UTM, campaign or referrer; no spam protection | `base44/entities/Lead.jsonc`, `src/lib/leads.js` | Add `source`, `campaign`, `utm_*` and a honeypot field (needed for section 15) |
| T15 | Cookie banner overlaps page content on load and hides the floating CTA | Screenshots | Minor; move the banner to a bottom bar |

What is already good: unique titles per page, HTTPS, a custom domain, a `llms.txt`, trust pages, and a clean URL structure under `/solutions/`.

## 3. Current commercial and conversion gaps

1. **No page targets a commercial search.** The site has module pages, not buyer pages. Someone searching "contractor compliance software" or "RAMS software" has nothing to land on.
2. **The proposition is retrofit-first on the pages that matter most** (`index.html` head, home industries section, platform description, case-studies description), which narrows the brand against the stated positioning.
3. **The product is under-sold.** Inspections, incidents, inductions, contractor onboarding requirements, RAMS acknowledgements, signature records and temporary works items exist in the product but the site says the opposite.
4. **No proof.** No real screenshots, no video, and no link to `demo.kenvio.co.uk`, which already exists.
5. **Demo requests are unqualified.** The form only qualifies H&S support enquiries; the demo (the enquiry that matters) collects name, company, email and a free-text box.
6. **"30-minute conversation" everywhere** rather than the 20-minute demo in the brief.
7. **H&S Support sits in the main navigation**, which pulls the SaaS positioning back towards consultancy and the "Managed Compliance" offer is blocked by the open data-protection work item in `docs/`.
8. **The health check asks consultancy-era questions** (automation, dashboards, "AI-powered automation") that do not describe Kenvio and produce a score unrelated to compliance control.
9. **Pricing rules conflict with the Founder Pilot.** `src/lib/pricing.js` says "Do NOT add an onboarding, setup or implementation fee"; the Founder Pilot carries a £495 setup fee. Standard prices are correct and must stay. The Pilot should be a single line on pricing and demo pages, with terms reserved for the call.
10. **Newsletter capture with nothing behind it.**

## 4. Full search opportunity map

`opportunity-map.csv` holds 44 clusters with every required field. Scoring is 1 to 5 per factor, with Competition Difficulty and Cannibalisation Risk subtracted. No search volumes are quoted anywhere: the research used live result composition only (which vendors have built dedicated pages, whether directories have a UK category, whether authority bodies publish, whether the results are padded with job adverts, PDFs or foreign directory pages). Where the Base44 keyword and ranking research endpoints were tried they returned "Not found" on this plan, so no paid data was used.

Method caveat: the search tool available here returns organic results and snippets, not a rendered UK Google page. Ads, People Also Ask boxes and AI Overviews were not observable. Before Stage 2 briefs are finalised, the top 10 queries should be checked once in a UK browser (free) to note those features.

Priority bands: **P1** build in Stage 2 first; **P2** Stage 2 second wave; **P3** support work; **MERGE** into another page; **IGNORE** not worth a page.

## 5. Top horizontal commercial clusters

| Rank | Cluster | Score | Action | Why |
|---|---|---|---|---|
| 1 | Contractor compliance software (absorbs subcontractor compliance and onboarding software) | 24 | CREATE hub | Exact fit, exact persona, nine small UK vendors ranking with 2025 to 2026 pages and no authority site to displace. The term is split with IR35 content, so copy must say "H&S and operational compliance" plainly |
| 2 | Competence management software (construction; training matrix; certificate expiry) | 24 | IMPROVE `/solutions/competence` | The construction-specific variants ("skills matrix software construction", "CSCS expiry tracking") have no relevant page at all; Building Safety Act competence expectations are a live anchor nobody serves practically |
| 3 | RAMS software | 22 | IMPROVE `/solutions/rams` | The strongest UK transactional search in the set. It is becoming an AI-generator price war ("RAMS in 2 minutes", £29 to £49). Only HandsHQ sells governance. Kenvio's position is approval with reasons, supersession, acknowledgement per revision and audit trail, with Lucy drafting but never approving |
| 4 | Permit to work software (contractors and FM) | 22 | IMPROVE `/solutions/permits` | The generic results are oil, gas and FM vendors citing HSG250; no construction-contractor page exists. Hand-back with completion state is a substantiated differentiator |
| 5 | Construction and CDM compliance software (sector page) | 22 | CREATE industry page | Kenvio's core sector; crowded with low-authority vendors ranking via comparison pages, so beatable with structured content. "CDM compliance software" is thin |
| 6 | Temporary works register software | 21 | CREATE after verification | Three small vendors and a 2019 template. Small demand, almost no competition, and the product has the record type |

Head terms to leave alone: "health and safety software UK" (enterprise and HR bundles), "contractor management software UK" (four meanings), "site inspection software" (Fieldwire, Procore, Sitemate with free tiers), "construction document control software" (means drawings), and "operational compliance/control software" (no demand; keep as positioning language only).

## 6. Strongest vertical opportunities supported by actual demand

Ranked by observable software-buying search demand from the industry research:

1. **Construction contractors and principal contractors** (CDM, site H&S, subcontractor compliance): strong, on-persona, beatable. **Build a page.**
2. **Electrical and M&E contractors**: real demand, but the results are job-management and EICR certification tools; nobody owns H&S and operational compliance for these trades. **Build one combined page** that says explicitly it is not certification software, and positions above ECA's free eRAMS tool (permits, competence expiry, approvals, audit trail).
3. **FM and maintenance service providers**: the head term is owned by client-side CAFM products; the contractor-side angle is nearly empty. **Section first, page later** if Search Console shows demand.
4. **Fire protection, renewables and heat pump installers, retrofit and social housing, roofing, civils**: demand is either for a different product (design and MCS tooling, PAS 2035 lodgement, servicing workflow, job management) or negligible. **Sections on the industries page, not pages.** The retrofit section stays, which protects against retrofit-only positioning while keeping the market.
5. **Scaffolding, utilities and telecoms**: no search surface at all; these buyers are reached through Achilles, NERS and framework pre-qualification. **Ignore for search.**

## 7. CREATE / IMPROVE / MERGE / SUPPORT / IGNORE summary

| Action | Clusters |
|---|---|
| CREATE | Contractor compliance software hub; Construction and principal contractors page; Electrical and M&E page; Temporary works register page (verify); Inspections, findings and actions page (later); guides P1 to P8; subcontractor onboarding checklist; temporary works register resource; HandsHQ alternative; best RAMS software UK comparison (disclosed); best construction compliance software UK (later) |
| IMPROVE | Home; `/solutions/rams`; `/solutions/competence`; `/solutions/permits`; `/solutions/documents` (reframe); `/solutions/audits` (audit readiness); `/platform` (multi-project control); `/industries` (restructure); `/contact` (qualification); `/pricing` (brand, demo CTA, one Pilot line); `/case-studies` (rename); `/health-check` (rewrite or retire); `/solutions` (rename to Software) |
| MERGE | `/solutions/health-safety` into `/solutions/audits`; `/vision` into `/about`; `/platform-tour` into the demo flow; subcontractor compliance into the hub; superseded-documents into the RAMS revisions guide; electronic-vs-paper permits into the permit guide; RAMS-in-Word into the spreadsheets article; renewables, retrofit, fire, maintenance into industry sections |
| SUPPORT | COSHH register, toolbox talk record bundle, RAMS review checklist, construction risk assessment template, compliance control self-assessment |
| IGNORE | Health and safety software UK head; contractor management software UK; site inspection software; construction document control (CDE); operational compliance software as a keyword; site induction checklist; generic audit and ISO 45001 checklists; Evalu-8, Evotix, EcoOnline, Notify, Protecht, SHEQSY alternatives; CHAS vs SafeContractor; Smartsheet for RAMS; renewables, fire, scaffolding, roofing, civils, utilities and telecoms as pages |

## 8 and 9. The ten pages Kenvio should prioritise, and why each is commercially valuable

Stage 0 (prerequisite, not counted): finish the Kenvio rebrand in code and settle T1 to T6. Without this, none of the pages below can be indexed correctly.

| # | Page | Action | Target queries | Why it is worth money |
|---|---|---|---|---|
| 1 | `/software/contractor-compliance-software` (mock-up 02) | CREATE | contractor compliance software UK; subcontractor compliance software; contractor onboarding software construction | The highest-fit horizontal query family. The persona searching it (Contracts Manager, SHEQ Manager, Ops Director at a principal or main contractor) is the Growth and Business tier buyer. Competitors are single-feature expiry trackers; Kenvio's onboarding requirements with approvals, RAMS review, competence expiry and audit trail are a credible superset |
| 2 | `/solutions/rams` as RAMS management software | IMPROVE | RAMS software UK; RAMS management software; RAMS app; method statement software | The clearest transactional UK search. Every ranking page sells generation speed; Kenvio can be the governance answer. RAMS acknowledgement per revision is shipped and nobody else shows it |
| 3 | `/solutions/competence` as competence management software for contractors | IMPROVE | competence management software; training matrix software; certification expiry tracking; CSCS card expiry | Expiry is a trigger event (an audit finds a lapsed card) that converts. The construction variants have no good page. Pairs with the free competence matrix (page 8) |
| 4 | `/solutions/permits` as permit to work software for contractors | IMPROVE | permit to work software UK; electronic permit to work; digital permit to work construction | Construction and FM variants are unserved. Hand-back with completion state and suspension history are substantiated differentiators. FM and M&E buyers arrive here |
| 5 | Homepage (mock-up 01) | IMPROVE | Brand and category | Fixes positioning (horizontal first), shows the real product breadth, sends traffic to the hub, and carries the short qualification. Every other page's conversion depends on it |
| 6 | `/industries/construction-contractors` | CREATE | health and safety software for construction companies UK; CDM compliance software; construction compliance software | Kenvio's core sector; the results are low-authority vendors ranking via comparison pages, which proves it is winnable. Distinct from page 1 by sector and CDM framing |
| 7 | Guide: RAMS revisions and acknowledgement (mock-up 03) | CREATE | how to manage RAMS revisions; who approves RAMS; prove operatives read and signed RAMS; superseded method statement on site | Highest-scoring cluster in the map (25). These are the questions a buyer asks while evaluating; the guide ends on the acknowledgement record and the demo. Also the strongest social theme |
| 8 | Guide plus free construction competence matrix: stop expired competence going unnoticed | CREATE | how to track employee training and qualifications; stop expired certificates going unnoticed; construction training matrix template | The Excel variant currently returns scraper PDFs. An ungated matrix with CSCS, CPCS, IPAF, PASMA, ECS and Gas Safe columns and expiry formatting would be the best page on the query and leads straight into page 3 |
| 9 | Guide: proving compliance to a client, principal contractor or SSIP assessor, plus `/solutions/audits` as audit readiness | CREATE + IMPROVE | how to prepare for a health and safety audit UK construction; principal contractor audit of subcontractors; CHAS/SSIP evidence | An audit landing is the trigger event for most enquiries. The UK "prove to a PC or client" variant is unserved. Replaces the idea of a CHAS-vs-SafeContractor page, which would be a category error |
| 10 | `/software/temporary-works-register` plus the BS 5975 register and TWC checklist resource | CREATE (verify first) | temporary works register software; temporary works register template Excel; temporary works coordinator checklist | Small demand, nearly empty results, and the product has the record (stages, check category, permit to load and strike, inspection due). Low effort, high relevance-to-competition. Must not be published until the shipped scope is confirmed |

Next five if capacity allows: multi-project operational control problem page with `/platform` improvement (score 23, exactly the MD question); electrical and M&E industry page; subcontractor onboarding interactive checklist; permit lifecycle guide with ungated permit pack; HandsHQ alternative page (factual, dated).

## 10. Internal-link architecture

Hub and spoke, three levels, every spoke two clicks from home.

```
Home
 ├─ Software (nav dropdown; rename "Solutions")
 │   ├─ Contractor compliance software  ← HUB (page 1)
 │   │    ├─ RAMS management software (page 2)
 │   │    ├─ Competence management software (page 3)
 │   │    ├─ Permit to work software (page 4)
 │   │    ├─ Compliance document control with expiry (reframed /solutions/documents)
 │   │    ├─ Audit readiness and approvals (page 9, absorbs health-safety)
 │   │    ├─ Inspections, findings and actions (later)
 │   │    └─ Temporary works register (page 10, verify)
 │   └─ Supporting modules: risk assessments and COSHH; toolbox talks; emergency arrangements; projects, jobs and sites
 ├─ Industries
 │   ├─ Construction and principal contractors (page 6)
 │   ├─ Electrical and M&E contractors
 │   └─ Industries overview with sections: FM and maintenance; fire protection; renewables and heat; retrofit and social housing; specialist subcontractors
 ├─ Guides (the parked /resources becomes this)
 │   ├─ RAMS revisions and acknowledgement (page 7) → RAMS page → demo
 │   ├─ Stop expired competence going unnoticed + matrix (page 8) → Competence page → demo
 │   ├─ Proving compliance to a client or auditor (page 9) → Audit readiness → demo
 │   ├─ Construction compliance records to keep → Document control → hub
 │   ├─ Permit lifecycle and hand-back + permit pack → Permits page
 │   ├─ Subcontractor onboarding checklist → hub
 │   ├─ Spreadsheets and Word RAMS vs a governed system → RAMS page and hub
 │   └─ Temporary works register template and TWC checklist → Temporary works page
 ├─ Platform (what it is: multi-project operational control, lifecycle, Lucy, audit trail)
 ├─ Pricing ↔ linked from every commercial page
 └─ Demo (new short qualification flow; replaces platform-tour)
Footer: Software | Guides and tools | Company (H&S support moves here, out of the main nav)
```

Rules: every guide links to exactly one commercial parent and the demo; every commercial page links up to the hub, across to two siblings, and down to its guides; industry pages link to spokes, never duplicate them; no page targets another page's primary query (the map's cannibalisation column tracks this).

## 11. Suggested CTA for each priority page

| Page | Primary CTA | Secondary | Form behaviour |
|---|---|---|---|
| Hub (contractor compliance) | Book a 20-minute demo | Compare with spreadsheets (on-page jump) | Four-step qualification, sector pre-set to "principal / main contractor" |
| RAMS | See it on your own RAMS in 20 minutes | Read: RAMS revisions and acknowledgement | Step 3 pre-selects "RAMS revisions" |
| Competence | Book a 20-minute demo | Download the construction competence matrix (no email) | Step 3 pre-selects "Competence and card expiry" |
| Permits | Book a 20-minute demo | Download the permit to work pack (no email) | Step 3 pre-selects "Permits and hand-back" |
| Home | Book a 20-minute demo | See how it works (to hub) | Inline short form (mock-up 01) |
| Construction industry page | Book a 20-minute demo | Subcontractor onboarding checklist | Sector pre-set |
| RAMS revisions guide | See this on your own records | Download the acknowledgement record (no email) | Floating button text changes on guide pages |
| Expired competence guide | Download the matrix (no email) | Book a 20-minute demo | Resource first, demo second |
| Audit readiness guide and page | Book a 20-minute demo | Evidence readiness checklist (interactive) | Step 3 pre-selects "Audit evidence" |
| Temporary works page | Book a 20-minute demo | Download the BS 5975 register (no email) | Step 3 pre-selects "Temporary works" |
| Pricing | Book a 20-minute demo | Which tier fits? Ask us | One Founder Pilot line, terms on the call |

Ungated downloads are deliberate: on these results, "no email required" is now a ranking and conversion hook used by the strongest UK pages, and gated downloads underperform.

## 12. Obvious website positioning changes

1. Finish the rebrand to Kenvio everywhere in code (name, domain, email, schema, footer, policies).
2. Lead with the category line "operational control and compliance platform for UK contractors" and the sector breadth; move retrofit to one section among several.
3. Update the capability story to the product as it is today, after verification: inspections, incidents, inductions, contractor onboarding requirements, RAMS acknowledgements, signature records, temporary works.
4. Rename "Solutions" to "Software"; demote "H&S Support" from the main nav to the footer and pricing page; it stays available and separately quoted.
5. Replace "30-minute conversation" with "20-minute, founder-led demo" site-wide.
6. Keep every truthfulness boundary that is already in the code (no compliance guarantees, Lucy never approves, governance overview is not a score). They are a competitive advantage against the AI-RAMS entrants and should be said louder, not softer.
7. Rename `/case-studies` to `/how-it-works`; retire or rewrite the health check; fold `/vision` into `/about`.
8. Add real product proof: screenshots from the platform and a 90-second recording from `demo.kenvio.co.uk` (Descript is already connected to this workspace and can edit it at no new cost).
9. Reconcile the pricing file's "no setup fee" rule with the Founder Pilot's £495 setup, showing the Pilot as one line only.

## 13. Anything that would require money or a new service

Nothing in Stage 1 or the Stage 2 plan requires spend. For the record:

- **Free and recommended now:** Google Search Console (connect and submit the sitemap), Bing Webmaster Tools, PageSpeed Insights for Core Web Vitals, a G-Cloud Digital Marketplace listing (free to list; G-Cloud pages rank on page one for several target queries), Google Business Profile.
- **Already paid for and usable:** Base44's SEO scan and fix actions (used for this audit), Descript (connected) for the demo recording, the Demo app at `demo.kenvio.co.uk`.
- **Not available without spend, and not recommended:** Base44's keyword, SERP and search-performance research endpoints returned "Not found" on the current plan. I did not try to enable them. Paid keyword tools remain unnecessary for Stage 2; Search Console data will replace estimates within weeks of connection.
- **Would cost money, so parked:** any paid listing on Capterra or GetApp, LinkedIn promotion, stock video.

---

## 14. Social and inbound: the ten strongest themes

LinkedIn is the only channel where UK H&S and compliance vendors, practitioners and bodies have a verifiable active organic presence; Reddit, trade forums and Facebook groups did not surface for RAMS, permit or competence discussion in open search (they may exist, but could not be verified from here). Recommendation: LinkedIn from the founder's profile first, company page second, no scheduler.

| # | Theme (the line the contractor recognises) | Leads to | CTA | Demo support |
|---|---|---|---|---|
| 1 | "Which revision were they working to?" RAMS revised Tuesday, crew still on Friday's version | RAMS revisions guide (page 7) → RAMS page | Read the guide / 20-minute demo | Yes: three screens, approve, supersede, acknowledge (mock-up 04) |
| 2 | Proving who acknowledged the current version, not who signed a sheet in March | Social landing (mock-up 04) | Book a 20-minute demo | Yes: acknowledgement record |
| 3 | The card that expired six weeks ago and was found by the client's auditor | Expired competence guide (page 8) → Competence page | Download the matrix | Yes: expiry list by role |
| 4 | Permit extended by phone, hand-back never recorded | Permit lifecycle guide → Permits page | Permit pack / demo | Yes: extension history, hand-back state |
| 5 | Failed inspection → finding → action → closure (where the WhatsApp thread goes to die) | Inspections and actions page (once verified) | Demo | Yes, after verification |
| 6 | Temporary works loaded before the check was signed | Temporary works page (once verified) | Register download | Yes, after verification |
| 7 | Audit lands with two days' notice: what you can hand over and what you have to hunt for | Audit readiness guide (page 9) | Evidence readiness checklist | Yes: governance overview |
| 8 | Folders, email, WhatsApp and spreadsheets: the six places one job's evidence lives | Spreadsheets vs governed system article → hub | Demo | Yes: one job, one record set |
| 9 | What an Operations Director can and cannot see across eight live projects | Multi-project control page → Platform | Demo | Yes: cross-project overview |
| 10 | Lucy answering "where is the current RAMS for Block B and who approved it" with sources, and refusing to approve anything | Platform (Lucy section) | Demo | Yes: Lucy retrieval with sources; the refusal is the point |

Format guidance for Stage 2: one real failure mode per post, in the contractor's words, no statistics, no "thought leadership", one screenshot or short recording, one link. Posting is manual; nothing is scheduled.

## 15. Funnel and conversion review (no changes made)

Expected journey: problem → proof → relevant Kenvio page → demo or product evidence → short qualification → 20-minute demo or future self-service → Founder Pilot or package.

- **Demo-led route (Founder Pilot):** the site supports it in principle but with no proof step, no qualification and a long form. Mock-ups 04 and 05 show the proposed four-step qualification feeding a 20-minute demo. Founder Pilot terms stay off the pages and on the call, as briefed.
- **Future self-service route (Core and Growth):** nothing on the site supports it today, and it should not until onboarding is proven. When ready, a "Start with Core" secondary action on pricing can route to the same qualification and an onboarding call, then to `app.kenvio.co.uk` tenant provisioning (a product workstream, not a website one). The qualification fields are designed so the same answers serve both routes.
- **What not to build:** countdown timers, exit pop-ups, "limited places" banners, newsletter gates. The Founder Pilot's five places are stated once, plainly, on the call.

## 16. Platform Admin lead routing: design only, not implemented

Platform Administration already holds `PlatformProspect` (one row per company: `company_key`, `domain`, `source`, `sector`, `priority`, `status`, `next_action`, `next_follow_up_on`, `demo_link_sent_at`, `pilot_pack_sent_at`) and `PlatformProspectContact` (people: `email_key`, `name_key`, `role`, `is_primary`), with contact history in `PlatformActivity`. The website holds `Lead`. Proposed future behaviour, for approval before any build:

1. **Capture** (website): extend `Lead` with `source` (page), `campaign`, `utm_source/medium/campaign/content`, `referrer`, `role`, `sector`, `people_band`, `sites_band`, `hardest_to_prove[]`, `current_tooling`, `preferred_slot`, `consent_timestamp`, plus a honeypot. Submission stays on the website app.
2. **Hand-off**: a backend function on the website app posts the lead to a single endpoint on the Platform Admin app (server-to-server, secret in Base44 secrets, idempotent on `lead_id`). No second CRM, no third-party connector.
3. **Duplicate check** (Platform Admin): normalise the email domain; skip free-mail domains for company matching; match `PlatformProspect` by `domain`, then `company_key`; match `PlatformProspectContact` by `email_key`.
4. **Update or create**: existing prospect → append a `PlatformActivity` of type `website_enquiry` with the qualification answers, update `last_activity_at`, and add the contact if new. New prospect → create with `source = website`, `sector` from the form, `priority` from a simple rule (sector fit × sites band), and the primary contact.
5. **Record source and campaign** on the activity, never overwriting the prospect's original source.
6. **Next action**: set `next_action = "Book demo"` and `next_follow_up_on = next working day`; when a demo link is sent, stamp `demo_link_sent_at`.
7. **Do-not-contact** is respected before any write.
8. **Failure handling**: if the hand-off fails, the lead still exists on the website app and a retry queue drains it; nothing is lost and nothing is duplicated.

## 17. Verification list before Stage 2 writing

- Confirm with the product team which of these are shipped to customers: inspections and findings, incidents, inductions, contractor onboarding requirements, RAMS acknowledgements, signature records, temporary works items, safety appointments.
- Fetch `https://kenvio.co.uk/solutions/rams` as Googlebot and confirm text is present without JavaScript (T7, T8).
- Confirm whether `info@apexclarity.co.uk` still receives mail.
- Check the top ten queries once in a UK browser for ads, People Also Ask and AI Overviews.
- Legal references in guides (CDM 2015 regulations, retention periods, BS 5975-1:2024 clauses) to be checked by a competent person before publication.

**Stage 1 stops here.** Stage 2 (briefs, drafts, screenshots, internal links) starts only on approval of this document and the mock-up direction.
