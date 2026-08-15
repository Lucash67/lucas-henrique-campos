import { useEffect, useRef } from 'react'
import { site } from '../data/content'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

export function Hero() {
  const stage = useRef<HTMLElement>(null)
  const glow = useRef<HTMLDivElement>(null)
  const reduced = usePrefersReducedMotion()

  useEffect(() => {
    if (reduced) return
    const root = stage.current
    const light = glow.current
    if (!root || !light) return

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect()
      const x = ((e.clientX - r.left) / r.width) * 100
      const y = ((e.clientY - r.top) / r.height) * 100
      light.style.background = `radial-gradient(520px circle at ${x}% ${y}%, rgba(196,165,116,0.16), transparent 55%)`
    }

    root.addEventListener('pointermove', onMove, { passive: true })
    return () => root.removeEventListener('pointermove', onMove)
  }, [reduced])

  return (
    <section
      id="top"
      ref={stage}
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden px-5 pb-16 md:px-10 md:pb-20"
    >
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,rgba(236,232,225,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(236,232,225,0.045)_1px,transparent_1px)] bg-size-[72px_72px] mask-[radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div ref={glow} className="pointer-events-none absolute inset-0 transition-opacity duration-300" />

      <div className="relative z-10 max-w-6xl">
        <p className="mb-8 text-[12px] tracking-[0.28em] text-mute uppercase">
          {site.city} · {site.state} · {site.age}
        </p>
        <h1 className="display text-[18vw] text-ink md:text-[9.4vw]">
          Lucas
          <br />
          Henrique
          <br />
          <span className="italic text-accent">Campos</span>
        </h1>
        <div className="mt-10 max-w-xl md:mt-14">
          <p className="display text-3xl text-ink/90 italic md:text-5xl">
            Construo o sistema atrás da venda.
          </p>
          <p className="mt-6 max-w-md text-[15px] leading-relaxed text-mute">
            Tecnologia, marketing e negócio no mesmo processo. Estudo, trabalho e
            publico — ainda construindo a história, já no meio da operação.
          </p>
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-6 text-[12px] tracking-[0.18em] text-faint uppercase">
          <a href="#work" className="text-accent hover:text-ink">
            Ver o trabalho
          </a>
          <span className="hidden h-px w-10 bg-line md:block" />
          <span>UNIFOR · Terus · Produtos próprios</span>
        </div>
      </div>
    </section>
  )
}
