"use client";

import { useEffect, useState } from "react";

/**
 * Whether the visitor has asked their system to reduce motion.
 *
 * This replaces framer-motion's hook of the same name. Two components needed
 * exactly this and nothing else from that library, which meant shipping an
 * animation engine to every phone in order to read one media query.
 *
 * Starts false so the server-rendered HTML matches the client's first paint —
 * returning true initially would flag a hydration mismatch on most visits.
 */
export function useReducedMotion(): boolean {
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");

    setReduced(query.matches);

    const onChange = (event: MediaQueryListEvent) => setReduced(event.matches);

    query.addEventListener("change", onChange);
    return () => query.removeEventListener("change", onChange);
  }, []);

  return reduced;
}
