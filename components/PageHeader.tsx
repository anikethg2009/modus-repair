export default function PageHeader({ title, intro }: { title: string; intro?: string }) {
  return (
    <section className="border-b border-slate-200 bg-brand-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:py-14">
        <h1 className="text-3xl font-bold tracking-tight text-brand-900 sm:text-4xl">{title}</h1>
        {intro && <p className="mt-3 max-w-2xl text-lg text-slate-600">{intro}</p>}
      </div>
    </section>
  );
}
