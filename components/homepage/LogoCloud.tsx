import Container from "../ui/Container";

const companies = [
  "BMW",
  "BOSCH",
  "SIEMENS",
  "CAPGEMINI",
  "INFOSYS",
  "ACCENTURE",
];

export default function LogoCloud() {
  return (
    <section className="py-20 bg-white">

      <Container>

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.2em]
            text-gray-500
            "
          >
            Trusted By Leading Organizations
          </p>

        </div>

        <div
          className="
          grid
          md:grid-cols-6
          gap-10
          mt-12
          text-center
          "
        >
          {companies.map((company) => (
            <div
              key={company}
              className="
              text-xl
              font-bold
              text-gray-400
              "
            >
              {company}
            </div>
          ))}
        </div>

      </Container>

    </section>
  );
}