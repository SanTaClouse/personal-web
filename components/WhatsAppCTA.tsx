import { WhatsappIcon } from '@/components/icons'

type Variant = 'green' | 'gold'

interface WhatsAppCTAProps {
  href: string
  children: string
  variant?: Variant
  className?: string
}

const variants: Record<Variant, string> = {
  green:
    'bg-[#25D366] text-white hover:opacity-90 transition-opacity duration-200',
  gold:
    'bg-brand-gold text-brand-bgPrimary hover:bg-brand-goldDark transition-colors duration-200',
}

export default function WhatsAppCTA({
  href,
  children,
  variant = 'green',
  className = '',
}: WhatsAppCTAProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 font-sans font-semibold text-sm py-3.5 px-7 rounded-md ${variants[variant]} ${className}`}
    >
      <WhatsappIcon className="w-5 h-5" />
      {children}
    </a>
  )
}
