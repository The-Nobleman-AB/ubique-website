import Link from "next/link";
import { Building2, Clock, Mail, MapPin, Phone } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import {
  additionalPresence,
  countryCount,
  offices,
  officesByRegion,
  regionLabels,
  type Office,
  type Region,
} from "@/data/offices";

/**
 * The office directory.
 *
 * The footer's "All 15+ office locations" used to land on a vague map section.
 * This is the actual answer to that link: every office with its full address,
 * its own phone number, its regional inbox, the local time, and a maps link —
 * grouped by region, plus the countries we operate in without a fixed address.
 */

const REGION_ORDER: Region[] = ["asia-pacific", "europe", "americas"];

const REGION_HREF: Record<Region, string> = {
  "asia-pacific": "/countries/asia-pacific",
  europe: "/countries/europe",
  americas: "/countries/americas",
};

/** Server-rendered local time. Accurate to the minute the page was built. */
function localTime(timezone: string): string {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: timezone,
    }).format(new Date());
  } catch {
    return "";
  }
}

export default function GlobalPresence() {
  return (
    <section id="offices" className="section-y bg-surface scroll-mt-24">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Our offices"
          title={`Every office, and how to reach it`}
          lead={`We operate in ${countryCount}+ countries. These ${offices.length} have a permanent office with its own team and its own number — call the one nearest the work, not a central switchboard.`}
        />

        <div className="mt-14 flex flex-col gap-14">
          {REGION_ORDER.map((region) => {
            const regional = officesByRegion(region);
            if (regional.length === 0) return null;

            return (
              <div key={region}>
                <div className="border-line flex flex-wrap items-baseline justify-between gap-4 border-b pb-4">
                  <h3 className="display-4 text-navy font-bold">
                    {regionLabels[region]}
                  </h3>

                  <Link
                    href={REGION_HREF[region]}
                    className="text-brand text-sm font-semibold underline-offset-4 hover:underline"
                  >
                    About {regionLabels[region]} →
                  </Link>
                </div>

                <ul className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {regional.map((office) => (
                    <li key={office.id}>
                      <OfficeCard office={office} />
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}

          {/* ------------------------------------------ no fixed address */}

          {additionalPresence.length > 0 && (
            <div>
              <div className="border-line border-b pb-4">
                <h3 className="display-4 text-navy font-bold">
                  Also operating in
                </h3>
              </div>

              <p className="text-muted mt-6 max-w-3xl leading-relaxed">
                We place and deliver in these markets without a permanent
                office. Enquiries route to the nearest regional team.
              </p>

              <ul className="mt-6 flex flex-wrap gap-2">
                {additionalPresence.map((place) => (
                  <li
                    key={place.country}
                    className="rounded-pill border-line text-navy border bg-white px-4 py-2 text-sm font-medium"
                  >
                    {place.country}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

/* ==================================================================== */

function OfficeCard({ office }: { office: Office }) {
  const mapQuery = encodeURIComponent(
    [...office.address, office.city, office.postcode, office.country].join(
      ", ",
    ),
  );

  const time = localTime(office.timezone);

  return (
    <div className="rounded-card border-line hover:shadow-card flex h-full flex-col border bg-white p-7 transition-shadow">
      <div className="flex flex-wrap items-center gap-2">
        <Building2 size={17} aria-hidden="true" className="text-accent" />

        <h4 className="text-navy text-lg font-semibold">{office.city}</h4>

        {office.headquarters && (
          <span className="rounded-pill bg-accent-tint text-accent-dark px-2 py-0.5 text-xs font-semibold">
            Headquarters
          </span>
        )}
      </div>

      <p className="text-muted mt-1 text-sm">{office.country}</p>

      <address className="mt-5 flex flex-1 flex-col gap-3 text-sm not-italic">
        <span className="text-muted flex items-start gap-2.5">
          <MapPin size={15} aria-hidden="true" className="mt-0.5 shrink-0" />
          <span>
            {office.address.map((line) => (
              <span key={line} className="block">
                {line}
              </span>
            ))}
            <span className="block">{office.postcode}</span>
          </span>
        </span>

        {office.phone && (
          <a
            href={`tel:${office.phone}`}
            className="text-navy hover:text-brand flex items-center gap-2.5 font-medium underline-offset-4 hover:underline"
          >
            <Phone
              size={15}
              aria-hidden="true"
              className="text-muted shrink-0"
            />
            {office.phoneDisplay}
          </a>
        )}

        <a
          href={`mailto:${office.email}`}
          className="text-navy hover:text-brand flex items-center gap-2.5 underline-offset-4 hover:underline"
        >
          <Mail size={15} aria-hidden="true" className="text-muted shrink-0" />
          {office.email}
        </a>

        {time && (
          <span className="text-muted flex items-center gap-2.5">
            <Clock size={15} aria-hidden="true" className="shrink-0" />
            {time} local
          </span>
        )}
      </address>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
        target="_blank"
        rel="noreferrer noopener"
        className="border-line text-brand mt-5 border-t pt-4 text-sm font-semibold underline-offset-4 hover:underline"
      >
        Open in Maps →
      </a>
    </div>
  );
}
