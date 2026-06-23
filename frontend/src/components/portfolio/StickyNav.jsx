import { motion } from "framer-motion";

const navItems = [
  { href: "#case-studies", label: "01 Proof", testId: "nav-link-proof" },
  { href: "#projects", label: "02 Shelf", testId: "nav-link-experiments" },
  { href: "#process", label: "03 System", testId: "nav-link-process" },
  { href: "#contact", label: "04 Contact", testId: "nav-link-contact" },
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
      <a href="#top" className="nav-brand" data-testid="nav-link-content-lab">
        Content Lab™
      </a>
      {navItems.map((item) => (
        <a key={item.href} href={item.href} data-testid={item.testId}>
          <span>{item.label}</span>
        </a>
      ))}
    </motion.nav>
  );
}