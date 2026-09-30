export type Product = {
  id: string
  name: string
  brand: 'Jordan' | 'Nike' | 'Adidas' | 'Dandy' | 'Barbas' | 'Coleccion'
  price: number
  oldPrice?: number
  img: string
  sizes: number[]
  badge?: 'Nuevo' | 'Hot' | 'Últimas piezas'
  accent: string
}

export const PRODUCTS: Product[] = [
  {
    id: 'aj3-denim-black',
    name: "Levi's x Air Jordan 3 Retro SP 'Black Denim'",
    brand: 'Jordan',
    price: 7000,
    img: '/products/shoe-3.webp',
    sizes: [8, 9, 10],
    badge: 'Nuevo',
    accent: '#ff49ab',
  },
  {
    id: 'aj3-denim-blue',
    name: "Levi's x Air Jordan 3 Retro SP 'Denim Blue'",
    brand: 'Jordan',
    price: 7000,
    img: '/products/shoe-4.webp',
    sizes: [8, 9, 10],
    accent: '#6b4bd6',
  },
  {
    id: 'aj1-white-black',
    name: "Fragment Design x Union LA x Air Jordan 1 Retro High OG SP 'White Black'",
    brand: 'Jordan',
    price: 18500,
    img: '/products/shoe-6.webp',
    sizes: [7, 8, 9, 10, 11],
    badge: 'Últimas piezas',
    accent: '#ff9f23',
  },
  {
    id: 'aj1-union',
    name: "Union LA x Air Jordan 1 Retro High OG SP",
    brand: 'Jordan',
    price: 12000,
    img: '/products/shoe-8.webp',
    sizes: [8, 9, 10, 11],
    accent: '#ff49ab',
  },
  {
    id: 'aj4-cave-stone',
    name: "Jordan 4 Retro 'Cave Stone'",
    brand: 'Jordan',
    price: 6500,
    img: '/products/shoe-18.webp',
    sizes: [7, 8, 9, 10, 11, 12],
    badge: 'Nuevo',
    accent: '#ff49ab',
  },
  {
    id: 'am95-black',
    name: "Air Max 95 'Triple Black'",
    brand: 'Nike',
    price: 7500,
    img: '/products/shoe-10.webp',
    sizes: [8, 9, 10, 11],
    accent: '#ff9f23',
  },
  {
    id: 'am95-sail',
    name: "Air Max 95 'Sail'",
    brand: 'Nike',
    price: 7500,
    img: '/products/shoe-20.webp',
    sizes: [8, 9, 10],
    accent: '#170a30',
  },
  {
    id: 'dunk-blue',
    name: "Dunk Low Retro 'Blue Stardust'",
    brand: 'Nike',
    price: 7000,
    img: '/products/shoe-21.webp',
    sizes: [7, 8, 9, 10],
    badge: 'Hot',
    accent: '#6b4bd6',
  },
  {
    id: 'dunk-red',
    name: "Dunk Low Retro 'Red Green'",
    brand: 'Nike',
    price: 11000,
    img: '/products/shoe-22.webp',
    sizes: [8, 9, 10],
    accent: '#ff49ab',
  },
  {
    id: 'dandy-champion',
    name: 'Dandy Hats "World Champion Boxing"',
    brand: 'Dandy',
    price: 3000,
    img: '/products/shoe-14.webp',
    sizes: [7, 8],
    accent: '#ff9f23',
  },
  {
    id: 'dandy-canelo',
    name: 'Dandy Hats "Canelo Pound for Pound"',
    brand: 'Dandy',
    price: 2600,
    img: '/products/shoe-15.webp',
    sizes: [7, 8],
    accent: '#ff49ab',
  },
  {
    id: 'dandy-tiffany',
    name: 'Dandy Hats "Canelo Tiffany"',
    brand: 'Dandy',
    price: 2600,
    img: '/products/shoe-16.webp',
    sizes: [7, 8],
    accent: '#170a30',
  },
  {
    id: 'dandy-tiff',
    name: 'Dandy Hats "Lost Hills Chrome"',
    brand: 'Dandy',
    price: 3000,
    img: '/products/shoe-17.webp',
    sizes: [7, 8],
    accent: '#ff49ab',
  },
  {
    id: 'panini-2026',
    name: 'Kit Panini Mundial 2026 — 980 stickers',
    brand: 'Coleccion',
    price: 7500,
    img: '/products/shoe-1.webp',
    sizes: [0],
    badge: 'Nuevo',
    accent: '#ff9f23',
  },
]

/** Productos destacados del hero */
export const HERO_PICKS = ['shoe-8', 'shoe-10', 'shoe-22', 'shoe-15'] as const

export const BOXES = [
  {
    tier: 'Chica',
    price: 1999,
    items: '1 par + 1 accesorio',
    copy: 'Para el que quiere entrar con bajo riesgo. Un surprise real.',
    color: '#ff49ab',
  },
  {
    tier: 'Mediana',
    price: 3499,
    items: '1 par premium + accesorio + stickers',
    copy: 'El sweet spot. La que más se lleva la gente.',
    color: '#170a30',
  },
  {
    tier: 'Grande',
    price: 5999,
    items: '1 par top tier + 2 accesorios + box edición',
    copy: 'Para el que apuesta fuerte. Lo que hay, hay.',
    color: '#ff9f23',
  },
]

export const EVENTS = [
  { name: 'Sneaker Fever', date: 'Mar 2026', city: 'CDMX' },
  { name: 'Sneaker Topia', date: 'Jun 2026', city: 'Guadalajara' },
  { name: 'Sneaker & Drunks', date: 'Sep 2026', city: 'Monterrey' },
]

export const STATS = [
  { value: 10, suffix: '+', label: 'Años en el juego' },
  { value: 5, suffix: '', label: 'Ciudades con envío' },
  { value: 120, suffix: 'K', label: 'Pares entregados' },
  { value: 3, suffix: '', label: 'Eventos al año' },
]

export const money = (n: number) =>
  n.toLocaleString('es-MX', {
    style: 'currency',
    currency: 'MXN',
    maximumFractionDigits: 0,
  })
