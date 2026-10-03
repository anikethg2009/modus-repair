"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";
import { navLinks } from "./nav";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4">
        <Link href="/" className="flex items-center gap-2" onClick={close}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-brand-800 text-sm font-bold text-white">
            MR
          </span>
          <span className="text-lg font-semibold tracking-tight text-brand-900">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Main">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`text-sm font-medium hover:text-brand-600 ${
                pathname === l.href ? "text-brand-700" : "text-slate-600"
              }`}
            >
              {l.label}
            </Link>
          ))}
          <a href={site.contact.phoneHref} className="text-sm font-semibold text-brand-800 hover:text-brand-600">
            {site.contact.phoneDisplay}
          </a>
          <Link
            href="/request"
            className="rounded-lg bg-accent-600 px-4 py-2 text-sm font-semibold text-white hover:bg-accent-700"
          >
            Request a Repair
          </Link>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <a href={site.contact.phoneHref} className="px-2 text-sm font-semibold text-brand-800">
            {site.contact.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="rounded-md p-2 text-slate-700 hover:bg-slate-100"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-slate-200 bg-white px-4 py-3 md:hidden" aria-label="Mobile">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={close}
              className="block rounded-md px-2 py-3 text-base font-medium text-slate-700 hover:bg-slate-50"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/request"
            onClick={close}
            className="mt-2 block rounded-lg bg-accent-600 px-4 py-3 text-center font-semibold text-white"
          >
            Request a Repair
          </Link>
        </nav>
      )}
    </header>
  );
}
