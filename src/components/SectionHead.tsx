import { useReveal } from '../hooks/useReveal'

type Props = {
  n: string
  label: string
  lines: [string, string]
  aside?: string
}

export function SectionHead({ n, label, lines, aside }: Props) {
  const ref = useReveal<HTMLDivElement>()

  return (
    <div ref={ref} data-reveal>
      <p className="kicker text-mint">
        {n} — {label}
      </p>
      <div className="mt-5 flex flex-wrap items-end justify-between gap-x-12 gap-y-6">
        <h2 className="headline max-w-3xl text-[clamp(2rem,5.6vw,3.75rem)]">
          {lines[0]}
          <br />
          <span className="text-mute">{lines[1]}</span>
        </h2>
        {aside ? <p className="max-w-xs text-sm text-mute">{aside}</p> : null}
      </div>
    </div>
  )
}
