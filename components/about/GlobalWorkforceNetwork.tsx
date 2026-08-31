import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import {
  additionalPresence,
  countryCount,
  officesByRegion,
  regionLabels,
  type Region,
} from "@/data/offices";

/**
 * Where we operate — built from the office directory rather than prose, so the
 * numbers on this page can never disagree with the contact page.
 */

const REGIONS: { region: Region; href: string; note: string }[] = [
  {
    region: "asia-pacific",
    href: "/countries/asia-pacific",
    note: "Global headquarters and most of our delivery capacity.",
  },
  {
    region: "europe",
    href: "/countries/europe",
    note: "Twelve markets, five offices, and the compliance that varies between all of them.",
  },
  {
    region: "americas",
    href: "/countries/americas",
    note: "US-led programmes with global delivery capacity behind them.",
  },
];

export default function GlobalWorkforceNetwork() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Where we operate"
          title="Local understanding, global delivery"
          lead={`${countryCount}+ countries, three regions, one point of contact — whether a programme runs in one market or five.`}
          action={{ label: "Every office", href: "/contact#offices" }}
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {REGIONS.map(({ region, href, note }) => {
            const regional = officesByRegion(region);
            const extra = additionalPresence.filter((p) => p.region === region);

            return (
              <li key={region}>
                <Link
                  href={href}
                  className="group rounded-card border-line hover:border-brand/40 hover:shadow-lift flex h-full flex-col border bg-white p-8 transition-all"
                >
                  <h3 className="text-navy group-hover:text-brand flex items-center gap-2 text-xl font-semibold">
                    {regionLabels[region]}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </h3>

                  <p className="text-muted mt-3 flex-1 leading-relaxed">
                    {note}
                  </p>

                  <dl className="border-line mt-6 grid grid-cols-2 gap-4 border-t pt-5">
                    <div>
                      <dd className="stat-lg text-brand font-bold">
                        {regional.length}
                      </dd>
                      <dt className="text-muted mt-1 text-sm">
                        {regional.length === 1 ? "Office" : "Offices"}
                      </dt>
                    </div>

                    <div>
                      <dd className="stat-lg text-navy font-bold">
                        {new Set(regional.map((o) => o.country)).size +
                          extra.length}
                      </dd>
                      <dt className="text-muted mt-1 text-sm">Countries</dt>
                    </div>
                  </dl>

                  <ul className="mt-5 flex flex-wrap gap-1.5">
                    {regional.map((office) => (
                      <li
                        key={office.id}
                        className="rounded-pill bg-surface text-muted px-2.5 py-1 text-xs font-medium"
                      >
                        {office.city}
                      </li>
                    ))}
                  </ul>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
