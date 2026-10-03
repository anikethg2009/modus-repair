import { diagnosticNote, serviceCategories } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";

export const metadata = pageMetadata(
  "Services and Prices",
  "Phone, tablet, laptop, game console, controller, and household repair with upfront starting prices and a free diagnostic. Serving Loudoun County, VA and nearby areas.",
  "/services",
);

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        index="01"
        label="Services"
        title="Services and prices"
        intro="Upfront starting prices for the most common repairs. Don't see your device? Ask anyway."
      />

      <div className="wrap pb-16 md:pb-24">
        <div className="grid gap-6 border-b border-ink py-10 md:grid-cols-12 md:gap-10 md:py-14">
          <p className="eyebrow md:col-span-4">Note</p>
          <div className="border-l-2 border-signal pl-5 md:col-span-8">
            <p className="font-display text-xl font-bold tracking-[-0.01em]">Free diagnostic on every device</p>
            <p className="mt-2 max-w-2xl text-ink-muted">{diagnosticNote}</p>
          </div>
        </div>

        {serviceCategories.map((cat, i) => (
          <section
            key={cat.id}
            id={cat.id}
            className="grid scroll-mt-20 gap-6 border-b border-ink py-10 md:grid-cols-12 md:gap-10 md:py-14"
          >
            <div className="md:col-span-4">
              <p className="eyebrow">Section 0{i + 1}</p>
              <h2 className="mt-3 font-display text-2xl font-bold leading-tight tracking-[-0.015em] md:text-3xl">
                {cat.title}
              </h2>
              <p className="mt-2 text-ink-muted">{cat.blurb}</p>
            </div>
            <div className="md:col-span-8">
              <div className="eyebrow flex justify-between border-b border-ink pb-2">
                <span>Service</span>
                <span>Price</span>
              </div>
              <ul>
                {cat.services.map((s) => (
                  <li key={s.name} className="flex items-baseline gap-3 py-4">
                    <span className="min-w-0 text-[1.0625rem]">{s.name}</span>
                    <span aria-hidden="true" className="relative -top-1 min-w-6 flex-1 border-b-2 border-dotted border-ink/30" />
                    <span className="shrink-0 font-mono text-[0.9375rem] font-medium tabular-nums">{s.price}</span>
                  </li>
                ))}
              </ul>
            </div>
          </section>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
