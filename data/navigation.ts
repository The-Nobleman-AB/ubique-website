import { practices } from "./practices";

/**
 * The site's navigation model.
 *
 * Header (desktop mega menu), mobile drawer and footer all read from here, so
 * a route only ever has to be added in one place. Every href in this file is
 * asserted against the real route tree by the nav test in the build.
 */

export interface NavLink {
  name: string;
  href: string;
  /** Shown under the link in the mega menu and mobile drawer. */
  description?: string;
}

export interface NavColumn {
  heading: string;
  links: NavLink[];
}

export interface NavItem {
  name: string;
  href: string;
  /** When present, the item opens a mega menu instead of navigating on hover. */
  columns?: NavColumn[];
  /** Optional promoted panel on the right of the mega menu. */
  feature?: {
    eyebrow: string;
    title: string;
    description: string;
    href: string;
    cta: string;
  };
}

export const navigation: NavItem[] = [
  {
    name: "Services",
    href: "/services",
    columns: [
      {
        heading: "What we do",
        links: [
          {
            name: "Overview",
            href: "/services",
            description: "How we resource, consult and deliver.",
          },
          {
            name: "IT Resourcing",
            href: "/services#resourcing",
            description: "Contract, permanent and managed teams.",
          },
          {
            name: "IT Consulting",
            href: "/services/it-consulting",
            description: "Advisory and delivery for enterprise programmes.",
          },
          {
            name: "Global Delivery Model",
            href: "/services#delivery",
            description: "Onshore, nearshore and offshore blended teams.",
          },
          {
            name: "Academics",
            href: "/services/academics",
            description:
              "Training specialists into the roles the market can't fill.",
          },
        ],
      },
      {
        heading: "Technology practices",
        links: practices.slice(0, 4).map((practice) => ({
          name: practice.shortName,
          href: `/services/technology-practices#${practice.slug}`,
          description: practice.summary,
        })),
      },
      {
        heading: "More practices",
        links: [
          ...practices.slice(4).map((practice) => ({
            name: practice.shortName,
            href: `/services/technology-practices#${practice.slug}`,
            description: practice.summary,
          })),
          {
            name: "All practices",
            href: "/services/technology-practices",
            description: "The full technology estate we cover.",
          },
        ],
      },
    ],
    feature: {
      eyebrow: "For UK contractors",
      title: "IR35 explained",
      description:
        "What the off-payroll rules mean for your contract, and how we assess status.",
      href: "/services/ir35",
      cta: "Read the guidance",
    },
  },
  {
    name: "Industries",
    href: "/industries",
    columns: [
      {
        heading: "Sectors",
        links: [
          {
            name: "Automotive",
            href: "/industries/automotive",
            description:
              "Electrification, connected mobility, digital manufacturing.",
          },
          {
            name: "Aviation & Defence",
            href: "/industries/aviation-defence",
            description:
              "Cleared talent, MRO systems, safety-critical software.",
          },
          {
            name: "Banking & Financial Services",
            href: "/industries/banking-financial-services",
            description: "Core modernisation, risk, regulatory change.",
          },
          {
            name: "Energy & Utilities",
            href: "/industries/energy-utilities",
            description:
              "Grid systems, asset management, the energy transition.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            name: "Healthcare & Life Sciences",
            href: "/industries/healthcare-life-sciences",
            description: "Clinical systems, compliance, data platforms.",
          },
          {
            name: "Manufacturing",
            href: "/industries/manufacturing",
            description: "Industry 4.0, supply chain, ERP transformation.",
          },
          {
            name: "Media & Entertainment",
            href: "/industries/media-entertainment",
            description: "Streaming delivery, content supply chain, rights.",
          },
        ],
      },
      {
        heading: "",
        links: [
          {
            name: "Retail & Consumer",
            href: "/industries/retail-consumer",
            description: "Commerce platforms, supply chain, customer data.",
          },
          {
            name: "Technology",
            href: "/industries/technology",
            description: "Product engineering and platform scale-up.",
          },
          {
            name: "Transport & Logistics",
            href: "/industries/transport-logistics",
            description: "WMS and TMS, telematics, real-time visibility.",
          },
        ],
      },
    ],
  },
  {
    name: "Global Presence",
    href: "/countries",
    columns: [
      {
        heading: "Regions",
        links: [
          {
            name: "Asia-Pacific",
            href: "/countries/asia-pacific",
            description: "India, Vietnam and the wider region.",
          },
          {
            name: "Europe",
            href: "/countries/europe",
            description: "UK, DACH, Nordics and Central Europe.",
          },
          {
            name: "Americas",
            href: "/countries/americas",
            description: "US delivery and nearshore coverage.",
          },
        ],
      },
      {
        heading: "Countries",
        links: [
          {
            name: "India",
            href: "/countries/india",
            description: "Global headquarters and delivery centres.",
          },
          {
            name: "United Kingdom",
            href: "/countries/uk",
            description: "Canary Wharf, London.",
          },
          {
            name: "Germany",
            href: "/countries/germany",
            description: "Eching, serving the DACH market.",
          },
          {
            name: "United States",
            href: "/countries/usa",
            description: "Norwalk, Connecticut.",
          },
        ],
      },
    ],
    feature: {
      eyebrow: "Market report",
      title: "India talent & salary benchmark",
      description:
        "Demand indices, salary ranges and hiring timelines across India's technology clusters.",
      href: "/countries/india/talent-report",
      cta: "View the report",
    },
  },
  {
    name: "About",
    href: "/about",
    columns: [
      {
        heading: "The company",
        links: [
          {
            name: "About Ubique",
            href: "/about",
            description: "Who we are, how we work, and where we came from.",
          },
          {
            name: "Meet the team",
            href: "/about/team",
            description: "The people you'd actually be working with.",
          },
          {
            name: "Corporate responsibility",
            href: "/about/responsibility",
            description:
              "Data, compliance and fair access — what we can evidence.",
          },
        ],
      },
      {
        heading: "What we do",
        links: [
          {
            name: "Technology practices",
            href: "/services/technology-practices",
            description: "The seven platforms we resource and consult on.",
          },
          {
            name: "Academics",
            href: "/services/academics",
            description: "How we build capability the market can't supply.",
          },
          {
            name: "Global presence",
            href: "/countries",
            description:
              "Offices across Asia-Pacific, Europe and the Americas.",
          },
        ],
      },
    ],
  },
  {
    name: "Careers",
    href: "/careers",
  },
  {
    name: "Insights",
    href: "/insights",
  },
];

/** Footer columns — a flatter view of the same routes. */
export const footerNavigation: NavColumn[] = [
  {
    heading: "Company",
    links: [
      { name: "About", href: "/about" },
      { name: "Meet the team", href: "/about/team" },
      { name: "Corporate responsibility", href: "/about/responsibility" },
      { name: "Careers", href: "/careers" },
      { name: "News & Insights", href: "/insights" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    heading: "Services",
    links: [
      { name: "Overview", href: "/services" },
      { name: "IT Consulting", href: "/services/it-consulting" },
      { name: "Technology Practices", href: "/services/technology-practices" },
      { name: "Academics", href: "/services/academics" },
      { name: "IR35 Guidance", href: "/services/ir35" },
    ],
  },
  {
    heading: "Regions",
    links: [
      { name: "Global Presence", href: "/countries" },
      { name: "Asia-Pacific", href: "/countries/asia-pacific" },
      { name: "Europe", href: "/countries/europe" },
      { name: "Americas", href: "/countries/americas" },
      { name: "India", href: "/countries/india" },
      { name: "United Kingdom", href: "/countries/uk" },
    ],
  },
];

/** Every internal route the navigation points at, for the sitemap and link test. */
export function allNavHrefs(): string[] {
  const hrefs = new Set<string>();

  for (const item of navigation) {
    hrefs.add(item.href);
    item.columns?.forEach((column) =>
      column.links.forEach((link) => hrefs.add(link.href)),
    );
    if (item.feature) hrefs.add(item.feature.href);
  }

  for (const column of footerNavigation) {
    column.links.forEach((link) => hrefs.add(link.href));
  }

  return [...hrefs];
}
