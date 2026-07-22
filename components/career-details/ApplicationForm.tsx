"use client";

import { Job } from "@/data/jobs";

import ApplicationWizard from "./application/ApplicationWizard";

interface ApplicationFormProps {
  job: Job;
}

export default function ApplicationForm({
  job,
}: ApplicationFormProps) {

  return (
    <section
      id="application-form"
      className="
      py-32
      bg-white
      "
    >

      <ApplicationWizard
        job={job}
      />

    </section>
  );

}