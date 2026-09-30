import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const LINKS = [
  { label: 'Volantes', href: '#volantes' },
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Tickets', href: '#mystery' },
  { label: 'El Barrio', href: '#barrio' },
  { label: 'Local', href: '#tienda' },
]

export default function StreetHeader() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 20], ['rgba(20,16,15,0.96)', 'rgba(20,16,15,1)'])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* cinta de barrio */}
      <div className="street-bar relative z-50 overflow-hidden py-2 text-on-accent">
        <div className="flex animate-marquee whitespace-nowrap" style={{ minWidth: '200%' }}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-8 pr-8">
              {['ABIERTO HOY 11AM — 8PM', 'ENVÍO GRATIS DESDE $5,000', 'DROP LOS MARTES 8PM', 'VERIFICAMOS CADA PAR'].map(
                (t, i) => (
                  <span key={i} className="font-brut text-[12px] tracking-[0.1em] whitespace-nowrap uppercase">
                    {t} <span className="ml-8">✱</span>
                  </span>
                ),
              )}
            </div>
          ))}
        </div>
      </div>

      <motion.header style={{ backgroundColor: bg }} className="sticky top-0 z-50 border-b-[3px] border-ink">
        <div className="mx-auto flex h-16 max-w-[1500px] items-center justify-between gap-4 px-4 md:h-20 md:px-8">
          <a href="#top" className="flex shrink-0 items-center gap-2">
            <img src="/logo.png" alt="Pompa Street" className="h-10 w-10 object-contain" />
            <span className="hidden font-brut text-[17px] tracking-[0.02em] uppercase sm:block">
              Pompa Street
            </span>
          </a>

          <nav className="hidden items-center gap-2 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="border-2 border-ink px-3.5 py-1.5 font-brut text-[11px] tracking-[0.08em] uppercase transition-colors hover:bg-paper hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex shrink-0 items-center gap-2">
            <button aria-label="Buscar" className="grid h-10 w-10 place-items-center border-2 border-ink hover:bg-paper hover:text-ink">
              <Search size={16} />
            </button>
            <a
              href="#catalogo"
              aria-label="Carrito, 0 artículos"
              className="relative grid h-10 w-10 place-items-center border-2 border-ink hover:bg-paper hover:text-ink"
            >
              <ShoppingBag size={16} />
              <span className="absolute -top-1.5 -right-1.5 grid h-5 w-5 place-items-center border-2 border-ink bg-pink font-brut text-[9px] text-on-accent">
                0
              </span>
            </a>
            <button
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center border-2 border-ink lg:hidden"
            >
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-paper/80 lg:hidden"
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 280 }}
              className="street-hatch ml-auto flex h-full w-[88%] max-w-sm flex-col border-l-[3px] border-ink bg-paper p-6"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="mb-10 grid h-11 w-11 place-items-center self-end border-2 border-ink"
              >
                <X size={18} />
              </button>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b-2 border-ink/20 py-4 font-brut text-2xl uppercase transition-colors hover:text-pink"
                >
                  {l.label}
                </a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
