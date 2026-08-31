import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check, GraduationCap, Users } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/ui/CTABand";
import Card from "@/components/ui/Card";
import { practices } from "@/data/practices";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Ubique Academics — Training & Talent Development",
  description:
    "We train specialists before we place them. Ubique Academics builds capability in SAP, cloud, data and engineering — a talent pipeline we grow rather than compete for.",
  alternates: { canonical: absoluteUrl("/services/academics") },
  openGraph: {
    title: "Ubique Academics | Ubique Systems",
    description:
      "Training that builds specialists rather than bidding for them — for the people we place, and for our own consultants.",
    url: absoluteUrl("/services/academics"),
  },
};

const clientBenefits = [
  {
    title: "Capability where the market is empty",
    description:
      "When a skill is genuinely scarce — S/4HANA, certain cloud specialisms — bidding harder doesn't create supply. Training does. We build the people the market can't sell you.",
  },
  {
    title: "Assessed before they arrive",
    description:
      "Someone who has come through our programme has been observed working for weeks, not interviewed for an hour. We know how they handle being stuck.",
  },
  {
    title: "Trained on your stack",
    description:
      "Where a client has an unusual estate or its own standards, we shape the programme around it, so day one isn't spent on orientation.",
  },
  {
    title: "Retention that follows investment",
    description:
      "People who were trained into a career tend to stay in it. Programme graduates consistently outlast market hires in the same roles.",
  },
];

const learnerPath = [
  {
    step: "Selection",
    body: "We look for aptitude and motivation rather than an existing CV match — including career changers and graduates the mainstream market screens out on keywords.",
  },
  {
    step: "Structured training",
    body: "Platform fundamentals and hands-on work on realistic scenarios, taught by consultants who do the job rather than career trainers.",
  },
  {
    step: "Certification",
    body: "Where the platform has a credential worth holding, we prepare for it and cover it.",
  },
  {
    step: "Placement",
    body: "Into a real role with a client, with the consultant who trained you still reachable when something goes wrong in week three.",
  },
];

export default function AcademicsPage() {
  return (
    <>
      <PageHero
        eyebrow="Ubique Academics"
        title="We build specialists instead of bidding for them"
        intro="Some skills are scarce enough that no amount of searching produces a candidate. Academics is how we answer that — training people into the roles the market can't fill, and keeping our own consultants ahead of the platforms they advise on."
        breadcrumbs={[
          { name: "Services", href: "/services" },
          { name: "Academics" },
        ]}
        actions={[
          { label: "Talk to us about a programme", href: "/contact" },
          { label: "See open roles", href: "/careers", variant: "ghost" },
        ]}
      />

      {/* ============================================ FOR CLIENTS */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-center gap-3">
            <GraduationCap
              size={22}
              aria-hidden="true"
              className="text-brand"
            />
            <p className="eyebrow text-brand">For clients</p>
          </div>

          <h2 className="display-2 text-navy mt-4 max-w-2xl font-bold">
            A talent pipeline we grow rather than compete for
          </h2>

          <p className="text-muted mt-5 max-w-2xl text-lg leading-relaxed">
            When a programme needs capability the market genuinely doesn&rsquo;t
            have, the honest options are to wait, overpay, or build. We build.
          </p>

          <ul className="mt-14 grid gap-6 md:grid-cols-2">
            {clientBenefits.map((benefit) => (
              <li key={benefit.title}>
                <Card title={benefit.title} body={benefit.description} />
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================ FOR LEARNERS */}

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <SectionHeader
                eyebrow="For learners"
                title="From aptitude to a first real role"
                lead="You don't need the CV the market is screening for. You need the aptitude, and a route in."
              />
            </div>

            <ol className="lg:col-span-8">
              {learnerPath.map((stage, index) => (
                <li
                  key={stage.step}
                  className="border-line relative border-l pb-9 pl-8 last:pb-0"
                >
                  <span
                    aria-hidden="true"
                    className="bg-brand absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full"
                  />

                  <p className="eyebrow text-brand">
                    {String(index + 1).padStart(2, "0")} · {stage.step}
                  </p>

                  <p className="text-navy mt-3 leading-relaxed">{stage.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ============================================ SUBJECTS */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="What we teach"
            title="The practices where scarcity actually bites"
            lead="Programmes follow demand. These are the areas where training reliably beats searching."
            action={{
              label: "About our practices",
              href: "/services/technology-practices",
            }}
          />

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practices
              .filter((practice) =>
                [
                  "sap",
                  "cloud-infrastructure",
                  "data-ai",
                  "development-integration",
                ].includes(practice.slug),
              )
              .map((practice) => (
                <li key={practice.slug}>
                  <Card
                    href={`/services/technology-practices#${practice.slug}`}
                    title={practice.shortName}
                    body={practice.summary}
                  />
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* ============================================ INTERNAL L&D */}

      <section className="bg-navy section-y" data-surface="dark">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-12 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-6">
              <div className="flex flex-wrap items-center gap-3">
                <Users size={22} aria-hidden="true" className="text-accent" />
                <p className="eyebrow text-accent">For our own people</p>
              </div>

              <h2 className="display-2 mt-4 font-bold text-white">
                The same programme runs inside Ubique
              </h2>

              <p className="mt-5 max-w-xl leading-relaxed text-white/70">
                A consultant advising on S/4HANA has to stay current with
                S/4HANA. Academics is also how our own teams keep pace with the
                platforms they recruit and consult on — which is why the person
                screening a candidate can tell a good answer from a rehearsed
                one.
              </p>

              <Link
                href="/careers"
                className="text-accent mt-7 inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
              >
                Careers at Ubique
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>

            <ul className="flex flex-col gap-4 lg:col-span-6">
              {[
                "Certification paths funded and scheduled into working time, not evenings.",
                "Consultants rotate across practices as demand shifts, rather than being stuck in one specialism.",
                "Time with the platforms before advising clients on them.",
                "Internal knowledge sharing between the regional teams — what Germany learns about S/4HANA reaches India.",
              ].map((item) => (
                <li
                  key={item}
                  className="rounded-card flex items-start gap-4 border border-white/10 bg-white/5 p-6"
                >
                  <Check
                    size={18}
                    aria-hidden="true"
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <span className="leading-relaxed text-white/85">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        title="Need capability the market can't supply?"
        body="Tell us the skills and the timeline. If training is the honest answer rather than searching, we'll say so — and show you what it takes."
        actions={[
          { label: "Start a conversation", href: "/contact" },
          { label: "Browse open roles", href: "/careers", variant: "ghost" },
        ]}
      />
    </>
  );
}
