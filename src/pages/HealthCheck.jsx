import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import { ArrowRight, ArrowLeft, Loader2, BarChart3, AlertTriangle, TrendingUp, AlertCircle } from "lucide-react";
import { submitLead } from "@/lib/leads";
import SEO from "@/components/common/SEO";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { useDeclareHeaderSurface } from "@/lib/HeaderSurfaceContext";

const questions = [
  { category: "Compliance", question: "How do you currently track regulatory compliance?", options: ["No formal tracking", "Spreadsheets / manual checks", "Partly automated system", "Fully automated live system"] },
  { category: "Health & Safety", question: "How are H&S incidents, inspections and toolbox talks managed?", options: ["Paper-based / no system", "Mix of paper and spreadsheets", "Basic digital tool", "Integrated digital H&S platform"] },
  { category: "Reporting", question: "How do senior leaders access business performance data?", options: ["Manual reports prepared on request", "Weekly/monthly spreadsheet reports", "Basic dashboards", "Live real-time dashboards"] },
  { category: "Processes", question: "How well-documented and standardised are your core business processes?", options: ["Not documented", "Partially documented", "Documented but outdated", "Fully documented and current"] },
  { category: "Risk Management", question: "How do you manage and monitor operational and business risks?", options: ["No formal risk management", "Risk register in spreadsheets", "Basic risk system", "Live risk platform with scoring"] },
  { category: "Systems", question: "How integrated are your business systems and tools?", options: ["All siloed, no integration", "Minimal integration, mostly manual", "Some integration with gaps", "Fully integrated single platform"] },
  { category: "Automation", question: "How much of your administrative work is automated?", options: ["Almost nothing automated", "Some email/calendar automation", "Basic workflow automation", "Full AI-powered automation"] },
  { category: "Projects", question: "How do you manage and track project delivery?", options: ["Emails and spreadsheets", "Basic project management tool", "PM software with some gaps", "Full project lifecycle management"] },
];

// Grade colours are a semantic A/B/C/D severity scale (green → blue → amber → red),
// not a generic brand accent — "C" intentionally keeps a gold/amber tone as the
// status colour for its tier and is not part of the gold→teal migration.
const getResult = (pct) => {
  if (pct >= 75) return { grade: "A", label: "High Performer", color: "text-emerald-400", bgColor: "bg-emerald-400/10", summary: "Your operations are well-managed with strong systems in place. Focus on optimisation and scaling.", icon: TrendingUp };
  if (pct >= 50) return { grade: "B", label: "Good Foundation", color: "text-blue-400", bgColor: "bg-blue-400/10", summary: "You have some good systems but significant gaps remain. Targeted improvements could yield major efficiency gains.", icon: BarChart3 };
  if (pct >= 25) return { grade: "C", label: "Needs Improvement", color: "text-gold", bgColor: "bg-gold/10", summary: "Multiple operational areas need attention. A structured approach to systems improvement would significantly impact your business.", icon: AlertTriangle };
  return { grade: "D", label: "Critical Action Required", color: "text-red-400", bgColor: "bg-red-400/10", summary: "Your operations are being held back by fragmented systems and manual processes. Urgent action is recommended.", icon: AlertTriangle };
};

export default function HealthCheck() {
  useDeclareHeaderSurface("dark");
  const [stage, setStage] = useState("intro");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [unlocked, setUnlocked] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [consent, setConsent] = useState(false);

  const score = answers.reduce((s, a) => s + a, 0);
  const maxScore = questions.length * 3;
  const percentage = Math.round((score / maxScore) * 100);
  const result = getResult(percentage);

  const handleUnlock = async () => {
    if (!email || !name || !consent) return;
    setSubmitting(true);
    setSubmitError(false);
    try {
      await submitLead({
        source: "health_check",
        enquiry_type: "H&S Consultancy",
        name,
        company,
        email,
        health_check_score_pct: percentage,
        health_check_grade: result.grade,
        gdpr_consent: consent,
      });
      setUnlocked(true);
    } catch (err) {
      console.error("Failed to submit health check lead:", err);
      setSubmitError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const handleAnswer = (i) => {
    const newAnswers = [...answers, i];
    setAnswers(newAnswers);
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      setStage("processing");
      setTimeout(() => setStage("results"), 2500);
    }
  };

  const handleBack = () => {
    if (currentQ > 0) { setCurrentQ(currentQ - 1); setAnswers(answers.slice(0, -1)); }
  };

  if (stage === "intro") {
    return (
      <>
        <SEO
          title="Free H&S Compliance Check"
          description="Answer 8 questions for a free score showing how your health, safety and compliance arrangements currently stand up — and where the Apex Clarity platform would take the load off."
          path="/health-check"
        />
        <section className="pt-32 pb-24 bg-brand-dark relative overflow-hidden">
          <div className="absolute inset-0 grid-pattern" />
          <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-xs font-bold text-teal uppercase tracking-widest mb-6 block">Free H&amp;S Compliance Check</span>
              <h1 className="text-5xl md:text-6xl font-black text-white mb-6">How Would Your H&amp;S<br /><span className="gradient-text-brand">Stand Up Today?</span></h1>
              <p className="text-xl text-white/50 mb-10 max-w-2xl mx-auto">Eight questions about how health, safety and compliance work in your business today. You get a score broken down by area — free, no obligation.</p>
              <Button onClick={() => setStage("quiz")} size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 rounded-2xl">
                Start Free Assessment <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <div className="flex items-center justify-center gap-8 mt-10">
                {[["8", "Questions"], ["2 min", "To complete"], ["Free", "No obligation"]].map(([val, lbl]) => (
                  <div key={lbl} className="text-center">
                    <p className="text-teal font-black text-2xl">{val}</p>
                    <p className="text-white/40 text-sm">{lbl}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>
        <section className="py-20 bg-surface">
          <div className="max-w-4xl mx-auto px-6 grid md:grid-cols-4 gap-6">
            {["Compliance", "H&S", "Reporting", "Automation", "Risk", "Systems", "Processes", "Projects"].map(area => (
              <div key={area} className="bg-surface-raised rounded-2xl p-4 text-center border border-hairline/10">
                <p className="font-semibold text-ink text-sm">{area}</p>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-ink-secondary mt-6">Covering the areas Apex Clarity is built to control day to day</p>
        </section>
      </>
    );
  }

  if (stage === "processing") {
    return (
      <section className="min-h-screen bg-brand-dark flex items-center justify-center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center px-6">
          <Loader2 className="w-14 h-14 text-teal animate-spin mx-auto mb-6" />
          <h2 className="text-3xl font-black text-white mb-3">Analysing Your Results</h2>
          <p className="text-white/50">Scoring your answers by area...</p>
        </motion.div>
      </section>
    );
  }

  if (stage === "results") {
    const ResultIcon = result.icon;
    return (
      <section className="min-h-screen bg-brand-dark pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
            <span className="text-xs font-bold text-teal uppercase tracking-widest mb-4 block">Your Results</span>
            <h1 className="text-4xl font-black text-white mb-8">Your H&amp;S Compliance Check</h1>
            {/* Ring is fixed decorative chrome around the badge, not itself a status
                colour (the letter/background/text below already carry the grade) */}
            <div className={`inline-flex flex-col items-center justify-center w-44 h-44 rounded-full border-4 border-teal/30 ${result.bgColor} mb-6`}>
              <span className={`text-6xl font-black ${result.color}`}>{result.grade}</span>
              <span className="text-white/50 text-sm">{percentage}%</span>
            </div>
            <p className={`text-xl font-bold ${result.color} mb-3`}>{result.label}</p>
            <p className="text-white/50 max-w-lg mx-auto">{result.summary}</p>
          </motion.div>

          {!unlocked ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
              className="glass rounded-3xl p-8 md:p-10 border border-white/10 text-center">
              <BarChart3 className="w-10 h-10 text-teal mx-auto mb-4" />
              <h3 className="text-2xl font-black text-white mb-3">Unlock Your Full Report</h3>
              <p className="text-white/50 mb-8">See your score broken down question by question. We&apos;ll follow up to talk through the weakest areas and what supporting them would involve.</p>
              <div className="max-w-sm mx-auto space-y-4">
                <Input placeholder="Your name" value={name} onChange={e => setName(e.target.value)} className="bg-white/8 border-white/15 text-white placeholder:text-white/30 h-11 rounded-xl" />
                <Input placeholder="Company name" value={company} onChange={e => setCompany(e.target.value)} className="bg-white/8 border-white/15 text-white placeholder:text-white/30 h-11 rounded-xl" />
                <Input type="email" placeholder="Work email address" value={email} onChange={e => setEmail(e.target.value)} className="bg-white/8 border-white/15 text-white placeholder:text-white/30 h-11 rounded-xl" />
                <label className="flex items-start gap-2.5 text-left text-white/40 text-xs cursor-pointer">
                  <Checkbox checked={consent} onCheckedChange={(v) => setConsent(!!v)} className="mt-0.5 border-white/30" />
                  I agree to Apex Clarity storing my details in line with the <Link to="/privacy" className="text-teal hover:underline">Privacy Policy</Link> to send my report.
                </label>
                <Button onClick={handleUnlock} disabled={submitting || !consent} className="w-full bg-teal text-canvas hover:bg-teal/90 font-bold h-12 rounded-xl">
                  {submitting ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Sending...</> : <>Get My Free Report <ArrowRight className="w-4 h-4 ml-2" /></>}
                </Button>
                {submitError && (
                  <p className="flex items-center justify-center gap-2 text-sm text-red-400 mt-3">
                    <AlertCircle className="w-4 h-4 shrink-0" /> Something went wrong. Please try again.
                  </p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
              {questions.map((q, i) => {
                const answerScore = answers[i] ?? 0;
                // Per-question tier colour — status scale, not brand gold. Left untouched.
                const scoreColor = answerScore >= 2 ? "text-emerald-400" : answerScore === 1 ? "text-gold" : "text-red-400";
                return (
                  <div key={i} className="glass border border-white/10 rounded-2xl p-6">
                    <div className="flex items-start justify-between gap-4">
                      <div className="flex-1">
                        <span className="text-xs font-bold text-teal uppercase tracking-wider">{q.category}</span>
                        <p className="text-white font-medium mt-1 mb-1 text-sm">{q.question}</p>
                        <p className="text-white/40 text-xs">{q.options[answerScore]}</p>
                      </div>
                      <div className="shrink-0 text-right">
                        <span className={`text-lg font-black ${scoreColor}`}>{answerScore + 1}/4</span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <Progress value={((answerScore + 1) / 4) * 100} className="h-1.5 bg-white/10" />
                    </div>
                  </div>
                );
              })}
              <div className="text-center pt-8">
                <p className="text-white/50 mb-6 text-sm">Want to see how the platform would close the weak areas?</p>
                <Button onClick={() => window.location.href = "/contact?type=demo"} size="lg" className="bg-teal text-canvas hover:bg-teal/90 font-bold h-14 px-10 rounded-2xl">
                  Book a Demo <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </div>
            </motion.div>
          )}
        </div>
      </section>
    );
  }

  // Quiz
  const q = questions[currentQ];
  return (
    <section className="min-h-screen bg-brand-dark flex items-center">
      <div className="max-w-2xl mx-auto px-6 w-full py-32">
        <div className="mb-10">
          <div className="flex justify-between text-xs text-white/40 mb-2">
            <span>Question {currentQ + 1} of {questions.length}</span>
            <span className="font-semibold text-teal">{q.category}</span>
          </div>
          <Progress value={((currentQ + 1) / questions.length) * 100} className="h-1 bg-white/10" />
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={currentQ} initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} transition={{ duration: 0.25 }}>
            <h2 className="text-2xl md:text-3xl font-black text-white mb-10 leading-snug">{q.question}</h2>
            <div className="space-y-3">
              {q.options.map((opt, i) => (
                <button key={i} onClick={() => handleAnswer(i)}
                  className="w-full text-left px-6 py-4 rounded-2xl border border-white/10 bg-white/4 text-white/70 hover:bg-teal/10 hover:border-teal/40 hover:text-white transition-all duration-200 group">
                  <span className="text-teal/60 mr-3 font-bold text-sm">{String.fromCharCode(65 + i)}.</span>
                  <span className="text-sm">{opt}</span>
                </button>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {currentQ > 0 && (
          <button onClick={handleBack} className="mt-8 text-white/30 hover:text-white flex items-center gap-2 text-sm transition-colors">
            <ArrowLeft className="w-4 h-4" /> Previous
          </button>
        )}
      </div>
    </section>
  );
}
