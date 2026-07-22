"use client";

import { useMemo, useState } from "react";

import { Job } from "@/data/jobs";

import ProgressBar from "./ProgressBar";
import SuccessScreen from "./SuccessScreen";

import Step1Personal from "./steps/Step1Personal";
import Step2Professional from "./steps/Step2Professional";
import Step3Documents from "./steps/Step3Documents";
import Step4Review from "./steps/Step4Review";

export interface ApplicationData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;

  country: string;
  location: string;

  company: string;
  designation: string;
  experience: string;
  qualification: string;
  noticePeriod: string;

  linkedin: string;
  github: string;
  portfolio: string;

  resume: File | null;
  coverLetter: string;

  consent: boolean;
}

interface ApplicationWizardProps {
  job: Job;
}

export default function ApplicationWizard({
  job,
}: ApplicationWizardProps) {
  const [step, setStep] = useState(1);

  const [submitting, setSubmitting] =
    useState(false);

  const [submitted, setSubmitted] =
    useState(false);

  const [applicationId] = useState(() => {
    return `UBQ-${new Date().getFullYear()}-${Math.floor(
      100000 + Math.random() * 900000
    )}`;
  });

  const [data, setData] =
    useState<ApplicationData>({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",

      country: "",
      location: "",

      company: "",
      designation: "",
      experience: "",
      qualification: "",
      noticePeriod: "",

      linkedin: "",
      github: "",
      portfolio: "",

      resume: null,
      coverLetter: "",

      consent: false,
    });

  const canContinue = useMemo(() => {
    switch (step) {
      case 1:
        return (
          data.firstName.trim() !== "" &&
          data.lastName.trim() !== "" &&
          data.email.trim() !== "" &&
          data.phone.trim() !== "" &&
          data.country.trim() !== "" &&
          data.location.trim() !== ""
        );

      case 2:
        return (
          data.experience !== "" &&
          data.qualification !== ""
        );

      case 3:
        return data.resume !== null;

      case 4:
        return data.consent;

      default:
        return false;
    }
  }, [step, data]);

  const tooltipMessage = useMemo(() => {
    switch (step) {
      case 1:
        return "Complete all required personal information to continue.";

      case 2:
        return "Complete the required professional information to continue.";

      case 3:
        return "Please upload your résumé to continue.";

      case 4:
        return "Please accept the declaration before submitting.";

      default:
        return "";
    }
  }, [step]);

  const nextStep = () => {
    if (!canContinue) return;

    setStep((prev) =>
      Math.min(prev + 1, 4)
    );
  };

  const previousStep = () => {
    setStep((prev) =>
      Math.max(prev - 1, 1)
    );
  };

  const submitApplication = async () => {
    if (!canContinue) return;

    setSubmitting(true);

    /**
     * TODO
     *
     * Upload Resume
     * Insert Application
     * Send Confirmation Email
     */

    await new Promise((resolve) =>
      setTimeout(resolve, 1800)
    );

    setSubmitting(false);

    setSubmitted(true);
  };

  if (submitted) {
    return (
      <SuccessScreen
        job={job}
        applicationId={applicationId}
      />
    );
  }

  return (
    <div
      className="
      max-w-5xl
      mx-auto
      px-6
      "
    >
      <div className="max-w-3xl">

        <p
          className="
          uppercase
          tracking-[0.35em]
          font-semibold
          text-[#12B76A]
          "
        >
          APPLY NOW
        </p>

        <h2
          className="
          mt-6
          text-5xl
          lg:text-6xl
          font-black
          tracking-[-0.04em]
          leading-[0.95]
          text-[#071B3A]
          "
        >
          Apply for{" "}

          <span
            className="
            text-[#155EEF]
            "
          >
            {job.title}
          </span>

        </h2>

        <p
          className="
          mt-8
          text-xl
          leading-9
          text-gray-600
          "
        >
          Complete your application in four
          simple steps. Your progress will be
          saved throughout the process.
        </p>

      </div>

      <ProgressBar
        currentStep={step}
      />

      <div
        className="
        mt-14
        rounded-[36px]
        border
        border-gray-200
        bg-white
        p-10
        shadow-[0_25px_80px_rgba(15,23,42,0.06)]
        "
      >
        {step === 1 && (
          <Step1Personal
            data={data}
            setData={setData}
          />
        )}

        {step === 2 && (
          <Step2Professional
            data={data}
            setData={setData}
          />
        )}

        {step === 3 && (
          <Step3Documents
            data={data}
            setData={setData}
          />
        )}

        {step === 4 && (
          <Step4Review
            job={job}
            data={data}
            setData={setData}
          />
        )}

        <div
          className="
          mt-16
          border-t
          border-gray-200
          pt-8
          "
        >

          <div
            className="
            flex
            flex-col-reverse
            gap-5
            md:flex-row
            md:items-center
            md:justify-between
            "
          >

            {/* Previous */}

            <button
              type="button"
              onClick={previousStep}
              disabled={step === 1}
              className="
              rounded-full
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
              disabled:pointer-events-none
              disabled:opacity-40
              "
            >
              ← Previous
            </button>

            {/* Continue / Submit */}

            <div className="relative group">

              {step < 4 ? (

                <button
                  type="button"
                  onClick={nextStep}
                  disabled={!canContinue}
                  className="
                  rounded-full
                  bg-[#071B3A]
                  px-10
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#155EEF]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:bg-[#071B3A]
                  "
                >
                  Continue →
                </button>

              ) : (

                <button
                  type="button"
                  onClick={submitApplication}
                  disabled={!canContinue || submitting}
                  className="
                  rounded-full
                  bg-[#071B3A]
                  px-10
                  py-4
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:bg-[#155EEF]
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                  disabled:hover:bg-[#071B3A]
                  "
                >
                  {submitting
                    ? "Submitting..."
                    : "Submit Application"}
                </button>

              )}

              {/* Tooltip */}

              {!canContinue && (

                <div
                  className="
                  pointer-events-none
                  absolute
                  bottom-full
                  right-0
                  mb-4
                  w-80
                  translate-y-2
                  rounded-2xl
                  bg-[#071B3A]
                  p-5
                  text-sm
                  leading-7
                  text-white
                  opacity-0
                  shadow-2xl
                  transition-all
                  duration-300
                  group-hover:translate-y-0
                  group-hover:opacity-100
                  "
                >

                  {tooltipMessage}

                  <div
                    className="
                    absolute
                    right-8
                    top-full
                    h-4
                    w-4
                    -translate-y-2
                    rotate-45
                    bg-[#071B3A]
                    "
                  />

                </div>

              )}

            </div>

          </div>

        </div>

      </div>

    </div>

  );

}