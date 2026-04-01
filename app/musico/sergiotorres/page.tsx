import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { InstagramIcon, ExternalLinkIcon } from '@/components/icons'
import GoldDivider from '@/components/GoldDivider'

export const metadata: Metadata = {
  title: 'Sergio Torres — Músico de la Banda',
  description:
    'Desde agosto de 2023 formo parte de la banda de Sergio Torres, referente de la cumbia santafesina. Shows, grabaciones y giras por todo el país.',
  alternates: { canonical: '/musico/sergiotorres' },
  openGraph: {
    title: 'Sergio Torres | Santiago Samuel',
    description: 'Trombonista de la banda de Sergio Torres, referente de la cumbia santafesina.',
    images: [{ url: '/images/hero/hero-sergiotorres.jpg', width: 1200, height: 630 }],
  },
}

export default function SergioTorresPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end pb-14 md:pb-20 overflow-hidden">
        <Image
          src="/images/hero/hero-sergiotorres.jpg"
          alt="Santiago Samuel — Banda de Sergio Torres"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,10,9,0.2) 0%, rgba(13,10,9,0.6) 50%, rgba(13,10,9,0.95) 100%)',
          }}
        />
        <div className="relative z-10 w-full max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <Link
            href="/musico"
            className="inline-flex items-center gap-1.5 text-brand-textSecondary text-sm font-sans mb-5 hover:text-brand-textPrimary transition-colors duration-150"
          >
            ← Músico
          </Link>
          <span className="badge mb-4 inline-block">Sergio Torres & Los Dueños del Swing</span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-brand-textPrimary leading-tight mb-3">
            Sergio Torres &<br className="hidden sm:block" /> Los Dueños del Swing
          </h1>
          <GoldDivider />
          <p className="font-sans font-light text-lg text-brand-textSecondary mt-5 max-w-lg">
            Cuatro décadas de cumbia santafesina. Una de las experiencias que más me enorgullece
            como músico.
          </p>
        </div>
      </section>

      {/* ── TEXTO PRINCIPAL ───────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

            {/* Sobre Sergio */}
            <div>
              <div className="mb-6">
                <span className="badge">El artista</span>
                <GoldDivider />
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-brand-textPrimary mt-5">
                  Hay artistas que definen el sonido de una ciudad.
                </h2>
              </div>
              <div className="space-y-4 font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">
                <p>
                  Sergio Torres es uno de ellos. Nacido en Santa Fe, Argentina, lleva más de cuatro
                  décadas construyendo una carrera que lo convirtió en uno de los máximos referentes
                  de la cumbia santafesina y la música tropical del país.
                </p>
                <p>
                  Temas como <em className="text-brand-textPrimary">Tatuaje</em>,{' '}
                  <em className="text-brand-textPrimary">Llorarás</em>,{' '}
                  <em className="text-brand-textPrimary">Laura no está</em>,{' '}
                  <em className="text-brand-textPrimary">Adicto a tu piel</em> y{' '}
                  <em className="text-brand-textPrimary">Piropo</em> son parte del cancionero
                  popular de toda una región.
                </p>
                <p>
                  Fue el primer artista santafesino en presentarse en el Luna Park de Buenos Aires,
                  y su música llegó a sonar en Panamá, Colombia y más allá de las fronteras
                  argentinas.
                </p>
                <p className="text-brand-textPrimary font-medium">
                  Más de 35 años de historia, construida show a show, disco a disco, ciudad por ciudad.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 mt-8">
                <a
                  href="https://www.instagram.com/sergiotorresof/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold font-sans font-semibold text-sm py-2.5 px-5 rounded-md hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
                >
                  <InstagramIcon className="w-4 h-4" />
                  @sergiotorresof
                </a>
                <a
                  href="https://www.youtube.com/channel/UC_HcKuICZJB10Dh64wfetmw"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-brand-border text-brand-textSecondary font-sans font-semibold text-sm py-2.5 px-5 rounded-md hover:border-brand-gold hover:text-brand-textPrimary transition-all duration-200"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  Canal de YouTube
                </a>
              </div>
            </div>

            {/* Mi lugar en la banda */}
            <div>
              <div className="mb-6">
                <span className="badge">Mi rol</span>
                <GoldDivider />
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-brand-textPrimary mt-5">
                  Mi lugar en la banda
                </h2>
              </div>
              <div className="space-y-4 font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">
                <p>
                  Desde <span className="text-brand-textPrimary font-medium">agosto de 2023</span>{' '}
                  tengo el honor de formar parte de esta banda.
                </p>
                <p>
                  Entré tocando el piano. Con el tiempo fui sumando el trombón, y hoy es mi rol
                  principal dentro de la formación.
                </p>
                <p>
                  En estos más de dos años hemos recorrido escenarios a lo largo y ancho de todo el
                  país, compartido grabaciones y construido algo que va mucho más allá de un
                  trabajo: es una escuela en vivo, noche tras noche.
                </p>
                <p className="text-brand-gold font-medium">
                  Ser parte de la banda de Sergio Torres es uno de los capítulos que más me
                  enorgullece en mi historia como músico.
                </p>
              </div>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-3 gap-4">
                {[
                  { valor: '2023', label: 'Inicio' },
                  { valor: '2+', label: 'Años en la banda' },
                  { valor: '🎺', label: 'Trombonista' },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-brand-bgSecondary border border-brand-border rounded-lg p-4 text-center"
                  >
                    <p className="font-playfair text-2xl font-bold text-brand-gold">{stat.valor}</p>
                    <p className="font-sans text-xs text-brand-textSecondary mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
