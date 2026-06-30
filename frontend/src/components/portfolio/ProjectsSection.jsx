import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { projects } from "@/data/portfolio";

const metricSeeds = [
  ["30K", "5K", "100"], ["30K", "5K", "100"],
  ["1.2M", "84K", "18K"], ["946K", "72K", "14K"], ["1.7M", "118K", "26K"], ["638K", "41K", "9.8K"],
  ["812K", "55K", "12K"], ["1.1M", "68K", "15K"], ["524K", "36K", "7.4K"], ["702K", "49K", "10K"],
  ["1.4M", "92K", "21K"], ["1.9M", "126K", "31K"], ["774K", "52K", "11K"], ["689K", "44K", "8.6K"],
  ["2.1M", "148K", "39K"], ["588K", "38K", "7.9K"], ["1.6M", "104K", "24K"], ["932K", "61K", "13K"],
  ["721K", "47K", "9.2K"], ["1.3M", "88K", "19K"], ["436K", "29K", "5.8K"], ["1.8M", "132K", "34K"],
];
const hiddenReelNumbers = new Set([1, 9, 14, 15, 18, 21, 22]);

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [videoAspect, setVideoAspect] = useState(9 / 16);
  const popupVideoRef = useRef(null);
  const activeProjectIndex = activeProject ? projects.findIndex((project) => project.id === activeProject.id) : -1;
  const activeMetrics = metricSeeds[activeProjectIndex >= 0 ? activeProjectIndex : 0] || metricSeeds[0];
  const visibleProjects = projects
    .map((project, index) => ({ project, originalNumber: index + 1 }))
    .filter(({ originalNumber }) => !hiddenReelNumbers.has(originalNumber));
  const featuredReel = visibleProjects.find(({ originalNumber }) => originalNumber === 2);
  const masonryProjects = visibleProjects.filter(({ originalNumber }) => originalNumber !== 2);
  const displayNumberByOriginal = new Map(visibleProjects.map(({ originalNumber }, index) => [originalNumber, index + 1]));
  const masonryItems = [
    ...masonryProjects.slice(0, 3).map((item) => ({ type: "project", ...item })),
    ...masonryProjects.slice(3).map((item) => ({ type: "project", ...item })),
  ];
  const masonryColumns = masonryItems.reduce((columns, item, index) => {
    const targetIndex = columns.heights.indexOf(Math.min(...columns.heights));
    const weight = item.type === "note" ? 0.72 : Math.max(0.55, Math.min(1.95, 1 / (item.project.aspectRatio || 1)));
    columns.items[targetIndex].push({ ...item, visualIndex: index });
    columns.heights[targetIndex] += weight;
    return columns;
  }, { items: [[], [], []], heights: [0, 0, 0] }).items;

  useEffect(() => {
    if (!activeProject) return;
    setVideoAspect(9 / 16);
    const posterImage = new Image();
    posterImage.onload = () => {
      if (posterImage.naturalWidth && posterImage.naturalHeight) {
        setVideoAspect(posterImage.naturalWidth / posterImage.naturalHeight);
      }
    };
    posterImage.src = activeProject.posterUrl;
    const playActiveVideo = () => {
      const video = popupVideoRef.current;
      if (!video) return;
      if (video.videoWidth && video.videoHeight) setVideoAspect(video.videoWidth / video.videoHeight);
      video.muted = true;
      video.setAttribute("muted", "");
      video.play().catch(() => {});
    };
    const firstTimer = window.setTimeout(playActiveVideo, 260);
    const secondTimer = window.setTimeout(playActiveVideo, 1400);
    const video = popupVideoRef.current;
    video?.load();
    video?.addEventListener("loadeddata", playActiveVideo, { once: true });
    video?.addEventListener("canplay", playActiveVideo, { once: true });
    return () => {
      window.clearTimeout(firstTimer);
      window.clearTimeout(secondTimer);
      video?.removeEventListener("loadeddata", playActiveVideo);
      video?.removeEventListener("canplay", playActiveVideo);
    };
  }, [activeProject]);

  return (
    <section id="projects" className="section projects-section section-reveal" data-testid="projects-section">
      <div className="section-shell">
        <div className="section-script-label" data-testid="experiment-shelf-module-label">Reels / Motion Shelf</div>
        <div className="projects-topline">
          <h2 className="section-title" data-testid="projects-title-text">Motion tests, edits, and visual experiments.</h2>
        </div>
        {featuredReel && (
          <div className="featured-reel-row" data-testid="projects-featured-reel-row">
            <ProjectTile project={featuredReel.project} index={0} testIndex={featuredReel.originalNumber} displayIndex={displayNumberByOriginal.get(featuredReel.originalNumber)} isFeatured onOpen={setActiveProject} />
          </div>
        )}
        <div className="masonry masonry-balanced" data-testid="projects-masonry-layout">
          {masonryColumns.map((column, columnIndex) => (
            <div className="masonry-column" key={`column-${columnIndex}`} data-testid={`projects-masonry-column-${columnIndex + 1}`}>
              {column.map((item) => (
                <ProjectTile key={item.project.id} project={item.project} index={item.visualIndex} testIndex={item.originalNumber} displayIndex={displayNumberByOriginal.get(item.originalNumber)} onOpen={setActiveProject} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <Dialog open={Boolean(activeProject)} onOpenChange={(open) => !open && setActiveProject(null)}>
        <DialogContent className="video-dialog lab-dialog" style={{ "--video-aspect": videoAspect }} data-testid="project-video-modal">
          {activeProject && (
            <div className="video-popup-grid">
              <video
                  ref={popupVideoRef}
                  className="video-player"
                  src={activeProject.videoUrl}
                  poster={activeProject.posterUrl}
                  controls
                  autoPlay
                  muted
                  playsInline
                  preload="auto"
                  onLoadedMetadata={(event) => {
                    const video = event.currentTarget;
                    if (video.videoWidth && video.videoHeight) setVideoAspect(video.videoWidth / video.videoHeight);
                  }}
                  data-testid="project-popup-video-player"
                />
              <div className="video-copy-panel">
                <DialogHeader>
                  <span className="lab-module-label inline-label">Experiment sample</span>
                  <DialogTitle className="video-dialog-title" data-testid="project-popup-title">
                    {activeProject.popupTitle || activeProject.title}
                  </DialogTitle>
                  <DialogDescription className="video-dialog-description" data-testid="project-popup-description">
                    {(activeProject.popupDescription || activeProject.description).split("\n").map((line, index) => line ? <span key={`${activeProject.id}-line-${index}`} className={line === "Project Brief" || line === "Process" ? "video-description-heading" : "video-description-line"}>{line}</span> : <span key={`${activeProject.id}-space-${index}`} className="video-description-space" />)}
                  </DialogDescription>
                </DialogHeader>
                {activeProject.id !== "featured-project-02" && (
                  <div className="video-popup-tags" data-testid="project-popup-tags">
                    {(activeProject.tags || ["Motion test", "Content rhythm", "Lab sample"]).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                )}
                <section className="video-analytics-panel" data-testid="project-popup-analytics-panel">
                  <h3 data-testid="project-popup-analytics-title">Analytics across platforms</h3>
                  <div className="video-analytics-grid">
                    {[["Views", activeMetrics[0]], ["Likes", activeMetrics[1]], ["Shares", activeMetrics[2]]].map(([label, value]) => (
                      <article key={label} data-testid={`project-popup-analytics-${label.toLowerCase()}`}>
                        <strong>{value}</strong>
                        <span>{label}</span>
                      </article>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProjectTile({ project, index, testIndex, displayIndex, isFeatured = false, onOpen }) {
  const playPreview = (event) => {
    const video = event.currentTarget.querySelector("video");
    if (!video) return;
    video.play().catch(() => {});
  };

  const pausePreview = (event) => {
    const video = event.currentTarget.querySelector("video");
    if (!video) return;
    video.pause();
    video.currentTime = 0;
  };

  return (
    <motion.button
      type="button"
      className={`project-tile ${project.shape}${isFeatured ? " featured-reel" : ""}`}
      style={{ "--project-aspect": project.aspectRatio || (project.shape === "wide" ? 16 / 9 : project.shape === "tall" ? 9 / 16 : 1) }}
      onClick={() => onOpen(project)}
      onMouseEnter={playPreview}
      onMouseLeave={pausePreview}
      onFocus={playPreview}
      onBlur={pausePreview}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      whileHover={{ y: -7, rotate: index % 2 === 0 ? -1.5 : 1.5 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.45, delay: index * 0.06 }}
      data-testid={`project-video-card-${testIndex}`}
      aria-label={`Open video: ${project.title}`}
    >
      <span className="reel-index" data-testid={`project-reel-index-${testIndex}`}>{String(displayIndex).padStart(2, "0")}</span>
      <div className={`project-sample-visual sample-${(index % 6) + 1}`} data-testid={`project-sample-visual-${testIndex}`}>
        <img src={project.posterUrl} loading="lazy" decoding="async" alt="" aria-hidden="true" data-testid={`project-card-poster-preview-${testIndex}`} />
        <video
          src={project.previewUrl}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          data-testid={`project-card-hover-preview-${testIndex}`}
        />
      </div>
      <span className="project-overlay">
        <span className="project-play" data-testid={`project-play-icon-${testIndex}`}><Play size={18} fill="currentColor" /></span>
        <span className="project-title" data-testid={`project-card-title-${testIndex}`}>{project.title}</span>
      </span>
    </motion.button>
  );
}