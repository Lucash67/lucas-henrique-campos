import { useEffect, useState } from 'react'

const links = [
  { href: '#about', label: 'Sobre' },
  { href: '#work', label: 'Projetos' },
  { href: '#building', label: 'Building' },
  { href: '#path', label: 'Trajetória' },
  { href: '#contact', label: 'Contato' },
]

export function Nav() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`site-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="wrap flex h-full items-center justify-between gap-4">
        <a href="#top" className="font-serif text-[1.15rem] italic tracking-tight text-ink">
          LHC<span className="text-mint not-italic">.</span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-6 min-[720px]:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[0.82rem] text-mute hover:text-ink">
              {l.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="btn btn--solid btn--shine hidden min-[720px]:inline-flex">
          Conversar
        </a>

        <button
          type="button"
          className="btn btn--ghost min-[720px]:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? 'Fechar' : 'Menu'}
        </button>
      </div>

      {open ? (
        <div className="absolute inset-x-0 top-full border-b border-line bg-paper min-[720px]:hidden">
          <nav aria-label="Menu móvel" className="wrap flex flex-col gap-1 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="py-3 text-ink"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <a href="#contact" className="btn btn--solid btn--shine mt-2" onClick={() => setOpen(false)}>
              Conversar
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  )
}
