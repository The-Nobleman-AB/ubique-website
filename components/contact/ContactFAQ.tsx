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
    <section className="section-y-lg bg-white">
      <div className="mx-auto max-w-5xl px-6">
        <div className="text-center">
          <p className="eyebrow text-accent">Frequently asked questions</p>

          <h2 className="display-2 text-navy mt-4 font-bold">
            Answers Before We Even Speak.
          </h2>

          <p className="text-muted mx-auto mt-8 max-w-3xl text-xl leading-relaxed">
            Here are some of the questions we're most frequently asked by
            organisations looking to partner with Ubique.
          </p>
        </div>

        <div className="mt-20 space-y-5">
          {faqs.map((faq, index) => (
            <div
              key={faq.question}
              className="rounded-card border-line overflow-hidden border transition-all duration-200"
            >
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                className="flex w-full items-center justify-between px-8 py-7 text-left"
              >
                <span className="text-navy pr-6 text-2xl font-bold">
                  {faq.question}
                </span>

                <ChevronDown
                  size={26}
                  className={`transition-transform duration-200 ${
                    open === index ? "text-brand rotate-180" : "text-muted/70"
                  } `}
                />
              </button>

              {open === index && (
                <div className="px-8 pb-8">
                  <div className="bg-surface mb-7 h-px" />

                  <p className="text-muted text-lg leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Bottom Note */}

        <div className="rounded-panel bg-navy mt-24 px-10 py-12 text-center lg:px-14 lg:py-14">
          <p className="eyebrow text-accent">STILL HAVE QUESTIONS?</p>

          <h3 className="display-3 mt-4 font-bold text-white">
            We'd Love To Hear From You.
          </h3>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            Whether you're exploring recruitment solutions, workforce consulting
            or simply want to learn more about Ubique, our team is here to help.
          </p>
        </div>
      </div>
    </section>
  );
}
