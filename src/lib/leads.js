import { base44 } from "@/api/base44Client";

/**
 * Single write path for every public-site lead form (contact, newsletter, health check).
 * Throws on failure so callers can show a real error state instead of a fake success.
 */
export async function submitLead(payload) {
  const record = {
    page_url: typeof window !== "undefined" ? window.location.href : "",
    ...payload,
    consent_timestamp: payload.gdpr_consent ? new Date().toISOString() : undefined,
  };
  return base44.entities.Lead.create(record);
}
