import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description:
    "What this website stores in your browser. Ubique Systems does not use advertising or analytics cookies.",
  alternates: { canonical: absoluteUrl("/legal/cookies") },
};

export default function CookiePolicyPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      lastUpdated="2026-08-28"
      awaitingReview
      intro="A short policy, because there is not much to say: this site does not track you."
      sections={[
        {
          id: "what-we-use",
          heading: "What this site stores",
          content: [
            "This website sets no advertising cookies, no analytics cookies and no third-party tracking cookies. There is no consent banner because there is nothing to consent to.",
            "The only browser storage in use is strictly necessary to serve the site:",
            [
              "Session cookies set by our hosting provider for load balancing and security. These expire when you close your browser.",
              "No persistent identifiers, no cross-site tracking, no advertising pixels.",
            ],
          ],
        },
        {
          id: "third-party",
          heading: "Third-party content",
          content: [
            "Where we link to external services — a maps link, a timesheet portal, our social profiles — following that link takes you to a site with its own cookie practices. We have no control over those, and their policies apply once you leave this site.",
          ],
        },
        {
          id: "if-this-changes",
          heading: "If this changes",
          content: [
            "If we introduce analytics or any other non-essential storage, we will add a consent mechanism before it runs, update this page, and change the date at the top.",
            `Questions about any of this can go to ${siteConfig.email}.`,
          ],
        },
      ]}
    />
  );
}
