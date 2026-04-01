'use client'

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import { InstagramIcon } from '@/components/icons'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/social'
import { WA_GRABACIONES } from '@/lib/whatsapp'
import WhatsAppCTA from '@/components/WhatsAppCTA'
import YouTubeFacade from '@/components/YouTubeFacade'
import GoldDivider from '@/components/GoldDivider'
import { type Lang, t } from './translations'

// ─── Sub-componentes ──────────────────────────────────────────────────────────

function LangToggle({ lang }: { lang: Lang }) {
  return (
    <div
      className="inline-flex items-center bg-brand-bgDeep/70 backdrop-blur-sm border border-brand-border rounded-full p-1 gap-1"
      role="group"
      aria-label="Seleccionar idioma"
    >
      {(['es', 'en'] as Lang[]).map((l) => (
        <Link
          key={l}
          href={l === 'es' ? '/musico/grabaciones' : '/musico/grabaciones/en'}
          className={`px-4 py-1.5 rounded-full text-xs font-sans font-semibold tracking-widest uppercase transition-all duration-200 ${
            lang === l
              ? 'bg-brand-gold text-brand-bgPrimary'
              : 'text-brand-textSecondary hover:text-brand-textPrimary'
          }`}
          aria-current={lang === l ? 'page' : undefined}
        >
          {l.toUpperCase()}
        </Link>
      ))}
    </div>
  )
}

// ─── Componente principal ─────────────────────────────────────────────────────

export default function GrabacionesContent({ lang }: { lang: Lang }) {
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
            <LangToggle lang={lang} />
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

          <WhatsAppCTA href={WA_GRABACIONES}>
            {tx.ctaHero}
          </WhatsAppCTA>
        </div>
      </section>

      {/* ── EJEMPLO ───────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-8">
            <span className="badge">{tx.sectionEscucha}</span>
            <GoldDivider />
          </div>

          <YouTubeFacade
            videoId="NbV8q14TgNE"
            title="Sesiones de brasses — Santiago Samuel"
          />

          <div className="mt-8">
            <WhatsAppCTA href={WA_GRABACIONES} variant="gold" className="py-3 px-6 text-sm">
              {tx.ctaEscucha}
            </WhatsAppCTA>
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
            <WhatsAppCTA href={WA_GRABACIONES} variant="gold">
              {tx.ctaProc}
            </WhatsAppCTA>
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
            <WhatsAppCTA href={WA_GRABACIONES}>
              {tx.ctaFinal}
            </WhatsAppCTA>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand-gold text-brand-gold font-sans font-semibold py-3.5 px-7 rounded-md hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
