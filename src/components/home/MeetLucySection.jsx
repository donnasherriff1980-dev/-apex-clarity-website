import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Sparkles } from "lucide-react";
import LucyOrb from "@/components/common/LucyOrb";

const INTRO_LINES = [
  "Good afternoon.",
  "I've noticed three certificates expire next month.",
  "Want me to prepare the renewal list?",
];

const SUGGESTED_QUESTIONS = [
  "How do you help with RAMS?",
  "Can you monitor expired certificates?",
  "How do you manage subcontractors?",
  "How do you help us pass audits?",
  "How do you help social housing contractors?",
];

const SCRIPTED_RESPONSES = [
  {
    match: ["rams", "risk assessment", "method statement"],
    reply: "I keep RAMS organised and current — flagging outdated documents, matching the right method statement to the right job, and surfacing gaps before a site visit finds them.",
  },
  {
    match: ["certificate", "expire", "expiry"],
    reply: "Yes. I track every certificate and qualification against its renewal date, and I flag anything approaching expiry well before it becomes a compliance gap — not after.",
  },
  {
    match: ["subcontractor", "supply chain", "contractor"],
    reply: "I monitor subcontractor compliance documentation — insurance, accreditations, RAMS — and flag anyone falling out of date, so your supply chain stays audit-ready.",
  },
  {
    match: ["audit", "pass audits", "inspection"],
    reply: "I keep your evidence organised as it's created, not gathered in a panic beforehand — so when an audit or client inspection lands, you're already ready.",
  },
  {
    match: ["social housing", "housing contractor", "registered provider"],
    reply: "For social housing contractors, I track resident safety evidence and asset compliance continuously, so board and regulator reporting is an export, not a scramble.",
  },
];

const FALLBACK_REPLY = "That's exactly the kind of question I handle day to day. Book a demo and I'll show you properly.";

function findResponse(text) {
  const lower = text.toLowerCase();
  const match = SCRIPTED_RESPONSES.find((r) => r.match.some((kw) => lower.includes(kw)));
  return match ? match.reply : FALLBACK_REPLY;
}

export default function MeetLucySection() {
  const [introIndex, setIntroIndex] = useState(0);
  const [conversation, setConversation] = useState([]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (introIndex >= INTRO_LINES.length) return;
    const t = setTimeout(() => setIntroIndex((i) => i + 1), 900);
    return () => clearTimeout(t);
  }, [introIndex]);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [conversation, typing]);

  const ask = (question) => {
    if (!question.trim()) return;
    setConversation((c) => [...c, { role: "user", text: question }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setTyping(false);
      setConversation((c) => [...c, { role: "lucy", text: findResponse(question) }]);
    }, 900 + Math.random() * 500);
  };

  const introDone = introIndex >= INTRO_LINES.length;

  return (
    <section className="py-24 lg:py-32 bg-brand-dark relative overflow-hidden">
      <div className="absolute inset-0 lucy-water" />
      <div className="absolute inset-0 lucy-overlay" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="text-xs font-bold text-teal-300 uppercase tracking-widest mb-4 block">The Face of Apex Clarity</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Meet Lucy</h2>
          <span className="inline-flex items-center gap-1.5 text-xs text-white/70 bg-white/8 border border-white/15 rounded-full px-3 py-1.5">
            <Sparkles className="w-3 h-3 text-teal-300" /> Preview conversation — illustrative, not live AI
          </span>
        </div>

        <div className="grid md:grid-cols-[220px_1fr] gap-10 items-start">
          <div className="flex md:flex-col items-center justify-center gap-6">
            <LucyOrb size={160} />
          </div>

          <div className="glass rounded-3xl p-6 md:p-8 border border-white/10">
            <div ref={scrollRef} className="max-h-[360px] overflow-y-auto space-y-4 mb-6 pr-1">
              {INTRO_LINES.slice(0, introIndex).map((line, i) => (
                <motion.p
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-white/80 text-base md:text-lg leading-relaxed"
                >
                  {line}
                </motion.p>
              ))}

              {conversation.map((m, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-teal/15 text-white border border-teal/25"
                        : "bg-white/6 text-white/85 border border-white/10"
                    }`}
                  >
                    {m.text}
                  </div>
                </motion.div>
              ))}

              <AnimatePresence>
                {typing && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="flex items-center gap-1.5 text-white/30 text-sm pl-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse [animation-delay:150ms]" />
                    <span className="w-1.5 h-1.5 rounded-full bg-teal-300 animate-pulse [animation-delay:300ms]" />
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {introDone && (
              <>
                {conversation.length === 0 && (
                  <div className="flex flex-wrap gap-2 mb-4">
                    {SUGGESTED_QUESTIONS.map((q) => (
                      <button
                        key={q}
                        onClick={() => ask(q)}
                        className="text-xs font-medium text-teal-200 bg-teal-400/10 border border-teal-300/20 rounded-full px-3.5 py-2 hover:bg-teal-400/20 transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}
                <form
                  onSubmit={(e) => { e.preventDefault(); ask(input); }}
                  className="flex items-center gap-2 border-t border-white/8 pt-4"
                >
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Ask Lucy a question..."
                    className="flex-1 bg-white/5 border border-white/10 rounded-xl px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:outline-none focus:border-teal-300/40"
                  />
                  <button
                    type="submit"
                    className="w-10 h-10 rounded-xl bg-teal-400/15 border border-teal-300/25 flex items-center justify-center text-teal-200 hover:bg-teal-400/25 transition-colors shrink-0"
                    aria-label="Ask Lucy"
                  >
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              </>
            )}
          </div>
        </div>

        <p className="flex items-center justify-center gap-1.5 text-white/45 text-xs mt-6">
          <Sparkles className="w-3 h-3" /> A preview conversation — illustrative, not live AI. Book a demo to talk to the real thing.
        </p>
      </div>
    </section>
  );
}
