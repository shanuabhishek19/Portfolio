import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Reveal, SectionHead, DemoBadge } from "@/components/Section";
import { INVESTIGATION_STEPS } from "@/data/content";

export function InvestigationCase() {
  const [step, setStep] = useState(0);
  const current = INVESTIGATION_STEPS[step];

  return (
    <section id="investigation" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHead
          no="04"
          eyebrow="Signature case study"
          title="How I solve technical problems"
          sub="An anonymized walkthrough of a typical enterprise case — the same structure I follow on every investigation. No confidential data; the scenario is illustrative."
          dark
        />
        <Reveal delay={0.15}>
          <DemoBadge label="Anonymized example" />
        </Reveal>
      </div>

      <Reveal delay={0.1}>
        <div
          data-testid="investigation-interface"
          className="mt-14 grid gap-6 lg:grid-cols-12"
        >
          <div className="lg:col-span-5">
            <ol className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2">
              {INVESTIGATION_STEPS.map((s, i) => {
                const isActive = i === step;
                return (
                  <li key={s.n}>
                    <button
                      data-testid={`investigation-step-${s.n}`}
                      onClick={() => setStep(i)}
                      aria-pressed={isActive}
                      className={`flex w-full items-center gap-3 rounded-xl border px-4 py-3.5 text-left transition-all duration-200 ${
                        isActive
                          ? "border-sky-500/60 bg-sky-500/10 text-slate-50"
                          : "border-slate-800 bg-slate-900/40 text-slate-400 hover:border-slate-700 hover:text-slate-200"
                      }`}
                    >
                      <span
                        className={`font-mono text-xs ${isActive ? "text-sky-400" : "text-slate-600"}`}
                      >
                        {s.n}
                      </span>
                      <span className="text-sm font-medium">{s.title}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </div>

          <div className="lg:col-span-7">
            <div className="overflow-hidden rounded-2xl border border-slate-800 bg-[#07090E]">
              <div className="flex items-center justify-between border-b border-slate-800 px-5 py-3">
                <div className="flex items-center gap-1.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-rose-500/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/70" />
                </div>
                <p className="font-mono text-[11px] text-slate-500">
                  case-investigation · step {current.n}/08
                </p>
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={step}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -24 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                  className="p-6 sm:p-8"
                >
                  <h3 className="font-heading text-2xl font-semibold text-slate-50">
                    <span className="mr-3 font-mono text-base text-sky-400">{current.n}</span>
                    {current.title}
                  </h3>
                  <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-slate-400">
                    {current.body}
                  </p>

                  {current.chips && (
                    <div className="mt-5 flex flex-wrap gap-2">
                      {current.chips.map((c) => (
                        <span
                          key={c}
                          className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1.5 font-mono text-[11px] text-sky-300"
                        >
                          {c}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-6 rounded-xl border border-slate-800 bg-[#05080E] p-5">
                    <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500 uppercase">
                      {current.evidenceLabel}
                    </p>
                    <pre className="mt-3 overflow-x-auto font-mono text-[12.5px] leading-relaxed whitespace-pre-wrap text-slate-300">
                      {current.evidence.join("\n")}
                      <span className="animate-blink-caret text-sky-400">▌</span>
                    </pre>
                  </div>
                </motion.div>
              </AnimatePresence>

              <div className="flex items-center justify-between border-t border-slate-800 px-5 py-4">
                <button
                  data-testid="investigation-prev"
                  onClick={() => setStep((s) => Math.max(0, s - 1))}
                  disabled={step === 0}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-xs font-medium text-slate-300 transition-colors duration-200 hover:border-sky-500 hover:text-sky-300 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  <ArrowLeft className="h-3.5 w-3.5" />
                  Previous
                </button>
                <div className="flex gap-1.5">
                  {INVESTIGATION_STEPS.map((s, i) => (
                    <span
                      key={s.n}
                      className={`h-1 rounded-full transition-all duration-300 ${
                        i === step ? "w-6 bg-sky-400" : "w-2.5 bg-slate-700"
                      }`}
                    />
                  ))}
                </div>
                <button
                  data-testid="investigation-next"
                  onClick={() => setStep((s) => Math.min(INVESTIGATION_STEPS.length - 1, s + 1))}
                  disabled={step === INVESTIGATION_STEPS.length - 1}
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-4 py-2 text-xs font-medium text-slate-950 transition-colors duration-200 hover:bg-sky-400 disabled:cursor-not-allowed disabled:opacity-30"
                >
                  Next
                  <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
