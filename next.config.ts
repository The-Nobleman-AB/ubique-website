import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    /* Modern formats first — AVIF is roughly half the bytes of JPEG at the
       same perceived quality, and Next falls back automatically. */
    formats: ["image/avif", "image/webp"],

    /* Trimmed to the breakpoints this design actually uses, so the build
       doesn't generate variants nobody requests. */
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [64, 96, 128, 256, 384],

    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  /* Strip the framework header — it advertises the stack for no benefit. */
  poweredByHeader: false,

  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
    ];
  },

  async redirects() {
    return [
      /* The footer used to point here, and external links may still.
         Kept as a permanent redirect rather than a 404. */
      {
        source: "/countries/apac",
        destination: "/countries/asia-pacific",
        permanent: true,
      },
      /* Common alternate spellings for the UK page. */
      {
        source: "/countries/united-kingdom",
        destination: "/countries/uk",
        permanent: true,
      },

      /* ------------------------------------------------------------------
         Every URL the old site published.
         
         These carry whatever ranking and inbound links the old site earned —
         business cards, email signatures, directory listings, Google results.
         Without them each one becomes a 404 the moment DNS switches, and the
         ranking is lost rather than transferred. 308s so search engines move
         the authority across rather than treating it as a temporary detour.
         ------------------------------------------------------------------ */

      { source: "/who-we-are", destination: "/about", permanent: true },
      { source: "/why-choose-us", destination: "/about", permanent: true },
      {
        source: "/global-delivery-model",
        destination: "/about",
        permanent: true,
      },
      { source: "/contact-us", destination: "/contact", permanent: true },
      {
        source: "/ubique-job-listing",
        destination: "/careers",
        permanent: true,
      },

      { source: "/it-services", destination: "/services", permanent: true },
      { source: "/it-resourcing", destination: "/services", permanent: true },
      {
        source: "/it-consulting",
        destination: "/services/it-consulting",
        permanent: true,
      },
      {
        source: "/academics",
        destination: "/services/academics",
        permanent: true,
      },
      {
        source: "/technology-recruitment-consultants",
        destination: "/services/technology-practices",
        permanent: true,
      },

      {
        source: "/aviation-defence",
        destination: "/industries/aviation-defence",
        permanent: true,
      },
      {
        source: "/banking-accountancy",
        destination: "/industries/banking-financial-services",
        permanent: true,
      },
      /* These three old pages each covered two industries that are now
         separate. The redirect goes to the first-named of the pair, which is
         the better guess at what a visitor following the link wanted. */
      {
        source: "/automotive-telecom",
        destination: "/industries/automotive",
        permanent: true,
      },
      {
        source: "/energy-healthcare",
        destination: "/industries/energy-utilities",
        permanent: true,
      },
      {
        source: "/manufacturing-retail",
        destination: "/industries/manufacturing",
        permanent: true,
      },

      {
        source: "/privacy-policy",
        destination: "/legal/privacy",
        permanent: true,
      },
      {
        source: "/terms-and-conditions",
        destination: "/legal/terms",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
