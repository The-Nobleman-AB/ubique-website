import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { caseStudies } from "@/data/case-studies";
import { practices } from "@/data/practices";

/**
 * Case studies.
 *
 * Renders nothing until `data/case-studies.ts` has a real, approved entry —
 * see the note in that file. Until then the homepage carries the practices
 * section instead, which is sourced from real data.
 */
export default function CaseStudies() {
  if (caseStudies.length === 0) return null;

  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand">Client work</p>
            <h2 className="display-2 text-navy mt-4 font-bold">
              What this looks like in practice
            </h2>
          </div>
        </div>

        <ul className="mt-14 flex flex-col gap-8">
          {caseStudies.map((study) => (
            <li
              key={study.slug}
              className="rounded-panel border-line bg-surface grid gap-10 border p-8 md:p-12 lg:grid-cols-12"
            >
              <div className="lg:col-span-7">
                <p className="eyebrow text-brand">
                  {study.industry} · {study.region}
                </p>

                <h3 className="display-3 text-navy mt-4 font-bold">
                  {study.client}
                </h3>

                <p className="text-navy mt-5 text-lg leading-relaxed">
                  {study.challenge}
                </p>

                <p className="text-muted mt-4 leading-relaxed">
                  {study.approach}
                </p>

                <ul className="mt-7 flex flex-wrap gap-2">
                  {study.practiceSlugs.map((slug) => {
                    const practice = practices.find((p) => p.slug === slug);
                    if (!practice) return null;

                    return (
                      <li key={slug}>
                        <Link
                          href={`/services/technology-practices#${slug}`}
                          className="rounded-pill bg-brand-tint text-brand hover:bg-brand inline-block px-3 py-1.5 text-sm font-medium hover:text-white"
                        >
                          {practice.shortName}
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </div>

              <div className="lg:col-span-5">
                <dl className="rounded-card border-line bg-line grid grid-cols-2 gap-px overflow-hidden border">
                  {study.results.map((result) => (
                    <div key={result.label} className="bg-white px-5 py-6">
                      <dd className="stat-lg text-brand font-bold">
                        {result.value}
                      </dd>
                      <dt className="text-muted mt-2 text-sm leading-snug">
                        {result.label}
                      </dt>
                    </div>
                  ))}
                </dl>

                {study.quote && (
                  <blockquote className="rounded-card bg-navy mt-6 p-7 text-white">
                    <p className="leading-relaxed">
                      &ldquo;{study.quote.text}&rdquo;
                    </p>
                    <footer className="mt-5 text-sm text-white/60">
                      <span className="font-semibold text-white">
                        {study.quote.author}
                      </span>
                      <br />
                      {study.quote.role}
                    </footer>
                  </blockquote>
                )}
              </div>
            </li>
          ))}
        </ul>

        <Link
          href="/contact"
          className="text-brand mt-10 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
        >
          Talk to us about a similar programme
          <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
