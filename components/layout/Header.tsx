"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );
  }, []);

  return (
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
      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          h-24
          flex
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

          {/* NAVIGATION */}

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
              className="hover:text-[#155EEF] transition"
            >
              Services
            </Link>

            <Link
              href="/countries/india"
              className="hover:text-[#155EEF] transition"
            >
              Countries
            </Link>

            <Link
              href="/about"
              className="hover:text-[#155EEF] transition"
            >
              About
            </Link>

            <Link
              href="/careers"
              className="hover:text-[#155EEF] transition"
            >
              Careers
            </Link>

            <Link
              href="/insights"
              className="hover:text-[#155EEF] transition"
            >
              Insights
            </Link>
          </nav>

          {/* ACTIONS */}

          <div className="flex items-center gap-4">

            <button
              className={`
              hidden
              lg:block
              px-5
              py-3
              rounded-xl
              transition-all
              ${
                scrolled
                  ? "border border-gray-300 text-[#071B3A]"
                  : "border border-white/20 text-white"
              }
              `}
            >
              Contact
            </button>

            <button
              className="
              px-5
              py-3
              rounded-xl
              bg-[#12B76A]
              text-white
              font-semibold
              hover:opacity-90
              transition
              "
            >
              Hire Talent
            </button>

          </div>
        </div>

      </div>
    </header>
  );
}