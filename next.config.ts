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
    ];
  },
};

export default nextConfig;
