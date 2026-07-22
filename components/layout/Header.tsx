"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const navigation = [
  {
    name: "Services",
    href: "/services",
  },
  {
    name: "Industries",
    href: "/industries",
  },
  {
    name: "Global Presence",
    href: "/countries",
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
];

export default function Header() {

  const [scrolled, setScrolled] =
    useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  useEffect(() => {

    const handleScroll = () => {

      setScrolled(window.scrollY > 40);

    };

    window.addEventListener(
      "scroll",
      handleScroll,
      { passive: true }
    );

    return () => {

      window.removeEventListener(
        "scroll",
        handleScroll
      );

    };

  }, []);

  useEffect(() => {

    document.documentElement.style.overflow =
      mobileMenuOpen ? "hidden" : "";

    return () => {

      document.documentElement.style.overflow =
        "";

    };

  }, [mobileMenuOpen]);

  return (

    <>

      {/* HEADER */}

      <header
        className={`
          fixed
          inset-x-0
          top-0
          z-50
          transition-all
          duration-300
          ${
            scrolled
              ? "bg-white/95 shadow-lg"
              : "border-b border-white/10 bg-[#071B3A]/90"
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

            {/* Logo */}

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

            {/* Desktop Navigation */}

            <nav
              className={`
                hidden
                items-center
                gap-10
                text-sm
                font-medium
                lg:flex
                ${
                  scrolled
                    ? "text-[#071B3A]"
                    : "text-white"
                }
              `}
            >

              {navigation.map((item) => (

                <Link
                  key={item.name}
                  href={item.href}
                  className="
                    transition-colors
                    duration-300
                    hover:text-[#155EEF]
                  "
                >
                  {item.name}
                </Link>

              ))}

            </nav>

            {/* Right */}

            <div
              className="
                flex
                items-center
                gap-4
              "
            >

              <Link
                href="/contact"
                className="
                  hidden
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
                  lg:inline-flex
                "
              >
                Contact Us
              </Link>

              {/* Mobile Button */}

              <button
                type="button"
                aria-label="Open Menu"
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
                  transition-colors
                  duration-300
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

      {/* ==========================
          MOBILE OVERLAY
      ========================== */}

      <div
        onClick={() =>
          setMobileMenuOpen(false)
        }
        className={`
          fixed
          inset-0
          z-40
          bg-black/30
          transition-opacity
          duration-150
          lg:hidden
          ${
            mobileMenuOpen
              ? "opacity-100 pointer-events-auto"
              : "pointer-events-none opacity-0"
          }
        `}
      />

      {/* ==========================
          MOBILE DRAWER
      ========================== */}

      <aside
        className={`
          fixed
          right-0
          top-0
          z-50
          flex
          h-dvh
          w-[320px]
          max-w-[88vw]
          flex-col
          bg-white
          shadow-2xl
          transition-transform
          duration-180
          ease-out
          will-change-transform
          lg:hidden
          ${
            mobileMenuOpen
              ? "translate-x-0 pointer-events-auto"
              : "translate-x-full pointer-events-none"
          }
        `}
      >

        {/* Drawer Header */}

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
            aria-label="Close Menu"
            onClick={() =>
              setMobileMenuOpen(false)
            }
            className="
              rounded-xl
              p-2
              transition-colors
              hover:bg-gray-100
            "
          >
            <X size={24} />
          </button>

        </div>
          {/* Drawer Navigation */}

          <nav
            className="
              flex-1
              overflow-y-auto
              px-6
              py-8
            "
          >

            {navigation.map((item) => (

              <Link
                key={item.name}
                href={item.href}
                onClick={() =>
                  setMobileMenuOpen(false)
                }
                className="
                  group
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

                <span>
                  {item.name}
                </span>

                <ArrowIcon />

              </Link>

            ))}

          </nav>

          {/* Bottom CTA */}

          <div
            className="
              border-t
              border-gray-200
              p-6
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

    );

  }

  function ArrowIcon() {

    return (

      <svg
        width="18"
        height="18"
        viewBox="0 0 24 24"
        fill="none"
        className="
          transition-transform
          duration-300
          group-hover:translate-x-1
        "
      >
        <path
          d="M5 12H19"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M13 6L19 12L13 18"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

    );

  }
