import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowDownRight, Beaker, Download, Mail, MousePointer2, Sparkles } from "lucide-react";
import { HeroSquiggle } from "./Doodles";
import { recruiterSignals, strengths } from "@/data/portfolio";

const lines = [
  "A Content Lab for messy ideas.",
  "I test language until it behaves like strategy.",
  "Then I package it into systems teams can ship.",
];

const stickers = [
  { label: "hook distiller", tone: "yellow", x: "8%", y: "14%", rotate: -7 },
  { label: "voice serum", tone: "mint", x: "58%", y: "9%", rotate: 5 },
  { label: "mess → meaning", tone: "blue", x: "40%", y: "74%", rotate: -4 },
  { label: "drag the lab notes", tone: "pink", x: "72%", y: "62%", rotate: 8 },
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section id="top" className="hero-section" data-testid="hero-section">
      <div className="lab-grid-lines" aria-hidden="true" />
      <motion.div className="hero-inner" style={{ y }}>
        <div className="lab-sticker-layer" data-testid="hero-sticker-layer">
          {stickers.map((sticker, index) => (
            <motion.div
              key={sticker.label}
              className={`lab-sticker ${sticker.tone}`}
              style={{ left: sticker.x, top: sticker.y, rotate: sticker.rotate }}
              drag
              dragMomentum={false}
              whileDrag={{ scale: 1.08, zIndex: 12 }}
              whileHover={{ y: -4 }}
              data-testid={`hero-draggable-sticker-${index + 1}`}
            >
              {index === 3 ? <MousePointer2 size={15} /> : <Sparkles size={15} />}
              {sticker.label}
            </motion.div>
          ))}
        </div>
        <div className="hero-grid">
          <div className="hero-main">
            <p className="hero-kicker" data-testid="hero-role-text">Abhinav Sharma · Content Lab Operator</p>
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
                <Mail size={18} /> Open a brief
              </a>
              <a href="#case-studies" className="secondary-pill" data-testid="hero-work-button">
                Enter proof board <ArrowDownRight size={18} />
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
            <div className="lab-console-header">
              <p className="panel-label" data-testid="hero-snapshot-label">ABHINAV.CONTENT-LAB</p>
              <span className="lab-live-dot" data-testid="hero-lab-status">online</span>
            </div>
            <div className="lab-console-screen" data-testid="hero-lab-console-screen">
              <Beaker size={34} />
              <span>Input: scattered ideas</span>
              <strong>Output: usable narrative systems</strong>
            </div>
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
      <a className="scroll-cue" href="#case-studies" data-testid="hero-scroll-link" aria-label="Enter the proof board section">
        <span>enter lab</span>
      </a>
    </section>
  );
}