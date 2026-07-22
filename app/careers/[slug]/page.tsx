import { notFound } from "next/navigation";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import JobHero from "@/components/career-details/JobHero";
import JobOverview from "@/components/career-details/JobOverview";
import Responsibilities from "@/components/career-details/Responsibilities";
import TechnologyStack from "@/components/career-details/TechnologyStack";
import Requirements from "@/components/career-details/Requirements";
import WhatYouGain from "@/components/career-details/WhatYouGain";
import ApplicationForm from "@/components/career-details/ApplicationForm";

import { jobs } from "@/data/jobs";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function JobDetailsPage({
  params,
}: PageProps) {
  const { slug } = await params;

  const job = jobs.find(
    (job) => job.id === slug
  );

  if (!job) {
    notFound();
  }

  return (
    <>
      <Header />

      <main>
        <JobHero job={job} />

	<JobOverview job={job} />

  	<Responsibilities job={job} />

  	<TechnologyStack job={job} />

  	<Requirements job={job} />

	<WhatYouGain job={job} />

	<ApplicationForm job={job} />
      </main>

      <Footer />
    </>
  );
}