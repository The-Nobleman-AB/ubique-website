import {
  Building2,
  Cpu,
  Users,
  ArrowRight,
} from "lucide-react";

const categories = [
  {
    title: "Company News",
    description:
      "Announcements, milestones, partnerships and important updates from Ubique Systems.",
    icon: Building2,
  },
  {
    title: "Technology Updates",
    description:
      "Enterprise technology developments and perspectives relevant to our clients and consultants.",
    icon: Cpu,
  },
  {
    title: "Careers",
    description:
      "Recruitment initiatives, hiring announcements and opportunities across our global teams.",
    icon: Users,
  },
];

export default function LatestUpdates() {
  return (
    <section className="bg-[#F8FAFC] py-32">

      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <div className="max-w-3xl">

          <p
            className="
              uppercase
              tracking-[0.3em]
              font-semibold
              text-[#155EEF]
            "
          >
            LATEST UPDATES
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
            What You'll
            Find Here
          </h2>

          <p
            className="
              mt-8
              text-xl
              leading-9
              text-gray-600
            "
          >
            As Ubique grows, this section will showcase
            meaningful company updates, technology
            developments and career announcements.
          </p>

        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 lg:grid-cols-3">

          {categories.map((item) => {

            const Icon = item.icon;

            return (

              <div
                key={item.title}
                className="
                  group
                  rounded-[32px]
                  border
                  border-gray-200
                  bg-white
                  p-10
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
                  "
                >

                  <Icon
                    size={30}
                    className="
                      text-[#155EEF]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />

                </div>

                <h3
                  className="
                    mt-8
                    text-3xl
                    font-black
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

                <div
                  className="
                    mt-10
                    flex
                    items-center
                    justify-between
                    border-t
                    border-gray-100
                    pt-6
                  "
                >

                  <span
                    className="
                      text-sm
                      font-semibold
                      uppercase
                      tracking-[0.2em]
                      text-[#155EEF]
                    "
                  >
                    Updates Coming
                  </span>

                  <ArrowRight
                    size={18}
                    className="
                      text-[#155EEF]
                      transition-transform
                      duration-300
                      group-hover:translate-x-1
                    "
                  />

                </div>

              </div>

            );

          })}

        </div>

      </div>

    </section>
  );
}