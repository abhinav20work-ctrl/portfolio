import { motion, useScroll, useTransform } from "framer-motion";
import { HeroSquiggle } from "./Doodles";

const lines = [
  "I turn messy ideas into clear stories.",
  "I build content systems that still feel human.",
  "I help brands sound less like rooms and more like people.",
];

export default function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 600], [0, 70]);

  return (
    <section className="hero-section" data-testid="hero-section">
      <motion.div className="hero-inner" style={{ y }}>
        <p className="hero-kicker" data-testid="hero-role-text">Abhinav Sharma · Content Strategist</p>
        <div className="hero-copy" data-testid="hero-three-line-paragraph">
          {lines.map((line, index) => (
            <motion.h1
              key={line}
              className="hero-line"
              initial={{ opacity: 0, y: 32 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75, delay: index * 0.16, ease: [0.22, 1, 0.36, 1] }}
              data-testid={`hero-line-${index + 1}`}
            >
              {line}
            </motion.h1>
          ))}
        </div>
        <HeroSquiggle />
      </motion.div>
      <a className="scroll-cue" href="#how" data-testid="hero-scroll-link" aria-label="Scroll to here's how section">
        <span>scroll</span>
      </a>
    </section>
  );
}