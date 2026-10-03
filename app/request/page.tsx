import { site } from "@/content/site";
import { pageMetadata } from "@/lib/metadata";
import PageHeader from "@/components/PageHeader";
import RepairForm from "./RepairForm";

export const metadata = pageMetadata(
  "Request a Repair",
  "Tell us what's broken and get a free diagnostic and quote. Phone, laptop, console, and household repair in Loudoun County, VA.",
  "/request",
);

export default function RequestPage() {
  return (
    <>
      <PageHeader
        title="Request a repair"
        intro="Tell me what's going on and I'll get back to you with next steps and a quote. The diagnostic is always free."
      />
      <div className="mx-auto grid max-w-5xl gap-10 px-4 py-12 lg:grid-cols-[1fr_280px]">
        <RepairForm />
        <aside className="space-y-4 text-slate-700">
          <div className="rounded-xl border border-slate-200 p-5">
            <p className="font-semibold text-brand-900">Prefer to talk?</p>
            <a href={site.contact.phoneHref} className="mt-1 block text-lg font-semibold text-brand-700">
              {site.contact.phoneDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className="mt-1 block text-sm text-brand-700">
              {site.contact.email}
            </a>
          </div>
          <div className="rounded-xl border border-slate-200 p-5 text-sm">
            <p className="font-semibold text-brand-900">What happens next</p>
            <ol className="mt-2 list-decimal space-y-1 pl-4">
              <li>I review your request and diagnose the issue.</li>
              <li>I reach out the way you prefer with a quote.</li>
              <li>We set up a time for drop-off or pickup.</li>
            </ol>
          </div>
        </aside>
      </div>
    </>
  );
}
