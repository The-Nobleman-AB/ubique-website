import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

import ContactHero from "@/components/contact/ContactHero";
import GetInTouch from "@/components/contact/GetInTouch";
import WhatHappensNext from "@/components/contact/WhatHappensNext";
import GlobalPresence from "@/components/contact/GlobalPresence";
import ContactFAQ from "@/components/contact/ContactFAQ";
import ContactCTA from "@/components/contact/ContactCTA";

export default function ContactPage() {
  return (
    <>
      <Header />

      <main>

        <ContactHero />

        <GetInTouch />

        <WhatHappensNext />

        <GlobalPresence />

        <ContactFAQ />

        <ContactCTA />

      </main>

      <Footer />
    </>
  );
}