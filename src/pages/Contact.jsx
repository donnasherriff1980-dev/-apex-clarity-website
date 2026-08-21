import React, { useState } from "react";
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

const industriesList = ["Construction", "Retrofit", "Facilities Management", "Property Services", "Renewables", "Social Housing Contractors", "Other"];
const servicesList = ["Health & Safety", "Compliance", "Client Records", "Project Management", "Document Control", "Risk Management", "Audits & Inspections", "AI & Automation", "Full Platform", "Not Sure"];
const enquiryTypes = ["Book a Demo", "Business Health Check", "General Enquiry", "Partnership"];

export default function Contact() {
  useDeclareHeaderSurface("dark");
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "", industry: "", service: "", type: "Book a Demo", message: "" });
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

  return (
    <>
      <SEO
        title="Book a Demo"
        description="See the Apex Clarity platform in action. Book a free 30-minute demo for your construction, retrofit or facilities management business."
        path="/contact"
      />
      <section className="pt-32 pb-16 bg-brand-dark relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern" />
        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Get In Touch</span>
            <h1 className="text-5xl font-black text-white mb-6">Book Your Free Demo</h1>
            <p className="text-white/50 text-lg">See the Apex Clarity platform in action and discover how we can transform your business operations.</p>
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
                  <p className="text-ink-secondary">We&apos;ll be in touch within 24 hours to arrange your demo or consultation.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-surface-raised rounded-3xl p-8 md:p-10 border border-hairline/10 shadow-sm space-y-6">
                  {/* Enquiry type */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {enquiryTypes.map((t) => (
                      <button key={t} type="button" onClick={() => update("type", t)}
                        className={`px-3 py-2.5 rounded-xl text-xs font-semibold border transition-all ${
                          form.type === t ? "bg-ink text-canvas border-ink" : "border-hairline/20 text-ink-secondary hover:border-ink/30"
                        }`}>
                        {t}
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
                    <div className="space-y-2"><Label>Solution Interest</Label>
                      <Select value={form.service} onValueChange={v => update("service", v)}>
                        <SelectTrigger className="h-11 rounded-xl"><SelectValue placeholder="Select solution" /></SelectTrigger>
                        <SelectContent>{servicesList.map(s => <SelectItem key={s} value={s}>{s}</SelectItem>)}</SelectContent>
                      </Select>
                    </div>
                  </div>
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
                  {["Response within 24 hours", "30-minute free platform demo", "No obligation, no hard sell", "Tailored recommendations for your business", "Clear pricing and timeline"].map(item => (
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
