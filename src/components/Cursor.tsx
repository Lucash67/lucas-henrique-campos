import { useEffect, useRef } from 'react'

export function Cursor() {
  const dot = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const fine = window.matchMedia('(pointer: fine)').matches
    if (!fine) return

    document.documentElement.classList.add('has-custom-cursor')
    const el = dot.current
    if (!el) return

    let x = 0
    let y = 0
    let tx = 0
    let ty = 0
    let hover = false
    let raf = 0

    const move = (e: PointerEvent) => {
      tx = e.clientX
      ty = e.clientY
    }

    const over = (e: PointerEvent) => {
      const t = e.target
      hover = t instanceof Element && Boolean(t.closest('a, button, [data-cursor]'))
    }

    const loop = () => {
      x += (tx - x) * 0.22
      y += (ty - y) * 0.22
      el.style.transform = `translate3d(${x}px, ${y}px, 0) scale(${hover ? 1.8 : 1})`
      el.style.opacity = hover ? '0.45' : '0.85'
      raf = requestAnimationFrame(loop)
    }

    window.addEventListener('pointermove', move, { passive: true })
    window.addEventListener('pointerover', over, { passive: true })
    raf = requestAnimationFrame(loop)

    return () => {
      document.documentElement.classList.remove('has-custom-cursor')
      window.removeEventListener('pointermove', move)
      window.removeEventListener('pointerover', over)
      cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <div
      ref={dot}
      aria-hidden
      className="pointer-events-none fixed top-0 left-0 z-[90] hidden h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference md:block"
    />
  )
}
