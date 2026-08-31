import type { Metadata } from "next";
import { AlertTriangle, ShieldCheck } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/ui/CTABand";
import { countryCount, offices } from "@/data/offices";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Corporate Responsibility",
  description:
    "How Ubique Systems handles data, employment compliance and fair hiring across the markets we operate in — and what we're still working on.",
  alternates: { canonical: absoluteUrl("/about/responsibility") },
  openGraph: {
    title: "Corporate Responsibility | Ubique Systems",
    description:
      "Information security, employment compliance and fair hiring across 15+ countries.",
    url: absoluteUrl("/about/responsibility"),
  },
};

/**
 * Corporate responsibility.
 *
 * Deliberately narrow. Everything in the "commitments" section is evidenced by
 * something the business already does — the ISO 27001 certification, the
 * compliance work behind every placement, the office network.
 *
 * The environmental and community sections are marked as needing real content
 * rather than filled with the usual language, because unevidenced CSR claims
 * are worse than an honest gap — particularly in RFPs, where they get checked.
 */

const commitments = [
  {
    title: "Information security",
    evidence: "ISO/IEC 27001 certified",
    body: "We hold personal data for thousands of candidates — CVs, contact details, work history, right-to-work documentation. Our information security management system is independently audited against ISO/IEC 27001, and access to candidate data is restricted to the consultants working on the relevant role.",
  },
  {
    title: "Employment compliance",
    evidence: "Every placement, every market",
    body: "Right-to-work checks, IR35 status determination in the UK, AÜG compliance in Germany, and correct worker classification in the US. We assess contract status before a role is advertised rather than after someone has accepted it — getting this wrong transfers risk to the people least able to carry it.",
  },
  {
    title: "Honest representation",
    evidence: "How we run a search",
    body: "We tell candidates the actual rate, the actual working pattern and the actual status of a contract before they invest time in a process. We tell clients when a brief is mis-specified. Neither conversation is comfortable, and both are cheaper than the alternative.",
  },
  {
    title: "Fair access to opportunity",
    evidence: "Ubique Academics",
    body: "Our training programme selects on aptitude rather than an existing CV match, which opens specialist technology careers to career changers and graduates that keyword screening filters out. It is the part of our business we would point to first on this question.",
  },
  {
    title: "Data rights",
    evidence: "GDPR and equivalents",
    body: "Candidates can ask what we hold, have it corrected, or have it deleted. Application data is retained for 24 months and no longer unless someone asks us to keep it. Our privacy policy sets out the full position.",
  },
  {
    title: "Local employment",
    evidence: `${offices.length} offices, ${countryCount}+ countries`,
    body: "Our offices employ local teams on local terms rather than operating as sales fronts for a single delivery centre. The consultant you speak to in London, Munich or Norwalk works there.",
  },
];

export default function ResponsibilityPage() {
  return (
    <>
      <PageHero
        eyebrow="Corporate responsibility"
        title="What we're accountable for"
        intro="We're a recruitment and consulting business. Our responsibilities are concentrated in a few specific places — the data we hold, the compliance behind every placement, and whether people are told the truth about the work they're taking on."
        breadcrumbs={[
          { name: "About", href: "/about" },
          { name: "Responsibility" },
        ]}
        actions={[
          { label: "Ask us about our practices", href: "/contact" },
          { label: "Privacy policy", href: "/legal/privacy", variant: "ghost" },
        ]}
      />

      {/* ============================================ COMMITMENTS */}

      <section className="section-y bg-white">
        <div className="mx-auto max-w-7xl px-6">
          <SectionHeader
            eyebrow="Our commitments"
            title="Six things we can evidence"
            lead="Each of these is tied to something we already do, hold or are audited against — not an aspiration."
          />

          <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {commitments.map((commitment) => (
              <li
                key={commitment.title}
                className="rounded-card border-line bg-surface flex flex-col border p-7"
              >
                <div className="flex items-start gap-3">
                  <ShieldCheck
                    size={20}
                    aria-hidden="true"
                    className="text-accent mt-0.5 shrink-0"
                  />
                  <h3 className="text-navy text-lg font-semibold">
                    {commitment.title}
                  </h3>
                </div>

                <p className="eyebrow text-brand mt-4">{commitment.evidence}</p>

                <p className="text-muted mt-3 flex-1 leading-relaxed">
                  {commitment.body}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============================================ IN PROGRESS */}

      <section className="section-y bg-surface">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-14 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <SectionHeader
                eyebrow="Still to publish"
                title="What we're not claiming yet"
                lead="Most corporate responsibility pages assert more than the business can evidence. These are areas where we have work underway but nothing audited, so we'd rather say that than write the usual paragraph."
              />
            </div>

            <div className="lg:col-span-7">
              <div className="rounded-card border-warn/30 bg-warn/5 flex items-start gap-4 border p-6">
                <AlertTriangle
                  size={22}
                  aria-hidden="true"
                  className="text-warn mt-0.5 shrink-0"
                />
                <div>
                  <h3 className="text-navy font-semibold">
                    Awaiting confirmed policy
                  </h3>
                  <p className="text-muted mt-2 leading-relaxed">
                    Environmental impact, community and charitable activity, and
                    formal diversity reporting. Replace this block with the real
                    positions once they are signed off — the section structure
                    is already in place.
                  </p>
                </div>
              </div>

              <dl className="divide-line border-line mt-8 divide-y border-y">
                {[
                  {
                    title: "Environmental impact",
                    body: "We are a professional services business with a small direct footprint, largely office energy and travel. A measured baseline and a reduction position need to be established before we publish anything.",
                  },
                  {
                    title: "Diversity in placement",
                    body: "We track the composition of shortlists we present. Publishing that data meaningfully requires agreeing what we report and how, across markets with very different legal frameworks.",
                  },
                  {
                    title: "Community",
                    body: "Activity varies by office. A consolidated position is worth having before it appears on a page that procurement teams will read.",
                  },
                ].map((item) => (
                  <div key={item.title} className="py-6">
                    <dt className="text-navy font-semibold">{item.title}</dt>
                    <dd className="text-muted mt-2 leading-relaxed">
                      {item.body}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <CTABand
        title="Running a supplier assessment?"
        body={`Procurement and security questionnaires come to us regularly — send yours and we'll complete it properly. Our ISO 27001 certificate and data processing terms are available on request.`}
        actions={[
          { label: "Get in touch", href: "/contact" },
          {
            label: "Read the privacy policy",
            href: "/legal/privacy",
            variant: "ghost",
          },
        ]}
        note={`Questions about this page can go to ${siteConfig.email}.`}
      />
    </>
  );
}
