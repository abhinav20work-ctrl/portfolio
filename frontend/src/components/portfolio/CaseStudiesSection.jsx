import { motion } from "framer-motion";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudiesSection() {
  return (
    <section id="case-studies" className="section case-section" data-testid="case-study-section">
      <div className="section-shell">
        <div className="section-heading-row">
          <div>
            <p className="section-kicker" data-testid="case-kicker-text">Selected decisions</p>
            <h2 className="section-title" data-testid="case-title-text">Case studies</h2>
          </div>
          <p className="section-side-note" data-testid="case-side-note-text">Three snapshots of strategy becoming something people can actually use.</p>
        </div>
        <div className="case-grid">
          {caseStudies.map((study, index) => (
            <motion.article
              key={study.id}
              className="case-card"
              initial={{ opacity: 0, y: 36 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.1 }}
              data-testid={`case-card-${index + 1}`}
            >
              <div className="case-image-wrap" data-testid={`case-image-wrap-${index + 1}`}>
                <img src={study.image} alt={study.title} data-testid={`case-image-${index + 1}`} />
              </div>
              <div className="case-meta">
                <span className="case-number" data-testid={`case-number-${index + 1}`}>{study.label}</span>
                <p className="case-outcome" data-testid={`case-outcome-${index + 1}`}>{study.outcome}</p>
                <h3 data-testid={`case-card-title-${index + 1}`}>{study.title}</h3>
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