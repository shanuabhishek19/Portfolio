import { UserCheck, SearchCode, Terminal, RefreshCw } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Section";
import { PHILOSOPHY_CARDS } from "@/data/content";

const ICONS = [UserCheck, SearchCode, Terminal, RefreshCw];

export function Philosophy() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHead
        no="01"
        eyebrow="What I bring"
        title="Support is more than closing tickets."
        sub="I combine customer-facing support with engineering thinking — investigating problems deeply, communicating clearly, and looking for ways to prevent the same issue from happening again."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-2">
        {PHILOSOPHY_CARDS.map((card, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={card.title} delay={i * 0.08} className={i === 0 ? "md:col-span-2" : ""}>
              <article
                data-testid={`philosophy-card-${i + 1}`}
                className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-900/5 sm:p-8"
              >
                <div className="flex items-start justify-between gap-6">
                  <div>
                    <span className="grid h-11 w-11 place-items-center rounded-xl bg-sky-50 text-sky-600 transition-colors duration-300 group-hover:bg-sky-600 group-hover:text-white">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-5 font-heading text-lg font-semibold tracking-wide text-slate-900 uppercase">
                      {card.title}
                    </h3>
                    <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-slate-600">
                      {card.body}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-slate-300 transition-colors duration-300 group-hover:text-sky-500">
                    0{i + 1}
                  </span>
                </div>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
