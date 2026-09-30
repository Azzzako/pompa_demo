import { motion } from 'motion/react'
import { PRODUCTS, money } from '../../data'

const FLYERS = [
  {
    img: '/products/shoe-6.webp',
    kicker: 'Volante 01',
    name: 'Fragment x Union LA x Air Jordan 1 SP',
    price: 18500,
    note: 'Una sola pieza por cliente',
  },
  {
    img: '/products/shoe-14.webp',
    kicker: 'Volante 02',
    name: 'Dandy Hats "World Champion Boxing"',
    price: 3000,
    note: 'Gorra de edición limitada',
  },
  {
    img: '/products/shoe-21.webp',
    kicker: 'Volante 03',
    name: "Dunk Low Retro 'Blue Stardust'",
    price: 7000,
    note: 'Envío gratis desde $5,000',
  },
]

/* Muro de volantes: posters pegados con cinta, cada uno con su precio/tag. */
export default function StreetFlyers() {
  return (
    <section id="volantes" className="street-grain relative border-b-[3px] border-ink">
      <div className="street-hatch pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-center gap-4">
          <span className="border-2 border-ink bg-paper px-2 py-0.5 font-brut text-[11px] text-ink">
            01
          </span>
          <span className="street-rule flex-1" />
          <span className="font-brut text-[13px] tracking-[0.16em] uppercase">Volantes</span>
        </div>

        <h2 className="mt-6 max-w-3xl font-brut text-[clamp(2rem,6vw,4.4rem)] leading-[0.88] uppercase">
          Lo que <span className="text-pink">volanteamos</span> esta semana
        </h2>

        <div className="mt-12 grid gap-8 md:grid-cols-3 md:gap-6">
          {FLYERS.map((f, i) => (
            <motion.article
              key={f.img}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`street-tape border-2 border-ink bg-paper p-4 pt-6 transition-transform duration-300 hover:rotate-0 ${
                i === 0 ? 'md:rotate-[-1.5deg]' : i === 1 ? 'md:rotate-[1.5deg]' : 'md:rotate-[-0.8deg]'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <span className="font-brut text-[11px] tracking-[0.16em] text-pink uppercase">
                  {f.kicker}
                </span>
                <span className="font-brut text-[11px] tracking-[0.12em] text-ink/40 uppercase">
                  CDMX
                </span>
              </div>

              <div className="mt-4 aspect-3/4 w-full overflow-hidden bg-mist">
                <img
                  src={f.img}
                  alt={f.name}
                  loading="lazy"
                  className="h-full w-full object-contain p-5"
                />
              </div>

              <h3 className="mt-4 font-brut text-[17px] leading-[0.95] tracking-[0.01em] uppercase">
                {f.name}
              </h3>
              <p className="mt-2 text-[12px] text-ink/50">{f.note}</p>

              <div className="mt-4 flex items-center justify-between border-t-2 border-ink pt-3">
                <span className="font-brut text-2xl text-pink">{money(f.price)}</span>
                <a
                  href="#catalogo"
                  className="border-2 border-ink bg-paper px-4 py-2 font-brut text-[11px] tracking-[0.08em] text-ink uppercase transition-colors hover:bg-pink hover:text-on-accent"
                >
                  Quiero
                </a>
              </div>
            </motion.article>
          ))}
        </div>

        {/* cintillo de precios */}
        <div className="mt-14 border-y-[3px] border-ink py-3">
          <p className="text-center font-brut text-[13px] tracking-[0.1em] uppercase md:text-[15px]">
            <span className="text-pink">{PRODUCTS.length} pares en stock</span> —todo verificado,
            todo con caja original, todo enviado desde Insurgentes Norte
          </p>
        </div>
      </div>
    </section>
  )
}
