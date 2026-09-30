import { motion } from 'motion/react'
import { money } from '../../data'

const FEATURED = [
  { img: '/products/shoe-8.webp', name: 'Union LA x Air Jordan 1 SP', price: 12000, tag: 'Drop' },
  { img: '/products/shoe-15.webp', name: 'Dandy Hats "Canelo Pound for Pound"', price: 2600, tag: 'Barrio' },
  { img: '/products/shoe-18.webp', name: "Jordan 4 Retro 'Cave Stone'", price: 6500, tag: 'Nuevo' },
]

export default function StreetHero() {
  return (
    <section id="top" className="street-grain relative border-b-[3px] border-ink">
      <div className="street-hatch pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-12 md:px-8 md:py-16">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.15fr] lg:items-center lg:gap-12">
          {/* bloque izquierdo */}
          <div>
            <div className="flex flex-wrap items-center gap-3">
              <span className="street-sticker">Desde 2016</span>
              <span className="border-2 border-ink px-3 py-1 font-brut text-[11px] tracking-[0.12em] uppercase">
                Sta. María la Ribera
              </span>
            </div>

            <h1 className="mt-7 font-brut text-[clamp(2.6rem,9.5vw,6.4rem)] leading-[0.85] tracking-[0.005em] uppercase">
              <span className="block">El fuego</span>
              <span className="block text-stroke">de México</span>
              <span className="block text-pink">al mundo</span>
            </h1>

            <p className="mt-7 max-w-md text-[15px] leading-relaxed text-ink/70">
              Sneakers, gorras y streetwear verificados. Todo lo que sale de aquí pasó antes por
              la mesa de autenticación. Sin rodeos y sin falsificaciones.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#catalogo"
                className="border-2 border-ink bg-pink px-8 py-4 font-brut text-[13px] tracking-[0.08em] text-on-accent uppercase shadow-[5px_5px_0_0_var(--color-ink)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_var(--color-ink)]"
              >
                Ver catálogo
              </a>
              <a
                href="#mystery"
                className="border-2 border-ink px-8 py-4 font-brut text-[13px] tracking-[0.08em] uppercase transition-colors hover:bg-paper hover:text-ink"
              >
                Mystery Box
              </a>
            </div>
          </div>

          {/* bloque derecho: polaroids + ficha */}
          <div className="flex min-w-0 flex-col gap-5">
            <div className="flex snap-x snap-mandatory gap-3 overflow-x-auto pb-2 sm:grid sm:grid-cols-3 sm:overflow-visible sm:pb-0 md:gap-4">
              {FEATURED.map((f, i) => (
                <motion.a
                  key={f.img}
                  href="#catalogo"
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 + i * 0.1 }}
                  className={`street-tape relative w-[62vw] shrink-0 snap-start border-2 border-ink bg-mist p-2.5 pb-3 sm:w-auto sm:shrink ${
                    i === 1 ? 'md:mt-8' : ''
                  }`}
                >
                  <span className="street-sticker absolute -top-3 left-2 !px-2 !py-0.5 text-[10px]">
                    {f.tag}
                  </span>
                  <div className="aspect-4/5 w-full overflow-hidden bg-paper">
                    <img
                      src={f.img}
                      alt={f.name}
                      loading="lazy"
                      className="h-full w-full object-contain p-2"
                    />
                  </div>
                  <p className="mt-2 line-clamp-2 font-brut text-[11px] leading-tight tracking-[0.01em] uppercase">
                    {f.name}
                  </p>
                  <p className="mt-0.5 text-[12px] text-pink">{money(f.price)}</p>
                </motion.a>
              ))}
            </div>

            {/* ficha del local */}
            <div className="relative border-2 border-ink bg-flame p-5 text-on-accent">
              <span className="absolute -top-3 right-3 border-2 border-ink bg-paper px-2 py-0.5 font-brut text-[10px] tracking-[0.1em] text-ink uppercase">
                Ficha
              </span>
              <div className="grid grid-cols-2 gap-4 text-[13px]">
                <div>
                  <div className="font-brut text-[10px] tracking-[0.18em] uppercase">Dirección</div>
                  <div className="mt-1">Insurgentes Norte 110</div>
                </div>
                <div>
                  <div className="font-brut text-[10px] tracking-[0.18em] uppercase">Horario</div>
                  <div className="mt-1">Lun–Sáb · 11:00 a 20:00</div>
                </div>
                <div>
                  <div className="font-brut text-[10px] tracking-[0.18em] uppercase">Drop</div>
                  <div className="mt-1">Martes · 20:00</div>
                </div>
                <div>
                  <div className="font-brut text-[10px] tracking-[0.18em] uppercase">Teléfono</div>
                  <div className="mt-1">+52 56 3384 8036</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
