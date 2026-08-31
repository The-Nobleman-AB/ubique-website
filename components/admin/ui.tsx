import Link from "next/link";

import { cn } from "@/lib/cn";

/** Shared primitives for the admin screens — panel, stat tile, status pill. */

export function Panel({
  title,
  action,
  children,
  className,
}: {
  title?: string;
  action?: { label: string; href: string };
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section
      className={cn(
        "rounded-card border-line shadow-card border bg-white",
        className,
      )}
    >
      {title && (
        <header className="border-line flex items-center justify-between gap-4 border-b px-6 py-4">
          <h2 className="text-navy font-semibold">{title}</h2>
          {action && (
            <Link
              href={action.href}
              className="text-brand text-sm font-semibold underline-offset-4 hover:underline"
            >
              {action.label}
            </Link>
          )}
        </header>
      )}
      {children}
    </section>
  );
}

export function StatTile({
  label,
  value,
  hint,
  href,
}: {
  label: string;
  value: number | string;
  hint?: string;
  href?: string;
}) {
  const body = (
    <>
      <dt className="text-muted text-sm">{label}</dt>
      <dd className="stat-lg text-navy mt-2 font-bold">{value}</dd>
      {hint && <p className="text-muted mt-1 text-xs">{hint}</p>}
    </>
  );

  const shell =
    "rounded-card border-line block border bg-white p-6 transition-colors";

  return href ? (
    <Link href={href} className={cn(shell, "hover:border-brand/40")}>
      {body}
    </Link>
  ) : (
    <div className={shell}>{body}</div>
  );
}

const JOB_TONES: Record<string, string> = {
  OPEN: "bg-accent-tint text-accent-dark",
  DRAFT: "bg-warn/10 text-warn",
  CLOSED: "bg-surface text-muted",
};

const APPLICATION_TONES: Record<string, string> = {
  NEW: "bg-brand-tint text-brand",
  REVIEWING: "bg-warn/10 text-warn",
  SHORTLISTED: "bg-accent-tint text-accent-dark",
  INTERVIEWING: "bg-accent-tint text-accent-dark",
  OFFERED: "bg-accent-tint text-accent-dark",
  REJECTED: "bg-danger/10 text-danger",
  HIRED: "bg-accent text-white",
};

export function StatusPill({
  status,
  kind = "job",
}: {
  status: string;
  kind?: "job" | "application";
}) {
  const tones = kind === "job" ? JOB_TONES : APPLICATION_TONES;

  return (
    <span
      className={cn(
        "rounded-pill inline-block px-2.5 py-1 text-xs font-semibold tracking-wide uppercase",
        tones[status] ?? "bg-surface text-muted",
      )}
    >
      {status.toLowerCase()}
    </span>
  );
}

export function EmptyState({
  title,
  body,
  action,
}: {
  title: string;
  body: string;
  action?: { label: string; href: string };
}) {
  return (
    <div className="px-6 py-16 text-center">
      <p className="text-navy font-semibold">{title}</p>
      <p className="text-muted mx-auto mt-2 max-w-sm text-sm">{body}</p>
      {action && (
        <Link
          href={action.href}
          className="rounded-control bg-navy hover:bg-brand mt-6 inline-block px-5 py-2.5 text-sm font-semibold text-white transition-colors"
        >
          {action.label}
        </Link>
      )}
    </div>
  );
}

export function formatDate(date: Date | string): string {
  return new Date(date).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}
