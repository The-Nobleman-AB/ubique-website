import {
  Cpu,
  Cloud,
  Database,
  ShieldCheck,
  Briefcase,
  Users,
  Building2,
  BrainCircuit,
  Network,
  ArrowUpRight,
} from "lucide-react";

const topics = [
  {
    title: "SAP",
    icon: Building2,
  },
  {
    title: "Cloud",
    icon: Cloud,
  },
  {
    title: "Artificial Intelligence",
    icon: BrainCircuit,
  },
  {
    title: "Microsoft Technologies",
    icon: Cpu,
  },
  {
    title: "Enterprise Solutions",
    icon: Network,
  },
  {
    title: "HR Consulting",
    icon: Users,
  },
  {
    title: "Staffing Solutions",
    icon: Briefcase,
  },
  {
    title: "Cybersecurity",
    icon: ShieldCheck,
  },
  {
    title: "Data & Analytics",
    icon: Database,
  },
];

export default function TopicsWeFollow() {
  return (
    <section className="bg-white py-32">

      <div className="mx-auto max-w-7xl px-6">

        <div className="max-w-4xl mx-auto text-center">

          <p
            className="
              uppercase
              tracking-[0.3em]
              font-semibold
              text-[#155EEF]
            "
          >
            TOPICS WE FOLLOW
          </p>

          <h2
            className="
              mt-6
              text-5xl
              lg:text-6xl
              font-black
              leading-tight
              text-[#071B3A]
            "
          >
            Areas Of Expertise
            And Conversation
          </h2>

          <p
            className="
              mt-8
              text-xl
              leading-9
              text-gray-600
            "
          >
            As our knowledge centre evolves,
            these are the areas where we'll
            share updates, perspectives and
            company news.
          </p>

        </div>

        <div
          className="
            mt-20
            flex
            flex-wrap
            justify-center
            gap-5
          "
        >

          {topics.map((topic) => {

            const Icon = topic.icon;

            return (

              <div
                key={topic.title}
                className="
                  group
                  inline-flex
                  items-center
                  gap-4
                  rounded-full
                  border
                  border-gray-200
                  bg-[#F8FAFC]
                  px-7
                  py-4
                  transition-all
                  duration-300
                  hover:border-[#155EEF]
                  hover:bg-[#EEF4FF]
                  hover:shadow-lg
                "
              >

                <Icon
                  size={20}
                  className="
                    text-[#155EEF]
                    transition-transform
                    duration-300
                    group-hover:scale-110
                  "
                />

                <span
                  className="
                    font-semibold
                    text-[#071B3A]
                  "
                >
                  {topic.title}
                </span>

                <ArrowUpRight
                  size={16}
                  className="
                    text-[#155EEF]
                    opacity-0
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    group-hover:opacity-100
                  "
                />

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}