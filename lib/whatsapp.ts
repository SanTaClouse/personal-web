/**
 * Genera el link de WhatsApp con número y mensaje predeterminado.
 * El número viene de la variable de entorno NEXT_PUBLIC_WHATSAPP_NUMBER.
 */
export function whatsappLink(message?: string): string {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '543424639480'
  const defaultMessage =
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || 'Hola Santiago, quiero consultarte sobre'
  const text = encodeURIComponent(message || defaultMessage)
  return `https://wa.me/${number}?text=${text}`
}

export const WA_GRABACIONES = whatsappLink('Hola Santiago, quiero sumarle vientos a mi música.')
export const WA_TRANSCRIPCIONES = whatsappLink('Hola Santiago, quiero transcribir mi canción para SADAIC.')
export const WA_CLASES = whatsappLink('Hola Santiago, quiero consultar disponibilidad para clases de piano.')
export const WA_DESARROLLO = whatsappLink('Hola Santiago, quiero consultarte sobre desarrollo web.')
export const WA_GENERAL = whatsappLink('Hola Santiago, quiero hacerte una consulta.')
