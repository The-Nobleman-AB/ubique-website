"use client";

import { useEffect, useState } from "react";
import CountUp from "react-countup";
import { useReducedMotion } from "framer-motion";

import { countryCount } from "@/data/offices";
import { practices } from "@/data/practices";
import { siteConfig, yearsInBusinessRounded } from "@/lib/site";

/**
 * Headline numbers.
 *
 * Every figure here is derived from data in the repo or from a claim the live
 * site already makes — nothing is an unsourced marketing number. If a metric
 * can't be pointed at a source, it doesn't belong on the homepage.
 */

const metrics = [
  {
    value: yearsInBusinessRounded,
    suffix: "+",
    label: "Years in enterprise IT",
    note: "Recruitment and consulting since 2000",
    tone: "brand" as const,
  },
  {
    value: siteConfig.consultantCount,
    suffix: "+",
    label: "Consultants worldwide",
    note: "Across our own offices and client delivery teams",
    tone: "accent" as const,
  },
  {
    value: countryCount,
    suffix: "+",
    label: "Countries with a presence",
    note: "Across Asia-Pacific, Europe and the Americas",
    tone: "brand" as const,
  },
  {
    value: practices.length,
    suffix: "",
    label: "Technology practices",
    note: "SAP, Oracle, Salesforce, Dynamics, cloud, data, engineering",
    tone: "accent" as const,
  },
];

export default function Metrics() {
  /* CountUp animates a number that carries meaning — so when motion is
     reduced, render the final value rather than a faster animation. */
  const reduced = useReducedMotion();

  /* CountUp renders nothing on the server, which left the server-rendered HTML
     showing "+ Years in enterprise IT" with no figure at all — bad for anyone
     with JS blocked, and worse for crawlers reading a stat block whose entire
     point is the number.
     
     So the real value is rendered first, on the server and on the client's
     first pass, and the animation only takes over after mount. Same markup on
     both sides, so no hydration mismatch. */
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    if (!reduced) setAnimate(true);
  }, [reduced]);

  return (
    <section className="section-y-sm border-line border-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="eyebrow text-brand text-center">
          Trusted globally since day one
        </h2>

        <dl className="mt-12 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
          {metrics.map((metric) => (
            <div key={metric.label} className="text-center">
              <dd
                className={`stat-xl font-bold ${
                  metric.tone === "brand" ? "text-brand" : "text-accent"
                }`}
              >
                {animate ? (
                  <CountUp
                    end={metric.value}
                    duration={1.6}
                    enableScrollSpy
                    scrollSpyOnce
                  />
                ) : (
                  metric.value
                )}
                {metric.suffix}
              </dd>

              <dt className="text-navy mt-3 font-semibold">{metric.label}</dt>

              <p className="text-muted mx-auto mt-1.5 max-w-[22ch] text-sm leading-snug">
                {metric.note}
              </p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
