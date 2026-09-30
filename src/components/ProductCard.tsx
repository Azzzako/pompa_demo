import { motion } from 'motion/react'
import { Plus } from 'lucide-react'
import { money, type Product } from '../data'

export default function ProductCard({ p, i }: { p: Product; i: number }) {
  const isSticker = p.sizes.length === 1 && p.sizes[0] === 0
  const discount = p.oldPrice ? Math.round((1 - p.price / p.oldPrice) * 100) : 0

  return (
    <motion.article
      initial={{ opacity: 0, y: 26 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (i % 4) * 0.06, ease: [0.22, 1, 0.36, 1] }}
      className="group relative flex flex-col"
    >
      <div className="relative aspect-4/5 overflow-hidden border border-line bg-mist">
        {p.badge && (
          <span className="absolute top-3 left-3 z-10 bg-ink px-2.5 py-1 text-[9px] font-semibold tracking-[0.18em] text-white uppercase">
            {p.badge}
          </span>
        )}

        {discount > 0 && (
          <span className="absolute top-3 right-3 z-10 bg-pink px-2.5 py-1 text-[9px] font-semibold tracking-[0.18em] text-white uppercase">
            -{discount}%
          </span>
        )}

        <motion.img
          src={p.img}
          alt={p.name}
          loading="lazy"
          whileHover={{ scale: 1.06 }}
          transition={{ type: 'spring', stiffness: 240, damping: 20 }}
          className="h-full w-full object-contain p-8"
        />

        <div className="absolute inset-x-0 bottom-0 translate-y-full bg-ink py-3 text-[11px] font-semibold tracking-[0.18em] text-white uppercase transition-transform duration-300 group-hover:translate-y-0">
          <span className="flex items-center justify-center gap-2">
            <Plus size={13} /> Ver par
          </span>
        </div>
      </div>

      <div className="flex flex-1 flex-col border-b border-line pt-4 pb-5">
        <span className="text-[10px] font-semibold tracking-[0.24em] text-ink/45 uppercase">
          {p.brand}
        </span>
        <h3 className="mt-2 line-clamp-2 text-[13.5px] leading-snug font-medium text-ink/85">
          {p.name}
        </h3>

        <div className="mt-auto flex items-end justify-between gap-3 pt-4">
          <div>
            {p.oldPrice && (
              <span className="block text-[11px] text-ink/35 line-through">
                {money(p.oldPrice)}
              </span>
            )}
            <span className="font-display text-lg tracking-tight">{money(p.price)}</span>
          </div>
          <span className="text-[10px] text-ink/40">
            {isSticker ? '1 unidad' : `${p.sizes.length} tallas`}
          </span>
        </div>
      </div>
    </motion.article>
  )
}
