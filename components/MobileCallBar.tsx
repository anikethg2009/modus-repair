import Link from "next/link";
import { site } from "@/content/site";

// Sticky bottom bar on phones so calling or requesting is always one tap away.
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-ink bg-paper font-mono text-xs font-semibold uppercase tracking-[0.06em] md:hidden">
      <a href={site.contact.phoneHref} className="border-r border-ink py-5 text-center">
        Call Now
      </a>
      <Link href="/request" className="bg-signal py-5 text-center text-ink">
        Request a Repair
      </Link>
    </div>
  );
}
