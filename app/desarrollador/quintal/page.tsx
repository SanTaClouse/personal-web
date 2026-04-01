import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/icons'

import GoldDivider from '@/components/GoldDivider'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Quintal — Catálogo con Carrito y Checkout por WhatsApp | Santiago Samuel',
  description:
    'Catálogo interactivo de frutos secos premium con selector de gramaje y precio dinámico. El pedido se genera como mensaje estructurado de WhatsApp. React, Vite, Tailwind CSS, sin backend.',
  alternates: { canonical: '/desarrollador/quintal' },
  openGraph: {
    title: 'Quintal — Case Study | Santiago Samuel',
    description: 'Catálogo interactivo con carrito y checkout por WhatsApp. React, Vite, Tailwind CSS.',
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
  { cat: 'Frontend', items: ['React 19', 'Vite 7', 'TypeScript', 'Tailwind CSS 3'] },
  { cat: 'Herramientas', items: ['ESLint 9 (flat config)', 'Lucide React', 'PostCSS', 'Autoprefixer'] },
  { cat: 'Deploy', items: ['Vercel (estático)', 'Sin backend', 'Sin base de datos'] },
]

export default function QuintalPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-b border-brand-border pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <Breadcrumbs items={[
            { label: 'Inicio', href: '/' },
            { label: 'Desarrollador', href: '/desarrollador' },
            { label: 'Quintal' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="badge mb-5 inline-block">Desarrollador · Case study</span>
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-textPrimary leading-tight mb-3">
                Quintal
              </h1>
              <GoldDivider />
              <p className="font-playfair text-xl text-brand-textSecondary mt-5 mb-2">
                Catálogo digital con carrito interactivo para distribuidor de frutos secos premium. Buenos Aires, Argentina.
              </p>
              <p className="font-sans text-brand-textSecondary text-sm mb-6">
                Selector de gramaje con precio dinámico, filtros por categoría y generación automática del pedido como mensaje de WhatsApp. Sin registro, sin checkout tradicional.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Vite', 'TypeScript', 'Tailwind CSS', 'WhatsApp'].map((t) => (
                  <span key={t} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgPrimary border border-brand-border px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://quintal-demo-spa.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 font-sans text-sm text-brand-gold border border-brand-gold px-4 py-2 rounded-md hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Ver demo en vivo
              </a>
              <p className="font-sans text-brand-textSecondary/60 text-xs mt-2">Demo en Vercel</p>
            </div>

            {/* Stats del proyecto */}
            <div className="bg-brand-bgPrimary border border-brand-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <p className="text-4xl">🌰</p>
                <div>
                  <p className="font-sans font-semibold text-brand-textPrimary">Quintal</p>
                  <p className="font-sans text-brand-textSecondary text-xs">Frutos secos premium · Buenos Aires</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Productos', value: '11' },
                  { label: 'Categorías', value: '9' },
                  { label: 'Componentes', value: '3' },
                  { label: 'Backend', value: 'ninguno' },
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
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Catálogo · Desktop</p>
              <PlaceholderPreview label="Grid de productos con selector de gramaje" />
            </div>
            <div className="space-y-2">
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Carrito · Checkout</p>
              <PlaceholderPreview label="Carrito lateral con checkout WhatsApp" />
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
              Quintal es un distribuidor de frutos secos premium que opera principalmente a través de WhatsApp, llamadas y listas de precios por imagen. El proceso de venta era completamente manual: el cliente contactaba, el vendedor respondía con precios, el cliente aclaraba cantidades y gramajes, y recién ahí se confirmaba el pedido.
            </p>
            <p>
              En productos que se venden por peso (250g, 500g, 1kg), esto generaba fricción constante y errores frecuentes. No había ningún punto donde el cliente pudiera ver el catálogo completo, comparar productos o calcular el precio exacto antes de escribir.
            </p>
            <p className="text-brand-textPrimary font-medium">
              El resultado era tiempo perdido en la pre-venta, pedidos mal tomados, y una imagen inconsistente con la calidad premium del producto.
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
              icon="💬"
              titulo="WhatsApp como canal de checkout"
              desc="Al confirmar el pedido, se genera un mensaje pre-formateado con nombre, gramaje, cantidad y total de cada ítem. Se abre directamente en WhatsApp con el número del negocio pre-cargado. El cliente solo presiona enviar — sin formularios, sin pago online."
            />
            <FeatureCard
              icon="⚖️"
              titulo="Precio calculado en el frontend"
              desc="Solo se almacena pricePerKg por producto. El precio para cada presentación se calcula en tiempo real: Math.round(pricePerKg × gramaje.factor). Un solo valor a actualizar por producto, lógica explícita y legible."
            />
            <FeatureCard
              icon="🛒"
              titulo="Carrito con clave compuesta por gramaje"
              desc="Una nuez en 250g y la misma nuez en 500g son dos ítems independientes en el carrito. La clave productId-gramaje permite manejar esto sin colisiones. El carrito es claro y flexible sin lógica adicional."
            />
            <FeatureCard
              icon="🔍"
              titulo="Filtrado combinado y memoizado"
              desc="El catálogo filtra simultáneamente por categoría y texto libre (nombre y descripción). El filtrado es instantáneo — memoizado con useMemo para evitar recómputos innecesarios en cada render."
            />
            <FeatureCard
              icon="🖼️"
              titulo="Fallback visual de imágenes"
              desc="Cada producto tiene un emoji y un gradiente de color como respaldo. Si la imagen externa falla, la card no se rompe: muestra el gradiente con el emoji centrado. La experiencia visual se mantiene consistente siempre."
            />
            <FeatureCard
              icon="🎨"
              titulo="Design system custom con Tailwind"
              desc="Paleta personalizada en tailwind.config: familias cream (beige cálido), olive (verde apagado) y wood (marrón tierra) más tipografía serif para headings. Coherencia visual de marca sin salir del sistema de clases de Tailwind."
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
