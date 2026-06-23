import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Download, Mail } from "lucide-react";
import { HeroSquiggle } from "./Doodles";
import { recruiterSignals, strengths } from "@/data/portfolio";

const lines = [
  "I turn messy ideas into clear stories.",
  "I build content systems that still feel human.",
  "I help brands sound less like rooms and more like people.",
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section className="hero-section" data-testid="hero-section">
      <motion.div className="hero-inner" style={{ y }}>
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-kicker" data-testid="hero-role-text">Abhinav Sharma · Content Strategist</p>
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
                <Mail size={18} /> Let’s talk
              </a>
              <a href="#case-studies" className="secondary-pill" data-testid="hero-work-button">
                See proof <ArrowDownRight size={18} />
              </a>
              <a href="mailto:hello@example.com?subject=Resume%20request%20for%20Abhinav%20Sharma" className="text-pill" data-testid="hero-resume-link">
                <Download size={17} /> Request resume
              </a>
            </motion.div>
          </div>
          <motion.aside
            className="recruiter-panel"
            initial={{ opacity: 0, x: 28, rotate: 1 }}
            animate={{ opacity: 1, x: 0, rotate: -1 }}
            transition={{ duration: 0.65, delay: 0.48 }}
            data-testid="hero-recruiter-snapshot"
          >
            <p className="panel-label" data-testid="hero-snapshot-label">Recruiter snapshot</p>
            <div className="signal-list">
              {recruiterSignals.map((signal) => (
                <div className="signal-item" key={signal.id} data-testid={`hero-signal-${signal.id}`}>
                  <strong>{signal.value}</strong>
                  <span>{signal.label}</span>
                </div>
              ))}
            </div>
            <div className="strength-cloud" data-testid="hero-strength-cloud">
              {strengths.map((strength) => (
                <span key={strength}>{strength}</span>
              ))}
            </div>
          </motion.aside>
        </div>
        <HeroSquiggle />
      </motion.div>
      <a className="scroll-cue" href="#how" data-testid="hero-scroll-link" aria-label="Scroll to here's how section">
        <span>scroll</span>
      </a>
    </section>
  );
}