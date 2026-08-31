import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";
import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Automotive",
    href: "/industries/automotive",
    description:
      "Supporting digital transformation, SAP programmes and engineering talent requirements.",
  },
  {
    title: "Banking & Financial Services",
    href: "/industries/banking-financial-services",
    description:
      "Technology, cybersecurity, data and consulting professionals for modern financial institutions.",
  },
  {
    title: "Healthcare & Life Sciences",
    href: "/industries/healthcare-life-sciences",
    description:
      "Specialist talent supporting healthcare technology, operations and transformation initiatives.",
  },
  {
    title: "Retail & Consumer",
    href: "/industries/retail-consumer",
    description:
      "Talent solutions for e-commerce, digital commerce and customer experience programmes.",
  },
  {
    title: "Manufacturing",
    href: "/industries/manufacturing",
    description:
      "Industry 4.0, ERP transformation and engineering workforce solutions.",
  },
  {
    title: "Technology",
    href: "/industries/technology",
    description:
      "Cloud, AI, software engineering and product development professionals.",
  },
];

export default function Industries() {
  return (
    <section className="section-y-lg bg-surface">
      <Container>
        <SectionHeader
          eyebrow="Industry expertise"
          title="Expertise across high-growth industries"
          lead="Specialist talent and consulting for the sectors where technology decides the outcome."
          action={{ label: "All industries", href: "/industries" }}
        />

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {industries.map((industry) => (
            <Link
              key={industry.title}
              href={industry.href}
              className="group rounded-card hover:border-brand border-line hover:shadow-lift block border bg-white p-10 transition-all duration-200"
            >
              <h3 className="text-navy text-2xl font-bold">{industry.title}</h3>

              <p className="text-muted mt-5 leading-relaxed">
                {industry.description}
              </p>

              <div className="text-brand mt-8 inline-flex items-center gap-2 font-semibold">
                Learn More
                <ArrowRight
                  size={18}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
