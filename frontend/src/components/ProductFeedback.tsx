import { ArrowDown, ArrowRight } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Section";
import { FEEDBACK_FLOW } from "@/data/content";

export function ProductFeedback() {
  return (
    <section id="feedback" className="border-t border-slate-200 bg-slate-50/60">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHead
          no="13"
          eyebrow="Product & engineering collaboration"
          title="When support becomes product feedback."
          sub="Working with engineering and business stakeholders means customer problems don't stop at resolution — they get documented, patterned, and fed back as technical context the product team can act on."
        />

        <Reveal delay={0.1}>
          <div
            data-testid="feedback-flow"
            className="mt-14 flex flex-col items-stretch gap-3 lg:flex-row lg:items-center"
          >
            {FEEDBACK_FLOW.map((step, i) => (
              <div key={step} className="flex flex-1 flex-col items-center gap-3 lg:flex-row">
                <div
                  className={`w-full flex-1 rounded-xl border px-5 py-4 text-center transition-colors duration-300 ${
                    i === FEEDBACK_FLOW.length - 1
                      ? "border-emerald-300 bg-emerald-50"
                      : "border-slate-200 bg-white hover:border-sky-200"
                  }`}
                >
                  <p className="font-mono text-[10px] tracking-[0.2em] text-slate-400 uppercase">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <p
                    className={`mt-1.5 text-sm font-semibold ${
                      i === FEEDBACK_FLOW.length - 1 ? "text-emerald-700" : "text-slate-800"
                    }`}
                  >
                    {step}
                  </p>
                </div>
                {i < FEEDBACK_FLOW.length - 1 && (
                  <span className="flex justify-center text-slate-300">
                    <ArrowRight className="hidden h-4 w-4 lg:block" />
                    <ArrowDown className="h-4 w-4 lg:hidden" />
                  </span>
                )}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
