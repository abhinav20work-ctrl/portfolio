import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { recruiterSignals, strengths } from "@/data/portfolio";

const heroPersonaUrl = "https://customer-assets.emergentagent.com/job_micro-moments-8/artifacts/v412rep6_abhinav-profile.png";

const lines = [
  "From visual design to pure strategy.",
  "I turn endless scrolling into actual engagement.",
  "Through motion, story, and production craft.",
];

export default function HeroSection() {
  const [showPersona, setShowPersona] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section id="top" className="hero-section" data-testid="hero-section">
      <div className="lab-grid-lines" aria-hidden="true" />
      <motion.div className="hero-inner" style={{ y }}>
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-kicker" data-testid="hero-role-text">Abhinav Sharma · Visual Designer & Associate Producer</p>
            <div className="hero-copy" data-testid="hero-three-line-paragraph">
              {lines.map((line, index) => (
                <motion.h1
                  key={line}
                  className="hero-line"
                  initial={{ opacity: 0, y: 32 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.75, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
                  data-testid={`hero-line-${index + 1}`}
                >
                  {line}
                </motion.h1>
              ))}
            </div>
            <motion.div
              className="hero-actions"
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65 }}
            >
              <a href="mailto:hello@example.com" className="primary-pill" data-testid="hero-contact-button">
                <Mail size={18} /> Start a project
              </a>
              <a href="#case-studies" className="secondary-pill" data-testid="hero-work-button">
                See selected work <ArrowDownRight size={18} />
              </a>
              <a href="mailto:hello@example.com?subject=Resume%20request%20for%20Abhinav%20Sharma" className="text-pill" data-testid="hero-resume-link">
                <Download size={17} /> Request resume
              </a>
            </motion.div>
            <div className="hero-system-strip" data-testid="hero-system-strip">
              <span><b>Current</b> Sarla Aviation</span>
              <span><b>Experience</b> Motion + production</span>
              <span><b>Tools</b> After Effects / Premiere Pro</span>
            </div>
          </div>
          <motion.button
            type="button"
            className="recruiter-panel hero-persona-card"
            onClick={() => setShowPersona(true)}
            initial={{ opacity: 0, x: 28, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            whileHover={{ y: -8, rotate: 0.5 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.65, delay: 0.48 }}
            data-testid="hero-recruiter-snapshot"
          >
            <div className="badge-top-row">
              <span className="badge-company-mark" data-testid="hero-badge-company-mark">AS</span>
              <span className="badge-verified" data-testid="hero-badge-verified">Verified Designer</span>
            </div>
            <p className="panel-label" data-testid="hero-snapshot-label">VISUAL DESIGNER · BENGALURU</p>
            <h3 className="id-card-name" data-testid="hero-id-card-name">Abhinav Sharma</h3>
            <div className="hero-persona-large" data-testid="hero-persona-large">
              <img src={heroPersonaUrl} alt="Abhinav Sharma illustrated persona" />
            </div>
            <div className="signal-list">
              {recruiterSignals.map((signal) => (
                <div className="signal-item" key={signal.id} data-testid={`hero-signal-${signal.id}`}>
                  <span>{signal.id === "signal-01" ? "Current Role" : signal.id === "signal-02" ? "Projects" : "Location"}</span>
                  <strong>{signal.id === "signal-01" ? "Motion Graphic Designer" : signal.value}</strong>
                  <em>{signal.id === "signal-01" ? "Sarla Aviation" : signal.label}</em>
                </div>
              ))}
            </div>
            <div className="strength-cloud" data-testid="hero-strength-cloud">
              {strengths.map((strength) => (
                <span key={strength}>{strength}</span>
              ))}
            </div>
            <div className="badge-footer-row" data-testid="hero-badge-footer-row">
              <div className="tiny-qr" aria-label="Decorative QR code" data-testid="hero-badge-qr">
                <span /><span /><span /><span /><span /><span /><span /><span /><span />
              </div>
              <div className="tiny-barcode" aria-hidden="true" data-testid="hero-badge-barcode" />
            </div>
          </motion.button>
        </div>
      </motion.div>
      <Dialog open={showPersona} onOpenChange={setShowPersona}>
        <DialogContent className="persona-dialog lab-dialog" data-testid="hero-persona-popup">
          <div className="persona-popup-grid">
            <div className="persona-art-stage" data-testid="hero-persona-popup-art">
              <img src={heroPersonaUrl} alt="Abhinav Sharma illustrated character" />
            </div>
            <div className="persona-popup-copy">
              <span className="lab-module-label inline-label">Persona / Visual storyteller</span>
              <DialogTitle className="persona-popup-title" data-testid="hero-persona-popup-title">Abhinav Sharma</DialogTitle>
              <DialogDescription className="persona-popup-description" data-testid="hero-persona-popup-description">
                An innovative Visual Designer and Associate Producer with strong expertise in visual storytelling, motion graphics, video editing, and content production.
              </DialogDescription>
              <div className="persona-spec-list" data-testid="hero-persona-popup-specs">
                <span>Motion designer</span>
                <span>Creative producer</span>
                <span>Script visualizer</span>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </section>
  );
}