import Header from './Header'
import Hero from './Hero'
import Catalog from './Catalog'
import MysteryBox from './MysteryBox'
import Story from './Story'
import { Footer, Storefront } from './Sections'

export default function Home() {
  return (
    <div className="min-h-screen bg-paper">
      <Header />
      <main>
        <Hero />
        <Catalog />
        <MysteryBox />
        <Story />
        <Storefront />
      </main>
      <Footer />
    </div>
  )
}
