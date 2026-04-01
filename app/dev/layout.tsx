import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Santiago Samuel — Desarrollo Web',
  description: 'Páginas web y sistemas a medida para negocios reales. Mirá algunos proyectos y contame qué necesitás.',
  alternates: { canonical: '/dev' },
  openGraph: {
    title: 'Santiago Samuel — Desarrollo Web',
    description: 'Páginas web y sistemas a medida para negocios reales. Mirá algunos proyectos y contame qué necesitás.',
    url: 'https://santiagosamuel.com/dev',
    images: [{ url: '/images/cards/card-dev.jpg', width: 1200, height: 630, alt: 'Santiago Samuel — Desarrollador Web' }],
  },
}

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
