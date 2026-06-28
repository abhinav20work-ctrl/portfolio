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
  hero: "/case-assets/ufo-beans-v2/crops/hero-product.jpg",
  closeup: "/case-assets/ufo-beans-v2/crops/product-closeup.jpg",
  strategy: "/case-assets/ufo-beans-v2/crops/strategy-board.jpg",
  launch: "/case-assets/ufo-beans-v2/crops/launch-mockup.jpg",
  soft: "/case-assets/ufo-beans-v2/crops/campaign-soft.jpg",
  campaignLaunch: "/case-assets/ufo-beans-v2/crops/campaign-launch.jpg",
  sustain: "/case-assets/ufo-beans-v2/crops/campaign-sustain.jpg",
  galleryA: "/case-assets/ufo-beans-v2/crops/gallery-a.jpg",
  galleryB: "/case-assets/ufo-beans-v2/crops/gallery-b.jpg",
};

function UfoBeansFullscreenModal({ caseData, onClose }) {
  const modalRef = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [expandedPhase, setExpandedPhase] = useState("Soft Launch");
  const [lightboxImage, setLightboxImage] = useState(null);

  const sections = useMemo(() => [
    ["hero", "Hero"], ["challenge", "Challenge"], ["research", "Research"], ["strategy", "Strategy"],
    ["idea", "Big Idea"], ["execution", "Execution"], ["gallery", "Gallery"], ["impact", "Impact"], ["process", "Process"], ["learnings", "Learnings"],
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

  const onScroll = (event) => {
    const top = event.currentTarget.scrollTop;
    const current = sections.map(([id]) => id).findLast((id) => {
      const node = event.currentTarget.querySelector(`#ufo-${id}`);
      return node && node.offsetTop - 160 <= top;
    });
    if (current) setActiveSection(current);
  };

  const metrics = [
    ["👁️", "Estimated Reach", "2.3M+"], ["❤️", "Engagement Rate", "8.9%"], ["📈", "Brand Recall", "+42%"],
    ["🎯", "CTR", "6.8%"], ["📦", "Purchase Intent", "+31%"],
  ];
  const impact = [["Estimated Organic Reach", "2.3 Million"], ["Social Saves", "124K"], ["Shares", "42K"], ["Campaign Completion", "94%"], ["Estimated ROAS", "4.8×"], ["Follower Growth", "+28%"], ["Repeat Purchase Intent", "31%"], ["Brand Search Increase", "+46%"], ["Community Engagement", "+39%"]];
  const phases = {
    "Soft Launch": ["Build mystery before product reveal", "Leaked footage, alien language, distorted signals", "Cryptic reels, teaser posters, AR clues", "High curiosity and shareability"],
    Launch: ["Reveal UFO Beans as the source of the signal", "Cinematic POV launch, product visuals, creator posts", "Hero film, packaging shots, reveal carousel", "Strong brand recognition and intent"],
    Sustain: ["Keep community decoding the brand world", "Spot the UFO challenges, fan theories, limited drops", "UGC prompts, transmissions, flavor drops", "Repeat engagement and community memory"],
  };

  return (
    <div className="case-fullscreen-overlay" role="dialog" aria-modal="true" aria-labelledby="ufo-title" data-testid="case-study-detail-popup" ref={modalRef}>
      <motion.div className="case-fullscreen-shell" initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, type: "spring", stiffness: 220, damping: 24 }}>
        <button className="case-modal-close" onClick={onClose} data-testid="case-popup-close-button" aria-label="Close case study"><X size={18} /></button>
        <aside className="case-sidebar">
          <div className="case-brand-logo">UFO</div>
          <h2>{caseData.title}</h2>
          <dl>
            <dt>Category</dt><dd>Brand Identity / Campaign</dd><dt>Timeline</dt><dd>2 Weeks</dd><dt>Role</dt><dd>Brand Strategy + Visual Design</dd><dt>Team Size</dt><dd>Solo Concept</dd><dt>Tools Used</dt><dd>Figma, After Effects, Photoshop</dd>
          </dl>
          <div className="case-sidebar-stats"><b>Project Stats</b><span>Brand — UFO Beans</span><span>Industry — FMCG / Coffee</span><span>Deliverables — Identity, Social, Packaging, Motion</span></div>
          <a className="case-live-cta" href={caseData.pdfUrl} target="_blank" rel="noreferrer" data-testid="case-popup-live-campaign-link">View Live Campaign</a>
        </aside>
        <main className="case-scroll-content" onScroll={onScroll} data-lenis-prevent="true">
          {!loaded ? <div className="case-skeleton" data-testid="case-popup-loading-skeleton" /> : <>
            <CaseSection id="hero"><img className="case-hero-mockup" src={ufoAssets.hero} alt="UFO Beans campaign mockup" /><h1 id="ufo-title">UFO Bean: Coffee from Another Dimension</h1><p>A story-led coffee brand concept built around mystery, alien discovery, and packaging as the primary marketing asset.</p><div className="metric-row">{metrics.map(([icon,label,value]) => <MetricCard key={label} icon={icon} label={label} value={value} />)}</div></CaseSection>
            <CaseSection id="challenge" title="What problem were we solving?"><div className="challenge-card"><p>Crowded coffee market. Commodity perception. Low emotional connection. Difficult to stand out.</p></div></CaseSection>
            <CaseSection id="research" title="Research"><div className="audience-grid"><AudienceChart /><div className="insight-cards">{["74% enjoy trying new beverage brands.","61% purchase products because of packaging.","82% discover products through Instagram.","68% are likely to share visually unique products online."].map(x => <span key={x}>{x}</span>)}</div></div></CaseSection>
            <CaseSection id="strategy" title="Strategy"><div className="process-timeline">{["Research","Insight","Brand Positioning","Creative Direction","Campaign","Launch"].map(x => <span key={x}>{x}</span>)}</div><img className="wide-case-image" src={ufoAssets.strategy} alt="UFO Beans strategy board" /></CaseSection>
            <CaseSection id="idea"><div className="big-idea"><h2>The Signal Has Arrived</h2><p>Launch UFO Beans like an unexplained event — something audiences decode, share, and participate in.</p><img src={ufoAssets.launch} alt="Campaign launch mockup" /></div></CaseSection>
            <CaseSection id="execution" title="Campaign Execution"><div className="phase-accordion" data-testid="case-popup-phase-accordion">{Object.entries(phases).map(([phase, items]) => <button key={phase} data-testid={`case-popup-phase-${phase.toLowerCase().replace(/\s+/g, '-')}`} onClick={() => setExpandedPhase(expandedPhase === phase ? null : phase)} className={expandedPhase===phase ? "active" : ""} aria-expanded={expandedPhase===phase}><b>{phase}</b>{expandedPhase===phase && <ul>{["Goal","Content Strategy","Deliverables","Expected Impact"].map((label, i)=><li key={label}><strong>{label}</strong>{items[i]}</li>)}</ul>}</button>)}</div></CaseSection>
            <CaseSection id="gallery" title="Content Gallery"><div className="case-masonry" data-testid="case-popup-gallery-grid">{[ufoAssets.closeup,ufoAssets.soft,ufoAssets.campaignLaunch,ufoAssets.sustain,ufoAssets.galleryA,ufoAssets.galleryB].map((src,i)=><button key={src} data-testid={`case-popup-gallery-item-${i+1}`} onClick={()=>setLightboxImage(src)}><img src={src} alt={`UFO Beans visual ${i+1}`} /></button>)}</div></CaseSection>
            <CaseSection id="impact" title="Business Impact"><p className="conceptual-note">Projected campaign outcomes / conceptual KPIs for presentation.</p><div className="impact-grid">{impact.map(([label,value])=><MetricCard key={label} label={label} value={value} />)}</div></CaseSection>
            <CaseSection id="process" title="My Design Process"><div className="process-timeline long">{["Discover","Research","Concept","Visual Language","Content System","Campaign Assets","Final Presentation"].map(x => <span key={x}>{x}</span>)}</div></CaseSection>
            <CaseSection id="learnings" title="Key Learnings"><div className="quote-grid">{["Storytelling outperformed feature-first messaging.","Packaging became the primary marketing asset.","Mystery increased user engagement.","Consistency strengthened brand recall."].map(q => <blockquote key={q}>{q}</blockquote>)}</div></CaseSection>
          </>}
        </main>
        <nav className="case-progress-nav" data-testid="case-popup-progress-nav">{sections.map(([id,label])=><a key={id} data-testid={`case-popup-progress-${id}`} href={`#ufo-${id}`} className={activeSection===id ? "active" : ""}>{label}</a>)}</nav>
      </motion.div>
      {lightboxImage && <button className="case-lightbox" data-testid="case-popup-lightbox" onClick={()=>setLightboxImage(null)}><img src={lightboxImage} alt="Expanded UFO Beans visual" /></button>}
    </div>
  );
}

function CaseSection({ id, title, children }) { return <motion.section id={`ufo-${id}`} className="case-section-block" initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.18 }} transition={{ duration: 0.45 }}>{title && <h2>{title}</h2>}{children}</motion.section>; }
function MetricCard({ icon, label, value }) { return <motion.article className="case-metric-card" whileHover={{ y: -5 }}>{icon && <span>{icon}</span>}<b>{value}</b><small>{label}</small></motion.article>; }
function AudienceChart() { return <div className="audience-chart"><b>Audience</b>{["18–30","Gen Z","Young Professionals","Urban","Curious","Coffee Enthusiasts"].map((x,i)=><span key={x} style={{"--w": `${55+i*7}%`}}>{x}</span>)}</div>; }

function SimpleCaseModal({ caseData, onClose }) {
  return <Dialog open onOpenChange={(open)=>!open && onClose()}><DialogContent className="case-dialog lab-dialog case-lab-sheet"><DialogTitle>{caseData.title}</DialogTitle><DialogDescription>{caseData.brief}</DialogDescription></DialogContent></Dialog>;
}