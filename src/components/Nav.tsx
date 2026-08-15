const links = [
  { href: '#work', label: 'Work' },
  { href: '#about', label: 'About' },
  { href: '#building', label: 'Building' },
  { href: '#contact', label: 'Contact' },
]

export function Nav() {
  return (
    <header className="fixed top-0 right-0 left-0 z-50 flex items-center justify-between px-5 py-5 md:px-10">
      <a href="#top" className="text-[13px] tracking-[0.22em] text-ink/80 uppercase">
        LHC
      </a>
      <nav
        aria-label="Principal"
        className="flex items-center gap-1 rounded-full border border-line bg-bg/55 px-2 py-1.5 backdrop-blur-xl md:gap-2 md:px-3"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="rounded-full px-2.5 py-1 text-[11px] tracking-[0.16em] text-mute uppercase transition-colors hover:text-ink md:px-3 md:text-[12px]"
          >
            {l.label}
          </a>
        ))}
      </nav>
    </header>
  )
}
