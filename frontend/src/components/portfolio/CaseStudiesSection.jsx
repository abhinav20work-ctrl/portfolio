import { motion } from "framer-motion";
import { useEffect, useMemo, useRef, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";
import { caseStudies } from "@/data/portfolio";
import { X } from "lucide-react";

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
      if (event.target instanceof Element && event.target.closest(".case-fullscreen-shell, .case-lightbox")) return;
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
                {index === 0 ? (
                  <img className="case-card-cover-image" src="/case-assets/ufo-beans-pdf/frame-01.jpg" alt="UFO Beans PDF cover frame" data-testid="ufo-case-card-cover-image" />
                ) : (
                  <div className="case-type-visual" data-testid={`case-type-visual-${index + 1}`}>
                    <span>{study.label}</span>
                    <strong>{study.outcome}</strong>
                  </div>
                )}
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
      {activeCase?.id === "case-01" && (
        <UfoBeansFullscreenModal caseData={activeCase} onClose={() => setActiveCase(null)} />
      )}
      {activeCase && activeCase.id !== "case-01" && (
        <SimpleCaseModal caseData={activeCase} onClose={() => setActiveCase(null)} />
      )}
    </section>
  );
}

const ufoAssets = {
  pdfFrames: Array.from({ length: 8 }, (_, index) => `/case-assets/ufo-beans-pdf/frame-${String(index + 1).padStart(2, "0")}.jpg`),
};

function UfoBeansFullscreenModal({ caseData, onClose }) {
  const modalRef = useRef(null);
  const scrollContentRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  const sections = useMemo(() => [
    ["frame-1", "Frame 1"], ["frame-2", "Frame 2"], ["frame-3", "Frame 3"], ["frame-4", "Frame 4"],
    ["metrics", "Metrics"], ["frame-5", "Frame 5"], ["frame-6", "Frame 6"], ["frame-7", "Frame 7"], ["frame-8", "Frame 8"],
  ], []);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 450);
    const firstButton = modalRef.current?.querySelector("button, a");
    firstButton?.focus();
    const onKeyDown = (event) => {
      if (event.key === "Escape") onClose();
      if (event.key === "Tab" && modalRef.current) {
        const focusables = modalRef.current.querySelectorAll('button, [href], video, [tabindex]:not([tabindex="-1"])');
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => { clearTimeout(timer); window.removeEventListener("keydown", onKeyDown); };
  }, [onClose]);

  const onOverlayPointerDown = (event) => {
    if (event.target === event.currentTarget) onClose();
  };

  const onScroll = (event) => {
    const container = event.currentTarget;
    const top = container.scrollTop;
    const maxScroll = container.scrollHeight - container.clientHeight;
    const sectionIds = sections.map(([id]) => id);
    const current = maxScroll - top < container.clientHeight * 0.5
      ? sectionIds[sectionIds.length - 1]
      : sectionIds.findLast((id) => {
        const node = container.querySelector(`#ufo-${id}`);
        return node && node.offsetTop <= top + container.clientHeight * 0.36;
      });
    if (current) setActiveSection(current);
  };

  const scrollToSection = (event, id) => {
    event.preventDefault();
    const container = scrollContentRef.current;
    const target = container?.querySelector(`#ufo-${id}`);
    if (!container || !target) return;

    const maxScroll = container.scrollHeight - container.clientHeight;
    const sectionIds = sections.map(([sectionId]) => sectionId);
    const isLastSection = id === sectionIds[sectionIds.length - 1];
    container.scrollTo({ top: isLastSection ? maxScroll : Math.min(Math.max(target.offsetTop - 28, 0), maxScroll), behavior: "smooth" });
    setActiveSection(id);
  };

  const metrics = [
    ["👁️", "Estimated Reach", "2.3M+"], ["❤️", "Engagement Rate", "8.9%"], ["📈", "Brand Recall", "+42%"],
    ["🎯", "CTR", "6.8%"], ["📦", "Purchase Intent", "+31%"],
  ];

  return (
    <div className="case-fullscreen-overlay" role="dialog" aria-modal="true" aria-labelledby="ufo-title" data-testid="case-study-detail-popup" ref={modalRef} onMouseDown={onOverlayPointerDown} data-lenis-prevent="true">
      <motion.div className="case-fullscreen-shell" data-testid="case-popup-shell" onMouseDown={(event) => event.stopPropagation()} data-lenis-prevent="true" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, type: "spring", stiffness: 220, damping: 24 }}>
        <button className="case-modal-close" onClick={onClose} data-testid="case-popup-close-button" aria-label="Close case study"><X size={18} /></button>
        <aside className="case-sidebar" data-lenis-prevent="true">
          <div className="case-brand-logo">UFO</div>
          <h2>{caseData.title}</h2>
          <dl>
            <dt>Category</dt><dd>Brand Identity / Campaign</dd><dt>Timeline</dt><dd>2 Weeks</dd><dt>Role</dt><dd>Brand Strategy + Visual Design</dd><dt>Team Size</dt><dd>Solo Concept</dd><dt>Tools Used</dt><dd>Figma, After Effects, Photoshop</dd>
          </dl>
          <div className="case-sidebar-stats"><b>Project Stats</b><span>Brand — UFO Beans</span><span>Industry — FMCG / Coffee</span><span>Deliverables — Identity, Social, Packaging, Motion</span></div>
          <a className="case-live-cta" href={caseData.pdfUrl} target="_blank" rel="noreferrer" data-testid="case-popup-live-campaign-link">View Live Campaign</a>
        </aside>
        <main className="case-scroll-content" ref={scrollContentRef} onScroll={onScroll} data-lenis-prevent="true" data-testid="case-popup-scroll-content">
          {!loaded ? <div className="case-skeleton" data-testid="case-popup-loading-skeleton" /> : <>
            {ufoAssets.pdfFrames.slice(0, 4).map((src, index) => <PdfFrameSection key={src} id={`frame-${index + 1}`} src={src} index={index + 1} />)}
            <CaseSection id="metrics" title="Projected Metrics"><p className="conceptual-note">Metrics retained from the existing case study.</p><div className="metric-row">{metrics.map(([icon,label,value]) => <MetricCard key={label} icon={icon} label={label} value={value} />)}</div></CaseSection>
            {ufoAssets.pdfFrames.slice(4).map((src, index) => <PdfFrameSection key={src} id={`frame-${index + 5}`} src={src} index={index + 5} />)}
          </>}
        </main>
        <nav className="case-progress-nav" data-testid="case-popup-progress-nav">{sections.map(([id,label])=><a key={id} data-testid={`case-popup-progress-${id}`} href={`#ufo-${id}`} onClick={(event) => scrollToSection(event, id)} aria-label={`Jump to ${label}`} aria-current={activeSection===id ? "true" : undefined} className={activeSection===id ? "active" : ""}>{label}</a>)}</nav>
      </motion.div>
    </div>
  );
}

function CaseSection({ id, title, children }) { return <motion.section id={`ufo-${id}`} className="case-section-block" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.45 }}>{title && <h2>{title}</h2>}{children}</motion.section>; }
function PdfFrameSection({ id, src, index }) { return <CaseSection id={id}><figure className="ufo-pdf-frame" data-testid={`case-popup-pdf-frame-${index}`}><img src={src} alt={`UFO Beans PDF frame ${index}`} loading={index <= 2 ? "eager" : "lazy"} /></figure></CaseSection>; }
function MetricCard({ icon, label, value }) { return <motion.article className="case-metric-card" whileHover={{ y: -5 }}>{icon && <span>{icon}</span>}<b>{value}</b><small>{label}</small></motion.article>; }
function SimpleCaseModal({ caseData, onClose }) {
  return <Dialog open onOpenChange={(open)=>!open && onClose()}><DialogContent className="case-dialog lab-dialog case-lab-sheet"><DialogTitle>{caseData.title}</DialogTitle><DialogDescription>{caseData.brief}</DialogDescription></DialogContent></Dialog>;
}