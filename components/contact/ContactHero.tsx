import { Clock, Mail, Phone } from "lucide-react";

import PageHero from "@/components/ui/PageHero";
import { headquarters } from "@/data/offices";
import { siteConfig } from "@/lib/site";

export default function ContactHero() {
  return (
    <PageHero
      eyebrow="Contact Ubique"
      title="Start the conversation"
      intro="Whether you're hiring, scoping a programme or looking for your next role — tell us what you need and we'll put you with the specialist who knows your market."
      actions={[
        { label: "Send an enquiry", href: "#contact-form" },
        { label: "See all offices", href: "#offices", variant: "ghost" },
      ]}
      aside={
        <div className="rounded-panel border border-white/10 bg-white/5 p-8 backdrop-blur-sm">
          <p className="eyebrow text-white/50">Quick contact</p>

          <dl className="mt-6 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <Mail
                size={18}
                aria-hidden="true"
                className="text-accent mt-1 shrink-0"
              />
              <div>
                <dt className="text-xs tracking-wider text-white/50 uppercase">
                  Email
                </dt>
                <dd className="mt-1">
                  <a
                    href={`mailto:${siteConfig.email}`}
                    className="text-white underline-offset-4 hover:underline"
                  >
                    {siteConfig.email}
                  </a>
                </dd>
              </div>
            </div>

            {headquarters.phone && (
              <div className="flex items-start gap-4">
                <Phone
                  size={18}
                  aria-hidden="true"
                  className="text-accent mt-1 shrink-0"
                />
                <div>
                  <dt className="text-xs tracking-wider text-white/50 uppercase">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a
                      href={`tel:${headquarters.phone}`}
                      className="text-white underline-offset-4 hover:underline"
                    >
                      {headquarters.phoneDisplay}
                    </a>
                  </dd>
                </div>
              </div>
            )}

            <div className="flex items-start gap-4">
              <Clock
                size={18}
                aria-hidden="true"
                className="text-accent mt-1 shrink-0"
              />
              <div>
                <dt className="text-xs tracking-wider text-white/50 uppercase">
                  Response time
                </dt>
                <dd className="mt-1 text-white">Within one working day</dd>
              </div>
            </div>
          </dl>
        </div>
      }
    />
  );
}
