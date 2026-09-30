import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'

/* ---------- Button ---------- */
type BtnProps = {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ink' | 'light'
  className?: string
  onClick?: () => void
}

export function Button({ children, variant = 'primary', className = '', onClick }: BtnProps) {
  const base =
    'inline-flex items-center justify-center gap-2 border px-8 py-4 text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors duration-200 cursor-pointer'
  const styles = {
    primary: 'border-pink bg-pink text-white hover:border-ink hover:bg-ink',
    ink: 'border-ink bg-ink text-white hover:border-pink hover:bg-pink',
    outline: 'border-ink/25 bg-transparent text-ink hover:border-ink hover:bg-ink hover:text-white',
    light: 'border-white/40 bg-transparent text-white hover:border-white hover:bg-white hover:text-ink',
  }[variant]

  return (
    <button onClick={onClick} className={`${base} ${styles} ${className}`}>
      {children}
    </button>
  )
}

/* ---------- Section label ---------- */
export function Kicker({ children, index }: { children: React.ReactNode; index?: string }) {
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
}: {
  items: string[]
  reverse?: boolean
  className?: string
  separator?: string
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

  const track = Array.from({ length: copies }).map((_, k) => (
    <div key={k} ref={k === 0 ? copyRef : undefined} className="flex shrink-0 items-center">
      {items.map((it, i) => (
        <span key={i} className="flex items-center gap-10 pr-10 whitespace-nowrap">
          <span>{it}</span>
          <span className="text-pink">{separator}</span>
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
      viewport={{ once: true, margin: '-70px' }}
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
  className = '',
}: {
  children: React.ReactNode
  href: string
  className?: string
}) {
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
