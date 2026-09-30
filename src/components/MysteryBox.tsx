import { motion } from 'motion/react'
import { Check } from 'lucide-react'
import { BOXES, money } from '../data'
import { Reveal } from './ui'

export default function MysteryBox() {
  return (
    <section id="mystery" className="bg-pink text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8 md:py-28">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <Reveal className="w-full max-w-xl">
            <div className="flex items-center gap-3">
              <span className="font-mono text-[11px] tracking-[0.18em] text-white/60">/02</span>
              <span className="text-[11px] font-semibold tracking-[0.26em] uppercase">
                Mystery Box
              </span>
              <span className="h-px flex-1 bg-white/30" />
            </div>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.94] tracking-[-0.02em] uppercase">
              Elige tu
              <br />
              riesgo
            </h2>
          </Reveal>

          <Reveal delay={0.12} className="lg:text-right">
            <p className="max-w-sm text-[15px] leading-relaxed text-white/85">
              Tres niveles. Todos los boxes incluyen un par 100% autenticado, verificado por
              nuestro equipo antes de empacarse.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-px border border-white/30 bg-white/30 md:grid-cols-3">
          {BOXES.map((b, i) => (
            <motion.div
              key={b.tier}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col bg-pink p-8 transition-colors duration-300 hover:bg-ink"
            >
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-semibold tracking-[0.24em] uppercase">
                  Box {b.tier}
                </span>
                {i === 1 && (
                  <span className="bg-white px-2.5 py-1 text-[9px] font-semibold tracking-[0.18em] text-ink uppercase">
                    Más vendido
                  </span>
                )}
              </div>

              <div className="mt-8 font-display text-5xl tracking-tight">{money(b.price)}</div>
              <p className="mt-2 text-sm text-white/85">{b.items}</p>
              <p className="mt-4 text-[13px] leading-relaxed text-white/70">{b.copy}</p>

              <ul className="mt-8 flex-1 space-y-3 border-t border-white/30 pt-6">
                {['Par 100% autenticado', 'Caja y empaques originales', 'Sticker del club Pompa'].map(
                  (f) => (
                    <li key={f} className="flex items-center gap-2.5 text-[13px] text-white/90">
                      <Check size={14} /> {f}
                    </li>
                  ),
                )}
              </ul>

              <button className="mt-8 shrink-0 border border-white py-3.5 text-[12px] font-semibold tracking-[0.14em] uppercase transition-colors hover:bg-white hover:text-ink">
                Armar mi box
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
