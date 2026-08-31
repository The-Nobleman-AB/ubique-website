import { AlertTriangle, Info } from "lucide-react";

/**
 * Methodology / provenance note for the India talent report.
 *
 * Every serious market report carries one. This one also does a second job:
 * the figures throughout the report (talent distribution percentages, demand
 * indices, salary bands, hiring timelines) are not currently backed by a
 * named dataset anywhere in this repo.
 *
 * Set `verified` to true — and fill in `source` and `sampleSize` — once the
 * numbers are confirmed. Until then the page says so plainly rather than
 * presenting unattributed figures as fact.
 */

interface ReportProvenanceProps {
  verified?: boolean;
  /** e.g. "Ubique placement data, Jan–Jun 2026" */
  source?: string;
  /** e.g. "1,240 placements across 6 cities" */
  sampleSize?: string;
  /** ISO date the data was compiled. */
  compiledOn?: string;
}

export default function ReportProvenance({
  verified = false,
  source,
  sampleSize,
  compiledOn,
}: ReportProvenanceProps) {
  if (!verified) {
    return (
      <div className="border-warn/30 bg-warn/5 rounded-card mt-12 flex items-start gap-4 border p-6">
        <AlertTriangle
          size={22}
          aria-hidden="true"
          className="text-warn mt-0.5 shrink-0"
        />

        <div>
          <h2 className="text-navy font-semibold">
            Figures pending verification
          </h2>

          <p className="text-muted mt-2 leading-relaxed">
            The demand indices, salary ranges, cost comparisons and hiring
            timelines in this report have not yet been tied to a named dataset.
            Treat them as indicative until sourced. Before this page goes live,
            confirm each figure against Ubique placement data and record the
            source and sample size here.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="border-line bg-surface rounded-card mt-12 flex items-start gap-4 border p-6">
      <Info
        size={20}
        aria-hidden="true"
        className="text-brand mt-0.5 shrink-0"
      />

      <div>
        <h2 className="eyebrow text-muted">Methodology</h2>

        <dl className="mt-3 grid gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
          {source && (
            <div>
              <dt className="text-muted">Source</dt>
              <dd className="text-navy font-medium">{source}</dd>
            </div>
          )}

          {sampleSize && (
            <div>
              <dt className="text-muted">Sample</dt>
              <dd className="text-navy font-medium">{sampleSize}</dd>
            </div>
          )}

          {compiledOn && (
            <div>
              <dt className="text-muted">Compiled</dt>
              <dd className="text-navy font-medium">
                <time dateTime={compiledOn}>
                  {new Date(compiledOn).toLocaleDateString("en-GB", {
                    month: "long",
                    year: "numeric",
                  })}
                </time>
              </dd>
            </div>
          )}
        </dl>
      </div>
    </div>
  );
}
