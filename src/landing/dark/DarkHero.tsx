import { motion } from 'motion/react'
import { money } from '../../data'

const PICKS = [
  { img: '/products/shoe-3.webp', name: "AJ3 'Black Denim'", price: 7000 },
  { img: '/products/shoe-6.webp', name: 'AJ1 Fragment Union', price: 18500 },
  { img: '/products/shoe-10.webp', name: "AM95 'Triple Black'", price: 7500 },
  { img: '/products/shoe-22.webp', name: "Dunk Low 'Red Green'", price: 11000 },
]

export default function DarkHero() {
  return (
    <section id="top" className="mx-auto max-w-[1560px] px-6 pt-32 pb-20 md:px-10 md:pt-44 md:pb-32">
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="text-[11px] tracking-[0.3em] text-ink/40 uppercase"
      >
        Ciudad de México — desde 2016
      </motion.p>

      <h1 className="mt-10 font-display text-[clamp(2.4rem,8.2vw,7.6rem)] leading-[0.94] tracking-[-0.035em] uppercase">
        {['Sneakers', 'verificadas', 'antes', 'de salir'].map((line, i) => (
          <span key={line} className="block overflow-hidden pb-[0.06em]">
            <motion.span
              initial={{ y: '108%' }}
              animate={{ y: 0 }}
              transition={{ duration: 0.9, delay: 0.06 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`block ${i === 2 ? 'text-pink' : ''}`}
            >
              {line}
            </motion.span>
          </span>
        ))}
      </h1>

      <div className="mt-14 grid gap-10 border-t border-line pt-10 md:grid-cols-2 md:gap-20">
        <p className="max-w-md text-[15px] leading-relaxed text-ink/55">
          Una operación de compra, venta y verificación con estándar de autenticidad. Cada par
          pasa por revisión interna antes de empacarse; si no lo aprueba, no sale de bodega.
        </p>

        <div className="flex flex-wrap items-start gap-10 md:justify-end">
          <div>
            <div className="text-[11px] tracking-[0.2em] text-ink/35 uppercase">Drop</div>
            <div className="mt-2 text-[14px]">Martes · 20:00</div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.2em] text-ink/35 uppercase">Envío</div>
            <div className="mt-2 text-[14px]">Gratis desde $5,000</div>
          </div>
          <div>
            <div className="text-[11px] tracking-[0.2em] text-ink/35 uppercase">Clientes</div>
            <div className="mt-2 text-[14px]">+120,000</div>
          </div>
        </div>
      </div>

      {/* fila de producto, sin cromo de tarjeta */}
      <div className="mt-20 grid grid-cols-2 gap-px border border-line bg-line md:grid-cols-4">
        {PICKS.map((p, i) => (
          <motion.a
            key={p.img}
            href="#catalogo"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: i * 0.08 }}
            className="group relative bg-paper p-6 md:p-8"
          >
            <div className="aspect-square w-full overflow-hidden bg-mist">
              <img
                src={p.img}
                alt={p.name}
                loading="lazy"
                className="h-full w-full object-contain p-6 transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div className="mt-5 flex items-baseline justify-between gap-3">
              <span className="truncate text-[13px] text-ink/70">{p.name}</span>
              <span className="shrink-0 text-[13px]">{money(p.price)}</span>
            </div>
            <span className="mt-4 block h-px w-0 bg-pink transition-all duration-500 group-hover:w-full" />
          </motion.a>
        ))}
      </div>
    </section>
  )
}
