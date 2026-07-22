import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ApacCTA() {
  return (
    <section className="bg-[#071B3A] py-32">

      <div className="mx-auto max-w-5xl px-6 text-center">

        <p
          className="
            uppercase
            tracking-[0.3em]
            font-semibold
            text-[#8FD8FF]
          "
        >
          LET'S BUILD TOGETHER
        </p>

        <h2
          className="
            mt-6
            text-5xl
            lg:text-6xl
            font-black
            leading-tight
            text-white
          "
        >
          Partner With Ubique
          <br />
          Across Asia-Pacific
        </h2>

        <p
          className="
            mt-8
            mx-auto
            max-w-3xl
            text-xl
            leading-9
            text-blue-100
          "
        >
          Whether you're expanding your workforce,
          delivering enterprise transformation or
          building technology capabilities, our
          Asia-Pacific teams are ready to support
          your next stage of growth.
        </p>

        <div
          className="
            mt-14
            flex
            flex-wrap
            justify-center
            gap-5
          "
        >

          <Link
            href="/contact"
            className="
              inline-flex
              items-center
              gap-3
              rounded-xl
              bg-[#12B76A]
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:scale-[1.03]
            "
          >
            Contact Our Team

            <ArrowRight size={18} />

          </Link>

          <Link
            href="/services"
            className="
              rounded-xl
              border
              border-white/20
              px-8
              py-4
              font-semibold
              text-white
              transition-all
              duration-300
              hover:bg-white/10
            "
          >
            Explore Services
          </Link>

        </div>

      </div>

    </section>
  );
}