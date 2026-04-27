import type { Metadata } from 'next';
import Header from './components/Header/Header';
import LanguageSelector from './components/LanguageSelector/LanguageSelector';
import PreferencesProvider from '../contexts/Preferences/PreferencesProvider';
import React from "react";
import Footer from '../common_components/Footer';
import WhatsAppContact from './components/WhatsAppContact';
import JsonLd from '../common_components/JsonLd';

export const metadata: Metadata = {
  title: {
    default: 'MerySu Sparkle Cleaning | Cleaning Services in San Jose, CA',
    template: '%s | MerySu Sparkle Cleaning',
  },
  description:
    'Professional home, office, and vacation rental cleaning services in San Jose, CA and the South Bay Area. Reliable, thorough, and always with a smile. Call (669) 278-0462.',
  keywords: [
    // Local — English
    'cleaning services San Jose CA',
    'house cleaning San Jose',
    'home cleaning San Jose California',
    'maid service San Jose CA',
    'cleaning company San Jose',
    'office cleaning San Jose',
    'deep cleaning San Jose CA',
    'move in move out cleaning San Jose',
    'Airbnb cleaning San Jose',
    'vacation rental cleaning San Jose',
    'post construction cleaning San Jose',
    'recurring cleaning San Jose',
    'South Bay cleaning services',
    'Santa Clara cleaning',
    'Sunnyvale house cleaning',
    'Cupertino maid service',
    // Local — Spanish
    'servicios de limpieza San Jose California',
    'limpieza del hogar San Jose CA',
    'limpieza de casas San Jose',
    'servicio de limpieza South Bay',
    'limpieza profunda San Jose',
    'empleada doméstica San Jose',
    // Brand
    'MerySu Sparkle Cleaning',
    'MerySu cleaning',
    // Generic
    'cleaning services',
    'home cleaning',
    'office cleaning',
    'vacation rental cleaning',
    'deep cleaning',
    'move-in move-out cleaning',
    'post-construction cleaning',
    'Airbnb cleaning',
    'limpieza de oficinas',
    'limpieza profunda',
  ],
  category: 'Cleaning Services',
  openGraph: {
    title: 'MerySu Sparkle Cleaning — Cleaning Services in San Jose, CA',
    description:
      'Professional home, office, and vacation rental cleaning services in San Jose, CA and the South Bay Area. Reliable, thorough, and always with a smile.',
    url: 'https://merysu-cleaning.com',
    siteName: 'MerySu Sparkle Cleaning',
    images: [
      {
        url: '/avatar_2.jpeg  ',
        width: 1200,
        height: 630,
        alt: 'MerySu Sparkle Cleaning — Cleaning Services in San Jose, CA',
      },
    ],
    locale: 'en_US',
    alternateLocale: ['es_ES'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MerySu Sparkle Cleaning — Cleaning Services in San Jose, CA',
    description:
      'Professional cleaning services in San Jose, CA and the South Bay Area. Call (669) 278-0462.',
    images: ['/avatar_2.jpeg'],
    creator: '@merysucleaning',
    site: '@merysucleaning',
  },
  alternates: {
    canonical: 'https://merysu-cleaning.com',
    languages: {
      en: 'https://merysu-cleaning.com',
      es: 'https://merysu-cleaning.com',
      'x-default': 'https://merysu-cleaning.com',
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  }
};

const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'HomeAndConstructionBusiness'],
  name: 'MerySu Sparkle Cleaning',
  description:
    'Professional cleaning services for homes, offices, and vacation rentals in San Jose, CA and the South Bay Area.',
  url: 'https://merysu-cleaning.com',
  logo: 'https://merysu-cleaning.com/avatar_1.jpeg',
  image: 'https://merysu-cleaning.com/avatar_2.jpeg',
  telephone: '+16692780462',
  priceRange: '$$',
  currenciesAccepted: 'USD',
  paymentAccepted: 'Cash, Credit Card, Zelle, Venmo',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'San Jose',
    addressRegion: 'CA',
    addressCountry: 'US',
    postalCode: '95101',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 37.3382,
    longitude: -121.8863,
  },
  areaServed: [
    { '@type': 'City', name: 'San Jose', sameAs: 'https://en.wikipedia.org/wiki/San_Jose,_California' },
    { '@type': 'City', name: 'Santa Clara', sameAs: 'https://en.wikipedia.org/wiki/Santa_Clara,_California' },
    { '@type': 'City', name: 'Sunnyvale', sameAs: 'https://en.wikipedia.org/wiki/Sunnyvale,_California' },
    { '@type': 'City', name: 'Cupertino', sameAs: 'https://en.wikipedia.org/wiki/Cupertino,_California' },
    { '@type': 'City', name: 'Campbell', sameAs: 'https://en.wikipedia.org/wiki/Campbell,_California' },
    { '@type': 'City', name: 'Los Gatos', sameAs: 'https://en.wikipedia.org/wiki/Los_Gatos,_California' },
    { '@type': 'City', name: 'Saratoga', sameAs: 'https://en.wikipedia.org/wiki/Saratoga,_California' },
    { '@type': 'City', name: 'Milpitas', sameAs: 'https://en.wikipedia.org/wiki/Milpitas,_California' },
    { '@type': 'City', name: 'Mountain View', sameAs: 'https://en.wikipedia.org/wiki/Mountain_View,_California' },
    { '@type': 'City', name: 'Gilroy', sameAs: 'https://en.wikipedia.org/wiki/Gilroy,_California' },
  ],
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      opens: '08:00',
      closes: '18:00',
    },
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Saturday'],
      opens: '09:00',
      closes: '15:00',
    },
  ],
  sameAs: [
    'https://www.instagram.com/merysucleaning',
  ],
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Cleaning Services',
    itemListElement: [
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Home Cleaning',
          description: 'Keep your home fresh, tidy, and inviting.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Office Cleaning',
          description: 'Create a spotless and productive workspace.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Deep Cleaning',
          description: 'We go beyond the surface to make every detail sparkle.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Move-in / Move-out Cleaning',
          description:
            'Leave the old place spotless or start fresh in your new home.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Airbnb / Vacation Rental Cleaning',
          description: 'Guest-ready every time, with a 5-star finish.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Post-Construction Cleaning',
          description:
            'Dust, debris, and mess — we handle it all after the build.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Event Cleanup',
          description: 'Before or after the big day, we make it shine.',
        },
      },
      {
        '@type': 'Offer',
        itemOffered: {
          '@type': 'Service',
          name: 'Recurring Cleaning Services',
          description:
            'Weekly, bi-weekly, or monthly — we keep the sparkle going.',
        },
      },
    ],
  },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'MerySu Sparkle Cleaning',
  url: 'https://merysu-cleaning.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: {
      '@type': 'EntryPoint',
      urlTemplate: 'https://merysu-cleaning.com/?q={search_term_string}',
    },
    'query-input': 'required name=search_term_string',
  },
};

const breadcrumbSchema = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://merysu-cleaning.com',
    },
  ],
};

export default function LandingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={localBusinessSchema} />
      <JsonLd data={websiteSchema} />
      <JsonLd data={breadcrumbSchema} />
      <PreferencesProvider>
        <Header />
        <main className="flex-1">
          {children}
        </main>
        <WhatsAppContact />
        <LanguageSelector />
        <Footer />
      </PreferencesProvider>
    </>
  );
}
