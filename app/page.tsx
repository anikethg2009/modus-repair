import Link from "next/link";
import Image from "next/image";
import { site, stats, serviceCategories, portfolio, whyLocal, type ServiceCategory } from "@/content/site";
import CtaBand from "@/components/CtaBand";

// Lowest "from $X" price in a category, e.g. "from $49".
function startingPrice(cat: ServiceCategory) {
  const min = Math.min(...cat.services.map((s) => Number(s.price.replace(/[^0-9.]/g, ""))));
  return `from $${min}`;
}

export default function Home() {
  return (
    <>
      <section className="bg-brand-50">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:py-20">
          <p className="text-sm font-semibold uppercase tracking-wide text-brand-600">{site.serviceArea}</p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-brand-900 sm:text-5xl">
            Phone, laptop, console, and household repair from a local tech you can talk to.
          </h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-600">
            Fast turnaround, fair prices, and a free diagnostic on every device. No mail-in waits, no big-box runaround.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Link
              href="/request"
              className="rounded-lg bg-accent-600 px-6 py-3.5 text-center text-lg font-semibold text-white shadow-sm hover:bg-accent-700"
            >
              Request a Repair
            </Link>
            <a
              href={site.contact.phoneHref}
              className="rounded-lg border border-brand-800 px-6 py-3.5 text-center text-lg font-semibold text-brand-800 hover:bg-white"
            >
              Call or text {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </section>

      <section aria-label="Track record" className="border-y border-slate-200 bg-white">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 sm:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-bold text-brand-800 sm:text-3xl">{s.value}</dd>
              <dd className="mt-1 text-sm text-slate-600">{s.label}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">What I fix</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {serviceCategories.map((cat) => (
            <Link
              key={cat.id}
              href={`/services#${cat.id}`}
              className="rounded-xl border border-slate-200 p-5 transition hover:border-brand-600 hover:shadow-sm"
            >
              <h3 className="font-semibold text-brand-900">{cat.title}</h3>
              <p className="mt-2 text-sm text-slate-600">{cat.blurb}</p>
              <p className="mt-3 text-sm font-semibold text-accent-600">
                {startingPrice(cat)}
              </p>
            </Link>
          ))}
        </div>
        <Link href="/services" className="mt-6 inline-block font-semibold text-brand-700 hover:text-brand-600">
          See all services and prices →
        </Link>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-14">
          <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">Recent repairs</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolio.slice(0, 3).map((item) => (
              <figure key={item.title} className="overflow-hidden rounded-xl border border-slate-200 bg-white">
                <Image src={item.after} alt={`${item.title}, after repair`} width={800} height={600} className="aspect-[4/3] w-full object-cover" />
                <figcaption className="p-4">
                  <p className="font-semibold text-brand-900">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-600">{item.description}</p>
                </figcaption>
              </figure>
            ))}
          </div>
          <Link href="/work" className="mt-6 inline-block font-semibold text-brand-700 hover:text-brand-600">
            See before and after photos →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-14">
        <h2 className="text-2xl font-bold text-brand-900 sm:text-3xl">Why a local tech?</h2>
        <div className="mt-6 grid gap-6 sm:grid-cols-3">
          {whyLocal.map((w) => (
            <div key={w.title}>
              <h3 className="text-lg font-semibold text-brand-800">{w.title}</h3>
              <p className="mt-2 text-slate-600">{w.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaBand />
    </>
  );
}
