import Image from "next/image";
import {
  CheckCircle2,
} from "lucide-react";

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
    <section className="py-32 bg-[#F8FAFC]">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          grid
          lg:grid-cols-2
          gap-20
          items-center
          "
        >

          {/* IMAGE */}

          <div>

            <div
              className="
              rounded-[40px]
              overflow-hidden
              shadow-[0_40px_100px_rgba(0,0,0,0.12)]
              "
            >
              <Image
                src="/images/countries/india-workforce.jpg"
                alt="India Technology Workforce"
                width={1200}
                height={900}
                className="
                w-full
                h-[650px]
                object-cover
                "
              />
            </div>

          </div>

          {/* CONTENT */}

          <div>

            <p
              className="
              uppercase
              tracking-[0.3em]
              text-[#155EEF]
              font-semibold
              "
            >
              WHY GLOBAL COMPANIES CHOOSE INDIA
            </p>

            <h2
              className="
              text-5xl
              lg:text-6xl
              font-black
              mt-6
              leading-tight
              "
            >
              Access Talent
              At Global Scale
            </h2>

            <p
              className="
              mt-8
              text-xl
              text-gray-600
              leading-relaxed
              "
            >
              India continues to be a preferred
              destination for technology hiring,
              offering deep talent availability,
              specialist expertise and strong
              global delivery capability.
            </p>

            <div className="mt-12 space-y-8">

              {advantages.map((item) => (
                <div
                  key={item.title}
                  className="
                  flex
                  gap-5
                  "
                >

                  <CheckCircle2
                    className="
                    text-[#12B76A]
                    mt-1
                    flex-shrink-0
                    "
                    size={24}
                  />

                  <div>

                    <h3
                      className="
                      text-2xl
                      font-bold
                      "
                    >
                      {item.title}
                    </h3>

                    <p
                      className="
                      text-gray-600
                      mt-2
                      leading-relaxed
                      "
                    >
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