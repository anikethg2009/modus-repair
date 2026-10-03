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
      <PageHeader index="02" label="Work" title="Our work" intro="A sample of recent repairs, before and after." />

      <div className="wrap pb-16 md:pb-24">
        {portfolio.map((item, i) => (
          <article key={item.title} className="grid gap-8 border-b border-ink py-10 md:grid-cols-12 md:gap-10 md:py-14">
            <div className="grid grid-cols-2 gap-px border border-ink bg-ink md:col-span-7">
              {(["before", "after"] as const).map((kind) => (
                <div key={kind} className="relative bg-paper">
                  <Image
                    src={item[kind]}
                    alt={`${item.title}, ${kind} repair`}
                    width={1254}
                    height={1254}
                    className="aspect-square w-full object-cover"
                  />
                  <span className="eyebrow absolute left-0 top-0 border-b border-r border-ink bg-paper px-2 py-1 !text-ink">
                    {kind}
                  </span>
                </div>
              ))}
            </div>
            <div className="md:col-span-5 md:pt-1">
              <p className="eyebrow">
                No. {String(i + 1).padStart(2, "0")} · {item.category}
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold leading-tight tracking-[-0.02em]">{item.title}</h2>
              <p className="mt-3 text-ink-muted">{item.description}</p>
            </div>
          </article>
        ))}
      </div>

      <CtaBand />
    </>
  );
}
