import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Button, Marquee } from './ui'
import { money } from '../data'

const PICKS = [
  {
    img: '/products/shoe-3.webp',
    name: "Levi's x Air Jordan 3 Retro SP 'Black Denim'",
    price: 7000,
    tag: 'Drop de la semana',
  },
  {
    img: '/products/shoe-22.webp',
    name: "Dunk Low Retro 'Red Green'",
    price: 11000,
    tag: 'Nuevo',
  },
  {
    img: '/products/shoe-6.webp',
    name: 'Fragment x Union LA x Air Jordan 1 SP',
    price: 18500,
    tag: 'Últimas piezas',
  },
  {
    img: '/products/shoe-15.webp',
    name: 'Dandy Hats "Canelo Pound for Pound"',
    price: 2600,
    tag: 'Streetwear',
  },
]

const TICKER = ['Jordan', 'Nike', 'Adidas', 'Dandy', 'Barbas', 'Panini', 'Vintage', 'Tribute']

export default function Hero() {
  const [active, setActive] = useState(0)
  const pick = PICKS[active]

  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-[1500px] items-stretch gap-0 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        {/* ---- Copy ---- */}
        <div className="flex flex-col justify-center border-line py-14 lg:py-20 lg:pr-14">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-70" />
              <span className="relative h-2 w-2 rounded-full bg-pink" />
            </span>
            <span className="text-[11px] font-semibold tracking-[0.24em] uppercase">
              Drop en vivo · Martes 20:00
            </span>
          </motion.div>

          <h1 className="mt-6 font-display text-[clamp(2.6rem,7.4vw,5.4rem)] leading-[0.92] tracking-[-0.02em] uppercase">
            {['El fuego de', 'México'].map((line, i) => (
              <span key={line} className="block overflow-hidden pb-1">
                <motion.span
                  initial={{ y: '108%' }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.8, delay: 0.08 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
                  className="block"
                >
                  {line}
                </motion.span>
              </span>
            ))}
            <span className="block overflow-hidden pb-2">
              <motion.span
                initial={{ y: '108%' }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: 0.26, ease: [0.22, 1, 0.36, 1] }}
                className="block text-pink"
              >
                al mundo
              </motion.span>
            </span>
          </h1>

          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
            Diez años trayendo los pares más pesados del mundo. Cada sneaker pasa por
            verificación de autenticidad antes de llegar a tus manos.
          </p>

          <div className="mt-9 flex flex-wrap gap-3">
            <Button onClick={() => document.querySelector('#catalogo')?.scrollIntoView()}>
              Ver catálogo <ArrowUpRight size={15} />
            </Button>
            <Button
              variant="outline"
              onClick={() => document.querySelector('#mystery')?.scrollIntoView()}
            >
              Mystery Box
            </Button>
          </div>

          <div className="mt-10 flex items-center gap-2.5 border-t border-line pt-6 text-[12px] text-ink/55">
            <ShieldCheck size={16} className="text-pink" />
            Autenticidad garantizada o te devolvemos el 100%
          </div>
        </div>

        {/* ---- Showcase ---- */}
        <div className="relative border-t border-line py-10 lg:border-t-0 lg:border-l lg:pl-14">
          <AnimatePresence mode="wait">
            <motion.div
              key={pick.img}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative aspect-4/5 w-full overflow-hidden bg-mist sm:aspect-square lg:aspect-4/5"
            >
              <motion.img
                src={pick.img}
                alt={pick.name}
                initial={{ scale: 1.04 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0 h-full w-full object-contain p-10 md:p-14"
              />
              <span className="absolute top-5 left-5 bg-ink px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-white uppercase">
                {pick.tag}
              </span>
            </motion.div>
          </AnimatePresence>

          <div className="mt-4 border-t border-line pt-4">
            <div className="flex items-start justify-between gap-4">
              <div className="min-w-0">
                <p className="truncate text-[14px] font-medium">{pick.name}</p>
                <p className="mt-1 font-display text-2xl tracking-tight">{money(pick.price)}</p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center bg-pink text-white transition-colors hover:bg-ink">
                <ArrowUpRight size={18} />
              </span>
            </div>

            <div className="mt-5 grid grid-cols-4 gap-2">
              {PICKS.map((p, i) => (
                <button
                  key={p.img}
                  onClick={() => setActive(i)}
                  aria-label={`Ver ${p.name}`}
                  aria-pressed={i === active}
                  className={`relative aspect-square overflow-hidden border transition-colors ${
                    i === active
                      ? 'border-ink'
                      : 'border-line opacity-55 hover:border-ink/40 hover:opacity-90'
                  }`}
                >
                  <img
                    src={p.img}
                    alt=""
                    loading="lazy"
                    className="h-full w-full bg-mist object-contain p-1.5"
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-line py-4">
        <Marquee
          items={TICKER}
          className="font-display text-xl tracking-[0.06em] text-ink/30 uppercase md:text-2xl"
        />
      </div>
    </section>
  )
}
