/**
 * Technology practices.
 *
 * These mirror how ubique-systems.com has always organised its expertise, and
 * how enterprise buyers and candidates actually search: by platform, not by
 * abstraction. "SAP recruitment" is a query someone types; "technology
 * consulting" is not.
 *
 * Each practice gets its own indexable section on /services/technology-practices.
 */

export interface Practice {
  slug: string;
  name: string;
  /** Short label for nav and chips. */
  shortName: string;
  /** One line — used in the mega menu and on cards. */
  summary: string;
  /** Two or three sentences — used on the practice section itself. */
  description: string;
  /** The named platforms and skills inside this practice. */
  capabilities: string[];
  /** The roles Ubique most often places in this practice. */
  roles: string[];
}

export const practices: Practice[] = [
  {
    slug: "sap",
    name: "SAP Practice",
    shortName: "SAP",
    summary:
      "S/4HANA transformation, SuccessFactors and the full SAP module estate.",
    description:
      "Our largest and longest-running practice. We staff and advise on S/4HANA migrations, greenfield implementations and ongoing support across finance, logistics, HR and analytics modules — including the scarce functional and technical profiles that hold programmes up.",
    capabilities: [
      "SAP S/4HANA",
      "SAP SuccessFactors",
      "SAP Ariba",
      "SAP BW/4HANA",
      "SAP Fiori / UI5",
      "ABAP & CDS",
      "SAP BTP",
      "SAP Basis",
    ],
    roles: [
      "SAP Functional Consultant",
      "S/4HANA Solution Architect",
      "ABAP Developer",
      "SAP Programme Manager",
      "SAP Basis Administrator",
    ],
  },
  {
    slug: "oracle",
    name: "Oracle Practice",
    shortName: "Oracle",
    summary:
      "Fusion Cloud applications, E-Business Suite and Oracle database estates.",
    description:
      "We support organisations running Oracle at the core of finance, HR and supply chain — through Fusion Cloud implementations, E-Business Suite modernisation, and the database and integration work that sits underneath both.",
    capabilities: [
      "Oracle Fusion Cloud ERP",
      "Oracle Fusion HCM",
      "Oracle E-Business Suite",
      "Oracle NetSuite",
      "Oracle Database",
      "Oracle Integration Cloud",
      "PL/SQL",
    ],
    roles: [
      "Oracle Fusion Consultant",
      "Oracle Technical Lead",
      "EBS Functional Analyst",
      "Oracle DBA",
    ],
  },
  {
    slug: "microsoft-dynamics",
    name: "Microsoft Dynamics 365 Practice",
    shortName: "Dynamics 365",
    summary:
      "Finance & Operations, Customer Engagement and the wider Power Platform.",
    description:
      "Dynamics 365 rarely arrives on its own — it comes with Power Platform, Azure integration and a data estate behind it. We resource the whole picture, from F&O functional consultants to Power Platform developers and Dataverse specialists.",
    capabilities: [
      "Dynamics 365 Finance & Operations",
      "Dynamics 365 Customer Engagement",
      "Dynamics 365 Business Central",
      "Power Platform",
      "Power BI",
      "Dataverse",
      "Azure Integration Services",
    ],
    roles: [
      "D365 F&O Consultant",
      "D365 CE Functional Consultant",
      "Power Platform Developer",
      "Dynamics Solution Architect",
    ],
  },
  {
    slug: "salesforce",
    name: "Salesforce Practice",
    shortName: "Salesforce",
    summary:
      "Sales, Service and Marketing Cloud, plus the platform work behind them.",
    description:
      "From first implementation to multi-cloud estates under continuous change. We place the certified architects, developers and administrators who keep Salesforce delivering after the launch project ends.",
    capabilities: [
      "Sales Cloud",
      "Service Cloud",
      "Marketing Cloud",
      "Experience Cloud",
      "Apex & Lightning Web Components",
      "MuleSoft",
      "Salesforce CPQ",
    ],
    roles: [
      "Salesforce Technical Architect",
      "Salesforce Developer",
      "Salesforce Administrator",
      "CRM Programme Lead",
    ],
  },
  {
    slug: "cloud-infrastructure",
    name: "Cloud & Infrastructure Practice",
    shortName: "Cloud & Infrastructure",
    summary:
      "AWS, Azure and Google Cloud — migration, platform engineering and operations.",
    description:
      "Cloud programmes fail on operating model more often than on technology. We provide the platform engineers, SREs and security specialists who make a migration sustainable, alongside the architects who plan it.",
    capabilities: [
      "Amazon Web Services",
      "Microsoft Azure",
      "Google Cloud Platform",
      "Kubernetes & Containers",
      "Terraform & IaC",
      "DevOps & CI/CD",
      "Site Reliability Engineering",
      "Cloud Security",
    ],
    roles: [
      "Cloud Architect",
      "Platform Engineer",
      "DevOps Engineer",
      "Site Reliability Engineer",
      "Cloud Security Specialist",
    ],
  },
  {
    slug: "data-ai",
    name: "Data & AI Practice",
    shortName: "Data & AI",
    summary:
      "Data engineering, analytics, machine learning and applied generative AI.",
    description:
      "The fastest-growing area of demand across every industry we serve. We cover the full chain — the engineers who build the pipelines, the analysts who make the data usable, and the scientists and ML engineers who put models into production.",
    capabilities: [
      "Data Engineering",
      "Databricks & Snowflake",
      "Machine Learning",
      "Generative AI & LLMs",
      "Business Intelligence",
      "Data Governance",
      "Streaming & Real-time Analytics",
    ],
    roles: [
      "Data Engineer",
      "Machine Learning Engineer",
      "Analytics Engineer",
      "Data Architect",
      "AI Solutions Lead",
    ],
  },
  {
    slug: "development-integration",
    name: "Development & Integration Practice",
    shortName: "Development & Integration",
    summary: "Custom application engineering, APIs and enterprise integration.",
    description:
      "The connective work between packaged platforms: custom applications, API layers, middleware and the quality engineering that keeps a distributed estate reliable.",
    capabilities: [
      "Java & Spring",
      ".NET",
      "Python",
      "JavaScript & TypeScript",
      "API & Microservices",
      "MuleSoft & Boomi",
      "QA Automation",
      "Mobile Engineering",
    ],
    roles: [
      "Full Stack Engineer",
      "Integration Architect",
      "Backend Developer",
      "QA Automation Engineer",
    ],
  },
];

export function getPractice(slug: string): Practice | undefined {
  return practices.find((practice) => practice.slug === slug);
}
