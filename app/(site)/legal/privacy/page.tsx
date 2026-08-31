import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ubique Systems collects, uses and protects personal data submitted through this website — including enquiries, job applications and CVs.",
  alternates: { canonical: absoluteUrl("/legal/privacy") },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="2026-08-28"
      awaitingReview
      intro="This policy explains what personal data this website collects, why we collect it, how long we keep it and what rights you have over it."
      sections={[
        {
          id: "who-we-are",
          heading: "Who we are",
          content: [
            `${siteConfig.legalName} ("Ubique Systems", "we", "us") is an IT recruitment and consulting company. Our global headquarters is in Kolkata, India, and we operate offices across Europe, Asia-Pacific and the Americas.`,
            `For data protection purposes, Ubique Systems is the controller of the personal data described in this policy. You can reach us at ${siteConfig.email}.`,
          ],
        },
        {
          id: "what-we-collect",
          heading: "What we collect",
          content: [
            "We only collect data you choose to give us. There are two forms on this site:",
            [
              "Enquiry form — your name, email address, company, phone number, the type of enquiry and the message you write.",
              "Job application — your name, email address, phone number, country and location, current employer and job title, years of experience, highest qualification, notice period, any LinkedIn, GitHub or portfolio links you provide, your cover letter, and the CV you attach.",
            ],
            "We do not use advertising trackers, and we do not sell or rent personal data to anyone.",
          ],
        },
        {
          id: "why-we-use-it",
          heading: "Why we use it",
          content: [
            "Enquiry data is used to respond to what you asked us and, where relevant, to continue a commercial conversation. The lawful basis is your consent, given when you tick the box on the form, and our legitimate interest in responding to business enquiries.",
            "Application data is used to assess your suitability for the role you applied to and, unless you tell us otherwise, for comparable roles that come up later. The lawful basis is the steps taken at your request prior to entering a contract, and our legitimate interest in operating a recruitment business.",
          ],
        },
        {
          id: "who-sees-it",
          heading: "Who sees it",
          content: [
            "Enquiries are sent to the relevant regional team. Applications are seen by the recruitment consultants working on that role, and — where you progress — shared with the client organisation hiring for the position. We tell you which client before we share anything.",
            "We use third-party processors to operate the site and deliver email. They process data on our instructions only:",
            [
              "Our hosting provider, which serves this website.",
              "Resend, which delivers form submissions to our inboxes.",
            ],
          ],
        },
        {
          id: "international-transfers",
          heading: "International transfers",
          content: [
            "We operate across multiple countries, so your data may be accessed by Ubique Systems teams outside the country where you submitted it — including India, the United Kingdom, the EU and the United States.",
            "Where data leaves the UK or the European Economic Area, we rely on the appropriate safeguards required by UK GDPR and EU GDPR, including Standard Contractual Clauses with the receiving entity.",
          ],
        },
        {
          id: "how-long",
          heading: "How long we keep it",
          content: [
            "Enquiry data is retained for 24 months from your last contact with us, unless it becomes part of a client relationship, in which case normal business record retention applies.",
            "Application data, including your CV, is retained for 24 months from your application so we can consider you for comparable roles. You can ask us to delete it sooner at any time.",
          ],
        },
        {
          id: "security",
          heading: "Security",
          content: [
            "Ubique Systems holds ISO/IEC 27001 certification for information security management. In the context of this website that means submissions travel over TLS, access to recruitment inboxes is restricted to the people who need it, and CVs are handled under our documented information security controls.",
            "No system is perfect. If you believe your data has been exposed, contact us immediately at the address above.",
          ],
        },
        {
          id: "your-rights",
          heading: "Your rights",
          content: [
            "Depending on where you are, you have some or all of the following rights over your personal data:",
            [
              "Access — ask for a copy of what we hold about you.",
              "Rectification — ask us to correct anything inaccurate.",
              "Erasure — ask us to delete your data.",
              "Restriction — ask us to pause processing while a dispute is resolved.",
              "Portability — receive your data in a machine-readable format.",
              "Objection — object to processing based on legitimate interests.",
              "Withdraw consent — where consent was the basis, withdraw it at any time.",
            ],
            `To exercise any of these, email ${siteConfig.email}. We will respond within one month. If you are unhappy with our response, you can complain to your local supervisory authority — in the UK, that is the Information Commissioner's Office.`,
          ],
        },
        {
          id: "cookies",
          heading: "Cookies",
          content: [
            "This website does not set advertising or analytics cookies. See our cookie policy for the full detail of what is and is not stored in your browser.",
          ],
        },
        {
          id: "changes",
          heading: "Changes to this policy",
          content: [
            "We will update this page when our practices change, and the date at the top will change with it. Material changes affecting how we use data you have already given us will be communicated directly where we hold contact details for you.",
          ],
        },
      ]}
    />
  );
}
