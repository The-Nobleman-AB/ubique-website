"use client";

import Image from "next/image";

export default function LifeAtUbique() {
  return (
    <section className="section-y-lg overflow-hidden bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}

        <div className="grid items-end gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent">Life at UBIQUE</p>

            <h2 className="display-2 text-navy mt-4 font-bold">
              Great Teams Build Great Companies.
            </h2>
          </div>

          <div className="lg:col-span-7">
            <p className="text-muted text-xl leading-relaxed">
              Behind every successful partnership is a passionate team of
              consultants, recruiters and technology specialists committed to
              helping organisations and professionals succeed together.
            </p>
          </div>
        </div>

        {/* Image Composition */}

        <div className="mt-24 grid gap-8 lg:grid-cols-12">
          {/* Large Image */}

          <div className="lg:col-span-7">
            <div className="rounded-panel overflow-hidden">
              <Image
                src="/images/about/team-1.jpg"
                alt="Ubique Team"
                width={900}
                height={900}
                className="h-[720px] w-full object-cover transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right Column */}

          <div className="flex flex-col gap-8 lg:col-span-5">
            <div className="rounded-panel overflow-hidden">
              <Image
                src="/images/about/team-2.jpg"
                alt="Collaboration"
                width={700}
                height={420}
                className="h-[340px] w-full object-cover transition-transform duration-500"
              />
            </div>

            <div className="rounded-panel bg-navy relative flex-1 overflow-hidden p-10">
              <div className="bg-brand/20 absolute top-[-120px] right-[-120px] h-[320px] w-[320px] rounded-full blur-[120px]" />

              <div className="relative z-10">
                <p className="eyebrow text-accent">Our culture</p>

                <h3 className="display-3 mt-4 font-bold text-white">
                  Curious. Collaborative. Committed.
                </h3>

                <p className="mt-8 text-lg leading-relaxed text-white/70">
                  We believe the strongest ideas emerge when diverse
                  perspectives come together with a shared commitment to
                  excellence.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content */}

        <div className="mt-28 grid gap-16 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="eyebrow text-accent">What defines US</p>

            <h3 className="display-2 display-2 text-navy mt-4 font-bold">
              People Are Our Greatest Strength.
            </h3>
          </div>

          <div className="lg:col-span-7">
            <p className="text-muted text-xl leading-relaxed">
              At Ubique, learning never stops. We encourage curiosity, celebrate
              collaboration and create an environment where our people
              continuously develop alongside the industries and technologies
              they support.
            </p>

            <div className="mt-10 grid gap-6 md:grid-cols-2">
              <div className="rounded-card border-line border p-8">
                <h4 className="text-navy text-2xl font-bold">
                  Continuous Learning
                </h4>

                <p className="text-muted mt-4 leading-relaxed">
                  We invest in developing expertise, encouraging our teams to
                  stay ahead of changing technologies and evolving client
                  expectations.
                </p>
              </div>

              <div className="rounded-card border-line border p-8">
                <h4 className="text-navy text-2xl font-bold">Shared Success</h4>

                <p className="text-muted mt-4 leading-relaxed">
                  Our culture is built around teamwork, accountability and a
                  shared commitment to delivering exceptional outcomes for both
                  clients and candidates.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Closing Statement */}

        <div className="border-line mt-32 border-t pt-20">
          <div className="max-w-5xl">
            <p className="eyebrow text-accent">Our people</p>

            <h3 className="display-2 display-2 text-navy mt-4 font-bold">
              Every successful client partnership begins with an exceptional
              team.
            </h3>

            <p className="text-muted mt-8 max-w-4xl text-xl leading-relaxed">
              The relationships we build with our clients are a direct
              reflection of the people who represent Ubique every day. Their
              expertise, integrity and commitment continue to shape our
              reputation across global markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
