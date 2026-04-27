import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://merysu-cleaning.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      alternates: {
        languages: {
          en: 'https://merysu-cleaning.com',
          es: 'https://merysu-cleaning.com',
        },
      },
      images: [
        'https://merysu-cleaning.com/avatar_2.jpeg',
        'https://merysu-cleaning.com/avatar_1.jpeg',
      ],
    },
  ];
}
