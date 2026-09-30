import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { PRODUCTS, money, type Product } from '../../data'

const FILTERS = ['Todo', 'Jordan', 'Nike', 'Dandy', 'Coleccion'] as const

/* Cartel: imagen con marco, nombre en barra negra y etiqueta de precio. */
function Poster({ p, i }: { p: Product; i: number }) {
  const isSticker = p.sizes.length === 1 && p.sizes[0] === 0
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: (i % 4) * 0.06 }}
      className="group relative flex flex-col"
    >
      <div className="relative border-2 border-ink bg-mist street-hatch">
        {p.badge && (
          <span className="street-sticker absolute -top-2.5 left-2 z-10 !px-2 !py-0.5 text-[10px]">
            {p.badge}
          </span>
        )}

        <div className="aspect-4/5 w-full overflow-hidden">
          <img
            src={p.img}
            alt={p.name}
            loading="lazy"
            className="h-full w-full bg-paper object-contain p-7 transition-transform duration-500 group-hover:scale-105"
          />
        </div>

        {/* etiqueta de precio */}
        <span className="absolute right-2 bottom-2 rotate-[-4deg] border-2 border-ink bg-flame px-3 py-1 font-brut text-[13px] text-on-accent">
          {money(p.price)}
        </span>
      </div>

      <div className="mt-3 flex items-stretch border-2 border-t-0 border-ink">
        <div className="flex-1 bg-paper px-3 py-2.5">
          <h3 className="line-clamp-2 font-brut text-[12px] leading-tight text-ink uppercase">
            {p.name}
          </h3>
        </div>
        <div className="flex w-20 flex-col items-center justify-center border-l-2 border-ink bg-paper px-1 text-center">
          <span className="font-brut text-[9px] tracking-[0.1em] text-pink uppercase">
            {p.brand}
          </span>
          <span className="mt-0.5 text-[9px] text-ink/45">
            {isSticker ? '1 pza' : `${p.sizes.length} tallas`}
          </span>
        </div>
      </div>
    </motion.article>
  )
}

export default function StreetCatalog() {
  const [active, setActive] = useState<(typeof FILTERS)[number]>('Todo')
  const list = active === 'Todo' ? PRODUCTS : PRODUCTS.filter((p) => p.brand === active)

  return (
    <section id="catalogo" className="street-grain relative border-b-[3px] border-ink bg-mist">
      <div className="street-hatch pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-center gap-4">
          <span className="border-2 border-ink bg-paper px-2 py-0.5 font-brut text-[11px] text-ink">
            02
          </span>
          <span className="street-rule flex-1" />
          <span className="font-brut text-[13px] tracking-[0.16em] uppercase">Catálogo</span>
        </div>

        <h2 className="mt-6 max-w-3xl font-brut text-[clamp(2rem,6vw,4.4rem)] leading-[0.88] uppercase">
          Los <span className="text-pink">precios</span> están arriba
        </h2>

        <div className="mt-10 flex flex-wrap items-center gap-2 border-2 border-ink bg-paper p-3">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`border-2 border-ink px-4 py-2 font-brut text-[11px] tracking-[0.1em] uppercase transition-colors ${
                active === f ? 'bg-paper text-ink' : 'bg-paper text-ink hover:bg-paper/15'
              }`}
            >
              {f}
            </button>
          ))}
          <span className="ml-auto px-2 font-brut text-[11px] tracking-[0.1em] text-ink/50 uppercase">
            {list.length} resultados
          </span>
        </div>

        <motion.div
          layout
          className="mt-10 grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-6"
        >
          <AnimatePresence mode="popLayout">
            {list.map((p, i) => (
              <motion.div key={p.id} layout exit={{ opacity: 0 }}>
                <Poster p={p} i={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}
