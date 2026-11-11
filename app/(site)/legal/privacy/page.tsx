import type { Metadata } from "next";

import LegalPage from "@/components/legal/LegalPage";
import { absoluteUrl, siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ubique Systems collects, uses and protects personal data — including enquiries, job applications, CVs, and candidates we identify and contact about roles.",
  alternates: { canonical: absoluteUrl("/legal/privacy") },
};

export default function PrivacyPolicyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      lastUpdated="2026-11-11"
      intro="This policy explains what personal data we collect, where it comes from, why we use it, how long we keep it and what rights you have over it. It covers people who contact us or apply through this website, and people we identify ourselves as potential candidates for roles."
      sections={[
        {
          id: "who-we-are",
          heading: "Who we are",
          content: [
            `${siteConfig.legalName} ("Ubique Systems", "we", "us") is an IT recruitment and consulting company. Our global headquarters is in Kolkata, India, and we operate offices across Europe, Asia-Pacific and the Americas, including London in the United Kingdom.`,
            `For data protection purposes, Ubique Systems is the controller of the personal data described in this policy. For anything about your personal data, contact us at ${siteConfig.email}.`,
          ],
        },
        {
          id: "what-we-collect",
          heading: "Data you give us",
          content: [
            "When you use the forms on this site, we collect what you enter:",
            [
              "Enquiry form: your name, email address, company, phone number, the type of enquiry and the message you write.",
              "Job application: your name, email address, phone number, country and location, current employer and job title, years of experience, highest qualification, notice period, any LinkedIn, GitHub or portfolio links you provide, your cover letter, and the CV you attach.",
            ],
            "We also hold what you send us directly, for example a CV emailed to one of our recruiters.",
            "We do not use advertising trackers, and we do not sell or rent personal data to anyone.",
          ],
        },
        {
          id: "candidate-sourcing",
          heading: "Candidates we identify ourselves",
          content: [
            "As a recruitment business, we also look for people whose professional experience matches roles our clients need to fill. In that case we collect your data from somewhere other than you. The sources we use are:",
            [
              "CVs and professional profiles that you or others have published openly on the internet, for example on a personal website.",
              "Professional networking sites such as LinkedIn, and job boards where you have made your profile visible to recruiters.",
              "Our own candidate database, which holds CVs previously received from candidates, job boards and the sources above.",
              "Referrals from people who know you.",
            ],
            "From these sources we record the professional information relevant to a role: your name and contact details, location, employment history, skills, qualifications and certifications, and where we found them. We also record our own assessment of how well your experience matches a role.",
            "When we first contact you about a role using details we found ourselves, our message tells you where we obtained your details, links to this policy, and lets you opt out of any further contact. If you ask, we will tell you the exact source and when we obtained it.",
          ],
        },
        {
          id: "why-we-use-it",
          heading: "Why we use it",
          content: [
            "Enquiry data is used to respond to what you asked us and, where relevant, to continue a commercial conversation. The lawful basis is your consent, given when you tick the box on the form, and our legitimate interest in responding to business enquiries.",
            "Application data is used to assess your suitability for the role you applied to and, unless you tell us otherwise, for comparable roles that come up later. The lawful basis is the steps taken at your request prior to entering a contract, and our legitimate interest in operating a recruitment business.",
            "Data about candidates we identify ourselves is used to assess whether your experience matches a specific role and, if it does, to contact you about it. The lawful basis is our legitimate interest in finding suitable candidates for our clients' vacancies. We consider this interest is balanced against yours because we use only professional information, only for roles relevant to your experience, and you can object at any time, after which we stop.",
          ],
        },
        {
          id: "automated-tools",
          heading: "Search and matching tools",
          content: [
            "We use software, including AI-assisted tools, to search for candidates and to compare the skills and experience in a CV or profile with a role's requirements. The result is a suggested match that our recruiters review.",
            "We do not make decisions that have legal or similarly significant effects on you solely by automated means. Whether to contact you, and whether to put you forward to a client, is always decided by a person.",
          ],
        },
        {
          id: "who-sees-it",
          heading: "Who sees it",
          content: [
            "Your data is seen by the Ubique Systems recruiters and colleagues working on the relevant role, and by other members of our recruitment team where you could suit other roles.",
            "Where you progress, and only with your agreement, we share your details with the client organisation hiring for the position. We tell you which client before we share anything.",
            "We use service providers that process data on our instructions only, under contract:",
            [
              "Our email, document storage and collaboration platform (Microsoft 365).",
              "Our website hosting and file storage providers, and our email delivery provider for website forms.",
              "The hosting provider for our recruitment databases.",
              "Providers of the AI-assisted search and matching tools described above.",
            ],
          ],
        },
        {
          id: "international-transfers",
          heading: "International transfers",
          content: [
            "We operate across multiple countries, so your data may be accessed by Ubique Systems teams outside the country where it was collected — including India, the United Kingdom, the EU and the United States — and by the service providers listed above, some of which process data in other countries.",
            "Where data leaves the UK or the European Economic Area, we rely on the appropriate safeguards required by UK GDPR and EU GDPR, including Standard Contractual Clauses with the receiving entity.",
          ],
        },
        {
          id: "how-long",
          heading: "How long we keep it",
          content: [
            "Enquiry data is retained for 24 months from your last contact with us, unless it becomes part of a client relationship, in which case normal business record retention applies.",
            "Application data, including your CV, is retained for 24 months from your application so we can consider you for comparable roles.",
            "Data about candidates we identify ourselves is retained for 24 months from when we last contacted you or last updated your record, so we can consider you for other relevant roles. If you tell us you are not interested, or object, we stop using it straight away.",
            "If you object to contact or ask us to delete your data, we keep only your name and email address on a suppression list. We need this to make sure we never contact you again, including if your details turn up in a future search. You can ask us to delete your data sooner at any time.",
          ],
        },
        {
          id: "security",
          heading: "Security",
          content: [
            "Ubique Systems holds ISO/IEC 27001 certification for information security management. Data travels over TLS, access to recruitment systems and inboxes is restricted to the people who need it, and CVs are handled under our documented information security controls.",
            "No system is perfect. If you believe your data has been exposed, contact us immediately at the address above.",
          ],
        },
        {
          id: "your-rights",
          heading: "Your rights",
          content: [
            "Depending on where you are, you have some or all of the following rights over your personal data:",
            [
              "Information: to be told where we obtained your data, if we did not get it from you.",
              "Access: to ask for a copy of what we hold about you.",
              "Rectification: to ask us to correct anything inaccurate.",
              "Erasure: to ask us to delete your data.",
              "Restriction: to ask us to pause processing while a dispute is resolved.",
              "Portability: to receive your data in a machine-readable format.",
              "Objection: to object to processing based on legitimate interests, including recruitment contact. We will stop contacting you as soon as you object.",
              "Withdrawing consent: where consent was the basis, to withdraw it at any time.",
            ],
            `To exercise any of these, email ${siteConfig.email}, or simply reply to any message we have sent you. We will respond within one month. If you are unhappy with our response, you can complain to your local supervisory authority. In the UK, that is the Information Commissioner's Office (ico.org.uk).`,
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
            "We will update this page when our practices change, and the date at the top will change with it. Material changes affecting how we use data we already hold about you will be communicated directly where we hold contact details for you.",
          ],
        },
      ]}
    />
  );
}
