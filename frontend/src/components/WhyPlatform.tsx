import { Boxes, Route, Wrench, GraduationCap } from "lucide-react";
import { Reveal, SectionHead } from "@/components/Section";
import { WHY_PLATFORM } from "@/data/content";

const ICONS = [Boxes, Route, Wrench, GraduationCap];

export function WhyPlatform() {
  return (
    <section id="why-platform" className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
      <SectionHead
        no="14"
        eyebrow="Why platform support"
        title="Where product knowledge, troubleshooting, and communication intersect."
        sub="I enjoy working exactly where deep platform expertise, technical investigation, customer communication, and continuous improvement meet — that's the intersection platform support lives at."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {WHY_PLATFORM.map((item, i) => {
          const Icon = ICONS[i];
          return (
            <Reveal key={item.title} delay={i * 0.08}>
              <article
                data-testid={`why-platform-card-${i + 1}`}
                className="group h-full rounded-2xl border border-slate-200 bg-white p-7 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-sky-200 hover:shadow-lg hover:shadow-sky-900/5"
              >
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-slate-900 text-white transition-colors duration-300 group-hover:bg-sky-600">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-heading text-base font-semibold tracking-wide text-slate-900 uppercase">
                  {item.title}
                </h3>
                <p className="mt-3 text-[14.5px] leading-relaxed text-slate-600">{item.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}
