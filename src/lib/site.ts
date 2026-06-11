import type { Metadata } from 'next';

/** Troque pelo seu ID real antes de publicar. */
export const META_PIXEL_ID = '3969350033332069'; // → seu ID do Meta Pixel
export const GA4_ID = 'G-SY9VYKEED3'; // → Google Analytics 4

export const SITE_URL = 'https://acesso.sdwhub.com.br';
export const OG_IMAGE = '/assets/og-acesso.png';

/** Coordenadas de Santos, SP — usadas nas meta tags de GEO. */
const GEO = {
  'geo.region': 'BR-SP',
  'geo.placename': 'Santos, São Paulo, Brasil',
  'geo.position': '-23.9608;-46.3336',
  ICBM: '-23.9608, -46.3336',
} as const;

type PageMetaInput = {
  path: string;
  title: string;
  description: string;
  ogTitle?: string;
  ogDescription?: string;
};

/** Gera o objeto Metadata (SEO + GEO + OG + Twitter) por rota. */
export function pageMetadata({
  path,
  title,
  description,
  ogTitle,
  ogDescription,
}: PageMetaInput): Metadata {
  const url = path === '/' ? SITE_URL + '/' : `${SITE_URL}${path}`;
  return {
    title,
    description,
    authors: [{ name: 'Marcel Roxo e Lara Finochio' }],
    robots: { index: true, follow: true },
    alternates: { canonical: url },
    openGraph: {
      type: 'website',
      url,
      siteName: 'SDW.hub — Santos Digital Week',
      locale: 'pt_BR',
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [
        {
          url: OG_IMAGE,
          width: 1200,
          height: 630,
          alt: 'Método ACESSO — SDW.hub',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle ?? title,
      description: ogDescription ?? description,
      images: [OG_IMAGE],
    },
    other: { ...GEO },
  };
}

/** JSON-LD (Schema.org) Course + Organization para descoberta em AI search/GEO. */
export function courseJsonLd(path: string, description: string) {
  const url = path === '/' ? SITE_URL + '/' : `${SITE_URL}${path}`;
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': `${SITE_URL}/#org`,
        name: 'SDW.hub — Santos Digital Week',
        url: 'https://sdwhub.com.br',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Santos',
          addressRegion: 'SP',
          addressCountry: 'BR',
        },
      },
      {
        '@type': 'Course',
        name: 'Método ACESSO',
        description,
        url,
        provider: { '@id': `${SITE_URL}/#org` },
        instructor: [
          {
            '@type': 'Person',
            name: 'Marcel Roxo',
            jobTitle: 'Construtor de negócios, eventos e ecossistemas',
          },
          {
            '@type': 'Person',
            name: 'Lara Finochio',
            jobTitle: 'Comunicação e posicionamento de autoridade',
          },
        ],
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'BRL',
          availability: 'https://schema.org/InStock',
        },
        inLanguage: 'pt-BR',
        audience: {
          '@type': 'Audience',
          audienceType: 'Empresários com faturamento acima de R$ 300 mil por ano',
        },
      },
    ],
  };
}
