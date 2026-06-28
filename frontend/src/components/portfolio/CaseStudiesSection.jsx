import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { caseStudies } from "@/data/portfolio";

export default function CaseStudiesSection() {
  const [activeCase, setActiveCase] = useState(null);

  useEffect(() => {
    if (!activeCase) return undefined;
    const scrollY = window.scrollY;
    const previousOverflow = document.body.style.overflow;
    const previousHtmlOverflow = document.documentElement.style.overflow;
    const previousPosition = document.body.style.position;
    const previousTop = document.body.style.top;
    const previousWidth = document.body.style.width;
    document.body.style.overflow = "hidden";
    document.documentElement.style.overflow = "hidden";
    document.body.style.position = "fixed";
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = "100%";
    document.documentElement.setAttribute("data-modal-open", "true");
    const keepLocked = () => window.scrollTo(0, scrollY);
    const lockBackgroundWheel = (event) => {
      event.preventDefault();
      keepLocked();
    };
    window.addEventListener("wheel", lockBackgroundWheel, { passive: false });
    window.addEventListener("touchmove", lockBackgroundWheel, { passive: false });
    window.addEventListener("scroll", keepLocked, { passive: false });
    return () => {
      window.removeEventListener("wheel", lockBackgroundWheel);
      window.removeEventListener("touchmove", lockBackgroundWheel);
      window.removeEventListener("scroll", keepLocked);
      document.documentElement.removeAttribute("data-modal-open");
      document.body.style.overflow = previousOverflow;
      document.documentElement.style.overflow = previousHtmlOverflow;
      document.body.style.position = previousPosition;
      document.body.style.top = previousTop;
      document.body.style.width = previousWidth;
      window.scrollTo(0, scrollY);
    };
  }, [activeCase]);

  return (
    <section id="case-studies" className="section case-section section-reveal" data-testid="case-study-section">
      <div className="section-shell">
        <div className="section-script-label" data-testid="proof-board-module-label">Selected Work</div>
        <div className="section-heading-row">
          <div>
            <h2 className="section-title" data-testid="case-title-text">Shaping the story.</h2>
          </div>
          <p className="section-side-note" data-testid="case-side-note-text">From brand worlds to investor updates and original shows — selected work built around visual quality, clarity, and audience impact.</p>
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
              <div className="case-image-wrap" data-testid={`case-image-wrap-${index + 1}`}>
                <div className="case-type-visual" data-testid={`case-type-visual-${index + 1}`}>
                  <span>{study.label}</span>
                  <strong>{study.outcome}</strong>
                </div>
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
        <DialogContent className="case-dialog lab-dialog case-lab-sheet" data-testid="case-study-detail-popup" data-lenis-prevent="true">
          {activeCase && (
            <div className="case-sheet-layout" style={{ "--case-accent": activeCase.accent }}>
              <div className="case-sheet-hero" data-testid="case-popup-visual">
                <div className="case-sheet-topline">
                  <span>Specimen {activeCase.label}</span>
                  <span>Content Lab Evidence</span>
                </div>
                <h2 data-testid="case-popup-title">{activeCase.title}</h2>
                <p className="case-popup-outcome" data-testid="case-popup-outcome">{activeCase.outcome}</p>
                <div className="case-signal-map" aria-hidden="true">
                  <span className="signal-node node-a" />
                  <span className="signal-node node-b" />
                  <span className="signal-node node-c" />
                  <span className="signal-line line-a" />
                  <span className="signal-line line-b" />
                </div>
              </div>

              <div className="case-sheet-summary">
                <span className="lab-module-label inline-label" data-testid="case-popup-module-label">Case file</span>
                <p data-testid="case-popup-description">{activeCase.brief}</p>
                {activeCase.proposition && (
                  <div className="case-fact-grid" data-testid="case-popup-fact-grid">
                    <span><b>Proposition</b>{activeCase.proposition}</span>
                    <span><b>Audience</b>{activeCase.audience}</span>
                    <span><b>Big idea</b>{activeCase.bigIdea}</span>
                  </div>
                )}
                <div className="case-popup-stack" data-testid="case-popup-stack">
                  {activeCase.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>

              {activeCase.visualAssets && (
                <div className="ufo-source-visuals" data-testid="case-popup-source-visuals">
                  <div className="ufo-product-card" data-testid="case-popup-product-world">
                    <img src={activeCase.visualAssets.productWorld} alt="UFO Beans product world from original case study" />
                    <span>Product world</span>
                  </div>
                  <div className="ufo-strategy-card" data-testid="case-popup-strategy-board">
                    <img src={activeCase.visualAssets.strategyBoard} alt="UFO Beans strategy board from original case study" />
                    <span>Strategy board</span>
                  </div>
                </div>
              )}

              <div className="case-detail-grid">
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
              </div>

              {activeCase.execution && (
                <div className="case-phase-strip" data-testid="case-popup-execution">
                  <b>Execution phases</b>
                  <div>
                    {activeCase.execution.map((item, index) => (
                      <article key={item}>
                        <span>{String(index + 1).padStart(2, "0")}</span>
                        <p>{item}</p>
                      </article>
                    ))}
                  </div>
                </div>
              )}

              {activeCase.campaignPillars && (
                <div className="campaign-pillars" data-testid="case-popup-campaign-pillars">
                  <b>Content system recreated from the PDF</b>
                  <div>
                    {activeCase.campaignPillars.map((pillar, index) => (
                      <span key={pillar} data-testid={`case-popup-pillar-${index + 1}`}>{pillar}</span>
                    ))}
                  </div>
                </div>
              )}

              <div className="case-sheet-footer">
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