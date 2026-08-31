import { prisma } from "../lib/db";
import { serialiseList } from "../lib/jobs";

/**
 * Seeds the three roles that used to live in data/jobs.ts, so nothing is lost
 * in the move to a database. Idempotent — safe to re-run.
 */

const jobs = [
  {
    slug: "sap-consultant",
    title: "Senior SAP Consultant",
    department: "Enterprise Applications",
    location: "Germany",
    employmentType: "Full Time",
    workplace: "Hybrid",
    experience: "6+ Years",
    description:
      "Lead enterprise SAP transformation projects while partnering with global organisations on large-scale digital initiatives.",
    responsibilities: [
      "Lead SAP implementation projects.",
      "Engage with enterprise stakeholders.",
      "Mentor junior consultants.",
      "Support solution architecture.",
    ],
    requirements: [
      "6+ years of SAP consulting experience.",
      "Strong understanding of enterprise business processes.",
      "Experience with S/4HANA migrations.",
      "Excellent client-facing communication.",
    ],
    technologies: ["SAP S/4HANA", "SAP Fiori", "ABAP", "SAP BTP"],
    postedAt: new Date("2026-07-14"),
    validThrough: new Date("2026-10-14"),
    status: "OPEN",
  },
  {
    slug: "cloud-devops",
    title: "Cloud & DevOps Engineer",
    department: "Cloud & Infrastructure",
    location: "India",
    employmentType: "Full Time",
    workplace: "Hybrid",
    experience: "4+ Years",
    description:
      "Build and operate the cloud platforms that enterprise delivery teams depend on, across AWS and Azure.",
    responsibilities: [
      "Design and maintain cloud infrastructure.",
      "Automate build and deployment pipelines.",
      "Improve platform reliability and observability.",
      "Partner with engineering teams on cloud adoption.",
    ],
    requirements: [
      "4+ years in cloud or platform engineering.",
      "Hands-on with AWS or Azure in production.",
      "Infrastructure as code experience.",
      "Strong Linux and networking fundamentals.",
    ],
    technologies: ["AWS", "Azure", "Terraform", "Kubernetes", "CI/CD"],
    postedAt: new Date("2026-07-28"),
    validThrough: new Date("2026-10-28"),
    status: "OPEN",
  },
  {
    slug: "ai-engineer",
    title: "AI Engineer",
    department: "Data & AI",
    location: "India",
    employmentType: "Full Time",
    workplace: "Hybrid",
    experience: "3+ Years",
    description:
      "Take machine learning and generative AI work from prototype into production systems clients rely on.",
    responsibilities: [
      "Build and deploy machine learning models.",
      "Develop generative AI applications.",
      "Work with data engineering on pipelines.",
      "Translate business problems into ML approaches.",
    ],
    requirements: [
      "3+ years in machine learning or data science.",
      "Strong Python and ML tooling.",
      "Experience putting models into production.",
      "Familiarity with LLMs and retrieval systems.",
    ],
    technologies: ["Python", "PyTorch", "LLMs", "MLOps", "Vector Databases"],
    postedAt: new Date("2026-08-11"),
    validThrough: new Date("2026-11-11"),
    status: "OPEN",
  },
];

for (const job of jobs) {
  const { responsibilities, requirements, technologies, ...rest } = job;

  const data = {
    ...rest,
    responsibilities: serialiseList(responsibilities),
    requirements: serialiseList(requirements),
    technologies: serialiseList(technologies),
  };

  await prisma.job.upsert({
    where: { slug: job.slug },
    create: data,
    update: data,
  });

  console.log("  seeded:", job.slug);
}

console.log(`\n✓ ${jobs.length} roles in the database`);

await prisma.$disconnect();
