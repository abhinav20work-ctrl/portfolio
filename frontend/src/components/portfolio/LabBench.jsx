import { motion } from "framer-motion";
import { FlaskConical, Gauge, ScanLine, WandSparkles } from "lucide-react";
import { labFormula, labModules } from "@/data/portfolio";

const icons = [ScanLine, FlaskConical, WandSparkles];

export default function LabBench() {
  return (
    <section className="lab-bench-section section-reveal" data-testid="lab-bench-section">
      <div className="section-shell lab-bench-shell">
        <div className="lab-module-label" data-testid="lab-bench-module-label">Product Core / Content Lab OS</div>
        <div className="lab-bench-header">
          <div>
            <p className="section-kicker" data-testid="lab-bench-kicker">Before the proof</p>
            <h2 className="section-title" data-testid="lab-bench-title">A strategy workshop disguised as a product.</h2>
          </div>
          <div className="lab-meter" data-testid="lab-bench-meter">
            <Gauge size={22} />
            <span>Clarity pressure</span>
            <strong>87%</strong>
          </div>
        </div>

        <div className="formula-strip" data-testid="lab-formula-strip">
          {labFormula.map((item, index) => (
            <motion.span
              key={item}
              whileHover={{ y: -5, rotate: index % 2 ? 2 : -2 }}
              data-testid={`lab-formula-chip-${index + 1}`}
            >
              {item}
            </motion.span>
          ))}
        </div>

        <div className="lab-machine" data-testid="lab-machine-panel">
          {labModules.map((module, index) => {
            const Icon = icons[index] || FlaskConical;
            return (
              <motion.article
                key={module.id}
                className={`lab-machine-card ${module.accent}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ x: 4, y: 4 }}
                viewport={{ once: true, amount: 0.28 }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                data-testid={`lab-machine-card-${index + 1}`}
              >
                <div className="machine-card-top">
                  <span>{module.code}</span>
                  <Icon size={28} />
                </div>
                <h3 data-testid={`lab-machine-title-${index + 1}`}>{module.title}</h3>
                <div className="machine-flow">
                  <p data-testid={`lab-machine-input-${index + 1}`}><b>Input</b>{module.input}</p>
                  <p data-testid={`lab-machine-output-${index + 1}`}><b>Output</b>{module.output}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}