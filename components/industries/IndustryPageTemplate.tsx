"use client";

import Link from "next/link";

import PageHero from "@/components/ui/PageHero";
import SectionHeader from "@/components/ui/SectionHeader";
import CTABand from "@/components/ui/CTABand";

import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Cloud,
  Database,
  Users,
  Cpu,
  BarChart3,
} from "lucide-react";

interface IndustryPriority {
  title: string;
  description: string;
}

interface IndustryPageTemplateProps {
  title: string;
  subtitle: string;

  priorities: IndustryPriority[];

  solutions: string[];

  technologies: string[];
}

const solutionIcons = [Briefcase, Cloud, Database, Users, Cpu, BarChart3];

export default function IndustryPageTemplate({
  title,
  subtitle,
  priorities,
  solutions,
  technologies,
}: IndustryPageTemplateProps) {
  return (
    <>
      <PageHero
        eyebrow="Industry expertise"
        title={title}
        intro={subtitle}
        breadcrumbs={[
          { name: "Industries", href: "/industries" },
          { name: title },
        ]}
        actions={[
          { label: "Talk to our experts", href: "/contact" },
          {
            label: "See our practices",
            href: "/services/technology-practices",
            variant: "ghost",
          },
        ]}
      />

      {/* =======================================================
          INDUSTRY PRIORITIES
      ======================================================= */}

      <section className="section-y-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Industry priorities"
            title="What's driving the industry"
            lead="Organisations across this sector are investing in technology, innovation and skilled talent to stay competitive in an increasingly digital world."
            className="mb-16"
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {priorities.map((item) => (
              <div
                key={item.title}
                className="group rounded-card hover:border-brand border-line hover:shadow-lift border bg-white p-8 transition-all duration-200"
              >
                <div className="rounded-control bg-brand-tint text-brand flex h-14 w-14 items-center justify-center transition-all duration-200">
                  <CheckCircle2 size={24} />
                </div>

                <h3 className="text-navy mt-6 text-2xl font-bold">
                  {item.title}
                </h3>

                <p className="text-muted mt-5 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* =======================================================
              HOW UBIQUE HELPS
          ======================================================= */}

      <section className="bg-surface section-y-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <SectionHeader
            eyebrow="Our expertise"
            title="How Ubique helps"
            lead="Combining consulting, enterprise technology and specialist professionals to help organisations modernise operations, improve resilience and accelerate digital transformation."
            className="mb-16"
          />

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
            {solutions.map((solution, index) => {
              const Icon = solutionIcons[index % solutionIcons.length];

              return (
                <div
                  key={solution}
                  className="group rounded-card hover:border-brand border-line hover:shadow-lift border bg-white p-8 transition-all duration-200"
                >
                  <div className="rounded-control bg-brand-tint text-brand flex h-16 w-16 items-center justify-center transition-all duration-200">
                    <Icon size={30} />
                  </div>

                  <h3 className="text-navy mt-8 text-2xl font-bold">
                    {solution}
                  </h3>

                  <p className="text-muted mt-4 leading-relaxed">
                    Tailored consulting and delivery services aligned with your
                    operational priorities, business objectives and long-term
                    growth.
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =======================================================
              TECHNOLOGIES
          ======================================================= */}

      <section className="section-y-sm">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-14">
            <p className="eyebrow text-brand">Technologies</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              Platforms & Technologies
            </h2>

            <p className="text-muted mt-6 max-w-3xl text-lg leading-relaxed">
              Leveraging modern enterprise platforms and emerging technologies
              to deliver scalable, future-ready solutions.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            {technologies.map((technology) => (
              <span
                key={technology}
                className="text-navy hover:border-brand hover:bg-brand-tint border-line rounded-full border bg-white px-6 py-3 font-semibold transition-all duration-200"
              >
                {technology}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CTABand
        title={`Let's discuss your ${title.toLowerCase()} requirements`}
        body="Whether you're planning a transformation programme, expanding technology capabilities or looking for specialist talent, tell us what you're trying to deliver."
        actions={[
          { label: "Contact us", href: "/contact" },
          { label: "Explore services", href: "/services", variant: "ghost" },
        ]}
      />
    </>
  );
}
