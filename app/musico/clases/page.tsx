import type { Metadata } from 'next'
import Image from 'next/image'
import { WA_CLASES } from '@/lib/whatsapp'
import GoldDivider from '@/components/GoldDivider'
import WhatsAppCTA from '@/components/WhatsAppCTA'

export const metadata: Metadata = {
  title: 'Clases de Piano Particulares en Santa Fe | Presencial y Virtual',
  description:
    'Clases de piano con 5 años de experiencia. Presenciales en Santa Fe capital o virtuales para cualquier ciudad. Todos los niveles.',
  keywords: [
    'clases de piano Santa Fe',
    'clases de piano particulares Santa Fe',
    'clases de piano online Argentina',
    'clases de piano virtual',
  ],
  alternates: { canonical: '/musico/clases' },
  openGraph: {
    title: 'Clases de Piano | Santiago Samuel',
    description: 'Clases de piano presenciales en Santa Fe o virtuales. Todos los niveles.',
    images: [{ url: '/images/hero/hero-clases.jpg', width: 1200, height: 630 }],
  },
}

export default function ClasesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end pb-14 md:pb-20 overflow-hidden">
        <Image
          src="/images/hero/hero-clases.jpg"
          alt="Santiago Samuel — Clases de piano particulares"
          fill
          priority
          className="object-cover object-top"
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
          <span className="badge mb-5 inline-block">Músico · Clases</span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-brand-textPrimary leading-tight mb-3 max-w-2xl">
            Clases de piano particulares — Presencial y Virtual
          </h1>
          <GoldDivider />
          <p className="font-sans font-light text-lg text-brand-textSecondary mt-5 mb-8 max-w-xl">
            Más de cinco años de experiencia enseñando a alumnos de distintas edades y niveles.
          </p>
          <WhatsAppCTA href={WA_CLASES} className="py-3 px-6">
            Consultá disponibilidad por WhatsApp
          </WhatsAppCTA>
        </div>
      </section>

      {/* ── TEXTO ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">

            <div className="space-y-4 font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">
              <p>
                Doy clases de piano con más de cinco años de experiencia enseñando a alumnos de
                distintas edades y niveles.
              </p>
              <p>
                Las clases pueden ser{' '}
                <span className="text-brand-textPrimary font-medium">
                  presenciales en mi domicilio en Santa Fe capital
                </span>
                , o{' '}
                <span className="text-brand-textPrimary font-medium">
                  virtuales para quienes estén en cualquier otra ciudad o país
                </span>
                .
              </p>
              <p>
                Si estás empezando desde cero, si querés retomar algo que dejaste, o si ya tocás y
                querés mejorar técnica, lectura o repertorio — puedo ayudarte.
              </p>
              <p className="text-brand-gold font-medium">
                Las clases son personalizadas: el ritmo y el contenido se adaptan a lo que vos
                necesitás y a lo que te gusta escuchar.
              </p>
            </div>

            <div className="flex flex-col gap-4">
              {[
                { emoji: '🎹', titulo: 'Todos los niveles', desc: 'Principiantes, intermedios y avanzados. Desde el primer acorde hasta repertorio exigente.' },
                { emoji: '📍', titulo: 'Presencial — Santa Fe', desc: 'En mi domicilio en Santa Fe capital. Consultá días y horarios disponibles.' },
                { emoji: '💻', titulo: 'Virtual — Todo el mundo', desc: 'Clases por videollamada para alumnos en cualquier ciudad o país. Sin límites geográficos.' },
                { emoji: '🎵', titulo: 'A tu ritmo', desc: 'El contenido se adapta a tus objetivos, tu nivel y el repertorio que te gusta.' },
              ].map((item) => (
                <div
                  key={item.titulo}
                  className="flex gap-4 items-start bg-brand-bgSecondary border border-brand-border rounded-xl p-5 hover:border-brand-gold transition-colors duration-250"
                >
                  <span className="text-2xl flex-shrink-0">{item.emoji}</span>
                  <div>
                    <h3 className="font-sans font-semibold text-brand-textPrimary mb-1">{item.titulo}</h3>
                    <p className="font-sans text-brand-textSecondary text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-14 text-center">
            <h2 className="font-playfair text-2xl md:text-3xl font-bold text-brand-textPrimary mb-3">
              ¿Querés empezar?
            </h2>
            <GoldDivider centered />
            <p className="font-sans text-brand-textSecondary mt-5 mb-7 max-w-md mx-auto">
              Escribime con tus datos, tu nivel aproximado y si preferís presencial o virtual, y coordinamos el primer encuentro.
            </p>
            <WhatsAppCTA href={WA_CLASES}>
              Consultá disponibilidad por WhatsApp
            </WhatsAppCTA>
          </div>
        </div>
      </section>
    </>
  )
}
