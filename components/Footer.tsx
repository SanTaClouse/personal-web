import Link from 'next/link'
import { InstagramIcon, LinkedinIcon, WhatsappIcon } from '@/components/icons'
import { WA_GENERAL } from '@/lib/whatsapp'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE, LINKEDIN_URL } from '@/lib/social'

const navMusico = [
  { href: '/musico/grabaciones', label: 'Grabaciones de Vientos' },
  { href: '/musico/clases', label: 'Clases de Piano' },
  { href: '/musico/sergiotorres', label: 'Sergio Torres' },
]

const navDesarrollador = [
  { href: '/desarrollador', label: 'Proyectos' },
  { href: '/desarrollador/portfolio', label: 'Portfolio técnico' },
  { href: '/desarrollador/laluna', label: 'La Luna' },
  { href: '/desarrollador/eleven', label: 'Eleven Ascensores' },
  { href: '/desarrollador/liftmanager', label: 'LiftManager' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer
      id="contacto"
      className="bg-brand-bgSecondary border-t border-brand-border"
    >
      {/* CTA superior */}
      <div className="border-b border-brand-border">
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 py-12 md:py-16 text-center">
          <p className="label badge mb-4">Contacto</p>
          <h2 className="font-playfair text-2xl md:text-3xl font-bold text-brand-textPrimary mb-3">
            ¿Hablamos?
          </h2>
          <p className="text-brand-textSecondary font-sans mb-8 max-w-md mx-auto">
            Para consultas sobre grabaciones, clases o desarrollo web. Respondido en menos de 24 horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-sans font-semibold text-sm py-3 px-6 rounded-full hover:opacity-90 transition-opacity duration-200"
            >
              <WhatsappIcon className="w-5 h-5" />
              Escribime por WhatsApp
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border border-brand-gold text-brand-gold font-sans font-semibold text-sm py-3 px-6 rounded-full hover:bg-brand-gold hover:text-brand-bgPrimary transition-all duration-200"
            >
              <InstagramIcon className="w-4 h-4" />
              {INSTAGRAM_HANDLE}
            </a>
          </div>
        </div>
      </div>

      {/* Links + info */}
      <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12 py-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">

          {/* Marca */}
          <div className="lg:col-span-2">
            <Link
              href="/"
              className="font-playfair text-xl font-bold text-brand-textPrimary hover:text-brand-gold transition-colors duration-200 block mb-3"
            >
              Santiago Samuel
            </Link>
            <p className="text-sm text-brand-textSecondary font-sans leading-relaxed max-w-xs">
              Músico, arreglador y trombonista de Santa Fe, Argentina. Doce años haciendo música en serio.
            </p>
          </div>

          {/* Músico */}
          <div>
            <p className="label text-label text-brand-gold uppercase tracking-widest mb-4 font-semibold">
              Músico
            </p>
            <ul className="flex flex-col gap-2">
              {navMusico.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-textSecondary hover:text-brand-textPrimary transition-colors duration-150 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Desarrollador */}
          <div>
            <p className="label text-label text-brand-gold uppercase tracking-widest mb-4 font-semibold">
              Desarrollador
            </p>
            <ul className="flex flex-col gap-2">
              {navDesarrollador.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-brand-textSecondary hover:text-brand-textPrimary transition-colors duration-150 font-sans"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-brand-border pt-6 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-brand-textSecondary font-sans">
            © {year} Santiago Samuel · Santa Fe, Argentina
          </p>
          <div className="flex items-center gap-4">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-textSecondary hover:text-brand-gold transition-colors duration-150"
              aria-label="LinkedIn de Santiago Samuel"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <p className="text-xs text-brand-textSecondary font-sans">
              Hecho con Next.js · Esta página la hice yo mismo.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
