import { useEffect } from 'react'
import StreetHeader from './StreetHeader'
import StreetHero from './StreetHero'
import StreetFlyers from './StreetFlyers'
import StreetCatalog from './StreetCatalog'
import StreetTickets from './StreetTickets'
import StreetBarrio from './StreetBarrio'
import StreetLocal from './StreetLocal'
import StreetFooter from './StreetFooter'

export default function StreetHome() {
  useEffect(() => {
    document.title = 'Pompa Street — El barrio se pone las sneakers'
  }, [])

  return (
    <div className="theme-street min-h-screen bg-paper text-ink">
      <StreetHeader />
      <main>
        <StreetHero />
        <StreetFlyers />
        <StreetCatalog />
        <StreetTickets />
        <StreetBarrio />
        <StreetLocal />
      </main>
      <StreetFooter />
    </div>
  )
}
