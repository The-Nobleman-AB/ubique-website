"use client";

import Link from "next/link";

import {
  ArrowRight,
  CheckCircle2,
  Briefcase,
  Cloud,
  Database,
  Users,
  Cpu,
  BarChart3,
} from "lucide-react";

interface IndustryPriority {
  title: string;
  description: string;
}

interface IndustryPageTemplateProps {
  title: string;
  subtitle: string;

  priorities: IndustryPriority[];

  solutions: string[];

  technologies: string[];
}

const solutionIcons = [
  Briefcase,
  Cloud,
  Database,
  Users,
  Cpu,
  BarChart3,
];

export default function IndustryPageTemplate({
  title,
  subtitle,
  priorities,
  solutions,
  technologies,
}: IndustryPageTemplateProps) {

  return (

    <>

      {/* =======================================================
          HERO
      ======================================================= */}

      <section
        className="
        relative
        overflow-hidden
        bg-gradient-to-br
        from-[#071B3A]
        via-[#0C2F63]
        to-[#155EEF]
        pt-40
        pb-28
        "
      >

        <div className="absolute inset-0">

          <div
            className="
            absolute
            -left-32
            top-0
            h-[420px]
            w-[420px]
            rounded-full
            bg-[#2E90FA]/20
            blur-3xl
            "
          />

          <div
            className="
            absolute
            bottom-0
            right-0
            h-[460px]
            w-[460px]
            rounded-full
            bg-[#12B76A]/15
            blur-3xl
            "
          />

        </div>

        <div
          className="
          relative
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
          "
        >

          <div className="max-w-3xl">

            <p
              className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-blue-200
              "
            >
              Industry Expertise
            </p>

            <h1
              className="
              mt-6
              text-5xl
              font-black
              tracking-[-0.04em]
              leading-tight
              text-white
              lg:text-7xl
              "
            >
              {title}
            </h1>

            <p
              className="
              mt-8
              text-lg
              leading-9
              text-blue-100
              "
            >
              {subtitle}
            </p>

          </div>

        </div>

      </section>

      {/* =======================================================
          INDUSTRY PRIORITIES
      ======================================================= */}

      <section className="py-24">

        <div
          className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
          "
        >

          <div className="mb-16">

            <p
              className="
              text-sm
              font-semibold
              uppercase
              tracking-[0.3em]
              text-[#155EEF]
              "
            >
              Industry Priorities
            </p>

            <h2
              className="
              mt-5
              text-5xl
              font-black
              tracking-[-0.04em]
              text-[#071B3A]
              "
            >
              What's Driving
              <br />
              The Industry
            </h2>

            <p
              className="
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-gray-600
              "
            >
              Organisations across this sector are investing in
              technology, innovation and skilled talent to stay
              competitive in an increasingly digital world.
            </p>

          </div>

          <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

            {priorities.map((item) => (

              <div
                key={item.title}
                className="
                  group
                  rounded-[30px]
                  border
                  border-gray-200
                  bg-white
                  p-8
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-[#155EEF]
                  hover:shadow-xl
                "
              >

                <div
                  className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-2xl
                  bg-[#EEF4FF]
                  text-[#155EEF]
                  transition-all
                  duration-300
                  group-hover:scale-110
                  "
                >

                  <CheckCircle2 size={24} />

                </div>

                <h3
                  className="
                  mt-6
                  text-2xl
                  font-bold
                  text-[#071B3A]
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-5
                  leading-8
                  text-gray-600
                  "
                >
                  {item.description}
                </p>

              </div>

            ))}

          </div>

        </div>

      </section>
          {/* =======================================================
              HOW UBIQUE HELPS
          ======================================================= */}

          <section className="bg-[#F8FAFC] py-24">

            <div
              className="
              mx-auto
              max-w-7xl
              px-6
              lg:px-8
              "
            >

              <div className="mb-16">

                <p
                  className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#155EEF]
                  "
                >
                  Our Expertise
                </p>

                <h2
                  className="
                  mt-5
                  text-5xl
                  font-black
                  tracking-[-0.04em]
                  text-[#071B3A]
                  "
                >
                  How Ubique Helps
                </h2>

                <p
                  className="
                  mt-6
                  max-w-3xl
                  text-lg
                  leading-8
                  text-gray-600
                  "
                >
                  Combining consulting, enterprise technology and
                  specialist professionals to help organisations
                  modernise operations, improve resilience and
                  accelerate digital transformation.
                </p>

              </div>

              <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

                {solutions.map((solution, index) => {

                  const Icon =
                    solutionIcons[index % solutionIcons.length];

                  return (

                    <div
                      key={solution}
                      className="
                        group
                        rounded-[30px]
                        border
                        border-gray-200
                        bg-white
                        p-8
                        transition-all
                        duration-300
                        hover:-translate-y-2
                        hover:border-[#155EEF]
                        hover:shadow-xl
                      "
                    >

                      <div
                        className="
                          flex
                          h-16
                          w-16
                          items-center
                          justify-center
                          rounded-2xl
                          bg-[#EEF4FF]
                          text-[#155EEF]
                          transition-all
                          duration-300
                          group-hover:scale-110
                        "
                      >

                        <Icon size={30} />

                      </div>

                      <h3
                        className="
                          mt-8
                          text-2xl
                          font-bold
                          text-[#071B3A]
                        "
                      >
                        {solution}
                      </h3>

                      <p
                        className="
                          mt-4
                          leading-8
                          text-gray-600
                        "
                      >
                        Tailored consulting and delivery services
                        aligned with your operational priorities,
                        business objectives and long-term growth.
                      </p>

                    </div>

                  );

                })}

              </div>

            </div>

          </section>

          {/* =======================================================
              TECHNOLOGIES
          ======================================================= */}

          <section className="py-24">

            <div
              className="
                mx-auto
                max-w-7xl
                px-6
                lg:px-8
              "
            >

              <div className="mb-14">

                <p
                  className="
                    text-sm
                    font-semibold
                    uppercase
                    tracking-[0.3em]
                    text-[#155EEF]
                  "
                >
                  Technologies
                </p>

                <h2
                  className="
                    mt-5
                    text-5xl
                    font-black
                    tracking-[-0.04em]
                    text-[#071B3A]
                  "
                >
                  Platforms & Technologies
                </h2>

                <p
                  className="
                    mt-6
                    max-w-3xl
                    text-lg
                    leading-8
                    text-gray-600
                  "
                >
                  Leveraging modern enterprise platforms and emerging
                  technologies to deliver scalable, future-ready
                  solutions.
                </p>

              </div>

              <div className="flex flex-wrap gap-4">

                {technologies.map((technology) => (

                  <span
                    key={technology}
                    className="
                      rounded-full
                      border
                      border-gray-200
                      bg-white
                      px-6
                      py-3
                      font-semibold
                      text-[#071B3A]
                      transition-all
                      duration-300
                      hover:border-[#155EEF]
                      hover:bg-[#EEF4FF]
                    "
                  >
                    {technology}
                  </span>

                ))}

              </div>

            </div>

          </section>

          {/* =======================================================
              CTA
          ======================================================= */}

          <section className="border-t border-gray-200 bg-[#F8FAFC] py-24">

            <div
              className="
                mx-auto
                max-w-4xl
                px-6
                text-center
              "
            >

              <p
                className="
                  text-sm
                  font-semibold
                  uppercase
                  tracking-[0.3em]
                  text-[#155EEF]
                "
              >
                Get In Touch
              </p>

              <h2
                className="
                  mt-6
                  text-5xl
                  font-black
                  tracking-[-0.04em]
                  text-[#071B3A]
                  lg:text-6xl
                "
              >
                Let's Discuss Your
                <br />
                Industry Requirements
              </h2>

              <p
                className="
                  mx-auto
                  mt-8
                  max-w-3xl
                  text-lg
                  leading-9
                  text-gray-600
                "
              >
                Whether you're planning a transformation programme,
                expanding your technology capabilities or looking
                for specialist talent, our team is ready to help.

              </p>

              <div
                className="
                  mt-14
                  flex
                  flex-wrap
                  justify-center
                  gap-5
                "
              >

                <Link
                  href="/contact"
                  className="
                    inline-flex
                    items-center
                    gap-3
                    rounded-2xl
                    bg-[#155EEF]
                    px-8
                    py-4
                    font-semibold
                    text-white
                    transition-all
                    duration-300
                    hover:bg-[#0E4CD3]
                  "
                >

                  Contact Us

                  <ArrowRight size={18} />

                </Link>

                <Link
                  href="/services"
                  className="
                    rounded-2xl
                    border
                    border-gray-300
                    px-8
                    py-4
                    font-semibold
                    text-[#071B3A]
                    transition-all
                    duration-300
                    hover:border-[#155EEF]
                    hover:text-[#155EEF]
                  "
                >
                  Explore Services
                </Link>

              </div>

            </div>

          </section>

        </>

      );

    }
