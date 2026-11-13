import type { Metadata } from 'next';
import ContactForm from '../../components/contact-form';
import { ArrowUpRight, MailIcon, PinIcon, socialIcons } from '../../components/icons';
import JsonLd from '../../components/json-ld';
import LocalTime from '../../components/local-time';
import PageHeader from '../../components/page-header';
import { site, socials } from '../../data/site';

const description =
  'Contact Hasiru Chamika about internships, freelance projects or collaborations. Email, WhatsApp, LinkedIn and GitHub, with replies within 48 hours.';

export const metadata: Metadata = {
  title: 'Contact',
  description,
  alternates: { canonical: '/contact' },
  openGraph: { title: `Contact · ${site.name}`, description, url: '/contact' },
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Tell me what you&apos;re <span className="font-serif font-normal text-accent italic">building.</span>
          </>
        }
      >
        <p>Share some context around your project or opportunity and I&apos;ll respond with next steps within 48 hours.</p>
      </PageHeader>

      <section className="container-page grid gap-6 lg:grid-cols-[1.15fr_1fr]" aria-label="Contact options">
        <ContactForm />

        <div className="flex flex-col gap-4">
          <a href={`mailto:${site.email}`} className="card card-glow group p-6 sm:p-7">
            <p className="eyebrow flex items-center gap-2">
              <MailIcon className="h-3.5 w-3.5" /> Email
            </p>
            <p className="mt-3 flex items-center justify-between gap-3 text-lg break-all sm:text-xl">
              {site.email}
              <ArrowUpRight className="h-5 w-5 shrink-0 text-faint transition-colors group-hover:text-accent" />
            </p>
          </a>

          <div className="card p-6 sm:p-7">
            <p className="eyebrow flex items-center gap-2">
              <PinIcon className="h-3.5 w-3.5" /> Location
            </p>
            <p className="mt-3 text-lg sm:text-xl">{site.location}</p>
            <p className="mt-1 text-sm text-muted">
              Working remotely with teams anywhere. Local time <LocalTime />
            </p>
          </div>

          <ul className="card divide-y divide-line">
            {socials.map((social) => {
              const Icon = socialIcons[social.key];
              return (
                <li key={social.key}>
                  <a
                    href={social.href}
                    target="_blank"
                    rel="me noopener noreferrer"
                    className="group flex items-center gap-4 px-6 py-4 transition-colors hover:bg-surface-2 sm:px-7"
                  >
                    <Icon className="h-4 w-4 text-muted group-hover:text-accent" />
                    <span className="flex-1">{social.label}</span>
                    <span className="truncate font-mono text-xs text-faint">{social.handle}</span>
                    <ArrowUpRight className="h-4 w-4 text-faint transition-colors group-hover:text-accent" />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'ContactPage',
          url: `${site.url}/contact`,
          name: `Contact ${site.name}`,
          mainEntity: { '@id': `${site.url}/#person` },
        }}
      />
    </>
  );
}
