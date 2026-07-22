import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function InsightsCTA() {
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
          STAY CONNECTED
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
          Let's Start A
          Conversation
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
          Whether you're looking for consulting
          expertise, workforce solutions or simply
          want to learn more about Ubique Systems,
          we'd be pleased to hear from you.
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
              group
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
            Contact Us

            <ArrowRight
              size={18}
              className="
                transition-transform
                duration-300
                group-hover:translate-x-1
              "
            />
          </Link>

        </div>

      </div>

    </section>
  );
}