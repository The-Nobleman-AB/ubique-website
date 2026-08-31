import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  EmptyState,
  Panel,
  StatusPill,
  formatDate,
} from "@/components/admin/ui";
import { APPLICATION_STATUSES } from "@/lib/application-status";
import { cn } from "@/lib/cn";

export const metadata = { title: "Applications" };
export const dynamic = "force-dynamic";

export default async function ApplicationsPage({
  searchParams,
}: {
  searchParams: Promise<{ status?: string; job?: string }>;
}) {
  await requireUser();

  const { status, job } = await searchParams;

  const where = {
    ...(status && (APPLICATION_STATUSES as readonly string[]).includes(status)
      ? { status }
      : {}),
    ...(job ? { jobId: job } : {}),
  };

  const [applications, jobs, counts] = await Promise.all([
    prisma.application.findMany({
      where,
      orderBy: { createdAt: "desc" },
      include: { job: { select: { id: true, title: true } } },
      take: 200,
    }),
    prisma.job.findMany({
      select: { id: true, title: true },
      orderBy: { title: "asc" },
    }),
    prisma.application.groupBy({ by: ["status"], _count: true }),
  ]);

  const countFor = (value: string) =>
    counts.find((c) => c.status === value)?._count ?? 0;

  const total = counts.reduce((sum, c) => sum + c._count, 0);

  const filterHref = (next: { status?: string; job?: string }) => {
    const params = new URLSearchParams();
    const s = next.status ?? status;
    const j = next.job ?? job;
    if (s) params.set("status", s);
    if (j) params.set("job", j);
    const qs = params.toString();
    return `/admin/applications${qs ? `?${qs}` : ""}`;
  };

  return (
    <>
      <h1 className="display-3 text-navy font-bold">Applications</h1>
      <p className="text-muted mt-2">
        {total} in total
        {job && jobs.find((j) => j.id === job)
          ? ` · filtered to ${jobs.find((j) => j.id === job)!.title}`
          : ""}
      </p>

      {/* -------------------------------------------------- filters */}

      <div className="mt-6 flex flex-wrap gap-2">
        <Link
          href={filterHref({ status: "" })}
          className={cn(
            "rounded-pill border px-3.5 py-1.5 text-sm font-medium transition-colors",
            !status
              ? "border-navy bg-navy text-white"
              : "border-line text-muted hover:border-brand/40 bg-white",
          )}
        >
          All ({total})
        </Link>

        {APPLICATION_STATUSES.map((value) => (
          <Link
            key={value}
            href={filterHref({ status: value })}
            className={cn(
              "rounded-pill border px-3.5 py-1.5 text-sm font-medium capitalize transition-colors",
              status === value
                ? "border-navy bg-navy text-white"
                : "border-line text-muted hover:border-brand/40 bg-white",
            )}
          >
            {value.toLowerCase()} ({countFor(value)})
          </Link>
        ))}
      </div>

      {jobs.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          <Link
            href={filterHref({ job: "" })}
            className={cn(
              "rounded-pill border px-3.5 py-1.5 text-sm transition-colors",
              !job
                ? "border-brand/40 bg-brand-tint text-brand"
                : "border-line text-muted bg-white",
            )}
          >
            Every role
          </Link>

          {jobs.map((option) => (
            <Link
              key={option.id}
              href={filterHref({ job: option.id })}
              className={cn(
                "rounded-pill border px-3.5 py-1.5 text-sm transition-colors",
                job === option.id
                  ? "border-brand/40 bg-brand-tint text-brand"
                  : "border-line text-muted hover:border-brand/40 bg-white",
              )}
            >
              {option.title}
            </Link>
          ))}
        </div>
      )}

      {/* -------------------------------------------------- list */}

      <Panel className="mt-8">
        {applications.length === 0 ? (
          <EmptyState
            title="Nothing here"
            body={
              status || job
                ? "No applications match this filter."
                : "Applications submitted through the site land here."
            }
            action={
              status || job
                ? { label: "Clear filters", href: "/admin/applications" }
                : undefined
            }
          />
        ) : (
          <ul className="divide-line divide-y">
            {applications.map((application) => (
              <li key={application.id}>
                <Link
                  href={`/admin/applications/${application.id}`}
                  className="hover:bg-surface flex flex-wrap items-center gap-4 px-6 py-4 transition-colors"
                >
                  <div className="min-w-0 flex-1">
                    <p className="text-navy font-semibold">
                      {application.firstName} {application.lastName}
                    </p>
                    <p className="text-muted mt-0.5 truncate text-sm">
                      {application.job.title} · {application.location} ·{" "}
                      {application.email}
                    </p>
                  </div>

                  <code className="text-muted hidden text-xs lg:block">
                    {application.reference}
                  </code>

                  <StatusPill status={application.status} kind="application" />

                  <span className="text-muted w-24 text-right text-sm tabular-nums">
                    {formatDate(application.createdAt)}
                  </span>

                  <ArrowRight
                    size={16}
                    aria-hidden="true"
                    className="text-muted/70 shrink-0"
                  />
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Panel>
    </>
  );
}
