import type { MetadataRoute } from "next";

import { getPublishedJobs } from "@/lib/jobs";
import { practices } from "@/data/practices";
import { absoluteUrl } from "@/lib/site";

/**
 * Sitemap.
 *
 * Static routes are listed explicitly rather than discovered from the
 * filesystem, so adding a page is a deliberate decision about whether it
 * should be indexed at all.
 */

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const staticRoutes: Entry[] = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },

  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/services/technology-practices",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/services/it-consulting",
    priority: 0.8,
    changeFrequency: "monthly",
  },
  { path: "/services/ir35", priority: 0.7, changeFrequency: "yearly" },
  { path: "/services/academics", priority: 0.8, changeFrequency: "monthly" },

  { path: "/industries", priority: 0.8, changeFrequency: "monthly" },
  { path: "/industries/automotive", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/industries/aviation-defence",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/industries/energy-utilities",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/industries/media-entertainment",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/industries/transport-logistics",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/industries/banking-financial-services",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/industries/healthcare-life-sciences",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/industries/manufacturing",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  {
    path: "/industries/retail-consumer",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { path: "/industries/technology", priority: 0.7, changeFrequency: "monthly" },

  { path: "/countries", priority: 0.8, changeFrequency: "monthly" },
  {
    path: "/countries/asia-pacific",
    priority: 0.7,
    changeFrequency: "monthly",
  },
  { path: "/countries/europe", priority: 0.7, changeFrequency: "monthly" },
  { path: "/countries/americas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/countries/india", priority: 0.8, changeFrequency: "monthly" },
  { path: "/countries/uk", priority: 0.8, changeFrequency: "monthly" },
  { path: "/countries/germany", priority: 0.8, changeFrequency: "monthly" },
  { path: "/countries/usa", priority: 0.8, changeFrequency: "monthly" },

  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/about/team", priority: 0.6, changeFrequency: "monthly" },
  { path: "/about/responsibility", priority: 0.6, changeFrequency: "yearly" },
  { path: "/careers", priority: 0.9, changeFrequency: "daily" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
  { path: "/insights", priority: 0.6, changeFrequency: "weekly" },

  { path: "/legal/privacy", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/cookies", priority: 0.3, changeFrequency: "yearly" },
  { path: "/legal/terms", priority: 0.3, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const jobs = await getPublishedJobs();

  const pages = staticRoutes.map((route) => ({
    url: absoluteUrl(route.path),
    lastModified: now,
    changeFrequency: route.changeFrequency,
    priority: route.priority,
  }));

  /* Job pages carry their real posting date, so a crawler can tell which
     roles are new without refetching every one. */
  const roles = jobs.map((job) => ({
    url: absoluteUrl(`/careers/${job.slug}`),
    lastModified: new Date(job.postedAt),
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  /* Practice anchors are on one page, so they aren't separate URLs — but the
     count is asserted here so a new practice can't be silently unindexed. */
  if (practices.length === 0) {
    throw new Error(
      "No technology practices defined — check data/practices.ts",
    );
  }

  return [...pages, ...roles];
}
