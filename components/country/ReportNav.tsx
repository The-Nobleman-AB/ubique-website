"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/cn";

/**
 * Sticky contents nav for long report pages.
 *
 * Replaces IndiaStickyNav, which had hardcoded labels, rendered its items as
 * non-focusable `<div>`s with no href, and was never imported anywhere.
 */

export interface ReportSection {
  id: string;
  label: string;
}

export default function ReportNav({ sections }: { sections: ReportSection[] }) {
  const [active, setActive] = useState<string | null>(sections[0]?.id ?? null);

  useEffect(() => {
    const targets = sections
      .map((section) => document.getElementById(section.id))
      .filter((element): element is HTMLElement => element !== null);

    if (targets.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        /* Pick the entry nearest the top of the viewport that is on screen,
           so the highlight tracks reading position rather than flickering
           between two sections that both intersect. */
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible[0]) setActive(visible[0].target.id);
      },
      {
        /* Top offset clears the fixed header; the bottom margin keeps only
           the upper third of the viewport in play. */
        rootMargin: "-96px 0px -66% 0px",
        threshold: 0,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [sections]);

  return (
    <nav aria-label="Report contents" className="sticky top-28">
      <h2 className="eyebrow text-muted">Contents</h2>

      <ol className="border-line mt-5 flex flex-col gap-1 border-l">
        {sections.map((section, index) => {
          const isActive = active === section.id;

          return (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                aria-current={isActive ? "location" : undefined}
                className={cn(
                  "-ml-px flex items-baseline gap-3 border-l-2 py-2 pl-4 text-sm transition-colors",
                  isActive
                    ? "border-brand text-brand font-semibold"
                    : "text-muted hover:border-line hover:text-navy border-transparent",
                )}
              >
                <span
                  aria-hidden="true"
                  className={cn(
                    "tabular-nums",
                    isActive ? "text-brand" : "text-muted/50",
                  )}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                {section.label}
              </a>
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
