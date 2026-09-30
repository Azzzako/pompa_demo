import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PRODUCTS, money } from '../data'
import ProductCard from './ProductCard'
import { ArrowLink, Kicker, Reveal } from './ui'

const FILTERS = ['Todo', 'Jordan', 'Nike', 'Dandy', 'Coleccion'] as const

export default function Catalog() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('Todo')
  const list = active === 'Todo' ? PRODUCTS : PRODUCTS.filter((p) => p.brand === active)

  return (
    <section id="catalogo" className="mx-auto max-w-[1500px] px-5 py-20 md:px-8 md:py-28">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
        <Reveal className="w-full max-w-xl">
          <Kicker index="01">Catálogo</Kicker>
          <h2 className="mt-6 font-display text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.94] tracking-[-0.02em] uppercase">
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
          <ArrowLink href="#mystery" className="mt-5">
            Y el mystery box
          </ArrowLink>
        </Reveal>
      </div>

      <Reveal delay={0.08} className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-line py-4">
        {FILTERS.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`relative text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors ${
              active === f ? 'text-ink' : 'text-ink/40 hover:text-ink/70'
            }`}
          >
            {f}
            {active === f && (
              <motion.span
                layoutId="filter-underline"
                transition={{ type: 'spring', damping: 30, stiffness: 340 }}
                className="absolute -bottom-1 left-0 h-[2px] w-full bg-pink"
              />
            )}
          </button>
        ))}
        <span className="ml-auto font-mono text-[11px] text-ink/35">
          {list.length} resultados
        </span>
      </Reveal>

      <motion.div
        layout
        className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6"
      >
        <AnimatePresence mode="popLayout">
          {list.map((p, i) => (
            <motion.div key={p.id} layout exit={{ opacity: 0, scale: 0.95 }}>
              <ProductCard p={p} i={i} />
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      <Reveal
        delay={0.15}
        className="mt-16 flex flex-col items-start gap-4 border border-line bg-mist px-8 py-10 md:flex-row md:items-center md:justify-between"
      >
        <div>
          <p className="font-display text-2xl tracking-tight uppercase md:text-3xl">
            ¿No ves lo que buscas?{' '}
            <span className="text-pink">Cada día subimos más pares.</span>
          </p>
          <p className="mt-2 max-w-lg text-sm text-ink/50">
            Aplicamos {money(7000)} de crédito automático si el par que quieres se agota antes
            de que completes tu orden.
          </p>
        </div>
        <button
          onClick={() => setActive('Todo')}
          className="shrink-0 border border-ink px-7 py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-ink hover:text-white"
        >
          Ver todo
        </button>
      </Reveal>
    </section>
  )
}
