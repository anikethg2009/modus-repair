import RegMark from "./RegMark";

type Props = { title: string; intro?: string; index: string; label: string };

export default function PageHeader({ title, intro, index, label }: Props) {
  return (
    <section className="border-b border-ink">
      <div className="wrap pb-10 pt-10 md:pb-16 md:pt-20">
        <div className="flex items-center justify-between">
          <p className="eyebrow">
            {index} / {label}
          </p>
          <RegMark size={14} className="text-ink-muted" />
        </div>
        <div className="mt-6 grid gap-6 md:mt-10 md:grid-cols-12 md:gap-10">
          <h1 className="font-display text-5xl font-bold leading-[0.98] tracking-[-0.03em] md:col-span-8 md:text-7xl">
            {title}
          </h1>
          {intro && <p className="text-lg text-ink-muted md:col-span-4 md:self-end">{intro}</p>}
        </div>
      </div>
    </section>
  );
}
