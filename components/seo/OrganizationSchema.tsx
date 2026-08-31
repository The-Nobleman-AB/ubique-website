import { offices } from "@/data/offices";
import { absoluteUrl, siteConfig } from "@/lib/site";

/**
 * Organization + ProfessionalService JSON-LD, emitted once from the root
 * layout. Gives search engines the office network, the certification and the
 * social profiles that would otherwise only exist as rendered text.
 */
export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": ["Organization", "ProfessionalService"],
    "@id": absoluteUrl("/#organization"),
    name: siteConfig.name,
    legalName: siteConfig.legalName,
    url: siteConfig.url,
    description: siteConfig.description,
    email: siteConfig.email,
    telephone: siteConfig.phone ?? undefined,

    sameAs: Object.values(siteConfig.social),

    hasCredential: siteConfig.certifications.map((certification) => ({
      "@type": "EducationalOccupationalCredential",
      credentialCategory: "certification",
      name: certification.name,
      description: certification.description,
    })),

    address: offices
      .filter((office) => office.headquarters)
      .map((office) => ({
        "@type": "PostalAddress",
        streetAddress: office.address.join(", "),
        addressLocality: office.city,
        postalCode: office.postcode,
        addressCountry: office.countryCode,
      })),

    location: offices.map((office) => ({
      "@type": "Place",
      name: `${siteConfig.name} — ${office.city}`,
      address: {
        "@type": "PostalAddress",
        streetAddress: office.address.join(", "),
        addressLocality: office.city,
        postalCode: office.postcode,
        addressCountry: office.countryCode,
      },
      ...(office.phone ? { telephone: office.phone } : {}),
    })),

    contactPoint: offices
      .filter((office) => office.phone)
      .map((office) => ({
        "@type": "ContactPoint",
        contactType: "sales",
        telephone: office.phone,
        email: office.email,
        areaServed: office.countryCode,
        availableLanguage: ["en"],
      })),
  };

  return (
    <script
      type="application/ld+json"
      // Static, developer-authored JSON — no user input reaches this string.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
