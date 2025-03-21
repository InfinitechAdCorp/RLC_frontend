export default function ContactusLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-8 py-12 px-4 md:px-8">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-xl p-8 md:p-12 text-center">
        {children}
      </div>
    </section>
  );
}
