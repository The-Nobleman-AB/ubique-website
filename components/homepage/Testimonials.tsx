"use client";

export default function Testimonials() {
  return (
    <section className="section-y-lg bg-surface">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="text-center">
          <p className="eyebrow text-brand">Client testimonials</p>

          <h2 className="display-2 mt-4 font-bold">
            Trusted By Teams
            <br />
            Around The World
          </h2>
        </div>

        {/* Featured Quote */}

        <div className="mx-auto mt-24 max-w-5xl text-center">
          <div className="watermark text-brand/20 font-bold">"</div>

          <blockquote className="display-3 -mt-12 font-bold">
            Ubique helped us scale our SAP delivery capabilities across Germany
            and India significantly faster than expected.
          </blockquote>

          <div className="mt-12">
            <div className="text-xl font-bold">Head of Talent Acquisition</div>

            <div className="text-muted mt-2">
              Global Automotive Organization
            </div>
          </div>
        </div>

        {/* Secondary Testimonials */}

        <div className="mt-24 grid gap-8 md:grid-cols-3">
          <div className="rounded-card border-line border bg-white p-10 shadow-sm">
            <p className="text-muted leading-relaxed">
              The quality of candidates and the responsiveness of the team
              exceeded expectations throughout the project.
            </p>

            <div className="mt-8">
              <div className="font-bold">HR Director</div>

              <div className="text-muted">Technology Sector</div>
            </div>
          </div>

          <div className="rounded-card border-line border bg-white p-10 shadow-sm">
            <p className="text-muted leading-relaxed">
              Their understanding of local and international hiring markets made
              a significant difference.
            </p>

            <div className="mt-8">
              <div className="font-bold">Talent Manager</div>

              <div className="text-muted">Manufacturing Sector</div>
            </div>
          </div>

          <div className="rounded-card border-line border bg-white p-10 shadow-sm">
            <p className="text-muted leading-relaxed">
              A trusted partner who consistently delivers high-quality talent
              across multiple regions.
            </p>

            <div className="mt-8">
              <div className="font-bold">Recruitment Lead</div>

              <div className="text-muted">Global Consulting Firm</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
