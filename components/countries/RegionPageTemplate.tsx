import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/ui/CTABand";
import Card from "@/components/ui/Card";

import { getPublishedJobs } from "@/lib/jobs";
import { practices } from "@/data/practices";
import {
  additionalPresence,
  officesByRegion,
  type Office,
  type Region,
} from "@/data/offices";

/**
 * Regional page — the same shape as CountryPageTemplate, one level up.
 *
 * APAC, Europe and Americas used to be three bespoke layouts with three
 * different backgrounds. They're one template now, so a visitor moving between
 * regions is reading the same page with different facts in it.
 */

export interface RegionStat {
  value: string;
  label: string;
}

export interface RegionCapability {
  title: string;
  description: string;
}

export interface RegionCountry {
  name: string;
  href?: string;
  note: string;
}

export interface RegionPageTemplateProps {
  region: Region;
  name: string;
  eyebrow: string;
  headline: string;
  intro: string;
  stats: RegionStat[];
  capabilities: RegionCapability[];
  /** Countries we have a dedicated page for, plus context on the rest. */
  countries: RegionCountry[];
  practiceSlugs: string[];
  marketNotes: { title: string; body: string }[];
}

export default async function RegionPageTemplate({
  region,
  name,
  eyebrow,
  headline,
  intro,
  stats,
  capabilities,
  countries,
  practiceSlugs,
  marketNotes,
}: RegionPageTemplateProps) {
  const offices = officesByRegion(region);
  const alsoPresent = additionalPresence.filter((p) => p.region === region);

  const regionalPractices = practices.filter((practice) =>
    practiceSlugs.includes(practice.slug),
  );

  const officeCountries = new Set(offices.map((office) => office.country));

  const published = await getPublishedJobs();

  const regionalJobs = published.filter((job) =>
    [...officeCountries].some((country) =>
      job.location.toLowerCase().includes(country.toLowerCase()),
    ),
  );

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={headline}
        intro={intro}
        breadcrumbs={[
          { name: "Global Presence", href: "/countries" },
          { name },
        ]}
        actions={[
          { label: `Talk to the ${name} team`, href: "/contact" },
          { label: "All offices", href: "/contact#offices", variant: "ghost" },
        ]}
        stats={stats}
        aside={
          offices.length > 0 ? (
            <div className="rounded-panel border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="eyebrow text-white/50">
                {offices.length} office{offices.length === 1 ? "" : "s"} in the
                region
              </p>

              <ul className="mt-6 flex flex-col gap-5">
                {offices.map((office) => (
                  <li key={office.id}>
                    <OfficeLine office={office} />
                  </li>
                ))}
              </ul>

              {alsoPresent.length > 0 && (
                <p className="mt-6 border-t border-white/10 pt-5 text-sm leading-relaxed text-white/60">
                  Also operating in{" "}
                  {alsoPresent.map((p) => p.country).join(", ")}.
                </p>
              )}
            </div>
          ) : undefined
        }
      />

      {/* ================================================== COUNTRIES */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Where we operate"
            title={`${name} country by country`}
            lead="Hiring conditions, notice periods and compliance differ enough between these markets that treating the region as one place gets programmes into trouble."
          />

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {countries.map((country) => (
              <li key={country.name}>
                <Card
                  title={country.name}
                  body={country.note}
                  href={country.href}
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================== CAPABILITIES */}

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="What we do here"
            title={`How we support organisations across ${name}`}
          />

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <li key={capability.title}>
                <Card
                  title={capability.title}
                  body={capability.description}
                  className="bg-white"
                />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================== PRACTICES */}

      {regionalPractices.length > 0 && (
        <section className="section-y bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Technology practices"
              title="Strongest demand in this region"
              action={{
                label: "All practices",
                href: "/services/technology-practices",
              }}
            />

            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {regionalPractices.map((practice) => (
                <li key={practice.slug}>
                  <Card
                    href={`/services/technology-practices#${practice.slug}`}
                    title={practice.shortName}
                    body={practice.summary}
                    tags={practice.capabilities.slice(0, 4)}
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ================================================== MARKET NOTES */}

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow={`The ${name} market`}
                title="What we see on the ground"
              />
            </div>

            <div className="lg:col-span-8">
              <dl className="divide-line border-line divide-y border-y">
                {marketNotes.map((note) => (
                  <div
                    key={note.title}
                    className="grid gap-3 py-7 md:grid-cols-3 md:gap-8"
                  >
                    <dt className="text-navy font-semibold">{note.title}</dt>
                    <dd className="text-muted leading-relaxed md:col-span-2">
                      {note.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== OPEN ROLES */}

      {regionalJobs.length > 0 && (
        <section className="section-y bg-white">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Careers"
              title={`Open roles across ${name}`}
              action={{ label: "All open roles", href: "/careers" }}
            />

            <ul className="mt-12 flex flex-col gap-3">
              {regionalJobs.map((job) => (
                <li key={job.id}>
                  <Link
                    href={`/careers/${job.slug}`}
                    className="group rounded-card border-line hover:border-brand/40 hover:shadow-card flex flex-wrap items-center justify-between gap-4 border bg-white p-6 transition-all"
                  >
                    <div>
                      <h3 className="text-navy group-hover:text-brand font-semibold">
                        {job.title}
                      </h3>
                      <p className="text-muted mt-1 text-sm">
                        {job.location} · {job.workplace} · {job.experience}
                      </p>
                    </div>

                    <span className="text-brand inline-flex items-center gap-2 text-sm font-semibold">
                      View role
                      <ArrowRight
                        size={15}
                        aria-hidden="true"
                        className="transition-transform duration-200 group-hover:translate-x-1"
                      />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      <CTABand
        title={`Hiring across ${name}?`}
        body="Tell us the roles, the markets and the timeline. We'll come back with a resourcing plan and an honest read on what each country will take."
        actions={[
          { label: "Start a conversation", href: "/contact" },
          {
            label: "See all offices",
            href: "/contact#offices",
            variant: "ghost",
          },
        ]}
      />
    </>
  );
}

/* ==================================================================== */

function OfficeLine({ office }: { office: Office }) {
  return (
    <div>
      <p className="flex flex-wrap items-center gap-2 font-semibold text-white">
        <Building2 size={15} aria-hidden="true" className="text-accent" />
        {office.city}
        <span className="font-normal text-white/50">{office.country}</span>
        {office.headquarters && (
          <span className="rounded-pill bg-accent/15 text-accent px-2 py-0.5 text-xs font-medium">
            HQ
          </span>
        )}
      </p>

      <div className="mt-2 flex flex-wrap gap-x-5 gap-y-1 pl-6 text-sm text-white/70">
        {office.phone && (
          <a
            href={`tel:${office.phone}`}
            className="inline-flex items-center gap-1.5 underline-offset-4 hover:text-white hover:underline"
          >
            <Phone size={13} aria-hidden="true" />
            {office.phoneDisplay}
          </a>
        )}

        <a
          href={`mailto:${office.email}`}
          className="inline-flex items-center gap-1.5 underline-offset-4 hover:text-white hover:underline"
        >
          <Mail size={13} aria-hidden="true" />
          {office.email}
        </a>
      </div>
    </div>
  );
}
