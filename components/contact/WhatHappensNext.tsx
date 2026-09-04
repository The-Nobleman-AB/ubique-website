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
    <section className="section-y-lg bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="grid items-end gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent">What happens next</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              From First Conversation To Long-Term Partnership.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-muted text-xl leading-relaxed">
              Every enquiry receives the attention of experienced workforce
              specialists who focus on understanding your business before
              recommending solutions.
            </p>
          </div>
        </div>

        {/* Steps */}

        <div className="mt-24 grid gap-8 lg:grid-cols-3">
          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <div
                key={step.number}
                className="group rounded-panel border-line hover:shadow-lift border bg-white p-10 transition-all duration-500"
              >
                <div className="flex items-center justify-between">
                  <div className="rounded-control bg-brand-tint flex h-16 w-16 items-center justify-center">
                    <Icon size={28} className="text-brand" />
                  </div>

                  <span className="display-3 text-brand/15 font-bold">
                    {step.number}
                  </span>
                </div>

                <h3 className="text-navy mt-8 text-3xl leading-tight font-bold">
                  {step.title}
                </h3>

                <p className="text-muted mt-6 text-lg leading-relaxed">
                  {step.description}
                </p>

                <ArrowRight
                  className="text-brand mt-10 transition-transform duration-200 group-hover:translate-x-2"
                  size={24}
                />
              </div>
            );
          })}
        </div>

        {/* Bottom Trust Statement */}

        <div className="rounded-panel bg-navy relative mt-32 overflow-hidden">
          {/* Glow */}

          <div className="bg-brand/20 absolute -top-28 -right-28 h-[420px] w-[420px] rounded-full blur-[140px]" />

          <div className="relative z-10 grid items-center gap-16 px-12 py-16 lg:grid-cols-12 lg:px-16 lg:py-20">
            {/* Left */}

            <div className="lg:col-span-5">
              <p className="eyebrow text-accent">Our commitment</p>

              <h3 className="display-2 display-2 mt-4 font-bold text-white">
                Responsive.
                <br />
                Transparent.
                <br />
                Collaborative.
              </h3>
            </div>

            {/* Right */}

            <div className="lg:col-span-7">
              <p className="text-xl leading-relaxed text-white/70">
                We believe meaningful partnerships begin with clear
                communication. From your first enquiry to the successful
                delivery of workforce solutions, you'll work with a team that
                values responsiveness, transparency and long-term collaboration.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
