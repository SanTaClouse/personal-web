import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/icons'
import GoldDivider from '@/components/GoldDivider'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'La Luna — Sistema de Gestión + Web Institucional | Santiago Samuel',
  description:
    'Plataforma completa para La Luna: sitio web institucional con SEO local + backoffice administrativo para gestión de pedidos, clientes y stock. React, NestJS, PostgreSQL.',
  alternates: { canonical: '/desarrollador/laluna' },
  openGraph: {
    title: 'La Luna — Case Study | Santiago Samuel',
    description: 'Web institucional SEO + backoffice administrativo: pedidos, clientes y stock.',
    images: [{ url: '/images/projects/laluna-preview.jpg', width: 1200, height: 630 }],
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
  { cat: 'Frontend', items: ['React 18', 'Vite', 'TypeScript', 'Bootstrap 5', 'React Hook Form', 'Recharts', 'Framer Motion'] },
  { cat: 'Backend', items: ['NestJS 11', 'TypeORM', 'PostgreSQL', 'JWT + Passport', 'bcrypt', 'Swagger'] },
  { cat: 'Infra', items: ['Vercel', 'Render', 'GitHub CI/CD'] },
]

const backofficeModulos = [
  {
    ruta: '/ventas',
    titulo: 'Pedidos',
    desc: 'Listado paginado con filtros, control de pagos (precio vs. abonado), estado Pago/Impago, y generación automática de links WhatsApp con mensaje pre-formateado para cada cliente.',
  },
  {
    ruta: '/clientes',
    titulo: 'Clientes',
    desc: 'CRUD completo con soft delete. Página de detalle por cliente: total facturado acumulado, cantidad de pedidos, último pedido y historial completo.',
  },
  {
    ruta: '/mercaderia',
    titulo: 'Stock por sucursal',
    desc: 'Gestión de stock en 4 sucursales. Modos SET (cantidad exacta) y ADD (suma/resta). Historial de cambios con auditoría: quién hizo el ajuste, cuándo y cuánto.',
  },
  {
    ruta: '/estadisticas',
    titulo: 'Dashboard',
    desc: 'KPIs de ventas (total, cobrado, pendiente), gráficos de tendencia, barras mensuales y pie chart. Tabla de top clientes por volumen de compra con filtros por período.',
  },
]

export default function LaLunaPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-b border-brand-border pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <Breadcrumbs items={[
            { label: 'Inicio', href: '/' },
            { label: 'Desarrollador', href: '/desarrollador' },
            { label: 'La Luna' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="badge mb-5 inline-block">Desarrollador · Case study</span>
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-textPrimary leading-tight mb-3">
                La Luna
              </h1>
              <GoldDivider />
              <p className="font-playfair text-xl text-brand-textSecondary mt-5 mb-2">
                Plataforma completa para el mayorista de frutas y verduras más importante de Maciel, Santa Fe.
              </p>
              <p className="font-sans text-brand-textSecondary text-sm mb-6">
                Sitio web institucional + sistema de backoffice para gestión de pedidos, clientes y stock.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['React', 'Vite', 'NestJS', 'TypeScript', 'PostgreSQL', 'JWT'].map((t) => (
                  <span key={t} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgPrimary border border-brand-border px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <a
                href="https://laluna123.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-brand-gold font-sans font-semibold text-sm border border-brand-gold px-4 py-2 rounded-md hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
              >
                <ExternalLinkIcon className="w-4 h-4" />
                Ver sitio en producción
              </a>
            </div>

            {/* Stats del proyecto */}
            <div className="bg-brand-bgPrimary border border-brand-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <p className="text-4xl">🌙</p>
                <div>
                  <p className="font-sans font-semibold text-brand-textPrimary">La Luna</p>
                  <p className="font-sans text-brand-textSecondary text-xs">Mayorista · Maciel, Santa Fe</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Módulos admin', value: '6' },
                  { label: 'Endpoints API', value: '27' },
                  { label: 'Tablas en DB', value: '7' },
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
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Sitio público</p>
              <div className="relative aspect-video rounded-xl overflow-hidden border border-brand-border">
                <Image
                  src="/images/projects/laluna-preview.jpg"
                  alt="La Luna — Sitio web institucional"
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
                  src="/images/projects/laluna-admin.jpg"
                  alt="La Luna — Backoffice administrativo"
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
              La Luna es el mayorista de frutas y verduras más importante de Maciel, Santa Fe.
              Más de 15 años de trayectoria, múltiples sucursales, decenas de clientes mayoristas —
              y toda la operación gestionada por teléfono, WhatsApp y anotaciones en papel.
            </p>
            <p>
              Sin presencia online, sin historial de pedidos, sin trazabilidad de pagos, sin control
              de stock por sucursal. Cada pedido era una conversación de WhatsApp manual sin registro.
              Cada mes, horas perdidas en la misma tarea.
            </p>
            <p className="text-brand-textPrimary font-medium">
              El objetivo era claro: presencia digital que los posicione, y un sistema que les
              ahorre tiempo real todos los días.
            </p>
          </div>
        </div>
      </section>

      {/* ── LO QUE CONSTRUÍ ───────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-y border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14">
            <span className="badge">Qué construí</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
              Dos aplicaciones integradas
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            <div className="bg-brand-bgPrimary border border-brand-border rounded-xl p-6">
              <span className="badge mb-3 inline-block">Sitio web</span>
              <h3 className="font-playfair text-xl font-bold text-brand-textPrimary mb-3">Web Institucional</h3>
              <ul className="space-y-2 font-sans text-brand-textSecondary text-sm leading-relaxed">
                {[
                  'Home con carrusel, valores de la empresa y sección mayorista',
                  'Página de sucursales: ubicación, horarios, contacto',
                  'Página mayorista con formulario de cotización',
                  'SEO local: meta tags, Open Graph, canonical',
                  'Responsive mobile-first',
                  'Carga rápida con React + Vite + code splitting',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-gold mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-brand-bgPrimary border border-brand-border rounded-xl p-6">
              <span className="badge mb-3 inline-block">Sistema admin</span>
              <h3 className="font-playfair text-xl font-bold text-brand-textPrimary mb-3">Backoffice Administrativo</h3>
              <ul className="space-y-2 font-sans text-brand-textSecondary text-sm leading-relaxed">
                {[
                  'Autenticación JWT con roles (Admin / Vendedor)',
                  'Gestión de pedidos con integración WhatsApp automática',
                  'Control de pagos: precio total vs. monto abonado',
                  'CRUD de clientes con historial y estadísticas por cliente',
                  'Stock por sucursal con historial de cambios auditado',
                  'Dashboard con gráficos de ventas y top clientes',
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="text-brand-gold mt-0.5 flex-shrink-0">→</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-playfair text-2xl font-bold text-brand-textPrimary mb-6">Módulos del backoffice</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {backofficeModulos.map((m) => (
                <div key={m.titulo} className="bg-brand-bgPrimary border border-brand-border rounded-xl p-5">
                  <p className="font-mono-brand text-brand-gold text-xs mb-2">{m.ruta}</p>
                  <h4 className="font-sans font-semibold text-brand-textPrimary mb-2">{m.titulo}</h4>
                  <p className="font-sans text-brand-textSecondary text-sm leading-relaxed">{m.desc}</p>
                </div>
              ))}
            </div>
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
              Decisiones que importan
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <FeatureCard
              icon="📱"
              titulo="WhatsApp integrado"
              desc="Genera links wa.me con mensaje pre-formateado para cada pedido: cliente, descripción, precio formateado y dirección. Normaliza el número automáticamente desde cualquier formato."
            />
            <FeatureCard
              icon="📊"
              titulo="Auditoría de stock"
              desc="Tabla historial que registra cada ajuste: usuario responsable, sucursal, cantidad anterior/nueva y timestamp. Trazabilidad completa sin pérdida de información."
            />
            <FeatureCard
              icon="⚡"
              titulo="Reportes en DB"
              desc="Estadísticas calculadas con JOIN + GROUP BY en PostgreSQL. Queries de reporte por debajo de 500ms incluso con miles de pedidos, sin traer datos a memoria."
            />
            <FeatureCard
              icon="🔒"
              titulo="Soft delete + constraints"
              desc="Clientes eliminados marcados como inactivos sin perder historial ni foreign keys. Check constraint en DB garantiza precioAbonado ≤ precio."
            />
            <FeatureCard
              icon="🗄️"
              titulo="Migraciones versionadas"
              desc="Schema de DB con TypeORM migrations. Control de versión, reproducibilidad en cualquier entorno, rollback posible. Los cambios al schema son código."
            />
            <FeatureCard
              icon="📄"
              titulo="API documentada"
              desc="27 endpoints REST documentados con Swagger disponible en /api/docs. Organizado en módulos por entidad. Facilita integraciones futuras."
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

      {/* ── BACK / CTA ────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-t border-brand-border py-12">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/desarrollador"
            className="inline-flex items-center gap-1.5 text-brand-textSecondary font-sans text-sm hover:text-brand-textPrimary transition-colors duration-150"
          >
            ← Ver todos los proyectos
          </Link>
          <a
            href="https://laluna123.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-bgPrimary font-sans font-semibold text-sm py-3 px-6 rounded-md hover:bg-brand-goldDark transition-colors duration-200"
          >
            <ExternalLinkIcon className="w-4 h-4" />
            Ver el sitio en producción
          </a>
        </div>
      </section>
    </>
  )
}
