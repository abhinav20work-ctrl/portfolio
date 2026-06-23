import { motion } from "framer-motion";
import { MovingArrowsArt } from "./Doodles";

export default function HowSection() {
  return (
    <section id="how" className="section how-section" data-testid="how-section">
      <div className="section-shell how-grid">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65 }}
        >
          <p className="section-kicker" data-testid="how-kicker-text">The operating system</p>
          <h2 className="section-title" data-testid="how-title-text">Here’s how.</h2>
        </motion.div>
        <motion.p
          className="how-note"
          data-testid="how-description-text"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.65, delay: 0.12 }}
        >
          I move from instinct to structure: listen, map, draft, break, repair, and ship the version that keeps its shape in the wild.
        </motion.p>
      </div>
      <div className="section-shell">
        <MovingArrowsArt />
      </div>
    </section>
  );
}