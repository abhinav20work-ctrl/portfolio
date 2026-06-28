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

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState(null);
  const [videoAspect, setVideoAspect] = useState(9 / 16);
  const popupVideoRef = useRef(null);

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
        <div className="masonry" data-testid="projects-masonry-layout">
          {projects.slice(0, 4).map((project, index) => (
            <ProjectTile key={project.id} project={project} index={index} onOpen={setActiveProject} />
          ))}
          <motion.div
            className="experiment-note"
            initial={{ opacity: 0, rotate: -5, scale: 0.92 }}
            whileInView={{ opacity: 1, rotate: -2, scale: 1 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            data-testid="projects-experiment-note"
          >
            I experiment a lot
            <small>because motion makes strategy easier to feel.</small>
          </motion.div>
          {projects.slice(4).map((project, index) => (
            <ProjectTile key={project.id} project={project} index={index + 4} onOpen={setActiveProject} />
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
                    {activeProject.title}
                  </DialogTitle>
                  <DialogDescription className="video-dialog-description" data-testid="project-popup-description">
                    {activeProject.description}
                  </DialogDescription>
                </DialogHeader>
                <div className="video-popup-tags" data-testid="project-popup-tags">
                  {(activeProject.tags || ["Motion test", "Content rhythm", "Lab sample"]).map((tag) => (
                    <span key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function ProjectTile({ project, index, onOpen }) {
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
      className={`project-tile ${project.shape}`}
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
      data-testid={`project-video-card-${index + 1}`}
      aria-label={`Open video: ${project.title}`}
    >
      <span className="reel-index" data-testid={`project-reel-index-${index + 1}`}>{String(index + 1).padStart(2, "0")}</span>
      <div className={`project-sample-visual sample-${(index % 6) + 1}`} data-testid={`project-sample-visual-${index + 1}`}>
        <img src={project.posterUrl} loading="lazy" decoding="async" alt="" aria-hidden="true" data-testid={`project-card-poster-preview-${index + 1}`} />
        <video
          src={project.previewUrl}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
          data-testid={`project-card-hover-preview-${index + 1}`}
        />
      </div>
      <span className="project-overlay">
        <span className="project-play" data-testid={`project-play-icon-${index + 1}`}><Play size={18} fill="currentColor" /></span>
        <span className="project-title" data-testid={`project-card-title-${index + 1}`}>{project.title}</span>
      </span>
    </motion.button>
  );
}