import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JobHero from "@/components/career-details/JobHero";
import JobOverview from "@/components/career-details/JobOverview";
import Responsibilities from "@/components/career-details/Responsibilities";
import TechnologyStack from "@/components/career-details/TechnologyStack";
import Requirements from "@/components/career-details/Requirements";
import WhatYouGain from "@/components/career-details/WhatYouGain";
import ApplicationForm from "@/components/career-details/ApplicationForm";
import JobPostingSchema from "@/components/seo/JobPostingSchema";

import { getJobBySlug, getPublishedSlugs } from "@/lib/jobs";
import { absoluteUrl } from "@/lib/site";

type PageProps = { params: Promise<{ slug: string }> };

/* Roles are edited in the admin, so pages refresh on a window as well as
   on-demand when a role is saved. */
export const revalidate = 300;
export const dynamicParams = true;

export async function generateStaticParams() {
  const slugs = await getPublishedSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) {
    return { title: "Role not found", robots: { index: false, follow: true } };
  }

  const title = `${job.title} — ${job.location}`;

  return {
    title,
    description: `${job.description} ${job.employmentType}, ${job.workplace}, ${job.experience} experience. Apply through Ubique Systems.`,
    alternates: { canonical: absoluteUrl(`/careers/${job.slug}`) },
    /* A closed role keeps its page for anyone holding a link, but shouldn't
       compete in search with roles you can actually apply for. */
    robots:
      job.status === "CLOSED"
        ? { index: false, follow: true }
        : { index: true, follow: true },
    openGraph: {
      type: "article",
      title: `${title} | Ubique Systems`,
      description: job.description,
      url: absoluteUrl(`/careers/${job.slug}`),
    },
  };
}

export default async function JobDetailsPage({ params }: PageProps) {
  const { slug } = await params;
  const job = await getJobBySlug(slug);

  if (!job) notFound();

  return (
    <>
      {job.status === "OPEN" && <JobPostingSchema job={job} />}

      <JobHero job={job} />
      <JobOverview job={job} />
      <Responsibilities job={job} />
      <TechnologyStack job={job} />
      <Requirements job={job} />
      <WhatYouGain job={job} />

      {job.status === "OPEN" ? <ApplicationForm job={job} /> : <ClosedNotice />}
    </>
  );
}

function ClosedNotice() {
  return (
    <section id="application-form" className="section-y bg-surface">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <h2 className="display-3 text-navy font-bold">This role has closed</h2>
        <p className="text-muted mt-5 text-lg leading-relaxed">
          We&rsquo;re no longer accepting applications for this position — but
          we place people in comparable roles regularly.
        </p>
        <a
          href="/careers"
          className="rounded-control bg-navy hover:bg-brand mt-8 inline-block px-6 py-3.5 font-semibold text-white transition-colors"
        >
          See what&rsquo;s open now
        </a>
      </div>
    </section>
  );
}
