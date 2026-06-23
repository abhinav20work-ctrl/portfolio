import { ReactLenis } from "lenis/react";
import HeroSection from "@/components/portfolio/HeroSection";
import LabBench from "@/components/portfolio/LabBench";
import LabTicker from "@/components/portfolio/LabTicker";
import CaseStudiesSection from "@/components/portfolio/CaseStudiesSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import FooterSection from "@/components/portfolio/FooterSection";
import StickyNav from "@/components/portfolio/StickyNav";

export default function PortfolioPage() {
  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.15, smoothWheel: true }}>
      <main data-testid="portfolio-page">
        <StickyNav />
        <HeroSection />
        <LabBench />
        <LabTicker />
        <CaseStudiesSection />
        <ProjectsSection />
        <ProcessSection />
        <FooterSection />
      </main>
    </ReactLenis>
  );
}