import Container from "../ui/Container";
import HeroShowcase from "./HeroShowcase";

export default function Hero() {
  return (
    <section
      className="
      relative
      min-h-screen
      bg-[#071B3A]
      overflow-hidden
      flex
      items-center
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        top-0
        left-0
        w-[700px]
        h-[700px]
        rounded-full
        bg-blue-600/20
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[700px]
        h-[700px]
        rounded-full
        bg-green-500/20
        blur-[180px]
        "
      />

      <Container>

        <div
          className="
          grid
          lg:grid-cols-2
          gap-24
          items-center
          "
        >

          {/* LEFT */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.3em]
              text-[#12B76A]
              mb-8
              "
            >
              GLOBAL WORKFORCE PARTNER
            </p>

            <h1
              className="
              text-7xl
              lg:text-8xl
              font-black
              text-white
              leading-[0.95]
              "
            >
              Global Talent.
              <br />
              Local Expertise.
            </h1>

            <p
              className="
              mt-8
              text-xl
              text-white/70
              max-w-xl
              "
            >
              Helping organizations build world-class teams
              and professionals build international careers
              across 15+ countries.
            </p>

            <div className="flex gap-5 mt-10">

              <button
                className="
                bg-[#12B76A]
                px-8
                py-4
                rounded-xl
                text-white
                font-semibold
                "
              >
                Hire Talent
              </button>

              <button
                className="
                border
                border-white/20
                px-8
                py-4
                rounded-xl
                text-white
                "
              >
                Explore Jobs
              </button>

            </div>

          </div>

          {/* RIGHT */}

          <HeroShowcase />

        </div>

      </Container>

    </section>
  );
}