import { Sparkles, ArrowUpRight } from "lucide-react";

export default function FeaturedMessage() {
  return (
    <section className="section-y bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="rounded-panel from-surface to-brand-tint shadow-lift border-line overflow-hidden border bg-gradient-to-br via-white p-12">
          <div className="grid gap-14 lg:grid-cols-[1fr_420px]">
            {/* LEFT */}

            <div>
              <div className="bg-brand-tint inline-flex items-center gap-3 rounded-full px-5 py-2">
                <Sparkles size={18} className="text-brand" />

                <span className="eyebrow text-brand">Featured</span>
              </div>

              <h2 className="display-2 text-navy mt-8 font-bold">
                Building A Knowledge Centre Worth Reading.
              </h2>

              <p className="text-muted mt-8 max-w-3xl text-xl leading-relaxed">
                As Ubique Systems continues to grow, this page will become the
                home for company announcements, technology updates, hiring news
                and industry perspectives that genuinely reflect our work and
                expertise.
              </p>

              <p className="text-muted mt-6 max-w-3xl leading-relaxed">
                We believe meaningful updates are worth sharing when they
                provide real value—not simply to fill a page.
              </p>
            </div>

            {/* RIGHT */}

            <div className="rounded-card bg-navy flex flex-col justify-center p-10">
              <p className="eyebrow text-sky">Coming Soon</p>

              <h3 className="mt-6 text-3xl leading-tight font-bold text-white">
                Company News
                <br />
                Technology Updates
                <br />
                Career Announcements
              </h3>

              <div className="mt-10 h-px bg-white/10" />

              <div className="mt-8 flex items-center justify-between">
                <span className="text-white/80">Stay connected</span>

                <ArrowUpRight className="text-sky" size={22} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
