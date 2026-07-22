"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {

  const [scrolled, setScrolled] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 50);

    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  useEffect(() => {

    if (mobileMenuOpen) {

      document.body.style.overflow = "hidden";

    } else {

      document.body.style.overflow = "auto";

    }

    return () => {

      document.body.style.overflow = "auto";

    };

  }, [mobileMenuOpen]);

  return (

    <>

      <header
        className={`
        fixed
        top-0
        left-0
        right-0
        z-50
        transition-all
        duration-300
        ${
          scrolled
            ? "bg-white/95 backdrop-blur-xl shadow-lg"
            : "bg-[#071B3A]/75 backdrop-blur-xl border-b border-white/10"
        }
        `}
      >

        <div
          className="
          mx-auto
          max-w-7xl
          px-6
          "
        >

          <div
            className="
            flex
            h-24
            items-center
            justify-between
            "
          >

            {/* LOGO */}

            <Link
              href="/"
              className={`
              text-3xl
              font-black
              transition-colors
              ${
                scrolled
                  ? "text-[#071B3A]"
                  : "text-white"
              }
              `}
            >
              UBIQUE
            </Link>

            {/* DESKTOP NAV */}

            <nav
              className={`
              hidden
              lg:flex
              items-center
              gap-10
              text-sm
              font-medium
              ${
                scrolled
                  ? "text-[#071B3A]"
                  : "text-white"
              }
              `}
            >

              <Link
                href="/services"
                className="transition hover:text-[#155EEF]"
              >
                Services
              </Link>

              <Link
                href="/industries"
                className="transition hover:text-[#155EEF]"
              >
                Industries
              </Link>

              <Link
                href="/countries"
                className="transition hover:text-[#155EEF]"
              >
                Global Presence
              </Link>

              <Link
                href="/about"
                className="transition hover:text-[#155EEF]"
              >
                About
              </Link>

              <Link
                href="/careers"
                className="transition hover:text-[#155EEF]"
              >
                Careers
              </Link>

              <Link
                href="/insights"
                className="transition hover:text-[#155EEF]"
              >
                Insights
              </Link>

            </nav>

            {/* RIGHT */}

            <div
              className="
              flex
              items-center
              gap-4
              "
            >


              {/* Desktop CTA */}

              <Link
                href="/contact"
                className="
                hidden
                lg:inline-flex
                items-center
                rounded-xl
                bg-[#12B76A]
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:scale-[1.02]
                hover:opacity-95
                "
              >
                Contact Us
              </Link>

              {/* Mobile Hamburger */}

              <button
                type="button"
                onClick={() =>
                  setMobileMenuOpen(true)
                }
                className={`
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                transition-all
                lg:hidden
                ${
                  scrolled
                    ? "text-[#071B3A]"
                    : "text-white"
                }
                `}
              >

                <Menu size={28} />

              </button>

            </div>

          </div>

        </div>

      </header>
      {/* ===========================
          MOBILE MENU
      =========================== */}

      {mobileMenuOpen && (

        <>

          {/* Overlay */}

          <div
            className="
            fixed
            inset-0
            z-40
            bg-black/40
            backdrop-blur-sm
            lg:hidden
            "
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}

          <aside
            className="
            fixed
            right-0
            top-0
            z-50
            flex
            h-screen
            w-[340px]
            max-w-[90vw]
            flex-col
            bg-white
            shadow-2xl
            lg:hidden
            "
          >

            {/* Header */}

            <div
              className="
              flex
              items-center
              justify-between
              border-b
              border-gray-200
              p-6
              "
            >

              <h2
                className="
                text-2xl
                font-black
                text-[#071B3A]
                "
              >
                Menu
              </h2>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="
                rounded-xl
                p-2
                transition
                hover:bg-gray-100
                "
              >
                <X size={24} />
              </button>

            </div>

            {/* Navigation */}

            <nav
              className="
              flex-1
              overflow-y-auto
              px-6
              py-8
              "
            >

              {[
                {
                  name: "Services",
                  href: "/services",
                },
                {
                    name:"Industries",
                    href:"/industries",
                },
                {
                    name:"Global Presence",
                    href:"/countries",
                },
                {
                  name: "About",
                  href: "/about",
                },
                {
                  name: "Careers",
                  href: "/careers",
                },
                {
                  name: "Insights",
                  href: "/insights",
                },
              ].map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() =>
                    setMobileMenuOpen(false)
                  }
                  className="
                  flex
                  items-center
                  justify-between
                  rounded-2xl
                  px-5
                  py-5
                  text-lg
                  font-semibold
                  text-[#071B3A]
                  transition-all
                  duration-300
                  hover:bg-[#EEF4FF]
                  hover:text-[#155EEF]
                  "
                >

                  <span>{item.name}</span>

                  <span className="text-xl">
                    →
                  </span>

                </Link>

              ))}

            </nav>

            {/* Bottom CTA */}

            <div
              className="
              border-t
              border-gray-200
              p-6
              space-y-4
              "
            >

            <Link
            href="/contact"
            onClick={() =>
                setMobileMenuOpen(false)
            }
            className="
            flex
            items-center
            justify-center
            rounded-xl
            bg-[#12B76A]
            py-4
            font-semibold
            text-white
            transition-all
            duration-300
            hover:opacity-90
            "
            >
            Contact Us
            </Link>

              

            </div>

          </aside>

        </>

      )}

    </>

  );

}
