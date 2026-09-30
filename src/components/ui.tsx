import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import type { Variant } from '../variant'

/* ---------- Button ---------- */
type BtnProps = {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ink' | 'light'
  theme?: Variant
  className?: string
  onClick?: () => void
}

const BTN_BASE =
  'inline-flex items-center justify-center gap-2 border px-8 py-4 text-[12px] font-semibold tracking-[0.14em] uppercase transition-all duration-200 cursor-pointer'

const BTN_STYLES: Record<Variant, Record<NonNullable<BtnProps['variant']>, string>> = {
  light: {
    primary: 'border-pink bg-pink text-on-accent hover:border-ink hover:bg-deep hover:text-on-deep',
    ink: 'border-ink bg-deep text-on-deep hover:border-pink hover:bg-pink hover:text-on-accent',
    outline: 'border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-deep hover:text-on-deep',
    light: 'border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink',
  },
  dark: {
    primary: 'border-pink bg-pink text-on-accent hover:border-ink hover:bg-deep hover:text-on-deep',
    ink: 'border-ink bg-ink text-on-deep hover:border-pink hover:bg-pink hover:text-on-accent',
    outline: 'border-ink/30 bg-transparent text-ink hover:border-ink hover:bg-deep hover:text-on-deep',
    light: 'border-ink/30 bg-transparent text-ink hover:border-ink hover:bg-deep hover:text-on-deep',
  },
  street: {
    primary:
      'border-2 border-ink bg-pink text-on-accent font-brut tracking-[0.08em] shadow-[5px_5px_0_0_var(--color-ink)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_var(--color-ink)]',
    ink: 'border-2 border-ink bg-deep text-on-deep font-brut tracking-[0.08em] shadow-[5px_5px_0_0_var(--color-pink)] hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_var(--color-pink)]',
    outline:
      'border-2 border-ink bg-transparent text-ink font-brut tracking-[0.08em] hover:bg-deep hover:text-on-deep',
    light: 'border-2 border-ink bg-transparent text-ink font-brut tracking-[0.08em] hover:bg-deep hover:text-on-deep',
  },
}

export function Button({
  children,
  variant = 'primary',
  theme = 'light',
  className = '',
  onClick,
}: BtnProps) {
  return (
    <button onClick={onClick} className={`${BTN_BASE} ${BTN_STYLES[theme][variant]} ${className}`}>
      {children}
    </button>
  )
}

/* ---------- Section label ---------- */
export function Kicker({
  children,
  index,
  theme = 'light',
}: {
  children: React.ReactNode
  index?: string
  theme?: Variant
}) {
  if (theme === 'street') {
    return (
      <div className="flex items-center gap-3">
        {index && (
          <span className="border-2 border-ink bg-deep px-2 py-0.5 font-brut text-[11px] tracking-[0.1em] text-on-deep">
            {index}
          </span>
        )}
        <span className="street-rule flex-1" />
        <span className="font-brut text-[13px] tracking-[0.16em] uppercase">{children}</span>
      </div>
    )
  }

  return (
    <div className="flex items-center gap-3 text-ink">
      {index && <span className="font-mono text-[11px] tracking-[0.18em] text-ink/40">/{index}</span>}
      <span className="text-[11px] font-semibold tracking-[0.26em] uppercase">{children}</span>
      <span className="h-px flex-1 bg-line" />
    </div>
  )
}

/* ---------- Marquee ---------- */
const BASE = 16

export function Marquee({
  items,
  reverse = false,
  className = '',
  separator = '◆',
  theme = 'light',
}: {
  items: string[]
  reverse?: boolean
  className?: string
  separator?: string
  theme?: Variant
}) {
  const [copies, setCopies] = useState(2)
  const copyRef = useRef<HTMLDivElement>(null)
  const key = items.join('|') + className

  /* Repite el bloque hasta que una copia cubra el viewport. Con un número par de
     copias, translateX(-50%) equivale a un múltiplo exacto del ancho de una copia:
     el loop cierra sin hueco ni salto. La duración escala con las copias para que
     la velocidad en px/s quede constante. */
  useEffect(() => {
    const el = copyRef.current
    if (!el) return
    const update = () => {
      const w = el.getBoundingClientRect().width
      if (!w) return
      const need = Math.ceil((window.innerWidth * 1.5) / w)
      setCopies(Math.max(2, need + (need % 2)))
    }
    update()
    const ro = new ResizeObserver(update)
    ro.observe(el)
    window.addEventListener('resize', update)
    return () => {
      ro.disconnect()
      window.removeEventListener('resize', update)
    }
  }, [key])

  const sep = theme === 'street' ? '✱' : separator
  const sepClass = theme === 'street' ? 'text-flame' : 'text-pink'

  const track = Array.from({ length: copies }).map((_, k) => (
    <div key={k} ref={k === 0 ? copyRef : undefined} className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-10 pr-10 whitespace-nowrap">
          <span>{it}</span>
          <span className={sepClass}>{sep}</span>
        </span>
      ))}
    </div>
  ))

  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div
        className={`flex w-max ${reverse ? 'animate-marquee-rev' : 'animate-marquee'}`}
        style={{ animationDuration: `${copies * BASE}s` }}
      >
        {track}
      </div>
    </div>
  )
}

/* ---------- Reveal on scroll ---------- */
export function Reveal({
  children,
  delay = 0,
  y = 24,
  className = '',
}: {
  children: React.ReactNode
  delay?: number
  y?: number
  className?: string
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

/* ---------- Counter ---------- */
export function Counter({ to, suffix = '' }: { to: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true })
  const [val, setVal] = useState(0)

  useEffect(() => {
    if (!inView) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVal(to)
      return
    }
    let raf = 0
    const start = performance.now()
    const dur = 1400
    const tick = (t: number) => {
      const p = Math.min((t - start) / dur, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setVal(Math.round(to * eased))
      if (p < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, to])

  return (
    <span ref={ref}>
      {val}
      {suffix}
    </span>
  )
}

/* ---------- Link con flecha ---------- */
export function ArrowLink({
  children,
  href,
  theme = 'light',
  className = '',
}: {
  children: React.ReactNode
  href: string
  theme?: Variant
  className?: string
}) {
  if (theme === 'street') {
    return (
      <a
        href={href}
        className={`group inline-flex items-center gap-2 border-2 border-ink px-4 py-2 font-brut text-[12px] tracking-[0.1em] uppercase transition-colors hover:bg-deep hover:text-on-deep ${className}`}
      >
        {children}
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </a>
    )
  }

  return (
    <a
      href={href}
      className={`group inline-flex items-center gap-2 border-b border-ink/25 pb-1 text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors hover:border-pink hover:text-pink ${className}`}
    >
      {children}
      <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
    </a>
  )
}
