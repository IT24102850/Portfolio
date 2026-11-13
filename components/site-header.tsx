'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { nav, site } from '../data/site';
import { CloseIcon, MenuIcon, SearchIcon } from './icons';
import ThemeToggle from './theme-toggle';

const isActive = (pathname: string, href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

export default function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile sheet on navigation and lock scroll while it is open.
  useEffect(() => setOpen(false), [pathname]);
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const openPalette = () => window.dispatchEvent(new Event('palette:open'));

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-6 sm:pt-5">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between gap-2 rounded-full border border-line bg-bg/70 pr-2 pl-5 backdrop-blur-xl backdrop-saturate-150">
        <Link href="/" className="flex items-center gap-2.5 font-medium tracking-tight" aria-label={`${site.name}, home`}>
          <span className="relative grid h-2.5 w-2.5 place-items-center">
            <span className="animate-pulse-dot h-2 w-2 rounded-full bg-accent" />
          </span>
          <span>
            {site.shortName}
            <span className="text-faint"> Chamika</span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex items-center gap-1">
            {nav.slice(1).map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`rounded-full px-3.5 py-2 text-sm transition-colors ${
                      active ? 'bg-surface-2 text-fg' : 'text-muted hover:text-fg'
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={openPalette}
            aria-label="Open command menu"
            className="flex h-9 items-center gap-2 rounded-full px-2.5 text-muted transition-colors hover:bg-surface-2 hover:text-fg"
          >
            <SearchIcon className="h-[18px] w-[18px]" />
            <kbd className="hidden font-mono text-[0.7rem] text-faint lg:inline">Ctrl K</kbd>
          </button>
          <ThemeToggle />
          <a href={`mailto:${site.email}`} className="btn btn-primary ml-1 hidden !py-2.5 sm:inline-flex">
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-9 w-9 place-items-center rounded-full text-fg md:hidden"
          >
            {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-nav"
        hidden={!open}
        className="mx-auto mt-2 max-w-5xl rounded-3xl border border-line bg-bg/95 p-3 backdrop-blur-xl md:hidden"
      >
        <nav aria-label="Mobile">
          <ul>
            {nav.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    aria-current={active ? 'page' : undefined}
                    className={`flex items-center justify-between rounded-2xl px-4 py-3.5 text-lg ${
                      active ? 'bg-surface-2 text-fg' : 'text-muted'
                    }`}
                  >
                    {item.label}
                    {active ? <span className="h-1.5 w-1.5 rounded-full bg-accent" /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <a href={`mailto:${site.email}`} className="btn btn-primary mt-2 w-full">
          Let&apos;s talk
        </a>
      </div>
    </header>
  );
}
