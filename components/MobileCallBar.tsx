import Link from "next/link";
import { site } from "@/content/site";

// Sticky bottom bar on phones so calling or requesting is always one tap away.
export default function MobileCallBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 grid grid-cols-2 border-t border-slate-200 bg-white md:hidden">
      <a href={site.contact.phoneHref} className="py-4 text-center font-semibold text-brand-800">
        Call Now
      </a>
      <Link href="/request" className="bg-accent-600 py-4 text-center font-semibold text-white">
        Request a Repair
      </Link>
    </div>
  );
}
