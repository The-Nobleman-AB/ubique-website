import Link from "next/link";
import { AlertTriangle } from "lucide-react";

export interface LegalSection {
  id: string;
  heading: string;
  /** Paragraphs and lists, in order. A string is a paragraph. */
  content: (string | string[])[];
}

export interface LegalPageProps {
  title: string;
  intro: string;
  lastUpdated: string;
  sections: LegalSection[];
  /**
   * Set while the document is awaiting sign-off from counsel. Renders a
   * visible notice — better than publishing an unreviewed policy silently.
   */
  awaitingReview?: boolean;
}

export default function LegalPage({
  title,
  intro,
  lastUpdated,
  sections,
  awaitingReview,
}: LegalPageProps) {
  return (
    <>
      <section className="bg-navy pt-20" data-surface="dark">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-20">
          <nav aria-label="Breadcrumb" className="mb-7">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/" className="hover:text-white">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80">Legal</li>
            </ol>
          </nav>

          <h1 className="display-2 font-bold text-white">{title}</h1>

          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-white/70">
            {intro}
          </p>

          <p className="mt-7 text-sm text-white/50">
            Last updated{" "}
            <time dateTime={lastUpdated}>
              {new Date(lastUpdated).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
          </p>
        </div>
      </section>

      <section className="section-y bg-white">
        <div className="mx-auto max-w-4xl px-6">
          {awaitingReview && (
            <div className="rounded-card border-warn/30 bg-warn/5 mb-12 flex items-start gap-4 border p-6">
              <AlertTriangle
                size={22}
                aria-hidden="true"
                className="text-warn mt-0.5 shrink-0"
              />
              <div>
                <h2 className="text-navy font-semibold">
                  Awaiting legal review
                </h2>
                <p className="text-muted mt-2 text-sm leading-relaxed">
                  This document describes how the website actually works, but it
                  has not yet been reviewed by qualified counsel. It should be
                  checked against Ubique Systems&rsquo; wider data processing
                  before the site goes live.
                </p>
              </div>
            </div>
          )}

          <div className="grid gap-12 lg:grid-cols-12">
            {/* --- contents --- */}

            <nav aria-label="On this page" className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <h2 className="eyebrow text-muted">Contents</h2>

                <ol className="mt-4 flex flex-col gap-2">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="text-muted hover:text-brand flex gap-3 text-sm leading-snug transition-colors"
                      >
                        <span className="text-muted/60 tabular-nums">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        {section.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </nav>

            {/* --- body --- */}

            <div className="lg:col-span-8">
              <div className="flex flex-col gap-12">
                {sections.map((section, index) => (
                  <section
                    key={section.id}
                    id={section.id}
                    aria-labelledby={`${section.id}-heading`}
                  >
                    <p className="eyebrow text-brand">
                      {String(index + 1).padStart(2, "0")}
                    </p>

                    <h2
                      id={`${section.id}-heading`}
                      className="display-4 text-navy mt-3 font-bold"
                    >
                      {section.heading}
                    </h2>

                    <div className="mt-5 flex flex-col gap-4">
                      {section.content.map((block, blockIndex) =>
                        Array.isArray(block) ? (
                          <ul
                            key={blockIndex}
                            className="text-muted marker:text-line flex list-disc flex-col gap-2 pl-5 leading-relaxed"
                          >
                            {block.map((item) => (
                              <li key={item}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p
                            key={blockIndex}
                            className="text-muted leading-relaxed"
                          >
                            {block}
                          </p>
                        ),
                      )}
                    </div>
                  </section>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
