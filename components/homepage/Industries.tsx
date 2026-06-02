import Container from "../ui/Container";
import { ArrowRight } from "lucide-react";

const industries = [
  {
    title: "Automotive",
    description:
      "Supporting digital transformation, SAP programmes and engineering talent requirements.",
  },
  {
    title: "Banking & Financial Services",
    description:
      "Technology, cybersecurity, data and consulting professionals for modern financial institutions.",
  },
  {
    title: "Healthcare & Life Sciences",
    description:
      "Specialist talent supporting healthcare technology, operations and transformation initiatives.",
  },
  {
    title: "Retail & Consumer",
    description:
      "Talent solutions for e-commerce, digital commerce and customer experience programmes.",
  },
  {
    title: "Manufacturing",
    description:
      "Industry 4.0, ERP transformation and engineering workforce solutions.",
  },
  {
    title: "Technology",
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
            text-5xl
            lg:text-6xl
            font-black
            mt-6
            "
          >
            Expertise Across
            High-Growth Industries
          </h2>

          <p
            className="
            text-xl
            text-gray-600
            mt-8
            "
          >
            Helping organizations access specialist
            talent across technology-driven sectors.
          </p>

        </div>

        <div
          className="
          grid
          md:grid-cols-2
          lg:grid-cols-3
          gap-8
          mt-20
          "
        >

          {industries.map((industry) => (
            <div
              key={industry.title}
              className="
              bg-white
              rounded-[32px]
              p-10
              border
              border-gray-200
              hover:shadow-xl
              transition-all
              duration-500
              "
            >

              <h3
                className="
                text-2xl
                font-black
                "
              >
                {industry.title}
              </h3>

              <p
                className="
                text-gray-600
                mt-5
                leading-relaxed
                "
              >
                {industry.description}
              </p>

              <div
                className="
                mt-8
                flex
                items-center
                gap-2
                text-[#155EEF]
                font-semibold
                "
              >
                Learn More

                <ArrowRight size={16} />
              </div>

            </div>
          ))}

        </div>

      </Container>

    </section>
  );
}