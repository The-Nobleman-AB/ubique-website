"use client";

import {
  ClipboardCheck,
  MessagesSquare,
  Users,
  ArrowRight,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ClipboardCheck,
    title: "We Review Your Enquiry",
    description:
      "Our team reviews your enquiry to understand your organisation, requirements and business objectives before assigning the appropriate specialist.",
  },
  {
    number: "02",
    icon: MessagesSquare,
    title: "We'll Reach Out",
    description:
      "A member of our team will contact you to discuss your hiring goals, workforce challenges or consulting requirements in greater detail.",
  },
  {
    number: "03",
    icon: Users,
    title: "We Build The Right Solution",
    description:
      "Together we'll define the most appropriate workforce solution—whether that's specialist recruitment, consulting or long-term partnership.",
  },
];

export default function WhatHappensNext() {
  return (
    <section
      className="
      py-36
      bg-[#F8FAFC]
      "
    >
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}

        <div
          className="
          grid
          lg:grid-cols-12
          gap-16
          items-end
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
              WHAT HAPPENS NEXT
            </p>

            <h2
              className="
              mt-6
              text-5xl
              lg:text-6xl
              font-black
              leading-[0.95]
              text-[#071B3A]
              "
            >
              From First
              Conversation
              To Long-Term
              Partnership.
            </h2>

          </div>

          <div className="lg:col-span-7">

            <p
              className="
              text-xl
              leading-9
              text-gray-600
              "
            >
              Every enquiry receives the attention of
              experienced workforce specialists who focus
              on understanding your business before
              recommending solutions.
            </p>

          </div>

        </div>

        {/* Steps */}

        <div
          className="
          mt-24
          grid
          lg:grid-cols-3
          gap-8
          "
        >

          {steps.map((step) => {

            const Icon = step.icon;

            return (

              <div
                key={step.number}
                className="
                group
                rounded-[36px]
                border
                border-gray-200
                bg-white
                p-10
                transition-all
                duration-500
                hover:-translate-y-2
                hover:shadow-xl
                "
              >

                <div
                  className="
                  flex
                  items-center
                  justify-between
                  "
                >

                  <div
                    className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-[#EEF4FF]
                    flex
                    items-center
                    justify-center
                    "
                  >

                    <Icon
                      size={28}
                      className="text-[#155EEF]"
                    />

                  </div>

                  <span
                    className="
                    text-[42px]
                    font-black
                    text-[#155EEF]/15
                    "
                  >
                    {step.number}
                  </span>

                </div>

                <h3
                  className="
                  mt-8
                  text-3xl
                  font-black
                  leading-tight
                  text-[#071B3A]
                  "
                >
                  {step.title}
                </h3>

                <p
                  className="
                  mt-6
                  text-lg
                  leading-8
                  text-gray-600
                  "
                >
                  {step.description}
                </p>

                <ArrowRight
                  className="
                  mt-10
                  text-[#155EEF]
                  transition-transform
                  duration-300
                  group-hover:translate-x-2
                  "
                  size={24}
                />
              </div>

            );

          })}

        </div>

        {/* Bottom Trust Statement */}

        <div
          className="
          mt-32
          rounded-[40px]
          overflow-hidden
          bg-[#071B3A]
          relative
          "
        >

          {/* Glow */}

          <div
            className="
            absolute
            -right-28
            -top-28
            w-[420px]
            h-[420px]
            rounded-full
            bg-[#155EEF]/20
            blur-[140px]
            "
          />

          <div
            className="
            relative
            z-10
            grid
            lg:grid-cols-12
            gap-16
            items-center
            px-12
            py-16
            lg:px-16
            lg:py-20
            "
          >

            {/* Left */}

            <div className="lg:col-span-5">

              <p
                className="
                uppercase
                tracking-[0.35em]
                text-[#12B76A]
                font-semibold
                "
              >
                OUR COMMITMENT
              </p>

              <h3
                className="
                mt-6
                text-5xl
                lg:text-[58px]
                font-black
                leading-[0.98]
                text-white
                "
              >
                Responsive.
                <br />
                Transparent.
                <br />
                Collaborative.
              </h3>

            </div>

            {/* Right */}

            <div className="lg:col-span-7">

              <p
                className="
                text-xl
                leading-9
                text-white/70
                "
              >
                We believe meaningful partnerships begin with
                clear communication. From your first enquiry to
                the successful delivery of workforce solutions,
                you'll work with a team that values responsiveness,
                transparency and long-term collaboration.
              </p>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}