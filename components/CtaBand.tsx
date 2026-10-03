import Link from "next/link";
import { site } from "@/content/site";

export default function CtaBand() {
  return (
    <section className="bg-brand-900">
      <div className="mx-auto max-w-6xl px-4 py-12 text-center sm:py-16">
        <h2 className="text-2xl font-bold text-white sm:text-3xl">Something broken? Let&apos;s take a look.</h2>
        <p className="mx-auto mt-3 max-w-xl text-brand-100">
          The diagnostic is free. Tell me what&apos;s wrong and I&apos;ll get back to you with a quote.
        </p>
        <div className="mt-6 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/request"
            className="rounded-lg bg-accent-600 px-6 py-3 font-semibold text-white hover:bg-accent-700"
          >
            Request a Repair
          </Link>
          <a
            href={site.contact.phoneHref}
            className="rounded-lg border border-white/30 px-6 py-3 font-semibold text-white hover:bg-white/10"
          >
            Call {site.contact.phoneDisplay}
          </a>
        </div>
      </div>
    </section>
  );
}
