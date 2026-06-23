import { motion } from "framer-motion";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section case-section section-reveal" data-testid="case-study-section">
      <div className="section-shell">
        <div className="lab-module-label" data-testid="proof-board-module-label">Module 01 / Evidence Bench</div>
        <div className="section-heading-row">
          <div>
            <p className="section-kicker" data-testid="case-kicker-text">01 · Proof Board</p>
            <h2 className="section-title" data-testid="case-title-text">Strategy receipts, not case studies.</h2>
          </div>
          <p className="section-side-note" data-testid="case-side-note-text">A board of decisions, artifacts, and outcomes — enough proof for recruiters, enough personality for humans.</p>
        </div>
        <div className="proof-rail" data-testid="proof-board-rail">
          <span>Positioning</span>
          <span>Messaging</span>
          <span>Editorial Systems</span>
          <span>Launch Narrative</span>
        </div>
        <div className="case-grid">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              className="case-card"
              style={{ "--case-accent": study.accent }}
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -12, rotate: index === 1 ? 0.8 : -0.8 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              data-testid={`case-card-${index + 1}`}
            >
              <span className="lab-card-pin pin-left" aria-hidden="true" />
              <span className="lab-card-pin pin-right" aria-hidden="true" />
              <div className="case-image-wrap" data-testid={`case-image-wrap-${index + 1}`}>
                <img src={study.image} alt={study.title} data-testid={`case-image-${index + 1}`} />
                <span className="case-floating-label" data-testid={`case-floating-label-${index + 1}`}>{study.outcome}</span>
              </div>
              <div className="case-meta">
                <span className="case-number" data-testid={`case-number-${index + 1}`}>{study.label}</span>
                <p className="case-outcome" data-testid={`case-outcome-${index + 1}`}>{study.outcome}</p>
                <h3 data-testid={`case-title-${index + 1}`}>{study.title}</h3>
                <p className="case-brief" data-testid={`case-brief-${index + 1}`}>{study.brief}</p>
                <div className="case-tags" data-testid={`case-tags-${index + 1}`}>
                  {study.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}