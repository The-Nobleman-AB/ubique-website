import Image from "next/image";
import Link from "next/link";

export default function ServicesHero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#071B3A]
      pt-32
      pb-24
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[700px]
        h-[700px]
        rounded-full
        bg-blue-600/10
        blur-[180px]
        "
      />

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <div
          className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          "
        >

          {/* LEFT */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#12B76A]
              font-semibold
              "
            >
              GLOBAL WORKFORCE SOLUTIONS
            </p>

            <h1
              className="
              text-6xl
              lg:text-8xl
              font-black
              text-white
              mt-8
              leading-[0.92]
              "
            >
              Building
              High-Performing
              Global Teams
            </h1>

            <p
              className="
              mt-10
              text-xl
              text-white/75
              leading-relaxed
              max-w-xl
              "
            >
              Ubique partners with organizations to
              recruit, scale and transform technology
              teams through permanent hiring, contract
              staffing, consulting and managed workforce
              solutions.
            </p>

            <div
              className="
              flex
              flex-wrap
              gap-5
              mt-12
              "
            >

              <Link
                href="/contact"
                className="
                bg-[#12B76A]
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                "
              >
                Talk To An Expert
              </Link>

              <Link
                href="/countries/india"
                className="
                border
                border-white/20
                text-white
                px-8
                py-4
                rounded-xl
                font-semibold
                "
              >
                Explore Talent Markets
              </Link>

            </div>

          </div>

          {/* RIGHT */}

          <div>

            <div
              className="
              rounded-[36px]
              overflow-hidden
              shadow-[0_50px_120px_rgba(0,0,0,0.35)]
              "
            >

              <Image
                src="/images/services/hero.jpg"
                alt="Ubique Global Workforce"
                width={1200}
                height={900}
                className="
                w-full
                h-[620px]
                object-cover
                "
              />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}