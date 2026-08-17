import { useEffect } from 'react'

/** Page-level spotlight. Same mechanic as the reference: CSS vars on pointermove. */
export function usePointerGlow() {
  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--mouse-x', '70%')
    root.style.setProperty('--mouse-y', '10%')

    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)')
    if (reduced.matches) return

    const onMove = ({ clientX, clientY }: PointerEvent) => {
      root.style.setProperty('--mouse-x', `${clientX}px`)
      root.style.setProperty('--mouse-y', `${clientY}px`)
    }

    document.addEventListener('pointermove', onMove, { passive: true })
    return () => document.removeEventListener('pointermove', onMove)
  }, [])
}
