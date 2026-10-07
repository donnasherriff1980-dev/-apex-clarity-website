import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import ThemeToggle from "@/components/common/ThemeToggle";
import { useHeaderSurface } from "@/lib/HeaderSurfaceContext";
import { useTheme } from "@/lib/ThemeContext";
import { SOLUTIONS } from "@/lib/solutions";

// Compact Solutions menu: six answers to "what does Kenvio help me manage?"
// Individual H&S modules (RAMS, toolbox talks, COSHH, emergency arrangements)
// sit within Health & Safety Controls here and on the full Solutions page.
const SOLUTION_MENU = [
  { key: "projects", slug: "projects", label: "Run Projects & Jobs", desc: "The structure every record attaches to" },
  { key: "actions", slug: "projects", label: "Manage Work & Actions", desc: "Owners, due dates, what is outstanding" },
  { key: "competence", slug: "competence", label: "Manage People & Competence", desc: "Expected evidence by role" },
  { key: "documents", slug: "documents", label: "Control Documents & Evidence", desc: "Controlled documents, bulk import" },
  { key: "approvals", slug: "audits", label: "Manage Approvals & Permits", desc: "Recorded decisions, control of work" },
  { key: "health-safety", slug: "health-safety", label: "Health & Safety Controls", desc: "RAMS, COSHH, talks, emergency arrangements" },
];
const platformModules = SOLUTION_MENU
  .filter((m) => SOLUTIONS.some((s) => s.slug === m.slug))
  .map((m) => ({ key: m.key, label: m.label, path: `/solutions/${m.slug}`, desc: m.desc }));

// Software-first IA. Apex Clarity is sold primarily as an operational control
// and compliance platform, so Platform, Solutions, Industries and Pricing lead.
// H&S Support sits after Pricing as the optional, complementary offer it is.
//
// Home is reached via the logo, so it is not a nav item. Contact is not
// top-level either — the primary CTA and the footer both provide it.
//
// The module dropdown hangs off Solutions, because every item in it is a
// /solutions/:slug page.
const navLinks = [
  { label: "Platform", path: "/platform" },
  { label: "Solutions", hasDropdown: true },
  { label: "Industries", path: "/industries" },
  { label: "Pricing", path: "/pricing" },
  { label: "H&S Support", path: "/hs-support" },
  { label: "About", path: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();
  const { surface } = useHeaderSurface();
  const { resolved } = useTheme();

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
  // Wordmark follows the same surface logic as the text: the theme-resolved
  // canvas once scrolled, the page's declared hero surface while transparent.
  const onDark = scrolled ? resolved === "dark" : surface === "dark";
  // Transparent variants of the approved artwork, so the mark sits on the
  // header surface rather than in a baked-in box.
  const wordmark = onDark ? "/brand/kenvio-wordmark-dark-alpha.png" : "/brand/kenvio-wordmark-light-alpha.png";

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b border-hairline/15 ${
      scrolled ? "bg-canvas/95 backdrop-blur-xl shadow-2xl" : "bg-transparent"
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 py-3">
          {/* Logo */}
          <Link to="/" className="flex flex-col items-start gap-[3px]" aria-label="Kenvio home">
            <img src={wordmark} alt="Kenvio" className="h-7 w-auto block select-none" draggable="false" />
            <span className={`text-[10.5px] leading-none tracking-[0.01em] pl-[2px] ${fgMuted}`}>Operational control. Evidence you can stand behind.</span>
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
                        className="absolute top-full left-0 mt-2 w-[540px] bg-[#F5F3EE] text-[#1E2A3A] border border-[#1E2A3A]/10 rounded-xl shadow-[0_18px_40px_-12px_rgba(6,11,13,0.45)] overflow-hidden"
                      >
                        {/* Fixed off-white panel with navy type, independent of theme,
                            so the menu reads the same over every header surface. */}
                        <div className="p-2 grid grid-cols-2 gap-x-1 gap-y-0.5">
                          {platformModules.map((sol) => (
                            <Link
                              key={sol.key}
                              to={sol.path}
                              className="flex flex-col px-3 py-2 rounded-lg hover:bg-[#1E2A3A]/[0.05] transition-colors group"
                            >
                              <span className="text-[13px] font-semibold leading-snug text-[#1E2A3A] group-hover:text-[#2F7F76] transition-colors">{sol.label}</span>
                              <span className="text-[11px] leading-snug text-[#5B6B7A] mt-0.5">{sol.desc}</span>
                            </Link>
                          ))}
                        </div>
                        <div className="px-4 py-2.5 border-t border-[#1E2A3A]/10 bg-[#EFECE5]">
                          <Link to="/solutions" className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[#2F7F76] hover:gap-2.5 transition-all">
                            View all solutions <ArrowRight className="w-3.5 h-3.5" />
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
            <Link to="/contact?type=demo">
              <Button className="bg-teal text-canvas hover:bg-teal/90 font-semibold text-sm h-9 px-5 rounded-xl focus-visible:ring-2 focus-visible:ring-teal focus-visible:ring-offset-2 focus-visible:ring-offset-canvas">
                Book an operational review
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
          theme-resolved ink token once open, same reasoning as the dropdown.

          The background is deliberately the unmodified `bg-canvas`. It was
          `bg-canvas/98`, and this project's Tailwind build does not emit a /98
          opacity step — so the class produced no rule at all and the panel
          rendered fully transparent, with the page's hero showing straight
          through the open menu. */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-canvas border-t border-hairline/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-1">
              <p className="px-4 pt-1 pb-2 text-[10px] font-bold uppercase tracking-widest text-ink-secondary">Solutions</p>
              {platformModules.map((sol) => (
                <Link key={sol.key} to={sol.path} className="block px-4 py-2.5 text-sm text-ink/70 hover:text-ink rounded-xl hover:bg-hairline/5">
                  {sol.label}
                </Link>
              ))}
              <Link to="/solutions" className="block px-4 py-2.5 text-sm text-teal font-medium rounded-xl hover:bg-hairline/5">
                View all solutions →
              </Link>
              <div className="border-t border-hairline/10 my-3" />
              {navLinks.filter(l => !l.hasDropdown).map((link) => (
                <Link key={link.label} to={link.path} className="block px-4 py-3 text-sm text-ink/70 hover:text-ink rounded-xl hover:bg-hairline/5">
                  {link.label}
                </Link>
              ))}
              <Link to="/contact" className="block px-4 py-3 text-sm text-ink/70 hover:text-ink rounded-xl hover:bg-hairline/5">
                Contact
              </Link>
              <div className="pt-4">
                <Link to="/contact?type=demo">
                  <Button className="w-full bg-teal text-canvas hover:bg-teal/90 font-semibold">Book an operational review</Button>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
