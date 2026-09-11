import React, { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Mail, MapPin, ArrowRight, CheckCircle, Loader2, Calendar, AlertCircle } from "lucide-react";
import { submitLead } from "@/lib/leads";
import SEO from "@/components/common/SEO";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";
import { SOLUTIONS } from "@/lib/solutions";
import { INDUSTRIES } from "@/lib/industries";
import { SERVICES } from "@/lib/consultancy";

const industriesList = INDUSTRIES.map((i) => i.label).concat("Other");
const servicesList = SOLUTIONS.map((s) => s.title).concat(["Full Platform", "Not Sure"]);
// Visitor-facing enquiry options. `value` is the Lead entity's enquiry_type
// enum and MUST stay one of its permitted values — the label is what the
// visitor reads. Software-first ordering: a demo leads, H&S support follows.
//
// "H&S Support" is deliberately a relabel of the stored "H&S Consultancy"
// value rather than a new one: changing the enum would be a schema migration
// on live data, and would reject every submission until it landed.
const enquiryTypes = [
  { value: "Book a Demo", label: "Book a Demo" },
  { value: "H&S Consultancy", label: "H&S Support" },
  { value: "General Enquiry", label: "General Enquiry" },
];

// Enquiry types that are support-side and therefore need qualification, so we
// can scope an engagement before speaking rather than guessing at it.
const SUPPORT_TYPES = ["H&S Consultancy", "Managed Compliance"];

// ?type= shortcuts used across the site. Values, not labels.
const TYPE_PARAM_MAP = {
  demo: "Book a Demo",
  pricing: "Book a Demo",
  consultation: "H&S Consultancy",
  consultancy: "H&S Consultancy",
  support: "H&S Consultancy",
  managed: "H&S Consultancy",
  "health-check": "H&S Consultancy",
};

const staffBands = ["1-10", "11-25", "26-50", "51-100", "101-250", "250+"];
const siteBands = ["1", "2-5", "6-15", "16-50", "50+"];
const hsProvision = [
  "No formal H&S resource",
  "Handled by a manager alongside other duties",
  "Part-time or shared H&S resource",
  "Full-time internal H&S manager",
  "External H&S consultant already appointed",
];
const supportOptions = SERVICES.map((s) => s.title);

export default function Contact() {
  useDeclareHeaderSurface("dark");
  const [searchParams] = useSearchParams();
  const initialType = TYPE_PARAM_MAP[searchParams.get("type")] || "Book a Demo";
  const [form, setForm] = useState({
    name: "", company: "", email: "", phone: "", industry: "", service: "",
    type: initialType, message: "",
    staff_count_band: "", site_count_band: "", current_hs_provision: "", support_needed: [],
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [consent, setConsent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!consent) return;
    setLoading(true);
    setError(false);
    try {
      await submitLead({
        source: "contact_form",
        enquiry_type: form.type,
        name: form.name,
        company: form.company,
        email: form.email,
        phone: form.phone,
        industry: form.industry,
        service_interest: form.service,
        message: form.message,
        staff_count_band: form.staff_count_band || undefined,
        site_count_band: form.site_count_band || undefined,
        current_hs_provision: form.current_hs_provision || undefined,
        support_needed: form.support_needed.length ? form.support_needed : undefined,
        gdpr_consent: consent,
      });
      setSubmitted(true);
    } catch (err) {
      console.error("Failed to submit lead:", err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const update = (f, v) => setForm({ ...form, [f]: v });
  const toggleSupport = (v) =>
    setForm((f) => ({
      ...f,
      support_needed: f.support_needed.includes(v)
        ? f.support_needed.filter((x) => x !== v)
        : [...f.support_needed, v],
    }));
  const isSupportEnquiry = SUPPORT_TYPES.includes(form.type);

  return (
    <>
      <SEO
        title="Book a Demo"
        description="Book a demo of Apex Clarity — operational control and compliance software for UK contractors — or talk to us about optional H&S support alongside it."
        path="/contact"
      />
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Book a Demo</span>
            <h1 className="text-5xl font-black text-white mb-6">Let&apos;s Talk</h1>
            <p className="text-white/50 text-lg">Whether you want to see the platform, work out which tier fits, or ask about optional H&amp;S support alongside it, tell us what you are dealing with and we will come back with an honest answer.</p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-3">
              {submitted ? (
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}
                  className="bg-surface-raised rounded-3xl p-12 border border-hairline/10 text-center shadow-sm">
                  <div className="w-16 h-16 rounded-2xl bg-teal/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-teal" />
                  </div>
                  <h2 className="text-2xl font-black text-ink mb-3">Message Received</h2>
                  <p className="text-ink-secondary">We&apos;ll be in touch within one working day.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface-raised rounded-3xl p-8 md:p-10 border border-hairline/10 shadow-sm space-y-6">
                  {/* Enquiry type */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {enquiryTypes.map((t) => (
                      <button key={t.value} type="button" onClick={() => update("type", t.value)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                          form.type === t.value ? "bg-ink text-canvas border-ink" : "border-hairline/20 text-ink-secondary hover:border-ink/30"
                        }`}>
                        {t.label}
                      </button>
                    ))}
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2"><Label>Full Name *</Label><Input placeholder="John Smith" value={form.name} onChange={e => update("name", e.target.value)} required className="h-11 rounded-xl" /></div>
                    <div className="space-y-2"><Label>Company *</Label><Input placeholder="Your Company" value={form.company} onChange={e => update("company", e.target.value)} required className="h-11 rounded-xl" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2"><Label>Email *</Label><Input type="email" placeholder="john@company.com" value={form.email} onChange={e => update("email", e.target.value)} required className="h-11 rounded-xl" /></div>
                    <div className="space-y-2"><Label>Phone</Label><Input placeholder="+44 000 000 0000" value={form.phone} onChange={e => update("phone", e.target.value)} className="h-11 rounded-xl" /></div>
                  </div>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2"><Label>Industry</Label>
                      <Select value={form.industry} onValueChange={v => update("industry", v)}>
                        <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Select industry" /></SelectTrigger>
                        <SelectContent>{industriesList.map(i => <SelectItem key={i} value={i}>{i}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                    <div className={`space-y-2 ${isSupportEnquiry ? "hidden" : ""}`}><Label>Solution Interest</Label>
                      <Select value={form.service} onValueChange={v => update("service", v)}>
                        <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Select solution" /></SelectTrigger>
                        <SelectContent>{servicesList.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
                  {isSupportEnquiry && (
                    <div className="space-y-6 border-t border-hairline/10 pt-6">
                      <div>
                        <p className="text-sm font-bold text-ink mb-1">A few quick questions</p>
                        <p className="text-xs text-ink-secondary">These let us scope the right level of support before we speak, so we do not waste your time.</p>
                      </div>
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2"><Label>Approximate staff count</Label>
                          <Select value={form.staff_count_band} onValueChange={v => update("staff_count_band", v)}>
                            <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Select range" /></SelectTrigger>
                            <SelectContent>{staffBands.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                        <div className="space-y-2"><Label>Active sites or projects</Label>
                          <Select value={form.site_count_band} onValueChange={v => update("site_count_band", v)}>
                            <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Select range" /></SelectTrigger>
                            <SelectContent>{siteBands.map(b => <SelectItem key={b} value={b}>{b}</SelectItem>)}</SelectContent>
                          </Select>
                        </div>
                      </div>
                      <div className="space-y-2"><Label>Current H&amp;S provision</Label>
                        <Select value={form.current_hs_provision} onValueChange={v => update("current_hs_provision", v)}>
                          <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="How is H&amp;S handled today?" /></SelectTrigger>
                          <SelectContent>{hsProvision.map(o => <SelectItem key={o} value={o}>{o}</SelectItem>)}</SelectContent>
                        </Select>
                      </div>
                      <div className="space-y-2">
                        <Label>What support do you need?</Label>
                        <div className="flex flex-wrap gap-2 pt-1">
                          {supportOptions.map((o) => {
                            const on = form.support_needed.includes(o);
                            return (
                              <button
                                key={o} type="button" onClick={() => toggleSupport(o)} aria-pressed={on}
                                className={`text-xs font-medium rounded-full px-3.5 py-2 border transition-colors ${
                                  on ? "bg-teal text-canvas border-teal" : "border-hairline/20 text-ink-secondary hover:border-ink/30"
                                }`}
                              >
                                {o}
                              </button>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="space-y-2"><Label>Message</Label>
                    <Textarea rows={4} placeholder="Tell us about your business challenges..." value={form.message} onChange={e => update("message", e.target.value)} className="rounded-xl" />
                  </div>
                  <div className="flex items-start gap-3">
                    <Checkbox id="gdpr-consent" checked={consent} onCheckedChange={(v) => setConsent(!!v)} className="mt-0.5" />
                    <label htmlFor="gdpr-consent" className="text-xs text-ink-secondary leading-relaxed cursor-pointer">
                      I agree to Apex Clarity storing and processing my details in line with the{" "}
                      <Link to="/privacy" className="text-teal hover:underline">Privacy Policy</Link>, so we can respond to my enquiry. *
                    </label>
                  </div>
                  <Button type="submit" size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold w-full h-12 rounded-xl" disabled={loading || !consent}>
                    {loading ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : <>Submit Enquiry <ArrowRight className="w-4 h-4 ml-2" /></>}
                  </Button>
                  {error && (
                    <p className="flex items-center gap-2 text-sm text-red-500">
                      <AlertCircle className="w-4 h-4 shrink-0" /> Something went wrong sending your enquiry. Please try again, or email us directly.
                    </p>
                  )}
                </form>
              )}
            </div>

            <div className="lg:col-span-2 space-y-6">
              <div className="bg-brand-dark rounded-3xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <a href="mailto:info@apexclarity.co.uk" className="flex items-center gap-3 text-white/50 hover:text-teal transition-colors text-sm"><Mail className="w-5 h-5 text-teal shrink-0" />info@apexclarity.co.uk</a>
                  <div className="flex items-center gap-3 text-white/50 text-sm"><MapPin className="w-5 h-5 text-teal shrink-0" />United Kingdom</div>
                </div>
              </div>
              <div className="bg-surface-raised rounded-3xl p-8 border border-hairline/10">
                <div className="flex items-center gap-3 mb-6"><Calendar className="w-5 h-5 text-teal" /><h3 className="font-bold text-ink">What To Expect</h3></div>
                <div className="space-y-4">
                  {["A reply within one working day", "A 30-minute conversation, no charge", "No obligation and no hard sell", "An honest view of what we would take on — and what we would not", "Clear scope and indicative cost before you commit"].map(item => (
                    <div key={item} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-teal shrink-0 mt-0.5" />
                      <span className="text-sm text-ink-secondary">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
