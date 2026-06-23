import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";

const footerArtworkUrl = "https://customer-assets.emergentagent.com/job_micro-moments-8/artifacts/0jx7eeuv_abhinav-footer.png";

export default function FooterSection() {
  return (
    <footer id="contact" className="footer-section" data-testid="footer-section">
      <div className="footer-lab-header" data-testid="footer-lab-header">
        <span>Content Lab checkout</span>
        <strong>Ready for a messy brief?</strong>
      </div>
      <div className="footer-shell">
        <div className="footer-philosophy">
          <div className="lab-module-label footer-label" data-testid="lab-notes-module-label">Module 04 / Exit Note</div>
          <h2 data-testid="footer-philosophy-title">Useful can still be strange.</h2>
          <p data-testid="footer-philosophy-text">
            The best content gives people a handle: something to hold, repeat, question, or send to someone else.
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
            href="https://linkedin.com"
            target="_blank"
            rel="noreferrer"
            whileHover={{ rotate: -4, x: -6 }}
            data-testid="footer-linkedin-link"
          >
            <Linkedin size={20} /> LinkedIn
          </motion.a>
          <motion.a
            href="mailto:hello@example.com"
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