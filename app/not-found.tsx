import Link from 'next/link'
import { ArrowRightIcon } from '@/components/icons'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-brand-bgPrimary flex items-center justify-center px-5">
      <div className="text-center max-w-md">
        <p className="font-mono-brand text-brand-gold text-6xl font-bold mb-4">404</p>
        <h1 className="font-playfair text-3xl font-bold text-brand-textPrimary mb-3">
          Esta página no existe
        </h1>
        <p className="font-sans text-brand-textSecondary mb-8">
          Parece que te perdiste. Pero no pasa nada — desde acá llegás a cualquier lado.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-brand-gold text-brand-bgPrimary font-sans font-semibold text-sm py-3 px-6 rounded-md hover:bg-brand-goldDark transition-colors duration-200"
        >
          Volver al inicio
          <ArrowRightIcon className="w-4 h-4" />
        </Link>
      </div>
    </div>
  )
}
