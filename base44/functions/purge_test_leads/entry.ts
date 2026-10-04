import { createClientFromRequest } from 'npm:@base44/sdk@0.8.38';

// purge_test_leads — one-off cleanup of the website's own test Lead records.
// Temporary: removed from the app once the 27 Sep and 4 Oct test rows are gone.
//
// Only ever deletes rows that are unmistakably test data: the email domain
// is the reserved `example.invalid` (RFC 2606) or the name carries the
// "(safe to delete)" / "safe to delete" marker used by every test row.
// Real enquiries can never match, so a stray public call is harmless.

const TEST_EMAIL_RE = /@example\.invalid$/i;
const TEST_NAME_RE = /safe to delete|^RLS test/i;

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const rows = await base44.asServiceRole.entities.Lead.filter({}, '-created_date', 200);
    const targets = rows.filter((l) => TEST_EMAIL_RE.test(l.email || '') || TEST_NAME_RE.test(l.name || ''));
    const deleted = [];
    for (const l of targets) {
      await base44.asServiceRole.entities.Lead.delete(l.id);
      deleted.push({ id: l.id, name: l.name, company: l.company, created_date: l.created_date });
    }
    const remaining = rows.length - deleted.length;
    return Response.json({ status: 'ok', deleted_count: deleted.length, deleted, remaining_leads: remaining });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
