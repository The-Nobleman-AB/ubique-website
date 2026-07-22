"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What types of organisations does Ubique support?",
    answer:
      "We partner with organisations of varying sizes across multiple industries, helping them build technology teams through specialist recruitment, workforce consulting and long-term talent solutions.",
  },
  {
    question: "How quickly will someone respond to my enquiry?",
    answer:
      "Our team aims to respond to all genuine business enquiries within one business day. More complex workforce requirements may require additional review before an initial consultation is scheduled.",
  },
  {
    question: "Can Ubique support international hiring requirements?",
    answer:
      "Yes. We support organisations operating across international markets, adapting our workforce solutions to local business requirements while maintaining a consistent partnership experience.",
  },
  {
    question: "Do you provide contract as well as permanent hiring?",
    answer:
      "Yes. Our services include permanent recruitment, contract staffing, managed teams and workforce consulting depending on your organisation's requirements.",
  },
  {
    question: "I'm looking for a job. Should I use this contact form?",
    answer:
      "For career opportunities and job applications, please visit our Careers page where you'll find current openings and our candidate application portal.",
  },
];

export default function ContactFAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section
      className="
      py-36
      bg-white
      "
    >
      <div className="max-w-5xl mx-auto px-6">

        <div className="text-center">

          <p
            className="
            uppercase
            tracking-[0.35em]
            text-[#12B76A]
            font-semibold
            "
          >
            FREQUENTLY ASKED QUESTIONS
          </p>

          <h2
            className="
            mt-6
            text-5xl
            lg:text-6xl
            font-black
            leading-[0.95]
            tracking-[-0.03em]
            text-[#071B3A]
            "
          >
            Answers Before
            We Even Speak.
          </h2>

          <p
            className="
            mt-8
            text-xl
            leading-9
            text-gray-600
            max-w-3xl
            mx-auto
            "
          >
            Here are some of the questions we're most
            frequently asked by organisations looking
            to partner with Ubique.
          </p>

        </div>

        <div className="mt-20 space-y-5">

          {faqs.map((faq, index) => (

            <div
              key={faq.question}
              className="
              rounded-[28px]
              border
              border-gray-200
              overflow-hidden
              transition-all
              duration-300
              "
            >

              <button
                onClick={() =>
                  setOpen(open === index ? -1 : index)
                }
                className="
                w-full
                flex
                items-center
                justify-between
                text-left
                px-8
                py-7
                "
              >

                <span
                  className="
                  text-2xl
                  font-black
                  text-[#071B3A]
                  pr-6
                  "
                >
                  {faq.question}
                </span>

                <ChevronDown
                  size={26}
                  className={`
                    transition-transform
                    duration-300
                    ${
                      open === index
                        ? "rotate-180 text-[#155EEF]"
                        : "text-gray-400"
                    }
                  `}
                />

              </button>

              {open === index && (
                <div
                  className="
                  px-8
                  pb-8
                  "
                >

                  <div
                    className="
                    h-px
                    bg-gray-200
                    mb-7
                    "
                  />

                  <p
                    className="
                    text-lg
                    leading-8
                    text-gray-600
                    "
                  >
                    {faq.answer}
                  </p>

                </div>
              )}

            </div>

          ))}

        </div>

        {/* Bottom Note */}

        <div
          className="
          mt-24
          rounded-[36px]
          bg-[#071B3A]
          px-10
          py-12
          lg:px-14
          lg:py-14
          text-center
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
            STILL HAVE QUESTIONS?
          </p>

          <h3
            className="
            mt-5
            text-4xl
            lg:text-5xl
            font-black
            leading-tight
            text-white
            "
          >
            We'd Love To Hear From You.
          </h3>

          <p
            className="
            mt-6
            max-w-3xl
            mx-auto
            text-lg
            leading-8
            text-white/70
            "
          >
            Whether you're exploring recruitment solutions,
            workforce consulting or simply want to learn
            more about Ubique, our team is here to help.
          </p>

        </div>

      </div>

    </section>
  );
}