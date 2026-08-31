/**
 * NOT CURRENTLY RENDERED.
 *
 * This section presents a specific client engagement with four hard metrics
 * (15 consultants, 8 weeks to deployment, 98% retention, 40% faster hiring).
 * None of them can be evidenced from anything in this repo, and a case study
 * with invented numbers is a liability rather than marketing.
 *
 * To bring it back: confirm the figures and the client's approval, then add
 * the engagement to data/case-studies.ts — the homepage CaseStudies component
 * renders automatically once that array is non-empty.
 */

export default function IndiaCaseStudy() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}

        <div className="max-w-4xl">
          <p className="eyebrow text-brand">Featured success story</p>

          <h2 className="display-2 mt-4 font-bold">
            Delivering SAP Talent For A Global Automotive Transformation
            Programme
          </h2>
        </div>

        {/* Main Card */}

        <div className="rounded-panel border-line mt-20 overflow-hidden border">
          <div className="grid lg:grid-cols-5">
            {/* Story Side */}

            <div className="p-12 lg:col-span-3 lg:p-16">
              {/* Client */}

              <div className="bg-brand/10 text-brand inline-flex rounded-full px-4 py-2 text-sm font-semibold">
                German Automotive Client
              </div>

              {/* Challenge */}

              <div className="mt-12">
                <h3 className="text-2xl font-bold">Challenge</h3>

                <p className="text-muted mt-4 leading-relaxed">
                  A leading automotive organisation required specialist SAP
                  consultants to support a large-scale digital transformation
                  initiative across multiple workstreams and locations.
                </p>
              </div>

              {/* Approach */}

              <div className="mt-10">
                <h3 className="text-2xl font-bold">Approach</h3>

                <p className="text-muted mt-4 leading-relaxed">
                  Ubique leveraged its India talent network, conducted targeted
                  sourcing, technical screening and coordinated accelerated
                  interview processes with stakeholders across multiple regions.
                </p>
              </div>

              {/* Outcome */}

              <div className="mt-10">
                <h3 className="text-2xl font-bold">Outcome</h3>

                <p className="text-muted mt-4 leading-relaxed">
                  The project team was fully staffed within eight weeks,
                  enabling the client to accelerate programme delivery while
                  maintaining strong consultant retention and quality.
                </p>
              </div>
            </div>

            {/* Metrics Side */}

            <div className="bg-navy p-12 text-white lg:col-span-2 lg:p-16">
              <div>
                <div className="display-2 text-accent font-bold">15</div>

                <div className="mt-2 text-white/70">
                  SAP Consultants Delivered
                </div>
              </div>

              <div className="mt-12">
                <div className="display-2 text-brand font-bold">8</div>

                <div className="mt-2 text-white/70">Weeks To Deployment</div>
              </div>

              <div className="mt-12">
                <div className="display-2 text-accent font-bold">98%</div>

                <div className="mt-2 text-white/70">Consultant Retention</div>
              </div>

              <div className="mt-12">
                <div className="display-2 text-brand font-bold">40%</div>

                <div className="mt-2 text-white/70">Faster Hiring Timeline</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
