import Image from "next/image";
import { CheckCircle2 } from "lucide-react";

const advantages = [
  {
    title: "Scale Faster",
    description:
      "Access one of the world's largest technology talent pools across software engineering, cloud and enterprise platforms.",
  },
  {
    title: "Access Specialist Skills",
    description:
      "Source highly sought-after professionals in SAP, AI, Data Engineering, Cybersecurity and Cloud technologies.",
  },
  {
    title: "Competitive Economics",
    description:
      "Achieve greater hiring efficiency while maintaining access to highly qualified talent.",
  },
  {
    title: "Global Delivery Capability",
    description:
      "Support international projects through distributed teams operating across multiple time zones.",
  },
];

export default function IndiaAdvantages() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-20 lg:grid-cols-2">
          {/* IMAGE */}

          <div>
            <div className="rounded-panel shadow-panel overflow-hidden">
              <Image
                src="/images/countries/india-workforce.jpg"
                alt="India Technology Workforce"
                width={1200}
                height={900}
                className="h-[650px] w-full object-cover"
              />
            </div>
          </div>

          {/* CONTENT */}

          <div>
            <p className="eyebrow text-brand">
              Why global companies choose india
            </p>

            <h2 className="display-2 mt-4 font-bold">
              Access Talent At Global Scale
            </h2>

            <p className="text-muted mt-8 text-xl leading-relaxed">
              India continues to be a preferred destination for technology
              hiring, offering deep talent availability, specialist expertise
              and strong global delivery capability.
            </p>

            <div className="mt-12 space-y-8">
              {advantages.map((item) => (
                <div key={item.title} className="flex gap-5">
                  <CheckCircle2
                    className="text-accent mt-1 flex-shrink-0"
                    size={24}
                  />

                  <div>
                    <h3 className="text-2xl font-bold">{item.title}</h3>

                    <p className="text-muted mt-2 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
