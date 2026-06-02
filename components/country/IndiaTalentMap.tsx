import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#071B3A] text-white pt-24 pb-10">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 gap-16">

          <div>

            <h2 className="text-3xl font-black">
              UBIQUE
            </h2>

            <p className="text-white/70 mt-6">
              Helping organizations build world-class teams
              and professionals build global careers.
            </p>

          </div>

          <div>

            <h4 className="font-bold mb-5">
              Company
            </h4>

            <div className="space-y-3">

              <Link href="/about">
                About
              </Link>

              <br />

              <Link href="/careers">
                Careers
              </Link>

              <br />

              <Link href="/contact">
                Contact
              </Link>

            </div>

          </div>

          <div>

            <h4 className="font-bold mb-5">
              Services
            </h4>

            <div className="space-y-3">

              <p>IT Consulting</p>

              <p>HR Consulting</p>

              <p>Staffing Solutions</p>

            </div>

          </div>

          <div>

            <h4 className="font-bold mb-5">
              Contact
            </h4>

            <div className="space-y-4 text-white/70">

              <div className="flex gap-3">

                <Mail size={18} />

                <span>
                  info@ubique-systems.com
                </span>

              </div>

              <div className="flex gap-3">

                <Phone size={18} />

                <span>
                  +44 XX XXXX XXXX
                </span>

              </div>

              <div className="flex gap-3">

                <MapPin size={18} />

                <span>
                  Global Presence
                </span>

              </div>

            </div>

          </div>

        </div>

        <div
          className="
          border-t
          border-white/10
          mt-16
          pt-8
          text-white/50
          "
        >
          © 2026 Ubique Systems. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
}