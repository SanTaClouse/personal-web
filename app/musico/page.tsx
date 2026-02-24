import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Músico & Arreglador',
  description:
    'Grabaciones de vientos, arreglos de brass, transcripciones para SADAIC, clases de piano y más. La música como forma de vida — desde Santa Fe, Argentina.',
  alternates: { canonical: '/musico' },
}

const servicios = [
  {
    href: '/musico/grabaciones',
    emoji: '🎺',
    badge: 'Prioridad máxima',
    titulo: 'Grabaciones de Vientos',
    descripcion:
      '4 voces de brass en menos de una semana. Trombón, trompeta, arreglos propios o sobre partitura. Sonido latino real para tu producción.',
    imagen: '/images/hero/hero-grabaciones.jpg',
    destacado: true,
  },
  {
    href: '/musico/transcripciones',
    emoji: '📄',
    badge: null,
    titulo: 'Transcripciones para SADAIC',
    descripcion:
      'Registro de obras musicales en SADAIC y otros organismos internacionales. Melodía, armonía y partitura completa.',
    imagen: '/images/hero/hero-transcripciones.jpg',
    destacado: false,
  },
  {
    href: '/musico/sergiotorres',
    emoji: '🎤',
    badge: null,
    titulo: 'Sergio Torres',
    descripcion:
      'Desde agosto de 2023 soy parte de la banda de Sergio Torres, referente de la cumbia santafesina. Shows, grabaciones, kilómetros.',
    imagen: '/images/6.jpg',
    destacado: false,
  },
  {
    href: '/musico/clases',
    emoji: '🎹',
    badge: null,
    titulo: 'Clases de Piano',
    descripcion:
      'Clases presenciales en Santa Fe o virtuales. Todos los niveles, con más de cinco años de experiencia enseñando.',
    imagen: '/images/hero/hero-clases.jpg',
    destacado: false,
  },
]

function GoldDivider() {
  return <span className="block w-14 h-0.5 bg-brand-gold mt-3" />
}

export default function MusicoPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[65vh] flex items-end pb-14 md:pb-20 overflow-hidden">
        <Image
          src="/images/hero-fondo-music.png"
          alt="Santiago Samuel — Músico y Arreglador"
          fill
          priority
          className="object-cover object-right"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,18,16,0.2) 0%, rgba(26,18,16,0.6) 50%, rgba(26,18,16,0.95) 100%)',
          }}
        />
        <div className="relative z-10 w-full max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <span className="badge mb-5 inline-block">Músico</span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-brand-textPrimary leading-tight mb-3">
            La música como<br className="hidden sm:block" /> forma de vida.
          </h1>
          <GoldDivider />
          <p className="font-sans font-light text-lg text-brand-textSecondary mt-5 max-w-lg">
            Doce años tocando, estudiando, grabando y girando. Todo lo que hago con la música — en un lugar.
          </p>
        </div>
      </section>

      {/* ── SERVICIOS ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">

          {/* Card destacada — grabaciones */}
          <Link
            href={servicios[0].href}
            className="group mb-8 block relative overflow-hidden rounded-xl border border-brand-gold bg-brand-bgSecondary hover:-translate-y-1 transition-all duration-250 shadow-gold-lg"
          >
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="relative aspect-[4/3] md:aspect-auto md:min-h-[280px] overflow-hidden">
                <Image
                  src={servicios[0].imagen}
                  alt="Grabaciones de vientos"
                  fill
                  className="object-cover object-[50%_20%] group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <p className="text-4xl mb-3">{servicios[0].emoji}</p>
                <span className="badge mb-3 inline-block w-fit">⭐ Servicio principal</span>
                <h2 className="font-playfair text-2xl md:text-3xl font-bold text-brand-textPrimary mb-3">
                  {servicios[0].titulo}
                </h2>
                <p className="font-sans text-brand-textSecondary mb-5 leading-relaxed">
                  {servicios[0].descripcion}
                </p>
                <span className="inline-flex items-center gap-1.5 text-brand-gold font-sans font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                  Ver grabaciones <ArrowRightIcon className="w-4 h-4" />
                </span>
              </div>
            </div>
          </Link>

          {/* Grid de 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {servicios.slice(1).map((s) => (
              <Link
                key={s.href}
                href={s.href}
                className="group overflow-hidden rounded-xl border border-brand-border bg-brand-bgSecondary hover:border-brand-gold hover:-translate-y-1 transition-all duration-250"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={s.imagen}
                    alt={s.titulo}
                    fill
                    className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        'linear-gradient(to top, rgba(26,18,16,0.6) 0%, transparent 60%)',
                    }}
                  />
                </div>
                <div className="p-5">
                  <p className="text-2xl mb-2">{s.emoji}</p>
                  <h2 className="font-playfair text-xl font-bold text-brand-textPrimary mb-2">
                    {s.titulo}
                  </h2>
                  <p className="font-sans text-brand-textSecondary text-sm mb-4 leading-relaxed">
                    {s.descripcion}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-brand-gold font-sans font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    Ver más <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
