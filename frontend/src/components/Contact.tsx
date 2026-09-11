import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Linkedin, FileDown, Copy, Check, Activity } from "lucide-react";
import { toast } from "sonner";
import { Reveal, SectionHead, DemoBadge } from "@/components/Section";
import { LINKS, COMMAND_SYSTEMS } from "@/data/content";

export function Contact() {
  const [system, setSystem] = useState(0);
  const [copied, setCopied] = useState(false);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(LINKS.email);
      setCopied(true);
      toast.success("Email address copied");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Couldn't copy — the address is shown above");
    }
  };

  return (
    <section id="contact" className="bg-[#0B0F17]">
      <div className="mx-auto max-w-7xl px-5 py-24 sm:px-8 lg:py-32">
        <SectionHead
          no="15"
          eyebrow="Resume & contact"
          title="Let's solve something."
          sub="Have a technical challenge, an opportunity, or an interesting problem? I'd love to hear about it."
          dark
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <div className="h-full rounded-2xl border border-slate-800 bg-[#07090E] p-8 sm:p-10">
              <p className="font-mono text-[10px] tracking-[0.25em] text-slate-500 uppercase">
                Want the complete picture?
              </p>
              <h3 className="mt-4 font-heading text-2xl font-semibold text-slate-50 sm:text-3xl">
                The resume has the full record —<br className="hidden sm:block" />
                this site shows how I think.
              </h3>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  data-testid="contact-resume-download"
                  href={LINKS.resume}
                  download
                  className="inline-flex items-center gap-2 rounded-full bg-sky-500 px-6 py-3 text-sm font-semibold text-slate-950 transition-colors duration-200 hover:bg-sky-400"
                >
                  <FileDown className="h-4 w-4" />
                  Download Resume (PDF)
                </a>
                <a
                  data-testid="contact-email-button"
                  href={`mailto:${LINKS.email}`}
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-sky-500 hover:text-sky-300"
                >
                  <Mail className="h-4 w-4" />
                  {LINKS.email}
                </a>
                <button
                  data-testid="contact-copy-email"
                  onClick={copyEmail}
                  aria-label="Copy email address"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-3 text-sm font-medium text-slate-300 transition-colors duration-200 hover:border-slate-500"
                >
                  {copied ? <Check className="h-4 w-4 text-emerald-400" /> : <Copy className="h-4 w-4" />}
                </button>
                <a
                  data-testid="contact-linkedin-button"
                  href={LINKS.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-medium text-slate-200 transition-colors duration-200 hover:border-sky-500 hover:text-sky-300"
                >
                  <Linkedin className="h-4 w-4" />
                  LinkedIn
                </a>
              </div>
              <p className="mt-8 font-mono text-[11px] leading-relaxed text-slate-500">
                response_time: usually &lt; 24h · timezone: IST (UTC+5:30) · location:
                Bengaluru, India
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.12} className="lg:col-span-5">
            <div
              data-testid="command-center"
              className="h-full rounded-2xl border border-slate-800 bg-[#07090E] p-7 sm:p-8"
            >
              <div className="flex items-center justify-between gap-3">
                <p className="flex items-center gap-2 font-mono text-[10px] tracking-[0.25em] text-slate-500 uppercase">
                  <Activity className="h-3.5 w-3.5 text-emerald-400" />
                  Support command center
                </p>
                <DemoBadge label="Portfolio Simulation" />
              </div>
              <div className="mt-6 space-y-2.5">
                {COMMAND_SYSTEMS.map((s, i) => {
                  const isActive = system === i;
                  return (
                    <button
                      key={s.name}
                      data-testid={`system-status-${s.name.toLowerCase().replace(/\s+/g, "-")}`}
                      onClick={() => setSystem(i)}
                      aria-pressed={isActive}
                      className={`flex w-full items-center justify-between rounded-xl border px-4 py-3.5 text-left transition-colors duration-200 ${
                        isActive
                          ? "border-sky-500/50 bg-sky-500/10"
                          : "border-slate-800 bg-slate-900/40 hover:border-slate-700"
                      }`}
                    >
                      <span className={`text-sm font-medium ${isActive ? "text-slate-100" : "text-slate-300"}`}>
                        {s.name}
                      </span>
                      <span className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-emerald-400">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse-dot" />
                        Operational
                      </span>
                    </button>
                  );
                })}
              </div>
              <div className="mt-5 rounded-xl border border-slate-800 bg-[#05080E] p-4">
                <AnimatePresence mode="wait">
                  <motion.p
                    key={system}
                    data-testid="system-detail"
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.22 }}
                    className="text-[13px] leading-relaxed text-slate-400"
                  >
                    {COMMAND_SYSTEMS[system].detail}
                  </motion.p>
                </AnimatePresence>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
