"use client";

import { useEffect, useState } from "react";
import { useReducedMotion } from "@/lib/use-reduced-motion";

import { cn } from "@/lib/cn";

/**
 * The careers hero's rotating line. Kept as its own client component so the
 * rest of the hero can stay on the server — and so the animation can be
 * switched off cleanly when the visitor has asked for reduced motion.
 */
const phrases = [
  "Build enterprise solutions.",
  "Lead global projects.",
  "Shape digital transformation.",
  "Grow with great people.",
  "Create meaningful impact.",
];

export default function RotatingPhrase() {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (reduced) return;

    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setIndex((current) => (current + 1) % phrases.length);
        setVisible(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, [reduced]);

  /* Reduced motion: show the whole list rather than one cycling line, so no
     information is lost. */
  if (reduced) {
    return (
      <ul className="flex flex-col gap-3">
        {phrases.map((phrase) => (
          <li key={phrase} className="display-4 font-semibold text-white">
            {phrase}
          </li>
        ))}
      </ul>
    );
  }

  return (
    <p
      aria-live="polite"
      className={cn(
        "display-3 min-h-[2.4em] font-bold text-white transition-all duration-200",
        visible ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0",
      )}
    >
      {phrases[index]}
    </p>
  );
}
