import Link from "next/link";
import { ArrowRight, Globe2 } from "lucide-react";

export default function ApacHero() {
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
            -left-32
            top-0
            h-[450px]
            w-[450px]
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
            h-[520px]
            w-[520px]
            rounded-full
            bg-[#12B76A]/15
            blur-3xl
          "
        />

      </div>

      <Globe2
        size={340}
        className="
          absolute
          right-8
          top-1/2
          -translate-y-1/2
          text-white/5
        "
      />

      <div className="relative mx-auto max-w-7xl px-6">

        <div className="max-w-4xl">

          <p
            className="
              inline-flex
              rounded-full
              border
              border-white/15
              bg-white/10
              px-5
              py-2
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-white
              backdrop-blur-md
            "
          >
            Asia-Pacific
          </p>

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
            Driving Global
            <br />
            Delivery From
            <br />
            India.
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
            Asia-Pacific is home to Ubique's Global Headquarters,
            combining enterprise consulting expertise, technology
            capabilities and workforce solutions to support clients
            across the region and around the world.
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
              href="/countries/india"
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
              Explore India

              <ArrowRight size={18} />

            </Link>

            <Link
              href="/contact"
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
              Contact Us
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}