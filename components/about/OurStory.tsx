import SectionHeader from "@/components/ui/SectionHeader";
import { yearsInBusinessRounded } from "@/lib/site";

/**
 * The company story as an actual timeline rather than three paragraphs of
 * "growth". Each chapter says what changed, not just that things improved.
 */

const chapters = [
  {
    era: "2000 — the beginning",
    title: "One belief, repeatedly tested",
    body: "Ubique Systems was established in 2000, from a straightforward observation: organisations were buying CVs when what they needed was someone who understood the technology, the business objective and the difference between the two. We built a recruitment practice around consultants who could tell them apart.",
  },
  {
    era: "The evolution",
    title: "Recruitment became consulting",
    body: "As enterprise technology got more specialised, filling a role stopped being separable from understanding the programme it sat inside. Our practices formed around the platforms clients actually run — SAP first, then Oracle, Salesforce, Dynamics, cloud and data — and advisory work grew out of the same benches.",
  },
  {
    era: "Today",
    title: "One partner across every market you operate in",
    body: `Offices across Asia-Pacific, Europe and the Americas, ISO 27001-certified, and structured so a programme spanning five countries has one point of contact rather than five agencies. ${yearsInBusinessRounded}+ years in, the original belief has held up.`,
  },
];

export default function OurStory() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Our story"
              title="Growing with the technology our clients run"
            />

            <p className="text-muted mt-6 leading-relaxed">
              Every chapter has been shaped by the organisations we support and
              the belief that exceptional teams create exceptional businesses.
            </p>
          </div>

          <ol className="lg:col-span-8">
            {chapters.map((chapter, index) => (
              <li
                key={chapter.era}
                className="border-line relative border-l pb-10 pl-8 last:pb-0"
              >
                <span
                  aria-hidden="true"
                  className="bg-brand absolute top-1.5 -left-[5px] h-2.5 w-2.5 rounded-full"
                />

                <p className="eyebrow text-brand">
                  {String(index + 1).padStart(2, "0")} · {chapter.era}
                </p>

                <h3 className="display-4 text-navy mt-3 font-semibold">
                  {chapter.title}
                </h3>

                <p className="text-muted mt-3 leading-relaxed">
                  {chapter.body}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
