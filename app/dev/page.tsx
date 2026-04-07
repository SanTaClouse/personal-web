"use client"

import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { whatsappLink } from "@/lib/whatsapp"

// ── Config ───────────────────────────────────────────────────────────────────

/** Opacidad de los párrafos anteriores una vez que aparece el siguiente (0–1) */
const TELEPROMPTER_DIM_OPACITY = 0.4

// ── Types ────────────────────────────────────────────────────────────────────

type ProjectId = "reportemedico" | "tr1bu" | "liftmanager" | "laluna" | "immaculate" | "eleven" | "quintal"

type Project = {
    title: string
    type: string
    desc: string
    href: string
    live: string | null
}

type Service = {
    id: string
    icon: React.ReactNode
    cta: string
    subtitle: string
    features: string[]
    color: string
    projects: ProjectId[]
    waMessage: string
}

// ── Data ─────────────────────────────────────────────────────────────────────

const PROJECTS: Record<ProjectId, Project> = {
    tr1bu: {
        title: "TR1BU",
        type: "Portfolio Web · Artista",
        desc: "Sitio bilingüe para artista con integración de Spotify, YouTube y SoundCloud",
        href: "/desarrollador/tr1bu",
        live: "https://tr1bu.com",
    },

    reportemedico: {
        title: "Reporte Médico",
        type: "Portal de salud · Full Stack",
        desc: "Plataforma de salud líder en República Dominicana — rediseño completo de WordPress a Next.js 14 + NestJS + CMS propio",
        href: "",
        live: "https://reportemedico.com",
    },


    liftmanager: {
        title: "LiftManager",
        type: "SaaS B2B · Plataforma",
        desc: "Plataforma para empresas que agaliza el flujo de trabajo con QR, autoservicio y facturación ARCA",
        href: "/desarrollador/liftmanager",
        live: "https://www.liftmanager.app/",
    },

    laluna: {
        title: "La Luna",
        type: "Web + Sistema de gestión",
        desc: "Web de visibilidad y validación profesional con sistema interno de pedidos, clientes, stock y estadísticas",
        href: "/desarrollador/laluna",
        live: "https://laluna123.vercel.app/",
    },

    immaculate: {
        title: "Immaculate Pro Painting",
        type: "Landing page · Conversión",
        desc: "Página de alta conversión para empresa de pintura EEUU orientada a captar clientes",
        href: "/desarrollador/immaculate",
        live: "https://project-eiq6t.vercel.app/",
    },

    eleven: {
        title: "Eleven Ascensores",
        type: "SaaS · Web + Admin",
        desc: "Sistema de gestion de ordenes de trabajo con dashboard, facturación ARCA y portal técnico con acceso por QR",
        href: "/desarrollador/eleven",
        live: "https://eleven-ascensores.vercel.app/",
    },

    quintal: {
        title: "Quintal",
        type: "Catálogo interactivo",
        desc: "La opcion economica para vender desde la web. Catálogo con precios dinámicos y pedidos automáticos vía WhatsApp",
        href: "/desarrollador/quintal",
        live: "https://quintal-demo-spa.vercel.app/",
    },
}

const SERVICES: Service[] = [
    {
        id: "negocio-local",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                <rect x="6" y="20" width="36" height="22" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <path d="M6 20L12 8H36L42 20" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="18" y="30" width="12" height="12" rx="1" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="24" y1="30" x2="24" y2="42" stroke="currentColor" strokeWidth="1.5" />
            </svg>
        ),
        cta: "Tengo un negocio",
        subtitle: "Y quiero una web profesional que venda",
        features: [
            "Clientes que duplicaron consultas en 30 días",
            "Diseño que transmite confianza al instante",
            "Tu negocio visible en Google desde el día 1",
        ],
        color: "#3B82F6",
        projects: ["immaculate", "laluna", "tr1bu", "quintal"],
        waMessage:
            "Hola Santiago! Estuve viendo tu página y algunos proyectos. Te escribo porque quiero más información sobre una web profesional para mi negocio.",
    },
    {
        id: "empresa",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                <rect x="8" y="6" width="14" height="36" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="26" y="14" width="14" height="28" rx="2" stroke="currentColor" strokeWidth="2" fill="none" />
                <rect x="12" y="12" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
                <rect x="12" y="20" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
                <rect x="12" y="28" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
                <rect x="30" y="20" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
                <rect x="30" y="28" width="4" height="4" rx="0.5" fill="currentColor" opacity="0.5" />
            </svg>
        ),
        cta: "Tengo una empresa",
        subtitle: "Y necesito un sistema que ordene mis operaciones",
        features: [
            "Paneles de control a medida para tu equipo",
            "Automatización de procesos que hoy son manuales",
            "Datos en tiempo real para tomar decisiones",
        ],
        color: "#10B981",
        projects: ["eleven", "liftmanager", "immaculate"],
        waMessage:
            "Hola Santiago! Estuve viendo tu página y algunos proyectos. Te escribo porque me interesa un sistema administrativo a medida para mi empresa.",
    },
    {
        id: "portal",
        icon: (
            <svg viewBox="0 0 48 48" fill="none" className="w-10 h-10">
                <rect x="4" y="8" width="40" height="28" rx="3" stroke="currentColor" strokeWidth="2" fill="none" />
                <line x1="4" y1="16" x2="44" y2="16" stroke="currentColor" strokeWidth="1.5" />
                <rect x="8" y="20" width="16" height="4" rx="1" fill="currentColor" opacity="0.3" />
                <rect x="8" y="27" width="12" height="2" rx="1" fill="currentColor" opacity="0.2" />
                <rect x="8" y="31" width="14" height="2" rx="1" fill="currentColor" opacity="0.2" />
                <circle cx="36" cy="26" r="4" stroke="currentColor" strokeWidth="1.5" fill="none" />
                <circle cx="10" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
                <circle cx="15" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
                <circle cx="20" cy="12" r="1.5" fill="currentColor" opacity="0.4" />
            </svg>
        ),
        cta: "Tengo un portal o plataforma",
        subtitle: "Y necesito gestionar contenido dinámico",
        features: [
            "Editor intuitivo para publicar sin depender de nadie",
            "SEO optimizado para escalar tu audiencia",
            "Arquitectura que crece con tu contenido",
        ],
        color: "#F59E0B",
        projects: ["reportemedico", "liftmanager", "quintal"],
        waMessage:
            "Hola Santiago! Estuve viendo tu página y algunos proyectos. Te escribo porque necesito una plataforma o portal para mi proyecto.",
    },
]

const REASONS = [
    {
        num: "01",
        title: "Presencia online 24/7",
        body: "Tu web está disponible todo el tiempo, incluso cuando no estás trabajando. Es como tener un negocio abierto las 24 horas.",
    },
    {
        num: "02",
        title: "Credibilidad inmediata",
        body: "Si no estás en internet, muchas personas dudan de la seriedad de tu proyecto. Una web bien hecha genera confianza al instante.",
    },
    {
        num: "03",
        title: "Alcance sin límites",
        body: "Llegás a personas de cualquier lugar, no solo a quienes están cerca físicamente.",
    },
    {
        num: "04",
        title: "Control total",
        body: "A diferencia de las redes sociales, tu página es tuya: decidís el diseño, el mensaje y cómo comunicarte con tu audiencia.",
    },
    {
        num: "05",
        title: "Herramienta de ventas",
        body: "Mostrás productos, servicios y testimonios, y captás clientes directamente — incluso automatizando procesos.",
    },
]

// ── Hooks ────────────────────────────────────────────────────────────────────

function useInView(ref: React.RefObject<Element | null>, options: { threshold?: number; repeat?: boolean } = {}) {
    const [isInView, setIsInView] = useState(false)
    useEffect(() => {
        if (!ref.current) return
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsInView(true)
                    if (!options.repeat) observer.unobserve(entry.target)
                } else if (options.repeat) {
                    setIsInView(false)
                }
            },
            { threshold: options.threshold || 0.3 }
        )
        observer.observe(ref.current)
        return () => observer.disconnect()
    }, [ref, options.threshold, options.repeat])
    return isInView
}

// ── Components ───────────────────────────────────────────────────────────────

function TeleprompterLine({
    children,
    delay = 0,
    parentVisible,
    keepBright = false,
}: {
    children: React.ReactNode
    delay?: number
    parentVisible: boolean
    keepBright?: boolean
}) {
    const [phase, setPhase] = useState<"hidden" | "bright" | "dim">("hidden")

    useEffect(() => {
        if (!parentVisible) return
        const showTimer = setTimeout(() => setPhase("bright"), delay)
        const dimTimer = keepBright ? null : setTimeout(() => setPhase("dim"), delay + 1200)
        return () => {
            clearTimeout(showTimer)
            if (dimTimer) clearTimeout(dimTimer)
        }
    }, [parentVisible, delay, keepBright])

    return (
        <div
            style={{
                opacity: phase === "hidden" ? 0 : phase === "bright" ? 1 : TELEPROMPTER_DIM_OPACITY,
                transform: phase === "hidden" ? "translateY(20px)" : "translateY(0)",
                transition: "opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
            }}
        >
            {children}
        </div>
    )
}

function ServiceCard({
    service,
    index,
    onSelect,
    isVisible,
}: {
    service: Service
    index: number
    onSelect: (id: string) => void
    isVisible: boolean
}) {
    const delay = 400 + index * 200

    return (
        <button
            onClick={() => onSelect(service.id)}
            className="group relative text-left w-full"
            style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? "translateY(0)" : "translateY(30px)",
                transition: `all 0.7s cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms`,
            }}
        >
            <div
                className="relative overflow-hidden rounded-2xl p-6 sm:p-8 border transition-all duration-500"
                style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)",
                    borderColor: "rgba(255,255,255,0.06)",
                }}
            >
                {/* Hover glow */}
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                    style={{ background: `radial-gradient(ellipse at 50% 0%, ${service.color}15 0%, transparent 70%)` }}
                />
                {/* Top accent line */}
                <div
                    className="absolute top-0 left-6 right-6 h-px opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `linear-gradient(90deg, transparent, ${service.color}, transparent)` }}
                />

                <div className="relative z-10 space-y-4">
                    <div
                        className="transition-colors duration-300"
                        style={{ color: "rgba(255,255,255,0.4)" }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = service.color)}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.4)")}
                    >
                        {service.icon}
                    </div>
                    <h3
                        className="text-xl sm:text-2xl font-semibold tracking-tight"
                        style={{ fontFamily: "'Sora', sans-serif", color: "rgba(255,255,255,0.95)" }}
                    >
                        {service.cta}
                    </h3>
                    <p
                        className="text-sm sm:text-base leading-relaxed"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.45)" }}
                    >
                        {service.subtitle}
                    </p>
                    <div className="w-8 h-px" style={{ background: `${service.color}40` }} />
                    <ul className="space-y-2.5">
                        {service.features.map((feature, i) => (
                            <li key={i} className="flex items-start gap-2.5">
                                <span
                                    className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                                    style={{ background: service.color }}
                                />
                                <span
                                    className="text-sm leading-snug"
                                    style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.5)" }}
                                >
                                    {feature}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </button>
    )
}

function WhatsAppIcon() {
    return (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
    )
}

function OverlayCTA({ serviceId, onClose }: { serviceId: string; onClose: () => void }) {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        requestAnimationFrame(() => setVisible(true))
    }, [])

    const handleClose = () => {
        setVisible(false)
        setTimeout(onClose, 300)
    }

    const data = SERVICES.find((s) => s.id === serviceId)
    if (!data) return null

    const waLink = whatsappLink(data.waMessage)

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center px-4 py-8"
            onClick={handleClose}
            style={{
                backgroundColor: visible ? "rgba(0,0,0,0.85)" : "rgba(0,0,0,0)",
                backdropFilter: visible ? "blur(8px)" : "blur(0px)",
                transition: "all 0.3s ease",
                overflowY: "auto",
            }}
        >
            <div
                className="relative w-full max-w-md rounded-2xl"
                onClick={(e) => e.stopPropagation()}
                style={{
                    opacity: visible ? 1 : 0,
                    transform: visible ? "scale(1) translateY(0)" : "scale(0.95) translateY(10px)",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    background: "linear-gradient(160deg, rgba(18,18,24,0.98) 0%, rgba(10,10,14,0.98) 100%)",
                    border: `1px solid ${data.color}25`,
                    boxShadow: `0 0 80px ${data.color}08, 0 25px 50px rgba(0,0,0,0.6)`,
                }}
            >
                {/* Close button */}
                <button
                    onClick={handleClose}
                    className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full z-10"
                    style={{ color: "rgba(255,255,255,0.3)", transition: "color 0.2s" }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                    aria-label="Cerrar"
                >
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M1 1L13 13M13 1L1 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                </button>

                {/* Header */}
                <div className="p-6 pb-4">
                    <div className="flex items-center gap-3 mb-1">
                        <div
                            className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                            style={{ background: `${data.color}18`, color: data.color }}
                        >
                            <div style={{ transform: "scale(0.55)", transformOrigin: "center" }}>{data.icon}</div>
                        </div>
                        <h4
                            className="text-lg font-semibold"
                            style={{ fontFamily: "'Sora', sans-serif", color: "rgba(255,255,255,0.95)" }}
                        >
                            {data.cta}
                        </h4>
                    </div>
                    <p
                        className="text-sm ml-11"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.35)" }}
                    >
                        Algunos proyectos que hice para negocios como el tuyo
                    </p>
                </div>

                {/* Divider */}
                <div style={{ height: "1px", background: "rgba(255,255,255,0.05)", margin: "0 24px" }} />

                {/* Projects list */}
                <div className="p-4 space-y-2">
                    {data.projects.map((id) => PROJECTS[id]).map((project) => (
                        <div
                            key={project.title}
                            className="rounded-xl p-4"
                            style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.05)" }}
                        >
                            <div className="flex flex-wrap items-center gap-2 mb-1">
                                <span
                                    className="font-semibold text-sm"
                                    style={{ fontFamily: "'Sora', sans-serif", color: "rgba(255,255,255,0.9)" }}
                                >
                                    {project.title}
                                </span>
                                <span
                                    className="text-xs px-2 py-0.5 rounded-full"
                                    style={{ background: `${data.color}18`, color: data.color, fontFamily: "'DM Sans', sans-serif" }}
                                >
                                    {project.type}
                                </span>
                            </div>
                            <p
                                className="text-xs mb-3"
                                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.4)", lineHeight: 1.5 }}
                            >
                                {project.desc}
                            </p>
                            <div className="flex gap-4">
                                {/* <Link
                                    href={project.href}
                                    onClick={handleClose}
                                    className="text-xs font-medium"
                                    style={{
                                        fontFamily: "'DM Sans', sans-serif",
                                        color: "rgba(255,255,255,0.5)",
                                        textDecoration: "underline",
                                        textUnderlineOffset: "3px",
                                        transition: "color 0.2s",
                                    }}
                                    onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.85)")}
                                    onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.5)")}
                                >
                                    Ver case study →
                                </Link> */}
                                {project.live && (
                                    <a
                                        href={project.live}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-medium"
                                        style={{
                                            fontFamily: "'DM Sans', sans-serif",
                                            color: data.color,
                                            opacity: 0.7,
                                            textDecoration: "underline",
                                            textUnderlineOffset: "3px",
                                            transition: "opacity 0.2s",
                                        }}
                                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.opacity = "1")}
                                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.opacity = "0.7")}
                                    >
                                        Ver sitio ↗
                                    </a>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* WhatsApp CTA */}
                <div className="p-4 pt-2">
                    <a
                        href={waLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2.5 w-full py-3.5 rounded-xl text-sm font-semibold"
                        style={{
                            fontFamily: "'Sora', sans-serif",
                            background: "#25D366",
                            color: "#fff",
                            boxShadow: "0 4px 20px rgba(37,211,102,0.25)",
                            transition: "background 0.2s ease",
                        }}
                        onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "#20c05c")}
                        onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "#25D366")}
                    >
                        <WhatsAppIcon />
                        Quiero algo así para mi negocio
                    </a>
                    <p
                        className="text-center text-xs mt-2.5"
                        style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.2)" }}
                    >
                        Te respondo en menos de 24hs
                    </p>
                </div>
            </div>
        </div>
    )
}

function ReasonsRotator() {
    const [index, setIndex] = useState(0)
    const [fading, setFading] = useState(false)
    const [hovered, setHovered] = useState(false)

    const goTo = (i: number) => {
        setFading(true)
        setTimeout(() => {
            setIndex(i)
            setFading(false)
        }, 350)
    }

    useEffect(() => {
        if (hovered) return
        const interval = setInterval(() => {
            setFading(true)
            setTimeout(() => {
                setIndex((i) => (i + 1) % REASONS.length)
                setFading(false)
            }, 350)
        }, 5000)
        return () => clearInterval(interval)
    }, [hovered])

    const reason = REASONS[index]

    return (
        <section
            className="py-20 px-6 text-center"
            onClick={() => goTo((index + 1) % REASONS.length)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            style={{
                opacity: hovered ? 0.6 : 0.25,
                transition: "opacity 0.6s ease",
                cursor: "pointer",
            }}
        >
            <p
                style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.65rem",
                    color: "rgba(255,255,255,0.5)",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    marginBottom: "20px",
                }}
            >
                5 razones para tener tu web
            </p>

            <div
                style={{
                    opacity: fading ? 0 : 1,
                    transform: fading ? "translateY(6px)" : "translateY(0)",
                    transition: "opacity 0.35s ease, transform 0.35s ease",
                    maxWidth: "340px",
                    margin: "0 auto",
                }}
            >
                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "0.6rem",
                        color: "rgba(255,255,255,0.35)",
                        letterSpacing: "0.12em",
                        marginBottom: "10px",
                    }}
                >
                    {reason.num} / 05
                </p>
                <h3
                    style={{
                        fontFamily: "'Sora', sans-serif",
                        fontSize: "clamp(0.875rem, 3vw, 1rem)",
                        fontWeight: 600,
                        color: "rgba(255,255,255,0.9)",
                        marginBottom: "10px",
                        lineHeight: 1.3,
                    }}
                >
                    {reason.title}
                </h3>
                <p
                    style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontSize: "clamp(0.775rem, 2.5vw, 0.85rem)",
                        color: "rgba(255,255,255,0.65)",
                        lineHeight: 1.7,
                    }}
                >
                    {reason.body}
                </p>
            </div>

            {/* Dots */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{ display: "flex", justifyContent: "center", gap: "6px", marginTop: "20px" }}
            >
                {REASONS.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Razón ${i + 1}`}
                        style={{
                            width: i === index ? "18px" : "6px",
                            height: "6px",
                            borderRadius: "3px",
                            background: i === index ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.18)",
                            border: "none",
                            cursor: "pointer",
                            padding: 0,
                            transition: "all 0.3s ease",
                        }}
                    />
                ))}
            </div>
        </section>
    )
}

function ScrollIndicator() {
    return (
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-slow">
            <span
                className="text-xs tracking-widest uppercase"
                style={{ fontFamily: "'DM Sans', sans-serif", color: "rgba(255,255,255,0.25)", letterSpacing: "0.2em" }}
            >
                Scroll
            </span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ color: "rgba(255,255,255,0.2)" }}>
                <path
                    d="M10 4V16M10 16L5 11M10 16L15 11"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>
    )
}

// ── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioLanding() {
    const [selectedService, setSelectedService] = useState<string | null>(null)
    const [heroLoaded, setHeroLoaded] = useState(false)
    const [cardsReady, setCardsReady] = useState(false)
    const [differentReady, setDifferentReady] = useState(false)
    const teleprompterRef = useRef<HTMLElement | null>(null)
    const teleprompterVisible = useInView(teleprompterRef, { threshold: 0.2 })

    useEffect(() => {
        const t = setTimeout(() => setHeroLoaded(true), 200)
        return () => clearTimeout(t)
    }, [])

    useEffect(() => {
        if (!teleprompterVisible) return
        // "Seleccioná lo más parecido a tu negocio" aparece a los 2200ms
        // Cards aparecen 800ms después de eso → 3000ms
        // "¿Tu proyecto es diferente?" aparece 3s después de las cards → 6000ms
        const t1 = setTimeout(() => setCardsReady(true), 3000)
        const t2 = setTimeout(() => setDifferentReady(true), 6000)
        return () => { clearTimeout(t1); clearTimeout(t2) }
    }, [teleprompterVisible])

    const waGeneral = whatsappLink(
        "Hola Santiago! Estuve viendo tu página. Te escribo porque tengo un proyecto diferente y quiero contarte de qué se trata."
    )

    return (
        <>
            {/* Google Fonts */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Sora:wght@300;400;600;700&family=DM+Sans:ital,wght@0,300;0,400;0,500;1,300&display=swap"
                rel="stylesheet"
            />

            <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0) translateX(-50%); }
          50% { transform: translateY(6px) translateX(-50%); }
        }
        .animate-bounce-slow { animation: bounce-slow 2.5s ease-in-out infinite; }
        @keyframes grain {
          0%, 100% { transform: translate(0,0); }
          10% { transform: translate(-2%,-2%); }
          30% { transform: translate(1%,2%); }
          50% { transform: translate(-1%,1%); }
          70% { transform: translate(3%,1%); }
          90% { transform: translate(2%,-1%); }
        }
        .grain::after {
          content: '';
          position: fixed;
          inset: -50%;
          width: 200%;
          height: 200%;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
          pointer-events: none;
          z-index: 100;
          animation: grain 6s steps(10) infinite;
        }
        ::-webkit-scrollbar { width: 4px; }
        ::-webkit-scrollbar-track { background: transparent; }
        ::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.1); border-radius: 2px; }
        .cards-scroll {
          display: flex;
          gap: 16px;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          padding: 0 24px;
        }
        .cards-scroll::-webkit-scrollbar { display: none; }
        .cards-scroll > * {
          scroll-snap-align: center;
          flex: 0 0 min(85vw, 340px);
        }
        @media (min-width: 768px) {
          .cards-scroll {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            overflow: visible;
            padding: 0;
          }
          .cards-scroll > * { flex: unset; }
        }
      `}</style>

            <div
                className="grain"
                style={{
                    minHeight: "100vh",
                    background: "linear-gradient(165deg, #0a0a0f 0%, #0d0d14 40%, #0f0e17 70%, #0a0a0f 100%)",
                    color: "#fff",
                    overflowX: "hidden",
                }}
            >
                {/* ── HERO ──────────────────────────────────────────────────── */}
                <section
                    className="relative flex flex-col items-center justify-center px-6 text-center"
                    style={{ minHeight: "100vh" }}
                >
                    <div
                        className="absolute pointer-events-none"
                        style={{
                            width: "600px",
                            height: "600px",
                            top: "20%",
                            left: "50%",
                            transform: "translateX(-50%)",
                            background: "radial-gradient(ellipse, rgba(59,130,246,0.06) 0%, transparent 70%)",
                            filter: "blur(60px)",
                        }}
                    />

                    <div className="relative z-10 space-y-4">
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "clamp(0.875rem, 2vw, 1rem)",
                                color: "rgba(255,255,255,0.35)",
                                letterSpacing: "0.15em",
                                textTransform: "uppercase",
                                opacity: heroLoaded ? 1 : 0,
                                transform: heroLoaded ? "translateY(0)" : "translateY(15px)",
                                transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1) 0.5s",
                            }}
                        >
                            Hola!
                        </p>
                        <h1
                            style={{
                                fontFamily: "'Sora', sans-serif",
                                fontSize: "clamp(2rem, 7vw, 4rem)",
                                fontWeight: 700,
                                lineHeight: 1.1,
                                letterSpacing: "-0.02em",
                                opacity: heroLoaded ? 1 : 0,
                                transform: heroLoaded ? "translateY(0)" : "translateY(20px)",
                                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1s",
                            }}
                        >
                            <span style={{ color: "rgba(255,255,255,0.95)" }}>Soy Santiago</span>
                            <br />
                            <span
                                style={{
                                    background: "linear-gradient(135deg, #3B82F6, #10B981)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Samuel
                            </span>
                        </h1>
                        <p
                            style={{
                                fontFamily: "'DM Sans', sans-serif",
                                fontSize: "clamp(1rem, 3vw, 1.25rem)",
                                color: "rgba(255,255,255,0.45)",
                                fontWeight: 300,
                                opacity: heroLoaded ? 1 : 0,
                                transform: heroLoaded ? "translateY(0)" : "translateY(15px)",
                                transition: "all 1s cubic-bezier(0.16, 1, 0.3, 1) 1.8s",
                            }}
                        >
                            Desarrollo páginas web
                            <br />
                            y sistemas para negocios
                        </p>
                    </div>

                    <ScrollIndicator />
                </section>

                {/* ── TELEPROMPTER ──────────────────────────────────────────── */}
                <section
                    ref={teleprompterRef}
                    className="relative flex flex-col items-center justify-center px-6 text-center"
                    style={{ minHeight: "55vh" }}
                >
                    <div className="max-w-lg space-y-8">
                        <TeleprompterLine delay={0} parentVisible={teleprompterVisible}>
                            <p
                                style={{
                                    fontFamily: "'Sora', sans-serif",
                                    fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                                    fontWeight: 200,
                                    color: "rgba(255,255,255,0.9)",
                                    lineHeight: 1.4,
                                }}
                            >
                                Tengo varios proyectos realizados
                            </p>
                        </TeleprompterLine>

                        <TeleprompterLine delay={1000} parentVisible={teleprompterVisible}>
                            <p
                                style={{
                                    fontFamily: "'Sora', sans-serif",
                                    fontSize: "clamp(1.25rem, 4vw, 1.75rem)",
                                    fontWeight: 300,
                                    color: "rgba(255,255,255,0.9)",
                                    lineHeight: 1.4,
                                }}
                            >
                                pero para saber en qué te puedo ayudar...
                            </p>
                        </TeleprompterLine>

                        <TeleprompterLine delay={2200} parentVisible={teleprompterVisible} keepBright>
                            <p
                                style={{
                                    fontFamily: "'Sora', sans-serif",
                                    fontSize: "clamp(1.5rem, 5vw, 2rem)",
                                    fontWeight: 600,
                                    lineHeight: 1.3,
                                    background: "linear-gradient(135deg, #fff, rgba(255,255,255,0.7))",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                    backgroundClip: "text",
                                }}
                            >
                                Seleccioná lo más parecido a tu negocio
                            </p>
                        </TeleprompterLine>
                    </div>
                </section>

                {/* ── CARDS ─────────────────────────────────────────────────── */}
                <section className="relative px-0 md:px-6 pb-32 pt-8">
                    <div className="max-w-5xl mx-auto">
                        <div className="cards-scroll">
                            {SERVICES.map((service, i) => (
                                <ServiceCard
                                    key={service.id}
                                    service={service}
                                    index={i}
                                    onSelect={setSelectedService}
                                    isVisible={cardsReady}
                                />
                            ))}
                        </div>

                        {/* "¿Tu proyecto es diferente?" */}
                        <div
                            className="mt-12 text-center"
                            style={{
                                opacity: differentReady ? 1 : 0,
                                transform: differentReady ? "translateY(0)" : "translateY(20px)",
                                transition: "all 0.7s cubic-bezier(0.16, 1, 0.3, 1)",
                            }}
                        >
                            <a
                                href={waGeneral}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-sm"
                                style={{
                                    fontFamily: "'DM Sans', sans-serif",
                                    color: "rgba(255,255,255,0.3)",
                                    transition: "color 0.3s",
                                }}
                                onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.7)")}
                                onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "rgba(255,255,255,0.3)")}
                            >
                                ¿Tu proyecto es diferente?{" "}
                                <span style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>Contame</span>
                                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                    <path
                                        d="M2 7H12M12 7L8 3M12 7L8 11"
                                        stroke="currentColor"
                                        strokeWidth="1.5"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </section>

                {/* ── REASONS ──────────────────────────────────────────────── */}
                <ReasonsRotator />

                {/* ── OVERLAY ───────────────────────────────────────────────── */}
                {selectedService && (
                    <OverlayCTA serviceId={selectedService} onClose={() => setSelectedService(null)} />
                )}
            </div>
        </>
    )
}
