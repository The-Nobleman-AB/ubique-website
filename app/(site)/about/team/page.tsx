import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ExternalLink, MapPin } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/ui/CTABand";
import { avatarTone, initials, team, type TeamMember } from "@/data/team";
import { practices } from "@/data/practices";
import { absoluteUrl } from "@/lib/site";
import { cn } from "@/lib/cn";

export const metadata: Metadata = {
  title: "Meet the Team",
  description:
    "The consultants, recruiters and practice leads behind Ubique Systems — and which office you'd actually be working with.",
  alternates: { canonical: absoluteUrl("/about/team") },
  openGraph: {
    title: "Meet the Team | Ubique Systems",
    description:
      "The people behind the practices, across our offices in Asia-Pacific, Europe and the Americas.",
    url: absoluteUrl("/about/team"),
  },
};

export default function TeamPage() {
  return (
    <>
      <PageHero
        eyebrow="Meet the team"
        title="The people you'd actually be working with"
        intro="Buyers rarely choose a firm — they choose the consultant who understands the problem. These are the people behind the practices."
        breadcrumbs={[{ name: "About", href: "/about" }, { name: "Team" }]}
        actions={[
          { label: "Talk to us", href: "/contact" },
          { label: "Join the team", href: "/careers", variant: "ghost" },
        ]}
      />

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          {team.length === 0 ? (
            <SectionHeader
              eyebrow="Coming soon"
              title="We're putting this page together"
              lead="In the meantime, the fastest way to reach the right person is to tell us what you're working on — enquiries route straight to the relevant practice or regional team."
              action={{ label: "Get in touch", href: "/contact" }}
            />
          ) : (
            <>
              <SectionHeader
                eyebrow="Our people"
                title="Leadership"
                lead="The people who set the direction. We'll add practice and regional leads here as we go."
              />

              <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {team.map((member) => (
                  <li key={member.name}>
                    <MemberCard member={member} />
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </section>

      <CTABand
        title="Want to speak to someone specific?"
        body="Tell us the practice, the market or the problem, and we'll put you with the person who knows it rather than a general enquiries queue."
        actions={[
          { label: "Start a conversation", href: "/contact" },
          { label: "Every office", href: "/contact#offices", variant: "ghost" },
        ]}
      />
    </>
  );
}

/* ==================================================================== */

function MemberCard({ member }: { member: TeamMember }) {
  const memberPractices = practices.filter((practice) =>
    member.practices?.includes(practice.slug),
  );

  return (
    <div className="rounded-card border-line hover:shadow-card bg-surface flex h-full flex-col border p-7 transition-shadow">
      <div className="flex items-center gap-4">
        {member.photo ? (
          <Image
            src={member.photo}
            alt=""
            width={64}
            height={64}
            className="h-16 w-16 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className={cn(
              "flex h-16 w-16 shrink-0 items-center justify-center rounded-full text-lg font-bold",
              avatarTone(member.name),
            )}
          >
            {initials(member.name)}
          </span>
        )}

        <div className="min-w-0">
          <h3 className="text-navy text-lg font-semibold">{member.name}</h3>
          <p className="text-muted mt-0.5 text-sm">{member.role}</p>
        </div>
      </div>

      {member.bio && (
        <p className="text-muted mt-5 flex-1 leading-relaxed">{member.bio}</p>
      )}

      {memberPractices.length > 0 && (
        <ul className="mt-5 flex flex-wrap gap-1.5">
          {memberPractices.map((practice) => (
            <li key={practice.slug}>
              <Link
                href={`/services/technology-practices#${practice.slug}`}
                className="rounded-pill bg-brand-tint text-brand hover:bg-brand inline-block px-2.5 py-1 text-xs font-medium hover:text-white"
              >
                {practice.shortName}
              </Link>
            </li>
          ))}
        </ul>
      )}

      <div className="border-line mt-6 flex flex-wrap items-center justify-between gap-3 border-t pt-4">
        {member.location ? (
          <span className="text-muted inline-flex items-center gap-1.5 text-sm">
            <MapPin size={14} aria-hidden="true" />
            {member.location}
          </span>
        ) : (
          <span />
        )}

        {member.linkedin && (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="text-muted hover:text-brand inline-flex items-center gap-1.5 text-sm font-medium"
          >
            <ExternalLink size={13} aria-hidden="true" />
            <span className="sr-only">{member.name} on </span>
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
}
