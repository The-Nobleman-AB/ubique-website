import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";

export default function GlobalHero() {
  return (
    <section
      className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#071B3A]
        via-[#0B2B59]
        to-[#155EEF]
        pt-44
        pb-36
      "
    >
      {/* Background */}

      <div className="absolute inset-0">

        <div
          className="
            absolute
            -left-24
            top-10
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#155EEF]/20
            blur-3xl
          "
        />

        <div
          className="
            absolute
            right-0
            bottom-0
            h-[500px]
            w-[500px]
            rounded-full
            bg-[#12B76A]/15
            blur-3xl
          "
        />

      </div>

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="max-w-4xl">

          <div
            className="
              inline-flex
              items-center
              gap-3
              rounded-full
              border
              border-white/20
              bg-white/10
              px-5
              py-2
              backdrop-blur-md
            "
          >

            <Globe2
              size={18}
              className="text-[#12B76A]"
            />

            <span
              className="
                text-sm
                font-semibold
                uppercase
                tracking-[0.25em]
                text-white
              "
            >
              Global Presence
            </span>

          </div>

          <h1
            className="
              mt-8
              text-6xl
              font-black
              leading-[0.95]
              text-white
              lg:text-8xl
            "
          >
            Delivering
            <br />
            Excellence
            <br />
            Worldwide.
          </h1>

          <p
            className="
              mt-10
              max-w-3xl
              text-xl
              leading-9
              text-blue-100
            "
          >
            Ubique Systems partners with organisations across
            multiple regions, combining local market knowledge
            with global delivery capabilities to support consulting,
            enterprise technology and workforce transformation.
          </p>

          <div
            className="
              mt-14
              flex
              flex-wrap
              gap-5
            "
          >

            <Link
              href="/contact"
              className="
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-[#12B76A]
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
              "
            >
              Contact Us

              <ArrowRight size={18} />
            </Link>

            <Link
              href="/services"
              className="
                rounded-xl
                border
                border-white/20
                px-8
                py-4
                font-semibold
                text-white
                transition-all
                duration-300
                hover:bg-white/10
              "
            >
              Explore Services
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}