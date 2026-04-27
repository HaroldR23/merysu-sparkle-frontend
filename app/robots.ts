import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/dashboard-5215',
      },
    ],
    sitemap: 'https://merysu-cleaning.com/sitemap.xml',
  };
}
