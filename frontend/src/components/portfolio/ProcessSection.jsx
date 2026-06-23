import { motion } from "framer-motion";
import { processSteps } from "@/data/portfolio";
import { SpiralMark } from "./Doodles";

export default function ProcessSection() {
  return (
    <section id="process" className="section process-section section-reveal" data-testid="process-section">
      <div className="section-shell process-shell">
        <div className="process-intro">
          <p className="section-kicker" data-testid="process-kicker-text">The working trail</p>
          <h2 className="section-title" data-testid="process-title-text">From messy brief to repeatable momentum.</h2>
        </div>
        <p className="process-lead" data-testid="process-lead-text">
          A recruiter should be able to see not just what I make — but how I think, decide, and leave teams with something usable.
        </p>
      </div>
      <div className="process-board" data-testid="process-journey-canvas">
        <svg className="process-path" viewBox="0 0 1180 300" fill="none" aria-hidden="true" preserveAspectRatio="none">
          <motion.path
            d="M36 152C178 20 304 48 391 143C470 231 591 249 681 150C784 37 916 40 1144 126"
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
            cx="36"
            cy="152"
            r="8"
            fill="#FDE047"
            stroke="#1E293B"
            strokeWidth="3"
            animate={{ cx: [36, 391, 681, 1144], cy: [152, 143, 150, 126] }}
            transition={{ duration: 7.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
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