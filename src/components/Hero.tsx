import { useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { ArrowUpRight, ShieldCheck } from 'lucide-react'
import { Button, Marquee } from './ui'
import { money } from '../data'
import type { Variant } from '../variant'

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

const H1 = ['El fuego de', 'México', 'al mundo']

export default function Hero({ variant }: { variant: Variant }) {
  const [active, setActive] = useState(0)
  const pick = PICKS[active]
  const street = variant === 'street'
  const dark = variant === 'dark'

  /* ---------- titular ---------- */
  const h1Size = street
    ? 'text-[clamp(2.7rem,9vw,6.2rem)] leading-[0.86]'
    : dark
      ? 'text-[clamp(2.5rem,6.6vw,4.9rem)] leading-[0.95]'
      : 'text-[clamp(2.6rem,7.4vw,5.4rem)] leading-[0.92]'

  const h1Class = `${street ? 'font-brut uppercase' : 'font-display uppercase tracking-[-0.02em]'} ${h1Size}`

  const lines = H1.map((line, i) => {
    const accent = i === 2
    const outlined = street && i === 1
    return (
      <span key={line} className="block overflow-hidden pb-1">
        <motion.span
          initial={{ y: '108%' }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8, delay: 0.08 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
          className={`block ${accent ? 'text-pink' : ''} ${outlined ? 'text-stroke' : ''}`}
        >
          {line}
        </motion.span>
      </span>
    )
  })

  /* ---------- copy ---------- */
  const copy = (
    <>
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-pink opacity-70" />
            <span className="relative h-2 w-2 rounded-full bg-pink" />
          </span>
          <span
            className={
              street
                ? 'font-brut text-[12px] tracking-[0.14em] uppercase'
                : 'text-[11px] font-semibold tracking-[0.24em] uppercase'
            }
          >
            Drop en vivo · Martes 20:00
          </span>
        </div>
        {street && <span className="street-sticker shrink-0">CDMX 2016</span>}
      </div>

      <h1 className={`mt-6 ${h1Class}`}>{lines}</h1>

      <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
        Diez años trayendo los pares más pesados del mundo. Cada sneaker pasa por
        verificación de autenticidad antes de llegar a tus manos.
      </p>

      <div className="mt-9 flex flex-wrap gap-3">
        <Button
          theme={variant}
          onClick={() => document.querySelector('#catalogo')?.scrollIntoView()}
        >
          Ver catálogo <ArrowUpRight size={15} />
        </Button>
        <Button
          variant="outline"
          theme={variant}
          onClick={() => document.querySelector('#mystery')?.scrollIntoView()}
        >
          Mystery Box
        </Button>
      </div>

      <div
        className={`mt-10 flex items-center gap-2.5 border-t border-line pt-6 text-[12px] text-ink/55 ${
          street ? 'font-brut tracking-[0.06em] uppercase' : ''
        }`}
      >
        <ShieldCheck size={16} className="text-pink" />
        Autenticidad garantizada o te devolvemos el 100%
      </div>
    </>
  )

  /* ---------- showcase ---------- */
  const thumb = (i: number) =>
    street
      ? `relative aspect-square overflow-hidden border-2 border-ink transition-transform ${
          i === active ? 'bg-flame -translate-y-1' : 'opacity-60 hover:opacity-100'
        }`
      : `relative aspect-square overflow-hidden border transition-colors ${
          i === active ? 'border-ink' : 'border-line opacity-55 hover:border-ink/40 hover:opacity-90'
        }`

  const showcase = (
    <>
      <AnimatePresence mode="wait">
        <motion.div
          key={pick.img}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className={`relative w-full overflow-hidden ${
            street
              ? 'street-hatch aspect-square border-2 border-ink'
              : 'aspect-4/5 w-full overflow-hidden bg-mist sm:aspect-square lg:aspect-4/5'
          }`}
        >
          <motion.img
            src={pick.img}
            alt={pick.name}
            initial={{ scale: 1.04 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="absolute inset-0 h-full w-full object-contain p-10 md:p-14"
          />
          <span
            className={
              street
                ? 'street-sticker absolute top-4 left-4'
                : 'absolute top-5 left-5 bg-deep px-3 py-1.5 text-[10px] font-semibold tracking-[0.2em] text-on-deep uppercase'
            }
          >
            {pick.tag}
          </span>
        </motion.div>
      </AnimatePresence>

      <div className={`mt-4 border-t border-line pt-4 ${street ? 'border-t-0 pt-6' : ''}`}>
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <p
              className={`truncate ${street ? 'font-brut text-[15px] uppercase' : 'text-[14px] font-medium'}`}
            >
              {pick.name}
            </p>
            <p className="mt-1 font-display text-2xl tracking-tight">{money(pick.price)}</p>
          </div>
          <span
            className={`grid h-11 w-11 shrink-0 place-items-center transition-colors ${
              street
                ? 'border-2 border-ink bg-flame text-on-accent'
                : 'bg-pink text-on-accent hover:bg-deep hover:text-on-deep'
            }`}
          >
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
              className={thumb(i)}
            >
              <img src={p.img} alt="" loading="lazy" className="h-full w-full object-contain p-1.5" />
            </button>
          ))}
        </div>
      </div>
    </>
  )

  /* ---------- layout ---------- */
  if (street) {
    return (
      <section id="top" className="street-grain relative border-b-[3px] border-ink">
        <div className="street-hatch pointer-events-none absolute inset-0" />
        <div className="relative mx-auto max-w-[1500px] px-5 py-14 md:px-8 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div className="relative">
              {copy}
            </div>
            <div className="street-tape">{showcase}</div>
          </div>
        </div>
        <div className="relative border-t-[3px] border-ink bg-deep py-3">
          <Marquee
            items={TICKER}
            theme="street"
            className="font-brut text-xl tracking-[0.06em] text-on-deep uppercase md:text-2xl"
          />
        </div>
      </section>
    )
  }

  return (
    <section id="top" className="border-b border-line">
      <div className="mx-auto grid max-w-[1500px] items-stretch gap-0 px-5 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        <div className="flex flex-col justify-center border-line py-14 lg:py-20 lg:pr-14">
          {copy}
        </div>

        <div
          className={`relative border-line py-10 lg:border-t-0 lg:border-l lg:pl-14 ${
            dark ? 'border-line' : ''
          }`}
        >
          {showcase}
        </div>
      </div>

      <div className="border-t border-line py-4">
        <Marquee
          items={TICKER}
          theme={variant}
          className={`${dark ? 'font-display text-xl tracking-[0.02em] text-ink/25 uppercase md:text-2xl' : 'font-display text-xl tracking-[0.06em] text-ink/30 uppercase md:text-2xl'}`}
        />
      </div>
    </section>
  )
}
