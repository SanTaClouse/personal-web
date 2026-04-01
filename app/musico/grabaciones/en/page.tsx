import type { Metadata } from 'next'
import GrabacionesContent from '../GrabacionesContent'

export const metadata: Metadata = {
  title: 'Horn Section Recording & Brass Arrangements',
  description:
    'Professional horn section for your production. 4 brass voices in less than a week. Trombone and trumpet. Authentic latin sound. Direct contact.',
  keywords: [
    'horn section recording',
    'brass arrangements',
    'trombone recording',
    'trumpet recording',
    'latin brass',
    'horn section for hire',
    'brass session musician Argentina',
  ],
  openGraph: {
    title: 'Horn Section Recording | Santiago Samuel',
    description: 'Brass sessions for your production. Fast, latin and affordable.',
    images: [{ url: '/images/hero/hero-grabaciones.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: '/musico/grabaciones/en',
    languages: {
      'es': '/musico/grabaciones',
      'en': '/musico/grabaciones/en',
    },
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Horn Section Recording & Brass Arrangements',
  provider: { '@type': 'Person', name: 'Santiago Samuel' },
  areaServed: 'Worldwide',
  description:
    'Professional horn section recordings. 4 brass voices in less than a week. Trombone and trumpet arrangements for cumbia, tropical and more.',
  serviceType: 'Music Production',
}

export default function GrabacionesEnPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <GrabacionesContent lang="en" />
    </>
  )
}
