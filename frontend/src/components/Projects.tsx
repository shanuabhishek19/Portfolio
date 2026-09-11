import { motion } from "motion/react";
import { ArrowDown, Flower2, Network } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Section";

const ARCH = [
  { label: "Client", note: "single REST contract" },
  { label: "Flask API", note: "routing · validation" },
  { label: "Provider Adapters", note: "one adapter per source" },
  { label: "Flight Providers A · B · C", note: "external APIs, inconsistent schemas" },
  { label: "Normalization", note: "inconsistent JSON → one schema" },
  { label: "Deduplication", note: "same flight, many sources" },
  { label: "Paginated Response", note: "optimized search results" },
];

const TRAVEL_POINTS = [
  "Normalized inconsistent JSON schemas from multiple providers into one response contract",
  "De-duplicated overlapping records across providers",
  "Handled external API failures and non-200 responses gracefully",
  "Returned optimized, paginated search results",
];

const IRIS_POINTS = [
  "Classified Iris species from sepal and petal measurements",
  "Evaluated feature importance to improve accuracy",
  "Tuned and validated the model on unseen data",
];

export function Projects() {
  return (
    <section id="projects" className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHead
          no="08"
          eyebrow="Projects"
          title="Things I've built outside the ticket queue."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-8">
            <article
              data-testid="project-travel-backend"
              className="h-full rounded-2xl border border-slate-200 bg-slate-50/50 p-7 transition-colors duration-300 hover:border-sky-200 sm:p-9"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-white">
                  <Network className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-slate-900">
                    Travel Integration Backend
                  </h3>
                  <p className="font-mono text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                    Python · Flask · REST API · JSON · SQL
                  </p>
                </div>
              </div>
              <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-slate-600">
                A modular backend integrating multiple flight-data providers behind a single
                REST API — the same adapter-and-normalize thinking I use when correlating
                evidence across systems in support work.
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase">
                    Architecture
                  </p>
                  <ol className="mt-4">
                    {ARCH.map((node, i) => (
                      <li key={node.label}>
                        <motion.div
                          initial={{ opacity: 0, x: -14 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, margin: "-40px" }}
                          transition={{ duration: 0.5, delay: i * 0.09, ease: [0.16, 1, 0.3, 1] }}
                          className={`rounded-lg border px-4 py-2.5 ${
                            i === 0 || i === ARCH.length - 1
                              ? "border-sky-200 bg-sky-50"
                              : "border-slate-200 bg-white"
                          }`}
                        >
                          <p className="text-sm font-semibold text-slate-800">{node.label}</p>
                          <p className="font-mono text-[10.5px] text-slate-400">{node.note}</p>
                        </motion.div>
                        {i < ARCH.length - 1 && (
                          <span className="flex justify-center py-1 text-slate-300">
                            <ArrowDown className="h-3.5 w-3.5" />
                          </span>
                        )}
                      </li>
                    ))}
                  </ol>
                </div>
                <div>
                  <p className="font-mono text-[10px] tracking-[0.25em] text-slate-400 uppercase">
                    Engineering highlights
                  </p>
                  <ul className="mt-4 space-y-3.5">
                    {TRAVEL_POINTS.map((p) => (
                      <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-slate-600">
                        <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-4">
            <article
              data-testid="project-iris-classification"
              className="h-full rounded-2xl border border-slate-200 bg-white p-7 transition-colors duration-300 hover:border-sky-200 sm:p-8"
            >
              <div className="flex items-center gap-3">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-100 text-slate-700">
                  <Flower2 className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-heading text-xl font-semibold text-slate-900">
                    Iris Flower Classification
                  </h3>
                  <p className="font-mono text-[11px] tracking-[0.15em] text-slate-500 uppercase">
                    Python · Machine Learning
                  </p>
                </div>
              </div>
              <p className="mt-5 text-[15px] leading-relaxed text-slate-600">
                A machine learning classifier built and tuned on the classic Iris dataset —
                an exercise in feature analysis and honest model evaluation.
              </p>
              <ul className="mt-6 space-y-3.5">
                {IRIS_POINTS.map((p) => (
                  <li key={p} className="flex gap-3 text-[14.5px] leading-relaxed text-slate-600">
                    <span className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-sky-500" />
                    {p}
                  </li>
                ))}
              </ul>
              <div className="mt-6 flex flex-wrap gap-2">
                {["Classification", "Feature Importance", "Model Tuning", "Evaluation"].map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-slate-100 px-2.5 py-1 font-mono text-[11px] text-slate-600"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
