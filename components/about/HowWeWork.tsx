import SectionHeader from "@/components/ui/SectionHeader";

/**
 * How we work.
 *
 * Replaces three separate sections — "How We Think", "The Ubique Difference"
 * and "Why Clients Stay" — that between them made the same four claims twelve
 * times. Consolidated into four principles, each stated as something we
 * actually do rather than something we believe.
 */

const principles = [
  {
    title: "We tell you when the brief is wrong",
    body: "Most searches that stall were mis-specified, not under-resourced. If a role is priced below the market, scoped for a person who doesn't exist, or classified inside IR35 when it's described as outside, we say so before we start — not three weeks in.",
  },
  {
    title: "We organise by platform, not by adjective",
    body: "Seven technology practices, each a standing team of specialists. The person screening an S/4HANA candidate has worked on S/4HANA programmes. That's why our shortlists are shorter and land better.",
  },
  {
    title: "We work the market you're hiring in",
    body: "Notice periods in India run to three months. German SAP roles often need working German. UK contracts turn on status determination. We plan around the market's actual constraints rather than a global average that fits nowhere.",
  },
  {
    title: "We staff what we recommend",
    body: "Our consultants come out of the same practices we recruit into. So advice doesn't arrive as a document from someone who won't be there for delivery — we can put the team behind it.",
  },
];

export default function HowWeWork() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="How we work"
          title="Four things that decide whether this goes well"
          lead="Every firm in this sector claims partnership, expertise and a long-term view. These are the specific behaviours behind those words."
        />

        <ol className="border-line mt-14 border-t">
          {principles.map((principle, index) => (
            <li
              key={principle.title}
              className="border-line grid gap-x-10 gap-y-4 border-b py-9 lg:grid-cols-12"
            >
              <span
                aria-hidden="true"
                className="text-muted/50 font-mono text-sm tabular-nums lg:col-span-1"
              >
                {String(index + 1).padStart(2, "0")}
              </span>

              <h3 className="display-4 text-navy font-semibold lg:col-span-4">
                {principle.title}
              </h3>

              <p className="text-muted leading-relaxed lg:col-span-7">
                {principle.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
