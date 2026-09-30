import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { Menu, Search, ShoppingBag, X } from 'lucide-react'

const LINKS = [
  { label: 'Catálogo', href: '#catalogo' },
  { label: 'Mystery Box', href: '#mystery' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Tienda', href: '#tienda' },
]

export default function DarkHeader() {
  const [open, setOpen] = useState(false)
  const [solid, setSolid] = useState(false)
  const { scrollY } = useScroll()

  useEffect(() => {
    const onScroll = () => setSolid(scrollY.get() > 24)
    onScroll()
    return scrollY.on('change', onScroll)
  }, [scrollY])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  const bg = useTransform(scrollY, [0, 24], ['rgba(11,8,16,0)', 'rgba(11,8,16,0.92)'])

  return (
    <>
      <motion.header
        style={{ backgroundColor: bg }}
        className="fixed inset-x-0 top-0 z-50 backdrop-blur-md"
      >
        <div className="mx-auto flex h-16 max-w-[1560px] items-center justify-between px-6 md:h-20 md:px-10">
          <a href="#top" className="flex items-center gap-3">
            <img src="/logo.png" alt="Pompa Street" className="h-8 w-8 object-contain" />
            <span className="text-[12px] font-medium tracking-[0.2em] uppercase">Pompa</span>
          </a>

          <nav className="hidden items-center gap-10 lg:flex">
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-[12px] text-ink/50 transition-colors hover:text-ink"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-6">
            <button
              aria-label="Buscar"
              className="hidden text-ink/50 transition-colors hover:text-ink sm:block"
            >
              <Search size={17} strokeWidth={1.25} />
            </button>
            <a
              href="#catalogo"
              className="hidden items-center gap-2 text-[12px] text-ink/50 transition-colors hover:text-ink sm:flex"
            >
              <ShoppingBag size={17} strokeWidth={1.25} />
              0
            </a>
            <button
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen(true)}
              className="text-ink lg:hidden"
            >
              <Menu size={20} strokeWidth={1.25} />
            </button>
          </div>
        </div>

        {/* hairline que aparece al hacer scroll */}
        <div
          className={`h-px bg-line transition-opacity duration-300 ${
            solid ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-100 bg-paper lg:hidden"
          >
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="flex h-full flex-col px-6 py-24"
            >
              <button
                onClick={() => setOpen(false)}
                aria-label="Cerrar menú"
                className="absolute top-6 right-6 text-ink/60"
              >
                <X size={20} strokeWidth={1.25} />
              </button>
              {LINKS.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-6 font-display text-3xl tracking-tight uppercase transition-colors hover:text-pink"
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
