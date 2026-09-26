import { createClient } from '@base44/sdk';
import { appParams } from '@/lib/app-params';

const { appId, token, functionsVersion, appBaseUrl } = appParams;

//Create a client with authentication required
export const base44 = createClient({
  appId,
  token,
  functionsVersion,
  serverUrl: '',
  requiresAuth: false,
  appBaseUrl,
  // Analytics is off for launch: the cookie banner, Cookie Policy and Privacy
  // Policy all state that no analytics tracking runs. Re-enabling it needs
  // consent handling and updated policy wording first.
  analytics: { enabled: false }
});
