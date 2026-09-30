import { motion } from 'motion/react'
import { BOXES, money } from '../../data'

const PERKS = ['Par 100% autenticado', 'Caja y empaques originales', 'Sticker del club Pompa']

/* Tickets con muesca perforada lateral, no tarjetas. */
export default function StreetTickets() {
  return (
    <section id="mystery" className="street-grain relative border-b-[3px] border-ink">
      <div className="street-hatch pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-center gap-4">
          <span className="border-2 border-ink bg-pink px-2 py-0.5 font-brut text-[11px] text-on-accent">
            03
          </span>
          <span className="street-rule flex-1" />
          <span className="font-brut text-[13px] tracking-[0.16em] uppercase">Mystery Box</span>
        </div>

        <h2 className="mt-6 max-w-3xl font-brut text-[clamp(2rem,6vw,4.4rem)] leading-[0.88] uppercase">
          Saca tu <span className="text-pink">ticket</span> a ciegas
        </h2>
        <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-ink/70">
          Tres niveles de riesgo. Todos los tickets incluyen un par 100% autenticado, revisado
          antes de empacarse.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {BOXES.map((b, i) => (
            <motion.div
              key={b.tier}
              initial={{ opacity: 0, y: 26 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`relative border-2 border-ink p-6 pt-8 ${
                i === 1 ? 'bg-flame text-on-accent' : 'bg-paper'
              }`}
            >
              {/* muesca de boleto */}
              <span
                className={`absolute -left-[7px] top-1/2 h-3 w-3 -translate-y-1/2 border-2 border-ink bg-paper ${
                  i === 1 ? 'bg-mist' : 'bg-paper'
                }`}
              />
              <span
                className={`absolute -right-[7px] top-1/2 h-3 w-3 -translate-y-1/2 border-2 border-ink ${
                  i === 1 ? 'bg-mist' : 'bg-paper'
                }`}
              />

              <div className="flex items-center justify-between">
                <span className="font-brut text-[13px] tracking-[0.12em] uppercase">
                  Ticket {b.tier}
                </span>
                <span className="font-brut text-[11px] tracking-[0.1em] opacity-60 uppercase">
                  No. {String(i + 1).padStart(3, '0')}
                </span>
              </div>

              <div className="mt-6 font-display text-5xl tracking-tight">{money(b.price)}</div>
              <p className="mt-2 text-[13px] opacity-80">{b.items}</p>

              <div className="mt-6 border-t-2 border-dashed border-ink/40 pt-5">
                <p className="text-[13px] leading-relaxed opacity-75">{b.copy}</p>
                <ul className="mt-4 space-y-1.5">
                  {PERKS.map((p) => (
                    <li key={p} className="text-[12px] opacity-70">
                      — {p}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-6 w-full border-2 border-ink bg-paper py-3 font-brut text-[12px] tracking-[0.1em] text-ink uppercase transition-colors hover:bg-transparent">
                Sacar ticket
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
