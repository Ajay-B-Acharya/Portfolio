import { motion, useReducedMotion } from "framer-motion";
import { portfolio } from "../../data/portfolio";
import { ContactButton } from "./ContactButton";
import { Navigation } from "./Navigation";
import { ResumeButton } from "./ResumeButton";

export function Overlay() {
  const reducedMotion = useReducedMotion();
  const transition = reducedMotion
    ? { duration: 0 }
    : { duration: 0.9, ease: [0.22, 1, 0.36, 1] as const };

  return (
    <div className="overlay">
      <Navigation />
      <motion.section
        className="introduction"
        initial={reducedMotion ? false : { opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={transition}
      >
        <p className="eyebrow">{portfolio.projectName}</p>
        <h1>{portfolio.name}</h1>
        <p className="role">{portfolio.role}</p>
      </motion.section>
      <div className="utilities">
        <ResumeButton />
        <ContactButton />
      </div>
      <p className="scene-note">A spatial portfolio in progress</p>
    </div>
  );
}
