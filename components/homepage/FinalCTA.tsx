import Link from "next/link";
import { countryCount } from "@/data/offices";
import { siteConfig } from "@/lib/site";
import { ArrowRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="bg-navy section-y-lg relative overflow-hidden">
      {/* Background Glows */}

      <div className="bg-brand/10 absolute top-0 right-0 h-[700px] w-[700px] rounded-full blur-[180px]" />

      <div className="bg-accent/10 absolute bottom-0 left-0 h-[600px] w-[600px] rounded-full blur-[180px]" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p className="eyebrow text-accent">READY TO PARTNER WITH UBIQUE?</p>

        <h2 className="display-2 mt-4 font-bold text-white">
          Let's Build
          <br />
          What's Next
          <br />
          Together
        </h2>

        <p className="mx-auto mt-10 max-w-3xl text-xl leading-relaxed text-white/70">
          Whether you're expanding your workforce, delivering transformation
          programmes or looking for specialist consulting expertise, Ubique is
          ready to help you achieve your next business milestone.
        </p>

        {/* Regional Presence */}

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <span className="rounded-full bg-white/10 px-5 py-2 text-white">
            🇮🇳 Global HQ
          </span>

          <span className="rounded-full bg-white/10 px-5 py-2 text-white">
            🌏 Asia-Pacific
          </span>

          <span className="rounded-full bg-white/10 px-5 py-2 text-white">
            🇪🇺 Europe
          </span>

          <span className="rounded-full bg-white/10 px-5 py-2 text-white">
            🌎 Americas
          </span>
        </div>

        <p className="eyebrow mt-10 text-white/50">
          Established {siteConfig.foundedYear} · {countryCount}+ countries · ISO
          27001 certified
        </p>

        <div className="mt-14 flex flex-wrap justify-center gap-6">
          <Link
            href="/contact"
            className="rounded-control bg-accent inline-flex items-center gap-3 px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:opacity-95"
          >
            Contact Us
            <ArrowRight size={18} />
          </Link>

          <Link
            href="/countries"
            className="rounded-control inline-flex items-center gap-3 border border-white/20 px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.03] hover:bg-white/10"
          >
            Explore Global Presence
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  );
}
