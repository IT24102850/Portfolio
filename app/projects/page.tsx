import type { Metadata } from 'next';
import JsonLd from '../../components/json-ld';
import PageHeader from '../../components/page-header';
import ProjectExplorer from '../../components/project-explorer';
import { projects } from '../../data/projects';
import { site } from '../../data/site';

const description =
  'Case studies from Hasiru Chamika: Unify, FloodWatch LK, BoardingBook, an award-winning ESP32 BattleBot and more across full-stack, mobile, AI and IoT.';

export const metadata: Metadata = {
  title: 'Projects',
  description,
  alternates: { canonical: '/projects' },
  openGraph: { title: `Projects · ${site.name}`, description, url: '/projects' },
};

export default function ProjectsPage() {
  return (
    <>
      <PageHeader
        eyebrow={`Work · ${projects.length} projects`}
        title={
          <>
            Products, platforms and the odd <span className="font-serif font-normal text-accent italic">robot.</span>
          </>
        }
      >
        <p>
          Everything here is something I designed, built or shipped as part of a team. Most of it is live and all of it
          has source you can read.
        </p>
      </PageHeader>

      <section className="container-page" aria-label="Project list">
        <ProjectExplorer projects={projects} />
      </section>

      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@type': 'CollectionPage',
          name: `Projects by ${site.name}`,
          url: `${site.url}/projects`,
          description,
          mainEntity: {
            '@type': 'ItemList',
            itemListElement: projects.map((project, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              name: project.title,
              url: `${site.url}/projects/${project.slug}`,
            })),
          },
        }}
      />
    </>
  );
}
