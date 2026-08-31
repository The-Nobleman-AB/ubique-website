import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import OrganizationSchema from "@/components/seo/OrganizationSchema";

/**
 * The public site's chrome. Everything under app/(site) gets the header,
 * footer and organisation schema; /admin and /api deliberately don't.
 */
export default function SiteLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <Header />

      <main id="main-content" className="flex-1">
        {children}
      </main>

      <Footer />

      <OrganizationSchema />
    </>
  );
}
