import { MapPin } from 'lucide-react'

export default function StreetLocal() {
  return (
    <section id="tienda" className="street-grain relative border-b-[3px] border-ink bg-mist">
      <div className="street-hatch pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-16 md:px-8 md:py-24">
        <div className="flex flex-wrap items-center gap-4">
          <span className="border-2 border-ink bg-paper px-2 py-0.5 font-brut text-[11px] text-ink">
            05
          </span>
          <span className="street-rule flex-1" />
          <span className="font-brut text-[13px] tracking-[0.16em] uppercase">El Local</span>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12">
          {/* polaroids */}
          <div className="grid grid-cols-2 gap-4">
            <div className="street-tape border-2 border-ink bg-paper p-3 pb-6">
              <div className="aspect-3/4 overflow-hidden bg-paper">
                <img
                  src="/life-1.jpg"
                  alt="Cliente Pompa Street con su Mystery Box"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 font-brut text-[12px] uppercase">Caja sorpresa, entregada</p>
            </div>

            <div className="street-tape mt-10 border-2 border-ink bg-paper p-3 pb-6">
              <div className="aspect-3/4 overflow-hidden bg-paper">
                <img
                  src="/life-2.jpg"
                  alt="Selección de sneakers en la tienda"
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <p className="mt-3 font-brut text-[12px] uppercase">El wall de la tienda</p>
            </div>
          </div>

          {/* datos */}
          <div>
            <h2 className="font-brut text-[clamp(2rem,6vw,4.4rem)] leading-[0.88] uppercase">
              Baja al <span className="text-pink">local</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/70">
              Somos el único Pompa Street físico. Sneakers, gorras y la selección de streetwear
              más amplia de la zona, al mismo precio que en línea y sin intermediarios.
            </p>

            <div className="mt-8 border-2 border-ink bg-paper p-5">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-pink" />
                <span className="font-brut text-[12px] tracking-[0.12em] uppercase">
                  Abierto ahora
                </span>
              </div>
              <p className="mt-3 font-brut text-2xl uppercase">Insurgentes Norte 110</p>
              <p className="mt-1 text-[13px] text-ink/55">Sta. María la Ribera, CDMX</p>

              <dl className="mt-6 grid grid-cols-2 gap-5 border-t-2 border-dashed border-ink/30 pt-5 text-[13px]">
                <div>
                  <dt className="font-brut text-[10px] tracking-[0.16em] text-ink/45 uppercase">
                    Horario
                  </dt>
                  <dd className="mt-1">Lun–Sáb · 11:00 a 20:00</dd>
                </div>
                <div>
                  <dt className="font-brut text-[10px] tracking-[0.16em] text-ink/45 uppercase">
                    Teléfono
                  </dt>
                  <dd className="mt-1">+52 56 3384 8036</dd>
                </div>
              </dl>
            </div>

            <a
              href="#tienda"
              className="mt-6 inline-flex items-center gap-2 border-2 border-ink bg-pink px-8 py-4 font-brut text-[13px] tracking-[0.08em] text-on-accent uppercase shadow-[5px_5px_0_0_var(--color-ink)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-[2px_2px_0_0_var(--color-ink)]"
            >
              Cómo llegar <MapPin size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
