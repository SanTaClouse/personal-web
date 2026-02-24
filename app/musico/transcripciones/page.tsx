import type { Metadata } from 'next'
import Image from 'next/image'
import { WhatsappIcon, ArrowRightIcon } from '@/components/icons'
import { WA_TRANSCRIPCIONES } from '@/lib/whatsapp'

export const metadata: Metadata = {
  title: 'Transcripciones para SADAIC | Partituras y Registro de Obras',
  description:
    'Servicio de transcripción de melodía y armonía para registrar tu canción en SADAIC. Rápido y accesible. También para SGAE, BMI, ASCAP y más.',
  keywords: [
    'transcripción para SADAIC',
    'registro de obra SADAIC',
    'transcripción melodía y armonía',
    'partitura para SADAIC',
    'cómo registrar una canción en SADAIC',
    'transcripción musical Argentina',
  ],
  alternates: { canonical: '/musico/transcripciones' },
}

function GoldDivider({ centered = false }: { centered?: boolean }) {
  return <span className={`block w-14 h-0.5 bg-brand-gold mt-3 ${centered ? 'mx-auto' : ''}`} />
}

const servicios = [
  {
    titulo: 'Transcripción para registro en SADAIC',
    descripcion:
      'El servicio más solicitado. Escucho tu canción y transcribo la melodía principal y la armonía (cifrado de acordes) en el formato correcto para presentar ante SADAIC. Rápido, prolijo y listo para usar.',
    destacado: true,
  },
  {
    titulo: 'Transcripción melódica',
    descripcion:
      'Solo la línea melódica de una canción, instrumento o voz. Útil para arreglos, covers, estudios y más.',
    destacado: false,
  },
  {
    titulo: 'Transcripción armónica',
    descripcion:
      'El cifrado completo de acordes de una canción. Ideal para músicos que necesitan aprender o enseñar un tema.',
    destacado: false,
  },
  {
    titulo: 'Transcripción completa',
    descripcion:
      'Partitura completa con todas las voces e instrumentos. Para proyectos que requieren mayor detalle.',
    destacado: false,
  },
]

export default function TranscripcionesPage() {
  return (
    <>
      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[70vh] flex items-end pb-14 md:pb-20 overflow-hidden">
        <Image
          src="/images/hero/hero-transcripciones.jpg"
          alt="Santiago Samuel — Transcripciones para SADAIC"
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(26,18,16,0.2) 0%, rgba(26,18,16,0.65) 55%, rgba(26,18,16,0.95) 100%)',
          }}
        />
        <div className="relative z-10 w-full max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <span className="badge mb-5 inline-block">Músico · Transcripciones</span>
          <h1 className="font-playfair text-4xl sm:text-5xl md:text-6xl font-bold text-brand-textPrimary leading-tight mb-3 max-w-2xl">
            Tu canción merece quedar registrada.
          </h1>
          <GoldDivider />
          <p className="font-sans font-light text-lg text-brand-textSecondary mt-5 mb-8 max-w-xl">
            Servicio de transcripción musical para registro en SADAIC y otros organismos
            internacionales de derechos de autor.
          </p>
          <a
            href={WA_TRANSCRIPCIONES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white font-sans font-semibold py-3 px-6 rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            <WhatsappIcon className="w-5 h-5" />
            Consultá por WhatsApp
          </a>
        </div>
      </section>

      {/* ── INTRO ─────────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 max-w-3xl">
          <div className="space-y-4 font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">
            <p>
              Si componés música, tenés derecho a protegerla. Y para registrar una obra en{' '}
              <strong className="text-brand-textPrimary">SADAIC</strong> — el organismo que protege
              los derechos de los autores y compositores en Argentina — necesitás la transcripción
              escrita de la melodía y la armonía de tu canción.
            </p>
            <p className="text-brand-textPrimary font-medium">
              Ese papel es el que demuestra que la obra es tuya.
            </p>
            <p>
              El problema es que no todos los músicos leen o escriben partituras.{' '}
              <span className="text-brand-gold">Para eso estoy yo.</span>
            </p>
          </div>
        </div>
      </section>

      {/* ── SERVICIOS ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-y border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10">
            <span className="badge">Servicios</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-brand-textPrimary mt-5">
              ¿Qué podés pedir?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {servicios.map((s) => (
              <div
                key={s.titulo}
                className={`rounded-xl border p-6 ${
                  s.destacado
                    ? 'border-brand-gold bg-brand-bgPrimary'
                    : 'border-brand-border bg-brand-bgPrimary hover:border-brand-gold'
                } transition-colors duration-250`}
              >
                {s.destacado && (
                  <span className="badge mb-3 inline-block">Más solicitado</span>
                )}
                <h3 className="font-playfair text-xl font-bold text-brand-textPrimary mb-3">
                  {s.titulo}
                </h3>
                <p className="font-sans text-brand-textSecondary leading-relaxed">
                  {s.descripcion}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── INTERNACIONAL ─────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="max-w-2xl">
            <div className="mb-6">
              <span className="badge">¿Estás fuera de Argentina?</span>
              <GoldDivider />
            </div>
            <p className="font-sans text-brand-textSecondary leading-relaxed text-[1.0625rem]">
              El proceso es el mismo. Cada país tiene su propio organismo de gestión de derechos de
              autor — en España es la{' '}
              <span className="text-brand-textPrimary">SGAE</span>, en Estados Unidos{' '}
              <span className="text-brand-textPrimary">BMI o ASCAP</span>, en México{' '}
              <span className="text-brand-textPrimary">SACM</span>, en Uruguay{' '}
              <span className="text-brand-textPrimary">AGADU</span>. Si necesitás una transcripción
              para registrar tu obra en cualquiera de esos organismos, el formato puede variar pero
              el trabajo es el mismo. Escribime y lo resolvemos.
            </p>
          </div>
        </div>
      </section>

      {/* ── CÓMO FUNCIONA ─────────────────────────────────────────────────── */}
      <section className="bg-brand-bgSecondary border-t border-brand-border py-16 md:py-24">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="mb-10">
            <span className="badge">El proceso</span>
            <GoldDivider />
            <h2 className="font-playfair text-3xl font-bold text-brand-textPrimary mt-5">
              Cómo funciona
            </h2>
          </div>

          <div className="max-w-xl flex flex-col gap-7">
            {[
              {
                n: '01',
                t: 'Me mandás el audio',
                d: 'Puede ser un demo, una grabación de teléfono, un archivo de estudio. Lo que tengas.',
              },
              {
                n: '02',
                t: 'Transcribo la obra',
                d: 'Melodía, armonía, o ambas — según lo que necesités.',
              },
              {
                n: '03',
                t: 'Recibís la partitura',
                d: 'Archivo en PDF listo para presentar, más el archivo editable si lo necesitás.',
              },
            ].map((paso) => (
              <div key={paso.n} className="flex gap-5 items-start">
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-brand-gold flex items-center justify-center">
                  <span className="font-mono-brand text-brand-gold text-sm font-bold">{paso.n}</span>
                </div>
                <div className="pt-1">
                  <h3 className="font-sans font-semibold text-brand-textPrimary mb-1">{paso.t}</h3>
                  <p className="font-sans text-brand-textSecondary text-[0.9375rem] leading-relaxed">
                    {paso.d}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <a
              href={WA_TRANSCRIPCIONES}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-brand-gold text-brand-bgPrimary font-sans font-semibold py-3.5 px-7 rounded-md hover:bg-brand-goldDark transition-colors duration-200"
            >
              <ArrowRightIcon className="w-4 h-4" />
              Quiero transcribir mi canción
            </a>
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ─────────────────────────────────────────────────────── */}
      <section className="bg-brand-bgPrimary border-t border-brand-border py-16 md:py-20">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 text-center">
          <h2 className="font-playfair text-3xl font-bold text-brand-textPrimary mb-3">
            ¿Querés registrar tu obra?
          </h2>
          <GoldDivider centered />
          <p className="font-sans text-brand-textSecondary mt-6 mb-8 max-w-md mx-auto leading-relaxed">
            Escribime con el audio de tu canción y te cuento todo lo que necesitás saber.
            El proceso es más simple de lo que parece.
          </p>
          <a
            href={WA_TRANSCRIPCIONES}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans font-semibold py-3.5 px-7 rounded-md hover:opacity-90 transition-opacity duration-200"
          >
            <WhatsappIcon className="w-5 h-5" />
            Escribime por WhatsApp
          </a>
        </div>
      </section>
    </>
  )
}
