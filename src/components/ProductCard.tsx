import { motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { money, type Product } from '../data'
import type { Variant } from '../variant'

export default function ProductCard({
  p,
  i,
  variant,
}: {
  p: Product
  i: number
  variant: Variant
}) {
  const isSticker = p.sizes.length === 1 && p.sizes[0] === 0
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0
  const street = variant === 'street'

  const media = street
    ? 'relative aspect-4/5 overflow-hidden border-2 border-ink street-hatch'
    : 'relative aspect-4/5 overflow-hidden border border-line bg-mist'

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col"
    >
      <div className={media}>
        {p.badge &&
          (street ? (
            <span className="street-sticker absolute top-3 left-3 z-10 !px-2 !py-1 text-[10px]">
              {p.badge}
            </span>
          ) : (
            <span className="absolute top-3 left-3 z-10 bg-deep px-2.5 py-1 text-[9px] font-semibold tracking-[0.18em] text-on-deep uppercase">
              {p.badge}
            </span>
          ))}

        {discount > 0 && (
          <span
            className={
              street
                ? 'absolute top-3 right-3 z-10 border-2 border-ink bg-flame px-2 py-0.5 font-brut text-[10px] text-on-accent'
                : 'absolute top-3 right-3 z-10 bg-pink px-2.5 py-1 text-[9px] font-semibold tracking-[0.18em] text-on-accent uppercase'
            }
          >
            -{discount}%
          </span>
        )}

        <motion.img
          src={p.img}
          alt={p.name}
          loading="lazy"
          whileHover={{ scale: street ? 1.02 : 1.06 }}
          transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          className="h-full w-full object-contain p-8"
        />

        <div
          className={
            street
              ? 'absolute inset-x-2 bottom-2 flex items-center justify-center gap-2 border-2 border-ink bg-deep py-2.5 font-brut text-[11px] tracking-[0.1em] text-on-deep uppercase opacity-0 transition-opacity duration-200 group-hover:opacity-100'
              : 'absolute inset-x-0 bottom-0 translate-y-full bg-deep py-3 text-[11px] font-semibold tracking-[0.18em] text-on-deep uppercase transition-transform duration-300 group-hover:translate-y-0'
          }
        >
          <Plus size={13} /> Ver par
        </div>
      </div>

      <div
        className={
          street
            ? 'flex flex-1 flex-col border-2 border-t-0 border-ink bg-mist px-4 pt-4 pb-5 transition-transform duration-200 group-hover:-translate-y-1'
            : 'flex flex-1 flex-col border-b border-line pt-4 pb-5'
        }
      >
        <span
          className={
            street
              ? 'font-brut text-[11px] tracking-[0.16em] text-pink uppercase'
              : 'text-[10px] font-semibold tracking-[0.24em] text-ink/45 uppercase'
          }
        >
          {p.brand}
        </span>
        <h3
          className={
            street
              ? 'mt-2 line-clamp-2 font-brut text-[14px] leading-tight tracking-[0.01em] uppercase'
              : 'mt-2 line-clamp-2 text-[13.5px] leading-snug font-medium text-ink/85'
          }
        >
          {p.name}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div>
            {p.oldPrice && (
              <span className="block text-[11px] text-ink/35 line-through">{money(p.oldPrice)}</span>
            )}
            <span
              className={
                street
                  ? 'font-display text-lg tracking-tight'
                  : 'font-display text-lg tracking-tight'
              }
            >
              {money(p.price)}
            </span>
          </div>
          <span className="text-[10px] text-ink/40">
            {isSticker ? '1 unidad' : `${p.sizes.length} tallas`}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
