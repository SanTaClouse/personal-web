import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'TR1BU — Portfolio Web de Artista Techno | Santiago Samuel',
  description:
    'Sitio web bilingüe (inglés/español) para DJ de techno radicado en Copenhagen. Next.js App Router, routing dinámico por idioma, SEO con schema MusicGroup, Cloudinary y embeds de Spotify, YouTube y SoundCloud.',
  alternates: { canonical: '/desarrollador/tr1bu' },
}

function GoldDivider() {
  return <span className="block w-14 h-0.5 bg-brand-gold mt-3" />
}

function FeatureCard({ icon, titulo, desc }: { icon: string; titulo: string; desc: string }) {
  return (
    <div className="bg-brand-bgSecondary border border-brand-border rounded-xl p-5">
      <p className="text-3xl mb-3">{icon}</p>
      <h3 className="font-sans font-semibold text-brand-textPrimary mb-1">{titulo}</h3>
      <p className="font-sans text-brand-textSecondary text-sm leading-relaxed">{desc}</p>
    </div>
  )
}

function PlaceholderPreview({ label }: { label: string }) {
  return (
    <div className="relative aspect-video rounded-xl overflow-hidden border border-dashed border-brand-border bg-brand-bgDeep flex items-center justify-center">
      <p className="font-mono-brand text-brand-textSecondary/40 text-xs">{label}</p>
    </div>
  )
}

const stack = [
  { cat: 'Frontend', items: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS 3'] },
  { cat: 'Multimedia', items: ['Cloudinary CDN', 'YouTube embed', 'Spotify embed', 'SoundCloud embed'] },
  { cat: 'Deploy', items: ['Vercel', 'Google Fonts', 'ESLint', 'TypeScript strict'] },
]

export default function Tr1buPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-b border-brand-border pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <Link
            href="/desarrollador"
            className="inline-flex items-center gap-1.5 text-brand-textSecondary text-sm font-sans mb-6 hover:text-brand-textPrimary transition-colors duration-150"
          >
            ← Desarrollador
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="badge mb-5 inline-block">Desarrollador · Case study</span>
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-textPrimary leading-tight mb-3">
                TR1BU
              </h1>
              <GoldDivider />
              <p className="font-playfair text-xl text-brand-textSecondary mt-5 mb-2">
                Sitio web de portfolio para artista de techno. Copenhagen, Dinamarca.
              </p>
              <p className="font-sans text-brand-textSecondary text-sm mb-6">
                Presencia digital completa: identidad visual, música, galería y sistema de booking. Bilingüe inglés/español con SEO técnico para posicionamiento en escena europea.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudinary', 'Bilingüe'].map((t) => (
                  <span key={t} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgPrimary border border-brand-border px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <a
                  href="https://tr1bu.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-sm text-brand-gold border border-brand-gold px-4 py-2 rounded-md hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  Ver sitio en vivo
                </a>
                <a
                  href="https://github.com/SanTaClouse/tr1bu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-sm text-brand-textSecondary border border-brand-border px-4 py-2 rounded-md hover:text-brand-textPrimary transition-all duration-200"
                >
                  Ver repositorio
                </a>
              </div>
            </div>

            {/* Stats del proyecto */}
            <div className="bg-brand-bgPrimary border border-brand-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <p className="text-4xl">🎛️</p>
                <div>
                  <p className="font-sans font-semibold text-brand-textPrimary">TR1BU</p>
                  <p className="font-sans text-brand-textSecondary text-xs">Techno DJ · Copenhagen, DK</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Idiomas', value: '2' },
                  { label: 'Componentes', value: '8' },
                  { label: 'Rutas', value: '3' },
                  { label: 'En producción', value: '✓' },
                ].map((m) => (
                  <div key={m.label} className="bg-brand-bgSecondary border border-brand-border rounded-lg p-3 text-center">
                    <p className="font-mono-brand text-brand-gold text-lg font-bold">{m.value}</p>
                    <p className="font-sans text-brand-textSecondary text-xs mt-0.5">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PREVIEW ────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-12 md:py-16">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="space-y-2">
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Hero · Desktop</p>
              <PlaceholderPreview label="Sección hero (desktop)" />
            </div>
            <div className="space-y-2">
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Música · Galería</p>
              <PlaceholderPreview label="Galería y embeds de música" />
            </div>
          </div>
        </div>
      </section>

      {/* ── EL PROBLEMA ───────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 max-w-3xl">
          <div className="mb-8">
            <span className="badge">El problema</span>
            <GoldDivider />
          </div>
          <div className="space-y-4 font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">
            <p>
              TR1BU es un artista de música electrónica que opera en la escena techno de Copenhagen. Sin un sitio propio, su única presencia online eran perfiles dispersos en Spotify, SoundCloud e Instagram — sin ningún punto central que unificara la identidad visual ni presentara la música en contexto.
            </p>
            <p>
              El objetivo del sitio no es solo mostrar música: es generar credibilidad frente a promotores de eventos y clubes europeos. Un booking que llega a través de una web propia transmite un nivel de profesionalismo diferente al que llega por DM de Instagram. Esa diferencia importa en la escena.
            </p>
            <p className="text-brand-textPrimary font-medium">
              Adicionalmente, el artista tiene audiencia en español e inglés — lo que requería una solución bilingüe real, no una traducción automática de parche.
            </p>
          </div>
        </div>
      </section>

      {/* ── LO QUE LO HACE DIFERENTE ──────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-y border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14">
            <span className="badge">Técnico</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
              Lo que lo hace diferente
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              icon="🌐"
              titulo="Routing bilingüe sin dependencias i18n"
              desc="Rutas /en y /es con metadata independiente por idioma. El sistema de traducciones está implementado con un objeto tipado en TypeScript — sin next-intl, sin react-i18next. Cero dependencias extra, control total sobre las URLs."
            />
            <FeatureCard
              icon="🎵"
              titulo="Schema MusicGroup para SEO de artista"
              desc="JSON-LD con tipo MusicGroup en el head: nombre, género, ubicación (Copenhagen, DK) e imagen. Preparado para rich results en Google y para ser indexado como entidad musical, no como página web genérica."
            />
            <FeatureCard
              icon="📸"
              titulo="Imágenes en Cloudinary, repo liviano"
              desc="Todas las fotos artísticas se alojan en Cloudinary y se sirven optimizadas en AVIF/WebP vía Next.js Image. El repositorio permanece liviano — el cliente puede actualizar fotos desde el panel sin tocar el código."
            />
            <FeatureCard
              icon="📱"
              titulo="Booking adaptado al dispositivo"
              desc="El botón de contacto detecta si el usuario está en móvil o escritorio. En móvil abre mailto: en el cliente nativo; en escritorio abre Gmail web. Implementado con navigator.userAgent, sin dependencias adicionales."
            />
            <FeatureCard
              icon="🖼️"
              titulo="Galería con layout editorial asimétrico"
              desc="Grid de 5 fotos donde la primera imagen ocupa 2 columnas en desktop, generando una composición editorial. Efecto hover de escala de grises a color en la foto de perfil — solo con clases de Tailwind, sin JavaScript."
            />
            <FeatureCard
              icon="▶️"
              titulo="Embeds responsivos de Spotify, YouTube y SoundCloud"
              desc="Los tres players se integran como iframes con wrappers que mantienen el aspect ratio 16:9 en todos los breakpoints. El DJ set de YouTube, el perfil de Spotify y el feed de SoundCloud disponibles en el mismo recorrido."
            />
          </div>

          {/* Stack */}
          <div className="bg-brand-bgSecondary border border-brand-border rounded-xl p-6 md:p-8">
            <h3 className="font-sans font-semibold text-brand-textPrimary mb-5">Stack</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {stack.map((cat) => (
                <div key={cat.cat}>
                  <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest mb-3">{cat.cat}</p>
                  <div className="flex flex-wrap gap-2">
                    {cat.items.map((item) => (
                      <span key={item} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgPrimary border border-brand-border px-3 py-1 rounded-full">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── BACK ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-t border-brand-border py-12">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <Link
            href="/desarrollador/portfolio"
            className="inline-flex items-center gap-1.5 text-brand-textSecondary font-sans text-sm hover:text-brand-textPrimary transition-colors duration-150"
          >
            ← Ver todos los proyectos
          </Link>
        </div>
      </section>
    </>
  )
}
