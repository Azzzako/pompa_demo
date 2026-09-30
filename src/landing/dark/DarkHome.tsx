import { useEffect } from 'react'
import DarkHeader from './DarkHeader'
import DarkHero from './DarkHero'
import DarkCatalog from './DarkCatalog'
import DarkBoxes from './DarkBoxes'
import DarkStory from './DarkStory'
import DarkStore from './DarkStore'
import DarkFooter from './DarkFooter'

export default function DarkHome() {
  useEffect(() => {
    document.title = 'Pompa Dark — Sneakers verificadas, entrega inmediata'
  }, [])

  return (
    <div className="theme-dark min-h-screen bg-paper text-ink">
      <DarkHeader />
      <main>
        <DarkHero />
        <DarkCatalog />
        <DarkBoxes />
        <DarkStory />
        <DarkStore />
      </main>
      <DarkFooter />
    </div>
  )
}
