import CTABand from "@/components/ui/CTABand";

export default function ContactCTA() {
  return (
    <CTABand
      title={"Prefer to start with a conversation?"}
      body={
        "Call the office nearest you, or send an enquiry and we'll route it to the right regional team."
      }
      actions={[
        { label: "Send an enquiry", href: "/contact#contact-form" },
        {
          label: "See all offices",
          href: "/contact#offices",
          variant: "ghost",
        },
      ]}
    />
  );
}
