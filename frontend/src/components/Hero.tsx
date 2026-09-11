import { motion, useScroll, useTransform } from "motion/react";
import { ArrowDown, FileDown, Mail, Linkedin, MapPin } from "lucide-react";
import { HERO_TAGS, LINKS } from "@/data/content";
import { scrollToId } from "@/lib/lenis";
import { WorkflowPipeline } from "@/components/WorkflowPipeline";

const HEADLINE = ["Technical Support Engineer", "who thinks like a developer."];

export function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [0, -70]);

  return (
    <section id="home" className="relative overflow-hidden bg-grid-light">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-5 pt-32 pb-20 sm:px-8 lg:grid-cols-12 lg:gap-8 lg:pt-40 lg:pb-28">
        <div className="min-w-0 lg:col-span-7">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap items-center gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-xs font-medium text-emerald-700">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse-dot" />
              Open to Platform & Technical Support roles
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
              <MapPin className="h-3.5 w-3.5" />
              Bengaluru, India
            </span>
          </motion.div>

          <p className="mt-8 font-mono text-xs tracking-[0.3em] text-slate-500 uppercase">
            Shanu Abhishek
          </p>

          <h1 className="mt-3 font-heading text-4xl font-semibold leading-[1.06] tracking-tight text-slate-900 sm:text-5xl lg:text-[3.6rem]">
            {HEADLINE.map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  className={`block ${i === 1 ? "text-sky-600" : ""}`}
                  initial={{ y: "112%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.95, delay: 0.2 + i * 0.14, ease: [0.16, 1, 0.3, 1] }}
                >
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.65, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            2+ years solving enterprise technical issues, supporting 12,000+ users,
            building automation, investigating root causes, and translating complex
            technical problems into clear solutions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.78, ease: [0.16, 1, 0.3, 1] }}
            className="mt-6 flex flex-wrap gap-2"
          >
            {HERO_TAGS.map((t) => (
              <span
                key={t}
                className="rounded-full border border-slate-200 bg-white px-3 py-1.5 font-mono text-[11px] tracking-wide text-slate-600 shadow-xs"
              >
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <button
              data-testid="hero-view-work-button"
              onClick={() => scrollToId("investigation")}
              className="group inline-flex items-center gap-2 rounded-full bg-slate-900 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-sky-600"
            >
              View My Work
              <ArrowDown className="h-4 w-4 transition-transform duration-200 group-hover:translate-y-0.5" />
            </button>
            <a
              data-testid="hero-resume-button"
              href={LINKS.resume}
              download
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-medium text-slate-800 transition-colors duration-200 hover:border-sky-600 hover:text-sky-700"
            >
              <FileDown className="h-4 w-4" />
              Download Resume
            </a>
            <a
              data-testid="hero-connect-button"
              href={`mailto:${LINKS.email}`}
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-slate-600 transition-colors duration-200 hover:text-sky-700"
            >
              Let&apos;s Connect
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.05 }}
            className="mt-7 flex items-center gap-4"
          >
            <a
              data-testid="hero-linkedin-link"
              href={LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors duration-200 hover:border-sky-600 hover:text-sky-600"
            >
              <Linkedin className="h-4.5 w-4.5" />
            </a>
            <a
              data-testid="hero-email-link"
              href={`mailto:${LINKS.email}`}
              aria-label="Send email"
              className="grid h-10 w-10 place-items-center rounded-full border border-slate-200 bg-white text-slate-500 transition-colors duration-200 hover:border-sky-600 hover:text-sky-600"
            >
              <Mail className="h-4.5 w-4.5" />
            </a>
            <span className="font-mono text-xs text-slate-400">{LINKS.email}</span>
          </motion.div>
        </div>

        <motion.div
          style={{ y }}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="min-w-0 lg:col-span-5"
        >
          <WorkflowPipeline />
        </motion.div>
      </div>
    </section>
  );
}
