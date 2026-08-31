import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Download, Mail, MapPin, Phone } from "lucide-react";

import { requireUser } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { Panel, StatusPill, formatDate } from "@/components/admin/ui";
import DangerZone from "@/components/admin/DangerZone";
import {
  addApplicationNote,
  deleteApplication,
  setApplicationStatus,
} from "../../actions";
import { APPLICATION_STATUSES } from "@/lib/application-status";

export const metadata = { title: "Application" };
export const dynamic = "force-dynamic";

export default async function ApplicationPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  await requireUser();

  const { id } = await params;

  const application = await prisma.application.findUnique({
    where: { id },
    include: {
      job: { select: { id: true, title: true, slug: true, location: true } },
      notes: {
        orderBy: { createdAt: "desc" },
        include: { author: { select: { name: true } } },
      },
    },
  });

  if (!application) notFound();

  const setStatus = setApplicationStatus.bind(null, application.id);
  const addNote = addApplicationNote.bind(null, application.id);
  const removeApplication = deleteApplication.bind(null, application.id);

  const fullName = `${application.firstName} ${application.lastName}`;

  return (
    <>
      <Link
        href="/admin/applications"
        className="text-muted hover:text-brand inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Back to applications
      </Link>

      <div className="mt-6 flex flex-wrap items-start justify-between gap-4">
        <div>
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="display-3 text-navy font-bold">{fullName}</h1>
            <StatusPill status={application.status} kind="application" />
          </div>

          <p className="text-muted mt-2">
            Applied for{" "}
            <Link
              href={`/admin/jobs/${application.job.id}`}
              className="text-brand font-medium underline-offset-4 hover:underline"
            >
              {application.job.title}
            </Link>{" "}
            on {formatDate(application.createdAt)} ·{" "}
            <code className="text-xs">{application.reference}</code>
          </p>
        </div>

        {application.cvPath ? (
          <a
            href={`/admin/applications/${application.id}/cv`}
            className="rounded-control bg-navy hover:bg-brand inline-flex items-center gap-2 px-5 py-3 font-semibold text-white transition-colors"
          >
            <Download size={16} aria-hidden="true" />
            Download CV
          </a>
        ) : (
          <p className="rounded-card border-warn/30 bg-warn/5 max-w-xs border px-4 py-3 text-sm leading-relaxed">
            <strong className="text-navy">CV not stored.</strong>{" "}
            <span className="text-muted">
              Blob storage wasn&rsquo;t configured when this arrived — the file
              is on the notification email.
            </span>
          </p>
        )}
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        {/* -------------------------------------------- main */}

        <div className="flex flex-col gap-6 lg:col-span-2">
          <Panel title="Candidate">
            <dl className="divide-line grid divide-y">
              <Row label="Email">
                <a
                  href={`mailto:${application.email}?subject=${encodeURIComponent(
                    `Your application for ${application.job.title} (${application.reference})`,
                  )}`}
                  className="text-brand inline-flex items-center gap-2 underline-offset-4 hover:underline"
                >
                  <Mail size={15} aria-hidden="true" />
                  {application.email}
                </a>
              </Row>

              <Row label="Phone">
                <a
                  href={`tel:${application.phone.replace(/\s/g, "")}`}
                  className="text-brand inline-flex items-center gap-2 underline-offset-4 hover:underline"
                >
                  <Phone size={15} aria-hidden="true" />
                  {application.phone}
                </a>
              </Row>

              <Row label="Based in">
                <span className="text-navy inline-flex items-center gap-2">
                  <MapPin size={15} aria-hidden="true" className="text-muted" />
                  {application.location}
                </span>
              </Row>

              {application.linkedin && (
                <Row label="LinkedIn">
                  <a
                    href={application.linkedin}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-brand break-all underline-offset-4 hover:underline"
                  >
                    {application.linkedin}
                  </a>
                </Row>
              )}

              <Row label="CV">
                <span className="text-navy">
                  {application.cvFilename}{" "}
                  <span className="text-muted text-sm">
                    ({Math.round(application.cvSize / 1024)} KB)
                  </span>
                </span>
              </Row>
            </dl>
          </Panel>

          {application.coverNote && (
            <Panel title="Cover note">
              <p className="text-navy px-6 py-5 leading-relaxed whitespace-pre-wrap">
                {application.coverNote}
              </p>
            </Panel>
          )}

          <Panel title="Notes">
            <form action={addNote} className="border-line border-b p-6">
              <label htmlFor="note" className="sr-only">
                Add a note
              </label>
              <textarea
                id="note"
                name="body"
                rows={3}
                required
                placeholder="Screened — strong S/4HANA background, available in 4 weeks."
                className="rounded-control border-line focus:border-brand text-navy w-full resize-y border bg-white px-4 py-3 transition-colors"
              />
              <button
                type="submit"
                className="rounded-control bg-navy hover:bg-brand mt-3 px-5 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                Add note
              </button>
            </form>

            {application.notes.length === 0 ? (
              <p className="text-muted px-6 py-6 text-sm">No notes yet.</p>
            ) : (
              <ul className="divide-line divide-y">
                {application.notes.map((note) => (
                  <li key={note.id} className="px-6 py-4">
                    <p className="text-navy leading-relaxed whitespace-pre-wrap">
                      {note.body}
                    </p>
                    <p className="text-muted mt-2 text-xs">
                      {note.author?.name ?? "Removed user"} ·{" "}
                      {formatDate(note.createdAt)}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </Panel>
        </div>

        {/* -------------------------------------------- sidebar */}

        <div className="lg:sticky lg:top-24 lg:col-span-1 lg:self-start">
          <Panel title="Status">
            <form action={setStatus} className="p-6">
              <label htmlFor="status" className="sr-only">
                Application status
              </label>

              <select
                id="status"
                name="status"
                defaultValue={application.status}
                className="rounded-control border-line focus:border-brand text-navy w-full cursor-pointer border bg-white px-4 py-3 capitalize transition-colors"
              >
                {APPLICATION_STATUSES.map((value) => (
                  <option key={value} value={value} className="capitalize">
                    {value.toLowerCase()}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="rounded-control bg-accent hover:bg-accent-dark mt-4 w-full py-3 font-semibold text-white transition-colors"
              >
                Update status
              </button>
            </form>
          </Panel>

          <section className="border-line mt-6 border-t pt-6">
            <h2 className="text-navy font-semibold">Delete</h2>
            <p className="text-muted mt-2 text-sm leading-relaxed">
              For duplicates, test submissions, or when a candidate asks to be
              erased — which our privacy policy commits to.
            </p>

            <div className="mt-4">
              <DangerZone
                action={removeApplication}
                buttonLabel="Delete application"
                title={`Delete ${fullName}'s application?`}
                consequences={[
                  "Their contact details, cover note and recruiter notes will be removed.",
                  application.cvPath
                    ? "Their CV will be permanently deleted from storage."
                    : "No CV is stored for this application.",
                  `Reference ${application.reference} will no longer resolve.`,
                ]}
              />
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function Row({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div className="grid gap-1 px-6 py-4 sm:grid-cols-3 sm:gap-4">
      <dt className="text-muted text-sm">{label}</dt>
      <dd className="sm:col-span-2">{children}</dd>
    </div>
  );
}
