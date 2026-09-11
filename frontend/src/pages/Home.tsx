import { useEffect } from "react";
import Lenis from "lenis";
import { Toaster } from "@/components/ui/sonner";
import { lenisStore } from "@/lib/lenis";
import { Nav } from "@/components/Nav";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { Philosophy } from "@/components/Philosophy";
import { Metrics } from "@/components/Metrics";
import { Experience } from "@/components/Experience";
import { InvestigationCase } from "@/components/InvestigationCase";
import { LuaCase } from "@/components/LuaCase";
import { AutomationCase } from "@/components/AutomationCase";
import { MonitoringCase } from "@/components/MonitoringCase";
import { Bridge } from "@/components/Bridge";
import { CustomerCentricity } from "@/components/CustomerCentricity";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { KnowledgeBase } from "@/components/KnowledgeBase";
import { ProductFeedback } from "@/components/ProductFeedback";
import { WhyPlatform } from "@/components/WhyPlatform";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const lenis = new Lenis({ lerp: 0.11 });
    lenisStore.instance = lenis;
    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);
    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      lenisStore.instance = null;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#F8FAFC] text-slate-900">
      <Nav />
      <main>
        <Hero />
        <Marquee />
        <Philosophy />
        <Metrics />
        <Experience />
        <div id="case-studies" className="bg-[#0B0F17] bg-grid-dark">
          <InvestigationCase />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="border-t border-slate-800/70" />
          </div>
          <LuaCase />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="border-t border-slate-800/70" />
          </div>
          <AutomationCase />
          <div className="mx-auto max-w-7xl px-5 sm:px-8">
            <div className="border-t border-slate-800/70" />
          </div>
          <MonitoringCase />
        </div>
        <Bridge />
        <CustomerCentricity />
        <Projects />
        <Skills />
        <KnowledgeBase />
        <ProductFeedback />
        <WhyPlatform />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
