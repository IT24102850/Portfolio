import Link from 'next/link';
import { nav, site, socials } from '../data/site';
import { ArrowUpRight, socialIcons } from './icons';
import LocalTime from './local-time';

export default function SiteFooter() {
  return (
    <footer className="mt-32 border-t border-line">
      <div className="container-page py-16 sm:py-24">
        <p className="eyebrow">Get in touch</p>
        <a
          href={`mailto:${site.email}`}
          className="group mt-5 inline-flex items-start gap-3 text-[clamp(2rem,7vw,5.5rem)] leading-none font-medium tracking-tight"
        >
          <span>
            Let&apos;s build <span className="font-serif font-normal text-accent italic">something.</span>
          </span>
          <ArrowUpRight className="mt-[0.12em] h-[0.6em] w-[0.6em] shrink-0 text-faint transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-accent" />
        </a>

        <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="eyebrow">Email</p>
            <a href={`mailto:${site.email}`} className="link-underline mt-3 inline-block break-all text-fg">
              {site.email}
            </a>
          </div>
          <div>
            <p className="eyebrow">Based in</p>
            <p className="mt-3 text-fg">{site.location}</p>
            <p className="mt-1 text-sm text-muted">
              <LocalTime />
            </p>
          </div>
          <nav aria-label="Footer">
            <p className="eyebrow">Sitemap</p>
            <ul className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="link-underline text-muted hover:text-fg">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <div>
            <p className="eyebrow">Elsewhere</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {socials.map((social) => {
                const Icon = socialIcons[social.key];
                return (
                  <li key={social.key}>
                    <a
                      href={social.href}
                      target="_blank"
                      rel="me noopener noreferrer"
                      aria-label={social.label}
                      className="grid h-10 w-10 place-items-center rounded-full border border-line text-muted transition-colors hover:border-accent hover:text-accent"
                    >
                      <Icon className="h-4 w-4" />
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-line pt-8 font-mono text-xs text-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. Designed and built in Sri Lanka.
          </p>
          <p className="hidden sm:block">
            Press <kbd className="rounded border border-line px-1.5 py-0.5">Ctrl</kbd>{' '}
            <kbd className="rounded border border-line px-1.5 py-0.5">K</kbd> to jump anywhere.
          </p>
        </div>
      </div>
    </footer>
  );
}
