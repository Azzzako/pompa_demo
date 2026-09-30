import { useEffect, useState } from 'react'
import { AnimatePresence, motion, useScroll, useTransform } from 'motion/react'
import { Menu, Search, ShoppingBag, User, X } from 'lucide-react'
import { Marquee } from './ui'
import type { Variant } from '../variant'

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

export default function Header({ variant }: { variant: Variant }) {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()
  const street = variant === 'street'
  const dark = variant === 'dark'

  const bg = useTransform(
    scrollY,
    [0, 160],
    street
      ? ['rgba(20,16,15,1)', 'rgba(20,16,15,0.94)']
      : dark
        ? ['rgba(11,8,16,0)', 'rgba(11,8,16,0.9)']
        : ['rgba(255,255,255,0)', 'rgba(255,255,255,0.92)'],
  )

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  /* ---------- barra de anuncios ---------- */
  const bar = street ? (
    <div className="street-bar relative z-50 overflow-hidden py-2 text-on-accent">
      <Marquee
        items={TICKER}
        theme="street"
        className="font-brut text-[12px] tracking-[0.12em] uppercase"
      />
    </div>
  ) : dark ? (
    <div className="relative z-50 overflow-hidden border-b border-line bg-ink-2 py-2 text-ink/60">
      <Marquee
        items={TICKER}
        theme={variant}
        className="text-[10px] font-semibold tracking-[0.22em] uppercase"
      />
    </div>
  ) : (
    <div className="relative z-50 overflow-hidden bg-deep py-2 text-on-deep">
      <Marquee items={TICKER} theme={variant} className="text-[10px] font-semibold tracking-[0.22em] uppercase" />
    </div>
  )

  /* ---------- navegación ---------- */
  const navLink = street
    ? 'border-2 border-ink bg-transparent px-3.5 py-2 text-[11px] font-brut tracking-[0.1em] uppercase transition-colors hover:bg-deep hover:text-on-deep'
    : dark
      ? 'py-1 text-[12px] font-semibold tracking-[0.12em] text-ink/65 uppercase transition-colors hover:text-pink'
      : 'py-1 text-[12px] font-semibold tracking-[0.12em] text-ink/70 uppercase transition-colors hover:text-ink'

  const iconBtn = street
    ? 'grid h-10 w-10 place-items-center border-2 border-ink text-ink transition-colors hover:bg-deep hover:text-on-deep'
    : 'grid h-10 w-10 place-items-center text-ink/70 transition-colors hover:text-pink'

  return (
    <>
      {bar}

      <motion.header
        style={{ backgroundColor: bg }}
        className={
          street
            ? 'sticky top-0 z-50 border-b-[3px] border-ink backdrop-blur-none'
            : dark
              ? 'sticky top-0 z-50 border-b border-line backdrop-blur-md'
              : 'sticky top-0 z-50 border-b border-transparent backdrop-blur-md'
        }
      >
        <div className="mx-auto flex h-20 max-w-[1500px] items-center justify-between px-5 md:px-8">
          <a href="#top" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Pompa Street"
              className={street ? 'h-11 w-11 object-contain' : 'h-10 w-10 object-contain'}
            />
            <span className="hidden leading-none sm:block">
              <span
                className={
                  street
                    ? 'block font-brut text-[17px] tracking-[0.04em] uppercase'
                    : 'block font-display text-[15px] tracking-tight uppercase'
                }
              >
                Pompa Street
              </span>
              <span
                className={
                  street
                    ? 'mt-1 block font-brut text-[9px] tracking-[0.22em] text-flame uppercase'
                    : 'mt-1 block text-[9px] font-semibold tracking-[0.3em] text-ink/45 uppercase'
                }
              >
                Sneakers · CDMX
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-3 lg:flex">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href} className={navLink}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-1.5">
            <button aria-label="Buscar" className={iconBtn}>
              <Search size={street ? 16 : 18} strokeWidth={1.5} />
            </button>
            <button
              aria-label="Cuenta"
              className={`${iconBtn} hidden sm:grid`}
            >
              <User size={street ? 16 : 18} strokeWidth={1.5} />
            </button>
            <button aria-label="Carrito, 0 artículos" className={`${iconBtn} relative`}>
              <ShoppingBag size={street ? 16 : 18} strokeWidth={1.5} />
              <span
                className={
                  street
                    ? 'absolute -top-1.5 -right-1.5 grid h-5 w-5 place-items-center border-2 border-ink bg-pink font-brut text-[9px] text-on-accent'
                    : 'absolute top-1.5 right-1 grid h-4 w-4 place-items-center rounded-full bg-pink text-[9px] font-bold text-white'
                }
              >
                0
              </span>
            </button>
            <button
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen(true)}
              className={`${iconBtn} lg:hidden`}
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
            className="fixed inset-0 z-100 bg-deep/70 backdrop-blur-sm lg:hidden"
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
                className={`mb-12 grid h-11 w-11 place-items-center self-end ${
                  street ? 'border-2 border-ink' : 'border border-line'
                }`}
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
                  className={`border-b border-line py-5 uppercase transition-colors hover:text-pink ${
                    street ? 'font-brut text-2xl tracking-[0.02em]' : 'font-display text-2xl tracking-tight'
                  }`}
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
