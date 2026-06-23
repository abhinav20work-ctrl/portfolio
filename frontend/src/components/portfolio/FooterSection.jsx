import { motion } from "framer-motion";
import { Mail, Linkedin } from "lucide-react";
import { FooterFace } from "./Doodles";

export default function FooterSection() {
  return (
    <footer id="contact" className="footer-section" data-testid="footer-section">
      <div className="footer-shell">
        <div className="footer-philosophy">
          <p className="section-kicker" data-testid="footer-kicker-text">My philosophy</p>
          <h2 data-testid="footer-philosophy-title">Useful can still be strange.</h2>
          <p data-testid="footer-philosophy-text">
            The best content gives people a handle: something to hold, repeat, question, or send to someone else.
          </p>
        </div>
        <div className="footer-art-wrap">
          <FooterFace />
        </div>
        <nav className="footer-links" aria-label="Contact links" data-testid="footer-contact-links">
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