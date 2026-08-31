import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import { absoluteUrl, siteConfig } from "@/lib/site";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

/**
 * Root metadata. Every page inherits this and overrides `title` through the
 * template, so no route can ship without a title again.
 */
export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),

  title: {
    default: `${siteConfig.name} — ${siteConfig.tagline}`,
    template: `%s | ${siteConfig.name}`,
  },

  description: siteConfig.description,

  applicationName: siteConfig.name,

  keywords: [
    "IT recruitment",
    "IT consulting",
    "SAP recruitment",
    "Oracle consulting",
    "Salesforce recruitment",
    "Dynamics 365 consulting",
    "cloud engineering talent",
    "global technology staffing",
    "contract IT resourcing",
  ],

  authors: [{ name: siteConfig.name, url: siteConfig.url }],
  creator: siteConfig.name,
  publisher: siteConfig.legalName,

  alternates: {
    canonical: "/",
  },

  openGraph: {
    type: "website",
    siteName: siteConfig.name,
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.descriptionShort,
    url: absoluteUrl("/"),
    locale: "en_GB",
  },

  twitter: {
    card: "summary_large_image",
    title: `${siteConfig.name} — ${siteConfig.tagline}`,
    description: siteConfig.descriptionShort,
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  formatDetection: {
    telephone: true,
    address: true,
    email: true,
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#071b3a" },
  ],
  width: "device-width",
  initialScale: 1,
};

/**
 * Root layout — document shell only.
 *
 * The public site's header and footer live in app/(site)/layout.tsx so the
 * admin at /admin doesn't inherit them. A nested layout can't remove a parent's
 * chrome, so the split has to happen here.
 */
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-GB" className={`${inter.variable} h-full`}>
      <body className={`${inter.className} flex min-h-full flex-col`}>
        {children}
      </body>
    </html>
  );
}
