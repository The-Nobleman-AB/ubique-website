import Link from "next/link";

import Logo from "./Logo";
import { ExternalLink, Mail, MapPin, Phone, ShieldCheck } from "lucide-react";

import NewsletterSignup from "./NewsletterSignup";
import { footerNavigation } from "@/data/navigation";
import { countryCount, headquarters, regionalInboxes } from "@/data/offices";
import { siteConfig } from "@/lib/site";

const social = [
  { name: "LinkedIn", href: siteConfig.social.linkedin },
  { name: "X", href: siteConfig.social.twitter },
  { name: "Facebook", href: siteConfig.social.facebook },
];

const legal = [
  { name: "Privacy Policy", href: "/legal/privacy" },
  { name: "Cookie Policy", href: "/legal/cookies" },
  { name: "Terms of Use", href: "/legal/terms" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-white" data-surface="dark">
      <div className="mx-auto max-w-7xl px-6 pt-20 pb-10">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* ------------------------------------------------ brand */}

          <div className="lg:col-span-4">
            <Logo tone="light" height={32} />

            <p className="mt-5 max-w-sm leading-relaxed text-white/70">
              An ISO 27001-certified IT recruitment and consulting partner,
              helping organisations build specialist technology teams across{" "}
              {countryCount}+ countries.
            </p>

            {/* ISO 27001 — a procurement gate for enterprise buyers and the
                first question any security team asks. */}
            <div className="rounded-card mt-7 inline-flex items-start gap-3 border border-white/15 bg-white/5 px-4 py-3">
              <ShieldCheck
                size={20}
                aria-hidden="true"
                className="text-accent mt-0.5 shrink-0"
              />
              <div>
                <p className="text-sm font-semibold">ISO/IEC 27001 certified</p>
                <p className="mt-0.5 text-xs leading-relaxed text-white/60">
                  Independently audited information security management.
                </p>
              </div>
            </div>

            <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-2">
              {social.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* ------------------------------------------------ link columns */}

          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-5">
            {footerNavigation.map((column) => (
              <nav key={column.heading} aria-label={column.heading}>
                <h2 className="eyebrow text-white/50">{column.heading}</h2>

                <ul className="mt-4 flex flex-col gap-2.5">
                  {column.links.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-sm text-white/70 underline-offset-4 transition-colors hover:text-white hover:underline"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
          </div>

          {/* ------------------------------------------------ contact */}

          <div className="lg:col-span-3">
            <h2 className="eyebrow text-white/50">Global Headquarters</h2>

            <address className="mt-4 flex flex-col gap-3 text-sm text-white/70 not-italic">
              <span className="flex items-start gap-3">
                <MapPin
                  size={16}
                  aria-hidden="true"
                  className="mt-0.5 shrink-0"
                />
                <span>
                  {headquarters.address[0]}
                  <br />
                  {headquarters.city} — {headquarters.postcode}
                  <br />
                  {headquarters.country}
                </span>
              </span>

              {headquarters.phone && (
                <a
                  href={`tel:${headquarters.phone}`}
                  className="flex items-center gap-3 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  <Phone size={16} aria-hidden="true" className="shrink-0" />
                  {headquarters.phoneDisplay}
                </a>
              )}

              <a
                href={`mailto:${siteConfig.email}`}
                className="flex items-center gap-3 underline-offset-4 transition-colors hover:text-white hover:underline"
              >
                <Mail size={16} aria-hidden="true" className="shrink-0" />
                {siteConfig.email}
              </a>
            </address>

            <Link
              href="/contact#offices"
              className="text-accent mt-4 inline-block text-sm font-semibold underline-offset-4 hover:underline"
            >
              Every office, address and number →
            </Link>
          </div>
        </div>

        {/* -------------------------------------------------- newsletter */}

        <div className="mt-14 grid gap-10 border-t border-white/10 pt-10 lg:grid-cols-2">
          <div>
            <h2 className="eyebrow text-white/50">Stay in touch</h2>
            <div className="mt-4 max-w-md">
              <NewsletterSignup />
            </div>
          </div>

          <div className="lg:justify-self-end">
            <h2 className="eyebrow text-white/50">For contractors & clients</h2>
            <a
              href={siteConfig.external.timesheets}
              target="_blank"
              rel="noreferrer noopener"
              className="rounded-control mt-4 inline-flex items-center gap-2 border border-white/15 px-4 py-2.5 text-sm font-medium transition-colors hover:bg-white/10"
            >
              Timesheet Portal
              <ExternalLink size={14} aria-hidden="true" />
            </a>
          </div>
        </div>

        {/* -------------------------------------------------- inboxes */}

        <div className="mt-14 border-t border-white/10 pt-8">
          <h2 className="eyebrow text-white/50">Regional enquiries</h2>

          <ul className="mt-4 grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-3">
            {regionalInboxes.map((inbox) => (
              <li key={inbox.email} className="text-sm">
                <span className="text-white/50">{inbox.label}</span>{" "}
                <a
                  href={`mailto:${inbox.email}`}
                  className="text-white/80 underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {inbox.email}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* -------------------------------------------------- bottom */}

        <div className="mt-10 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {siteConfig.legalName}. All rights
            reserved.
          </p>

          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="underline-offset-4 transition-colors hover:text-white hover:underline"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
