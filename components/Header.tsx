"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { site } from "@/content/site";
import { navLinks } from "./nav";
import RegMark from "./RegMark";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-40 border-b border-ink bg-paper">
      <div className="wrap flex h-16 items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2.5" onClick={close}>
          <RegMark size={18} className="text-signal" />
          <span className="font-display text-[1.05rem] font-bold uppercase tracking-[-0.01em]">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Main">
          {navLinks.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              aria-current={pathname === l.href ? "page" : undefined}
              className={`font-mono text-xs font-medium uppercase tracking-[0.06em] underline-offset-[6px] hover:underline ${
                pathname === l.href ? "underline decoration-signal decoration-2" : ""
              }`}
            >
              <span className="mr-1.5 text-ink-muted">0{i + 1}</span>
              {l.label}
            </Link>
          ))}
          <a href={site.contact.phoneHref} className="font-mono text-sm font-medium tabular-nums hover:underline">
            {site.contact.phoneDisplay}
          </a>
          <Link href="/request" className="btn btn-primary !py-2.5">
            Request a Repair
          </Link>
        </nav>

        <div className="flex items-center gap-4 md:hidden">
          {/* Hidden on the narrowest phones; the bottom bar and hero both offer calling. */}
          <a href={site.contact.phoneHref} className="hidden font-mono text-xs font-medium tabular-nums min-[400px]:inline">
            {site.contact.phoneDisplay}
          </a>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            className="border border-ink px-2.5 py-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.08em]"
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      {open && (
        <nav id="mobile-menu" className="border-t border-ink bg-paper md:hidden" aria-label="Mobile">
          <ul className="wrap">
            {navLinks.map((l, i) => (
              <li key={l.href} className="border-b border-rule">
                <Link
                  href={l.href}
                  onClick={close}
                  aria-current={pathname === l.href ? "page" : undefined}
                  className="flex items-baseline gap-4 py-4"
                >
                  <span className="font-mono text-xs text-ink-muted">0{i + 1}</span>
                  <span className="font-display text-2xl font-bold tracking-[-0.01em]">{l.label}</span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="wrap py-5">
            <Link href="/request" onClick={close} className="btn btn-primary w-full">
              Request a Repair
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
