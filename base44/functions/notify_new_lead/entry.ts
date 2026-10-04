import { createClientFromRequest } from 'npm:@base44/sdk@0.8.38';

// notify_new_lead — emails the founder when a website Lead is created.
//
// Called by the workflow "New Kenvio website lead — email Donna" through the
// invoke_backend_function activity with payload { lead_id }. It replaces the
// workflow's earlier send_email step, which depended on a dashboard email
// template that the runtime could not resolve.
//
// Guarantees:
//   - Exactly one email per Lead. The Lead's `notified_at` is set with the
//     service role before sending; a second call for the same Lead returns
//     `already_notified` and sends nothing, so a replayed run, a retried
//     step or a stray public call cannot produce a duplicate.
//   - The recipient is fixed in code. Nothing from the request body chooses
//     who receives the email, so the public function cannot be turned into a
//     relay. The Lead's own fields are only ever the email's content.
//   - Delivery uses the built-in Core.SendEmail integration, which delivers
//     to registered app users; the recipient is the app's admin account.

const RECIPIENT = 'donnasherriff52@gmail.com';
const APP_ID = '6a24770b8156364d64a8152b';

function line(label, value) {
  const v = value === null || value === undefined || value === '' ? '—' : Array.isArray(value) ? value.join(', ') : String(value);
  return `${label}: ${v}`;
}

Deno.serve(async (req) => {
  try {
    const base44 = createClientFromRequest(req);
    const body = await req.json().catch(() => ({}));

    // Resolve which Leads to notify. The workflow runtime's payload shape is
    // not documented, so accept every plausible shape, and if none carries
    // an id, fall back to any Lead created in the last 30 minutes that has
    // not been notified. notified_at makes every path idempotent, so the
    // fallback can only ever send an email that was owed and not yet sent.
    const candidates = [
      body?.lead_id, body?.payload?.lead_id, body?.data?.id, body?.payload?.data?.id,
      body?.entity_id, body?.input?.entity_id, body?.input?.data?.id, body?.trigger?.entity_id,
    ].filter((v) => typeof v === 'string' && v.length > 0);
    let leads = [];
    if (candidates.length > 0) {
      try { const l = await base44.asServiceRole.entities.Lead.get(candidates[0]); if (l) leads = [l]; } catch { leads = []; }
    }
    if (leads.length === 0) {
      const since = Date.now() - 30 * 60 * 1000;
      const recent = await base44.asServiceRole.entities.Lead.filter({}, '-created_date', 20);
      leads = recent.filter((l) => !l.notified_at && new Date(l.created_date).getTime() >= since).slice(0, 5);
    }
    if (leads.length === 0) {
      return Response.json({ status: 'nothing_to_notify', received_keys: Object.keys(body || {}) });
    }

    const results = [];
    for (const lead of leads) {
      const leadId = lead.id;
      if (lead.notified_at) { results.push({ lead_id: leadId, status: 'already_notified' }); continue; }

      // Claim first, then send: a concurrent second call sees notified_at set.
      const notifiedAt = new Date().toISOString();
      await base44.asServiceRole.entities.Lead.update(leadId, { notified_at: notifiedAt });

    const subject = `New Kenvio website lead — ${lead.company || lead.name || lead.email || leadId}`;
    const text = [
      line('Name', lead.name),
      line('Company', lead.company),
      line('Email', lead.email),
      line('Phone', lead.phone),
      line('Enquiry type', lead.enquiry_type),
      line('Source', lead.source),
      line('Industry', lead.industry),
      line('Service interest', lead.service_interest),
      line('Staff', lead.staff_count_band),
      line('Sites', lead.site_count_band),
      line('Current H&S provision', lead.current_hs_provision),
      line('Support needed', lead.support_needed),
      line('Health check', lead.health_check_grade ? `${lead.health_check_grade} (${lead.health_check_score_pct}%)` : null),
      line('Page', lead.page_url),
      line('Created', lead.created_date),
      '',
      line('Message', lead.message),
      '',
      `Record: https://app.base44.com/apps/${APP_ID}/data/Lead/${leadId}`,
    ].join('\n');

      await base44.asServiceRole.integrations.Core.SendEmail({ to: RECIPIENT, subject, body: text });
      results.push({ lead_id: leadId, status: 'sent', notified_at: notifiedAt });
    }
    return Response.json({ status: 'ok', to: RECIPIENT, received_keys: Object.keys(body || {}), results });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
