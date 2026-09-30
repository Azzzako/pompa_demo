import { Link } from 'react-router-dom'
import { Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react'
import Wordmark from '../Wordmark'

const SHOP = ['Volantes', 'Catálogo', 'Jordan', 'Nike', 'Mystery Box', 'Sale']
const HELP = ['Políticas de privacidad', 'Reembolsos y envíos', 'Términos y condiciones', 'Contacto']

export default function StreetFooter() {
  return (
    <footer className="street-grain relative border-t-[3px] border-pink bg-paper text-ink">
      <div className="street-hatch pointer-events-none absolute inset-0" />

      <div className="relative mx-auto max-w-[1500px] px-4 py-16 md:px-8 md:py-20">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <img src="/logo.png" alt="Pompa Street" className="h-11 w-11 object-contain" />
              <span className="font-brut text-xl uppercase">Pompa Street</span>
            </div>
            <p className="mt-5 max-w-xs text-[14px] leading-relaxed text-ink/60">
              El fuego de México al mundo. Sneakers verificados, streetwear y cultura de barrio
              desde Insurgentes Norte.
            </p>
            <div className="mt-6 flex gap-2">
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
                  className="grid h-10 w-10 place-items-center border-2 border-ink transition-colors hover:bg-pink hover:text-on-accent"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          <nav>
            <h3 className="font-brut text-[12px] tracking-[0.14em] text-pink uppercase">Tienda</h3>
            <ul className="mt-5 space-y-2.5 font-brut text-[13px] uppercase">
              {SHOP.map((l) => (
                <li key={l}>
                  <a href="#catalogo" className="text-ink/65 transition-colors hover:text-pink">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h3 className="font-brut text-[12px] tracking-[0.14em] text-pink uppercase">Ayuda</h3>
            <ul className="mt-5 space-y-2.5 text-[13px] text-ink/65">
              {HELP.map((l) => (
                <li key={l}>
                  <a href="#tienda" className="transition-colors hover:text-pink">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* cierre con letras gigantes */}
        <div className="mt-14 border-t-2 border-ink/25 pt-10">
          <Wordmark variant="street" />
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t-2 border-ink/25 pt-6 text-[11px] text-ink/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pompa Street. Todos los derechos reservados.</p>
          <div className="flex items-center gap-5">
            <Link to="/admin" className="font-brut uppercase transition-colors hover:text-pink">
              Panel admin
            </Link>
            <span>Hecho en CDMX</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
