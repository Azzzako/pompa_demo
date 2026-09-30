import { motion } from 'motion/react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Instagram, Youtube, Facebook, MessageCircle, MapPin } from 'lucide-react'
import { Button, Kicker, Marquee, Reveal } from './ui'

export function Storefront() {
  return (
    <section id="tienda" className="border-y border-line bg-mist">
      <div className="mx-auto max-w-[1500px] px-5 py-20 md:px-8 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[1.05fr_1fr] lg:items-center lg:gap-20">
          <Reveal>
            <Kicker index="05">La tienda</Kicker>
            <h2 className="mt-6 font-display text-[clamp(2.2rem,5.4vw,4rem)] leading-[0.94] tracking-[-0.02em] uppercase">
              Baja y
              <br />
              <span className="text-pink">conócenos</span>
            </h2>
            <p className="mt-6 max-w-md text-[15px] leading-relaxed text-ink/60">
              Somos el único Pompa Street físico. Sneakers, hats y la mayor selección de
              streetwear en Insurgentes Norte. Sin intermediarios, mismo precio que online.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Button>
                Cómo llegar <MapPin size={15} />
              </Button>
              <Button variant="outline">
                Ver el local <ArrowUpRight size={15} />
              </Button>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-2 gap-y-6 border-t border-line pt-8 text-sm">
              {[
                ['Dirección', 'Insurgentes Norte 110'],
                ['Colonia', 'Sta. María la Ribera'],
                ['Horario', 'Lun–Sáb · 11:00 a 20:00'],
                ['Contacto', '+52 56 3384 8036'],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="text-[10px] tracking-[0.2em] text-ink/40 uppercase">{k}</dt>
                  <dd className="mt-1.5 text-ink/80">{v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="grid grid-cols-2 gap-4">
              <div className="overflow-hidden border border-line bg-paper">
                <div className="aspect-3/4 overflow-hidden">
                  <motion.img
                    src="/life-1.jpg"
                    alt="Cliente Pompa Street con su Mystery Box"
                    loading="lazy"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="mt-10 overflow-hidden border border-line bg-paper">
                <div className="aspect-3/4 overflow-hidden">
                  <motion.img
                    src="/life-2.jpg"
                    alt="Firma en pared de la tienda"
                    loading="lazy"
                    initial={{ scale: 1.08 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.1, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>

            <div className="mt-4 flex items-center justify-between gap-4 bg-ink p-6 text-white">
              <div className="min-w-0">
                <p className="flex items-center gap-2 text-[10px] font-semibold tracking-[0.2em] uppercase">
                  <span className="h-1.5 w-1.5 rounded-full bg-pink" /> Ahora abierto
                </p>
                <p className="mt-2 font-display text-xl">Insurgentes Norte 110</p>
                <p className="mt-1 text-xs text-white/50">Lun–Sáb · 11:00 a 20:00</p>
              </div>
              <span className="grid h-11 w-11 shrink-0 place-items-center bg-pink text-white transition-colors hover:bg-white hover:text-ink">
                <ArrowUpRight size={18} />
              </span>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="border-t border-line py-4">
        <Marquee
          items={['Sneaker Fever', 'Sneaker Topia', 'Sneaker & Drunks', 'Pompa Street', 'Desde 2016']}
          reverse
          className="font-display text-xl tracking-[-0.01em] text-ink/25 uppercase md:text-2xl"
        />
      </div>
    </section>
  )
}

export function Footer() {
  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-[1500px] px-5 py-16 md:px-8 md:py-20">
        <div className="grid gap-12 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Pompa Street" className="h-12 w-12 object-contain" />
              <span className="font-display text-xl tracking-tight uppercase">Pompa Street</span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-white/55">
              El fuego de México al mundo. Sneakers autenticados, streetwear y cultura
              urbana desde CDMX.
            </p>
            <div className="mt-7 flex gap-2">
              {[
                { Icon: Instagram, label: 'Instagram', href: 'https://instagram.com/pompa_street_' },
                { Icon: Facebook, label: 'Facebook', href: 'https://facebook.com/PompaStreet' },
                { Icon: Youtube, label: 'YouTube', href: '#' },
                { Icon: MessageCircle, label: 'WhatsApp', href: '#' },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="grid h-10 w-10 place-items-center border border-white/25 text-white/70 transition-colors hover:border-pink hover:bg-pink hover:text-white"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          <nav>
            <h3 className="text-[10px] font-semibold tracking-[0.24em] text-white/40 uppercase">
              Tienda
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {['Catálogo', 'Jordan', 'Nike', 'Adidas', 'Mystery Box', 'Releases', 'Sale'].map((l) => (
                <li key={l}>
                  <a href="#catalogo" className="text-white/65 transition-colors hover:text-pink">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h3 className="text-[10px] font-semibold tracking-[0.24em] text-white/40 uppercase">
              Ayuda
            </h3>
            <ul className="mt-5 space-y-3 text-sm">
              {['Políticas de privacidad', 'Reembolsos y envíos', 'Términos y condiciones', 'Contacto'].map(
                (l) => (
                  <li key={l}>
                    <a href="#tienda" className="text-white/65 transition-colors hover:text-pink">
                      {l}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-white/15 pt-7 text-[11px] text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pompa Street. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <Link to="/admin" className="transition-colors hover:text-pink">
              Panel admin
            </Link>
            <span>Hecho en CDMX</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
