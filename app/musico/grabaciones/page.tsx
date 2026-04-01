import type { Metadata } from 'next'
import GrabacionesContent from './GrabacionesContent'

export const metadata: Metadata = {
  title: 'Grabaciones de Vientos y Arreglos de Brass',
  description:
    'Sección de vientos profesional para tu producción. 4 voces de brass en menos de una semana. Trombón y trompeta. Sonido latino real. Contacto directo.',
  keywords: [
    'grabación de vientos',
    'arreglos de vientos',
    'sección de brass',
    'grabación de trombón',
    'arreglos cumbia',
    'horn section recording Argentina',
    'sección de vientos estudio',
    'grabación de brass',
    'arreglos de vientos para estudio',
  ],
  openGraph: {
    title: 'Grabaciones de Vientos | Santiago Samuel',
    description: 'Horn section para tu producción. Rápido, latino y accesible.',
    images: [{ url: '/images/hero/hero-grabaciones.jpg', width: 1200, height: 630 }],
  },
  alternates: {
    canonical: '/musico/grabaciones',
    languages: {
      'es': '/musico/grabaciones',
      'en': '/musico/grabaciones/en',
    },
  },
}

const serviceSchema = {
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: 'Grabaciones y Arreglos de Vientos',
  provider: { '@type': 'Person', name: 'Santiago Samuel' },
  areaServed: 'Worldwide',
  description:
    'Grabaciones profesionales de sección de vientos. 4 voces de brass en menos de una semana. Arreglos de trombón y trompeta para cumbia, tropical y más.',
  serviceType: 'Music Production',
}

export default function GrabacionesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <GrabacionesContent lang="es" />
    </>
  )
}
