import { useState } from 'react'
import { lenses, principles, site } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { SectionHead } from './SectionHead'

export function Identity() {
  const [active, setActive] = useState(0)
  const body = useReveal<HTMLDivElement>()
  const lens = lenses[active]

  return (
    <section id="about" className="relative px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        n="01"
        label="Sobre"
        lines={['Ainda escrevendo', 'a própria trajetória.']}
        aside={`${site.age} anos, ${site.city}. Estudo, trabalho e publico — as três coisas ao mesmo tempo.`}
      />

      <div ref={body} data-reveal className="mx-auto mt-16 max-w-4xl">
        <div className="overflow-hidden rounded-2xl border border-line bg-surface">
          <div className="flex flex-wrap items-center gap-2 border-b border-line px-4 py-3 md:px-6">
            <span aria-hidden className="mr-2 flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />
              <span className="h-2 w-2 rounded-full bg-ink/15" />
            </span>
            <div
              role="tablist"
              aria-label="Ler a mesma trajetória por três ângulos"
              className="flex flex-wrap gap-1"
            >
              {lenses.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={active === i}
                  onClick={() => setActive(i)}
                  className={`rounded-full px-3 py-1 text-[12px] tracking-[0.04em] transition-colors duration-200 ${
                    active === i ? 'bg-mint/12 text-mint' : 'text-mute hover:text-ink'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          <p className="headline border-b border-line px-6 py-7 text-[clamp(1.4rem,3.2vw,2.1rem)] md:px-10">
            {lens.lead}
          </p>

          <dl className="divide-y divide-line">
            {lens.rows.map(([question, answer]) => (
              <div key={question} className="grid gap-2 px-6 py-5 md:grid-cols-12 md:gap-8 md:px-10">
                <dt className="kicker text-faint md:col-span-3">{question}</dt>
                <dd
                  className={`text-ink/85 md:col-span-9 ${
                    lens.id === 'código' ? 'font-mono text-[13px] leading-6' : 'text-[15px]'
                  }`}
                >
                  {answer}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <ol className="mt-14 grid gap-x-12 gap-y-8 md:grid-cols-2">
          {principles.map(([title, text], i) => (
            <li key={title} className="flex gap-4">
              <span className="font-mono text-[12px] text-mint">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3 className="font-medium text-ink">{title}</h3>
                <p className="mt-1.5 max-w-sm text-sm text-mute">{text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
