import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * The site's page hero.
 *
 * Every top-level page opens with this, so heroes stop drifting apart: one
 * navy ground, one glow treatment, one breadcrumb, one type scale, one CTA
 * pair. Variation comes from the `aside` and `stats` slots, not from each
 * page inventing its own markup.
 */

export interface Crumb {
  name: string;
  href?: string;
}

export interface HeroAction {
  label: string;
  href: string;
  variant?: "primary" | "ghost";
}

export interface HeroStat {
  value: string;
  label: string;
}

export interface PageHeroProps {
  eyebrow: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  breadcrumbs?: Crumb[];
  actions?: HeroAction[];
  /** Promoted panel to the right of the copy — an office card, an image, a form. */
  aside?: React.ReactNode;
  /** Strip of figures below the fold line. */
  stats?: HeroStat[];
  /** Narrow hero for secondary pages: no aside, tighter vertical rhythm. */
  compact?: boolean;
  children?: React.ReactNode;
}

export default function PageHero({
  eyebrow,
  title,
  intro,
  breadcrumbs,
  actions,
  aside,
  stats,
  compact,
  children,
}: PageHeroProps) {
  return (
    <section
      className="bg-navy relative overflow-hidden pt-20"
      data-surface="dark"
    >
      {/* Ambient brand glow. Two orbs, always the same two, so the treatment
          reads as a system rather than a per-page decision. */}
      <div
        aria-hidden="true"
        className="bg-brand/20 pointer-events-none absolute -top-32 -right-40 h-[560px] w-[560px] rounded-full blur-[170px]"
      />
      <div
        aria-hidden="true"
        className="bg-accent/15 pointer-events-none absolute -bottom-40 -left-32 h-[440px] w-[440px] rounded-full blur-[150px]"
      />

      <div
        className={cn(
          "relative mx-auto max-w-7xl px-6",
          compact ? "py-16 md:py-20" : "py-20 md:py-28",
        )}
      >
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              {breadcrumbs.map((crumb, index) => (
                <li key={crumb.name} className="flex items-center gap-2">
                  {index > 0 && <span aria-hidden="true">/</span>}
                  {crumb.href ? (
                    <Link href={crumb.href} className="hover:text-white">
                      {crumb.name}
                    </Link>
                  ) : (
                    <span className="text-white/80">{crumb.name}</span>
                  )}
                </li>
              ))}
            </ol>
          </nav>
        )}

        <div
          className={cn("grid gap-14", aside && "lg:grid-cols-12 lg:items-end")}
        >
          <div className={cn(aside ? "lg:col-span-7" : "max-w-3xl")}>
            <p className="eyebrow text-accent">{eyebrow}</p>

            <h1 className="display-1 mt-5 font-bold text-white">{title}</h1>

            {intro && (
              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                {intro}
              </p>
            )}

            {actions && actions.length > 0 && (
              <div className="mt-9 flex flex-wrap gap-3">
                {actions.map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className={cn(
                      "rounded-control inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white transition-colors",
                      action.variant === "ghost"
                        ? "border border-white/20 hover:bg-white/10"
                        : "bg-accent hover:bg-accent-dark",
                    )}
                  >
                    {action.label}
                    {action.variant !== "ghost" && (
                      <ArrowRight size={17} aria-hidden="true" />
                    )}
                  </Link>
                ))}
              </div>
            )}

            {children}
          </div>

          {aside && <div className="lg:col-span-5">{aside}</div>}
        </div>

        {stats && stats.length > 0 && (
          <dl className="rounded-card mt-16 grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 lg:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="bg-navy px-6 py-7">
                <dd className="stat-lg order-1 font-bold text-white">
                  {stat.value}
                </dd>
                <dt className="order-2 mt-2 text-sm text-white/60">
                  {stat.label}
                </dt>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
