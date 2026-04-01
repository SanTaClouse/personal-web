import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/icons'

import GoldDivider from '@/components/GoldDivider'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Immaculate Pro Painting — Landing Page Premium | Santiago Samuel',
  description:
    'Sitio web de conversión para empresa de pintura premium en Seattle. Identidad visual luxury dark, comparadores before/after interactivos, animaciones scroll-reveal y cero dependencias. HTML5, CSS3, JavaScript vanilla.',
  alternates: { canonical: '/desarrollador/immaculate' },
  openGraph: {
    title: 'Immaculate Pro Painting — Case Study | Santiago Samuel',
    description: 'Landing page premium para empresa de pintura en Seattle. HTML5, CSS3, JavaScript vanilla.',
    images: [{ url: '/images/hero/hero-desarrollador.jpg', width: 1200, height: 630 }],
  },
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
  { cat: 'Lenguajes', items: ['HTML5', 'CSS3 (Custom Properties, Grid, Flexbox, clip-path, clamp())', 'JavaScript ES6+'] },
  { cat: 'Tipografía', items: ['Cormorant Garamond', 'Montserrat', 'Google Fonts CDN'] },
  { cat: 'Deploy', items: ['Vercel (estático)', 'Compatible: Netlify', 'Compatible: GitHub Pages'] },
]

export default function ImmaculatePage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-b border-brand-border pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <Breadcrumbs items={[
            { label: 'Inicio', href: '/' },
            { label: 'Desarrollador', href: '/desarrollador' },
            { label: 'Immaculate Pro Painting' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="badge mb-5 inline-block">Desarrollador · Case study</span>
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-textPrimary leading-tight mb-3">
                Immaculate Pro Painting
              </h1>
              <GoldDivider />
              <p className="font-playfair text-xl text-brand-textSecondary mt-5 mb-2">
                Landing page de conversión para empresa de pintura residencial y comercial premium. Greater Seattle Area, Washington, EE.UU.
              </p>
              <p className="font-sans text-brand-textSecondary text-sm mb-6">
                Identidad visual luxury dark, galería interactiva before/after y múltiples puntos de contacto, diseñado para posicionar al cliente como la opción premium en el mercado de Seattle.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['HTML5', 'CSS3', 'JavaScript', 'Vanilla', 'Zero deps'].map((t) => (
                  <span key={t} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgPrimary border border-brand-border px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://project-eiq6t.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-sm text-brand-gold border border-brand-gold px-4 py-2 rounded-md hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Ver sitio en vivo
              </a>
              <p className="font-sans text-brand-textSecondary/60 text-xs mt-2">Demo en Vercel</p>
            </div>

            {/* Stats del proyecto */}
            <div className="bg-brand-bgPrimary border border-brand-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <p className="text-4xl">🎨</p>
                <div>
                  <p className="font-sans font-semibold text-brand-textPrimary">Immaculate Pro Painting</p>
                  <p className="font-sans text-brand-textSecondary text-xs">Pintura premium · Seattle, WA</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Secciones', value: '9' },
                  { label: 'Módulos JS', value: '6' },
                  { label: 'Before/After', value: '4' },
                  { label: 'Dependencias', value: '0' },
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
              <PlaceholderPreview label="Hero section — luxury dark" />
            </div>
            <div className="space-y-2">
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Galería · Before/After</p>
              <PlaceholderPreview label="Before/After slider interactivo" />
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
              Immaculate Pro Painting operaba con un sitio WordPress genérico que no transmitía el posicionamiento premium de la empresa. En un mercado de servicios de pintura altamente competitivo, el sitio anterior no diferenciaba al cliente de las decenas de contratistas que ofrecen el mismo servicio en Seattle.
            </p>
            <p>
              La ausencia de una galería de trabajos efectiva era una pérdida directa de conversión. Los clientes potenciales no podían ver transformaciones reales antes de contactar, lo que alargaba el ciclo de decisión. Sin prueba visual del trabajo, la empresa dependía completamente del boca a boca.
            </p>
            <p className="text-brand-textPrimary font-medium">
              El sitio tampoco estaba optimizado para la conversión móvil — la mayoría del tráfico en búsquedas locales de servicios del hogar. Los usuarios no encontraban una forma rápida de llamar, generando fricción en el momento de mayor intención de compra.
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
              icon="🔀"
              titulo="Before/After sliders sin librerías"
              desc="Cuatro comparadores de imágenes con drag y touch. El handle dorado controla un clip-path dinámico que divide la imagen en tiempo real. Soporta mouse y táctil, con límites 2%–98% para que el handle nunca desaparezca. Sin canvas, sin jQuery, sin librerías."
            />
            <FeatureCard
              icon="🎯"
              titulo="Identidad luxury dark como estrategia"
              desc="Paleta negro + dorado + tipografía serif (Cormorant Garamond) inspirada en marcas como Rolls-Royce. El mercado de pintura está dominado por sitios blancos genéricos — el diseño transmite premium antes de leer una sola palabra."
            />
            <FeatureCard
              icon="✨"
              titulo="Scroll reveal con stagger via IntersectionObserver"
              desc="Las animaciones de entrada usan IntersectionObserver en lugar de scroll events: se dispara solo cuando el elemento cruza el viewport, sin polling continuo. Los elementos hermanos reciben delay incremental de 80ms. Fluido en mobile sin impacto en performance."
            />
            <FeatureCard
              icon="📞"
              titulo="Floating CTAs con animación pulse"
              desc="Dos botones fijos — llamada y SMS — visibles en todo momento con animación CSS de pulso en el box-shadow. En mobile son el punto de contacto más inmediato, eliminando la necesidad de navegar al footer para obtener el número."
            />
            <FeatureCard
              icon="⚡"
              titulo="Archivo único, cero build tools"
              desc="Todo el CSS y JavaScript están embebidos en el index.html. La única dependencia externa es Google Fonts por CDN. El sitio se despliega subiendo un solo archivo — sin npm, sin Webpack, sin versiones de Next.js que actualizar."
            />
            <FeatureCard
              icon="🔍"
              titulo="Galería filtrable por categoría"
              desc="Cuatro categorías (interior, exterior, cabinets, commercial) con filtrado por data-category sin librerías. La navbar inicia transparente y transiciona a glass morphism (backdrop-filter: blur) cuando el usuario supera 40px de scroll."
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
