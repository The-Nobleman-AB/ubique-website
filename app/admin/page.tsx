import Link from "next/link";
import { AlertCircle, ArrowRight, Plus } from "lucide-react";

import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import {
  EmptyState,
  Panel,
  StatTile,
  StatusPill,
  formatDate,
} from "@/components/admin/ui";

export const metadata = { title: "Overview" };
export const dynamic = "force-dynamic";

export default async function AdminDashboard({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>;
}) {
  const user = await requireUser();
  const { error } = await searchParams;

  const [openRoles, draftRoles, totalApplications, newApplications, recent] =
    await Promise.all([
      prisma.job.count({ where: { status: "OPEN" } }),
      prisma.job.count({ where: { status: "DRAFT" } }),
      prisma.application.count(),
      prisma.application.count({ where: { status: "NEW" } }),
      prisma.application.findMany({
        take: 8,
        orderBy: { createdAt: "desc" },
        include: { job: { select: { title: true } } },
      }),
    ]);

  return (
    <>
      {/* Editors who follow a link into an owner-only screen land back here.
          Bouncing them without a word reads like a broken link. */}
      {error === "owner-only" && (
        <div
          role="alert"
          className="rounded-card border-line bg-surface mb-8 flex items-start gap-3 border p-5"
        >
          <AlertCircle
            size={18}
            aria-hidden="true"
            className="text-muted mt-0.5 shrink-0"
          />
          <p className="text-muted text-sm leading-relaxed">
            Managing admin accounts is owner-only. Ask an owner if you need
            access to it.
          </p>
        </div>
      )}

      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-3 text-navy font-bold">
            Afternoon, {user.name.split(" ")[0]}
          </h1>
          <p className="text-muted mt-2">
            {newApplications > 0
              ? `${newApplications} application${newApplications === 1 ? "" : "s"} waiting for a first look.`
              : "Nothing new waiting — you're on top of it."}
          </p>
        </div>

        <Link
          href="/admin/jobs/new"
          className="rounded-control bg-accent hover:bg-accent-dark inline-flex items-center gap-2 px-5 py-3 font-semibold text-white transition-colors"
        >
          <Plus size={17} aria-hidden="true" />
          Post a role
        </Link>
      </div>

      <dl className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatTile label="Open roles" value={openRoles} href="/admin/jobs" />
        <StatTile
          label="Drafts"
          value={draftRoles}
          hint="Not visible on the site"
          href="/admin/jobs"
        />
        <StatTile
          label="Applications"
          value={totalApplications}
          href="/admin/applications"
        />
        <StatTile
          label="Awaiting review"
          value={newApplications}
          href="/admin/applications?status=NEW"
        />
      </dl>

      <Panel
        title="Latest applications"
        action={{ label: "See all", href: "/admin/applications" }}
        className="mt-8"
      >
        {recent.length === 0 ? (
          <EmptyState
            title="No applications yet"
            body="They'll appear here the moment someone applies through the site."
            action={{ label: "View open roles", href: "/admin/jobs" }}
          />
        ) : (
          <ul className="divide-line divide-y">
            {recent.map((application) => (
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
                      {application.job.title} · {application.location}
                    </p>
                  </div>

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
