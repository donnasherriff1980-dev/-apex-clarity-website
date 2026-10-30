# Security and data-protection review: website launch changes

**Date:** 30 October 2026
**Branch:** `security-dp-launch-2026-10-30`, from `main` at `6014281`
**Status:** READY FOR DONNA REVIEW. NOT APPLIED TO BASE44. NOT PUBLISHED.

This branch is a mirror of proposed changes. Base44 is the canonical website source, so these changes must be applied to the Base44 website app (`6a24770b8156364d64a8152b`) through the approved route: branch, preview, approval, publish, verify, then mirror.

## 1. Legal identity

- Operator: **Donna Sherriff trading as Kenvio**. Kenvio is a sole trader, not a limited company.
- No company number exists or is implied anywhere. No home address is published.
- **BLOCKER: public business address.** The Electronic Commerce (EC Directive) Regulations 2002, regulation 6, requires a service provider to make its geographic address available. No appropriate public business address exists yet. Options include a business address through a registered-office or mail service, which is a paid service and needs your approval. Until one is confirmed, the footer, Terms and Privacy Policy show no address. No placeholder is used.
- **ICO registration:** status unknown. Confirm it. The Privacy Policy does not state a registration number.

## 2. Contact mailboxes

- The drafts use `info@kenvio.co.uk` for privacy, security and general contact. Whether that mailbox exists and is monitored has **not** been verified.
- Recommended: create `privacy@kenvio.co.uk` and `security@kenvio.co.uk` as forwarding aliases to your inbox. Use them in the pages once they work. Do not publish them before they are tested.

## 3. Data residency

- The **website** app is `6a24770b8156364d64a8152b`. The **platform** app is `6a483434dad74f643c340531`. The production app you inspected was the platform app, so the website app's own security and region settings still need checking.
- Production data region: **not verified** for either app. No UK or EEA hosting is claimed anywhere in this branch.

## 4. Iframe embedding (clickjacking)

- **Finding:** the website app has `prevent_iframe_embedding: false`, and the effective embed policy is "anyone". Base44's scan flags this as high severity.
- **Impact of enabling:** other sites will no longer be able to embed kenvio.co.uk in a frame. The website source contains no `<iframe>`, `<embed>` or `<object>`, so no legitimate embedding was found. Base44's own builder preview may rely on framing, so test it.
- **Change, not applied:** in Base44, website app, Security, set "Prevent iframe embedding" to on. Equivalent API call: `PUT /api/apps/6a24770b8156364d64a8152b/security/headers` with `{"prevent_iframe_embedding": true}`.
- **Test before and after:** load kenvio.co.uk normally; load a test page on another origin that frames it and confirm it is refused; confirm the Base44 editor preview still loads. Re-run the scan only after the change is approved.

## 5. Retention and unsubscribe

- **Enquiries and demo requests:** the Privacy Policy uses non-numeric wording ("only as long as we need them") until a deletion check is running. The proposed rule is: keep enquiry records for 12 months from last contact, then delete them.
- **Proposed manual procedure (monthly, Donna):** in the Base44 Lead table, filter records created more than 12 months ago with no follow-up recorded, delete them, and note the count and date. Once this has run once, the Privacy Policy can state "12 months".
- **Automation (explained, not built):** a scheduled backend function that deletes Lead records older than 12 months with no follow-up, logging each deletion. It would run with the service role. It needs your approval before it is built.
- **Newsletter sign-ups: removed from the website on this branch.** The footer sign-up form, its consent wording and the newsletter wording in the Privacy Policy are gone. Kenvio does not run a newsletter and collects no update sign-ups at launch. **Still open in Base44:** existing Lead records with source `newsletter` (if any), and the `newsletter` value in the Lead schema (`base44/entities/Lead.jsonc`). Neither is changed on this branch. Decide whether to delete the existing records and remove the enum value there.
- The site has no unsubscribe link, and no page claims one.

## 6. Subprocessors

| Provider | Role | Location |
|---|---|---|
| Base44 | Hosting, database, file storage, sign-in, application functions, website notification email | To be confirmed |
| Resend | Platform transactional email (sign-in codes, invitations, notifications). Platform only, not the website | To be confirmed |
| Google Fonts | Website typefaces. Receives visitors' IP addresses | Google |
| AI model provider | Lucy requests, through Base44's agent layer | Confirmation required from Base44. Not named |

Base44's terms, per search results, give 7 days' notice of new subprocessors. The draft processor terms say 30 days. Kenvio cannot promise more notice than Base44 gives it, so align the two before the processor agreement is issued.

## 7. Claims and evidence

| Claim on the Security page | Evidence | Status |
|---|---|---|
| Sign-in requires a one-time email code | `complete_login`, `enroll_mfa`; `docs/sprint-1/evidence/prompt-05-completion.md` | Verified in evidence docs and code |
| Invitations are single-use and expire after 24 hours | `docs/sprint-1/evidence/prompt-07-completion.md` | Verified in evidence docs |
| Platform administration needs an MFA-bound session | `test/functions/p0_customer_readiness_security.test.js` | Test exists. Not run in this session |
| Permissions checked on the server | Tenant and permission checks in platform functions | Verified in code pattern |
| Records separated by organisation | `tenant_id` checks in platform functions | Verified in code, application-level only |
| HTTPS | Verified custom domain on the website app; https links | Verified for the website domain |
| Audit history of key changes | `writePlatformBusinessAudit`, `record_history` references | Partially verified. Confirm per record type |
| Lucy has no tools and no direct access to records. Information she uses is retrieved for the signed-in user through existing record functions | `base44/agents/lucy.jsonc` (`tool_configs: []`); `get_lucy_operational_context` (gate: `resolveLucyCaller`; retrieval runs under the caller's own token) | **Verified in code** for the agent configuration, the gate and the retrieval path. Not verified: the per-function permission rule of each list/get function that Lucy's retrieval calls. The Security page wording is limited to what was read |
| No analytics or advertising cookies | `base44Client.js` (analytics off), `vite.config.js` (tracker off) | Verified in source. Base44 still logs crawler requests (`__ai_traffic__`) with no user identifiers in what was reviewed |

## 8. Deliberately omitted until verified

- Base44's SOC 2 Type II and ISO 27001 statements. Public copy omits them. Verify from Base44's Trust Center and the ISO certificate scope before any mention.
- Base44's encryption-at-rest details and backup statements.
- Data region, and any named transfer mechanism (DPF, IDTA or SCCs).
- Signed or private file access. Stated in an internal document only.
- Separation-of-duties enforcement. Internal document only.
- Self-service data export. Internal document only.
- Deletion periods of 30 or 180 days. Internal document only.
- Incident response timescales of 48 or 72 hours.
- Penetration testing. None has been commissioned.
- Vulnerability management beyond Base44's scan. Dependabot is not enabled.
- The AI model vendor, its retention, and whether it trains on data.

## 9. Actions for Donna, outside the code

1. Decide the public business address approach, and whether it is a paid service.
2. Confirm ICO registration status.
3. Create or confirm the mailboxes in section 2.
4. In the Base44 dashboard, confirm:
   - the production region and data-hosting setting for both apps;
   - Base44's DPA at `base44.com/dpa`, including Exhibit C (subprocessors);
   - the AI model provider behind Lucy, and its retention and training position;
   - backup arrangements;
   - the Trust Center: SOC 2 report under NDA, and the ISO certificate scope.
5. Decide what to do with any existing `newsletter` Lead records, and whether to remove the `newsletter` value from the Base44 Lead schema.
6. Confirm governing law (England and Wales) against your residence.
7. Approve the iframe change for the website app, after testing.
8. Start the monthly enquiry check before the 12-month wording is published.
9. Before the first paying customer, prepare the data processing agreement and customer terms. These are not website terms.
10. Run the Base44 security scan only after the approved changes are applied.

## 10. Checks run on this branch

Re-run after the newsletter removal and the Lucy wording change (30 October 2026):

- `vite build` passed in an isolated copy with the repository's dependencies installed. Warnings concern only the missing Base44 environment variables, which the isolated copy does not have.
- ESLint on the changed files: no errors.
- esbuild parse of every changed JSX file: passed.
- Forbidden-claim scan of the changed public copy: no matches.
- Brand guard: passed. Counts only decreased.

Not run: the Base44 security scan, and any deployment.
