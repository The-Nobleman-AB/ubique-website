import Image from "next/image";

import { siteConfig } from "@/lib/site";
import { cn } from "@/lib/cn";

/**
 * The Ubique wordmark.
 *
 * Renders the logo file when one is configured in siteConfig.brand, and the
 * typographic wordmark when not. That fallback is the point: the site ships
 * and looks finished before the artwork exists, and adding the real logo is a
 * two-line change rather than a hunt through every header and footer.
 *
 * `tone` picks the variant. The header sits over a dark hero and turns white
 * on scroll, so a single-colour logo would vanish against one of the two.
 */

export interface LogoProps {
  tone: "light" | "dark";
  /** Overrides the configured height — the mobile menu uses a smaller mark. */
  height?: number;
  className?: string;
}

export default function Logo({ tone, height, className }: LogoProps) {
  const { brand, name } = siteConfig;

  const src = tone === "light" ? brand.logoWhite : brand.logo;
  const aspect = tone === "light" ? brand.logoWhiteAspect : brand.logoAspect;
  const size = height ?? brand.logoHeight;

  if (src) {
    return (
      <Image
        src={src}
        alt={name}
        height={size}
        /* Reserves space at roughly the right shape so the header doesn't jump
           while the image loads. The intrinsic ratio still wins once it
           arrives, so an imprecise value costs a little layout shift, never a
           distorted logo. */
        width={Math.round(size * aspect)}
        priority
        className={cn("h-auto w-auto", className)}
        style={{ height: size }}
      />
    );
  }

  return (
    <span
      className={cn(
        "font-bold tracking-tight",
        tone === "light" ? "text-white" : "text-navy",
        className,
      )}
      style={{ fontSize: size * 0.8, lineHeight: 1 }}
    >
      <span className="sr-only">{name}</span>
      <span aria-hidden="true">
        UBIQUE<span className="text-accent">.</span>
      </span>
    </span>
  );
}
