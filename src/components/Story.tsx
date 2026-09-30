import { motion } from 'motion/react'
import { EVENTS, STATS } from '../data'
import { Counter, Kicker, Reveal } from './ui'

export default function Story() {
  return (
    <section
      id="historia"
      className="mx-auto max-w-[1500px] px-5 py-20 md:px-8 md:py-28"
    >
      <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <Reveal>
            <Kicker index="03">Nuestra historia</Kicker>
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.94] tracking-[-0.02em] uppercase">
              Diez años
              <br />
              <span className="text-pink">sin aflojar</span>
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mt-6 text-[15px] leading-relaxed text-ink/60">
              Empezamos en 2016 con una mesa, una caja y la obsesión de encontrar el par
              correcto. Hoy somos el destino de referencia en CDMX para sneakers de alta gama
              y streetwear: más de 120 mil pares entregados, siempre con el mismo estándar.
            </p>
          </Reveal>
          <Reveal delay={0.22}>
            <p className="mt-4 text-[15px] leading-relaxed text-ink/60">
              Antes de salir de bodega, cada pieza pasa por nuestro equipo de autenticación.
              Simple: si no pasa la prueba, no se vende. Punto.
            </p>
          </Reveal>

          <Reveal delay={0.3} className="mt-10">
            <div className="grid grid-cols-2 border-t border-line sm:grid-cols-4">
              {STATS.map((s) => (
                <div key={s.label} className="border-b border-line py-6 pr-4 sm:border-b-0">
                  <div className="font-display text-3xl tracking-tight md:text-4xl">
                    <Counter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="mt-1.5 text-[10px] leading-snug tracking-[0.16em] text-ink/45 uppercase">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <div className="overflow-hidden border border-line">
            <div className="aspect-4/5 w-full overflow-hidden bg-mist">
              <motion.img
                src="/life-3.jpg"
                alt="Interior de la tienda Pompa Street con gorras y hoodies"
                loading="lazy"
                initial={{ scale: 1.08 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <p className="mt-4 font-mono text-[11px] tracking-[0.18em] text-ink/40 uppercase">
            Fundada 2016 · Insurgentes Norte 110
          </p>
        </Reveal>
      </div>

      {/* Events */}
      <div id="eventos" className="mt-24 md:mt-32">
        <Reveal>
          <Kicker index="04">Eventos</Kicker>
          <h2 className="mt-6 font-display text-[clamp(1.9rem,4.4vw,3.2rem)] tracking-[-0.02em] uppercase">
            Nos vas a <span className="text-pink">ver ahí</span>
          </h2>
        </Reveal>

        <div className="mt-10 border-t border-line">
          {EVENTS.map((e, i) => (
            <motion.a
              key={e.name}
              href="#eventos"
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group flex items-center justify-between gap-6 border-b border-line py-7 transition-colors hover:bg-mist"
            >
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-[11px] text-ink/35">0{i + 1}</span>
                <span className="font-display text-xl tracking-tight uppercase transition-transform duration-300 group-hover:translate-x-2 sm:text-2xl">
                  {e.name}
                </span>
              </div>
              <div className="flex items-center gap-5 text-xs text-ink/50">
                <span className="hidden sm:block">{e.city}</span>
                <span className="border border-line px-3 py-1 whitespace-nowrap">{e.date}</span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  )
}
