import SectionHeader from "@/components/ui/SectionHeader";

/**
 * What we're seeing in the market, drawn from the same observations that sit
 * on the regional pages — real patterns from placements rather than
 * commentary written to fill a page.
 */

const observations = [
  {
    market: "Germany & DACH",
    body: "Mainstream maintenance for SAP ECC ends in 2027, and the resulting S/4HANA migration wave has made experienced consultants the scarcest resource in the market. Programmes that start resourcing late pay significantly more for less experience.",
  },
  {
    market: "United Kingdom",
    body: "Since the off-payroll reforms, contractor supply lives or dies on status determination. The most common failure we see is a role advertised as outside scope that plainly isn't — which unwinds late and expensively.",
  },
  {
    market: "India",
    body: "Three-month notice periods are standard and counter-offers at resignation are routine. A start date that assumes four weeks will slip. Planning backwards from the notice period rather than the offer date is the single biggest fix available.",
  },
  {
    market: "United States",
    body: "The same job title can carry a 40% rate spread between metro markets. Clients who compress interview loops win; those running four rounds over five weeks usually restart the search.",
  },
  {
    market: "Across every market",
    body: "Data and AI is the fastest-growing demand we see, and the hardest to assess. The gap between someone who has trained a model and someone who has kept one running in production is wider than most job specs acknowledge.",
  },
  {
    market: "Nearshore",
    body: "Prague, Bratislava, Warsaw and Bucharest now absorb work that would once have gone offshore, because same-timezone collaboration is worth the cost difference on change-heavy programmes.",
  },
];

export default function TopicsWeFollow() {
  return (
    <section className="section-y bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeader
          eyebrow="What we're seeing"
          title="Patterns from the placements we're running now"
          lead="Not predictions — just what keeps coming up across the markets we work in."
        />

        <ul className="mt-14 grid gap-x-10 gap-y-8 md:grid-cols-2">
          {observations.map((observation) => (
            <li key={observation.market} className="border-line border-t pt-6">
              <h3 className="eyebrow text-brand">{observation.market}</h3>
              <p className="text-navy mt-3 leading-relaxed">
                {observation.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
