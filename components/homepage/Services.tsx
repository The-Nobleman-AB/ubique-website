import Link from "next/link";

import SectionHeader from "@/components/ui/SectionHeader";
import { Cpu, Users, Briefcase, ArrowRight } from "lucide-react";

const services = [
  {
    title: "IT Consulting",
    description:
      "Deliver digital transformation through SAP, Cloud, AI, Data, Microsoft technologies and enterprise consulting services.",
    icon: Cpu,
  },
  {
    title: "HR Consulting",
    description:
      "Enable organisational growth through workforce strategy, HR transformation, compliance and people advisory services.",
    icon: Users,
  },
  {
    title: "Staffing Solutions",
    description:
      "Access specialist professionals through permanent, contract and project-based workforce solutions across global markets.",
    icon: Briefcase,
  },
];

export default function Services() {
  return (
    <section className="section-y-lg bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="Services"
          title="Solutions built for growth"
          lead="Consulting, resourcing and managed delivery that help organisations transform, grow and scale globally."
          action={{ label: "All services", href: "/services" }}
        />

        <div className="mt-20 grid gap-8 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="group rounded-card bg-navy hover:shadow-lift relative overflow-hidden p-10 transition-all duration-200"
              >
                {/* Background Glow */}

                <div className="bg-brand/20 absolute top-0 right-0 h-44 w-44 rounded-full blur-3xl" />

                <div className="relative z-10">
                  <div className="rounded-control flex h-16 w-16 items-center justify-center bg-white/10 transition-all duration-200 group-hover:bg-white/15">
                    <Icon size={30} className="text-white" />
                  </div>

                  <h3 className="mt-8 text-3xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-5 leading-relaxed text-white/75">
                    {service.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Explore Services */}

        <div className="mt-16 flex justify-center">
          <Link
            href="/services#services-overview"
            className="group text-brand inline-flex items-center gap-3 text-lg font-semibold transition-all duration-200 hover:gap-4"
          >
            Explore All Services
            <ArrowRight
              size={20}
              className="transition-transform duration-200 group-hover:translate-x-1"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
