'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { InstagramIcon, MenuIcon, XIcon, WhatsappIcon } from '@/components/icons'
import { WA_GENERAL } from '@/lib/whatsapp'
import { INSTAGRAM_URL, INSTAGRAM_HANDLE } from '@/lib/social'

const navLinks = [
  { href: '/musico', label: 'Músico' },
  { href: '/desarrollador', label: 'Desarrollador' },
  { href: '/#contacto', label: 'Contacto' },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Cerrar menú al hacer click fuera
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [isMenuOpen])

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-brand-bgPrimary/95 backdrop-blur-md border-b border-brand-border shadow-lg'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-content mx-auto px-5 md:px-8 lg:px-12">
          <div className="flex items-center justify-between h-16">

            {/* Logo */}
            <Link
              href="/"
              className="font-playfair text-xl font-bold text-brand-textPrimary hover:text-brand-gold transition-colors duration-200"
              onClick={() => setIsMenuOpen(false)}
            >
              Santiago Samuel
            </Link>

            {/* Nav desktop */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-sans text-brand-textSecondary hover:text-brand-textPrimary transition-colors duration-150"
                >
                  {link.label}
                </Link>
              ))}

              {/* Instagram */}
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm font-sans text-brand-gold hover:text-brand-textPrimary transition-colors duration-150"
                aria-label="Instagram de Santiago Samuel"
              >
                <InstagramIcon className="w-4 h-4" />
                <span>{INSTAGRAM_HANDLE}</span>
              </a>
            </nav>

            {/* Mobile: Instagram + Hamburger */}
            <div className="flex md:hidden items-center gap-3">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-gold"
                aria-label="Instagram"
              >
                <InstagramIcon className="w-5 h-5" />
              </a>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-brand-textPrimary p-1"
                aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
                aria-expanded={isMenuOpen}
              >
                {isMenuOpen ? (
                  <XIcon className="w-6 h-6" />
                ) : (
                  <MenuIcon className="w-6 h-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Menú mobile */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-all duration-300 ${
          isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        {/* Overlay oscuro */}
        <div
          className="absolute inset-0 bg-brand-bgDeep/80"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Panel */}
        <div
          className={`absolute top-0 right-0 h-full w-72 bg-brand-bgSecondary border-l border-brand-border flex flex-col transition-transform duration-300 ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          {/* Header del panel */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-brand-border">
            <span className="font-playfair text-brand-textPrimary font-bold">Menú</span>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="text-brand-textSecondary hover:text-brand-textPrimary"
              aria-label="Cerrar menú"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Links */}
          <nav className="flex flex-col gap-2 p-6 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-lg font-sans text-brand-textSecondary hover:text-brand-textPrimary py-3 border-b border-brand-border/50 transition-colors duration-150"
              >
                {link.label}
              </Link>
            ))}

            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-lg font-sans text-brand-gold py-3 border-b border-brand-border/50"
            >
              <InstagramIcon className="w-5 h-5" />
              {INSTAGRAM_HANDLE}
            </a>
          </nav>

          {/* WhatsApp CTA */}
          <div className="p-6">
            <a
              href={WA_GENERAL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full bg-[#25D366] text-white font-sans font-semibold text-sm py-3 px-6 rounded-full transition-opacity duration-200 hover:opacity-90"
            >
              <WhatsappIcon className="w-5 h-5" />
              Escribime por WhatsApp
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
