'use client'

import { useState } from 'react'
import { motion } from 'motion/react'
import Image from 'next/image'
import { WhatsappIcon, InstagramIcon, ArrowRightIcon } from '@/components/icons'
import { WA_GRABACIONES } from '@/lib/whatsapp'

type Lang = 'es' | 'en'

// ─── Traducciones ─────────────────────────────────────────────────────────────

const t = {
  es: {
    badge:          'Músico · Sesiones de Brasses',
    h1:             'Sesiones de brasses para producciones musicales.',
    subtitle:       'Arreglos y grabaciones de sección de vientos para tu producción musical.',
    subtitleAccent: 'Rápido, latino y accesible.',
    ctaHero:        'Hablemos por WhatsApp',

    sectionEscucha: 'Escuchá cómo suena',
    ctaEscucha:     'Quiero esto para mi música',

    sectionDif:  'El diferencial',
    tituloDif:   '¿Qué me hace diferente?',
    diferencial: [
      { n: '01', titulo: 'Velocidad real.', texto: 'En menos de una semana tenés la sección de vientos grabada, editada y lista para integrar a tu producción. Sin esperas eternas. Sin excusas.' },
      { n: '02', titulo: 'Una sección completa, no un solo instrumento.', texto: 'Trabajo junto a un excelente trompetista con quien venimos grabando hace tiempo. El resultado mínimo son 4 voces de brass: 2 trombones y 2 trompetas. Y eso es el punto de partida — en secciones clave del arreglo solemos sumar más voces para darle más cuerpo y carácter al sonido.' },
      { n: '03', titulo: 'Sonido latino de verdad.', texto: 'No es un sample ni un preset. Son instrumentos reales, tocados por músicos que crecieron y viven dentro de la música latinoamericana.' },
      { n: '04', titulo: 'A un costo accesible.', texto: 'Creo que la buena música no debería ser cara. Trabajo con precios que tienen sentido, tanto para proyectos independientes como para producciones más grandes.' },
    ],

    sectionServ:  'Servicios',
    tituloServ:   '¿Qué ofrezco?',
    servicios: [
      { titulo: 'Ejecución sobre tu arreglo',       desc: 'Si ya tenés el arreglo escrito o lo tiene tu productor, me lo pasás y nosotros nos encargamos de la grabación completa.', nota: undefined },
      { titulo: 'Arreglo + grabación',              desc: 'Si necesitás que hagamos el arreglo desde cero, lo componemos nosotros y el trabajo se entrega con la partitura finalizada lista para que la uses como quieras.', nota: 'Este servicio tiene un costo adicional al de la grabación.' },
      { titulo: 'Producción completa de vientos',   desc: 'Si tenés varios temas, trabajar el material completo tiene un valor considerablemente menor al precio por track individual. Escribime y lo conversamos.', nota: undefined },
    ],

    sectionProc:  'El proceso',
    tituloProc:   'Cómo trabajamos juntos',
    pasos: [
      { n: '01', titulo: 'Me contactás',           texto: 'Por WhatsApp o Instagram. Me contás de qué se trata tu proyecto: el estilo, la cantidad de temas, si ya tenés arreglos o necesitás que los hagamos nosotros.' },
      { n: '02', titulo: 'Te mando una propuesta', texto: 'En base a lo que necesitás, te armo una propuesta clara con tiempos y condiciones.' },
      { n: '03', titulo: 'Manos a la obra',        texto: 'Componemos o ejecutamos los arreglos, grabamos todas las voces, editamos todo.' },
      { n: '04', titulo: 'Pre-escucha y devolución', texto: 'Antes de cerrar el trabajo te envío un MP3 con una premezcla para que escuches cómo va quedando todo. Si algo no te convence, hay lugar para una devolución y ajustamos.' },
      { n: '05', titulo: 'Entrega final',          texto: 'Una vez que todo está aprobado y la transferencia confirmada, recibís todos los archivos multipista en formato .WAV de alta calidad — todas las voces de los brasses ya editadas, limpias y listas para incluir en tu proyecto sin ningún trabajo extra.' },
    ],
    ctaProc: 'Quiero sumarle vientos a mi música',

    sectionReel: 'Video Reel',
    reelPlaceholder: 'Próximamente: video con trabajos recientes.',

    sectionFinal: '¿Empezamos?',
    tituloFinal:  '¿Tenés un proyecto en mente?',
    textoFinal:   'No importa si es una canción suelta o un disco completo. Escribime y en menos de 24 horas te respondo con todo lo que necesitás saber.',
    ctaFinal:     'Escribime por WhatsApp',
  },

  en: {
    badge:          'Musician · Brass Sessions',
    h1:             'Brass sessions for music productions.',
    subtitle:       'Horn section arrangements and recordings for your musical production.',
    subtitleAccent: 'Fast, latin and affordable.',
    ctaHero:        "Let's talk on WhatsApp",

    sectionEscucha: 'Listen to how it sounds',
    ctaEscucha:     'I want this for my music',

    sectionDif:  'What makes me different',
    tituloDif:   'What makes me different?',
    diferencial: [
      { n: '01', titulo: 'Real speed.',                             texto: "In less than a week you get four horn voices recorded, edited and ready to drop into your mix. No long waits. No excuses." },
      { n: '02', titulo: 'A complete section, not just one instrument.', texto: "I work alongside an excellent trumpet player. The minimum result is 4 brass voices: 2 trombones and 2 trumpets — and that's just the starting point. We often add more voices in key sections to give more body and character." },
      { n: '03', titulo: 'Authentic latin sound.',                  texto: "This isn't a sample or a preset. These are real instruments, played by musicians who grew up inside Latin American music." },
      { n: '04', titulo: 'Affordable rates.',                       texto: "I believe great music shouldn't be expensive. I work with prices that make sense, whether you're an independent artist or a larger production." },
    ],

    sectionServ:  'Services',
    tituloServ:   'What do I offer?',
    servicios: [
      { titulo: 'Recording on your arrangement',         desc: "If you already have the arrangement written — or your producer does — just send it over and we'll handle the full recording.", nota: undefined },
      { titulo: 'Arrangement + recording',               desc: "If you need us to write the arrangement from scratch, we compose it and deliver it with the finalized score, ready for you to use however you like.", nota: 'This service has an additional cost on top of the recording fee.' },
      { titulo: 'Full horn production for an album',     desc: "If you have multiple tracks, working on the full project is priced considerably lower than individual track rates. Get in touch and let's talk.", nota: undefined },
    ],

    sectionProc:  'The process',
    tituloProc:   'How we work together',
    pasos: [
      { n: '01', titulo: 'You reach out',          texto: 'Via WhatsApp or Instagram. Tell me about your project: the style, the number of tracks, whether you already have arrangements or need us to write them.' },
      { n: '02', titulo: 'I send you a proposal',  texto: 'Based on what you need, I put together a clear proposal with timeline and terms.' },
      { n: '03', titulo: 'We get to work',         texto: 'We compose or perform the arrangements, record all the voices, and edit everything.' },
      { n: '04', titulo: 'Preview and feedback',   texto: "Before closing the project, I'll send you an MP3 premix so you can hear how everything is coming together. If something doesn't feel right, one revision is included." },
      { n: '05', titulo: 'Final delivery',         texto: 'Once everything is approved and payment confirmed, you receive all multitrack .WAV files — all brass voices edited, clean and ready to drop into your project with zero extra work.' },
    ],
    ctaProc: "Let's add horns to your music",

    sectionReel: 'Video Reel',
    reelPlaceholder: 'Coming soon: video with recent work.',

    sectionFinal: "Let's go",
    tituloFinal:  'Do you have a project in mind?',
    textoFinal:   "Doesn't matter if it's a single track or a full album. Reach out and I'll get back to you within 24 hours with everything you need to know.",
    ctaFinal:     'Write me on WhatsApp',
  },
} satisfies Record<Lang, unknown>

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function GoldDivider({ centered = false }: { centered?: boolean }) {
  return <span className={`block w-14 h-0.5 bg-brand-gold mt-3 ${centered ? 'mx-auto' : ''}`} />
}

function LangToggle({ lang, setLang }: { lang: Lang; setLang: (l: Lang) => void }) {
  return (
    <div
      className="inline-flex items-center bg-brand-bgDeep/70 backdrop-blur-sm border border-brand-border rounded-full p-1 gap-1"
      role="group"
      aria-label="Seleccionar idioma"
    >
      {(['es', 'en'] as Lang[]).map((l) => (
        <button
          key={l}
          onClick={() => setLang(l)}
          className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-200 ${
            lang === l
              ? 'bg-brand-gold text-brand-bgPrimary'
              : 'text-brand-textSecondary hover:text-brand-textPrimary'
          }`}
          aria-pressed={lang === l}
        >
          {l.toUpperCase()}
        </button>
      ))}
    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function GrabacionesContent() {
  const [lang, setLang] = useState<Lang>('es')
  const tx = t[lang]

  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[90vh] flex items-end pb-16 md:pb-24 overflow-hidden">
        <Image
          src="/images/hero/hero-grabaciones.jpg"
          alt="Santiago Samuel — Sesiones de brasses para producciones musicales"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(13,10,9,0.25) 0%, rgba(13,10,9,0.55) 50%, rgba(13,10,9,0.93) 100%)',
          }}
        />

        <div className="relative z-10 w-full max-w-content mx-auto px-5 md:px-8 lg:px-12">
          {/* Toggle de idioma */}
          <div className="mb-6">
            <LangToggle lang={lang} setLang={setLang} />
          </div>

          <span className="badge mb-4 inline-block">{tx.badge}</span>

          <motion.h1
            initial={{ opacity: 0, filter: 'blur(8px)', y: 24 }}
            animate={{ opacity: 1, filter: 'blur(0px)', y: 0 }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
            className="font-playfair text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-brand-textPrimary leading-tight mb-4 max-w-3xl"
          >
            {tx.h1}
          </motion.h1>
          <GoldDivider />

          <p className="font-sans font-light text-xl text-brand-textSecondary mt-5 mb-8 max-w-xl leading-relaxed">
            {tx.subtitle}{' '}
            <span className="text-brand-textPrimary">{tx.subtitleAccent}</span>
          </p>

          <a
            href={WA_GRABACIONES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-sans font-semibold py-3.5 px-7 rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            <WhatsappIcon className="w-5 h-5" />
            {tx.ctaHero}
          </a>
        </div>
      </section>

      {/* ── EJEMPLO ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-8">
            <span className="badge">{tx.sectionEscucha}</span>
            <GoldDivider />
          </div>

          <div className="relative w-full max-w-3xl aspect-video rounded-xl overflow-hidden border border-brand-border">
            <iframe
              src="https://www.youtube.com/embed/NbV8q14TgNE"
              title="Sesiones de brasses — Santiago Samuel"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              loading="lazy"
              className="absolute inset-0 w-full h-full"
            />
          </div>

          <div className="mt-8">
            <a
              href={WA_GRABACIONES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-bgPrimary font-sans font-semibold text-sm py-3 px-6 rounded-md hover:bg-brand-goldDark transition-colors duration-200"
            >
              <ArrowRightIcon className="w-4 h-4" />
              {tx.ctaEscucha}
            </a>
          </div>
        </div>
      </section>

      {/* ── EL DIFERENCIAL ────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-y border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-3">
              <div className="mb-10">
                <span className="badge">{tx.sectionDif}</span>
                <GoldDivider />
                <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
                  {tx.tituloDif}
                </h2>
              </div>
              <div className="flex flex-col gap-8">
                {tx.diferencial.map((d) => (
                  <div key={d.n} className="border-l-2 border-brand-gold pl-6 py-2">
                    <p className="font-mono-brand text-brand-gold text-xs uppercase tracking-widest mb-2">{d.n}</p>
                    <h3 className="font-playfair text-xl font-bold text-brand-textPrimary mb-2">{d.titulo}</h3>
                    <p className="font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">{d.texto}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="lg:col-span-2 order-first lg:order-last">
              <div
                className="relative aspect-[3/4] rounded-xl overflow-hidden"
                style={{ boxShadow: '0 8px 32px rgba(201,150,58,0.15)' }}
              >
                <Image
                  src="/images/hero/hero-grabaciones-bw.jpg"
                  alt="Santiago Samuel con trombón"
                  fill
                  className="object-cover object-top"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── QUÉ OFREZCO ───────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14">
            <span className="badge">{tx.sectionServ}</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
              {tx.tituloServ}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tx.servicios.map((s) => (
              <div
                key={s.titulo}
                className="bg-brand-bgSecondary border border-brand-border rounded-xl p-6 hover:border-brand-gold transition-colors duration-250"
              >
                <h3 className="font-playfair text-xl font-bold text-brand-textPrimary mb-3">{s.titulo}</h3>
                <p className="font-sans text-brand-textSecondary leading-relaxed">{s.desc}</p>
                {s.nota && (
                  <p className="mt-3 text-sm text-brand-textSecondary/70 italic font-sans">{s.nota}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESO ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-t border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10 md:mb-14">
            <span className="badge">{tx.sectionProc}</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
              {tx.tituloProc}
            </h2>
          </div>
          <div className="max-w-2xl flex flex-col gap-8">
            {tx.pasos.map((p) => (
              <div key={p.n} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center">
                  <span className="font-mono-brand text-brand-gold text-sm font-bold">{p.n}</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-sans font-semibold text-brand-textPrimary mb-1">{p.titulo}</h3>
                  <p className="font-sans text-brand-textSecondary text-[0.9375rem] leading-relaxed">{p.texto}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <a
              href={WA_GRABACIONES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-bgPrimary font-sans font-semibold py-3.5 px-7 rounded-md hover:bg-brand-goldDark transition-colors duration-200"
            >
              <ArrowRightIcon className="w-4 h-4" />
              {tx.ctaProc}
            </a>
          </div>
        </div>
      </section>

      {/* ── VIDEO REEL ────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary border-t border-brand-border py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-8">
            <span className="badge">{tx.sectionReel}</span>
            <GoldDivider />
          </div>
          <div className="bg-brand-bgSecondary border border-brand-border rounded-xl aspect-video flex flex-col items-center justify-center gap-4 max-w-3xl">
            <p className="text-4xl">🎬</p>
            <p className="font-playfair text-xl font-bold text-brand-textPrimary">
              {tx.reelPlaceholder}
            </p>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-t border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 text-center">
          <span className="badge inline-block mb-6">{tx.sectionFinal}</span>
          <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mb-4 max-w-xl mx-auto">
            {tx.tituloFinal}
          </h2>
          <GoldDivider centered />
          <p className="font-sans text-brand-textSecondary mt-6 mb-8 max-w-lg mx-auto leading-relaxed">
            {tx.textoFinal}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA_GRABACIONES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans font-semibold py-3.5 px-7 rounded-md hover:opacity-90 transition-opacity duration-200"
            >
              <WhatsappIcon className="w-5 h-5" />
              {tx.ctaFinal}
            </a>
            <a
              href="https://www.instagram.com/santi.rivero06/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand-gold text-brand-gold font-sans font-semibold py-3.5 px-7 rounded-md hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
              @santi.rivero06
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
