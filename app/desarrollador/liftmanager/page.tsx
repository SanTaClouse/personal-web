import type { Metadata } from 'next'
import Link from 'next/link'
import { ExternalLinkIcon } from '@/components/icons'

import GoldDivider from '@/components/GoldDivider'
import Breadcrumbs from '@/components/Breadcrumbs'

export const metadata: Metadata = {
  title: 'LiftManager — SaaS para Empresas de Ascensores | Santiago Samuel',
  description:
    'Plataforma SaaS B2B vertical para empresas de mantenimiento de ascensores en Argentina. Panel admin, portal QR para técnicos, portal de consorcios, reporte de fallas y facturación electrónica AFIP. En desarrollo.',
  alternates: { canonical: '/desarrollador/liftmanager' },
  openGraph: {
    title: 'LiftManager — Case Study | Santiago Samuel',
    description: 'SaaS B2B vertical para empresas de ascensores. NestJS, React, PostgreSQL.',
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
  { cat: 'Landing', items: ['HTML5', 'CSS3 vanilla', 'JavaScript ES6+', 'Google Fonts (Sora, Inter)', 'Lucide Icons CDN'] },
  { cat: 'Base de datos', items: ['PostgreSQL', 'Entidades: Tenant, Building', 'Equipment, WorkOrder', 'FaultReport, PortalNotification', 'Índices por patrón de acceso'] },
  { cat: 'App (en construcción)', items: ['NestJS (backend)', 'React / Next.js (frontend)', 'TypeORM + PostgreSQL', 'JWT + Passport', 'AFIP/ARCA SOAP + PKI', 'Resend (email transaccional)'] },
]

const apps = [
  {
    badge: 'Landing page',
    titulo: 'Sitio de marketing',
    desc: 'Página de presentación del producto orientada a captación de leads. Explica el problema, funcionalidades y modelo de precios. HTML5/CSS3 vanilla, dark mode, animaciones scroll-reveal con IntersectionObserver.',
    items: [
      'Hero con mockup de órdenes de trabajo',
      'Sección de features en grilla',
      'Sección PLG para consorcios',
      'Formulario de solicitud de demo',
      'Mobile-first y responsive',
    ],
  },
  {
    badge: 'Sistema admin',
    titulo: 'Panel de administración',
    desc: 'Backoffice para el dueño de la empresa. Gestión de edificios, equipos, técnicos y órdenes de trabajo. Cierra el ciclo operativo con facturación electrónica automática.',
    items: [
      'KPIs del mes: órdenes abiertas y completadas',
      'Generación de órdenes por edificio',
      'Workflow de apertura, asignación y cierre',
      'Historial de mantenimiento por equipo',
      'Facturación automática al cerrar orden',
    ],
  },
  {
    badge: 'Portal QR',
    titulo: 'Portal móvil para técnicos',
    desc: 'Sin app nativa. El técnico escanea el QR físico del equipo y accede desde cualquier teléfono. La misma URL funciona diferente según si hay sesión activa.',
    items: [
      'Ver órdenes del día por equipo',
      'Iniciar y completar trabajos desde el campo',
      'Agregar fotos y observaciones',
      'Historial de visitas por equipo',
      'Detección de contexto: técnico vs. vecino',
    ],
  },
  {
    badge: 'Portal consorcio',
    titulo: 'Portal de autoservicio',
    desc: 'Vista de solo lectura para administradoras y encargados de edificio. Accesible por link con token UUID sin contraseña ni cuenta. Revocable si cambia la administración.',
    items: [
      'Historial completo de mantenimiento',
      'Última visita, notas y fotos del técnico',
      'Próximo mantenimiento programado',
      'Sin registro requerido',
      'Token revocable por UUID',
    ],
  },
  {
    badge: 'Fallas públicas',
    titulo: 'Reporte de fallas sin registro',
    desc: 'Cualquier vecino puede reportar una falla escaneando el QR del equipo. Sin cuenta, sin contraseña. El reporte llega al panel como alerta y puede derivarse en una orden correctiva.',
    items: [
      'Descripción e imagen de la falla',
      'Selección de urgencia',
      'Alerta en el panel de administración',
      'Conversión a orden correctiva',
      'Sin fricción para el vecino',
    ],
  },
]

export default function LiftManagerPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-b border-brand-border pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <Breadcrumbs items={[
            { label: 'Inicio', href: '/' },
            { label: 'Desarrollador', href: '/desarrollador' },
            { label: 'LiftManager' },
          ]} />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
            <div>
              <span className="badge mb-5 inline-block">Desarrollador · Case study</span>
              <h1 className="font-playfair text-4xl sm:text-5xl font-bold text-brand-textPrimary leading-tight mb-3">
                LiftManager
              </h1>
              <GoldDivider />
              <p className="font-playfair text-xl text-brand-textSecondary mt-5 mb-2">
                Plataforma SaaS B2B vertical para empresas de mantenimiento de ascensores en Argentina.
              </p>
              <p className="font-sans text-brand-textSecondary text-sm mb-6">
                Panel administrativo, portal QR para técnicos, portal de autoservicio para consorcios, reporte de fallas públicas y facturación electrónica automática con AFIP.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {['SaaS B2B', 'PostgreSQL', 'Multi-tenant', 'AFIP/ARCA', 'QR'].map((t) => (
                  <span key={t} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgPrimary border border-brand-border px-3 py-1 rounded-full">
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-3">
                <a
                  href="https://www.liftmanager.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-sans text-sm text-brand-gold border border-brand-gold px-4 py-2 rounded-md hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
                >
                  <ExternalLinkIcon className="w-4 h-4" />
                  Ver landing page
                </a>
                <span className="inline-flex items-center gap-1.5 font-mono-brand text-xs text-brand-gold border border-brand-gold/40 bg-brand-gold/10 px-3 py-1 rounded-full">
                  ⚡ En desarrollo
                </span>
              </div>
            </div>

            {/* Stats del proyecto */}
            <div className="bg-brand-bgPrimary border border-brand-border rounded-xl p-8">
              <div className="flex items-center gap-3 mb-5">
                <p className="text-4xl">🛗</p>
                <div>
                  <p className="font-sans font-semibold text-brand-textPrimary">LiftManager</p>
                  <p className="font-sans text-brand-textSecondary text-xs">SaaS B2B · Argentina</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { label: 'Módulos', value: '5' },
                  { label: 'Entidades DB', value: '6+' },
                  { label: 'Tipos equipo', value: '5' },
                  { label: 'Estado', value: '⚡ Dev' },
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
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Landing · En producción</p>
              <PlaceholderPreview label="Landing page de marketing — liftmanager.app" />
            </div>
            <div className="space-y-2">
              <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest">Admin · En desarrollo</p>
              <PlaceholderPreview label="Dashboard administrativo — en construcción" />
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
              La mayoría de las empresas de mantenimiento de ascensores en Argentina operan con una combinación de WhatsApp, Excel y memoria. El técnico recibe la orden por mensaje, la anota en papel, y al final del día el dueño intenta reconstruir qué hizo cada uno. No hay registro formal, no hay trazabilidad. Cuando un técnico renuncia, se lleva consigo todo el conocimiento del edificio.
            </p>
            <p>
              La facturación es otro cuello de botella crítico. Cada factura tiene que cargarse manualmente en el portal de AFIP, un proceso repetitivo que puede representar horas de trabajo administrativo mensual. Del lado del edificio, la administradora no tiene forma de saber si la visita del mes se realizó ni qué se hizo.
            </p>
            <p className="text-brand-textPrimary font-medium">
              El mercado no tiene una solución vertical diseñada para este rubro en Argentina. Las herramientas genéricas no contemplan la facturación AFIP, los tipos de equipos del sector, ni el modelo de contratos de mantenimiento mensual. LiftManager existe para cubrir ese vacío.
            </p>
          </div>
        </div>
      </section>

      {/* ── QUÉ CONSTRUÍ ──────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-y border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14">
            <span className="badge">Qué construí</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
              Cinco módulos, un sistema
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

      {/* ── LO QUE LO HACE DIFERENTE ──────────────────────────────────────── */}
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
              icon="📱"
              titulo="Un QR, dos contextos"
              desc="La URL del QR físico detecta si hay sesión de técnico activa: si la hay, muestra órdenes de trabajo; si no, muestra el formulario de reporte de falla. Un solo QR impreso para dos usuarios distintos — sin logística de QR separados."
            />
            <FeatureCard
              icon="🏛️"
              titulo="Facturación AFIP automática"
              desc="Al cerrar una orden de trabajo, el sistema genera y envía la factura electrónica a AFIP/ARCA sin intervención manual. Elimina el flujo de entrar al portal por cada cliente. Integración crítica para el mercado argentino."
            />
            <FeatureCard
              icon="📬"
              titulo="Notificaciones post-visita auditables"
              desc="Cuando se completa una orden, se crea un registro PortalNotification que pasa por una cola de jobs asíncrona. El email al consorcio incluye técnico, tipo de trabajo, fotos y próximo mantenimiento. El sistema registra si el envío fue exitoso o falló."
            />
            <FeatureCard
              icon="🔑"
              titulo="Token opaco sin autenticación para consorcios"
              desc="El portal del consorcio usa un UUID v4 en la URL, sin contraseña ni cookie. Acceso de solo lectura, revocable al instante. La alternativa (JWT con expiración) fue descartada: añade complejidad de refresh sin beneficio para acceso infrecuente."
            />
            <FeatureCard
              icon="🏗️"
              titulo="Multi-tenant desde el día cero"
              desc="Toda entidad del sistema lleva tenant_id (la empresa de ascensores). Los datos de una empresa nunca son visibles para otra. El modelo fue diseñado multi-tenant desde el inicio, no como capa adicional. Permite escalar a múltiples empresas sin refactoring."
            />
            <FeatureCard
              icon="📊"
              titulo="Gestión de precios con historial de cambios"
              desc="El módulo de precios permite ajustar tarifas por tipo de equipo, simular el impacto económico antes de aplicar y mantener un historial de ajustes. Diseñado para la realidad argentina: inflación alta, contratos en pesos que necesitan actualizarse frecuentemente."
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
