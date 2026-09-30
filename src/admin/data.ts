/**
 * Datos hardcodeados SOLO para demostración.
 * Nada de aquí se conecta a un backend: es mock estático para revisar UI.
 */

export type OrderStatus = 'Pagada' | 'Pendiente' | 'Enviada' | 'Cancelada'

export type Order = {
  id: string
  customer: string
  item: string
  total: number
  status: OrderStatus
  date: string
}

export const KPIS = [
  { label: 'Ventas del mes', value: '$412,800', delta: '+18.4%', up: true },
  { label: 'Órdenes', value: '137', delta: '+9.2%', up: true },
  { label: 'Ticket promedio', value: '$3,012', delta: '-2.1%', up: false },
  { label: 'Conversion web', value: '2.84%', delta: '+0.4pt', up: true },
]

/** Ingresos de los últimos 7 días (millones de MXN) */
export const REVENUE = [
  { day: 'Lun', value: 38 },
  { day: 'Mar', value: 64 },
  { day: 'Mié', value: 47 },
  { day: 'Jue', value: 82 },
  { day: 'Vie', value: 71 },
  { day: 'Sáb', value: 95 },
  { day: 'Dom', value: 58 },
]

export const ORDERS: Order[] = [
  { id: '#4821', customer: 'Luis Hernández', item: "Levi's x AJ3 'Black Denim'", total: 7000, status: 'Pagada', date: 'Hoy, 14:22' },
  { id: '#4820', customer: 'Ana Gómez', item: "Dunk Low 'Red Green'", total: 11000, status: 'Enviada', date: 'Hoy, 12:08' },
  { id: '#4819', customer: 'Carlos M.', item: 'Mystery Box Mediana', total: 3499, status: 'Pendiente', date: 'Hoy, 11:40' },
  { id: '#4818', customer: 'Sofía Ramírez', item: "Air Max 95 'Triple Black'", total: 7500, status: 'Pagada', date: 'Ayer, 19:55' },
  { id: '#4817', customer: 'Miguel Ángel', item: 'Dandy Hats "Canelo Tiffany"', total: 2600, status: 'Cancelada', date: 'Ayer, 17:12' },
  { id: '#4816', customer: 'Ximena López', item: "Jordan 4 'Cave Stone'", total: 6500, status: 'Enviada', date: 'Ayer, 15:30' },
  { id: '#4815', customer: 'Diego Fernández', item: 'Kit Panini Mundial 2026', total: 7500, status: 'Pagada', date: '12 Sep, 21:04' },
  { id: '#4814', customer: 'Paola Ruiz', item: "Dunk SB High 'Carpet'", total: 11000, status: 'Pagada', date: '12 Sep, 18:47' },
]

/** Top productos por unidades vendidas */
export const TOP_PRODUCTS = [
  { name: "Levi's x Air Jordan 3 SP", units: 34, revenue: 238000, img: '/products/shoe-3.webp' },
  { name: "Dunk Low Retro 'Red Green'", units: 22, revenue: 242000, img: '/products/shoe-22.webp' },
  { name: 'Mystery Box Mediana', units: 61, revenue: 213439, img: '/products/shoe-15.webp' },
  { name: "Air Max 95 'Triple Black'", units: 18, revenue: 135000, img: '/products/shoe-10.webp' },
  { name: 'Dandy Hats "World Champion"', units: 27, revenue: 81000, img: '/products/shoe-14.webp' },
]

export const CHANNELS = [
  { name: 'Tienda en línea', pct: 58, color: '#ff2e63' },
  { name: 'Punto de venta físico', pct: 29, color: '#7b2eff' },
  { name: 'Instagram', pct: 13, color: '#d9ff2e' },
]

export const LOW_STOCK = [
  { name: "Jordan 1 SP 'White Black'", stock: 2, total: 6, img: '/products/shoe-6.webp' },
  { name: "Dunk Low 'Red Green'", stock: 3, total: 12, img: '/products/shoe-22.webp' },
  { name: 'Mystery Box Grande', stock: 5, total: 20, img: '/products/shoe-15.webp' },
  { name: "Jordan 4 'Cave Stone'", stock: 4, total: 10, img: '/products/shoe-18.webp' },
]

export const ACTIVITY = [
  { text: 'Nueva orden #4821 por $7,000', time: 'hace 4 min', tone: 'ok' },
  { text: 'Stock bajo: Jordan 1 SP White Black (2 uds)', time: 'hace 22 min', tone: 'warn' },
  { text: 'Pago confirmado #4820 — Banorte ••4192', time: 'hace 1 h', tone: 'ok' },
  { text: 'Orden #4817 cancelada por el cliente', time: 'hace 3 h', tone: 'bad' },
  { text: 'Drop programmatic cargado: 14 productos', time: 'hace 5 h', tone: 'ok' },
]

export const money = (n: number) =>
  n.toLocaleString('es-MX', { style: 'currency', currency: 'MXN', maximumFractionDigits: 0 })
