import { motion } from "framer-motion";
import { Blocks, GitBranch, Repeat2, ScanSearch } from "lucide-react";
import { processSteps } from "@/data/portfolio";

const processIcons = [ScanSearch, GitBranch, Blocks, Repeat2];

export default function ProcessSection() {
  return (
    <section id="process" className="section process-section section-reveal" data-testid="process-section">
      <div className="section-shell process-shell">
        <div className="lab-module-label" data-testid="working-system-module-label">Module 03 / Protocol Stack</div>
        <div className="process-intro">
          <p className="section-kicker" data-testid="process-kicker-text">03 · Working System</p>
          <h2 className="section-title" data-testid="process-title-text">The lab protocol.</h2>
        </div>
        <p className="process-lead" data-testid="process-lead-text">
          Four modules that turn raw signals into language, formats, and a repeatable content rhythm.
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
            <ProcessCard key={step.id} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProcessCard({ step, index }) {
  const Icon = processIcons[index] || ScanSearch;

  return (
            <motion.article
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
                  className="process-icon-badge"
                  animate={{ rotate: [0, 5, -4, 0], scale: [1, 1.06, 0.98, 1] }}
                  transition={{ duration: 2.8, repeat: Infinity, ease: "easeInOut", delay: index * 0.25 }}
                  data-testid={`process-step-icon-${index + 1}`}
                  aria-label={`${step.label} icon`}
                >
                  <Icon size={30} strokeWidth={2.25} />
                </motion.div>
              </div>
              <h3 data-testid={`process-step-title-${index + 1}`}>{step.label}</h3>
              <p data-testid={`process-step-note-${index + 1}`}>{step.note}</p>
              <span className="process-artifact" data-testid={`process-step-artifact-${index + 1}`}>{step.artifact}</span>
            </motion.article>
  );
}