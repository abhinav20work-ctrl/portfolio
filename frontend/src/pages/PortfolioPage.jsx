import { ReactLenis } from "lenis/react";
import HeroSection from "@/components/portfolio/HeroSection";
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
        <CaseStudiesSection />
        <ProjectsSection />
        <ProcessSection />
        <FooterSection />
      </main>
    </ReactLenis>
  );
}