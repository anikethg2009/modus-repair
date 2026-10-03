// Left-column section heading: mono index label over a grotesk title.
export default function SectionHead({ index, label, title }: { index: string; label: string; title: string }) {
  return (
    <div>
      <p className="eyebrow">
        {index} / {label}
      </p>
      <h2 className="mt-4 font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] md:text-5xl">{title}</h2>
    </div>
  );
}
