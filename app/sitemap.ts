import type { MetadataRoute } from 'next';
import { projects } from '../data/projects';
import { site } from '../data/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  const pages = [
    { path: '', priority: 1 },
    { path: '/projects', priority: 0.9 },
    { path: '/about', priority: 0.8 },
    { path: '/experience', priority: 0.7 },
    { path: '/skills', priority: 0.7 },
    { path: '/contact', priority: 0.6 },
  ];

  return [
    ...pages.map((page) => ({
      url: `${site.url}${page.path}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: page.priority,
    })),
    ...projects.map((project) => ({
      url: `${site.url}/projects/${project.slug}`,
      lastModified,
      changeFrequency: 'monthly' as const,
      priority: project.featured ? 0.8 : 0.6,
    })),
  ];
}
