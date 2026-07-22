import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#071B3A]
      py-40
      "
    >
      {/* Background Glows */}

      <div
        className="
        absolute
        right-0
        top-0
        h-[700px]
        w-[700px]
        rounded-full
        bg-blue-600/10
        blur-[180px]
        "
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        h-[600px]
        w-[600px]
        rounded-full
        bg-[#12B76A]/10
        blur-[180px]
        "
      />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">

        <p
          className="
          font-semibold
          uppercase
          tracking-[0.3em]
          text-[#12B76A]
          "
        >
          READY TO PARTNER WITH UBIQUE?
        </p>

        <h2
          className="
          mt-8
          text-6xl
          font-black
          leading-[0.95]
          text-white
          lg:text-8xl
          "
        >
          Let's Build
          <br />
          What's Next
          <br />
          Together
        </h2>

        <p
          className="
          mx-auto
          mt-10
          max-w-3xl
          text-xl
          leading-9
          text-white/70
          "
        >
          Whether you're expanding your workforce,
          delivering transformation programmes or
          looking for specialist consulting expertise,
          Ubique is ready to help you achieve your
          next business milestone.
        </p>

        {/* Regional Presence */}

        <div
          className="
          mt-12
          flex
          flex-wrap
          justify-center
          gap-4
          "
        >

          <span
            className="
            rounded-full
            bg-white/10
            px-5
            py-2
            text-white
            "
          >
            🇮🇳 Global HQ
          </span>

          <span
            className="
            rounded-full
            bg-white/10
            px-5
            py-2
            text-white
            "
          >
            🌏 Asia-Pacific
          </span>

          <span
            className="
            rounded-full
            bg-white/10
            px-5
            py-2
            text-white
            "
          >
            🇪🇺 Europe
          </span>

          <span
            className="
            rounded-full
            bg-white/10
            px-5
            py-2
            text-white
            "
          >
            🌎 Americas
          </span>

        </div>

        <p
          className="
          mt-10
          text-sm
          font-medium
          uppercase
          tracking-[0.25em]
          text-white/50
          "
        >
          Supporting organisations across 15+ countries worldwide
        </p>

        <div
          className="
          mt-14
          flex
          flex-wrap
          justify-center
          gap-6
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
            hover:scale-[1.03]
            hover:opacity-95
            "
          >
            Contact Us

            <ArrowRight size={18} />
          </Link>

          <Link
            href="/countries"
            className="
            inline-flex
            items-center
            gap-3
            rounded-xl
            border
            border-white/20
            px-8
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:scale-[1.03]
            hover:bg-white/10
            "
          >
            Explore Global Presence

            <ArrowRight size={18} />
          </Link>

        </div>

      </div>

    </section>
  );
}