import Link from "next/link";
import { ArrowRight } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import { practices } from "@/data/practices";

/**
 * What we cover — sourced from data/practices.ts rather than a second
 * hardcoded list, so it can't drift from the services pages.
 */
export default function EnterpriseExpertise() {
  return (
    <section className="section-y bg-navy" data-surface="dark">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          tone="dark"
          eyebrow="What we cover"
          title="Seven practices, one bench"
          lead="Expertise organised the way the work arrives — by platform, with a standing team behind each one."
          action={{
            label: "Explore each practice",
            href: "/services/technology-practices",
          }}
        />

        <ul className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2 lg:grid-cols-3">
          {practices.map((practice) => (
            <li key={practice.slug}>
              <Link
                href={`/services/technology-practices#${practice.slug}`}
                className="group hover:border-accent/60 block border-t border-white/15 pt-5 transition-colors"
              >
                <h3 className="group-hover:text-accent flex items-center gap-2 text-lg font-semibold text-white">
                  {practice.shortName}
                  <ArrowRight
                    size={15}
                    aria-hidden="true"
                    className="opacity-0 transition-all duration-200 group-hover:translate-x-1 group-hover:opacity-100"
                  />
                </h3>

                <p className="mt-2 leading-relaxed text-white/60">
                  {practice.summary}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
