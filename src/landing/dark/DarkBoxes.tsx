import { motion } from 'motion/react'
import { BOXES, money } from '../../data'

const PERKS = ['Par 100% autenticado', 'Caja y empaques originales', 'Sticker del club Pompa']

export default function DarkBoxes() {
  return (
    <section id="mystery" className="border-y border-line bg-mist">
      <div className="mx-auto max-w-[1560px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <div className="text-[11px] tracking-[0.24em] text-ink/35 uppercase">Mystery Box</div>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,4vw,3rem)] leading-[1.05] tracking-[-0.02em] uppercase">
              Tres niveles,{' '}
              <span className="text-pink">un mismo estándar</span>
            </h2>
          </div>
          <p className="max-w-sm text-[14px] leading-relaxed text-ink/50">
            Todos los boxes incluyen un par 100% autenticado, revisado por el equipo antes de
            empacarse.
          </p>
        </div>

        {/* tabla de precios, sin tarjetas */}
        <div className="mt-14 border-t border-line">
          {BOXES.map((b, i) => (
            <motion.div
              key={b.tier}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group grid items-baseline gap-4 border-b border-line py-8 md:grid-cols-[140px_1fr_200px_120px] md:gap-10"
            >
              <div className="text-[11px] tracking-[0.22em] text-ink/40 uppercase">
                Box {b.tier}
              </div>

              <div>
                <div className="font-display text-2xl tracking-tight md:text-3xl">
                  {money(b.price)}
                </div>
                <p className="mt-2 max-w-md text-[13px] leading-relaxed text-ink/45">{b.copy}</p>
              </div>

              <ul className="space-y-1.5">
                {PERKS.map((p) => (
                  <li key={p} className="text-[12px] text-ink/40">
                    {p}
                  </li>
                ))}
              </ul>

              <a
                href="#mystery"
                className="justify-self-start border border-line px-6 py-3 text-center text-[11px] tracking-[0.18em] uppercase transition-colors hover:border-ink hover:bg-ink hover:text-paper md:justify-self-end"
              >
                Armar
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
