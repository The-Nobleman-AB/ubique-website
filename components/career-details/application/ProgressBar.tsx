"use client";

import { Check } from "lucide-react";

interface ProgressBarProps {
  currentStep: number;
}

const steps = [
  {
    number: 1,
    title: "Personal",
    subtitle: "Basic Details",
  },
  {
    number: 2,
    title: "Professional",
    subtitle: "Experience",
  },
  {
    number: 3,
    title: "Documents",
    subtitle: "Resume Upload",
  },
  {
    number: 4,
    title: "Review",
    subtitle: "Final Submission",
  },
];

export default function ProgressBar({
  currentStep,
}: ProgressBarProps) {
  const progress = ((currentStep - 1) / (steps.length - 1)) * 100;

  return (
    <div className="mt-14">

      {/* Header */}

      <div className="flex items-end justify-between">

        <div>

          <p
            className="
            text-sm
            uppercase
            tracking-[0.28em]
            font-semibold
            text-[#155EEF]
            "
          >
            Application Progress
          </p>

          <h3
            className="
            mt-3
            text-3xl
            font-black
            tracking-[-0.03em]
            text-[#071B3A]
            "
          >
            {Math.round(progress)}% Complete
          </h3>

        </div>

        <p
          className="
          text-lg
          font-semibold
          text-gray-500
          "
        >
          Step {currentStep} of {steps.length}
        </p>

      </div>

      {/* Animated Progress */}

      <div
        className="
        mt-8
        h-3
        overflow-hidden
        rounded-full
        bg-gray-200
        "
      >

        <div
          className="
          h-full
          rounded-full
          bg-gradient-to-r
          from-[#071B3A]
          via-[#155EEF]
          to-[#12B76A]
          transition-all
          duration-700
          ease-out
          "
          style={{
            width: `${progress}%`,
          }}
        />

      </div>

      {/* Cards */}

      <div
        className="
        mt-10
        grid
        gap-5
        md:grid-cols-4
        "
      >

        {steps.map((step) => {

          const completed =
            currentStep > step.number;

          const active =
            currentStep === step.number;

          return (

            <div
              key={step.number}
              className={`
                relative
                overflow-hidden
                rounded-[24px]
                border
                p-6
                transition-all
                duration-500

                ${
                  completed
                    ? "border-[#12B76A] bg-[#ECFDF3]"
                    : active
                    ? "border-[#155EEF] bg-[#EEF4FF] shadow-[0_10px_35px_rgba(21,94,239,0.15)]"
                    : "border-gray-200 bg-white"
                }
              `}
            >

              <div
                className={`
                  flex
                  h-12
                  w-12
                  items-center
                  justify-center
                  rounded-full
                  text-lg
                  font-bold

                  ${
                    completed
                      ? "bg-[#12B76A] text-white"
                      : active
                      ? "bg-[#155EEF] text-white"
                      : "bg-gray-100 text-gray-500"
                  }
                `}
              >

                {completed ? (
                  <Check size={22} />
                ) : (
                  step.number
                )}

              </div>

              <h4
                className="
                mt-6
                text-xl
                font-black
                text-[#071B3A]
                "
              >
                {step.title}
              </h4>

              <p
                className="
                mt-2
                text-sm
                leading-6
                text-gray-500
                "
              >
                {step.subtitle}
              </p>

              <div className="mt-6">

                {completed && (

                  <span
                    className="
                    inline-flex
                    rounded-full
                    bg-[#12B76A]
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-white
                    "
                  >
                    Completed
                  </span>

                )}

                {active && (

                  <span
                    className="
                    inline-flex
                    rounded-full
                    bg-[#155EEF]
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-white
                    "
                  >
                    Current Step
                  </span>

                )}

                {!completed && !active && (

                  <span
                    className="
                    inline-flex
                    rounded-full
                    bg-gray-100
                    px-3
                    py-1
                    text-xs
                    font-semibold
                    text-gray-500
                    "
                  >
                    Upcoming
                  </span>

                )}

              </div>

            </div>

          );

        })}

      </div>

    </div>
  );
}