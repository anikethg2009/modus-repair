import { site, whyLocal } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import CtaBand from "@/components/CtaBand";

export const metadata = pageMetadata(
  "About",
  "Modus Repair is a local, one-person repair shop in Loudoun County, VA. Faster, cheaper, and more personal than mail-in or big-box repair.",
  "/about",
);

export default function AboutPage() {
  const greeting = site.owner.firstName ? `Hi, I'm ${site.owner.firstName}.` : "Hi there.";

  return (
    <>
      <PageHeader title="About Modus Repair" intro={site.serviceArea} />

      <div className="mx-auto max-w-3xl px-4 py-12">
        {/* TODO: Personalize this story in your own words. Consider adding a photo of yourself. */}
        <div className="space-y-4 text-lg text-slate-700">
          <p>
            {greeting} Modus Repair is a one-person shop. When you bring me a device, I&apos;m the one who diagnoses
            it, quotes it, and fixes it.
          </p>
          <p>
            I started fixing things for friends and family, and word of mouth did the rest. I&apos;ve now helped
            hundreds of customers around Loudoun County get their phones, laptops, consoles, and household items
            working again.
          </p>
          <p>
            Every repair starts with a free diagnostic and an honest quote. If something isn&apos;t worth fixing,
            I&apos;ll tell you.
          </p>
        </div>

        <h2 className="mt-12 text-2xl font-bold text-brand-900">Why a local solo tech beats mail-in or big box</h2>
        <div className="mt-6 space-y-6">
          {whyLocal.map((w) => (
            <div key={w.title} className="rounded-xl border border-slate-200 p-5">
              <h3 className="text-lg font-semibold text-brand-800">{w.title}</h3>
              <p className="mt-2 text-slate-600">{w.text}</p>
            </div>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
