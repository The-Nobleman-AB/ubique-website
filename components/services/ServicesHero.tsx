import Image from "next/image";

import PageHero from "@/components/ui/PageHero";

export default function ServicesHero() {
  return (
    <PageHero
      eyebrow="Global workforce solutions"
      title="Building high-performing global teams"
      intro="Ubique partners with organisations to recruit, scale and transform technology teams — through permanent hiring, contract staffing, consulting and managed workforce solutions."
      actions={[
        { label: "Talk to an expert", href: "/contact" },
        {
          label: "Explore our practices",
          href: "/services/technology-practices",
          variant: "ghost",
        },
      ]}
      aside={
        <div className="rounded-panel shadow-panel overflow-hidden">
          <Image
            src="/images/services/hero.jpg"
            alt="Ubique consultants working with a client team"
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
