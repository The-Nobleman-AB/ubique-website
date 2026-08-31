import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { practices } from "@/data/practices";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Technology Practices — SAP, Oracle, Salesforce, Dynamics, Cloud & Data",
  description:
    "Ubique Systems' technology practices: SAP, Oracle, Microsoft Dynamics 365, Salesforce, Cloud & Infrastructure, Data & AI, and Development & Integration. The platforms we resource and consult on.",
  alternates: { canonical: absoluteUrl("/services/technology-practices") },
  openGraph: {
    title: "Technology Practices | Ubique Systems",
    description:
      "The enterprise platforms we resource and consult on — SAP, Oracle, Dynamics 365, Salesforce, cloud, data and integration.",
    url: absoluteUrl("/services/technology-practices"),
  },
};

export default function TechnologyPracticesPage() {
  return (
    <>
      {/* ================================================== HERO */}

      <section
        className="bg-navy relative overflow-hidden pt-20"
        data-surface="dark"
      >
        <div
          aria-hidden="true"
          className="bg-brand/20 pointer-events-none absolute -top-32 -right-32 h-[560px] w-[560px] rounded-full blur-[170px]"
        />

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80">Technology Practices</li>
            </ol>
          </nav>

          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-7">
              <p className="eyebrow text-accent">Technology practices</p>

              <h1 className="display-1 mt-5 font-bold text-white">
                We organise by platform, because that&rsquo;s how the work
                arrives
              </h1>

              <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/70">
                Nobody has a &ldquo;digital transformation&rdquo; problem. They
                have an S/4HANA migration with a fixed date, a Salesforce estate
                nobody owns, or a data platform that can&rsquo;t keep up. Each
                practice below is a standing team of specialists in one of
                those.
              </p>
            </div>

            {/* --- jump list --- */}

            <nav aria-label="Practices" className="lg:col-span-5">
              <p className="eyebrow text-white/50">Jump to</p>

              <ul className="mt-5 flex flex-wrap gap-2">
                {practices.map((practice) => (
                  <li key={practice.slug}>
                    <a
                      href={`#${practice.slug}`}
                      className="rounded-pill hover:border-accent/50 inline-block border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                    >
                      {practice.shortName}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </section>

      {/* ================================================== PRACTICES */}

      {practices.map((practice, index) => (
        <section
          key={practice.slug}
          id={practice.slug}
          className={
            index % 2 === 0 ? "section-y bg-white" : "section-y bg-surface"
          }
        >
          <div className="mx-auto max-w-7xl px-6">
            <div className="grid gap-12 lg:grid-cols-12">
              {/* --- intro --- */}

              <div className="lg:col-span-5">
                <p className="eyebrow text-brand">
                  Practice {String(index + 1).padStart(2, "0")}
                </p>

                <h2 className="display-3 text-navy mt-4 font-bold">
                  {practice.name}
                </h2>

                <p className="text-muted mt-5 text-lg leading-relaxed">
                  {practice.description}
                </p>

                <Link
                  href="/contact"
                  className="text-brand mt-7 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
                >
                  Talk to the {practice.shortName} team
                  <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </div>

              {/* --- detail --- */}

              <div className="grid gap-8 sm:grid-cols-2 lg:col-span-7">
                <div>
                  <h3 className="eyebrow text-muted">Capabilities</h3>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {practice.capabilities.map((capability) => (
                      <li
                        key={capability}
                        className="text-navy flex items-start gap-2.5"
                      >
                        <Check
                          size={17}
                          aria-hidden="true"
                          className="text-accent mt-0.5 shrink-0"
                        />
                        {capability}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="eyebrow text-muted">Roles we place</h3>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {practice.roles.map((role) => (
                      <li
                        key={role}
                        className="rounded-control border-line text-navy border bg-white px-4 py-2.5 text-sm font-medium"
                      >
                        {role}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* ================================================== CTA */}

      <section className="bg-navy" data-surface="dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="display-3 font-bold text-white">
                Not sure which practice you need?
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/70">
                Most real programmes cut across two or three. Describe what
                you&rsquo;re trying to deliver and we&rsquo;ll tell you what the
                team should look like.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Link
                href="/contact"
                className="rounded-control bg-accent hover:bg-accent-dark inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white transition-colors"
              >
                Start a conversation
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                href="/careers"
                className="rounded-control inline-flex items-center border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                Browse roles
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
