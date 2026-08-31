import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";

import { cn } from "@/lib/cn";

/**
 * The closing band every page ends on. One shape, one rhythm — so the site
 * has a consistent full stop instead of eight different sign-offs.
 */
export interface CTABandProps {
  title: React.ReactNode;
  body?: React.ReactNode;
  actions: { label: string; href: string; variant?: "primary" | "ghost" }[];
  /** Small reassurance line under the copy — defaults to the ISO 27001 note. */
  note?: React.ReactNode | false;
  /** Sits inside a page section rather than spanning full width. */
  inset?: boolean;
}

export default function CTABand({
  title,
  body,
  actions,
  note,
  inset,
}: CTABandProps) {
  const content = (
    <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
      <div className="lg:col-span-7">
        <h2 className="display-3 font-bold text-white">{title}</h2>

        {body && (
          <p className="mt-4 max-w-xl leading-relaxed text-white/70">{body}</p>
        )}

        {note !== false && (
          <p className="mt-6 inline-flex items-center gap-2.5 text-sm text-white/60">
            <ShieldCheck size={16} aria-hidden="true" className="text-accent" />
            {note ??
              "ISO 27001-certified handling of candidate and client data."}
          </p>
        )}
      </div>

      <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
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
    </div>
  );

  if (inset) {
    return (
      <div className="rounded-panel bg-navy p-10 md:p-12" data-surface="dark">
        {content}
      </div>
    );
  }

  return (
    <section className="bg-navy" data-surface="dark">
      <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">{content}</div>
    </section>
  );
}
