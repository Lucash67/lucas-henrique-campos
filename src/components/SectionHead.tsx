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
    <div ref={ref} data-reveal className="section-head">
      <p className="kicker">
        {n} — {label}
      </p>
      <h2 className="headline mt-4">
        {lines[0]}
        <br />
        <span className="text-mute">{lines[1]}</span>
      </h2>
      {aside ? <p className="lede mt-4">{aside}</p> : null}
    </div>
  )
}
