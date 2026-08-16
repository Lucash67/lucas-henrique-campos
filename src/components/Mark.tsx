type Kind = 'finance' | 'health' | 'landing'

export function ProjectMark({ id }: { id: string }) {
  const kind = markFor(id)
  return (
    <div aria-hidden className="scene">
      {kind === 'finance' ? <Finance /> : null}
      {kind === 'health' ? <Health /> : null}
      {kind === 'landing' ? <Landing /> : null}
    </div>
  )
}

function Finance() {
  return (
    <svg viewBox="0 0 160 160" className="scene__art">
      <rect className="scene__phone" x="48" y="28" width="64" height="104" rx="10" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <rect x="56" y="40" width="48" height="18" rx="3" fill="var(--color-mint)" opacity="0.85" />
      <rect x="56" y="66" width="32" height="4" rx="2" fill="currentColor" opacity="0.35" />
      <rect x="56" y="76" width="40" height="4" rx="2" fill="currentColor" opacity="0.22" />
      <rect x="56" y="86" width="24" height="4" rx="2" fill="currentColor" opacity="0.22" />
    </svg>
  )
}

function Health() {
  return (
    <svg viewBox="0 0 160 160" className="scene__art">
      <circle cx="80" cy="80" r="28" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <g className="scene__orbit" style={{ transformOrigin: '80px 80px' }}>
        <circle cx="80" cy="80" r="46" fill="none" stroke="var(--color-mint)" strokeWidth="1" opacity="0.45" />
        <circle cx="126" cy="80" r="3.2" fill="var(--color-mint)" />
      </g>
      <path d="M80 68 v24 M68 80 h24" stroke="var(--color-mint)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function Landing() {
  return (
    <svg viewBox="0 0 160 160" className="scene__art scene__float">
      <rect x="36" y="32" width="88" height="96" rx="8" fill="none" stroke="currentColor" strokeWidth="1.5" />
      <path d="M50 52 h60 M50 66 h40" stroke="var(--color-mint)" strokeWidth="2" strokeLinecap="round" />
      <rect x="50" y="86" width="28" height="10" rx="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function markFor(id: string): Kind {
  if (id === 'odontology-finance') return 'finance'
  if (id === 'malu-nutri') return 'health'
  return 'landing'
}
