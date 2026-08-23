# Data protection readiness — pre-client-onboarding work item

**Status:** OPEN — blocking
**Blocks:** onboarding the first paying managed-compliance client
**Does not block:** building or reviewing website pages

---

## Why this exists

Selling managed compliance means Apex Clarity will process personal data
about other organisations' workforces — competence and training records,
attendance, and potentially incident and health-related information. That is
a materially different data-protection position from selling software alone,
and it has to be established properly before a client is onboarded, not
retro-fitted afterwards.

This document is a **scoping work item**. It deliberately contains no legal
conclusions and no drafted policy text, because none can be written honestly
until the actual data flows, hosting arrangements and third-party
sub-processors have been audited. Anything asserted here without that audit
would be guesswork presented as compliance, which is the precise failure mode
this engagement has been correcting elsewhere on the site.

**The website privacy policy has deliberately not been rewritten as part of
this work item.** Rewriting it before the audit would produce plausible text
unsupported by fact.

---

## Scope to be determined

### Roles and lawful basis
- [ ] Controller vs processor determination for each processing activity,
      separately for the SaaS product and the consultancy service — these
      may not be the same role
- [ ] Lawful-basis analysis per processing purpose
- [ ] Condition for processing any special-category data (UK GDPR Art. 9),
      if health, incident or medical-fitness evidence is in scope

### Documentation
- [ ] UK GDPR-compliant privacy information for data subjects
- [ ] Data Processing Agreement / processor terms for client engagements
- [ ] Record of processing activities

### Data
- [ ] Categories of workforce data processed, per module and per service
- [ ] Retention and deletion schedules
- [ ] Data-subject rights handling — routes, timescales, ownership
- [ ] Client offboarding: data return, export format, deletion and evidence
      of deletion

### Infrastructure and third parties
- [ ] Full sub-processor inventory, including hosting and any AI/ML
      processing involved in Lucy's drafting assistance
- [ ] International transfer position, if any transfer occurs
- [ ] Security responsibilities split between Apex and the client
- [ ] Personal-data breach detection, escalation and notification
      responsibilities and timescales

---

## Prerequisites before drafting anything

1. Audit the actual data flows — what is collected, where it is stored,
   who can reach it.
2. Confirm the hosting and infrastructure position.
3. Enumerate every third-party processor and sub-processor in the real
   stack.
4. Only then draft the privacy information and the DPA.

---

## Related pre-client-onboarding blocker

**Professional Indemnity insurance must be confirmed in force before the
first paying consultancy client is onboarded.** Tracked alongside this item;
neither is a website issue.
