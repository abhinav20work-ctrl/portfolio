import { motion } from "framer-motion";

const labWords = [
  "signal mining",
  "voice chemistry",
  "proof board",
  "hook distillation",
  "campaign prototypes",
  "narrative systems",
  "content experiments",
  "launch language",
];

export default function LabTicker() {
  const repeated = [...labWords, ...labWords];

  return (
    <section className="lab-ticker-section" data-testid="content-lab-ticker-section" aria-label="Content Lab capabilities ticker">
      <motion.div
        className="lab-ticker-track"
        animate={{ x: [0, -720] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        data-testid="content-lab-ticker-track"
      >
        {repeated.map((word, index) => (
          <span key={`${word}-${index}`} data-testid={`content-lab-ticker-item-${index + 1}`}>
            {word}
          </span>
        ))}
      </motion.div>
    </section>
  );
}