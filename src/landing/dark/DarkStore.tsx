import { motion } from 'motion/react'
import { ArrowUpRight, MapPin } from 'lucide-react'

export default function DarkStore() {
  return (
    <section id="tienda" className="border-t border-line">
      <div className="mx-auto max-w-[1560px] px-6 py-20 md:px-10 md:py-28">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div className="grid grid-cols-2 gap-px bg-line">
            {[
              { src: '/life-1.jpg', alt: 'Cliente Pompa Street con su Mystery Box' },
              { src: '/life-2.jpg', alt: 'Selección de sneakers en la tienda' },
            ].map((img, i) => (
              <div key={img.src} className={`bg-paper p-0 ${i === 1 ? 'mt-10' : ''}`}>
                <div className="aspect-3/4 overflow-hidden bg-mist">
                  <motion.img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    initial={{ scale: 1.06 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.12 }}
                    className="h-full w-full object-cover opacity-90"
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="flex flex-col justify-center">
            <div className="text-[11px] tracking-[0.24em] text-ink/35 uppercase">Tienda</div>
            <h2 className="mt-5 font-display text-[clamp(1.8rem,4.4vw,3.4rem)] leading-[1.04] tracking-[-0.025em] uppercase">
              Insurgentes
              <br />
              <span className="text-pink">Norte 110</span>
            </h2>

            <p className="mt-8 max-w-md text-[15px] leading-relaxed text-ink/55">
              El único punto físico de Pompa Street. Sneakers, gorras y la selección de
              streetwear más amplia de la zona, sin intermediarios y al mismo precio que en
              línea.
            </p>

            <dl className="mt-12 grid grid-cols-2 gap-y-8 border-t border-line pt-10">
              {[
                ['Colonia', 'Santa María la Ribera'],
                ['Horario', 'Lun–Sáb · 11:00 a 20:00'],
                ['Teléfono', '+52 56 3384 8036'],
                ['Métodos', 'Tarjeta, transferencia, efectivo'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] tracking-[0.2em] text-ink/35 uppercase">{k}</dt>
                  <dd className="mt-2 text-[14px] text-ink/75">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-12 flex flex-wrap gap-3">
              <a
                href="#tienda"
                className="inline-flex items-center gap-2 bg-ink px-8 py-4 text-[12px] tracking-[0.14em] text-paper uppercase transition-colors hover:bg-pink"
              >
                Cómo llegar <MapPin size={15} strokeWidth={1.5} />
              </a>
              <a
                href="#catalogo"
                className="inline-flex items-center gap-2 border border-line px-8 py-4 text-[12px] tracking-[0.14em] uppercase transition-colors hover:border-ink"
              >
                Ver catálogo <ArrowUpRight size={15} strokeWidth={1.5} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
