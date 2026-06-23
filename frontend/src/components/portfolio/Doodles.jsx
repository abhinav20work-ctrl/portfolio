import { motion } from "framer-motion";

export const HeroSquiggle = () => (
  <motion.svg
    className="hero-squiggle"
    viewBox="0 0 190 80"
    fill="none"
    aria-hidden="true"
    initial={{ rotate: -8, opacity: 0, scale: 0.9 }}
    animate={{ rotate: [-8, -2, -8], opacity: 1, scale: 1 }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
  >
    <path
      d="M7 43C30 7 56 7 72 39C91 76 118 75 137 34C149 8 167 8 184 26"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </motion.svg>
);

export const MovingArrowsArt = () => (
  <div className="flow-art" data-testid="how-dummy-art">
    <svg viewBox="0 0 760 380" fill="none" aria-hidden="true">
      <motion.path
        d="M92 192C161 75 271 91 324 167C389 260 498 273 583 165C620 118 663 102 702 116"
        stroke="#0A0A0A"
        strokeWidth="3"
        strokeLinecap="round"
        strokeDasharray="10 12"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.45 }}
        transition={{ duration: 1.4, ease: "easeInOut" }}
      />
      <motion.g
        animate={{ x: [0, 18, 0], y: [0, -8, 0], rotate: [0, 3, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <path d="M205 122L257 99L240 153" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      <motion.g
        animate={{ x: [0, -15, 0], y: [0, 8, 0], rotate: [0, -5, 0] }}
        transition={{ duration: 2.9, repeat: Infinity, ease: "easeInOut", delay: 0.25 }}
      >
        <path d="M534 241L593 246L560 293" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      </motion.g>
      <rect x="71" y="139" width="116" height="99" rx="47" fill="#FEF08A" stroke="#0A0A0A" strokeWidth="2" />
      <rect x="315" y="112" width="136" height="122" rx="8" fill="#93C5FD" stroke="#0A0A0A" strokeWidth="2" />
      <path d="M375 146C407 132 431 148 426 174C421 202 375 210 352 190C331 171 344 158 375 146Z" fill="#FFFFFF" stroke="#0A0A0A" strokeWidth="2" />
      <circle cx="638" cy="174" r="63" fill="#FF8A8A" stroke="#0A0A0A" strokeWidth="2" />
      <path d="M113 188C127 177 149 177 164 190" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
      <path d="M609 176C627 191 650 190 667 172" stroke="#0A0A0A" strokeWidth="3" strokeLinecap="round" />
    </svg>
  </div>
);

export const SpiralMark = ({ className = "" }) => (
  <svg className={`spiral-mark ${className}`} viewBox="0 0 86 86" fill="none" aria-hidden="true">
    <path
      d="M48 12C25 9 12 25 15 43C18 65 42 76 59 61C73 49 68 28 50 28C34 28 27 44 36 53C45 62 57 55 56 45"
      stroke="currentColor"
      strokeWidth="4"
      strokeLinecap="round"
    />
  </svg>
);

export const FooterFace = () => (
  <motion.svg
    className="footer-face"
    viewBox="0 0 220 220"
    fill="none"
    data-testid="footer-dummy-art"
    aria-label="Playful abstract face artwork"
    whileHover={{ rotate: -3, scale: 1.03 }}
    transition={{ type: "spring", stiffness: 220, damping: 14 }}
  >
    <path d="M45 73C73 20 157 21 178 80C199 140 152 199 92 183C37 168 17 124 45 73Z" fill="#FEF08A" stroke="#0A0A0A" strokeWidth="3" />
    <circle cx="84" cy="92" r="8" fill="#0A0A0A" />
    <circle cx="139" cy="92" r="8" fill="#0A0A0A" />
    <path d="M84 133C103 151 132 151 151 130" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
    <path d="M47 47L28 23M172 43L193 19M111 29L113 5" stroke="#0A0A0A" strokeWidth="4" strokeLinecap="round" />
  </motion.svg>
);