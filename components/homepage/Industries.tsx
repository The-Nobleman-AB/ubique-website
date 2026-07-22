import Link from "next/link";
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
    <section className="py-40 bg-[#F8FAFC]">

      <Container>

        <div className="max-w-4xl">

          <p
            className="
              uppercase
              tracking-[0.3em]
              text-[#155EEF]
              font-semibold
            "
          >
            INDUSTRY EXPERTISE
          </p>

          <h2
            className="
              mt-6
              text-5xl
              font-black
              lg:text-6xl
            "
          >
            Expertise Across
            <br />
            High-Growth Industries
          </h2>

          <p
            className="
              mt-8
              text-xl
              text-gray-600
            "
          >
            Helping organisations access specialist talent across
            technology-driven sectors.
          </p>

        </div>

        <div
          className="
            mt-20
            grid
            gap-8
            md:grid-cols-2
            lg:grid-cols-3
          "
        >

          {industries.map((industry) => (

            <Link
              key={industry.title}
              href={industry.href}
              className="
                group
                block
                rounded-[32px]
                border
                border-gray-200
                bg-white
                p-10
                transition-all
                duration-300
                hover:-translate-y-2
                hover:border-[#155EEF]
                hover:shadow-2xl
              "
            >

              <h3
                className="
                  text-2xl
                  font-black
                  text-[#071B3A]
                "
              >
                {industry.title}
              </h3>

              <p
                className="
                  mt-5
                  leading-relaxed
                  text-gray-600
                "
              >
                {industry.description}
              </p>

              <div
                className="
                  mt-8
                  inline-flex
                  items-center
                  gap-2
                  font-semibold
                  text-[#155EEF]
                "
              >

                Learn More

                <ArrowRight
                  size={18}
                  className="
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                />

              </div>

            </Link>

          ))}

        </div>

      </Container>

    </section>
  );
}