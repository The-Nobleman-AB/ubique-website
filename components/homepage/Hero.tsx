import Container from "../ui/Container";
import HeroShowcase from "./HeroShowcase";

import Link from "next/link";

import { countryCount } from "@/data/offices";
import { siteConfig } from "@/lib/site";

export default function Hero() {
  return (
    <section className="bg-navy relative flex min-h-screen items-center overflow-hidden pt-28">
      {/* Glow */}

      <div className="bg-brand/20 absolute top-0 left-0 h-[700px] w-[700px] rounded-full blur-[180px]" />

      <div className="bg-accent/20 absolute right-0 bottom-0 h-[700px] w-[700px] rounded-full blur-[180px]" />

      <Container>
        <div className="grid items-center gap-24 lg:grid-cols-2">
          {/* LEFT */}

          <div className="relative z-20">
            <p className="eyebrow text-accent mb-8">Global workforce partner</p>

            <h1 className="display-1 font-bold text-white">
              Global Talent.
              <br />
              Local Expertise.
            </h1>

            <p className="mt-8 max-w-xl text-xl text-white/70">
              Since {siteConfig.foundedYear}, helping organisations build
              world-class teams and professionals build international careers
              across {countryCount}+ countries.
            </p>

            <div className="mt-10 flex gap-5">
              <Link
                href="/contact"
                className="rounded-control bg-accent inline-flex items-center justify-center px-8 py-4 font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:opacity-95"
              >
                Hire Talent
              </Link>

              <Link
                href="/careers"
                className="rounded-control inline-flex items-center justify-center border border-white/20 px-8 py-4 text-white transition-all duration-200 hover:bg-white/10"
              >
                Explore Jobs
              </Link>
            </div>
          </div>

          {/* RIGHT */}

          <div className="relative z-0 mt-16 lg:mt-0">
            <HeroShowcase />
          </div>
        </div>
      </Container>
    </section>
  );
}
