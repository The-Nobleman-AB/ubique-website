import Image from "next/image";

export default function HeroShowcase() {
  return (
    <div className="relative">

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
          h-[550px]
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
          bottom-8
          left-8
          text-white
          "
        >
          <p className="text-sm uppercase tracking-wider">
            Global Workforce Network
          </p>

          <h3 className="text-3xl font-bold mt-2">
            Connecting Talent Across Continents
          </h3>
        </div>
      </div>

      {/* Metric Card 1 */}

      <div
        className="
        absolute
        -left-10
        top-12
        bg-white
        rounded-2xl
        p-5
        shadow-2xl
        "
      >
        <div className="text-3xl font-bold text-[#155EEF]">
          15+
        </div>

        <div className="text-gray-500 text-sm">
          Countries
        </div>
      </div>

      {/* Metric Card 2 */}

      <div
        className="
        absolute
        -right-8
        top-40
        bg-white
        rounded-2xl
        p-5
        shadow-2xl
        "
      >
        <div className="text-3xl font-bold text-[#12B76A]">
          500+
        </div>

        <div className="text-gray-500 text-sm">
          Placements
        </div>
      </div>

      {/* Metric Card 3 */}

      <div
        className="
        absolute
        left-10
        -bottom-8
        bg-white
        rounded-2xl
        p-5
        shadow-2xl
        "
      >
        <div className="text-3xl font-bold text-[#12B76A]">
          98%
        </div>

        <div className="text-gray-500 text-sm">
          Retention
        </div>
      </div>

    </div>
  );
}