import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PRODUCTS, money, type Product } from '../../data'

const FILTERS = ['Todo', 'Jordan', 'Nike', 'Dandy', 'Coleccion'] as const

function Row({ p, i }: { p: Product; i: number }) {
  const isSticker = p.sizes.length === 1 && p.sizes[0] === 0
  return (
    <motion.article
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.55, delay: (i % 3) * 0.06 }}
      className="group"
    >
      <div className="relative aspect-4/5 overflow-hidden bg-mist">
        <img
          src={p.img}
          alt={p.name}
          loading="lazy"
          className="h-full w-full object-contain p-10 transition-transform duration-700 group-hover:scale-[1.04]"
        />
        {p.badge && (
          <span className="absolute top-4 left-4 text-[10px] tracking-[0.18em] text-pink uppercase">
            {p.badge}
          </span>
        )}
      </div>

      <div className="mt-4">
        <div className="flex items-baseline justify-between gap-4">
          <h3 className="text-[13.5px] leading-snug text-ink/80">{p.name}</h3>
          <span className="shrink-0 text-[13.5px]">{money(p.price)}</span>
        </div>

        <div className="mt-3 flex items-center justify-between gap-4 border-t border-line pt-3">
          <span className="text-[10px] tracking-[0.2em] text-ink/35 uppercase">{p.brand}</span>
          <span className="text-[11px] text-ink/40">
            {isSticker ? '1 unidad' : `${p.sizes.length} tallas`}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function DarkCatalog() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('Todo')
  const list = active === 'Todo' ? PRODUCTS : PRODUCTS.filter((p) => p.brand === active)

  return (
    <section id="catalogo" className="mx-auto max-w-[1560px] px-6 py-20 md:px-10 md:py-28">
      <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-20">
        {/* columna fija de filtros */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="text-[11px] tracking-[0.24em] text-ink/35 uppercase">Catálogo</div>
          <h2 className="mt-5 font-display text-3xl leading-[1.05] tracking-[-0.02em] uppercase">
            Piezas
            <br />
            <span className="text-pink">disponibles</span>
          </h2>

          <div className="mt-10 flex flex-col gap-px border-t border-line">
            {FILTERS.map((f) => {
              const n = f === 'Todo' ? PRODUCTS.length : PRODUCTS.filter((p) => p.brand === f).length
              return (
                <button
                  key={f}
                  onClick={() => setActive(f)}
                  className="group flex items-baseline justify-between border-b border-line py-3 text-left transition-colors"
                >
                  <span
                    className={`text-[13px] transition-colors ${
                      active === f ? 'text-ink' : 'text-ink/40 group-hover:text-ink/70'
                    }`}
                  >
                    {f}
                  </span>
                  <span className="font-mono text-[10px] text-ink/25">{n}</span>
                </button>
              )
            })}
          </div>

          <p className="mt-8 max-w-[200px] text-[12px] leading-relaxed text-ink/40">
            Una pieza por cliente. Si el par se agota antes de completar el pago, aplicamos
            crédito automático.
          </p>
        </div>

        {/* grid */}
        <div>
          <div className="flex items-baseline justify-between border-b border-line pb-4">
            <span className="text-[11px] tracking-[0.2em] text-ink/35 uppercase">
              {active === 'Todo' ? 'Todo' : active}
            </span>
            <span className="font-mono text-[11px] text-ink/30">
              {String(list.length).padStart(2, '0')} artículos
            </span>
          </div>

          <motion.div
            layout
            className="mt-10 grid grid-cols-2 gap-x-8 gap-y-14 md:grid-cols-3"
          >
            <AnimatePresence mode="popLayout">
              {list.map((p, i) => (
                <motion.div key={p.id} layout exit={{ opacity: 0 }}>
                  <Row p={p} i={i} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
