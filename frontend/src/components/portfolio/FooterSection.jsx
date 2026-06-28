import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const footerArtworkUrl = "https://customer-assets.emergentagent.com/job_micro-moments-8/artifacts/0jx7eeuv_abhinav-footer.png";

export default function FooterSection() {
  return (
    <footer id="contact" className="footer-section" data-testid="footer-section">
      <div className="footer-lab-header" data-testid="footer-lab-header">
        <span>Available for visual storytelling work</span>
        <strong>Let’s shape the story.</strong>
      </div>
      <div className="footer-shell">
        <div className="footer-philosophy">
          <div className="section-script-label footer-label" data-testid="lab-notes-module-label">My Philosophy</div>
          <h2 data-testid="footer-philosophy-title">
            <span>Visual Quality.</span>
            <span>Brand coherence.</span>
            <span>Audience impact.</span>
          </h2>
          <p className="footer-highlight-copy" data-testid="footer-philosophy-text">
            I don’t start with content, I start with context —
            <span>who’s the audience, what do they want to see, and how can we make them see.</span>
          </p>
        </div>
        <div className="footer-art-wrap">
          <img
            className="footer-attached-art"
            src={footerArtworkUrl}
            alt="Hand-drawn waving character artwork"
            data-testid="footer-attached-art"
          />
        </div>
        <nav className="footer-links" aria-label="Contact links" data-testid="footer-contact-links">
          <p className="footer-link-label" data-testid="footer-link-label">Open channels</p>
          <motion.a
            href="https://www.behance.net/abhinavsharma7585"
            target="_blank"
            rel="noreferrer"
            whileHover={{ rotate: -4, x: -6 }}
            data-testid="footer-linkedin-link"
          >
            <Linkedin size={20} /> Behance
          </motion.a>
          <motion.a
            href="mailto:abhinav20.work@gmail.com"
            whileHover={{ rotate: 4, x: 6 }}
            data-testid="footer-email-link"
          >
            <Mail size={20} /> Email
          </motion.a>
        </nav>
      </div>
    </footer>
  );
}