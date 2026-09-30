import { Link } from 'react-router-dom'
import { Instagram, Youtube, Facebook, MessageCircle } from 'lucide-react'
import Wordmark from '../Wordmark'

const SHOP = ['Catálogo', 'Jordan', 'Nike', 'Adidas', 'Mystery Box', 'Releases', 'Sale']
const HELP = ['Políticas de privacidad', 'Reembolsos y envíos', 'Términos y condiciones', 'Contacto']

export default function DarkFooter() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto max-w-[1560px] px-6 pt-20 md:px-10 md:pt-28">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="Pompa Street" className="h-9 w-9 object-contain" />
              <span className="text-[12px] tracking-[0.2em] uppercase">Pompa Street</span>
            </div>
            <p className="mt-6 max-w-xs text-[14px] leading-relaxed text-ink/45">
              El fuego de México al mundo. Sneakers autenticados, streetwear y cultura urbana
              desde Ciudad de México.
            </p>
            <div className="mt-8 flex gap-5">
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
                  className="text-ink/40 transition-colors hover:text-pink"
                >
                  <Icon size={17} strokeWidth={1.25} />
                </a>
              ))}
            </div>
          </div>

          <nav>
            <h3 className="text-[10px] tracking-[0.24em] text-ink/30 uppercase">Tienda</h3>
            <ul className="mt-6 space-y-3 text-[14px] text-ink/50">
              {SHOP.map((l) => (
                <li key={l}>
                  <a href="#catalogo" className="transition-colors hover:text-ink">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav>
            <h3 className="text-[10px] tracking-[0.24em] text-ink/30 uppercase">Ayuda</h3>
            <ul className="mt-6 space-y-3 text-[14px] text-ink/50">
              {HELP.map((l) => (
                <li key={l}>
                  <a href="#tienda" className="transition-colors hover:text-ink">
                    {l}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* cierre con letras gigantes */}
        <div className="mt-20 md:mt-28">
          <Wordmark variant="dark" />
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-line py-8 text-[11px] text-ink/30 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Pompa Street. Todos los derechos reservados.</p>
          <div className="flex items-center gap-6">
            <Link to="/admin" className="transition-colors hover:text-ink">
              Panel admin
            </Link>
            <span>Hecho en CDMX</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
