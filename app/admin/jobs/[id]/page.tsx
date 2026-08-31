import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ExternalLink } from "lucide-react";

import { requireUser } from "@/lib/auth";
import { getJobById } from "@/lib/jobs";
import JobForm from "@/components/admin/JobForm";
import { StatusPill } from "@/components/admin/ui";
import DangerZone from "@/components/admin/DangerZone";
import { deleteJob, updateJob } from "../../actions";

export const metadata = { title: "Edit role" };
export const dynamic = "force-dynamic";

export default async function EditJobPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireUser();

  const { id } = await params;

  const job = await getJobById(id);

  if (!job) notFound();

  /* Bind the id so the form action keeps the (prev, formData) shape. */
  const action = updateJob.bind(null, job.id);
  const remove = deleteJob.bind(null, job.id);

  const applications = job.applicationCount ?? 0;

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
      </div>

      <JobForm job={job} action={action} submitLabel="Save changes" />

      <section className="border-line mt-12 border-t pt-8">
        <h2 className="text-navy font-semibold">Delete this role</h2>
        <p className="text-muted mt-2 max-w-2xl leading-relaxed">
          {applications > 0 ? (
            <>
              Most of the time you want <strong>Closed</strong> instead — the
              page stays up for anyone holding a link, applications stop, and
              the candidates are kept. Delete only when the role and its
              applicants should be gone for good.
            </>
          ) : (
            <>
              Nothing has been submitted against this role, so deleting it
              removes only the role itself.
            </>
          )}
        </p>

        <div className="mt-5">
          <DangerZone
            action={remove}
            buttonLabel="Delete role"
            title={`Delete “${job.title}”?`}
            consequences={
              applications > 0
                ? [
                    `${applications} application${applications === 1 ? "" : "s"} will be deleted with it, including candidate contact details and recruiter notes.`,
                    `${applications} CV${applications === 1 ? "" : "s"} will be permanently removed from storage.`,
                    job.status !== "DRAFT"
                      ? `/careers/${job.slug} will start returning 404 for anyone holding the link.`
                      : "This role was never published, so no public link breaks.",
                  ]
                : [
                    "The role and its content will be removed.",
                    job.status !== "DRAFT"
                      ? `/careers/${job.slug} will start returning 404 for anyone holding the link.`
                      : "This role was never published, so no public link breaks.",
                  ]
            }
            confirmPhrase={applications > 0 ? job.title : undefined}
          />
        </div>
      </section>
    </>
  );
}
