import Image from "next/image";

export default function HeroShowcase() {
  return (
    <div className="relative z-0 w-full max-w-[650px] mx-auto">

      <div
        className="
        relative
        rounded-[32px]
        overflow-hidden
        shadow-[0_50px_120px_rgba(0,0,0,0.3)]
        "
      >
        <Image
          src="/images/hero/workforce-team.jpeg"
          alt="Global Workforce"
          width={900}
          height={700}
          className="
          w-full
          h-[420px]
          md:h-[500px]
          lg:h-[550px]
          object-cover
          "
        />

        {/* Overlay */}

        <div
          className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black/60
          via-transparent
          to-transparent
          "
        />

        {/* Text */}

        <div
          className="
          absolute
          left-6
          md:left-8
          bottom-20
          md:bottom-24
          lg:bottom-20
          text-white
          max-w-[80%]
          "
        >
          <p className="text-xs md:text-sm uppercase tracking-wider">
            Global Workforce Network
          </p>

          <h3
            className="
            text-2xl
            md:text-3xl
            font-bold
            mt-2
            leading-tight
            "
          >
            Connecting Talent Across Continents
          </h3>
        </div>
      </div>

      {/* Metric Card 1 */}

      <div
        className="
        absolute
        z-10
        -left-3
        md:-left-6
        lg:-left-10
        top-8
        md:top-10
        lg:top-12
        bg-white
        rounded-2xl
        p-3
        md:p-4
        lg:p-5
        shadow-2xl
        "
      >
        <div
          className="
          text-2xl
          md:text-3xl
          font-bold
          text-[#155EEF]
          "
        >
          15+
        </div>

        <div className="text-gray-500 text-xs md:text-sm">
          Countries
        </div>
      </div>

      {/* Metric Card 2 */}

      <div
        className="
        absolute
        -right-3
        md:-right-5
        lg:-right-8
        top-28
        md:top-32
        lg:top-40
        bg-white
        rounded-2xl
        p-3
        md:p-4
        lg:p-5
        shadow-2xl
        "
      >
        <div
          className="
          text-2xl
          md:text-3xl
          font-bold
          text-[#12B76A]
          "
        >
          500+
        </div>

        <div className="text-gray-500 text-xs md:text-sm">
          Placements
        </div>
      </div>

      {/* Metric Card 3 */}

      <div
        className="
        absolute
        left-6
        md:left-8
        lg:left-10
        bottom-4
        md:-bottom-2
        lg:-bottom-8
        bg-white
        rounded-2xl
        p-3
        md:p-4
        lg:p-5
        shadow-2xl
        z-20
        "
      >
        <div
          className="
          text-2xl
          md:text-3xl
          font-bold
          text-[#12B76A]
          "
        >
          98%
        </div>

        <div className="text-gray-500 text-xs md:text-sm">
          Retention
        </div>
      </div>

    </div>
  );
}
