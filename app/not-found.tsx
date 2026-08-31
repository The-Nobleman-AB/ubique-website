import Link from "next/link";
import { ArrowRight } from "lucide-react";

import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const suggestions = [
  {
    name: "Services",
    href: "/services",
    description: "Resourcing, consulting and our technology practices.",
  },
  {
    name: "Open roles",
    href: "/careers",
    description: "Current vacancies across every region we operate in.",
  },
  {
    name: "Global presence",
    href: "/countries",
    description: "Where our offices and delivery centres are.",
  },
  {
    name: "Contact us",
    href: "/contact",
    description: "Talk to the team nearest you.",
  },
];

export default function NotFound() {
  return (
    <>
      <Header />

      <section className="bg-navy pt-20" data-surface="dark">
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-32">
          <p className="eyebrow text-accent">Error 404</p>

          <h1 className="display-2 mt-5 font-bold text-white">
            We couldn&rsquo;t find that page
          </h1>

          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            The link may be out of date, or the page may have moved. Here are
            the places people usually want.
          </p>

          <ul className="mt-12 grid gap-3 sm:grid-cols-2">
            {suggestions.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="group rounded-card hover:border-accent/50 flex h-full flex-col border border-white/15 bg-white/5 p-6 transition-colors hover:bg-white/10"
                >
                  <span className="flex items-center gap-2 font-semibold text-white">
                    {item.name}
                    <ArrowRight
                      size={16}
                      aria-hidden="true"
                      className="transition-transform duration-200 group-hover:translate-x-1"
                    />
                  </span>
                  <span className="mt-2 text-sm leading-relaxed text-white/60">
                    {item.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>

          <p className="mt-10 text-sm text-white/50">
            Still stuck?{" "}
            <a
              href="mailto:info@ubique-systems.com"
              className="text-accent font-medium underline-offset-4 hover:underline"
            >
              Email us
            </a>{" "}
            and we&rsquo;ll point you the right way.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
