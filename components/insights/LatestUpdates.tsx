import Link from "next/link";
import { ArrowRight, BarChart3, FileText, Scale } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";

/**
 * What we've published.
 *
 * This page used to promise "latest updates" and list three empty categories.
 * Until there's an actual article feed, it surfaces the substantial things we
 * have written — which is more useful than a news page with no news, and
 * honest about what's there.
 */

const pieces = [
  {
    icon: BarChart3,
    kind: "Market report",
    title: "India talent & salary benchmark",
    body: "Demand indices, salary ranges by city and skill, cost comparisons against onshore hiring, and realistic hiring timelines across India's technology clusters.",
    href: "/countries/india/talent-report",
    cta: "Read the report",
  },
  {
    icon: Scale,
    kind: "Guidance",
    title: "IR35, explained without the hedging",
    body: "What the UK off-payroll rules mean in practice: who determines status, what changes inside and outside scope, and the factors an assessment actually turns on.",
    href: "/services/ir35",
    cta: "Read the guidance",
  },
  {
    icon: FileText,
    kind: "Reference",
    title: "Our technology practices",
    body: "The platforms we resource and consult on — SAP, Oracle, Dynamics 365, Salesforce, cloud, data and integration — with the roles and capabilities inside each.",
    href: "/services/technology-practices",
    cta: "Explore the practices",
  },
];

export default function LatestUpdates() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What we've published"
          title="Things worth reading before you commit to anything"
          lead="Market data and guidance we'd want if we were on the other side of the conversation."
        />

        <ul className="mt-14 grid gap-6 lg:grid-cols-3">
          {pieces.map((piece) => (
            <li key={piece.href}>
              <Link
                href={piece.href}
                className="group rounded-card border-line hover:border-brand/40 hover:shadow-lift flex h-full flex-col border bg-white p-8 transition-all"
              >
                <piece.icon
                  size={24}
                  aria-hidden="true"
                  strokeWidth={1.5}
                  className="text-brand"
                />

                <p className="eyebrow text-muted mt-5">{piece.kind}</p>

                <h3 className="display-4 text-navy group-hover:text-brand mt-3 font-semibold">
                  {piece.title}
                </h3>

                <p className="text-muted mt-4 flex-1 leading-relaxed">
                  {piece.body}
                </p>

                <span className="text-brand mt-6 inline-flex items-center gap-2 font-semibold">
                  {piece.cta}
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
  );
}
