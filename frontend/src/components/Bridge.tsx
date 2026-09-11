import { ArrowLeftRight, Quote } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Section";

const BRIDGE_ACTIONS = ["Triage", "Investigate", "Communicate", "Fix", "Improve"];

export function Bridge() {
  return (
    <section id="bridge" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHead
        no="10"
        eyebrow="Support + Engineering"
        title="Two languages. One person fluent in both."
      />

      <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-12">
        <Reveal className="lg:col-span-4">
          <div
            data-testid="bridge-customer-side"
            className="flex h-full flex-col rounded-2xl border border-rose-200 bg-rose-50/50 p-8"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-rose-500 uppercase">
              The customer
            </p>
            <Quote className="mt-6 h-6 w-6 text-rose-300" />
            <p className="mt-3 font-heading text-2xl font-semibold leading-snug text-slate-900">
              &ldquo;I can&apos;t complete my workflow.&rdquo;
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Ambiguous, urgent, and business-critical. The customer feels the impact —
              they shouldn&apos;t have to speak in stack traces to be understood.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="lg:col-span-4">
          <div
            data-testid="bridge-center"
            className="relative flex h-full flex-col items-center justify-center rounded-2xl border border-sky-200 bg-sky-50/60 p-8 text-center"
          >
            <ArrowLeftRight className="h-5 w-5 text-sky-500" />
            <p className="mt-4 font-heading text-xl font-semibold tracking-wide text-slate-900 uppercase">
              Shanu
            </p>
            <p className="mt-1 font-mono text-[10px] tracking-[0.25em] text-sky-600 uppercase">
              The bridge
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-2">
              {BRIDGE_ACTIONS.map((a, i) => (
                <span
                  key={a}
                  className="rounded-full border border-sky-200 bg-white px-3.5 py-1.5 font-mono text-[11px] font-medium tracking-wide text-sky-700"
                >
                  {String(i + 1).padStart(2, "0")} {a}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.2} className="lg:col-span-4">
          <div
            data-testid="bridge-engineering-side"
            className="flex h-full flex-col rounded-2xl border border-emerald-200 bg-emerald-50/50 p-8"
          >
            <p className="font-mono text-[10px] tracking-[0.25em] text-emerald-600 uppercase">
              The engineering
            </p>
            <Quote className="mt-6 h-6 w-6 text-emerald-300" />
            <p className="mt-3 font-heading text-2xl font-semibold leading-snug text-slate-900">
              &ldquo;Let&apos;s understand why.&rdquo;
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-slate-600">
              Logs, SQL, condition rules, and code paths. The system holds the answer —
              the job is knowing where to look and how to read it.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
