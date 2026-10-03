import Link from "next/link";
import Image from "next/image";
import { site, stats, serviceCategories, portfolio, whyLocal, type ServiceCategory } from "@/content/site";
import CtaBand from "@/components/CtaBand";
import RegMark from "@/components/RegMark";
import SectionHead from "@/components/SectionHead";

// Lowest "from $X" price in a category, e.g. "from $49".
function startingPrice(cat: ServiceCategory) {
  const min = Math.min(...cat.services.map((s) => Number(s.price.replace(/[^0-9.]/g, ""))));
  return `from $${min}`;
}

const sectionGrid = "wrap grid gap-10 py-16 md:grid-cols-12 md:gap-x-10 md:py-24";

export default function Home() {
  return (
    <>
      <section className="wrap pb-12 pt-10 md:pb-20 md:pt-20">
        <div className="flex items-center gap-2.5">
          <RegMark size={14} className="text-signal" />
          <p className="eyebrow">{site.serviceArea}</p>
        </div>
        <h1 className="mt-6 max-w-[17ch] font-display text-[2.75rem] font-bold leading-[0.98] tracking-[-0.035em] sm:text-6xl md:mt-10 lg:text-[5.5rem]">
          Phone, laptop, console, and household repair from a local tech you can{" "}
          <span className="underline decoration-signal decoration-[0.09em] underline-offset-[0.1em]">talk to.</span>
        </h1>
        <div className="mt-10 grid gap-8 border-t border-ink pt-6 md:mt-16 md:grid-cols-12 md:gap-10">
          <p className="max-w-md text-lg text-ink-muted md:col-span-5">
            Fast turnaround, fair prices, and a free diagnostic on every device. No mail-in waits, no big-box runaround.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row md:col-span-7 md:justify-end md:self-start">
            <Link href="/request" className="btn btn-primary">
              Request a Repair <span aria-hidden="true">→</span>
            </Link>
            <a href={site.contact.phoneHref} className="btn btn-secondary tabular-nums">
              Call or text {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Track record" className="border-y border-ink">
        <dl className="wrap grid grid-cols-2 md:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`py-7 md:py-10 ${i % 2 === 0 ? "border-r border-ink pr-4" : "pl-5"} ${
                i < 2 ? "border-b border-ink md:border-b-0" : ""
              } md:border-r md:px-6 md:first:pl-0 md:last:border-r-0`}
            >
              <dt className="sr-only">{s.label}</dt>
              <dd className="font-display text-[1.75rem] font-bold leading-none min-[400px]:text-[2rem] tracking-[-0.03em] md:text-6xl">{s.value}</dd>
              <dd className="eyebrow mt-3">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className={sectionGrid}>
        <div className="md:col-span-4">
          <SectionHead index="01" label="Services" title="What I fix" />
        </div>
        <ul className="border-t border-ink md:col-span-8 md:row-span-2">
          {serviceCategories.map((cat, i) => (
            <li key={cat.id} className="border-b border-rule">
              <Link href={`/services#${cat.id}`} className="group grid grid-cols-[2rem_1fr_auto] gap-x-4 py-6 md:grid-cols-[3rem_1fr_auto]">
                <span className="pt-1 font-mono text-xs text-ink-muted">0{i + 1}</span>
                <div>
                  <h3 className="font-display text-xl font-bold tracking-[-0.01em] decoration-signal decoration-2 underline-offset-4 group-hover:underline md:text-2xl">
                    {cat.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-ink-muted">{cat.blurb}</p>
                </div>
                <span className="flex items-start gap-3 pt-1 font-mono text-sm tabular-nums">
                  <span className="hidden sm:inline">{startingPrice(cat)}</span>
                  <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
                </span>
                <span className="col-start-2 mt-3 font-mono text-sm tabular-nums sm:hidden">{startingPrice(cat)}</span>
              </Link>
            </li>
          ))}
        </ul>
        <Link
          href="/services"
          className="font-mono text-xs font-semibold uppercase tracking-[0.06em] underline decoration-signal decoration-2 underline-offset-[6px] md:col-span-4 md:col-start-1 md:row-start-2 md:self-start"
        >
          See all services and prices →
        </Link>
      </section>

      <section className="border-t border-ink">
        <div className={sectionGrid}>
          <div className="md:col-span-4">
            <SectionHead index="02" label="Work" title="Recent repairs" />
          </div>
          <div className="md:col-span-8 md:row-span-2">
            {portfolio.slice(0, 3).map((item) => (
              <figure key={item.title} className="grid gap-6 border-t border-ink pt-6 sm:grid-cols-2 [&+&]:mt-10">
                <div className="relative border border-ink">
                  <Image
                    src={item.after}
                    alt={`${item.title}, after repair`}
                    width={1254}
                    height={1254}
                    className="aspect-square w-full object-cover"
                  />
                  <span className="eyebrow absolute left-0 top-0 border-b border-r border-ink bg-paper px-2 py-1 !text-ink">
                    After
                  </span>
                </div>
                <figcaption className="sm:pt-1">
                  <p className="font-display text-2xl font-bold tracking-[-0.01em]">{item.title}</p>
                  <p className="mt-3 text-ink-muted">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <Link
            href="/work"
            className="font-mono text-xs font-semibold uppercase tracking-[0.06em] underline decoration-signal decoration-2 underline-offset-[6px] md:col-span-4 md:col-start-1 md:row-start-2 md:self-start"
          >
            See before and after photos →
          </Link>
        </div>
      </section>

      <section className="border-t border-ink">
        <div className={sectionGrid}>
          <div className="md:col-span-4">
            <SectionHead index="03" label="Why local" title="Why a local tech?" />
          </div>
          <ol className="border-t border-ink md:col-span-8">
            {whyLocal.map((w, i) => (
              <li key={w.title} className="grid grid-cols-[2rem_1fr] gap-x-4 border-b border-rule py-6 md:grid-cols-[3rem_12rem_1fr] md:gap-x-6">
                <span className="pt-1.5 font-mono text-xs text-ink-muted">0{i + 1}</span>
                <h3 className="font-display text-2xl font-bold tracking-[-0.01em]">{w.title}</h3>
                <p className="col-start-2 mt-2 text-ink-muted md:col-start-3 md:mt-0 md:pt-1">{w.text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
