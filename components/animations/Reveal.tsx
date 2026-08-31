"use client";

import {
  motion,
  useReducedMotion,
  type TargetAndTransition,
} from "framer-motion";

/**
 * Scroll-reveal wrapper.
 *
 * One component, three presets — replacing the three files that previously
 * lived here, two of which contained a copy of the footer.
 *
 * Motion is skipped entirely when the visitor has asked for reduced motion:
 * the content renders in its final state rather than animating faster.
 */

type Preset = "fade" | "slide-up" | "scale";

const presets: Record<
  Preset,
  { hidden: TargetAndTransition; shown: TargetAndTransition }
> = {
  fade: {
    hidden: { opacity: 0 },
    shown: { opacity: 1 },
  },
  "slide-up": {
    hidden: { opacity: 0, y: 24 },
    shown: { opacity: 1, y: 0 },
  },
  scale: {
    hidden: { opacity: 0, scale: 0.96 },
    shown: { opacity: 1, scale: 1 },
  },
};

export interface RevealProps {
  children: React.ReactNode;
  preset?: Preset;
  /** Seconds to wait before starting — for staggering a group. */
  delay?: number;
  className?: string;
}

export default function Reveal({
  children,
  preset = "slide-up",
  delay = 0,
  className,
}: RevealProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <div className={className}>{children}</div>;
  }

  const { hidden, shown } = presets[preset];

  return (
    <motion.div
      className={className}
      initial={hidden}
      whileInView={shown}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
