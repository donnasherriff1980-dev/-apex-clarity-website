import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useHeaderSurface } from "@/lib/HeaderSurfaceContext";
import { SOLUTIONS } from "@/lib/solutions";

const platformModules = SOLUTIONS.map((s) => ({ label: s.title, path: `/solutions/${s.slug}`, desc: s.navDesc }));

// Approved consultancy IA. Home is reached via the logo, so it is not a nav
// item. Contact is not top-level either — the primary CTA and the footer
// both provide it.
//
// Managed Compliance and Pricing are anchors into /consultancy for now:
// their standalone pages are explicitly out of scope for Phase A, and a nav
// item pointing at a route that does not exist would be a broken link. When
// those pages are built, only these two paths change.
const navLinks = [
  { label: "Consultancy", path: "/consultancy" },
  { label: "Managed Compliance", path: "/consultancy#managed-compliance" },
  { label: "Platform", hasDropdown: true },
  { label: "Industries", path: "/industries" },
  { label: "Pricing", path: "/consultancy#packages" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  const { surface } = useHeaderSurface();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setSolutionsOpen(false);
  }, [location]);

  // Foreground derivation (no route conditionals, no DOM colour inspection):
  //   - scrolled: bg-canvas is genuinely established beneath the navbar, so
  //     the theme-resolved `ink` token is correct (it already tracks Day/Night).
  //   - transparent: there is no navbar-owned surface — whatever the page's
  //     top section declared via useDeclareHeaderSurface is what's really
  //     behind the text, so use the fixed on-dark/on-light contrast pair for
  //     that declared surface, independent of the resolved theme.
  const fg = scrolled
    ? "text-ink/80 hover:text-teal"
    : surface === "dark"
      ? "text-ink-on-dark/80 hover:text-teal"
      : "text-ink-on-light/80 hover:text-teal";
  const fgStrong = scrolled
    ? "text-ink"
    : surface === "dark"
      ? "text-ink-on-dark"
      : "text-ink-on-light";
  const fgMuted = scrolled
    ? "text-ink-secondary"
    : surface === "dark"
      ? "text-ink-on-dark/60"
      : "text-ink-on-light/60";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-hairline/15 ${
      scrolled ? "bg-canvas/95 backdrop-blur-xl shadow-2xl" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start">
            <span className="text-teal font-black tracking-widest text-sm leading-none">APEX CLARITY</span>
            <span className={`text-xs mt-0.5 ${fgMuted}`}>Operational control. Proven compliance.</span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) =>
              link.hasDropdown ? (
                <div key={link.label} className="relative">
                  <button
                    onMouseEnter={() => setSolutionsOpen(true)}
                    onMouseLeave={() => setSolutionsOpen(false)}
                    className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal ${fg}`}
                  >
                    {link.label}
                    <ChevronDown className={`w-3.5 h-3.5 transition-transform ${solutionsOpen ? "rotate-180" : ""}`} />
                  </button>
                  <AnimatePresence>
                    {solutionsOpen && (
                      <motion.div
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                        onMouseEnter={() => setSolutionsOpen(true)}
                        onMouseLeave={() => setSolutionsOpen(false)}
                        className="absolute top-full left-0 mt-1 w-72 bg-surface/95 backdrop-blur-xl border border-hairline/10 rounded-2xl shadow-2xl overflow-hidden"
                      >
                        {/* Dropdown owns its own bg-surface, so it always uses the
                            theme-resolved ink token regardless of navbar state above. */}
                        <div className="p-3 grid gap-1">
                          {platformModules.map((sol) => (
                            <Link
                              key={sol.path}
                              to={sol.path}
                              className="flex flex-col px-4 py-3 rounded-xl hover:bg-hairline/8 transition-colors group"
                            >
                              <span className="text-sm font-semibold text-ink group-hover:text-teal transition-colors">{sol.label}</span>
                              <span className="text-xs text-ink-secondary mt-0.5">{sol.desc}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="p-3 border-t border-hairline/5 grid gap-1">
                          <Link to="/platform" className="flex items-center gap-2 px-4 py-2 text-sm text-teal font-medium">
                            Explore the platform <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                          <Link to="/contact?type=demo" className="flex items-center gap-2 px-4 py-2 text-sm text-ink-secondary font-medium hover:text-ink">
                            Book a platform demo <ArrowRight className="w-3.5 h-3.5" />
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : link.highlight ? (
                <Link
                  key={link.label}
                  to={link.path}
                  className="px-4 py-2 text-sm font-semibold text-teal border border-teal/30 hover:bg-teal/10 transition-colors rounded-lg"
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  key={link.label}
                  to={link.path}
                  className={`px-4 py-2 text-sm font-medium transition-colors rounded-lg ${fg}`}
                >
                  {link.label}
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle inverse={!scrolled && surface === "dark"} />
            <Link to="/contact?type=consultation">
              <Button className="bg-teal text-canvas hover:bg-teal/90 font-semibold text-sm h-9 px-5 rounded-xl focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
                Book a Consultation
              </Button>
            </Link>
          </div>

          {/* Mobile toggle */}
          <div className="lg:hidden flex items-center gap-2">
            <ThemeToggle inverse={!scrolled && surface === "dark"} />
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`w-10 h-10 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal rounded-lg ${fgStrong}`}
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu — owns its own bg-canvas, so it always uses the
          theme-resolved ink token once open, same reasoning as the dropdown. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-canvas/98 border-t border-hairline/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              <p className="px-4 pt-1 pb-2 text-[10px] font-bold uppercase tracking-widest text-ink-secondary">Platform</p>
              {platformModules.map((sol) => (
                <Link key={sol.path} to={sol.path} className="block px-4 py-2.5 text-sm text-ink/70 hover:text-ink rounded-xl hover:bg-hairline/5">
                  {sol.label}
                </Link>
              ))}
              <div className="border-t border-hairline/10 my-3" />
              {navLinks.filter(l => !l.hasDropdown).map((link) => (
                <Link key={link.label} to={link.path} className="block px-4 py-3 text-sm text-ink/70 hover:text-ink rounded-xl hover:bg-hairline/5">
                  {link.label}
                </Link>
              ))}
              <Link to="/platform-tour" className="block px-4 py-3 text-sm text-ink/70 hover:text-ink rounded-xl hover:bg-hairline/5">
                Platform Tour
              </Link>
              <Link to="/contact" className="block px-4 py-3 text-sm text-ink/70 hover:text-ink rounded-xl hover:bg-hairline/5">
                Contact
              </Link>
              <div className="pt-4">
                <Link to="/contact?type=consultation">
                  <Button className="w-full bg-teal text-canvas hover:bg-teal/90 font-semibold">Book a Consultation</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
