import { motion } from 'motion/react'
import { EVENTS, STATS } from '../../data'
import { Counter } from '../../components/ui'

const TIMELINE = [
  {
    year: '2016',
    title: 'Una mesa y una caja',
    copy: 'Arrancamos en Insurgentes Norte con un par de Shoe Palace y la obsesión de encontrar el modelo correcto.',
  },
  {
    year: '2019',
    title: 'Mesa de autenticidad',
    copy: 'Montamos un área de revisión interna. Si una pieza no la aprueba, no se vende. Sin excepciones.',
  },
  {
    year: '2022',
    title: 'Tienda física',
    copy: 'Abrimos el local definitivo en Santa María la Ribera con la selección completa de streetwear.',
  },
  {
    year: '2026',
    title: '+120 mil pares',
    copy: 'Más de 120,000 pares entregados en México, con el mismo estándar de siempre.',
  },
]

export default function StreetBarrio() {
  return (
    <section id="barrio" className="street-grain relative border-b-[3px] border-ink bg-paper text-ink">
      <div className="street-hatch pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-center gap-4">
          <span className="border-2 border-ink bg-pink px-2 py-0.5 font-brut text-[11px] text-on-accent">
            04
          </span>
          <span className="street-rule flex-1" />
          <span className="font-brut text-[13px] tracking-[0.16em] uppercase">El Barrio</span>
        </div>

        <h2 className="mt-6 max-w-4xl font-brut text-[clamp(2rem,6vw,4.4rem)] leading-[0.88] uppercase">
          Diez años en <span className="text-pink">la misma esquina</span>
        </h2>

        <div className="mt-14 grid gap-12 lg:grid-cols-[1fr_1fr] lg:gap-16">
          {/* timeline */}
          <div>
            {TIMELINE.map((t, i) => (
              <motion.div
                key={t.year}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex gap-6 border-l-2 border-ink/25 pb-10 pl-6 last:pb-0"
              >
                <span className="font-brut text-2xl text-pink">{t.year}</span>
                <div>
                  <h3 className="font-brut text-[17px] tracking-[0.02em] uppercase">{t.title}</h3>
                  <p className="mt-2 max-w-sm text-[13.5px] leading-relaxed text-ink/60">
                    {t.copy}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* foto + stats */}
          <div>
            <div className="street-tape border-2 border-ink bg-paper p-3 pb-5">
              <div className="aspect-4/3 w-full overflow-hidden bg-mist">
                <img
                  src="/life-3.jpg"
                  alt="Interior de la tienda Pompa Street"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 font-brut text-[12px] tracking-[0.06em] uppercase">
                El local, Insurgentes Norte 110
              </p>
            </div>

            <div className="mt-8 grid grid-cols-2 gap-3">
              {STATS.map((s, i) => (
                <div
                  key={s.label}
                  className={`border-2 border-ink p-4 ${i % 2 ? 'bg-flame text-on-accent' : 'bg-paper'}`}
                >
                  <div className="font-display text-3xl tracking-tight">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 font-brut text-[10px] tracking-[0.1em] uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* eventos */}
        <div className="mt-20">
          <h3 className="border-b-2 border-ink pb-3 font-brut text-[15px] tracking-[0.14em] uppercase">
            Nos vas a ver ahí
          </h3>

          {EVENTS.map((e, i) => (
            <motion.a
              key={e.name}
              href="#barrio"
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.45, delay: i * 0.07 }}
              className="group flex items-center justify-between gap-6 border-b-2 border-ink/25 py-5 transition-colors hover:bg-pink hover:text-on-accent"
            >
              <span className="flex items-baseline gap-5">
                <span className="font-brut text-[12px] text-pink group-hover:text-on-accent">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="font-brut text-xl uppercase md:text-2xl">{e.name}</span>
              </span>
              <span className="flex items-center gap-5 text-[12px] opacity-70">
                <span className="hidden sm:block">{e.city}</span>
                <span className="border-2 border-current px-2.5 py-0.5 font-brut tracking-[0.06em] uppercase">
                  {e.date}
                </span>
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
