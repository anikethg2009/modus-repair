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
        index="04"
        label="Request"
        title="Request a repair"
        intro="Tell me what's going on and I'll get back to you with next steps and a quote. The diagnostic is always free."
      />
      <div className="wrap grid gap-12 py-12 md:py-20 lg:grid-cols-12 lg:gap-10">
        <div className="lg:col-span-7">
          <RepairForm />
        </div>
        <aside className="space-y-10 lg:col-span-4 lg:col-start-9">
          <div className="border-t border-ink pt-4">
            <p className="eyebrow">Prefer to talk?</p>
            <a href={site.contact.phoneHref} className="mt-3 block font-mono text-2xl font-medium tabular-nums hover:underline">
              {site.contact.phoneDisplay}
            </a>
            <a href={`mailto:${site.contact.email}`} className="mt-1 block break-all font-mono text-sm hover:underline">
              {site.contact.email}
            </a>
          </div>
          <div className="border-t border-ink pt-4">
            <p className="eyebrow">What happens next</p>
            <ol className="mt-3">
              {[
                "I review your request and diagnose the issue.",
                "I reach out the way you prefer with a quote.",
                "We set up a time for drop-off or pickup.",
              ].map((step, i) => (
                <li key={step} className="grid grid-cols-[2rem_1fr] border-b border-rule py-3 text-sm">
                  <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </aside>
      </div>
    </>
  );
}
