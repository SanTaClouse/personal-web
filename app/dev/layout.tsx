import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Santiago Samuel — Aplicaciones y páginas web',
  description: 'Mirá algunos proyectos en mi portfolio.',
  alternates: { canonical: '/dev' },
  openGraph: {
    title: 'Santiago Samuel — Aplicaciones y páginas web',
    description: 'Mirá algunos proyectos en mi portafolio.',
    url: 'https://santiagosamuel.com/dev',
  },
}

export default function DevLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>
}
