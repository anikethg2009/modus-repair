import { site, whyLocal } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";

export const metadata = pageMetadata(
  "About",
  `Modus Repair is a one-person repair shop in Loudoun County, VA, run by ${site.owner.firstName} ${site.owner.lastName}. Faster, cheaper, and more personal than mail-in or big-box repair.`,
  "/about",
);

export default function AboutPage() {
  return (
    <>
      <PageHeader index="03" label="About" title="About Modus Repair" intro={site.serviceArea} />

      <div className="wrap grid gap-6 py-16 md:grid-cols-12 md:gap-10 md:py-24">
        <p className="eyebrow md:col-span-4">The shop</p>
        <div className="max-w-2xl space-y-5 text-lg leading-relaxed md:col-span-8 md:text-xl">
          <p>
            Hi, I&apos;m {site.owner.firstName} {site.owner.lastName}. I&apos;m a student at the Academies of Loudoun, where I
            study IT, and I run Modus Repair out of Loudoun County.
          </p>
          <p>
            I&apos;ve fixed devices for hundreds of customers. Phones, laptops, game consoles,
            controllers, and plenty of household items have all come across my bench.
          </p>
          <p>
            When you bring me something, I&apos;m the one who looks at it, quotes it, and fixes it. There&apos;s no
            front desk and no mail-in queue. I&apos;ll tell you what&apos;s wrong, what it&apos;ll cost, and whether
            it&apos;s even worth fixing before I start any work.
          </p>
          <p>
            Because I&apos;m in school, I take repairs on weekday evenings and weekends. The fastest way to reach me
            is a call or text.
          </p>
        </div>
      </div>

      <section className="border-t border-ink">
        <div className="wrap grid gap-10 py-16 md:grid-cols-12 md:py-24">
          <h2 className="font-display text-3xl font-bold leading-[1.05] tracking-[-0.02em] md:col-span-4 md:text-4xl">
            Why a local solo tech beats mail-in or big box
          </h2>
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
