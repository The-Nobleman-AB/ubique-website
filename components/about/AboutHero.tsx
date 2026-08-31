import Image from "next/image";

import PageHero from "@/components/ui/PageHero";
import { countryCount, offices } from "@/data/offices";
import { practices } from "@/data/practices";
import { yearsInBusinessRounded } from "@/lib/site";

export default function AboutHero() {
  return (
    <PageHero
      eyebrow="About Ubique"
      title="Technology teams that move a business forward"
      intro={`Since 2000 we've partnered with organisations navigating growth, transformation and evolving workforce challenges — through specialist technology recruitment and workforce consulting. ${yearsInBusinessRounded}+ years, and the same approach.`}
      actions={[
        { label: "Talk to us", href: "/contact" },
        { label: "See open roles", href: "/careers", variant: "ghost" },
      ]}
      stats={[
        { value: `${countryCount}+`, label: "Countries with a presence" },
        { value: `${offices.length}`, label: "Offices & delivery centres" },
        { value: `${practices.length}`, label: "Technology practices" },
        { value: "ISO 27001", label: "Certified since day one" },
      ]}
      aside={
        <div className="rounded-panel shadow-panel overflow-hidden border border-white/10">
          <Image
            src="/images/about/hero.jpg"
            alt="The Ubique Systems team at work"
            width={1200}
            height={900}
            priority
            sizes="(max-width: 1024px) 100vw, 520px"
            className="h-[380px] w-full object-cover lg:h-[460px]"
          />
        </div>
      }
    />
  );
}
