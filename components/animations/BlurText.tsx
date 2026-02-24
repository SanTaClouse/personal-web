'use client'

/**
 * BlurText — animación word-by-word con blur + fade, scroll-triggered.
 * Adaptado de ReactBits (https://reactbits.dev/text-animations/blur-text)
 * usando motion/react (Framer Motion v12).
 */

import { motion } from 'motion/react'
import { useEffect, useRef, useState, useMemo, ElementType } from 'react'

interface AnimationStep {
  filter?: string
  opacity?: number
  y?: number
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type AnyTarget = Record<string, any>

interface BlurTextProps {
  text: string
  delay?: number
  className?: string
  animateBy?: 'words' | 'chars'
  direction?: 'top' | 'bottom'
  threshold?: number
  rootMargin?: string
  animationFrom?: AnimationStep
  animationTo?: AnimationStep[]
  easing?: (t: number) => number
  onAnimationComplete?: () => void
  stepDuration?: number
  // Permite renderizar como h1, h2, span, div, etc.
  as?: ElementType
}

function buildKeyframes(from: AnimationStep, steps: AnimationStep[]): AnyTarget {
  const keys = new Set([...Object.keys(from), ...steps.flatMap((s) => Object.keys(s))])
  const keyframes: AnyTarget = {}
  keys.forEach((k) => {
    keyframes[k] = [(from as AnyTarget)[k], ...steps.map((s) => (s as AnyTarget)[k])]
  })
  return keyframes
}

export default function BlurText({
  text = '',
  delay = 150,
  className = '',
  animateBy = 'words',
  direction = 'bottom',
  threshold = 0.1,
  rootMargin = '0px',
  animationFrom,
  animationTo,
  easing = (t) => t,
  onAnimationComplete,
  stepDuration = 0.4,
  as: Tag = 'p',
}: BlurTextProps) {
  const elements = animateBy === 'words' ? text.split(' ') : text.split('')
  const [inView, setInView] = useState(false)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ref = useRef<any>(null)

  useEffect(() => {
    if (!ref.current) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(ref.current)
        }
      },
      { threshold, rootMargin }
    )
    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold, rootMargin])

  const defaultFrom = useMemo(
    () =>
      direction === 'top'
        ? { filter: 'blur(10px)', opacity: 0, y: -40 }
        : { filter: 'blur(10px)', opacity: 0, y: 40 },
    [direction]
  )

  const defaultTo = useMemo(
    () => [
      { filter: 'blur(4px)', opacity: 0.5, y: direction === 'top' ? 4 : -4 },
      { filter: 'blur(0px)', opacity: 1, y: 0 },
    ],
    [direction]
  )

  const fromSnapshot = animationFrom ?? defaultFrom
  const toSnapshots = animationTo ?? defaultTo

  const stepCount = toSnapshots.length + 1
  const totalDuration = stepDuration * (stepCount - 1)
  const times = Array.from({ length: stepCount }, (_, i) =>
    stepCount === 1 ? 0 : i / (stepCount - 1)
  )

  return (
    <Tag ref={ref} className={className} style={{ display: 'flex', flexWrap: 'wrap' }}>
      {elements.map((segment, index) => {
        const animateKeyframes = buildKeyframes(fromSnapshot, toSnapshots)
        return (
          <motion.span
            className="inline-block will-change-[transform,filter,opacity]"
            key={index}
            initial={fromSnapshot as AnyTarget}
            animate={(inView ? animateKeyframes : fromSnapshot) as AnyTarget}
            transition={{
              duration: totalDuration,
              times,
              delay: (index * delay) / 1000,
              ease: easing,
            }}
            onAnimationComplete={
              index === elements.length - 1 ? onAnimationComplete : undefined
            }
          >
            {segment === ' ' ? '\u00A0' : segment}
            {animateBy === 'words' && index < elements.length - 1 && '\u00A0'}
          </motion.span>
        )
      })}
    </Tag>
  )
}
