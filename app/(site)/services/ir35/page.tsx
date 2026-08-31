import type { Metadata } from "next";
import Link from "next/link";
import { AlertTriangle, ArrowRight, Check, FileText } from "lucide-react";

import { absoluteUrl } from "@/lib/site";
import { getOffice } from "@/data/offices";

export const metadata: Metadata = {
  title: "IR35 Guidance for Contractors and Hiring Managers",
  description:
    "What the UK off-payroll working rules mean in practice: who determines status, what inside and outside IR35 change, and how Ubique Systems assesses every contract role before advertising it.",
  alternates: { canonical: absoluteUrl("/services/ir35") },
  openGraph: {
    title: "IR35 Guidance | Ubique Systems",
    description:
      "How the UK off-payroll rules work, and how we assess contract status before a role goes to market.",
    url: absoluteUrl("/services/ir35"),
  },
};

const factors = [
  {
    title: "Control",
    body: "How much say the client has over what you do, when, where and how. A contractor who is directed like an employee looks like an employee to HMRC.",
  },
  {
    title: "Substitution",
    body: "Whether you could send an equally qualified substitute in your place. A genuine, unfettered right of substitution points strongly towards outside scope.",
  },
  {
    title: "Mutuality of obligation",
    body: "Whether the client is obliged to offer work and you are obliged to accept it. A rolling expectation of continuous work looks like employment.",
  },
  {
    title: "Part and parcel",
    body: "Whether you are integrated into the organisation — line management, appraisals, company benefits, an internal job title — or engaged to deliver a defined piece of work.",
  },
  {
    title: "Financial risk",
    body: "Whether you carry genuine business risk: fixing defects at your own cost, providing your own equipment, being paid on deliverables rather than time.",
  },
  {
    title: "Exclusivity",
    body: "Whether you are free to work for other clients at the same time, and whether you actually do.",
  },
];

const ourProcess = [
  "We assess status before a role is advertised, not after you have accepted it.",
  "The status determination and the reasoning behind it are shared with you in writing.",
  "Inside-scope roles are advertised as inside scope, with the rate stated on the correct basis.",
  "We tell clients when a role they have described as outside scope probably is not.",
  "Every placement keeps an audit-ready record of the determination and the working practices behind it.",
];

export default function IR35Page() {
  const london = getOffice("london");

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

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 text-sm text-white/50">
              <li>
                <Link href="/services" className="hover:text-white">
                  Services
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/80">IR35 Guidance</li>
            </ol>
          </nav>

          <div className="max-w-3xl">
            <p className="eyebrow text-accent">UK off-payroll working rules</p>

            <h1 className="display-1 mt-5 font-bold text-white">
              IR35, explained without the hedging
            </h1>

            <p className="mt-7 text-lg leading-relaxed text-white/70">
              IR35 decides whether a contract is taxed like a business
              engagement or like employment. It has reshaped how UK contract
              hiring works — and it is where most of the confusion between
              contractors, agencies and clients now sits. Here is how it
              actually operates, and how we handle it.
            </p>
          </div>
        </div>
      </section>

      {/* ================================================== BASICS */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <p className="eyebrow text-brand">The short version</p>
              <h2 className="display-2 text-navy mt-4 font-bold">
                Who decides, and what changes
              </h2>
            </div>

            <div className="flex flex-col gap-8 lg:col-span-8">
              <div className="rounded-card border-line bg-surface border p-8">
                <h3 className="display-4 text-navy font-semibold">
                  The client determines status
                </h3>
                <p className="text-muted mt-4 leading-relaxed">
                  For medium and large private-sector clients and all public
                  authorities, the end client is responsible for deciding
                  whether a contract sits inside or outside IR35, and for
                  issuing a Status Determination Statement. Small companies are
                  exempt, and the contractor&rsquo;s own limited company remains
                  responsible for the assessment.
                </p>
              </div>

              <div className="rounded-card border-line bg-surface border p-8">
                <h3 className="display-4 text-navy font-semibold">
                  Inside scope
                </h3>
                <p className="text-muted mt-4 leading-relaxed">
                  The engagement is treated as employment for tax. Income tax
                  and employee National Insurance are deducted at source by the
                  fee-payer, usually the agency. You do not gain employment
                  rights from this — the tax treatment and the employment status
                  are separate questions, which is the part most people find
                  unreasonable.
                </p>
              </div>

              <div className="rounded-card border-line bg-surface border p-8">
                <h3 className="display-4 text-navy font-semibold">
                  Outside scope
                </h3>
                <p className="text-muted mt-4 leading-relaxed">
                  The engagement is a genuine business-to-business contract.
                  Your limited company is paid gross and handles its own tax.
                  The determination has to be defensible against the working
                  practices as they actually happen, not just the wording of the
                  contract.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== FACTORS */}

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="max-w-2xl">
            <p className="eyebrow text-brand">What the assessment looks at</p>
            <h2 className="display-2 text-navy mt-4 font-bold">
              The factors that decide it
            </h2>
            <p className="text-muted mt-5 text-lg leading-relaxed">
              No single factor settles a determination. HMRC and the tribunals
              look at the overall picture, weighted heavily towards the first
              three.
            </p>
          </div>

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {factors.map((factor) => (
              <li
                key={factor.title}
                className="rounded-card border-line border bg-white p-7"
              >
                <h3 className="text-navy text-lg font-semibold">
                  {factor.title}
                </h3>
                <p className="text-muted mt-3 leading-relaxed">{factor.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================================================== OUR PROCESS */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <p className="eyebrow text-brand">How we handle it</p>
              <h2 className="display-2 text-navy mt-4 font-bold">
                Status is settled before the role goes out
              </h2>
              <p className="text-muted mt-5 text-lg leading-relaxed">
                The most common complaint we hear from contractors is finding
                out a role is inside scope after investing time in the process.
                That is a process failure, and it is avoidable.
              </p>
            </div>

            <div className="lg:col-span-7">
              <ul className="flex flex-col gap-4">
                {ourProcess.map((step) => (
                  <li
                    key={step}
                    className="rounded-card border-line bg-surface flex items-start gap-4 border p-6"
                  >
                    <Check
                      size={20}
                      aria-hidden="true"
                      className="text-accent mt-0.5 shrink-0"
                    />
                    <span className="text-navy leading-relaxed">{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================== DISCLAIMER + CTA */}

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-card border-warn/30 bg-warn/5 flex items-start gap-4 border p-7">
            <AlertTriangle
              size={22}
              aria-hidden="true"
              className="text-warn mt-0.5 shrink-0"
            />
            <div>
              <h2 className="text-navy font-semibold">
                General information, not tax advice
              </h2>
              <p className="text-muted mt-2 leading-relaxed">
                This page describes how the off-payroll rules generally work. It
                is not tax or legal advice, and it cannot account for the
                specifics of your contract or company. For a determination you
                can rely on, speak to a qualified accountant or tax adviser —
                and to us about the specific role.
              </p>
            </div>
          </div>

          <div
            className="rounded-panel bg-navy mt-12 grid gap-8 p-10 lg:grid-cols-12 lg:items-center"
            data-surface="dark"
          >
            <div className="lg:col-span-7">
              <h2 className="display-3 font-bold text-white">
                Questions about a specific contract?
              </h2>
              <p className="mt-4 max-w-xl leading-relaxed text-white/70">
                Our UK team assesses status on every contract role we handle.
                Ask us about one before you commit time to a process.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 lg:col-span-5 lg:justify-end">
              <Link
                href="/contact"
                className="rounded-control bg-accent hover:bg-accent-dark inline-flex items-center gap-2 px-6 py-3.5 font-semibold text-white transition-colors"
              >
                Ask the UK team
                <ArrowRight size={17} aria-hidden="true" />
              </Link>

              {london?.phone && (
                <a
                  href={`tel:${london.phone}`}
                  className="rounded-control inline-flex items-center gap-2 border border-white/20 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
                >
                  <FileText size={16} aria-hidden="true" />
                  {london.phoneDisplay}
                </a>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
