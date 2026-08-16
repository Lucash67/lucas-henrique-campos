/** Abstract marks — a visual object per project, not a fake screenshot. */

type Kind = 'finance' | 'health' | 'landing'

export function ProjectMark({ id }: { id: string }) {
  const kind = markFor(id)
  return <Mark kind={kind} />
}

function Mark({ kind }: { kind: Kind }) {
  return (
    <div
      aria-hidden
      className="mark"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--accent-soft),transparent_62%)]" />
      {kind === 'finance' ? <Finance /> : null}
      {kind === 'health' ? <Health /> : null}
      {kind === 'landing' ? <Landing /> : null}
    </div>
  )
}

function Finance() {
  return (
    <svg viewBox="0 0 160 120" className="relative h-[58%] w-[58%] text-ink/80">
      <rect x="28" y="18" width="104" height="84" rx="10" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M44 78 L64 58 L82 68 L112 40" fill="none" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="112" cy="40" r="3.2" fill="var(--accent)" />
    </svg>
  )
}

function Health() {
  return (
    <svg viewBox="0 0 160 120" className="relative h-[58%] w-[58%] text-ink/80">
      <circle cx="80" cy="60" r="36" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="80" cy="60" r="22" fill="none" stroke="var(--accent)" strokeWidth="2" strokeDasharray="48 90" />
      <path d="M80 46 v28 M66 60 h28" stroke="var(--accent)" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  )
}

function Landing() {
  return (
    <svg viewBox="0 0 160 120" className="relative h-[58%] w-[58%] text-ink/80">
      <rect x="36" y="16" width="88" height="88" rx="6" fill="none" stroke="currentColor" strokeWidth="1.4" />
      <path d="M50 40 h60 M50 52 h40" stroke="var(--accent)" strokeWidth="2" strokeLinecap="round" />
      <rect x="50" y="68" width="28" height="10" rx="5" fill="none" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

function markFor(id: string): Kind {
  if (id === 'odontology-finance') return 'finance'
  if (id === 'malu-nutri') return 'health'
  return 'landing'
}
