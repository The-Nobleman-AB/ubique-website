export interface Job {
  id: string;
  title: string;
  department: string;
  location: string;
  employmentType: string;
  workplace: string;
  experience: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
  technologies: string[];
}

export const jobs: Job[] = [
  {
    id: "sap-consultant",

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
      "6+ years SAP consulting.",
      "Excellent client communication.",
      "S/4HANA experience preferred.",
      "Willingness to travel.",
    ],

    technologies: [
      "SAP S/4HANA",
      "SAP FICO",
      "SAP MM",
      "SAP SD",
    ],
  },

  {
    id: "cloud-devops",

    title: "Cloud DevOps Engineer",

    department: "Cloud & Infrastructure",

    location: "United Kingdom",

    employmentType: "Full Time",

    workplace: "Remote",

    experience: "4+ Years",

    description:
      "Design, automate and optimise cloud infrastructure supporting enterprise-scale platforms.",

    responsibilities: [
      "Maintain CI/CD pipelines.",
      "Automate infrastructure.",
      "Improve cloud reliability.",
      "Support platform scalability.",
    ],

    requirements: [
      "AWS or Azure experience.",
      "Terraform.",
      "Docker & Kubernetes.",
      "Strong scripting skills.",
    ],

    technologies: [
      "AWS",
      "Terraform",
      "Docker",
      "Kubernetes",
    ],
  },

  {
    id: "ai-engineer",

    title: "AI Engineer",

    department: "Artificial Intelligence",

    location: "India",

    employmentType: "Full Time",

    workplace: "Hybrid",

    experience: "3+ Years",

    description:
      "Build modern AI applications leveraging LLMs, automation and machine learning technologies.",

    responsibilities: [
      "Develop AI solutions.",
      "Build intelligent workflows.",
      "Collaborate with product teams.",
      "Deploy ML services.",
    ],

    requirements: [
      "Python.",
      "LLMs.",
      "Machine Learning.",
      "API development.",
    ],

    technologies: [
      "Python",
      "OpenAI",
      "LangChain",
      "FastAPI",
    ],
  },
];

/* ---------- Derived data ---------- */

export const departments = [
  "All",
  ...new Set(jobs.map((job) => job.department)),
];

export const locations = [
  "All",
  ...new Set(jobs.map((job) => job.location)),
];

export const employmentTypes = [
  "All",
  ...new Set(jobs.map((job) => job.employmentType)),
];

export const workplaces = [
  "All",
  ...new Set(jobs.map((job) => job.workplace)),
];
