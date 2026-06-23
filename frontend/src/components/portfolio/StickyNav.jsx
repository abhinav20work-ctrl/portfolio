import { motion } from "framer-motion";

const navItems = [
  { href: "#case-studies", label: "Proof" },
  { href: "#projects", label: "Experiments" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export default function StickyNav() {
  return (
    <motion.nav
      className="sticky-nav"
      aria-label="Portfolio sections"
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.55, delay: 0.9 }}
      data-testid="sticky-section-nav"
    >
      {navItems.map((item) => (
        <a key={item.href} href={item.href} data-testid={`nav-link-${item.label.toLowerCase()}`}>
          <span>{item.label}</span>
        </a>
      ))}
    </motion.nav>
  );
}