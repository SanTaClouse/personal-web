import Link from 'next/link'

export interface Crumb {
  label: string
  href?: string
}

interface BreadcrumbsProps {
  items: Crumb[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: item.label,
      ...(item.href ? { item: `${baseUrl}${item.href}` } : {}),
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-sm font-sans mb-6">
        {items.map((crumb, i) => {
          const isLast = i === items.length - 1
          return (
            <span key={crumb.label} className="flex items-center gap-1.5">
              {i > 0 && <span className="text-brand-textSecondary/50">/</span>}
              {isLast || !crumb.href ? (
                <span className="text-brand-textSecondary">{crumb.label}</span>
              ) : (
                <Link
                  href={crumb.href}
                  className="text-brand-textSecondary hover:text-brand-textPrimary transition-colors duration-150"
                >
                  {crumb.label}
                </Link>
              )}
            </span>
          )
        })}
      </nav>
    </>
  )
}
