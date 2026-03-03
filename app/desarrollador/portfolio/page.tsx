import type { Metadata } from 'next'
import Link from 'next/link'
import { GithubIcon, LinkedinIcon, ExternalLinkIcon, ArrowRightIcon } from '@/components/icons'

export const metadata: Metadata = {
  title: 'Portfolio Técnico — Stack, Proyectos y CV | Santiago Samuel',
  description:
    'Stack técnico completo, proyectos en producción y currículum de Santiago Samuel. Next.js, NestJS, TypeScript, PostgreSQL. Desarrollador web full-stack en Santa Fe, Argentina.',
  alternates: { canonical: '/desarrollador/portfolio' },
}

function GoldDivider({ centered = false }: { centered?: boolean }) {
  return <span className={`block w-14 h-0.5 bg-brand-gold mt-3 ${centered ? 'mx-auto' : ''}`} />
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

const proyectos = [
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

      {/* ── PROYECTOS ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-y border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14">
            <span className="badge">Proyectos</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
              En producción
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {proyectos.map((p) => {
              const isExternal = p.externo
              const Wrapper = isExternal ? 'a' : Link
              const wrapperProps = isExternal
                ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: p.href }

              return (
                <Wrapper
                  key={p.titulo}
                  {...(wrapperProps as { href: string })}
                  className={`group rounded-xl border bg-brand-bgPrimary transition-all duration-250 hover:-translate-y-0.5 ${
                    p.badge ? 'border-brand-gold shadow-gold-lg' : 'border-brand-border hover:border-brand-gold shadow-gold'
                  }`}
                >
                  <div className="p-6 md:p-8">
                    <div className="flex flex-wrap items-center gap-3 mb-3">
                      <span className="badge">{p.tipo}</span>
                      {p.badge && (
                        <span className="badge">{p.badge}</span>
                      )}
                    </div>

                    <h3 className="font-playfair text-2xl font-bold text-brand-textPrimary mb-1">{p.titulo}</h3>
                    <p className="font-sans text-brand-gold text-sm mb-4">{p.subtitulo}</p>
                    <p className="font-sans text-brand-textSecondary leading-relaxed mb-5">{p.descripcion}</p>

                    {/* Highlights */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.destacado.map((d) => (
                        <span key={d} className="font-sans text-xs text-brand-textSecondary bg-brand-bgSecondary border border-brand-border px-3 py-1 rounded-full">
                          ✓ {d}
                        </span>
                      ))}
                    </div>

                    {/* Stack */}
                    <div className="flex flex-wrap gap-2 mb-5">
                      {p.stack.map((tech) => (
                        <span key={tech} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgSecondary border border-brand-border px-3 py-1 rounded-full">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Links */}
                    <div className="flex flex-wrap gap-3">
                      {p.linkSitio && (
                        <span className="inline-flex items-center gap-1.5 text-sm text-brand-gold font-sans font-semibold">
                          <ExternalLinkIcon className="w-4 h-4" />
                          Ver sitio
                        </span>
                      )}
                      {p.linkCodigo && (
                        <span className="inline-flex items-center gap-1.5 text-sm text-brand-textSecondary font-sans font-semibold hover:text-brand-textPrimary transition-colors">
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
            })}
          </div>
        </div>
      </section>

      {/* ── SOBRE MI ENFOQUE ──────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-8">
              <span className="badge">Enfoque</span>
              <GoldDivider />
            </div>
            <div className="space-y-4 font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">
              <p>
                Vengo de la música — doce años trabajando en producción, grabación y arreglos.
                Eso me enseñó algo que no se aprende en ningún tutorial: a pensar desde el problema
                real antes de hablar de soluciones.
              </p>
              <p>
                Cuando me meto en un proyecto de desarrollo, lo primero que entiendo es el negocio.
                Qué hace el cliente, dónde pierde tiempo, qué le cambiaría el día a día.
                El código viene después.
              </p>
              <p className="text-brand-textPrimary font-medium">
                El resultado es que los sistemas que construyo no son &quot;páginas web&quot; — son herramientas
                que alguien usa todos los días para trabajar mejor.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { emoji: '🏗️', titulo: 'Arquitectura limpia', desc: 'Módulos independientes, responsabilidades separadas, código que se puede mantener.' },
                { emoji: '🚀', titulo: 'Producción primero', desc: 'Todos mis proyectos están en producción. No practico con proyectos inventados.' },
                { emoji: '🔗', titulo: 'Integraciones reales', desc: 'ARCA, WhatsApp API, Firebase, PostgreSQL managed. Sistemas que se conectan con el mundo real.' },
              ].map((item) => (
                <div key={item.titulo} className="bg-brand-bgSecondary border border-brand-border rounded-xl p-5">
                  <p className="text-3xl mb-3">{item.emoji}</p>
                  <h3 className="font-sans font-semibold text-brand-textPrimary mb-1">{item.titulo}</h3>
                  <p className="font-sans text-brand-textSecondary text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ───────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-t border-brand-border py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 text-center max-w-2xl mx-auto">
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
            <Link
              href="/desarrollador"
              className="inline-flex items-center justify-center gap-2 border border-brand-border text-brand-textSecondary font-sans font-semibold text-sm py-3.5 px-7 rounded-md hover:border-brand-gold hover:text-brand-textPrimary transition-all duration-200"
            >
              Ver proyectos
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
