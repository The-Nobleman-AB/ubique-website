import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";

import { ArrowRight } from "lucide-react";

export default function DualPath() {
  return (
    <section className="section-y-lg bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Who we help"
          title="Built for both sides of the talent equation"
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-2">
          {/* Employers */}

          <div className="bg-navy rounded-card relative overflow-hidden p-12">
            <div className="bg-brand/20 absolute top-0 right-0 h-60 w-60 blur-[100px]" />

            <div className="relative z-10">
              <p className="text-accent font-semibold">For employers</p>

              <h3 className="display-2 mt-6 font-bold text-white">
                Build
                <br />
                World-Class
                <br />
                Teams
              </h3>

              <p className="mt-8 max-w-md text-lg text-white/70">
                Access highly skilled professionals across technology,
                engineering, consulting and business functions.
              </p>

              <Link
                href="/contact"
                className="group text-accent mt-10 inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:gap-3"
              >
                Hire Talent
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>

          {/* Candidates */}

          <div className="rounded-card border-line relative overflow-hidden border bg-white p-12">
            <div className="bg-accent/10 absolute top-0 right-0 h-60 w-60 blur-[100px]" />

            <div className="relative z-10">
              <p className="text-brand font-semibold">For candidates</p>

              <h3 className="display-2 mt-6 font-bold">
                Build
                <br />
                Global
                <br />
                Careers
              </h3>

              <p className="text-muted mt-8 max-w-md text-lg">
                Discover international opportunities, career guidance and access
                to leading employers worldwide.
              </p>

              <Link
                href="/careers"
                className="group text-brand mt-10 inline-flex items-center gap-2 font-semibold transition-all duration-200 hover:gap-3"
              >
                Explore Opportunities
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
