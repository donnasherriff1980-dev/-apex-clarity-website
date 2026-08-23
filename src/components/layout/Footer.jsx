import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, ArrowRight, Loader2 } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { submitLead } from "@/lib/leads";
import { SOLUTIONS } from "@/lib/solutions";
import { SERVICES } from "@/lib/consultancy";

const platformModules = SOLUTIONS.map((s) => ({ label: s.title, path: `/solutions/${s.slug}` }));

// Consultancy service pages are not built in Phase A, so these point at the
// consultancy landing page rather than at routes that do not exist yet.
const consultancy = SERVICES.map((s) => ({
  label: s.title,
  path: s.slug === "managed-compliance" ? "/consultancy#managed-compliance" : "/consultancy",
}));

// /resources omitted while it has no published articles (see Navbar).
const company = [
  { label: "About Us", path: "/about" },
  { label: "Our Vision", path: "/vision" },
  { label: "Consultancy", path: "/consultancy" },
  { label: "Platform", path: "/platform" },
  { label: "Pricing", path: "/consultancy#packages" },
  { label: "How It Works", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Cookie Policy", path: "/cookie-policy" },
  { label: "Terms of Service", path: "/terms" },
];

// Sector labels are anchors on /industries rather than six links to the
// same bare URL, which is what these previously were.
const industries = [
  { label: "Social Housing Retrofit", path: "/industries#social-housing-retrofit" },
  { label: "M&E Contractors", path: "/industries#me-contractors" },
  { label: "Principal Contractors", path: "/industries#principal-contractors" },
  { label: "Facilities Management", path: "/industries#facilities-management" },
  { label: "Renewables & Heat", path: "/industries#renewables-heat" },
  { label: "Specialist Subcontractors", path: "/industries#specialist-subcontractors" },
];

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();
    if (!email || !consent) return;
    setLoading(true);
    setError(false);
    try {
      await submitLead({ source: "newsletter", email, gdpr_consent: consent });
      setSubscribed(true);
      setEmail("");
    } catch (err) {
      console.error("Failed to subscribe:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-canvas text-ink">
      {/* Newsletter */}
      <div className="border-b border-hairline/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-md">
              <h3 className="text-2xl font-bold mb-2">Stay Ahead of the Curve</h3>
              <p className="text-ink-secondary text-sm">Get operational insights, platform updates and industry guides.</p>
            </div>
            <div className="w-full md:w-auto">
              <form onSubmit={handleSubscribe} className="flex flex-col gap-2 w-full md:w-auto">
                <div className="flex flex-col sm:flex-row gap-3 w-full">
                {subscribed ? (
                  <p className="text-teal font-semibold">You&apos;re subscribed. Thank you!</p>
                ) : (
                  <>
                    <Input
                      type="email" placeholder="Enter your email" value={email}
                      onChange={(e) => setEmail(e.target.value)} required
                      className="bg-hairline/8 border-hairline/15 text-ink placeholder:text-ink-secondary w-full sm:w-72 h-11"
                    />
                    <Button type="submit" disabled={loading || !consent} className="bg-teal text-canvas hover:bg-teal/90 font-semibold h-11 px-6 w-full sm:w-auto shrink-0">
                      {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Subscribe <ArrowRight className="w-4 h-4 ml-1" /></>}
                    </Button>
                  </>
                )}
                </div>
                {!subscribed && (
                  <label className="flex items-start gap-2 text-ink-secondary text-xs max-w-sm cursor-pointer">
                    <Checkbox checked={consent} onCheckedChange={(v) => setConsent(!!v)} className="mt-0.5 border-hairline/30" />
                    I agree to receive emails and to the <Link to="/privacy" className="text-teal hover:underline">Privacy Policy</Link>. Unsubscribe anytime.
                  </label>
                )}
              </form>
              {error && <p className="text-red-400 text-xs mt-2">Something went wrong. Please try again.</p>}
            </div>
          </div>
        </div>
      </div>

      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <span className="text-teal font-black tracking-widest text-sm leading-none block">APEX CLARITY</span>
              <span className="text-ink-secondary text-xs mt-0.5 block">Operational control. Proven compliance.</span>
            </div>
            <p className="text-ink-secondary text-sm leading-relaxed mb-6">
              Outsourced health, safety and compliance support for UK contractors — combined with purpose-built compliance technology.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@apexclarity.co.uk" className="flex items-center gap-2 text-ink-secondary hover:text-teal transition-colors">
                <Mail className="w-4 h-4" /> info@apexclarity.co.uk
              </a>
              <div className="flex items-center gap-2 text-ink-secondary">
                <MapPin className="w-4 h-4" /> United Kingdom
              </div>
            </div>
          </div>

          {/* Consultancy */}
          <div>
            <h4 className="text-teal font-semibold text-xs uppercase tracking-widest mb-6">Consultancy</h4>
            <ul className="space-y-3">
              {consultancy.map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="text-sm text-ink-secondary hover:text-ink transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-teal font-semibold text-xs uppercase tracking-widest mb-6">Platform</h4>
            <ul className="space-y-3">
              {platformModules.map((s) => (
                <li key={s.label}>
                  <Link to={s.path} className="text-sm text-ink-secondary hover:text-ink transition-colors">{s.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Industries */}
          <div>
            <h4 className="text-teal font-semibold text-xs uppercase tracking-widest mb-6">Industries</h4>
            <ul className="space-y-3">
              {industries.map((i) => (
                <li key={i.label}>
                  <Link to={i.path} className="text-sm text-ink-secondary hover:text-ink transition-colors">{i.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-teal font-semibold text-xs uppercase tracking-widest mb-6">Company</h4>
            <ul className="space-y-3">
              {company.map((c) => (
                <li key={c.label}>
                  <Link to={c.path} className="text-sm text-ink-secondary hover:text-ink transition-colors">{c.label}</Link>
                </li>
              ))}
            </ul>

          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-hairline/8">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-sm text-ink-secondary/70">© 2026 Apex Clarity Ltd. All rights reserved.</p>
          </div>
          <p className="text-sm text-ink-secondary/70">Prove your compliance. Protect your contracts.</p>
        </div>
      </div>
    </footer>
  );
}
