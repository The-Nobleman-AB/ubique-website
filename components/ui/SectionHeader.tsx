import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * Section opener: eyebrow, heading, optional lead, optional action link.
 *
 * Left-aligned by default. The old pages centred almost every heading, which
 * is why ten sections in a row read as one undifferentiated stack — centring
 * is now an explicit choice per section, not the default.
 */
export interface SectionHeaderProps {
  eyebrow: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  action?: { label: string; href: string };
  align?: "left" | "center";
  /** Use on navy sections. */
  tone?: "light" | "dark";
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  lead,
  action,
  align = "left",
  tone = "light",
  className,
}: SectionHeaderProps) {
  const dark = tone === "dark";

  return (
    <div
      className={cn(
        "flex flex-wrap gap-6",
        align === "center"
          ? "flex-col items-center text-center"
          : "items-end justify-between",
        className,
      )}
    >
      <div className={cn(align === "center" ? "max-w-3xl" : "max-w-2xl")}>
        <p className={cn("eyebrow", dark ? "text-accent" : "text-brand")}>
          {eyebrow}
        </p>

        <h2
          className={cn(
            "display-2 mt-4 font-bold",
            dark ? "text-white" : "text-navy",
          )}
        >
          {title}
        </h2>

        {lead && (
          <p
            className={cn(
              "mt-5 text-lg leading-relaxed",
              dark ? "text-white/70" : "text-muted",
            )}
          >
            {lead}
          </p>
        )}
      </div>

      {action && (
        <Link
          href={action.href}
          className={cn(
            "inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline",
            dark ? "text-accent" : "text-brand",
          )}
        >
          {action.label}
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      )}
    </div>
  );
}
