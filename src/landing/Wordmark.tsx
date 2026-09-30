import type { Variant } from '../variant'

/* Letra gigante de cierre: POMPA STREET.
   Es el bloque con más presencia de ambas landings, sólo cambia el tratamiento. */
export default function Wordmark({ variant }: { variant: Variant }) {
  if (variant === 'street') {
    return (
      <p
        aria-hidden
        className="font-brut text-[clamp(3.2rem,15.5vw,15rem)] leading-[0.8] tracking-[-0.01em] text-stroke uppercase"
      >
        Pompa
        <br />
        Street
      </p>
    )
  }

  return (
    <p
      aria-hidden
      className="font-display text-[clamp(2.6rem,12vw,11rem)] leading-[0.82] tracking-[-0.03em] text-ink/90 uppercase"
    >
      Pompa
      <br />
      <span className="text-pink">Street</span>
    </p>
  )
}
