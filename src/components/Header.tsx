import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { Marquee } from './ui'

const LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Mystery Box', href: '#mystery' },
  { label: 'Historia', href: '#historia' },
  { label: 'Eventos', href: '#eventos' },
  { label: 'Tienda', href: '#tienda' },
]

const TICKER = [
  'Envío gratis en compras +$5,000',
  'Drops cada martes 8PM',
  'Autenticidad verificada en cada par',
  '+120K clientes en CDMX',
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const bg = useTransform(scrollY, [0, 160], ['rgba(255,255,255,0)', 'rgba(255,255,255,0.92)'])
  const border = useTransform(scrollY, [0, 160], ['rgba(231,227,238,0)', 'rgba(231,227,238,1)'])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <>
      {/* Announcement bar */}
      <div className="relative z-50 overflow-hidden bg-ink py-2 text-white">
        <Marquee
          items={TICKER}
          className="text-[10px] font-semibold tracking-[0.22em] uppercase"
        />
      </div>

      <motion.header
        style={{ backgroundColor: bg, borderBottomColor: border }}
        className="sticky top-0 z-50 border-b border-transparent backdrop-blur-md"
      >
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="Pompa Street" className="h-10 w-10 object-contain" />
            <span className="hidden leading-none sm:block">
              <span className="block font-display text-[15px] tracking-tight uppercase">
                Pompa Street
              </span>
              <span className="mt-1 block text-[9px] font-semibold tracking-[0.3em] text-ink/45 uppercase">
                Sneakers · CDMX
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="relative py-1 text-[12px] font-semibold tracking-[0.12em] text-ink/70 uppercase transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              aria-label="Buscar"
              className="grid h-10 w-10 place-items-center text-ink/70 transition-colors hover:text-pink"
            >
              <Search size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cuenta"
              className="hidden h-10 w-10 place-items-center text-ink/70 transition-colors hover:text-pink sm:grid"
            >
              <User size={18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Carrito, 0 artículos"
              className="relative grid h-10 w-10 place-items-center text-ink/70 transition-colors hover:text-pink"
            >
              <ShoppingBag size={18} strokeWidth={1.5} />
              <span className="absolute top-1.5 right-1 grid h-4 w-4 place-items-center rounded-full bg-pink text-[9px] font-bold text-white">
                0
              </span>
            </button>
            <button
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen(true)}
              className="grid h-10 w-10 place-items-center text-ink lg:hidden"
            >
              <Menu size={20} strokeWidth={1.5} />
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
            className="fixed inset-0 z-100 bg-ink/70 backdrop-blur-sm lg:hidden"
          >
            <motion.nav
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 32, stiffness: 260 }}
              className="ml-auto flex h-full w-[86%] max-w-sm flex-col bg-paper p-7"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="mb-12 grid h-11 w-11 place-items-center self-end border border-line"
              >
                <X size={18} />
              </button>
              {LINKS.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, x: 24 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                  className="border-b border-line py-5 font-display text-2xl tracking-tight uppercase transition-colors hover:text-pink"
                >
                  {l.label}
                </motion.a>
              ))}
              <div className="mt-auto text-xs leading-relaxed text-ink/50">
                Av. Insurgentes Norte 110
                <br />
                Sta. María la Ribera, CDMX
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
