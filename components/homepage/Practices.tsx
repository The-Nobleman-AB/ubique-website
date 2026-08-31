import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { practices } from "@/data/practices";

/**
 * Technology practices on the homepage.
 *
 * This is the vocabulary enterprise buyers and candidates actually search for
 * — SAP, Oracle, Salesforce, Dynamics — and it was missing entirely from the
 * rebuild. It's also the one homepage section that deliberately breaks the
 * centred-heading-then-card-grid rhythm every other section follows: the
 * heading sits left, the list runs as a full-width table, and the whole
 * section is dark against the white ones either side.
 */
export default function Practices() {
  return (
    <section className="section-y bg-navy" data-surface="dark">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow text-accent">Technology practices</p>

            <h2 className="display-2 mt-4 font-bold text-white">
              Nobody has a &ldquo;digital transformation&rdquo; problem
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              They have an S/4HANA migration with a fixed date, or a Salesforce
              estate nobody owns. We organise by platform, because that&rsquo;s
              how the work actually arrives.
            </p>
          </div>

          <div className="lg:col-span-5 lg:justify-self-end">
            <Link
              href="/services/technology-practices"
              className="rounded-control inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore all seven practices
              <ArrowRight size={17} aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* A list, not a card grid — the point is the breadth of the estate. */}

        <ul className="mt-16 border-t border-white/10">
          {practices.map((practice, index) => (
            <li key={practice.slug}>
              <Link
                href={`/services/technology-practices#${practice.slug}`}
                className="group grid items-baseline gap-x-8 gap-y-3 border-b border-white/10 py-7 transition-colors hover:bg-white/[0.04] lg:grid-cols-12"
              >
                <span
                  aria-hidden="true"
                  className="font-mono text-sm text-white/30 tabular-nums lg:col-span-1"
                >
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="display-4 group-hover:text-accent font-semibold text-white transition-colors lg:col-span-4">
                  {practice.shortName}
                </span>

                <span className="leading-relaxed text-white/60 lg:col-span-6">
                  {practice.summary}
                </span>

                <span className="hidden justify-end lg:col-span-1 lg:flex">
                  <ArrowRight
                    size={20}
                    aria-hidden="true"
                    className="group-hover:text-accent text-white/30 transition-all duration-200 group-hover:translate-x-1"
                  />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
