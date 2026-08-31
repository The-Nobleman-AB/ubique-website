import Link from "next/link";
import { ArrowRight, Building2, Mail, Phone } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import Card from "@/components/ui/Card";
import {
  additionalPresence,
  countryCount,
  headquarters,
  offices,
  officesByRegion,
  regionLabels,
  type Region,
} from "@/data/offices";

/**
 * The regional overview on /countries.
 *
 * Was a 275-line bespoke layout with its own card treatment. Now built from
 * the office directory on the shared components, so the numbers here can't
 * disagree with the contact page or the regional pages.
 */

const REGIONS: {
  region: Region;
  href: string;
  headline: string;
  body: string;
}[] = [
  {
    region: "asia-pacific",
    href: "/countries/asia-pacific",
    headline: "Where most of our delivery capacity sits",
    body: "Global headquarters in Kolkata, delivery centres in Bangalore and Pune, and an office in Ho Chi Minh City. This is the bench most of our European and US work draws on.",
  },
  {
    region: "europe",
    href: "/countries/europe",
    headline: "Twelve markets that only look like one",
    body: "Offices in London, Eching, Copenhagen, Prague and Bratislava. Employment law, contractor status and language requirements change at every border — we work market by market.",
  },
  {
    region: "americas",
    href: "/countries/americas",
    headline: "US-led programmes, global delivery behind them",
    body: "Our Connecticut office places nationally, backed by engineering capacity in India and Europe when scale or budget calls for it.",
  },
];

export default function RegionalPresence() {
  return (
    <>
      {/* ============================================== REGIONS */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Our regional network"
            title="Three regions, one point of contact"
            lead="A programme spanning five countries shouldn't mean five agencies and five contracts. Wherever the work runs, one team owns it."
          />

          <div className="mt-14 flex flex-col gap-6">
            {REGIONS.map(({ region, href, headline, body }) => {
              const regional = officesByRegion(region);
              const extra = additionalPresence.filter(
                (place) => place.region === region,
              );

              return (
                <Link
                  key={region}
                  href={href}
                  className="group rounded-panel border-line hover:border-brand/40 hover:shadow-lift grid gap-8 border bg-white p-8 transition-all md:p-10 lg:grid-cols-12"
                >
                  <div className="lg:col-span-5">
                    <p className="eyebrow text-brand">{regionLabels[region]}</p>

                    <h3 className="display-4 text-navy group-hover:text-brand mt-3 flex items-start gap-2 font-semibold">
                      {headline}
                      <ArrowRight
                        size={18}
                        aria-hidden="true"
                        className="mt-1.5 shrink-0 transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </h3>
                  </div>

                  <div className="lg:col-span-4">
                    <p className="text-muted leading-relaxed">{body}</p>
                  </div>

                  <div className="lg:col-span-3">
                    <ul className="flex flex-col gap-2">
                      {regional.map((office) => (
                        <li
                          key={office.id}
                          className="text-navy flex items-center gap-2 text-sm font-medium"
                        >
                          <Building2
                            size={14}
                            aria-hidden="true"
                            className="text-accent shrink-0"
                          />
                          {office.city}
                          {office.headquarters && (
                            <span className="text-muted text-xs">HQ</span>
                          )}
                        </li>
                      ))}
                    </ul>

                    {extra.length > 0 && (
                      <p className="text-muted border-line mt-4 border-t pt-3 text-sm">
                        + {extra.length} more{" "}
                        {extra.length === 1 ? "market" : "markets"}
                      </p>
                    )}
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ============================================== COUNTRY PAGES */}

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Country guides"
            title="What it actually takes to hire in each market"
            lead="Notice periods, language requirements, contractor status and cost all move between markets. These pages say what we see rather than what sounds good."
            action={{ label: "Every office", href: "/contact#offices" }}
          />

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                name: "India",
                href: "/countries/india",
                note: "Global headquarters and the deepest talent pool we work with. Three-month notice periods change how you plan.",
              },
              {
                name: "United Kingdom",
                href: "/countries/uk",
                note: "Canary Wharf. Financial services dominates, and IR35 status decides how contract roles can be structured.",
              },
              {
                name: "Germany",
                href: "/countries/germany",
                note: "Eching, near Munich. Where the SAP practice does its heaviest work, and where working German is often non-negotiable.",
              },
              {
                name: "United States",
                href: "/countries/usa",
                note: "Norwalk, Connecticut. Rates vary 40% between metros, so national averages are worse than useless.",
              },
            ].map((country) => (
              <li key={country.name}>
                <Card
                  href={country.href}
                  title={country.name}
                  body={country.note}
                  className="bg-white"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================== HQ */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-panel bg-navy grid gap-10 p-10 md:p-14 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow text-accent">Global headquarters</p>

              <h2 className="display-3 mt-4 font-bold text-white">
                {headquarters.city}, {headquarters.country}
              </h2>

              <p className="mt-5 max-w-xl leading-relaxed text-white/70">
                Every programme we run has a line back to here. It&rsquo;s where
                the business started, where most of our delivery capacity sits,
                and where the standards the other {offices.length - 1} offices
                work to are set.
              </p>

              <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
                {headquarters.phone && (
                  <a
                    href={`tel:${headquarters.phone}`}
                    className="inline-flex items-center gap-2 font-medium text-white underline-offset-4 hover:underline"
                  >
                    <Phone
                      size={16}
                      aria-hidden="true"
                      className="text-accent"
                    />
                    {headquarters.phoneDisplay}
                  </a>
                )}

                <a
                  href={`mailto:${headquarters.email}`}
                  className="inline-flex items-center gap-2 text-white/80 underline-offset-4 hover:text-white hover:underline"
                >
                  <Mail size={16} aria-hidden="true" className="text-accent" />
                  {headquarters.email}
                </a>
              </div>
            </div>

            <dl className="rounded-card grid grid-cols-2 gap-px overflow-hidden border border-white/10 bg-white/10 lg:col-span-5">
              <div className="bg-navy px-6 py-6">
                <dd className="stat-lg font-bold text-white">
                  {countryCount}+
                </dd>
                <dt className="mt-2 text-sm text-white/60">Countries</dt>
              </div>
              <div className="bg-navy px-6 py-6">
                <dd className="stat-lg font-bold text-white">
                  {offices.length}
                </dd>
                <dt className="mt-2 text-sm text-white/60">Offices</dt>
              </div>
              <div className="bg-navy px-6 py-6">
                <dd className="stat-lg font-bold text-white">3</dd>
                <dt className="mt-2 text-sm text-white/60">Regions</dt>
              </div>
              <div className="bg-navy px-6 py-6">
                <dd className="stat-lg font-bold text-white">24/5</dd>
                <dt className="mt-2 text-sm text-white/60">Coverage</dt>
              </div>
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
