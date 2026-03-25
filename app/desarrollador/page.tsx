import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { WhatsappIcon, ArrowRightIcon, GithubIcon, ExternalLinkIcon } from '@/components/icons'
import { WA_DESARROLLO } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Desarrollador Web en Santa Fe | Páginas y Sistemas a Medida',
  description:
    'Desarrollo de páginas web y sistemas de gestión para negocios en Santa Fe y Argentina. Next.js, NestJS, PostgreSQL. Proyectos reales funcionando.',
  keywords: [
    'desarrollador web Santa Fe',
    'páginas web para empresas Santa Fe',
    'sistema de gestión a medida Argentina',
    'desarrollo web freelance Santa Fe',
  ],
  alternates: { canonical: '/desarrollador' },
}

function GoldDivider({ centered = false }: { centered?: boolean }) {
  return <span className={`block w-14 h-0.5 bg-brand-gold mt-3 ${centered ? 'mx-auto' : ''}`} />
}

type Proyecto = {
  href: string
  titulo: string
  subtitulo: string
  descripcion: string
  stack: string[]
  tipo: string
  imagen?: string
  linkSitio: string | null
  linkCodigo: string | null
  externo?: boolean
  enDesarrollo?: boolean
}

const sistemas: Proyecto[] = [
  {
    href: '/desarrollador/eleven',
    titulo: 'Eleven Ascensores',
    subtitulo: 'Plataforma SaaS · Mantenimiento de ascensores — Santa Fe',
    descripcion:
      'Plataforma completa: landing page SEO, sistema administrativo con dashboard y facturación electrónica ARCA automática, y portal QR móvil para técnicos en campo.',
    stack: ['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'ARCA', 'Firebase'],
    tipo: 'SaaS · Web + Admin + QR',
    imagen: '/images/projects/eleven-preview.jpg',
    linkSitio: null,
    linkCodigo: null,
  },
  {
    href: '/desarrollador/laluna',
    titulo: 'La Luna',
    subtitulo: 'Mayorista de frutas y verduras — Maciel, Santa Fe',
    descripcion:
      'Web institucional para posicionamiento local + backoffice administrativo completo: pedidos con integración WhatsApp, clientes con historial, stock por sucursal y dashboard de estadísticas.',
    stack: ['React', 'Vite', 'NestJS', 'TypeScript', 'PostgreSQL'],
    tipo: 'Web + Sistema admin',
    imagen: '/images/projects/laluna-preview.jpg',
    linkSitio: 'https://laluna123.vercel.app/',
    linkCodigo: null,
  },
  {
    href: '/desarrollador/liftmanager',
    titulo: 'LiftManager',
    subtitulo: 'SaaS B2B · Mantenimiento de ascensores — Argentina',
    descripcion:
      'Plataforma SaaS vertical para empresas de ascensores: panel admin, portal QR para técnicos, portal de autoservicio para consorcios, reporte de fallas y facturación electrónica AFIP automática.',
    stack: ['NestJS', 'React', 'PostgreSQL', 'TypeScript', 'AFIP/ARCA'],
    tipo: 'SaaS B2B · Vertical',
    linkSitio: 'https://www.liftmanager.app/',
    linkCodigo: null,
    enDesarrollo: true,
  },
]

const sitios: Proyecto[] = [
  {
    href: '/desarrollador/tr1bu',
    titulo: 'TR1BU',
    subtitulo: 'Portfolio web · DJ de techno — Copenhagen, Dinamarca',
    descripcion:
      'Sitio web bilingüe (inglés/español) con identidad visual dark/minimalista para artista de techno. SEO con schema MusicGroup, Cloudinary CDN y embeds de Spotify, YouTube y SoundCloud.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Cloudinary'],
    tipo: 'Portfolio web · Artista',
    linkSitio: 'https://tr1bu.com',
    linkCodigo: 'https://github.com/SanTaClouse/tr1bu',
  },
  {
    href: '/desarrollador/immaculate',
    titulo: 'Immaculate Pro Painting',
    subtitulo: 'Landing page premium · Seattle, WA',
    descripcion:
      'Landing page luxury dark para empresa de pintura residencial y comercial. Before/after sliders interactivos, scroll reveal con IntersectionObserver y cero dependencias de build.',
    stack: ['HTML5', 'CSS3', 'JavaScript vanilla', 'Zero deps'],
    tipo: 'Landing page · Conversión',
    linkSitio: 'https://project-eiq6t.vercel.app/',
    linkCodigo: null,
  },
  {
    href: '/desarrollador/quintal',
    titulo: 'Quintal',
    subtitulo: 'Catálogo con carrito · Buenos Aires, Argentina',
    descripcion:
      'Catálogo interactivo de frutos secos con selector de gramaje y precio dinámico. El pedido se genera automáticamente como mensaje de WhatsApp estructurado. Sin backend, sin registro.',
    stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
    tipo: 'Catálogo · SPA con carrito',
    linkSitio: 'https://quintal-demo-spa.vercel.app/',
    linkCodigo: null,
  },
  {
    href: 'https://github.com/SanTaClouse/HRTF-Studio',
    titulo: 'HRTF Studio',
    subtitulo: 'Aplicación de audio espacial 3D',
    descripcion:
      'Desarrollada para la tesis de Licenciatura. Convierte audio mono en audio binaural espacializado usando filtros HRTF de la base de datos KEMAR.',
    stack: ['Python', 'SciPy', 'NumPy', 'Tkinter'],
    tipo: 'Aplicación desktop',
    imagen: '/images/projects/hrtf-preview.jpg',
    linkSitio: null,
    linkCodigo: 'https://github.com/SanTaClouse/HRTF-Studio',
    externo: true,
  },
]

export default function DesarrolladorPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgDeep border-b border-brand-border pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden relative">
        {/* Decoración: snippet de código en background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none" aria-hidden>
          <pre className="absolute top-8 right-0 font-mono-brand text-[11px] text-brand-gold/[0.07] leading-relaxed pr-8 text-right whitespace-pre">
{`const santiago = {
  stack: ['Next.js', 'NestJS', 'TypeScript'],
  db: 'PostgreSQL',
  deploy: ['Vercel', 'Render', 'Railway'],
  foco: 'sistemas que ahorran tiempo real',
}

async function construir(proyecto) {
  await entenderElNegocio(proyecto)
  await diseñarArquitectura()
  await desarrollar()
  await deployEnProduccion()
}`}
          </pre>
        </div>

        <div className="relative z-10 w-full max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <span className="badge mb-5 inline-block">Desarrollador</span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-brand-textPrimary leading-tight mb-3 max-w-3xl">
            También desarrollo páginas web.{' '}
            <span className="text-brand-gold">Y no, no es casualidad.</span>
          </h1>
          <GoldDivider />
          <p className="font-sans font-light text-lg text-brand-textSecondary mt-5 max-w-xl mb-8">
            Sistemas de gestión, páginas institucionales y portfolios para negocios reales.
          </p>

          {/* Stack pills */}
          <div className="flex flex-wrap gap-2">
            {['Next.js', 'NestJS', 'TypeScript', 'PostgreSQL', 'React', 'Tailwind CSS'].map((t) => (
              <span key={t} className="font-mono-brand text-xs text-brand-textSecondary border border-brand-border px-3 py-1.5 rounded-full">
                {t}
              </span>
            ))}
            <Link
              href="/desarrollador/portfolio"
              className="font-mono-brand text-xs text-brand-gold border border-brand-gold px-3 py-1.5 rounded-full hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
            >
              + ver portfolio técnico →
            </Link>
          </div>
        </div>
      </section>

      {/* ── HISTORIA ──────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-3xl">
            <div className="mb-8">
              <span className="badge">La historia</span>
              <GoldDivider />
            </div>
            <div className="space-y-4 font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">
              <p>
                Siempre me fascinó crear cosas. No solo imaginarlas — plasmarlas. Ver algo que no
                existía y hacerlo existir.
              </p>
              <p>
                Eso me llevó a la música. Y también, en paralelo, a la programación.
              </p>
              <p>
                En la facultad aprendí Python en Informática y algo hizo click. Me gustó tanto que
                cuando llegó el momento de hacer mi tesis de Licenciatura en Sonorización y
                Grabación — sobre Dolby Atmos — decidí construir algo desde cero:{' '}
                <a href="https://github.com/SanTaClouse/HRTF-Studio" target="_blank" rel="noopener noreferrer" className="text-brand-gold hover:underline">
                  HRTF Studio
                </a>
                , una aplicación que convierte audio mono en audio 3D espacializado.
              </p>
              <p>
                El resultado fue tan completo que mi tutor me dijo que no la incluyera en la tesis.
                Que daba para una tesis aparte.
              </p>
              <p>
                En 2025 decidí aprovechar ese impulso y especializarme en desarrollo web. Hice un
                curso intensivo, aprendí las herramientas del ecosistema moderno, y en lugar de
                quedarme practicando con proyectos de mentira,{' '}
                <span className="text-brand-textPrimary font-medium">
                  salí a resolver problemas reales para negocios reales.
                </span>
              </p>
              <p>
                Lo que más me motiva es construir sistemas administrativos a medida para empresas
                — ese punto donde la tecnología se cruza con un modelo de negocio concreto y le
                cambia el día a día a alguien real. Ahorro de tiempo, menos errores, más control.
                Eso es lo que me mueve.
              </p>
              <p className="text-brand-gold font-medium">
                Y sí — esta página la hice yo mismo.
              </p>
            </div>
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
              Lo que construí
            </h2>
          </div>

          <div className="flex flex-col gap-8">
            {proyectos.map((p) => {
              const Wrapper = p.externo ? 'a' : Link
              const wrapperProps = p.externo
                ? { href: p.href, target: '_blank', rel: 'noopener noreferrer' }
                : { href: p.href }

              return (
                <Wrapper
                  key={p.titulo}
                  {...(wrapperProps as { href: string })}
                  className="group grid grid-cols-1 md:grid-cols-5 overflow-hidden rounded-xl border border-brand-border bg-brand-bgPrimary hover:border-brand-gold transition-all duration-250 hover:-translate-y-0.5 shadow-gold"
                >
                  {/* Imagen */}
                  <div className="md:col-span-2 relative aspect-[4/3] md:aspect-auto overflow-hidden">
                    <Image
                      src={p.imagen}
                      alt={p.titulo}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 40vw"
                    />
                    <div className="absolute inset-0 bg-brand-bgDeep/20" />
                  </div>

                  {/* Contenido */}
                  <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-between">
                    <div>
                      <span className="badge mb-3 inline-block">{p.tipo}</span>
                      <h3 className="font-playfair text-2xl font-bold text-brand-textPrimary mb-1">
                        {p.titulo}
                      </h3>
                      <p className="font-sans text-brand-gold text-sm mb-4">{p.subtitulo}</p>
                      <p className="font-sans text-brand-textSecondary leading-relaxed mb-5">
                        {p.descripcion}
                      </p>

                      {/* Stack */}
                      <div className="flex flex-wrap gap-2 mb-5">
                        {p.stack.map((tech) => (
                          <span key={tech} className="font-mono-brand text-xs text-brand-textSecondary bg-brand-bgSecondary border border-brand-border px-3 py-1 rounded-full">
                            {tech}
                          </span>
                        ))}
                      </div>
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
                      {!p.linkSitio && !p.linkCodigo && (
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

      {/* ── CIERRE ────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 text-center max-w-2xl mx-auto">
          <h2 className="font-playfair text-3xl font-bold text-brand-textPrimary mb-3">
            ¿Tenés un negocio que necesita presencia online o un sistema a medida?
          </h2>
          <GoldDivider centered />
          <p className="font-sans text-brand-textSecondary mt-6 mb-8 leading-relaxed">
            Hablemos. Entiendo tanto de tecnología como de los problemas reales que tiene un negocio
            porque vengo de afuera del mundo tech — y eso hace la diferencia.
          </p>
          <a
            href={WA_DESARROLLO}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-brand-gold text-brand-bgPrimary font-sans font-semibold py-3.5 px-7 rounded-md hover:bg-brand-goldDark transition-colors duration-200"
          >
            <WhatsappIcon className="w-5 h-5" />
            Escribime por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
