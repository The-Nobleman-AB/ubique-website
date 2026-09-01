import type { MetadataRoute } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  /* Previews and staging must never be indexed — otherwise they compete with
     the production site for the same queries. Each host names its preview
     context differently, so check all of them rather than tying the site to
     one platform. */
  const isPreview =
    process.env.VERCEL_ENV === "preview" ||
    /* Netlify: "deploy-preview" or "branch-deploy" */
    (process.env.CONTEXT !== undefined &&
      process.env.CONTEXT !== "production") ||
    /* Cloudflare Pages */
    (process.env.CF_PAGES_BRANCH !== undefined &&
      process.env.CF_PAGES_BRANCH !== "main");

  const isProduction =
    siteConfig.url === "https://www.ubique-systems.com" && !isPreview;

  if (!isProduction) {
    return {
      rules: [{ userAgent: "*", disallow: "/" }],
    };
  }

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
