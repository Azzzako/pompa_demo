import { motion } from 'motion/react'
import { EVENTS, STATS } from '../../data'
import { Counter } from '../../components/ui'

export default function DarkStory() {
  return (
    <section id="nosotros" className="mx-auto max-w-[1560px] px-6 py-20 md:px-10 md:py-28">
      <div className="text-[11px] tracking-[0.24em] text-ink/35 uppercase">Nosotros</div>

      <div className="mt-8 grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <h2 className="font-display text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[1.04] tracking-[-0.025em] uppercase">
            Diez años
            <br />
            con el mismo
            <br />
            <span className="text-pink">estándar</span>
          </h2>

          <div className="mt-10 max-w-lg space-y-5 text-[15px] leading-relaxed text-ink/55">
            <p>
              Empezamos en 2016 con una mesa, una caja y la obsesión de encontrar el par
              correcto. Hoy somos un destino de referencia en CDMX para sneakers de alta gama y
              streetwear.
            </p>
            <p>
              Antes de salir de bodega, cada pieza pasa por revisión interna de autenticidad.
              Si no la aprueba, no se vende.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px border-t border-line pt-10 sm:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="pr-4">
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  <Counter to={s.value} suffix={s.suffix} />
                </div>
                <div className="mt-2 text-[10px] leading-snug tracking-[0.16em] text-ink/35 uppercase">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="relative">
          <div className="overflow-hidden bg-mist">
            <div className="aspect-4/5">
              <motion.img
                src="/life-3.jpg"
                alt="Interior de la tienda Pompa Street"
                loading="lazy"
                initial={{ scale: 1.06 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full object-cover opacity-90"
              />
            </div>
          </div>
          <p className="mt-4 text-[11px] tracking-[0.18em] text-ink/30 uppercase">
            Insurgentes Norte 110 · Santa María la Ribera
          </p>
        </div>
      </div>

      {/* eventos como tabla */}
      <div className="mt-24">
        <div className="flex items-baseline justify-between border-b border-line pb-4">
          <h3 className="text-[11px] tracking-[0.24em] text-ink/35 uppercase">Eventos</h3>
          <span className="text-[11px] text-ink/30">2026</span>
        </div>

        {EVENTS.map((e, i) => (
          <motion.a
            key={e.name}
            href="#nosotros"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: i * 0.06 }}
            className="group flex items-center justify-between gap-6 border-b border-line py-7"
          >
            <span className="flex items-baseline gap-6">
              <span className="font-mono text-[11px] text-ink/25">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="font-display text-lg tracking-tight uppercase transition-transform duration-500 group-hover:translate-x-2 md:text-xl">
                {e.name}
              </span>
            </span>
            <span className="flex items-center gap-8 text-[12px] text-ink/40">
              <span className="hidden sm:block">{e.city}</span>
              <span>{e.date}</span>
            </span>
          </motion.a>
        ))}
      </div>
    </section>
  )
}
