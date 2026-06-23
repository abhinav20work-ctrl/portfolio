import HeroSection from "@/components/portfolio/HeroSection";
import HowSection from "@/components/portfolio/HowSection";
import CaseStudiesSection from "@/components/portfolio/CaseStudiesSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import ProcessSection from "@/components/portfolio/ProcessSection";
import FooterSection from "@/components/portfolio/FooterSection";

export default function PortfolioPage() {
  return (
    <main data-testid="portfolio-page">
      <HeroSection />
      <HowSection />
      <CaseStudiesSection />
      <ProjectsSection />
      <ProcessSection />
      <FooterSection />
    </main>
  );
}