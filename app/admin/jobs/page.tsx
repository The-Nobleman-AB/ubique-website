import Link from "next/link";
import { ExternalLink, Plus } from "lucide-react";

import { requireUser } from "@/lib/auth";
import { getAllJobs } from "@/lib/jobs";
import {
  EmptyState,
  Panel,
  StatusPill,
  formatDate,
} from "@/components/admin/ui";

export const metadata = { title: "Roles" };
export const dynamic = "force-dynamic";

export default async function AdminJobsPage() {
  await requireUser();

  const jobs = await getAllJobs();

  return (
    <>
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <h1 className="display-3 text-navy font-bold">Roles</h1>
          <p className="text-muted mt-2">
            {jobs.length} role{jobs.length === 1 ? "" : "s"} · drafts are
            invisible on the public site.
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

      <Panel className="mt-8">
        {jobs.length === 0 ? (
          <EmptyState
            title="No roles yet"
            body="Post your first role and it appears on the careers page straight away."
            action={{ label: "Post a role", href: "/admin/jobs/new" }}
          />
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="border-line text-muted border-b text-xs tracking-wider uppercase">
                  <th className="px-6 py-3 font-semibold">Role</th>
                  <th className="px-6 py-3 font-semibold">Status</th>
                  <th className="px-6 py-3 font-semibold">Applications</th>
                  <th className="px-6 py-3 font-semibold">Posted</th>
                  <th className="px-6 py-3 font-semibold">
                    <span className="sr-only">Actions</span>
                  </th>
                </tr>
              </thead>

              <tbody className="divide-line divide-y">
                {jobs.map((job) => (
                  <tr
                    key={job.id}
                    className="hover:bg-surface transition-colors"
                  >
                    <td className="px-6 py-4">
                      <Link
                        href={`/admin/jobs/${job.id}`}
                        className="text-navy hover:text-brand font-semibold"
                      >
                        {job.title}
                      </Link>
                      <p className="text-muted mt-0.5 text-sm">
                        {job.department} · {job.location} · {job.workplace}
                      </p>
                    </td>

                    <td className="px-6 py-4">
                      <StatusPill status={job.status} />
                    </td>

                    <td className="px-6 py-4">
                      {job.applicationCount ? (
                        <Link
                          href={`/admin/applications?job=${job.id}`}
                          className="text-brand font-semibold tabular-nums underline-offset-4 hover:underline"
                        >
                          {job.applicationCount}
                        </Link>
                      ) : (
                        <span className="text-muted tabular-nums">0</span>
                      )}
                    </td>

                    <td className="text-muted px-6 py-4 text-sm tabular-nums">
                      {job.status === "DRAFT" ? "—" : formatDate(job.postedAt)}
                    </td>

                    <td className="px-6 py-4 text-right">
                      <div className="flex justify-end gap-4">
                        <Link
                          href={`/admin/jobs/${job.id}`}
                          className="text-brand text-sm font-semibold underline-offset-4 hover:underline"
                        >
                          Edit
                        </Link>

                        {job.status !== "DRAFT" && (
                          <a
                            href={`/careers/${job.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="text-muted hover:text-navy inline-flex items-center gap-1 text-sm font-semibold"
                          >
                            View
                            <ExternalLink size={13} aria-hidden="true" />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </Panel>
    </>
  );
}
