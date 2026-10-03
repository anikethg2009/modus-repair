import Link from "next/link";
import { site } from "@/content/site";
import { navLinks } from "./nav";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-10 sm:grid-cols-3">
        <div>
          <p className="font-semibold text-brand-900">{site.name}</p>
          <p className="mt-2 text-sm text-slate-600">{site.tagline}.</p>
          <p className="mt-1 text-sm text-slate-600">{site.serviceArea}</p>
        </div>
        <div>
          <p className="font-semibold text-brand-900">Contact</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            <li>
              <a href={site.contact.phoneHref} className="hover:text-brand-600">
                {site.contact.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${site.contact.email}`} className="hover:text-brand-600">
                {site.contact.email}
              </a>
            </li>
            {site.social.map((s) => (
              <li key={s.href}>
                <a href={s.href} className="hover:text-brand-600">
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-semibold text-brand-900">Pages</p>
          <ul className="mt-2 space-y-1 text-sm text-slate-600">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="hover:text-brand-600">
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/request" className="hover:text-brand-600">
                Request a Repair
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="border-t border-slate-200 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} {site.name}. All rights reserved.
      </p>
    </footer>
  );
}
