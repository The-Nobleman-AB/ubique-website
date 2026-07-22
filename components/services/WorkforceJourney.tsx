"use client";

import {
  Search,
  Lightbulb,
  Globe2,
  ShieldCheck,
  Rocket,
  Handshake,
} from "lucide-react";

const journey = [
  {
    id: "01",
    title: "Understand",
    headline: "Business Before Recruitment",
    description:
      "Every successful engagement starts with understanding your organisation—not resumes. We immerse ourselves in your business objectives, culture, leadership expectations and technology ecosystem before recommending a single candidate.",
    points: [
      "Business Objectives",
      "Technology Landscape",
      "Organisation Culture",
    ],
    icon: Search,
    accent: "#155EEF",
  },
  {
    id: "02",
    title: "Design",
    headline: "A Workforce Strategy Built Around You",
    description:
      "Rather than applying a standard recruitment process, we design a hiring roadmap aligned to your timelines, budget, workforce model and long-term growth ambitions.",
    points: [
      "Hiring Strategy",
      "Delivery Model",
      "Growth Roadmap",
    ],
    icon: Lightbulb,
    accent: "#12B76A",
  },
  {
    id: "03",
    title: "Source",
    headline: "Access Global Talent Markets",
    description:
      "Our international recruitment network connects organisations with highly skilled professionals across enterprise technologies, engineering and digital transformation disciplines.",
    points: [
      "Global Talent Network",
      "Specialist Recruiters",
      "Passive Talent",
    ],
    icon: Globe2,
    accent: "#155EEF",
  },
  {
    id: "04",
    title: "Validate",
    headline: "Quality Is Never Compromised",
    description:
      "Every professional undergoes structured technical evaluation, behavioural screening and cultural assessment before entering your recruitment process.",
    points: [
      "Technical Screening",
      "Behaviour Assessment",
      "Quality Assurance",
    ],
    icon: ShieldCheck,
    accent: "#12B76A",
  },
  {
    id: "05",
    title: "Deploy",
    headline: "Seamless Hiring & Onboarding",
    description:
      "From interview scheduling to onboarding coordination, we manage every stage with transparency and speed so your teams remain focused on delivery.",
    points: [
      "Interview Management",
      "Offer Support",
      "Onboarding",
    ],
    icon: Rocket,
    accent: "#155EEF",
  },
  {
    id: "06",
    title: "Grow",
    headline: "Long-Term Workforce Partnership",
    description:
      "Our relationship extends well beyond placement, supporting workforce expansion, retention strategies and future hiring initiatives as your organisation evolves.",
    points: [
      "Workforce Scaling",
      "Retention",
      "Strategic Partnership",
    ],
    icon: Handshake,
    accent: "#12B76A",
  },
];

export default function WorkforceJourney() {
  return (
    <section className="py-40 bg-[#071B3A] overflow-hidden relative">

      <div
        className="
        absolute
        top-0
        left-1/2
        -translate-x-1/2
        w-[900px]
        h-[900px]
        rounded-full
        bg-[#155EEF]/10
        blur-[200px]
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6">

        <div className="max-w-4xl">

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-[#12B76A]
            font-semibold
            "
          >
            OUR METHODOLOGY
          </p>

          <h2
            className="
            mt-6
            text-6xl
            lg:text-7xl
            font-black
            leading-[0.95]
            text-white
            "
          >
            One Proven Process.
            <br />
            Infinite Workforce
            Possibilities.
          </h2>

          <p
            className="
            mt-10
            text-xl
            text-white/70
            leading-relaxed
            max-w-3xl
            "
          >
            Successful workforce transformation isn't driven by
            recruitment alone. It's driven by a structured,
            repeatable methodology that aligns people, technology
            and business objectives from day one.
          </p>

        </div>

        <div className="mt-28 space-y-32">

          {journey.map((step, index) => {

            const Icon = step.icon;

            return (

              <div
                key={step.id}
                className="
                grid
                lg:grid-cols-12
                gap-12
                items-start
                "
              >

                {/* Left */}

                <div className="lg:col-span-3">

                  <div
                    className="
                    sticky
                    top-32
                    "
                  >

                    <div
                      className="
                      text-[120px]
                      lg:text-[160px]
                      font-black
                      leading-none
                      text-white/5
                      "
                    >
                      {step.id}
                    </div>

                    <div className="-mt-16">

                      <div
                        className="uppercase tracking-[0.35em] text-sm font-semibold"
                        style={{
                          color: step.accent,
                        }}
                      >
                        STEP {step.id}
                      </div>

                      <h3
                        className="
                        text-5xl
                        font-black
                        text-white
                        mt-4
                        "
                      >
                        {step.title}
                      </h3>

                    </div>

                  </div>

                </div>

                {/* Right */}

                <div className="lg:col-span-9">

                  <div
                    className="
                    border-l-2
                    border-white/10
                    pl-10
                    "
                  >

                    <div
                      className="
                      w-20
                      h-20
                      rounded-3xl
                      flex
                      items-center
                      justify-center
                      mb-10
                      "
                      style={{
                        background: `${step.accent}20`,
                      }}
                    >
                      <Icon
                        size={36}
                        style={{
                          color: step.accent,
                        }}
                      />
                    </div>

                    <h4
                      className="
                      text-5xl
                      font-black
                      text-white
                      leading-tight
                      max-w-3xl
                      "
                    >
                      {step.headline}
                    </h4>

                    <p
                      className="
                      mt-8
                      text-xl
                      leading-relaxed
                      text-white/70
                      max-w-3xl
                      "
                    >
                      {step.description}
                    </p>

                    <div
                      className="
                      mt-14
                      grid
                      md:grid-cols-3
                      gap-0
                      border
                      border-white/10
                      rounded-[28px]
                      overflow-hidden
                      "
                    >

                      {step.points.map((point) => (
                        <div
                          key={point}
                          className="
                          bg-white/5
                          backdrop-blur-xl
                          p-8
                          border-r
                          last:border-r-0
                          border-white/10
                          hover:bg-white/10
                          transition-all
                          duration-500
                          "
                        >
                          <div
                            className="
                            w-3
                            h-3
                            rounded-full
                            mb-6
                            "
                            style={{
                              backgroundColor: step.accent,
                            }}
                          />

                          <p
                            className="
                            text-white
                            text-lg
                            font-semibold
                            leading-relaxed
                            "
                          >
                            {point}
                          </p>
                        </div>
                      ))}

                    </div>

                  </div>

                </div>

              </div>

            );

          })}

        </div>

        {/* Closing Statement */}

        <div
          className="
          mt-40
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.04]
          backdrop-blur-xl
          overflow-hidden
          "
        >

          <div
            className="
            grid
            lg:grid-cols-12
            "
          >

            {/* Left */}

            <div
              className="
              lg:col-span-7
              p-12
              lg:p-16
              "
            >

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                THE UBIQUE DIFFERENCE
              </p>

              <h3
                className="
                mt-6
                text-5xl
                lg:text-6xl
                font-black
                text-white
                leading-[1]
                "
              >
                Recruitment Is
                <br />
                Only One Step.
              </h3>

              <p
                className="
                mt-8
                text-xl
                text-white/70
                leading-relaxed
                max-w-3xl
                "
              >
                We don't simply fill vacancies.
                We help organisations design workforce
                strategies, access global talent,
                reduce hiring risk and build teams
                capable of driving long-term business
                transformation.
              </p>

            </div>

            {/* Right */}

            <div
              className="
              lg:col-span-5
              bg-gradient-to-br
              from-[#155EEF]
              to-[#12B76A]
              p-12
              lg:p-16
              flex
              items-center
              justify-center
              "
            >

              <div className="text-center">

                <div
                  className="
                  text-7xl
                  font-black
                  text-white
                  "
                >
                  15+
                </div>

                <p
                  className="
                  mt-3
                  text-white/90
                  text-xl
                  "
                >
                  Countries Supported
                </p>

                <div
                  className="
                  w-16
                  h-[2px]
                  bg-white/40
                  mx-auto
                  my-8
                  "
                />

                <div
                  className="
                  text-5xl
                  font-black
                  text-white
                  "
                >
                  Global
                </div>

                <p
                  className="
                  mt-2
                  text-white/80
                  "
                >
                  Workforce Expertise
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}