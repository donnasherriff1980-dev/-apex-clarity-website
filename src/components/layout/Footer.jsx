import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin } from "lucide-react";
import { useTheme } from "@/lib/ThemeContext";
import { PLATFORM_AREAS } from "@/lib/platformAreas";

const product = [{ label: "Platform", path: "/platform" }].concat(PLATFORM_AREAS.map((a) => ({ label: a.title, path: a.path })));

// /resources omitted while it has no published articles (see Navbar).
const company = [
  { label: "About Us", path: "/about" },
  { label: "Our Vision", path: "/vision" },
  { label: "Pricing", path: "/pricing" },
  { label: "H&S Support (optional)", path: "/hs-support" },
  { label: "How It Works", path: "/case-studies" },
  { label: "Contact", path: "/contact" },
  { label: "Security & Data Protection", path: "/security" },
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
  const { resolved } = useTheme();
  const wordmark = resolved === "dark" ? "/brand/kenvio-wordmark-dark-alpha.png" : "/brand/kenvio-wordmark-light-alpha.png";

  return (
    <footer className="bg-canvas text-ink">
      {/* Main */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <img src={wordmark} alt="Kenvio" className="h-6 w-auto block" />
              <span className="text-ink-secondary text-xs mt-1 block">Operational control. Evidence you can stand behind.</span>
            </div>
            <p className="text-ink-secondary text-sm leading-relaxed mb-6">
              The operational control platform for UK contractors — projects, sites, jobs, actions, people, documents, approvals and permits in one system, with H&amp;S controls built in. Additional hands-on H&amp;S support is available separately where required.
            </p>
            <div className="space-y-3 text-sm">
              <a href="mailto:info@kenvio.co.uk" className="flex items-center gap-2 text-ink-secondary hover:text-teal transition-colors">
                <Mail className="w-4 h-4" /> info@kenvio.co.uk
              </a>
              <div className="flex items-center gap-2 text-ink-secondary">
                <MapPin className="w-4 h-4" /> United Kingdom
              </div>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-teal font-semibold text-xs uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-3">
              {product.map((s) => (
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
            <p className="text-sm text-ink-secondary/70">© 2026 Donna Sherriff trading as Kenvio. All rights reserved.</p>
          </div>
          <p className="text-sm text-ink-secondary/70">Control the work. Keep the evidence.</p>
        </div>
      </div>
    </footer>
  );
}