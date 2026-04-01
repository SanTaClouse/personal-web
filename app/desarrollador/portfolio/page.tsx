import type { Metadata } from 'next'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, ArrowRightIcon } from '@/components/icons'
import GoldDivider from '@/components/GoldDivider'

export const metadata: Metadata = {
  title: 'Portfolio Técnico — Stack, Proyectos y CV | Santiago Samuel',
  description:
    'Stack técnico completo, proyectos en producción y currículum de Santiago Samuel. Next.js, NestJS, TypeScript, PostgreSQL. Desarrollador web full-stack en Santa Fe, Argentina.',
  alternates: { canonical: '/desarrollador/portfolio' },
  openGraph: {
    title: 'Portfolio Técnico | Santiago Samuel',
    description: 'Stack completo, proyectos en producción y CV. Next.js, NestJS, TypeScript, PostgreSQL.',
    images: [{ url: '/images/hero/hero-desarrollador.jpg', width: 1200, height: 630 }],
  },
}

// ─── Stack tecnológico ─────────────────────────────────────────────────────────

const stackCats = [
  {
    categoria: 'Frontend',
    icon: '🖥️',
    items: [
      { nombre: 'Next.js', nivel: 'principal', desc: 'App Router, Server Components, SSG/SSR' },
      { nombre: 'React', nivel: 'principal', desc: 'Hooks, Context API, composición de componentes' },
      { nombre: 'TypeScript', nivel: 'principal', desc: 'Tipado estático en todo el stack' },
      { nombre: 'Tailwind CSS', nivel: 'principal', desc: 'v3 y v4, design systems, responsive' },
      { nombre: 'TanStack Query', nivel: 'avanzado', desc: 'Data fetching, cache, mutaciones' },
      { nombre: 'React Hook Form + Zod', nivel: 'avanzado', desc: 'Formularios y validación de esquemas' },
      { nombre: 'Framer Motion', nivel: 'intermedio', desc: 'Animaciones y transiciones' },
      { nombre: 'shadcn/ui', nivel: 'avanzado', desc: 'Componentes accesibles con Radix UI' },
    ],
  },
  {
    categoria: 'Backend',
    icon: '⚙️',
    items: [
      { nombre: 'NestJS', nivel: 'principal', desc: 'Arquitectura modular, guards, interceptors' },
      { nombre: 'TypeORM', nivel: 'principal', desc: 'Migraciones, entities, relaciones, queries' },
      { nombre: 'PostgreSQL', nivel: 'principal', desc: 'Índices, constraints, queries complejas' },
      { nombre: 'JWT + Passport', nivel: 'principal', desc: 'Auth stateless, roles, refresh tokens' },
      { nombre: 'REST API', nivel: 'principal', desc: 'Diseño RESTful, Swagger/OpenAPI, DTOs' },
      { nombre: 'bcrypt', nivel: 'avanzado', desc: 'Hashing de contraseñas, seguridad' },
      { nombre: 'SOAP + PKI', nivel: 'avanzado', desc: 'Integración ARCA, certificados X.509' },
      { nombre: 'Firebase Admin', nivel: 'intermedio', desc: 'Storage, custom tokens' },
    ],
  },
  {
    categoria: 'Herramientas',
    icon: '🔧',
    items: [
      { nombre: 'Git + GitHub', nivel: 'principal', desc: 'Ramas, PRs, flujo de trabajo colaborativo' },
      { nombre: 'Docker', nivel: 'intermedio', desc: 'Containerización de backend para deploy' },
      { nombre: 'Vercel', nivel: 'principal', desc: 'Deploy Next.js, CI/CD automático' },
      { nombre: 'Render', nivel: 'avanzado', desc: 'Deploy de APIs NestJS, auto-migrations' },
      { nombre: 'Railway', nivel: 'avanzado', desc: 'PostgreSQL managed en producción' },
      { nombre: 'Cloudinary', nivel: 'intermedio', desc: 'Storage y transformación de imágenes' },
      { nombre: 'ESLint + Prettier', nivel: 'avanzado', desc: 'Calidad y consistencia de código' },
      { nombre: 'VS Code', nivel: 'principal', desc: 'Editor principal con extensiones clave' },
    ],
  },
]

const nivelColor: Record<string, string> = {
  principal: 'text-brand-gold border-brand-gold',
  avanzado: 'text-brand-textPrimary border-brand-border',
  intermedio: 'text-brand-textSecondary border-brand-border',
}

// ─── Proyectos ─────────────────────────────────────────────────────────────────

type Proyecto = {
  href: string
  titulo: string
  tipo: string
  subtitulo: string
  descripcion: string
  stack: string[]
  destacado: string[]
  linkSitio: string | null
  linkCodigo: string | null
  badge: string | null
  externo?: boolean
  enDesarrollo?: boolean
}

const sistemas: Proyecto[] = [
  {
    href: '/desarrollador/eleven',
    titulo: 'Eleven Ascensores',
    tipo: 'SaaS B2B · Full stack',
    subtitulo: 'Empresa de mantenimiento de ascensores — Santa Fe',
    descripcion: 'Plataforma completa: landing page SEO, sistema administrativo con KPIs, portal QR para técnicos en campo, y facturación electrónica automática ante ARCA (ex-AFIP) con protocolo SOAP + PKI.',
    stack: ['Next.js 16', 'NestJS 11', 'PostgreSQL', 'TypeScript', 'ARCA/AFIP', 'Firebase', 'Docker'],
    destacado: ['Facturación electrónica ARCA con CAE', 'Portal QR sin app nativa', 'Generación masiva de órdenes'],
    linkSitio: null,
    linkCodigo: null,
    badge: '⭐ Más complejo',
  },
  {
    href: '/desarrollador/laluna',
    titulo: 'La Luna',
    tipo: 'Web institucional + Backoffice',
    subtitulo: 'Mayorista de frutas y verduras — Maciel, Santa Fe',
    descripcion: 'Sitio web institucional con SEO local + sistema de backoffice para gestión de pedidos con integración WhatsApp automática, control de pagos, stock por sucursal con auditoría e historial, y dashboard de estadísticas.',
    stack: ['React 18', 'Vite', 'NestJS 11', 'PostgreSQL', 'TypeScript', 'JWT', 'Recharts'],
    destacado: ['Generación automática de links WhatsApp', 'Auditoría de stock por sucursal', 'Dashboard con gráficos de ventas'],
    linkSitio: 'https://laluna123.vercel.app/',
    linkCodigo: null,
    badge: null,
  },
  {
    href: '/desarrollador/liftmanager',
    titulo: 'LiftManager',
    tipo: 'SaaS B2B · Vertical',
    subtitulo: 'Plataforma de mantenimiento de ascensores — Argentina',
    descripcion: 'SaaS vertical para empresas de ascensores: panel admin, portal QR para técnicos, portal de autoservicio para consorcios, reporte de fallas públicas y facturación electrónica AFIP automática.',
    stack: ['NestJS', 'React', 'PostgreSQL', 'TypeScript', 'AFIP/ARCA', 'Multi-tenant'],
    destacado: ['QR dual-contexto: técnico y vecino', 'Notificaciones post-visita auditables', 'Modelo multi-tenant nativo'],
    linkSitio: 'https://www.liftmanager.app/',
    linkCodigo: null,
    badge: null,
    enDesarrollo: true,
  },
]

const sitios: Proyecto[] = [
  {
    href: '/desarrollador/tr1bu',
    titulo: 'TR1BU',
    tipo: 'Portfolio web · Artista',
    subtitulo: 'DJ de techno — Copenhagen, Dinamarca',
    descripcion: 'Sitio web bilingüe (inglés/español) con identidad visual dark/minimalista para artista de techno. SEO con schema MusicGroup, routing dinámico por idioma, Cloudinary y embeds de Spotify, YouTube y SoundCloud.',
    stack: ['Next.js 14', 'React 18', 'TypeScript', 'Tailwind CSS', 'Cloudinary'],
    destacado: ['Routing bilingüe sin i18n externo', 'Schema MusicGroup para SEO', 'Cloudinary CDN con Next.js Image'],
    linkSitio: 'https://tr1bu.com',
    linkCodigo: 'https://github.com/SanTaClouse/tr1bu',
    badge: null,
    externo: false,
  },
  {
    href: '/desarrollador/immaculate',
    titulo: 'Immaculate Pro Painting',
    tipo: 'Landing page · Conversión',
    subtitulo: 'Empresa de pintura premium — Seattle, WA',
    descripcion: 'Landing page luxury dark para empresa de pintura residencial y comercial premium. Before/after sliders interactivos, scroll reveal con IntersectionObserver, floating CTAs y cero dependencias.',
    stack: ['HTML5', 'CSS3', 'JavaScript vanilla', 'Zero deps'],
    destacado: ['Before/After sliders con clip-path', 'Identidad luxury dark', 'Archivo único sin build tools'],
    linkSitio: 'https://project-eiq6t.vercel.app/',
    linkCodigo: null,
    badge: null,
  },
  {
    href: '/desarrollador/quintal',
    titulo: 'Quintal',
    tipo: 'Catálogo · SPA con carrito',
    subtitulo: 'Distribuidor de frutos secos premium — Buenos Aires',
    descripcion: 'Catálogo interactivo con selector de gramaje y precio dinámico. El pedido se genera automáticamente como mensaje de WhatsApp estructurado. React SPA sin backend ni registro requerido.',
    stack: ['React 19', 'Vite', 'TypeScript', 'Tailwind CSS', 'WhatsApp API'],
    destacado: ['WhatsApp como canal de checkout', 'Precio calculado por gramaje', 'Filtrado memoizado por categoría'],
    linkSitio: 'https://quintal-demo-spa.vercel.app/',
    linkCodigo: null,
    badge: null,
  },
  {
    href: 'https://github.com/SanTaClouse/HRTF-Studio',
    titulo: 'HRTF Studio',
    tipo: 'Aplicación desktop',
    subtitulo: 'Tesis de Licenciatura en Sonorización y Grabación — UNL',
    descripcion: 'Aplicación que convierte audio mono en audio binaural espacializado 3D usando filtros HRTF de la base de datos KEMAR. Desarrollada para la tesis de Licenciatura. El tutor la consideró material para una tesis aparte.',
    stack: ['Python', 'SciPy', 'NumPy', 'Tkinter'],
    destacado: ['Procesamiento DSP con filtros HRTF', 'Interfaz gráfica desktop', 'Audio binaural en tiempo real'],
    linkSitio: null,
    linkCodigo: 'https://github.com/SanTaClouse/HRTF-Studio',
    badge: null,
    externo: true,
  },
]

// ─── ProyectoCard ──────────────────────────────────────────────────────────────

function ProyectoCard({ p }: { p: Proyecto }) {
  const isExternal = !!p.externo
  const Wrapper = isExternal ? 'a' : Link
  const wrapperProps = isExternal
    ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
    : { href: p.href }

  return (
    <Wrapper
      {...(wrapperProps as { href: string })}
      className={`group rounded-xl border bg-brand-bgPrimary transition-all duration-250 hover:-translate-y-0.5 ${
        p.badge ? 'border-brand-gold shadow-gold-lg' : 'border-brand-border hover:border-brand-gold shadow-gold'
      }`}
    >
      <div className="p-6 md:p-8">
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <span className="badge">{p.tipo}</span>
          {p.badge && <span className="badge">{p.badge}</span>}
          {p.enDesarrollo && (
            <span className="font-mono-brand text-xs text-brand-gold border border-brand-gold/40 bg-brand-gold/10 px-2 py-0.5 rounded-full">
              ⚡ En desarrollo
            </span>
          )}
        </div>

        <h3 className="font-playfair text-2xl font-bold text-brand-textPrimary mb-1">{p.titulo}</h3>
        <p className="font-sans text-brand-gold text-sm mb-4">{p.subtitulo}</p>
        <p className="font-sans text-brand-textSecondary leading-relaxed mb-5">{p.descripcion}</p>

        <div className="flex flex-wrap gap-2 mb-5">
          {p.destacado.map((d) => (
            <span key={d} className="font-sans text-xs text-brand-textSecondary bg-brand-bgSecondary border border-brand-border px-3 py-1 rounded-full">
              ✓ {d}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 mb-5">
          {p.stack.map((tech) => (
            <span key={tech} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgSecondary border border-brand-border px-3 py-1 rounded-full">
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-wrap gap-3">
          {p.linkSitio && (
            <span className="inline-flex items-center gap-1.5 text-sm text-brand-gold font-sans font-semibold">
              <ExternalLinkIcon className="w-4 h-4" />
              Ver sitio
            </span>
          )}
          {p.linkCodigo && (
            <span className="inline-flex items-center gap-1.5 text-sm text-brand-textSecondary font-sans font-semibold">
              <GithubIcon className="w-4 h-4" />
              Ver código
            </span>
          )}
          {!isExternal && (
            <span className="inline-flex items-center gap-1.5 text-brand-gold font-sans font-semibold text-sm group-hover:gap-3 transition-all duration-200">
              Ver case study <ArrowRightIcon className="w-4 h-4" />
            </span>
          )}
        </div>
      </div>
    </Wrapper>
  )
}

export default function PortfolioPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgDeep border-b border-brand-border pt-28 pb-14 md:pt-36 md:pb-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <Link
            href="/desarrollador"
            className="inline-flex items-center gap-1.5 text-brand-textSecondary text-sm font-sans mb-6 hover:text-brand-textPrimary transition-colors duration-150"
          >
            ← Desarrollador
          </Link>

          <span className="badge mb-5 inline-block">Desarrollador · Portfolio técnico</span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-brand-textPrimary leading-tight mb-3 max-w-2xl">
            Stack, proyectos y CV.
          </h1>
          <GoldDivider />
          <p className="font-sans font-light text-lg text-brand-textSecondary mt-5 max-w-lg">
            Todo lo técnico en un lugar. Full-stack con foco en sistemas que resuelven
            problemas reales para negocios reales.
          </p>

          {/* CV download */}
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="/cv-santiago-samuel.pdf"
              download
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-bgPrimary font-sans font-semibold text-sm py-3 px-6 rounded-md hover:bg-brand-goldDark transition-colors duration-200"
            >
              ↓ Descargar CV
            </a>
            <a
              href="https://github.com/SanTaClouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-border text-brand-textSecondary font-sans font-semibold text-sm py-3 px-6 rounded-md hover:border-brand-gold hover:text-brand-textPrimary transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/santriv06/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-brand-border text-brand-textSecondary font-sans font-semibold text-sm py-3 px-6 rounded-md hover:border-brand-gold hover:text-brand-textPrimary transition-all duration-200"
            >
              <LinkedinIcon className="w-4 h-4" />
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* ── PROYECTOS ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-y border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">

          {/* Sistemas y plataformas */}
          <div className="mb-16">
            <div className="mb-10">
              <span className="badge">Sistemas y plataformas</span>
              <GoldDivider />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
                Full-stack · Backend · Base de datos
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {sistemas.map((p) => <ProyectoCard key={p.titulo} p={p} />)}
            </div>
          </div>

          {/* Sitios web y landing pages */}
          <div>
            <div className="mb-10">
              <span className="badge">Sitios web y landing pages</span>
              <GoldDivider />
              <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
                Frontend · Diseño · Conversión
              </h2>
            </div>
            <div className="flex flex-col gap-6">
              {sitios.map((p) => <ProyectoCard key={p.titulo} p={p} />)}
            </div>
          </div>

        </div>
      </section>

      {/* ── STACK TÉCNICO ─────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14">
            <span className="badge">Stack</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
              Tecnologías que uso
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {stackCats.map((cat) => (
              <div key={cat.categoria}>
                <div className="flex items-center gap-2 mb-5">
                  <span className="text-2xl">{cat.icon}</span>
                  <h3 className="font-playfair text-xl font-bold text-brand-textPrimary">{cat.categoria}</h3>
                </div>
                <div className="flex flex-col gap-3">
                  {cat.items.map((item) => (
                    <div
                      key={item.nombre}
                      className="flex items-start justify-between gap-3 border-b border-brand-border pb-3 last:border-0 last:pb-0"
                    >
                      <div>
                        <p className="font-sans font-semibold text-brand-textPrimary text-sm">{item.nombre}</p>
                        <p className="font-sans text-brand-textSecondary text-xs mt-0.5">{item.desc}</p>
                      </div>
                      <span className={`font-mono-brand text-xs border px-2 py-0.5 rounded-full flex-shrink-0 mt-0.5 ${nivelColor[item.nivel]}`}>
                        {item.nivel}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ENFOQUE ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-t border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-8">
            <span className="badge">Enfoque</span>
            <GoldDivider />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              { emoji: '🏗️', titulo: 'Arquitectura limpia', desc: 'Módulos independientes, responsabilidades separadas, código que se puede mantener.' },
              { emoji: '🚀', titulo: 'Producción primero', desc: 'Todos mis proyectos están en producción. No practico con proyectos inventados.' },
              { emoji: '🔗', titulo: 'Integraciones reales', desc: 'ARCA, WhatsApp API, Firebase, PostgreSQL managed. Sistemas que se conectan con el mundo real.' },
            ].map((item) => (
              <div key={item.titulo} className="bg-brand-bgPrimary border border-brand-border rounded-xl p-5">
                <p className="text-3xl mb-3">{item.emoji}</p>
                <h3 className="font-sans font-semibold text-brand-textPrimary mb-1">{item.titulo}</h3>
                <p className="font-sans text-brand-textSecondary text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary border-t border-brand-border py-16 md:py-20">
        <div className="max-w-2xl mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h2 className="font-playfair text-3xl font-bold text-brand-textPrimary mb-3">
            ¿Tenés un proyecto en mente?
          </h2>
          <GoldDivider centered />
          <p className="font-sans text-brand-textSecondary mt-6 mb-8 leading-relaxed">
            Estoy disponible para proyectos freelance. Puedo construir desde una página institucional
            hasta un sistema de gestión completo con integraciones.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href="/cv-santiago-samuel.pdf"
              download
              className="inline-flex items-center justify-center gap-2 bg-brand-gold text-brand-bgPrimary font-sans font-semibold text-sm py-3.5 px-7 rounded-md hover:bg-brand-goldDark transition-colors duration-200"
            >
              ↓ Descargar CV
            </a>
            <a
              href="https://github.com/SanTaClouse"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand-border text-brand-textSecondary font-sans font-semibold text-sm py-3.5 px-7 rounded-md hover:border-brand-gold hover:text-brand-textPrimary transition-all duration-200"
            >
              <GithubIcon className="w-4 h-4" />
              Ver GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
