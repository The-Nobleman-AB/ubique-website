import Link from "next/link";

export default function FinalCTA() {
  return (
    <section
      className="
      py-40
      bg-[#071B3A]
      relative
      overflow-hidden
      "
    >
      <div
        className="
        absolute
        right-0
        top-0
        w-[700px]
        h-[700px]
        bg-blue-600/10
        rounded-full
        blur-[180px]
        "
      />

      <div className="max-w-5xl mx-auto text-center px-6 relative z-10">

        <p
          className="
          uppercase
          tracking-[0.3em]
          text-[#12B76A]
          font-semibold
          "
        >
          READY TO BUILD YOUR TEAM?
        </p>

        <h2
          className="
          text-6xl
          lg:text-8xl
          font-black
          text-white
          mt-8
          leading-[0.95]
          "
        >
          Build Teams Across
          Global Talent Markets
        </h2>

        <p
          className="
          text-xl
          text-white/70
          mt-10
          max-w-3xl
          mx-auto
          "
        >
          Access specialist talent across India,
          Germany, the United Kingdom and the
          United States through Ubique's global
          recruitment and consulting network.
        </p>

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-4
          mt-12
          "
        >
          <span className="px-4 py-2 rounded-full bg-white/10 text-white">
            🇮🇳 India
          </span>

          <span className="px-4 py-2 rounded-full bg-white/10 text-white">
            🇩🇪 Germany
          </span>

          <span className="px-4 py-2 rounded-full bg-white/10 text-white">
            🇬🇧 United Kingdom
          </span>

          <span className="px-4 py-2 rounded-full bg-white/10 text-white">
            🇺🇸 United States
          </span>
        </div>

        <div className="flex justify-center gap-6 mt-14 flex-wrap">

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
            Speak To An Expert
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

    </section>
  );
}