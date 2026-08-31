import type { MetadataRoute } from "next";

import { absoluteUrl, siteConfig } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  /* Previews and staging must never be indexed — otherwise they compete with
     the production site for the same queries. */
  const isProduction =
    siteConfig.url === "https://www.ubique-systems.com" &&
    process.env.VERCEL_ENV !== "preview";

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
