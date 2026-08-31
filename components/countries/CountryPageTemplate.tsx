import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Clock,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import { getPublishedJobs } from "@/lib/jobs";
import { practices } from "@/data/practices";
import { officesByCountry, type Office } from "@/data/offices";
import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/ui/CTABand";
import Card from "@/components/ui/Card";

export interface CountryStat {
  value: string;
  label: string;
}

export interface CountryCapability {
  title: string;
  description: string;
}

export interface CountryPageTemplateProps {
  /** ISO 3166-1 alpha-2 — used to pull the real offices from the directory. */
  countryCode: string;
  country: string;
  eyebrow: string;
  headline: string;
  intro: string;
  stats: CountryStat[];
  capabilities: CountryCapability[];
  /** Practice slugs that are strongest in this market. */
  practiceSlugs: string[];
  /** Why clients in this market work with Ubique. */
  marketNotes: { title: string; body: string }[];
  /** Region page this country rolls up into. */
  region: { name: string; href: string };
}

export default async function CountryPageTemplate({
  countryCode,
  country,
  eyebrow,
  headline,
  intro,
  stats,
  capabilities,
  practiceSlugs,
  marketNotes,
  region,
}: CountryPageTemplateProps) {
  const localOffices = officesByCountry(countryCode);

  const localPractices = practices.filter((practice) =>
    practiceSlugs.includes(practice.slug),
  );

  const published = await getPublishedJobs();

  const localJobs = published.filter((job) =>
    job.location.toLowerCase().includes(country.toLowerCase()),
  );

  return (
    <>
      <PageHero
        eyebrow={eyebrow}
        title={headline}
        intro={intro}
        breadcrumbs={[
          { name: "Global Presence", href: "/countries" },
          { name: region.name, href: region.href },
          { name: country },
        ]}
        actions={[
          { label: `Talk to the ${country} team`, href: "/contact" },
          { label: "See open roles", href: "/careers", variant: "ghost" },
        ]}
        stats={stats}
        aside={
          localOffices.length > 0 ? (
            <div className="rounded-panel border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
              <p className="eyebrow text-white/50">
                {localOffices.length > 1 ? "Our offices" : "Our office"}
              </p>

              <div className="mt-6 flex flex-col gap-7">
                {localOffices.map((office) => (
                  <OfficeBlock key={office.id} office={office} />
                ))}
              </div>
            </div>
          ) : undefined
        }
      />

      {/* ================================================== CAPABILITIES */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="What we do here"
            title={`How we support organisations in ${country}`}
          />

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {capabilities.map((capability) => (
              <li key={capability.title}>
                <Card title={capability.title} body={capability.description} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================== PRACTICES */}

      {localPractices.length > 0 && (
        <section className="section-y bg-surface">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Technology practices"
              title="Strongest demand in this market"
              action={{
                label: "All practices",
                href: "/services/technology-practices",
              }}
            />

            <ul className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {localPractices.map((practice) => (
                <li key={practice.slug}>
                  <Card
                    href={`/services/technology-practices#${practice.slug}`}
                    title={practice.shortName}
                    body={practice.summary}
                    tags={practice.capabilities.slice(0, 4)}
                    className="bg-white"
                  />
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* ================================================== MARKET NOTES */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow={`The ${country} market`}
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

      {localJobs.length > 0 && (
        <section className="section-y bg-surface">
          <div className="mx-auto max-w-7xl px-6">
            <SectionHeader
              eyebrow="Careers"
              title={`Open roles in ${country}`}
              action={{ label: "All open roles", href: "/careers" }}
            />

            <ul className="mt-12 flex flex-col gap-3">
              {localJobs.map((job) => (
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
                        {job.department} · {job.workplace} · {job.experience}
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
        title={`Hiring in ${country}?`}
        body={`Tell us the role, the timeline and the constraints. We'll come back with a shortlist and an honest view of the market.`}
        actions={[
          { label: "Start a conversation", href: "/contact" },
          ...(localOffices[0]?.phone
            ? [
                {
                  label: localOffices[0].phoneDisplay!,
                  href: `tel:${localOffices[0].phone}`,
                  variant: "ghost" as const,
                },
              ]
            : []),
        ]}
      />
    </>
  );
}
/* ==================================================================== */

function OfficeBlock({ office }: { office: Office }) {
  const mapQuery = encodeURIComponent(
    [...office.address, office.city, office.postcode, office.country].join(
      ", ",
    ),
  );

  return (
    <div>
      <p className="flex items-center gap-2 font-semibold text-white">
        <Building2 size={16} aria-hidden="true" className="text-accent" />
        {office.city}
        {office.headquarters && (
          <span className="rounded-pill bg-accent/15 text-accent px-2 py-0.5 text-xs font-medium">
            Headquarters
          </span>
        )}
      </p>

      <address className="mt-3 flex flex-col gap-2.5 text-sm text-white/70 not-italic">
        <span className="flex items-start gap-2.5">
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
            className="flex items-center gap-2.5 underline-offset-4 hover:text-white hover:underline"
          >
            <Phone size={15} aria-hidden="true" className="shrink-0" />
            {office.phoneDisplay}
          </a>
        )}

        <a
          href={`mailto:${office.email}`}
          className="flex items-center gap-2.5 underline-offset-4 hover:text-white hover:underline"
        >
          <Mail size={15} aria-hidden="true" className="shrink-0" />
          {office.email}
        </a>

        <span className="flex items-center gap-2.5 text-white/50">
          <Clock size={15} aria-hidden="true" className="shrink-0" />
          {office.timezone.replace(/_/g, " ")}
        </span>
      </address>

      <a
        href={`https://www.google.com/maps/search/?api=1&query=${mapQuery}`}
        target="_blank"
        rel="noreferrer noopener"
        className="text-accent mt-3 inline-block text-sm font-semibold underline-offset-4 hover:underline"
      >
        Open in Maps →
      </a>
    </div>
  );
}
