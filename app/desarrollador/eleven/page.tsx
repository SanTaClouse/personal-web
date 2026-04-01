import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/icons'
import GoldDivider from '@/components/GoldDivider'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'Eleven Ascensores — SaaS + Web + QR + Facturación ARCA | Santiago Samuel',
  description:
    'Plataforma SaaS para empresa de mantenimiento de ascensores: landing page SEO, sistema administrativo con dashboard, portal QR para técnicos y facturación electrónica ARCA. Next.js, NestJS, PostgreSQL.',
  alternates: { canonical: '/desarrollador/eleven' },
  openGraph: {
    title: 'Eleven Ascensores — Case Study | Santiago Samuel',
    description: 'Plataforma SaaS: landing page SEO, sistema admin, portal QR y facturación electrónica ARCA.',
    images: [{ url: '/images/projects/eleven-preview.jpg', width: 1200, height: 630 }],
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

const stack = [
  { cat: 'Frontend', items: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS v4', 'shadcn/ui', 'TanStack Query', 'React Hook Form', 'Zod'] },
  { cat: 'Backend', items: ['NestJS 11', 'TypeORM', 'PostgreSQL', 'JWT + Passport', 'Firebase Admin', 'SOAP (ARCA)', 'node-forge', 'PDFKit'] },
  { cat: 'Infra', items: ['Vercel', 'Render (Docker)', 'Railway', 'Firebase Storage', 'GitHub Actions'] },
]

const apps = [
  {
    badge: 'Landing page',
    titulo: 'Sitio institucional SEO',
    desc: 'Optimizado para posicionamiento local en Google. Schemas JSON-LD (LocalBusiness, Service, FAQ, Breadcrumb), metadata dinámica por página, sitemap automático.',
    items: [
      'Hero con KPIs animados (IntersectionObserver)',
      '3 páginas de servicios con URLs semánticas',
      'FAQ interactivo con schema JSON-LD',
      'Formulario de contacto (integración Resend)',
      'Banner de línea de emergencia 24/7',
    ],
  },
  {
    badge: 'Sistema admin',
    titulo: 'Dashboard administrativo',
    desc: 'Panel de control con KPIs mensuales, gestión completa de clientes y edificios, y workflow de órdenes de trabajo.',
    items: [
      'KPIs: avance del mes, facturación y cobranza en tiempo real',
      'Generación masiva de órdenes para todos los edificios activos',
      'CRUD de clientes con CUIT y datos fiscales',
      'CRUD de edificios con historial de precios auditado',
      'Tabla de órdenes con filtros por estado, cliente y tipo',
    ],
  },
  {
    badge: 'Portal QR',
    titulo: 'Portal móvil para técnicos',
    desc: 'Sin app nativa. El técnico escanea el QR del edificio y accede desde cualquier teléfono.',
    items: [
      'Responsive mobile-first (máx. 428px)',
      'Ver órdenes del mes por edificio',
      'Iniciar y completar trabajos desde el campo',
      'Agregar observaciones a cada orden',
      'Historial de trabajos por edificio',
    ],
  },
  {
    badge: 'Facturación ARCA',
    titulo: 'Facturación electrónica automática',
    desc: 'Integración completa con ARCA (ex-AFIP). De un proceso de días a 5 segundos por factura.',
    items: [
      'Autenticación WSAA con certificado X.509 + PKCS7/CMS',
      'Cache de ticket de sesión de 12 horas',
      'Obtención de CAE vía WSFE (protocolo SOAP)',
      'Generación de PDF con QR ARCA (formato oficial)',
      'Upload automático a Firebase Storage + URL en la orden',
    ],
  },
]

export default function ElevenPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-b border-brand-border pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <Breadcrumbs items={[
            { label: 'Inicio', href: '/' },
            { label: 'Desarrollador', href: '/desarrollador' },
            { label: 'Eleven Ascensores' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="badge mb-5 inline-block">Desarrollador · Case study</span>
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-textPrimary leading-tight mb-3">
                Eleven Ascensores
              </h1>
              <GoldDivider />
              <p className="font-playfair text-xl text-brand-textSecondary mt-5 mb-2">
                Plataforma SaaS para empresa de mantenimiento de ascensores de Santa Fe.
              </p>
              <p className="font-sans text-brand-textSecondary text-sm mb-6">
                Landing page SEO + sistema administrativo + portal QR para técnicos + facturación electrónica ARCA.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'ARCA', 'Firebase'].map((t) => (
                  <span key={t} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgPrimary border border-brand-border px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <span className="inline-flex items-center gap-1.5 text-brand-textSecondary font-sans text-sm border border-brand-border px-4 py-2 rounded-md cursor-not-allowed opacity-50">
                <ExternalLinkIcon className="w-4 h-4" />
                Ver sitio (dominio privado del cliente)
              </span>
            </div>

            {/* Stats del proyecto */}
            <div className="bg-brand-bgPrimary border border-brand-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <p className="text-4xl">🛗</p>
                <div>
                  <p className="font-sans font-semibold text-brand-textPrimary">Eleven Ascensores</p>
                  <p className="font-sans text-brand-textSecondary text-xs">Mantenimiento · Santa Fe</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Aplicaciones', value: '3' },
                  { label: 'Endpoints API', value: '35+' },
                  { label: 'Entidades DB', value: '7' },
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
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Landing page</p>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-border">
                <Image
                  src="/images/projects/eleven-landing.jpg"
                  alt="Eleven Ascensores — Sitio institucional"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
            <div className="space-y-2">
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Sistema admin</p>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-border">
                <Image
                  src="/images/projects/eleven-preview.jpg"
                  alt="Eleven Ascensores — Dashboard administrativo"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
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
              Eleven Ascensores gestiona el mantenimiento preventivo mensual de decenas de edificios
              en Santa Fe. Cada mes, el mismo ciclo: crear las órdenes de trabajo manualmente,
              coordinar técnicos en campo sin herramientas digitales, y luego facturar electrónicamente
              a ARCA uno por uno — un proceso que podía llevar días de trabajo administrativo.
            </p>
            <p>
              Sin presencia online para captar nuevos clientes. Sin trazabilidad del trabajo realizado
              por edificio. Sin una manera eficiente de que los técnicos registren su actividad
              desde el campo.
            </p>
            <p className="text-brand-textPrimary font-medium">
              La solución tenía que cubrir todo el ciclo: desde que un cliente busca en Google hasta
              que la factura electrónica llega a la base de datos.
            </p>
          </div>
        </div>
      </section>

      {/* ── LAS CUATRO APPS ───────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-y border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14">
            <span className="badge">Qué construí</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
              Cuatro aplicaciones, un sistema
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {apps.map((app) => (
              <div key={app.titulo} className="bg-brand-bgPrimary border border-brand-border rounded-xl p-6">
                <span className="badge mb-3 inline-block">{app.badge}</span>
                <h3 className="font-playfair text-xl font-bold text-brand-textPrimary mb-2">{app.titulo}</h3>
                <p className="font-sans text-brand-textSecondary text-sm mb-4 leading-relaxed">{app.desc}</p>
                <ul className="space-y-1.5">
                  {app.items.map((item) => (
                    <li key={item} className="flex gap-2 font-sans text-brand-textSecondary text-sm">
                      <span className="text-brand-gold mt-0.5 flex-shrink-0">→</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DECISIONES TÉCNICAS ───────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-24">
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
              icon="🏛️"
              titulo="Facturación ARCA completa"
              desc="Protocolo SOAP con PKI: firma el TRA con X.509 + PKCS7/CMS, obtiene el token del WSAA, solicita el CAE al WSFE. Cache del ticket de 12h. PDF con QR ARCA oficial. De días a 5 segundos."
            />
            <FeatureCard
              icon="📱"
              titulo="Portal QR sin app"
              desc="Los técnicos escanean el QR del edificio y acceden al portal desde cualquier teléfono. Sin instalación, sin cuenta extra. Inician y completan trabajos desde el campo en tiempo real."
            />
            <FeatureCard
              icon="⚡"
              titulo="Generación masiva de órdenes"
              desc="Un endpoint crea automáticamente todas las órdenes del mes para todos los edificios activos. Elimina la creación manual repetitiva, el proceso más frecuente y costoso en tiempo."
            />
            <FeatureCard
              icon="🔐"
              titulo="JWT con refresh dinámico"
              desc='Access token de 15 minutos. Refresh de 7 días (o 30 con "Recordarme"). Auto-logout tras 30 min de inactividad. Tokens revocables via campo tokensValidAfter en la entidad User.'
            />
            <FeatureCard
              icon="🗄️"
              titulo="Historial de precios auditado"
              desc="Cada cambio de precio de un edificio se guarda en tabla BuildingPriceHistory con fecha y valor anterior. Auditoría completa, sin posibilidad de perder información histórica."
            />
            <FeatureCard
              icon="🛡️"
              titulo="Rate limiting + SEO schemas"
              desc="120 req/min por IP con @nestjs/throttler. En el frontend: 4 tipos de schemas JSON-LD (LocalBusiness, Service, FAQ, Breadcrumb) para posicionamiento local agresivo."
            />
          </div>

          {/* Stack */}
          <div className="bg-brand-bgSecondary border border-brand-border rounded-xl p-6 md:p-8">
            <h3 className="font-sans font-semibold text-brand-textPrimary mb-5">Stack completo</h3>
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
            href="/desarrollador"
            className="inline-flex items-center gap-1.5 text-brand-textSecondary font-sans text-sm hover:text-brand-textPrimary transition-colors duration-150"
          >
            ← Ver todos los proyectos
          </Link>
        </div>
      </section>
    </>
  )
}
