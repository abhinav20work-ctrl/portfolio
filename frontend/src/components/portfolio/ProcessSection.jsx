import { motion } from "framer-motion";
import { processSteps } from "@/data/portfolio";
import { SpiralMark } from "./Doodles";

export default function ProcessSection() {
  return (
    <section className="section process-section" data-testid="process-section">
      <div className="section-shell">
        <p className="section-kicker" data-testid="process-kicker-text">How the work travels</p>
        <h2 className="section-title" data-testid="process-title-text">Process</h2>
      </div>
      <div className="process-canvas" data-testid="process-journey-canvas">
        <svg className="journey-line" viewBox="0 0 1200 620" fill="none" aria-hidden="true" preserveAspectRatio="none">
          <motion.path
            d="M37 88C195 18 304 180 245 286C194 378 302 485 450 399C592 316 561 146 735 147C917 149 842 395 989 448C1077 480 1134 405 1170 316"
            stroke="#0A0A0A"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="13 14"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.8, ease: "easeInOut" }}
          />
        </svg>
        {processSteps.map((step, index) => (
          <motion.div
            key={step.id}
            className={`process-step step-${index + 1}`}
            initial={{ opacity: 0, y: 24, rotate: index % 2 === 0 ? -2 : 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.55, delay: 0.22 + index * 0.11 }}
            data-testid={`process-step-${index + 1}`}
          >
            <SpiralMark />
            <div className="process-copy">
              <h3 data-testid={`process-step-title-${index + 1}`}>{step.label}</h3>
              <p data-testid={`process-step-note-${index + 1}`}>{step.note}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}