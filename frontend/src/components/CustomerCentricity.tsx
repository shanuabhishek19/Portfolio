import { ArrowDown } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Section";

const TRANSLATION_TIERS = [
  {
    stage: "Technical Root Cause",
    tone: "border-slate-300 bg-slate-50",
    tag: "text-slate-500",
    text: "A condition rule referenced a deprecated property name after the schema migration, so the dispatcher skipped task evaluation.",
  },
  {
    stage: "Human Explanation",
    tone: "border-sky-200 bg-sky-50/60",
    tag: "text-sky-600",
    text: "Last night's update changed how the system reads sign-off tasks — yours paused instead of failing. Nothing you did caused it.",
  },
  {
    stage: "Actionable Solution",
    tone: "border-emerald-200 bg-emerald-50/60",
    tag: "text-emerald-600",
    text: "I've applied the fix and re-run your task — it's released now. Here's the one-step check if you ever see this again.",
  },
];

const PRINCIPLES = [
  "Listening first",
  "Asking the right questions",
  "Explaining simply",
  "Setting expectations",
  "Actionable guidance",
  "Owning the issue",
  "Following up",
];

export function CustomerCentricity() {
  return (
    <section id="communication" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHead
          no="11"
          eyebrow="Customer-centricity"
          title="Technical depth. Human communication."
          sub="Support isn't only about knowing the technology. A correct diagnosis delivered badly is still a bad experience — so every technical answer gets translated twice."
        />

        <div className="mx-auto mt-14 max-w-3xl">
          {TRANSLATION_TIERS.map((tier, i) => (
            <Reveal key={tier.stage} delay={i * 0.12}>
              <div
                data-testid={`translation-tier-${i + 1}`}
                className={`rounded-2xl border p-7 sm:p-8 ${tier.tone}`}
              >
                <p className={`font-mono text-[10px] tracking-[0.25em] uppercase ${tier.tag}`}>
                  {String(i + 1).padStart(2, "0")} · {tier.stage}
                </p>
                <p className="mt-3 text-base leading-relaxed text-slate-800 md:text-lg">
                  {tier.text}
                </p>
              </div>
              {i < TRANSLATION_TIERS.length - 1 && (
                <div className="flex justify-center py-3">
                  <span className="grid h-9 w-9 place-items-center rounded-full border border-slate-200 bg-white text-slate-400">
                    <ArrowDown className="h-4 w-4" />
                  </span>
                </div>
              )}
            </Reveal>
          ))}

          <Reveal delay={0.3}>
            <div className="mt-10 flex flex-wrap justify-center gap-2">
              {PRINCIPLES.map((p) => (
                <span
                  key={p}
                  className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-[13px] font-medium text-slate-600"
                >
                  {p}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
