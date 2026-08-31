import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "The terms that apply to your use of the Ubique Systems website.",
  alternates: { canonical: absoluteUrl("/legal/terms") },
};

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Use"
      lastUpdated="2026-08-28"
      awaitingReview
      intro="These terms govern your use of this website. They do not govern any consulting or recruitment services we provide — those are covered by a separate written agreement."
      sections={[
        {
          id: "acceptance",
          heading: "Acceptance",
          content: [
            `By using this website you accept these terms. If you do not accept them, please do not use the site. The site is operated by ${siteConfig.legalName}.`,
          ],
        },
        {
          id: "use-of-site",
          heading: "Permitted use",
          content: [
            "You may browse this site and submit genuine enquiries and job applications. You may not:",
            [
              "Submit false, misleading or fraudulent information through any form.",
              "Attempt to gain unauthorised access to any part of the site or its infrastructure.",
              "Scrape, harvest or systematically extract content, including job listings, for commercial use.",
              "Use automated tools to submit forms or generate load.",
            ],
          ],
        },
        {
          id: "content",
          heading: "Content and accuracy",
          content: [
            "We take care to keep the site accurate, but content is provided for general information. Job listings, market commentary and guidance pages — including our IR35 page — are informational and are not professional, legal or tax advice.",
            "Job listings reflect roles open at the time of publication. A listing being visible does not guarantee the role remains available.",
          ],
        },
        {
          id: "intellectual-property",
          heading: "Intellectual property",
          content: [
            `All content on this site, including text, design, graphics and structure, is owned by ${siteConfig.legalName} or licensed to us. Third-party names and marks referenced on the site — including platform names such as SAP, Oracle, Salesforce and Microsoft Dynamics — belong to their respective owners and are used for identification only. Their use does not imply endorsement or partnership unless stated.`,
          ],
        },
        {
          id: "liability",
          heading: "Liability",
          content: [
            "To the extent permitted by law, we are not liable for any loss arising from your use of, or inability to use, this website. Nothing in these terms limits liability for fraud, death or personal injury caused by negligence, or anything else that cannot lawfully be excluded.",
          ],
        },
        {
          id: "external-links",
          heading: "External links",
          content: [
            "Where we link to third-party sites, we do so for convenience. We do not control them and are not responsible for their content or practices.",
          ],
        },
        {
          id: "governing-law",
          heading: "Governing law",
          content: [
            "These terms and any dispute arising from them are governed by the laws applicable at our principal place of business, and the courts there have exclusive jurisdiction.",
            `Questions about these terms can go to ${siteConfig.email}.`,
          ],
        },
      ]}
    />
  );
}
