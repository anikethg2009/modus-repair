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
      <PageHeader title="Services and prices" intro="Upfront starting prices for the most common repairs. Don't see your device? Ask anyway." />

      <div className="mx-auto max-w-4xl px-4 py-12">
        <div className="rounded-xl border border-brand-100 bg-brand-50 p-5">
          <p className="font-semibold text-brand-900">Free diagnostic on every device</p>
          <p className="mt-1 text-slate-700">{diagnosticNote}</p>
        </div>

        <div className="mt-10 space-y-10">
          {serviceCategories.map((cat) => (
            <section key={cat.id} id={cat.id} className="scroll-mt-24">
              <h2 className="text-2xl font-bold text-brand-900">{cat.title}</h2>
              <p className="mt-1 text-slate-600">{cat.blurb}</p>
              <ul className="mt-4 divide-y divide-slate-200 rounded-xl border border-slate-200">
                {cat.services.map((s) => (
                  <li key={s.name} className="flex items-baseline justify-between gap-4 px-5 py-4">
                    <span className="text-slate-800">{s.name}</span>
                    <span className="shrink-0 font-semibold text-brand-800">{s.price}</span>
                  </li>
                ))}
              </ul>
            </section>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
