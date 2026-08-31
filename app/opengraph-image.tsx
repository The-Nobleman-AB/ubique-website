import { ImageResponse } from "next/og";

import { siteConfig } from "@/lib/site";

/**
 * Default Open Graph card, generated at build time. Every page inherits it
 * unless it defines its own — so sharing any URL on LinkedIn produces a
 * branded card rather than a bare link.
 */

export const alt = `${siteConfig.name} — ${siteConfig.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        background: "#071b3a",
        padding: "72px 80px",
        fontFamily: "sans-serif",
        position: "relative",
      }}
    >
      {/* brand glow */}
      <div
        style={{
          position: "absolute",
          top: -200,
          right: -160,
          width: 640,
          height: 640,
          borderRadius: 9999,
          background: "#155eef",
          opacity: 0.35,
          filter: "blur(120px)",
          display: "flex",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: -220,
          left: -140,
          width: 520,
          height: 520,
          borderRadius: 9999,
          background: "#12b76a",
          opacity: 0.28,
          filter: "blur(120px)",
          display: "flex",
        }}
      />

      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <span
          style={{
            fontSize: 34,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.02em",
          }}
        >
          UBIQUE
        </span>
        <span style={{ fontSize: 34, fontWeight: 700, color: "#12b76a" }}>
          .
        </span>
      </div>

      <div style={{ display: "flex", flexDirection: "column" }}>
        <div
          style={{
            fontSize: 20,
            fontWeight: 600,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "#12b76a",
            display: "flex",
          }}
        >
          Global Workforce Partner
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 76,
            fontWeight: 700,
            color: "#ffffff",
            letterSpacing: "-0.035em",
            lineHeight: 1.05,
            display: "flex",
          }}
        >
          {siteConfig.tagline}
        </div>

        <div
          style={{
            marginTop: 28,
            fontSize: 27,
            color: "rgba(255,255,255,0.7)",
            lineHeight: 1.4,
            maxWidth: 880,
            display: "flex",
          }}
        >
          ISO 27001-certified IT recruitment and consulting across 15+
          countries.
        </div>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 20,
          paddingTop: 28,
          borderTop: "1px solid rgba(255,255,255,0.15)",
          fontSize: 22,
          color: "rgba(255,255,255,0.55)",
        }}
      >
        <span>SAP</span>
        <span>·</span>
        <span>Oracle</span>
        <span>·</span>
        <span>Salesforce</span>
        <span>·</span>
        <span>Dynamics 365</span>
        <span>·</span>
        <span>Cloud</span>
        <span>·</span>
        <span>Data &amp; AI</span>
      </div>
    </div>,
    size,
  );
}
