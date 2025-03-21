// PricingLayout.tsx
export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="min-h-screen bg-gray-100 p-6">
      <div >
        {children}
      </div>
    </section>
  );
}
