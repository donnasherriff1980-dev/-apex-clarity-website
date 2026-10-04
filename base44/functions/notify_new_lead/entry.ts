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
    // Accept { lead_id } (workflow payload) or a raw entity-trigger payload.
    const leadId = body?.lead_id || body?.data?.id || body?.entity_id || null;
    if (!leadId || typeof leadId !== 'string') {
      return Response.json({ error: 'lead_id is required' }, { status: 400 });
    }

    let lead = null;
    try { lead = await base44.asServiceRole.entities.Lead.get(leadId); } catch { lead = null; }
    if (!lead) return Response.json({ error: 'Lead not found' }, { status: 404 });
    if (lead.notified_at) {
      return Response.json({ status: 'already_notified', lead_id: leadId, notified_at: lead.notified_at });
    }

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
    return Response.json({ status: 'sent', lead_id: leadId, to: RECIPIENT, notified_at: notifiedAt });
  } catch (error) {
    return Response.json({ error: error.message }, { status: 500 });
  }
});
