import ContactHero from "@/components/contact/ContactHero";
import GetInTouch from "@/components/contact/GetInTouch";
import WhatHappensNext from "@/components/contact/WhatHappensNext";
import GlobalPresence from "@/components/contact/GlobalPresence";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

import type { Metadata } from "next";
import { absoluteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us — Offices Worldwide",
  description:
    "Talk to the Ubique Systems team. Full addresses, local phone numbers and regional inboxes for our offices in India, the UK, Germany, the US, Denmark, Vietnam and more.",
  alternates: { canonical: absoluteUrl("/contact") },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />

      <GetInTouch />

      <WhatHappensNext />

      <GlobalPresence />

      <ContactFAQ />

      <ContactCTA />
    </>
  );
}
