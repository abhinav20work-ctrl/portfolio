import { motion } from "framer-motion";
import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState(null);

  return (
    <section id="case-studies" className="section case-section section-reveal" data-testid="case-study-section">
      <div className="section-shell">
        <div className="lab-module-label" data-testid="proof-board-module-label">Module 01 / Evidence Bench</div>
        <div className="section-heading-row">
          <div>
            <h2 className="section-title" data-testid="case-title-text">Proof samples from the lab bench.</h2>
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
              onClick={() => setActiveCase(study)}
              role="button"
              tabIndex={0}
              onKeyDown={(event) => event.key === "Enter" && setActiveCase(study)}
            >
              <span className="lab-card-pin pin-left" aria-hidden="true" />
              <span className="lab-card-pin pin-right" aria-hidden="true" />
              <div className="case-image-wrap" data-testid={`case-image-wrap-${index + 1}`}>
                <div className={`specimen-visual specimen-${index + 1}`} data-testid={`case-specimen-visual-${index + 1}`}>
                  <span className="specimen-axis x" />
                  <span className="specimen-axis y" />
                  <span className="specimen-dot d1" />
                  <span className="specimen-dot d2" />
                  <span className="specimen-dot d3" />
                  <strong>{study.label}</strong>
                </div>
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
      <Dialog open={Boolean(activeCase)} onOpenChange={(open) => !open && setActiveCase(null)}>
        <DialogContent className="case-dialog lab-dialog" data-testid="case-study-detail-popup">
          {activeCase && (
            <div className="case-popup-grid">
              <div className="case-popup-visual" style={{ "--case-accent": activeCase.accent }} data-testid="case-popup-visual">
                <div className="specimen-visual">
                  <span className="specimen-axis x" />
                  <span className="specimen-axis y" />
                  <span className="specimen-dot d1" />
                  <span className="specimen-dot d2" />
                  <span className="specimen-dot d3" />
                  <strong>{activeCase.label}</strong>
                </div>
              </div>
              <div className="case-popup-copy">
                <span className="lab-module-label inline-label" data-testid="case-popup-module-label">Evidence specimen</span>
                <h2 data-testid="case-popup-title">{activeCase.title}</h2>
                <p className="case-popup-outcome" data-testid="case-popup-outcome">{activeCase.outcome}</p>
                <p data-testid="case-popup-description">{activeCase.brief}</p>
                {activeCase.problem && (
                  <div className="case-popup-detail-block" data-testid="case-popup-problem">
                    <b>Problem</b>
                    <p>{activeCase.problem}</p>
                  </div>
                )}
                {activeCase.strategy && (
                  <div className="case-popup-detail-block" data-testid="case-popup-strategy">
                    <b>Strategy</b>
                    <p>{activeCase.strategy}</p>
                  </div>
                )}
                {activeCase.execution && (
                  <div className="case-popup-detail-block" data-testid="case-popup-execution">
                    <b>Execution phases</b>
                    <ul>
                      {activeCase.execution.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                )}
                <div className="case-popup-stack" data-testid="case-popup-stack">
                  {activeCase.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
                {activeCase.pdfUrl && (
                  <a
                    className="case-source-link"
                    href={activeCase.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    data-testid="case-popup-source-pdf-link"
                  >
                    Open original case study PDF
                  </a>
                )}
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}