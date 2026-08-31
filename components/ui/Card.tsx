import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * The standard content card. Replaces the assorted hand-rolled panels that
 * previously differed in radius, border, padding and hover behaviour.
 *
 * (The file that used to sit here contained a copy of the Next.js root
 * layout — see the rebuild notes.)
 */
export interface CardProps {
  title: React.ReactNode;
  body?: React.ReactNode;
  /** Renders the whole card as a link with an arrow affordance. */
  href?: string;
  eyebrow?: string;
  /** Small pills under the body — capabilities, tags, technologies. */
  tags?: string[];
  icon?: React.ReactNode;
  tone?: "light" | "dark";
  className?: string;
  children?: React.ReactNode;
}

export default function Card({
  title,
  body,
  href,
  eyebrow,
  tags,
  icon,
  tone = "light",
  className,
  children,
}: CardProps) {
  const dark = tone === "dark";

  const shell = cn(
    "rounded-card flex h-full flex-col border p-7 transition-all",
    dark
      ? "border-white/10 bg-white/5 hover:border-accent/40 hover:bg-white/10"
      : "border-line bg-surface hover:border-brand/40 hover:shadow-lift",
    className,
  );

  const inner = (
    <>
      {icon && <div className="text-brand mb-5">{icon}</div>}

      {eyebrow && (
        <p className={cn("eyebrow mb-3", dark ? "text-accent" : "text-brand")}>
          {eyebrow}
        </p>
      )}

      <h3
        className={cn(
          "flex items-center gap-2 text-lg font-semibold",
          dark ? "text-white" : "text-navy",
          href && (dark ? "group-hover:text-accent" : "group-hover:text-brand"),
        )}
      >
        {title}
        {href && (
          <ArrowRight
            size={15}
            aria-hidden="true"
            className="transition-transform duration-200 group-hover:translate-x-1"
          />
        )}
      </h3>

      {body && (
        <p
          className={cn(
            "mt-3 flex-1 leading-relaxed",
            dark ? "text-white/70" : "text-muted",
          )}
        >
          {body}
        </p>
      )}

      {children}

      {tags && tags.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {tags.map((tag) => (
            <li
              key={tag}
              className={cn(
                "rounded-pill px-2.5 py-1 text-xs font-medium",
                dark ? "bg-white/10 text-white/80" : "bg-brand-tint text-brand",
              )}
            >
              {tag}
            </li>
          ))}
        </ul>
      )}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={cn("group", shell)}>
        {inner}
      </Link>
    );
  }

  return <div className={shell}>{inner}</div>;
}
