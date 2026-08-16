const links = [
  { href: '#about', label: 'Sobre' },
  { href: '#work', label: 'Projetos' },
  { href: '#building', label: 'Building', hideOnMobile: true },
  { href: '#path', label: 'Trajetória', hideOnMobile: true },
  { href: '#contact', label: 'Contato' },
]

export function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-4 md:px-6">
      <div className="flex w-full max-w-5xl items-center justify-between gap-4 rounded-full border border-line bg-bg/70 px-4 py-2 backdrop-blur-md md:px-5">
        <a href="#top" className="shrink-0 text-[15px] font-semibold tracking-tight text-ink">
          LHC<span className="text-mint">.</span>
        </a>
        <nav aria-label="Principal" className="flex items-center gap-4 md:gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-[12px] text-mute transition-colors duration-200 hover:text-ink ${
                l.hideOnMobile ? 'hidden md:inline' : ''
              }`}
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="shrink-0 rounded-full border border-line-strong px-3 py-1.5 text-[12px] text-ink transition-colors duration-200 hover:border-mint/40 hover:text-mint"
        >
          Conversar ↗
        </a>
      </div>
    </header>
  )
}
