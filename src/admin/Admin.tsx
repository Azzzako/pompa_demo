import { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import {
  ArrowLeft,
  ArrowUpRight,
  Bell,
  LayoutDashboard,
  Package,
  Search,
  ShoppingCart,
  TrendingUp,
  Users,
} from 'lucide-react'
import {
  ACTIVITY,
  CHANNELS,
  KPIS,
  LOW_STOCK,
  ORDERS,
  REVENUE,
  TOP_PRODUCTS,
  money,
  type OrderStatus,
} from './data'

const NAV = [
  { Icon: LayoutDashboard, label: 'Resumen', active: true },
  { Icon: ShoppingCart, label: 'Órdenes' },
  { Icon: Package, label: 'Inventario' },
  { Icon: Users, label: 'Clientes' },
  { Icon: TrendingUp, label: 'Reportes' },
]

const STATUS_STYLE: Record<OrderStatus, string> = {
  Pagada: 'bg-acid/15 text-acid',
  Pendiente: 'bg-flame/15 text-flame',
  Enviada: 'bg-violet/20 text-violet',
  Cancelada: 'bg-ember/15 text-ember',
}

export default function Admin() {
  const [range, setRange] = useState<'7' | '30'>('7')
  const max = Math.max(...REVENUE.map((r) => r.value))

  return (
    <div className="admin-skin grain flex min-h-screen w-full overflow-x-hidden bg-ink">
      {/* Sidebar rail: full height even when the page scrolls */}
      <div className="hidden w-64 shrink-0 border-r border-white/8 bg-ink-2/60 lg:block">
        <div className="sticky top-0 flex h-screen flex-col p-6">
          <Link to="/" className="flex items-center gap-2.5">
            <img src="/logo.png" alt="Pompa Street" className="h-9 w-9 object-contain" />
            <span className="leading-none">
              <span className="block font-display text-base">POMPA</span>
              <span className="block text-[9px] font-semibold tracking-[0.3em] text-bone/40">ADMIN</span>
            </span>
          </Link>

          <nav className="mt-10 space-y-1">
            {NAV.map(({ Icon, label, active }) => (
              <button
                key={label}
                className={`flex w-full items-center gap-3 rounded-xl px-3.5 py-2.5 text-[13px] font-medium transition-colors ${
                  active
                    ? 'bg-ember/12 text-ember'
                    : 'text-bone/50 hover:bg-white/4 hover:text-bone'
                }`}
              >
                <Icon size={16} />
                {label}
              </button>
            ))}
          </nav>

          <div className="mt-auto rounded-2xl border border-dashed border-white/12 p-4">
            <p className="text-[10px] font-bold tracking-[0.18em] text-acid uppercase">Demo</p>
            <p className="mt-1.5 text-[11px] leading-relaxed text-bone/40">
              Panel ilustrativo. Los datos son ficticios y no se guardan cambios.
            </p>
            <Link
              to="/"
              className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-bone/70 hover:text-ember"
            >
              <ArrowLeft size={12} /> Volver a la tienda
            </Link>
          </div>
        </div>
      </div>

      {/* ---------- Main ---------- */}
      <div className="min-w-0 flex-1">
        {/* Topbar */}
        <header className="sticky top-0 z-40 border-b border-white/8 bg-ink/85 backdrop-blur-xl">
          <div className="flex items-center justify-between gap-4 px-5 py-4 md:px-8">
            <div className="flex items-center gap-3">
              <Link to="/" className="lg:hidden">
                <img src="/logo.png" alt="" className="h-8 w-8 object-contain" />
              </Link>
              <div>
                <h1 className="font-display text-xl leading-none">Resumen</h1>
                <p className="mt-1 text-[11px] text-bone/35">Martes 29 de septiembre de 2026</p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <div className="hidden items-center gap-2 rounded-full border border-white/10 px-3.5 py-2 sm:flex">
                <Search size={13} className="text-bone/40" />
                <input
                  placeholder="Buscar orden o cliente"
                  className="w-40 bg-transparent text-xs outline-none placeholder:text-bone/30"
                />
              </div>
              <button
                aria-label="Notificaciones"
                className="relative grid h-9 w-9 place-items-center rounded-full border border-white/10"
              >
                <Bell size={15} />
                <span className="absolute top-1.5 right-1.5 h-1.5 w-1.5 rounded-full bg-ember" />
              </button>
              <div className="flex items-center gap-2 rounded-full border border-white/10 py-1 pr-3.5 pl-1">
                <span className="grid h-7 w-7 place-items-center rounded-full bg-violet text-[10px] font-bold">
                  LA
                </span>
                <span className="hidden text-[11px] font-medium sm:block">Luis A.</span>
              </div>
            </div>
          </div>
        </header>

        <main className="min-w-0 space-y-6 overflow-x-hidden p-5 md:p-8">
          {/* KPI cards */}
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {KPIS.map((k, i) => (
              <motion.div
                key={k.label}
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06 }}
                className="rounded-2xl border border-white/8 bg-ink-2/60 p-5"
              >
                <p className="text-[11px] tracking-[0.12em] text-bone/40 uppercase">{k.label}</p>
                <p className="mt-2 font-display text-3xl tracking-tight">{k.value}</p>
                <p
                  className={`mt-1.5 text-[11px] font-semibold ${k.up ? 'text-acid' : 'text-ember'}`}
                >
                  {k.up ? '↑' : '↓'} {k.delta}
                  <span className="ml-1.5 font-normal text-bone/30">vs mes anterior</span>
                </p>
              </motion.div>
            ))}
          </div>

          <div className="grid gap-6 xl:grid-cols-[1.6fr_1fr]">
            {/* Revenue chart */}
            <section className="rounded-2xl border border-white/8 bg-ink-2/60 p-5 md:p-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div>
                  <h2 className="font-display text-lg">Ingresos</h2>
                  <p className="mt-0.5 text-[11px] text-bone/35">Miles de pesos · últimos 7 días</p>
                </div>
                <div className="flex rounded-full border border-white/10 p-0.5">
                  {(['7', '30'] as const).map((r) => (
                    <button
                      key={r}
                      onClick={() => setRange(r)}
                      className={`relative rounded-full px-3.5 py-1.5 text-[11px] font-semibold transition-colors ${
                        range === r ? 'text-ink' : 'text-bone/45'
                      }`}
                    >
                      {range === r && (
                        <motion.span
                          layoutId="range-pill"
                          className="absolute inset-0 rounded-full bg-bone"
                        />
                      )}
                      <span className="relative z-10">{r} días</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex h-52 items-stretch gap-2 sm:gap-4">
                {REVENUE.map((r, i) => (
                  <div key={r.day} className="flex flex-1 flex-col items-center gap-2">
                    <div className="flex w-full flex-1 items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${(r.value / max) * 100}%` }}
                        transition={{ duration: 0.7, delay: 0.1 + i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                        className="group relative w-full rounded-t-lg bg-gradient-to-t from-ember/35 to-ember"
                      >
                        <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-bone/0 transition-colors group-hover:text-bone">
                          ${r.value}k
                        </span>
                      </motion.div>
                    </div>
                    <span className="text-[10px] text-bone/35">{r.day}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Channels */}
            <section className="rounded-2xl border border-white/8 bg-ink-2/60 p-5 md:p-6">
              <h2 className="font-display text-lg">Canales de venta</h2>
              <p className="mt-0.5 text-[11px] text-bone/35">Distribución del mes</p>

              <div className="mt-6 flex h-3 overflow-hidden rounded-full">
                {CHANNELS.map((c, i) => (
                  <motion.div
                    key={c.name}
                    initial={{ width: 0 }}
                    animate={{ width: `${c.pct}%` }}
                    transition={{ duration: 0.8, delay: 0.2 + i * 0.12 }}
                    style={{ background: c.color }}
                  />
                ))}
              </div>

              <ul className="mt-6 space-y-3.5">
                {CHANNELS.map((c) => (
                  <li key={c.name} className="flex items-center gap-3 text-[13px]">
                    <span className="h-2.5 w-2.5 rounded-full" style={{ background: c.color }} />
                    <span className="flex-1 text-bone/65">{c.name}</span>
                    <span className="font-semibold">{c.pct}%</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 border-t border-white/8 pt-5">
                <p className="text-[10px] tracking-[0.2em] text-bone/35 uppercase">Actividad reciente</p>
                <ul className="mt-3 space-y-3">
                  {ACTIVITY.map((a) => (
                    <li key={a.text} className="flex items-start gap-2.5">
                      <span
                        className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${
                          a.tone === 'ok'
                            ? 'bg-acid'
                            : a.tone === 'warn'
                              ? 'bg-flame'
                              : 'bg-ember'
                        }`}
                      />
                      <span className="min-w-0 flex-1">
                        <span className="block text-[12px] leading-snug text-bone/70">{a.text}</span>
                        <span className="text-[10px] text-bone/30">{a.time}</span>
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </section>
          </div>

          {/* Orders table */}
          <section className="overflow-hidden rounded-2xl border border-white/8 bg-ink-2/60">
            <div className="flex items-center justify-between gap-4 border-b border-white/8 p-5 md:px-6">
              <div>
                <h2 className="font-display text-lg">Órdenes recientes</h2>
                <p className="mt-0.5 text-[11px] text-bone/35">Últimas 8 transactions</p>
              </div>
              <button className="hidden items-center gap-1.5 rounded-full border border-white/12 px-3.5 py-2 text-[11px] font-semibold text-bone/60 transition-colors hover:border-white/25 hover:text-bone sm:inline-flex">
                Ver todas <ArrowUpRight size={12} />
              </button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[720px] text-left text-[13px]">
                <thead>
                  <tr className="border-b border-white/8 text-[10px] tracking-[0.16em] text-bone/30 uppercase">
                    <th className="px-6 py-3 font-semibold">Orden</th>
                    <th className="px-4 py-3 font-semibold">Cliente</th>
                    <th className="px-4 py-3 font-semibold">Producto</th>
                    <th className="px-4 py-3 font-semibold">Estado</th>
                    <th className="px-4 py-3 text-right font-semibold">Total</th>
                    <th className="px-6 py-3 text-right font-semibold">Fecha</th>
                  </tr>
                </thead>
                <tbody>
                  {ORDERS.map((o) => (
                    <tr key={o.id} className="border-b border-white/5 transition-colors last:border-0 hover:bg-white/3">
                      <td className="px-6 py-3.5 font-mono text-[12px] text-bone/50">{o.id}</td>
                      <td className="px-4 py-3.5 text-bone/80">{o.customer}</td>
                      <td className="max-w-[240px] truncate px-4 py-3.5 text-bone/55">{o.item}</td>
                      <td className="px-4 py-3.5">
                        <span
                          className={`rounded-full px-2.5 py-1 text-[10px] font-bold tracking-wide uppercase ${STATUS_STYLE[o.status]}`}
                        >
                          {o.status}
                        </span>
                      </td>
                      <td className="px-4 py-3.5 text-right font-semibold">{money(o.total)}</td>
                      <td className="px-6 py-3.5 text-right text-[11px] text-bone/35">{o.date}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <div className="grid gap-6 lg:grid-cols-2">
            {/* Top products */}
            <section className="rounded-2xl border border-white/8 bg-ink-2/60 p-5 md:p-6">
              <h2 className="font-display text-lg">Top productos</h2>
              <p className="mt-0.5 text-[11px] text-bone/35">Por unidades vendidas</p>

              <ul className="mt-5 space-y-3">
                {TOP_PRODUCTS.map((p, i) => (
                  <li
                    key={p.name}
                    className="flex items-center gap-4 rounded-xl border border-white/6 p-3 transition-colors hover:border-white/14"
                  >
                    <span className="w-4 shrink-0 text-center font-mono text-[11px] text-bone/30">
                      {i + 1}
                    </span>
                    <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/5">
                      <img src={p.img} alt="" className="h-full w-full object-contain p-1" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="truncate text-[12.5px] font-medium">{p.name}</p>
                      <p className="text-[11px] text-bone/35">{p.units} unidades</p>
                    </div>
                    <span className="shrink-0 text-[12.5px] font-semibold">{money(p.revenue)}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Low stock */}
            <section className="rounded-2xl border border-white/8 bg-ink-2/60 p-5 md:p-6">
              <h2 className="font-display text-lg">Stock bajo</h2>
              <p className="mt-0.5 text-[11px] text-bone/35">Necesitan resurtido</p>

              <ul className="mt-5 space-y-4">
                {LOW_STOCK.map((p) => {
                  const pct = (p.stock / p.total) * 100
                  return (
                    <li key={p.name} className="flex items-center gap-4">
                      <div className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-white/5">
                        <img src={p.img} alt="" className="h-full w-full object-contain p-1" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <div className="flex items-baseline justify-between gap-3">
                          <p className="truncate text-[12.5px] font-medium">{p.name}</p>
                          <span className="shrink-0 text-[11px] text-bone/40">
                            {p.stock} / {p.total}
                          </span>
                        </div>
                        <div className="mt-2 h-1.5 overflow-hidden rounded-full bg-white/8">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${pct}%` }}
                            transition={{ duration: 0.7, delay: 0.15 }}
                            className="h-full rounded-full"
                            style={{ background: pct < 40 ? '#ff2e63' : '#d9ff2e' }}
                          />
                        </div>
                      </div>
                    </li>
                  )
                })}
              </ul>

              <button className="mt-6 w-full rounded-full border border-white/12 py-3 text-[11px] font-bold tracking-[0.14em] uppercase transition-colors hover:border-ember hover:text-ember">
                Generar reporte de inventario
              </button>
            </section>
          </div>

          <p className="pt-4 text-center text-[11px] text-bone/25">
            Panel demostrativo · datos ficticios · Pompa Street 2026
          </p>
        </main>
      </div>
    </div>
  )
}
