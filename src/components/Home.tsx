import { useEffect } from 'react'
import Header from './Header'
import Hero from './Hero'
import Catalog from './Catalog'
import MysteryBox from './MysteryBox'
import Story from './Story'
import { Footer, Storefront } from './Sections'
import { THEME_CLASS, type Variant } from '../variant'

const TITLES: Record<Variant, string> = {
  light: 'Pompa Street — El fuego de México al mundo',
  dark: 'Pompa Dark — Sneakers y streetwear desde CDMX',
  street: 'Pompa Street — El barrio se pone las sneakers',
}

export default function Home({ variant }: { variant: Variant }) {
  useEffect(() => {
    document.title = TITLES[variant]
  }, [variant])

  return (
    <div className={`min-h-screen bg-paper text-ink ${THEME_CLASS[variant]}`}>
      <Header variant={variant} />
      <main>
        <Hero variant={variant} />
        <Catalog variant={variant} />
        <MysteryBox variant={variant} />
        <Story variant={variant} />
        <Storefront variant={variant} />
      </main>
      <Footer variant={variant} />
    </div>
  )
}
