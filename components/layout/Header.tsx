"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronDown, Menu, Phone, X } from "lucide-react";

import { navigation, type NavItem } from "@/data/navigation";
import { headquarters } from "@/data/offices";
import { cn } from "@/lib/cn";

export default function Header() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const headerRef = useRef<HTMLElement>(null);

  /* -------------------------------------------------- scroll state */

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* -------------------------------------------------- route change */

  useEffect(() => {
    setMobileOpen(false);
    setOpenMenu(null);
  }, [pathname]);

  /* -------------------------------------------------- scroll lock */

  useEffect(() => {
    if (!mobileOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [mobileOpen]);

  /* -------------------------------------------------- escape to close */

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "Escape") return;
      setOpenMenu(null);
      setMobileOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, []);

  /* -------------------------------------------------- mega menu timing
     A small close delay stops the panel vanishing while the pointer
     crosses the gap between the trigger and the panel. */

  const openWithCancel = useCallback((name: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setOpenMenu(name);
  }, []);

  const scheduleClose = useCallback(() => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    closeTimer.current = setTimeout(() => setOpenMenu(null), 140);
  }, []);

  useEffect(
    () => () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    },
    [],
  );

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  /* Solid at every scroll position — a translucent bar over a light hero
     leaves the nav links sitting on an unpredictable background. */
  const bar = scrolled
    ? "bg-white/95 backdrop-blur-md shadow-lift"
    : "bg-navy border-b border-white/10";

  const linkColor = scrolled ? "text-navy" : "text-white";

  return (
    <>
      <header
        ref={headerRef}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-colors duration-200",
          bar,
        )}
        data-surface={scrolled ? "light" : "dark"}
        onMouseLeave={scheduleClose}
      >
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex h-20 items-center justify-between gap-8">
            {/* ---------------------------------------------- logo */}

            <Link
              href="/"
              className={cn(
                "shrink-0 text-2xl font-bold tracking-tight transition-colors",
                linkColor,
              )}
            >
              <span className="sr-only">Ubique Systems — home</span>
              <span aria-hidden="true">
                UBIQUE
                <span className="text-accent">.</span>
              </span>
            </Link>

            {/* ---------------------------------------------- desktop nav */}

            <nav
              aria-label="Main"
              className="hidden flex-1 items-center justify-center lg:flex"
            >
              <ul className="flex items-center gap-1">
                {navigation.map((item) => (
                  <NavEntry
                    key={item.name}
                    item={item}
                    open={openMenu === item.name}
                    active={isActive(item.href)}
                    scrolled={scrolled}
                    onOpen={() => openWithCancel(item.name)}
                    onClose={scheduleClose}
                    onToggle={() =>
                      setOpenMenu((current) =>
                        current === item.name ? null : item.name,
                      )
                    }
                  />
                ))}
              </ul>
            </nav>

            {/* ---------------------------------------------- right */}

            <div className="flex shrink-0 items-center gap-2">
              {headquarters.phone && (
                <a
                  href={`tel:${headquarters.phone}`}
                  className={cn(
                    "rounded-control hidden items-center gap-2 px-3 py-2 text-sm font-medium transition-colors xl:inline-flex",
                    scrolled
                      ? "text-navy hover:bg-brand-tint"
                      : "text-white/80 hover:bg-white/10 hover:text-white",
                  )}
                >
                  <Phone size={15} aria-hidden="true" />
                  {headquarters.phoneDisplay}
                </a>
              )}

              <Link
                href="/contact"
                className="rounded-control bg-accent hover:bg-accent-dark hidden items-center px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-200 lg:inline-flex"
              >
                Contact Us
              </Link>

              <button
                type="button"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
                aria-controls="mobile-menu"
                onClick={() => setMobileOpen(true)}
                className={cn(
                  "rounded-control flex h-11 w-11 items-center justify-center transition-colors lg:hidden",
                  scrolled
                    ? "text-navy hover:bg-brand-tint"
                    : "text-white hover:bg-white/10",
                )}
              >
                <Menu size={24} aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------ mega panel */}

        {navigation.map((item) =>
          item.columns ? (
            <MegaPanel
              key={item.name}
              item={item}
              open={openMenu === item.name}
              onMouseEnter={() => openWithCancel(item.name)}
              onMouseLeave={scheduleClose}
            />
          ) : null,
        )}
      </header>

      {/* Spacer so page content never starts underneath the fixed bar.
          Pages with a full-bleed dark hero pull back over it themselves. */}

      <MobileDrawer
        open={mobileOpen}
        onClose={() => setMobileOpen(false)}
        isActive={isActive}
      />
    </>
  );
}

/* ==================================================================== */

function NavEntry({
  item,
  open,
  active,
  scrolled,
  onOpen,
  onClose,
  onToggle,
}: {
  item: NavItem;
  open: boolean;
  active: boolean;
  scrolled: boolean;
  onOpen: () => void;
  onClose: () => void;
  onToggle: () => void;
}) {
  const base = cn(
    "relative flex items-center gap-1 rounded-control px-3 py-2 text-sm font-medium transition-colors",
    scrolled
      ? "text-navy hover:bg-brand-tint hover:text-brand"
      : "text-white/85 hover:bg-white/10 hover:text-white",
    active && (scrolled ? "text-brand" : "text-white"),
  );

  if (!item.columns) {
    return (
      <li>
        <Link href={item.href} className={base} onMouseEnter={onClose}>
          {item.name}
          {active && (
            <span
              aria-hidden="true"
              className={cn(
                "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
                scrolled ? "bg-brand" : "bg-accent",
              )}
            />
          )}
        </Link>
      </li>
    );
  }

  return (
    <li onMouseEnter={onOpen}>
      <button
        type="button"
        className={base}
        aria-expanded={open}
        aria-controls={`mega-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
        onClick={onToggle}
      >
        {item.name}
        <ChevronDown
          size={15}
          aria-hidden="true"
          className={cn(
            "transition-transform duration-200",
            open && "rotate-180",
          )}
        />
        {active && (
          <span
            aria-hidden="true"
            className={cn(
              "absolute inset-x-3 -bottom-0.5 h-0.5 rounded-full",
              scrolled ? "bg-brand" : "bg-accent",
            )}
          />
        )}
      </button>
    </li>
  );
}

/* ==================================================================== */

function MegaPanel({
  item,
  open,
  onMouseEnter,
  onMouseLeave,
}: {
  item: NavItem;
  open: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  return (
    <div
      id={`mega-${item.name.replace(/\s+/g, "-").toLowerCase()}`}
      hidden={!open}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className="border-line shadow-panel absolute inset-x-0 top-full hidden border-t bg-white lg:block"
    >
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-[1fr_auto]">
        <div
          className={cn(
            "grid gap-8",
            item.columns!.length > 2 ? "lg:grid-cols-3" : "lg:grid-cols-2",
          )}
        >
          {item.columns!.map((column, index) => (
            <div key={column.heading || index}>
              {column.heading && (
                <h3 className="eyebrow text-muted mb-4">{column.heading}</h3>
              )}

              <ul className="flex flex-col gap-1">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="group rounded-control hover:bg-brand-tint block px-3 py-2.5 transition-colors"
                    >
                      <span className="text-navy group-hover:text-brand block text-sm font-semibold">
                        {link.name}
                      </span>
                      {link.description && (
                        <span className="text-muted mt-0.5 block text-sm leading-snug">
                          {link.description}
                        </span>
                      )}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {item.feature && (
          <aside className="rounded-card bg-navy max-w-xs p-7 text-white lg:w-72">
            <p className="eyebrow text-accent">{item.feature.eyebrow}</p>
            <p className="mt-3 text-lg leading-snug font-semibold">
              {item.feature.title}
            </p>
            <p className="mt-2 text-sm leading-relaxed text-white/70">
              {item.feature.description}
            </p>
            <Link
              href={item.feature.href}
              className="text-accent mt-5 inline-flex items-center gap-1.5 text-sm font-semibold hover:underline"
            >
              {item.feature.cta}
              <span aria-hidden="true">→</span>
            </Link>
          </aside>
        )}
      </div>
    </div>
  );
}

/* ==================================================================== */

function MobileDrawer({
  open,
  onClose,
  isActive,
}: {
  open: boolean;
  onClose: () => void;
  isActive: (href: string) => boolean;
}) {
  const [expanded, setExpanded] = useState<string | null>(null);

  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={cn(
          "bg-navy/40 fixed inset-0 z-40 backdrop-blur-sm transition-opacity duration-200 lg:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        )}
      />

      <aside
        id="mobile-menu"
        aria-label="Main"
        aria-hidden={!open}
        className={cn(
          "shadow-panel fixed top-0 right-0 z-50 flex h-dvh w-[340px] max-w-[90vw] flex-col bg-white transition-transform duration-200 ease-out lg:hidden",
          open ? "translate-x-0" : "pointer-events-none translate-x-full",
        )}
      >
        <div className="border-line flex items-center justify-between border-b px-6 py-5">
          <span className="text-navy text-xl font-bold">
            UBIQUE<span className="text-accent">.</span>
          </span>

          <button
            type="button"
            aria-label="Close menu"
            onClick={onClose}
            className="rounded-control text-navy hover:bg-brand-tint p-2 transition-colors"
          >
            <X size={22} aria-hidden="true" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-4 py-5">
          <ul className="flex flex-col gap-1">
            {navigation.map((item) => {
              const hasChildren = Boolean(item.columns);
              const isOpen = expanded === item.name;

              return (
                <li key={item.name}>
                  <div className="flex items-center">
                    <Link
                      href={item.href}
                      onClick={onClose}
                      className={cn(
                        "rounded-control flex-1 px-4 py-3 text-base font-semibold transition-colors",
                        isActive(item.href)
                          ? "bg-brand-tint text-brand"
                          : "text-navy hover:bg-surface",
                      )}
                    >
                      {item.name}
                    </Link>

                    {hasChildren && (
                      <button
                        type="button"
                        aria-label={`${isOpen ? "Collapse" : "Expand"} ${item.name}`}
                        aria-expanded={isOpen}
                        onClick={() => setExpanded(isOpen ? null : item.name)}
                        className="rounded-control text-muted hover:bg-surface hover:text-navy p-3 transition-colors"
                      >
                        <ChevronDown
                          size={18}
                          aria-hidden="true"
                          className={cn(
                            "transition-transform duration-200",
                            isOpen && "rotate-180",
                          )}
                        />
                      </button>
                    )}
                  </div>

                  {hasChildren && isOpen && (
                    <ul className="border-line mb-2 ml-4 flex flex-col gap-0.5 border-l pl-3">
                      {item
                        .columns!.flatMap((column) => column.links)
                        .map((link) => (
                          <li key={link.href}>
                            <Link
                              href={link.href}
                              onClick={onClose}
                              className="rounded-control text-muted hover:bg-surface hover:text-brand block px-3 py-2 text-sm transition-colors"
                            >
                              {link.name}
                            </Link>
                          </li>
                        ))}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-line border-t p-5">
          {headquarters.phone && (
            <a
              href={`tel:${headquarters.phone}`}
              className="rounded-control border-line text-navy hover:bg-surface mb-3 flex items-center justify-center gap-2 border py-3 text-sm font-medium transition-colors"
            >
              <Phone size={16} aria-hidden="true" />
              {headquarters.phoneDisplay}
            </a>
          )}

          <Link
            href="/contact"
            onClick={onClose}
            className="rounded-control bg-accent hover:bg-accent-dark flex items-center justify-center py-3.5 font-semibold text-white transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </aside>
    </>
  );
}
