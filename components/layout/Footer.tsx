import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071B3A] text-white pt-24 pb-10">

      <div className="mx-auto max-w-7xl px-6">

        <div className="grid gap-16 lg:grid-cols-4">

          {/* Company Intro */}

          <div>

            <h2 className="text-3xl font-black">
              UBIQUE
            </h2>

            <p className="mt-6 max-w-sm leading-8 text-white/70">
              Enterprise consulting, technology solutions
              and workforce expertise supporting
              organisations across global markets.
            </p>

          </div>

          {/* Company */}

          <div>

            <h4 className="mb-5 font-bold">
              Company
            </h4>

            <div className="flex flex-col gap-3">

              <Link
                href="/about"
                className="text-white/70 transition hover:text-white"
              >
                About
              </Link>

              <Link
                href="/careers"
                className="text-white/70 transition hover:text-white"
              >
                Careers
              </Link>

              <Link
                href="/insights"
                className="text-white/70 transition hover:text-white"
              >
                News & Insights
              </Link>

              <Link
                href="/contact"
                className="text-white/70 transition hover:text-white"
              >
                Contact
              </Link>

            </div>

            <div className="my-6 h-px w-16 bg-white/15" />

            <h5 className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-white/80">
              Regions
            </h5>

            <div className="flex flex-col gap-3">

              <Link
                href="/countries"
                className="text-white/70 transition hover:text-white"
              >
                Global Presence
              </Link>

              <Link
                href="/countries/apac"
                className="text-white/70 transition hover:text-white"
              >
                Asia-Pacific
              </Link>

              <Link
                href="/countries/india"
                className="text-white/70 transition hover:text-white"
              >
                India
              </Link>

              <Link
                href="/countries/europe"
                className="text-white/70 transition hover:text-white"
              >
                Europe
              </Link>

              <Link
                href="/countries/americas"
                className="text-white/70 transition hover:text-white"
              >
                Americas
              </Link>

            </div>

          </div>

          {/* Services */}

          <div>

            <h4 className="mb-5 font-bold">
              Services
            </h4>

            <div className="flex flex-col gap-3">

              <Link
                href="/services"
                className="text-white/70 transition hover:text-white"
              >
                Overview
              </Link>

              <Link
                href="/services#technology"
                className="text-white/70 transition hover:text-white"
              >
                Technology Consulting
              </Link>

              <Link
                href="/services#hr"
                className="text-white/70 transition hover:text-white"
              >
                HR Consulting
              </Link>

              <Link
                href="/services#staffing"
                className="text-white/70 transition hover:text-white"
              >
                Staffing Solutions
              </Link>

            </div>

          </div>

          {/* Contact */}

          <div>

            <h4 className="mb-5 font-bold">
              Contact
            </h4>

            <div className="space-y-5 text-white/70">

              <div className="flex items-start gap-3">

                <Mail
                  size={18}
                  className="mt-1 shrink-0"
                />

                <span>
                  info@ubique-systems.com
                </span>

              </div>

              <div className="flex items-start gap-3">

                <Phone
                  size={18}
                  className="mt-1 shrink-0"
                />

                <span>
                  +44 XX XXXX XXXX
                </span>

              </div>

              <div className="flex items-start gap-3">

                <MapPin
                  size={18}
                  className="mt-1 shrink-0"
                />

                <span>
                  Global Headquarters
                  <br />
                  Kolkata, India
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* Bottom */}

        <div className="mt-16 border-t border-white/10 pt-8">

          <p className="text-center text-sm uppercase tracking-[0.2em] text-white/60">
            Enterprise Consulting • Technology Solutions • Workforce Expertise
          </p>

          <div className="mt-8 flex flex-col items-center justify-between gap-4 text-sm text-white/50 md:flex-row">

            <p>
              © 2026 Ubique Systems Pvt. Ltd. All Rights Reserved.
            </p>

            <p>
              Global Headquarters • Kolkata, India
            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}