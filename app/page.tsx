import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { InstagramIcon, ArrowRightIcon } from '@/components/icons'
import { WA_GENERAL } from '@/lib/whatsapp'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/social'
import GoldDivider from '@/components/GoldDivider'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import BlurText from '@/components/animations/BlurText'
import FadeIn from '@/components/animations/FadeIn'

// ─── Componentes internos ─────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: 'Santiago Samuel — Músico, Arreglador y Desarrollador Web | Santa Fe',
  description:
    'Músico, trombonista y desarrollador web de Santa Fe, Argentina. Arreglos y grabaciones de vientos, clases de piano y sistemas web para negocios.',
  alternates: {
    canonical: '/',
  },
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex items-end pb-16 md:pb-24 overflow-hidden">
        {/* Foto de fondo */}
        <Image
          src="/images/hero/hero-home.jpg"
          alt="Santiago Samuel tocando el trombón"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />

        {/* Overlay gradiente */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,18,16,0.2) 0%, rgba(26,18,16,0.55) 50%, rgba(26,18,16,0.92) 100%)',
          }}
        />

        {/* Contenido */}
        <div className="relative z-10 w-full max-w-content mx-auto px-5 md:px-8 lg:px-12">
          {/* Badge */}
          <span className="badge mb-6 inline-block">Santa Fe, Argentina</span>

          {/* H1 — BlurText word-by-word */}
          <BlurText
            as="h1"
            text="Santiago Samuel"
            delay={160}
            direction="bottom"
            stepDuration={0.45}
            className="font-playfair text-5xl sm:text-6xl md:text-7xl font-bold text-brand-textPrimary leading-tight mb-4"
          />

          {/* Tagline + subtítulo + CTA — FadeIn en bloque */}
          <FadeIn delay={0.55} yOffset={18}>
            <GoldDivider />

            <p className="font-playfair text-xl sm:text-2xl md:text-3xl font-semibold text-brand-textPrimary mt-5 mb-3 max-w-2xl leading-snug">
              Músico trombonista.{' '}
              <span className="text-brand-gold">Y sí, también desarrollo páginas web.</span>
            </p>

            <p className="font-sans font-light text-lg text-brand-textSecondary mb-8 max-w-lg">
              Doce años haciendo música en serio. Curioso de todo desde siempre.
            </p>

            <a
              href="#trabajo"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-bgPrimary font-sans font-semibold text-sm py-3 px-6 rounded-md hover:bg-brand-goldDark transition-colors duration-200"
            >
              Conocé mi trabajo
              <ArrowRightIcon className="w-4 h-4" />
            </a>
          </FadeIn>
        </div>
      </section>

      {/* ── CARDS — LAS DOS RAMAS ─────────────────────────────────────────── */}
      <section
        id="trabajo"
        className="bg-brand-bgPrimary py-16 md:py-24"
      >
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

            {/* Card Músico */}
            <FadeIn delay={0} yOffset={24}>
              <Link
                href="/musico"
                className="group relative overflow-hidden rounded-xl border border-brand-border bg-brand-bgSecondary hover:border-brand-gold active:scale-[0.98] active:border-brand-gold transition-all duration-250 hover:-translate-y-1 shadow-gold block"
              >
                {/* Foto */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/cards/card-musico.jpg"
                    alt="Santiago Samuel — Músico y Arreglador"
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(26,18,16,0.8) 0%, transparent 60%)',
                    }}
                  />
                </div>

                {/* Texto */}
                <div className="p-6">
                  <p className="text-3xl mb-3">🎺</p>
                  <h2 className="font-playfair text-2xl font-bold text-brand-textPrimary mb-2">
                    Músico
                  </h2>
                  <p className="font-sans text-brand-textSecondary mb-5">
                    Grabaciones de vientos, arreglos y clases de piano.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-brand-gold font-sans font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    Explorar
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>

            {/* Card Desarrollador */}
            <FadeIn delay={0.12} yOffset={24}>
              <Link
                href="/desarrollador"
                className="group relative overflow-hidden rounded-xl border border-brand-border bg-brand-bgSecondary hover:border-brand-gold active:scale-[0.98] active:border-brand-gold transition-all duration-250 hover:-translate-y-1 shadow-gold block"
              >
                {/* Foto */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src="/images/cards/card-dev.jpg"
                    alt="Santiago Samuel — Desarrollador Web"
                    fill
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                  <div
                    className="absolute inset-0"
                    style={{
                      background: 'linear-gradient(to top, rgba(26,18,16,0.8) 0%, transparent 60%)',
                    }}
                  />
                </div>

                {/* Texto */}
                <div className="p-6">
                  <p className="text-3xl mb-3">💻</p>
                  <h2 className="font-playfair text-2xl font-bold text-brand-textPrimary mb-2">
                    Desarrollador Web
                  </h2>
                  <p className="font-sans text-brand-textSecondary mb-5">
                    Páginas y sistemas de gestión para negocios reales.
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-brand-gold font-sans font-semibold text-sm group-hover:gap-3 transition-all duration-200">
                    Explorar
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                </div>
              </Link>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* ── SEPARADOR ──────────────────────────────────────────────────────── */}
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
        <hr className="border-brand-border" />
      </div>

      {/* ── SOBRE MÍ ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">

          {/* Header de sección */}
          <div className="mb-10 md:mb-14">
            <span className="badge">Sobre mí</span>
            <GoldDivider />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">

            {/* Foto */}
            <div className="lg:col-span-2 order-first lg:order-last">
              <div
                className="relative aspect-[3/4] rounded-xl overflow-hidden"
                style={{ boxShadow: '0 8px 32px rgba(201,150,58,0.15)' }}
              >
                <Image
                  src="/images/about/about-1.jpg"
                  alt="Santiago Samuel con su trombón"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>

            {/* Texto */}
            <div className="lg:col-span-3">
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mb-2 leading-tight">
                Siempre quise crear algo que no existiera.
              </h2>
              <GoldDivider />

              <div className="mt-6 space-y-4 font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">
                <p>
                  Hace doce años, jugando con un programa de piano en la computadora, me compré
                  mi primer teclado. Sin saber muy bien para dónde iba eso. Al poco tiempo me empezaron a llamar para tocar cumbia santafesina — la música que se vive y se respira
                  en Santa Fe — y desde ese momento no paré más. Tuve el placer de trabajar con bandas y
                  artistas que marcaron la región: Grupo Cali, Nico Mattioli y Juanjo Piedrabuena, entre otros.
                </p>
                <p>
                  En paralelo, estudié piano en el Liceo Municipal, después entré al Instituto Superior de Música,
                  y finalmente me recibí como Licenciado en Sonorización y Grabación en la Universidad Nacional
                  del Litoral. Mientras tanto, daba clases de piano. La música era lo único me nacía hacer,
                  y lo hacía bien.
                </p>
                <p className="text-brand-textPrimary font-medium">
                  Y entonces apareció el trombón.
                </p>
                <p>
                  No sé cómo explicarlo mejor que esto: me enamoré del instrumento antes de tenerlo. En 2018 me
                  anoté en la carrera de Trombón del Liceo Municipal antes de haberlo tocado siquiera una vez.
                  Los primeros seis meses practiqué solo con la boquilla. Después decidí complementar esa
                  formación estudiando por mi cuenta — y me convertí en un autodidacta convencido de que cuando
                  algo te apasiona de verdad, encontrás la manera.
                </p>
                <p>
                  Hoy vivo de la música. Formo parte de la banda de{' '}
                  <Link href="/musico/sergiotorres" className="text-brand-gold hover:underline">
                    Sergio Torres
                  </Link>
                  , uno de los artistas más importantes de la cumbia del Litoral, con quien vengo girando
                  por todo el país desde agosto de 2023.
                </p>
                <p>
                  Además de la música, en 2025 hice algo que no me esperaba: un curso de desarrollo web que me
                  abrió un mundo nuevo. Esa misma curiosidad que me metió en el trombón me llevó a crear páginas
                  y sistemas reales para negocios reales. ¿Querés ver lo que hice?{' '}
                  <span className="text-brand-textPrimary">Esta página la hice yo mismo.</span>
                </p>
              </div>

              {/* Links sociales */}
              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <WhatsAppCTA href={WA_GENERAL} className="py-3 px-5 text-sm">
                  WhatsApp
                </WhatsAppCTA>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 border border-brand-gold text-brand-gold font-sans font-semibold text-sm py-3 px-5 rounded-md hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
                >
                  <InstagramIcon className="w-4 h-4" />
                  {INSTAGRAM_HANDLE}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-t border-brand-border py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 text-center">
          <p className="badge mb-4 inline-block">¿Empezamos?</p>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mb-4">
            ¿Qué necesitás?
          </h2>
          <GoldDivider centered />
          <p className="font-sans text-brand-textSecondary mt-6 mb-8 max-w-xl mx-auto leading-relaxed">
            Ya sea que necesites vientos para tu producción,
            clases de piano o una página web — estoy acá.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <WhatsAppCTA href={WA_GENERAL} variant="gold">
              Escribime por WhatsApp
            </WhatsAppCTA>
            <Link
              href="/musico/grabaciones"
              className="inline-flex items-center justify-center gap-2 border border-brand-border text-brand-textSecondary font-sans font-semibold text-sm py-3.5 px-7 rounded-md hover:border-brand-gold hover:text-brand-textPrimary transition-all duration-200"
            >
              Ver grabaciones de vientos
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
            <Link
              href="/desarrollador"
              className="inline-flex items-center justify-center gap-2 border border-brand-border text-brand-textSecondary font-sans font-semibold text-sm py-3.5 px-7 rounded-md hover:border-brand-gold hover:text-brand-textPrimary transition-all duration-200"
            >
              Ver proyectos de desarrollo
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
