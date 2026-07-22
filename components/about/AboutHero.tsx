"use client";

import Image from "next/image";

export default function AboutHero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      bg-[#071B3A]
      pt-36
      pb-28
      "
    >
      {/* Background */}

      <div
        className="
        absolute
        inset-0
        "
      >
        <div
          className="
          absolute
          -top-40
          -left-40
          w-[650px]
          h-[650px]
          rounded-full
          bg-[#155EEF]/15
          blur-[170px]
          "
        />

        <div
          className="
          absolute
          bottom-[-220px]
          right-[-220px]
          w-[700px]
          h-[700px]
          rounded-full
          bg-[#12B76A]/10
          blur-[220px]
          "
        />
      </div>

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        "
      >
        <div
          className="
          grid
          lg:grid-cols-12
          gap-16
          items-center
          "
        >
          {/* LEFT */}

          <div className="lg:col-span-6">

            <p
              className="
              uppercase
              tracking-[0.35em]
              text-[#12B76A]
              font-semibold
              "
            >
              ABOUT UBIQUE
            </p>

            <h1
              className="
              mt-8
              text-[58px]
              md:text-[68px]
              xl:text-[78px]
              font-black
              leading-[0.92]
              tracking-[-0.04em]
              text-white
              "
            >
              Building
              <br />
              Technology Teams
              <br />
              That Move
              <br />
              Businesses Forward.
            </h1>

            <div
              className="
              mt-8
              w-24
              h-1
              rounded-full
              bg-[#12B76A]
              "
            />

            <p
              className="
              mt-10
              max-w-xl
              text-xl
              leading-9
              text-white/75
              "
            >
              Since 2000, Ubique has partnered with
              organisations navigating growth,
              transformation and evolving workforce
              challenges through specialist technology
              recruitment and workforce consulting.
            </p>

            <p
              className="
              mt-8
              max-w-lg
              text-lg
              leading-8
              text-white/60
              "
            >
              We believe exceptional businesses are
              built by exceptional people, and finding
              those people requires understanding
              organisations before recommending talent.
            </p>

          </div>

          {/* RIGHT */}

          <div className="lg:col-span-6">

            <div
              className="
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              shadow-[0_35px_90px_rgba(0,0,0,0.35)]
              "
            >
              <Image
                src="/images/about/hero.jpg"
                alt="Ubique"
                width={1200}
                height={900}
                priority
                className="
                h-[650px]
                w-full
                object-cover
                "
              />
            </div>

          </div>

        </div>

        {/* Transition */}

        <div
          className="
          mt-24
          pt-16
          border-t
          border-white/10
          "
        >

          <div
            className="
            grid
            lg:grid-cols-12
            gap-14
            items-start
            "
          >

            <div className="lg:col-span-5">

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                WHO WE ARE
              </p>

              <h2
                className="
                mt-6
                text-4xl
                lg:text-5xl
                font-black
                leading-tight
                text-white
                "
              >
                More Than
                <br />
                Recruitment.
              </h2>

            </div>

            <div className="lg:col-span-7">

              <p
                className="
                text-xl
                leading-9
                text-white/75
                "
              >
                Ubique exists to help organisations
                build stronger technology teams through
                workforce consulting, specialist
                recruitment and long-term partnerships.
                We work alongside our clients to understand
                their business objectives before identifying
                the people, capabilities and workforce
                strategies that will help them grow with
                confidence in an increasingly digital world.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}