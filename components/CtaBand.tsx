import Link from "next/link";
import { site } from "@/content/site";

export default function CtaBand() {
  return (
    <section className="bg-ink text-paper">
      <div className="wrap grid gap-8 py-16 md:grid-cols-12 md:py-24">
        <h2 className="font-display text-4xl font-bold leading-[1.02] tracking-[-0.025em] md:col-span-7 md:text-6xl">
          Something broken? Let&apos;s take a look.
        </h2>
        <div className="md:col-span-5 md:self-end">
          <p className="max-w-md text-lg text-paper/75">
            The diagnostic is free. Tell me what&apos;s wrong and I&apos;ll get back to you with a quote.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/request" className="btn btn-primary">
              Request a Repair
            </Link>
            <a href={site.contact.phoneHref} className="btn btn-secondary-inverse tabular-nums">
              Call {site.contact.phoneDisplay}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
