import { motion } from "framer-motion";
import { processSteps } from "@/data/portfolio";
import { SpiralMark } from "./Doodles";

export default function ProcessSection() {
  return (
    <section id="process" className="section process-section section-reveal" data-testid="process-section">
      <div className="section-shell process-shell">
        <div className="process-intro">
          <p className="section-kicker" data-testid="process-kicker-text">The working trail</p>
          <h2 className="section-title" data-testid="process-title-text">How I turn chaos into content people remember.</h2>
        </div>
        <p className="process-lead" data-testid="process-lead-text">
          A recruiter should be able to see not just what I make — but how I think, decide, and leave teams with something usable.
        </p>
      </div>
      <div className="process-board" data-testid="process-journey-canvas">
        <svg className="process-path" viewBox="0 0 1180 360" fill="none" aria-hidden="true" preserveAspectRatio="none">
          <motion.path
            d="M52 184C197 58 303 72 397 169C485 260 606 270 703 165C807 53 929 77 1127 162"
            stroke="#1E293B"
            strokeWidth="3.5"
            strokeLinecap="round"
            strokeDasharray="10 12"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 1.55, ease: "easeInOut" }}
          />
          <motion.circle
            cx="52"
            cy="184"
            r="8"
            fill="#FDE047"
            stroke="#1E293B"
            strokeWidth="3"
            animate={{ cx: [52, 397, 703, 1127], cy: [184, 169, 165, 162] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
        <div className="process-center-piece" data-testid="process-center-piece">
          <span>brief</span>
          <strong>→</strong>
          <span>story</span>
          <strong>→</strong>
          <span>system</span>
        </div>
        <div className="process-card-grid">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.id}
              className="process-card"
              initial={{ opacity: 0, y: 34, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -9, rotate: index % 2 === 0 ? 1 : -1 }}
              viewport={{ once: true, amount: 0.08 }}
              transition={{ duration: 0.42, delay: index * 0.04 }}
              data-testid={`process-step-${index + 1}`}
            >
              <div className="process-card-top">
                <span className="process-number" data-testid={`process-step-number-${index + 1}`}>{step.number}</span>
                <SpiralMark />
              </div>
              <h3 data-testid={`process-step-title-${index + 1}`}>{step.label}</h3>
              <p data-testid={`process-step-note-${index + 1}`}>{step.note}</p>
              <span className="process-artifact" data-testid={`process-step-artifact-${index + 1}`}>{step.artifact}</span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}