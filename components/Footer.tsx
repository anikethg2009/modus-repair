import Link from "next/link";
import { site } from "@/content/site";
import { navLinks } from "./nav";
import RegMark from "./RegMark";

export default function Footer() {
  return (
    <footer className="border-t border-ink">
      <div className="wrap grid gap-10 py-12 md:grid-cols-12 md:py-16">
        <div className="md:col-span-6">
          <p className="flex items-center gap-2.5 font-display text-2xl font-bold uppercase tracking-[-0.01em]">
            <RegMark size={18} className="text-signal" />
            {site.name}
          </p>
          <p className="mt-4 max-w-sm text-ink-muted">{site.tagline}.</p>
          <p className="mt-1 max-w-sm text-ink-muted">{site.serviceArea}</p>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Contact</p>
          <ul className="mt-4 space-y-2 font-mono text-sm">
            <li>
              <a href={site.contact.phoneHref} className="tabular-nums hover:underline">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="break-all hover:underline">
                {site.contact.email}
              </a>
            </li>
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="hover:underline">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:col-span-3">
          <p className="eyebrow">Pages</p>
          <ul className="mt-4 space-y-2 text-sm">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:underline">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request" className="hover:underline">
                Request a Repair
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-rule">
        <p className="wrap py-5 font-mono text-[11px] uppercase tracking-[0.06em] text-ink-muted">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
