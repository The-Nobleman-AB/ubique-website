import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { practices } from "@/data/practices";

/**
 * Technology practices on the services page.
 *
 * Sourced from data/practices.ts rather than a second hardcoded list, so the
 * practices page, the mega menu, the homepage and this section can never drift
 * apart. Categorical colours come from the `cat-*` tokens — kept separate from
 * the brand palette so they read as "different practice", not "different brand".
 */

const accents: Record<string, string> = {
  sap: "from-brand to-cat-sky",
  oracle: "from-danger to-cat-amber",
  "microsoft-dynamics": "from-cat-sky to-brand-light",
  salesforce: "from-cat-teal to-accent",
  "cloud-infrastructure": "from-accent to-cat-teal",
  "data-ai": "from-cat-violet to-brand",
  "development-integration": "from-cat-amber to-warn",
};

/* The first two practices get the wide cells — SAP is the largest practice and
   Oracle the second, so the layout carries information rather than decoration. */
const spans: Record<number, string> = {
  0: "lg:col-span-7",
  1: "lg:col-span-5",
  2: "lg:col-span-5",
  3: "lg:col-span-7",
};

export default function TechnologyEcosystem() {
  return (
    <section id="technology" className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand">Technology ecosystem</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              Seven practices, one bench
            </h2>

            <p className="text-muted mt-5 text-lg leading-relaxed">
              Most programmes need two or three of these at once. Because they
              sit under one roof, we can staff the whole shape of the work
              rather than the part that fits a single specialism.
            </p>
          </div>

          <Link
            href="/services/technology-practices"
            className="text-brand inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
          >
            Explore each practice
            <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>

        <ul className="mt-14 grid gap-6 lg:grid-cols-12">
          {practices.map((practice, index) => (
            <li
              key={practice.slug}
              className={`${spans[index] ?? "lg:col-span-4"}`}
            >
              <Link
                href={`/services/technology-practices#${practice.slug}`}
                className="group rounded-card border-line hover:border-brand/40 hover:shadow-lift flex h-full flex-col overflow-hidden border bg-white transition-all"
              >
                <span
                  aria-hidden="true"
                  className={`block h-1.5 bg-gradient-to-r ${
                    accents[practice.slug] ?? "from-brand to-brand-light"
                  }`}
                />

                <span className="flex flex-1 flex-col p-7">
                  <span className="text-navy group-hover:text-brand flex items-center gap-2 text-lg font-semibold">
                    {practice.shortName}
                    <ArrowRight
                      size={15}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>

                  <span className="text-muted mt-3 flex-1 leading-relaxed">
                    {practice.summary}
                  </span>

                  <span className="mt-6 flex flex-wrap gap-1.5">
                    {practice.capabilities.slice(0, 5).map((capability) => (
                      <span
                        key={capability}
                        className="rounded-pill bg-surface text-muted px-2.5 py-1 text-xs font-medium"
                      >
                        {capability}
                      </span>
                    ))}
                  </span>
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
