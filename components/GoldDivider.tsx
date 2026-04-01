export default function GoldDivider({ centered = false }: { centered?: boolean }) {
  return (
    <span
      className={`block w-14 h-0.5 bg-brand-gold mt-3 mb-0 ${centered ? 'mx-auto' : ''}`}
    />
  )
}
