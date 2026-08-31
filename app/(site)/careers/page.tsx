import type { Metadata } from "next";

import CareersHero from "@/components/careers/CareersHero";
import WhyJoinUbique from "@/components/careers/WhyJoinUbique";
import HiringProcess from "@/components/careers/HiringProcess";
import JobExplorer from "@/components/careers/JobExplorer";
import CareersCTA from "@/components/careers/CareersCTA";

import { getPublishedJobs } from "@/lib/jobs";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Careers — Open Roles at Ubique Systems",
  description:
    "Browse current openings across SAP, Oracle, Salesforce, cloud, data and engineering — in India, the UK, Germany, the US and beyond.",
  alternates: { canonical: absoluteUrl("/careers") },
};

/* Roles change from the admin, not from a deploy. Revalidate on a short
   window, and the admin also revalidates this path on every save. */
export const revalidate = 300;

export default async function CareersPage() {
  const jobs = await getPublishedJobs();

  return (
    <>
      <CareersHero openRoles={jobs.length} />
      <WhyJoinUbique />
      <JobExplorer jobs={jobs} />
      <HiringProcess />
      <CareersCTA />
    </>
  );
}
