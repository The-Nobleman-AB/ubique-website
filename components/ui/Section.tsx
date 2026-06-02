export default function Section({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="py-32">
      {children}
    </section>
  );
}