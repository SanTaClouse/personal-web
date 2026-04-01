import type { Metadata } from 'next'
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import { ConditionalHeader, ConditionalFooter } from '@/components/ConditionalLayout'
import { SpeedInsights } from '@vercel/speed-insights/next'
import { Analytics } from "@vercel/analytics/next"

// ─── Fuentes ─────────────────────────────────────────────────────────────────

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair',
  display: 'swap',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-dm-sans',
  display: 'swap',
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono',
  display: 'swap',
})

// ─── Metadata base ────────────────────────────────────────────────────────────

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Santiago Samuel — Músico, Arreglador y Desarrollador Web | Santa Fe',
    template: '%s | Santiago Samuel',
  },
  description:
    'Músico, trombonista y desarrollador web de Santa Fe, Argentina. Arreglos y grabaciones de vientos, clases de piano y sistemas web para negocios.',
  keywords: [
    'Santiago Samuel',
    'músico Santa Fe',
    'trombonista Argentina',
    'grabación de vientos',
    'arreglos de vientos',
    'clases de piano Santa Fe',
    'desarrollador web Santa Fe',
  ],
  authors: [{ name: 'Santiago Samuel', url: baseUrl }],
  creator: 'Santiago Samuel',
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    siteName: 'Santiago Samuel',
    title: 'Santiago Samuel — Músico, Arreglador y Desarrollador Web',
    description:
      'Músico, trombonista y desarrollador web de Santa Fe, Argentina. Arreglos y grabaciones de vientos, clases de piano y sistemas web para negocios.',
    images: [
      {
        url: '/images/hero/hero-home.jpg',
        width: 1200,
        height: 630,
        alt: 'Santiago Samuel — Músico y Trombonista',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Santiago Samuel — Músico, Arreglador y Desarrollador Web',
    description: 'Músico, trombonista y desarrollador web de Santa Fe, Argentina.',
    images: ['/images/hero/hero-home.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
    },
  },
}

// ─── Schema markup — Person ───────────────────────────────────────────────────

const personSchema = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Santiago Samuel',
  jobTitle: 'Músico, Arreglador y Desarrollador Web',
  url: baseUrl,
  sameAs: [
    'https://www.instagram.com/santi.rivero06/',
    'https://www.linkedin.com/in/santriv06/',
    'https://github.com/SanTaClouse',
  ],
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Santa Fe',
    addressCountry: 'AR',
  },
}

// ─── Layout ───────────────────────────────────────────────────────────────────

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="es"
      className={`${playfair.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
      </head>
      <body className="bg-brand-bgPrimary text-brand-textPrimary antialiased">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-brand-gold focus:text-brand-bgPrimary focus:px-4 focus:py-2 focus:rounded-md focus:font-sans focus:font-semibold focus:text-sm"
        >
          Ir al contenido principal
        </a>
        <ConditionalHeader />
        <main id="main">{children}</main>
        <ConditionalFooter />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}
