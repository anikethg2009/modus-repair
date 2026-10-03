import Image from "next/image";
import { portfolio } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";

export const metadata = pageMetadata(
  "Our Work",
  "Before and after photos of real phone, laptop, console, and household repairs completed for customers in Loudoun County, VA.",
  "/work",
);

export default function WorkPage() {
  return (
    <>
      <PageHeader title="Our work" intro="A sample of recent repairs, before and after." />

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 md:grid-cols-2">
        {portfolio.map((item) => (
          <article key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
            <div className="grid grid-cols-2">
              {(["before", "after"] as const).map((kind) => (
                <div key={kind} className="relative">
                  <Image
                    src={item[kind]}
                    alt={`${item.title}, ${kind} repair`}
                    width={1254}
                    height={1254}
                    className="aspect-square w-full object-cover"
                  />
                  <span className="absolute left-2 top-2 rounded bg-black/60 px-2 py-0.5 text-xs font-semibold uppercase text-white">
                    {kind}
                  </span>
                </div>
              ))}
            </div>
            <div className="p-5">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-600">{item.category}</p>
              <h2 className="mt-1 text-lg font-semibold text-brand-900">{item.title}</h2>
              <p className="mt-2 text-slate-600">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
