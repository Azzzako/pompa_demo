import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PRODUCTS, money } from '../data'
import ProductCard from './ProductCard'
import { ArrowLink, Kicker, Reveal } from './ui'
import type { Variant } from '../variant'

const FILTERS = ['Todo', 'Jordan', 'Nike', 'Dandy', 'Coleccion'] as const

export default function Catalog({ variant }: { variant: Variant }) {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('Todo')
  const list = active === 'Todo' ? PRODUCTS : PRODUCTS.filter((p) => p.brand === active)
  const street = variant === 'street'

  const display = street
    ? 'font-brut text-[clamp(2.4rem,6.4vw,4.6rem)] leading-[0.9] tracking-[0.005em] uppercase'
    : 'font-display text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.94] tracking-[-0.02em] uppercase'

  const filterBtn = (f: (typeof FILTERS)[number]) =>
    street
      ? `relative border-2 border-ink px-4 py-2 font-brut text-[11px] tracking-[0.12em] uppercase transition-colors ${
          active === f ? 'bg-deep text-on-deep' : 'bg-transparent text-ink hover:bg-deep/15'
        }`
      : `relative text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors ${
          active === f ? 'text-ink' : 'text-ink/40 hover:text-ink/70'
        }`

  return (
    <section
      id="catalogo"
      className={`mx-auto max-w-[1500px] px-5 py-20 md:px-8 md:py-28 ${
        street ? 'street-grain relative' : ''
      }`}
    >
      {street && <div className="street-hatch pointer-events-none absolute inset-0" />}

      <div className="relative flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="w-full max-w-xl">
          <Kicker index="01" theme={variant}>
            Catálogo
          </Kicker>
          <h2 className={`mt-6 ${display}`}>
            Lo que se
            <br />
            <span className="text-pink">viene</span> ahora
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="lg:text-right">
          <p className="max-w-xs text-sm leading-relaxed text-ink/55">
            Stock limitado, una pieza por cliente. Todos nuestros pares incluyen
            verificación de autenticidad y caja original.
          </p>
          <ArrowLink href="#mystery" theme={variant} className="mt-5">
            Y el mystery box
          </ArrowLink>
        </Reveal>
      </div>

      <Reveal
        delay={0.08}
        className={
          street
            ? 'relative mt-12 flex flex-wrap items-center gap-3 border-2 border-ink bg-deep/40 px-4 py-4'
            : 'mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-line py-4'
        }
      >
        {FILTERS.map((f) => (
          <button key={f} onClick={() => setActive(f)} className={filterBtn(f)}>
            {f}
            {active === f && !street && (
              <motion.span
                layoutId="filter-underline"
                transition={{ type: 'spring', damping: 30, stiffness: 340 }}
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-pink"
              />
            )}
          </button>
        ))}
        <span
          className={
            street
              ? 'ml-auto font-brut text-[11px] tracking-[0.12em] text-ink/60 uppercase'
              : 'ml-auto font-mono text-[11px] text-ink/35'
          }
        >
          {list.length} resultados
        </span>
      </Reveal>

      <motion.div
        layout
        className={`relative mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6 ${
          street ? 'gap-y-12' : ''
        }`}
      >
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div key={p.id} layout exit={{ opacity: 0, scale: 0.95 }}>
              <ProductCard p={p} i={i} variant={variant} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal
        delay={0.15}
        className={
          street
            ? 'relative mt-16 flex flex-col items-start gap-4 border-2 border-ink bg-pink px-8 py-10 md:flex-row md:items-center md:justify-between'
            : 'mt-16 flex flex-col items-start gap-4 border border-line bg-mist px-8 py-10 md:flex-row md:items-center md:justify-between'
        }
      >
        <div>
          <p className={`${display} text-2xl md:text-3xl`}>
            ¿No ves lo que buscas?{' '}
            <span className={street ? 'text-ink' : 'text-pink'}>
              Cada día subimos más pares.
            </span>
          </p>
          <p className="mt-2 max-w-lg text-sm text-ink/55">
            Aplicamos {money(7000)} de crédito automático si el par que quieres se agota antes
            de que completes tu orden.
          </p>
        </div>
        <button
          onClick={() => setActive('Todo')}
          className={
            street
              ? 'shrink-0 border-2 border-ink bg-deep px-7 py-3.5 font-brut text-[12px] tracking-[0.1em] text-on-deep uppercase transition-colors hover:bg-transparent hover:text-ink'
              : 'shrink-0 border border-ink px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-deep hover:text-on-deep'
          }
        >
          Ver todo
        </button>
      </Reveal>
    </section>
  )
}
