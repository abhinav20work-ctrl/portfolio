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
                <motion.div
                  className="responsive-spiral"
                  animate={{ rotate: [0, 12, -8, 0], scale: [1, 1.08, 0.96, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                  data-testid={`process-responsive-spiral-${index + 1}`}
                >
                  <SpiralMark />
                </motion.div>
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