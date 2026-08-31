import Link from "next/link";
import { ArrowLeft } from "lucide-react";

import { requireUser } from "@/lib/auth";
import JobForm from "@/components/admin/JobForm";
import { createJob } from "../../actions";

export const metadata = { title: "Post a role" };

export default async function NewJobPage() {
  await requireUser();

  return (
    <>
      <Link
        href="/admin/jobs"
        className="text-muted hover:text-brand inline-flex items-center gap-2 text-sm font-medium transition-colors"
      >
        <ArrowLeft size={15} aria-hidden="true" />
        Back to roles
      </Link>

      <h1 className="display-3 text-navy mt-6 font-bold">Post a role</h1>
      <p className="text-muted mt-2">
        Save it as a draft first if you want to review the live page before
        candidates can see it.
      </p>

      <JobForm action={createJob} submitLabel="Save role" />
    </>
  );
}
