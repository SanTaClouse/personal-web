'use client'

/**
 * FadeIn — wrapper scroll-triggered con fade + slide sutil.
 * Envuelve cualquier contenido y lo anima cuando entra al viewport.
 */

import { motion } from 'motion/react'
import { useEffect, useRef, useState, ReactNode } from 'react'

interface FadeInProps {
  children: ReactNode
  className?: string
  delay?: number
  duration?: number
  threshold?: number
  yOffset?: number
}

export default function FadeIn({
  children,
  className = '',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  yOffset = 20,
}: FadeInProps) {
  const [inView, setInView] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current!)
        }
      },
      { threshold }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: yOffset }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: yOffset }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  )
}
