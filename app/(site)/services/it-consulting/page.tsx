import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

import { practices } from "@/data/practices";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "IT Consulting Services",
  description:
    "Enterprise IT consulting from Ubique Systems: programme advisory, solution architecture, ERP and cloud transformation, and delivery assurance — backed by specialists who have run the work before.",
  alternates: { canonical: absoluteUrl("/services/it-consulting") },
  openGraph: {
    title: "IT Consulting | Ubique Systems",
    description:
      "Programme advisory, architecture and delivery assurance for enterprise technology change.",
    url: absoluteUrl("/services/it-consulting"),
  },
};

const engagements = [
  {
    title: "Programme advisory",
    description:
      "An honest read on scope, sequencing and resourcing before a programme commits its budget. Often the cheapest work we do and the most valuable.",
    outcomes: [
      "Delivery roadmap and phasing",
      "Resourcing and skills plan",
      "Risk and dependency register",
    ],
  },
  {
    title: "Solution architecture",
    description:
      "Architects who have designed and shipped comparable estates, working alongside your team rather than producing a document and leaving.",
    outcomes: [
      "Target architecture",
      "Integration and data design",
      "Build-versus-buy assessment",
    ],
  },
  {
    title: "ERP transformation",
    description:
      "S/4HANA, Oracle Fusion and Dynamics 365 programmes — where most of our consulting work sits, and where deadlines are least forgiving.",
    outcomes: [
      "Migration approach and cutover plan",
      "Process and module design",
      "Hypercare and stabilisation",
    ],
  },
  {
    title: "Cloud & platform modernisation",
    description:
      "Moving off legacy infrastructure without stalling the roadmap, including the operating model that has to change alongside the technology.",
    outcomes: [
      "Migration strategy and landing zone",
      "Platform engineering practices",
      "Cost and reliability baselines",
    ],
  },
  {
    title: "Data & AI advisory",
    description:
      "Getting from scattered reporting to a data platform people trust, and from AI pilots to something that survives contact with production.",
    outcomes: [
      "Data platform architecture",
      "Governance and quality framework",
      "Use-case prioritisation",
    ],
  },
  {
    title: "Delivery assurance",
    description:
      "Independent review of a programme that is drifting, with a clear account of why and what to change. We say the uncomfortable part.",
    outcomes: [
      "Independent health check",
      "Recovery plan",
      "Ongoing assurance cadence",
    ],
  },
];

const models = [
  {
    name: "Time & materials",
    body: "Named consultants at an agreed rate, for work where scope will genuinely evolve.",
  },
  {
    name: "Statement of work",
    body: "Fixed deliverables, fixed price, our accountability for the outcome.",
  },
  {
    name: "Managed capability",
    body: "A standing team we run on your behalf, blended across our global centres.",
  },
];

export default function ITConsultingPage() {
  return (
    <>
      {/* ================================================== HERO */}

      <section
        className="bg-navy relative overflow-hidden pt-20"
        data-surface="dark"
      >
        <div
          aria-hidden="true"
          className="bg-brand/20 pointer-events-none absolute -top-32 -right-40 h-[520px] w-[520px] rounded-full blur-[170px]"
        />
        <div
          aria-hidden="true"
          className="bg-accent/15 pointer-events-none absolute -bottom-40 -left-32 h-[420px] w-[420px] rounded-full blur-[150px]"
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
              <li className="text-white/80">IT Consulting</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="eyebrow text-accent">IT Consulting</p>

            <h1 className="display-1 mt-5 font-bold text-white">
              Advice from people who have delivered the thing
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-white/70">
              Our consultants come out of the same practices we recruit into.
              That means the person advising on your S/4HANA cutover has run
              one, and the architect reviewing your platform has operated one at
              scale. It also means we can staff the delivery, not just the
              recommendation.
            </p>

            <div className="mt-9 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-control bg-accent hover:bg-accent-dark inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white transition-colors"
              >
                Discuss a programme
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              <Link
                href="/services/technology-practices"
                className="rounded-control inline-flex items-center border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                See our practices
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== ENGAGEMENTS */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand">How we engage</p>
            <h2 className="display-2 text-navy mt-4 font-bold">
              Six things clients ask us for
            </h2>
          </div>

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {engagements.map((engagement) => (
              <li
                key={engagement.title}
                className="rounded-card border-line bg-surface flex flex-col border p-7"
              >
                <h3 className="text-navy text-lg font-semibold">
                  {engagement.title}
                </h3>

                <p className="text-muted mt-3 flex-1 leading-relaxed">
                  {engagement.description}
                </p>

                <ul className="border-line mt-6 flex flex-col gap-2 border-t pt-5">
                  {engagement.outcomes.map((outcome) => (
                    <li
                      key={outcome}
                      className="text-navy flex items-start gap-2.5 text-sm"
                    >
                      <Check
                        size={16}
                        aria-hidden="true"
                        className="text-accent mt-0.5 shrink-0"
                      />
                      {outcome}
                    </li>
                  ))}
                </ul>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================== MODELS */}

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-brand">Commercial models</p>
              <h2 className="display-2 text-navy mt-4 font-bold">
                Priced the way the work actually behaves
              </h2>
              <p className="text-muted mt-5 text-lg leading-relaxed">
                We will tell you when a fixed price is the wrong shape for what
                you are asking, rather than pricing risk into it and hoping.
              </p>
            </div>

            <div className="lg:col-span-7">
              <dl className="divide-line border-line divide-y border-y">
                {models.map((model) => (
                  <div
                    key={model.name}
                    className="grid gap-3 py-7 md:grid-cols-3 md:gap-8"
                  >
                    <dt className="text-navy font-semibold">{model.name}</dt>
                    <dd className="text-muted leading-relaxed md:col-span-2">
                      {model.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== PRACTICES */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-2xl">
              <p className="eyebrow text-brand">
                Where our consultants come from
              </p>
              <h2 className="display-2 text-navy mt-4 font-bold">
                Seven technology practices
              </h2>
            </div>

            <Link
              href="/services/technology-practices"
              className="text-brand inline-flex items-center gap-2 font-semibold underline-offset-4 hover:underline"
            >
              Explore each practice
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>

          <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {practices.map((practice) => (
              <li key={practice.slug}>
                <Link
                  href={`/services/technology-practices#${practice.slug}`}
                  className="group rounded-card border-line bg-surface hover:border-brand/40 hover:shadow-card flex h-full flex-col border p-6 transition-all"
                >
                  <span className="text-navy group-hover:text-brand font-semibold">
                    {practice.shortName}
                  </span>
                  <span className="text-muted mt-2 text-sm leading-relaxed">
                    {practice.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================== CTA */}

      <section className="bg-navy" data-surface="dark">
        <div className="mx-auto max-w-7xl px-6 py-20 md:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <h2 className="display-3 font-bold text-white">
                Tell us what&rsquo;s not working
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/70">
                A programme that has slipped, an architecture decision nobody
                wants to own, a platform that costs more than it should. Those
                are the conversations we are useful in.
              </p>
            </div>

            <div className="lg:col-span-5 lg:justify-self-end">
              <Link
                href="/contact"
                className="rounded-control bg-accent hover:bg-accent-dark inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white transition-colors"
              >
                Start a conversation
                <ArrowRight size={17} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
