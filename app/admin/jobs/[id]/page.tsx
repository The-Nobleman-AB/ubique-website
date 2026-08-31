import Link from "next/link";
import { notFound } from "next/navigation";
import { AlertTriangle, ArrowLeft, ExternalLink, Trash2 } from "lucide-react";

import { requireUser } from "@/lib/auth";
import { getJobById } from "@/lib/jobs";
import JobForm from "@/components/admin/JobForm";
import { StatusPill } from "@/components/admin/ui";
import { deleteJob, updateJob } from "../../actions";

export const metadata = { title: "Edit role" };
export const dynamic = "force-dynamic";

export default async function EditJobPage({
  params,
  searchParams,
}: {
  params: Promise<{ id: string }>;
  searchParams: Promise<{ error?: string }>;
}) {
  await requireUser();

  const { id } = await params;
  const { error } = await searchParams;

  const job = await getJobById(id);

  if (!job) notFound();

  /* Bind the id so the form action keeps the (prev, formData) shape. */
  const action = updateJob.bind(null, job.id);
  const remove = deleteJob.bind(null, job.id);

  return (
    <>
      <Link
        href="/admin/jobs"
        className="text-muted hover:text-brand inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Back to roles
      </Link>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="display-3 text-navy font-bold">{job.title}</h1>
            <StatusPill status={job.status} />
          </div>

          <p className="text-muted mt-2">
            {job.applicationCount ?? 0} application
            {job.applicationCount === 1 ? "" : "s"}
            {job.status !== "DRAFT" && (
              <>
                {" · "}
                <a
                  href={`/careers/${job.slug}`}
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand inline-flex items-center gap-1 font-medium underline-offset-4 hover:underline"
                >
                  View live page
                  <ExternalLink size={13} aria-hidden="true" />
                </a>
              </>
            )}
          </p>
        </div>

        {(job.applicationCount ?? 0) === 0 && (
          <form action={remove}>
            <button
              type="submit"
              className="rounded-control border-danger/30 text-danger hover:bg-danger/5 inline-flex items-center gap-2 border px-4 py-2.5 text-sm font-semibold transition-colors"
            >
              <Trash2 size={15} aria-hidden="true" />
              Delete role
            </button>
          </form>
        )}
      </div>

      {error === "has-applications" && (
        <div
          role="alert"
          className="rounded-card border-warn/30 bg-warn/5 mt-6 flex items-start gap-3 border p-5"
        >
          <AlertTriangle
            size={18}
            aria-hidden="true"
            className="text-warn mt-0.5 shrink-0"
          />
          <p className="text-navy text-sm leading-relaxed">
            This role has applications against it, so it can&rsquo;t be deleted
            — that would delete the candidates too. Set it to{" "}
            <strong>Closed</strong> instead: the page stays up for anyone
            holding a link, but applications stop.
          </p>
        </div>
      )}

      <JobForm job={job} action={action} submitLabel="Save changes" />
    </>
  );
}
