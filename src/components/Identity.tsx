import { useState } from 'react'
import { lenses, principles, site } from '../data/content'
import { SectionHead } from './SectionHead'

export function Identity() {
  const [active, setActive] = useState(0)
  const lens = lenses[active]

  return (
    <section id="about" className="section">
      <div className="wrap">
        <SectionHead
          n="01"
          label="Sobre"
          lines={['Ainda escrevendo', 'a própria trajetória.']}
          aside={`${site.age} anos, ${site.city}. Estudo, trabalho e publico — as três coisas ao mesmo tempo.`}
        />

        <div className="identity-body mx-auto mt-12 max-w-3xl" data-reveal>
          <div className="card overflow-hidden p-0">
            <div className="flex flex-wrap items-center gap-2 border-b border-line px-4 py-3 md:px-6">
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
                    className={`rounded-full px-3 py-1 text-[12px] ${
                      active === i ? 'bg-mint/15 text-mint' : 'text-mute hover:text-ink'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <p className="headline border-b border-line px-6 py-6 md:px-8">{lens.lead}</p>

            <dl className="divide-y divide-line">
              {lens.rows.map(([question, answer]) => (
                <div key={question} className="grid gap-2 px-6 py-4 md:grid-cols-12 md:gap-6 md:px-8">
                  <dt className="kicker kicker--plain text-faint md:col-span-3">{question}</dt>
                  <dd
                    className={`text-ink md:col-span-9 ${
                      lens.id === 'código' ? 'font-mono text-[13px] leading-6' : 'text-[0.95rem]'
                    }`}
                  >
                    {answer}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <ol className="card-grid mt-10 grid gap-6 min-[720px]:grid-cols-2">
            {principles.map(([title, text], i) => (
              <li key={title} className="card p-5" data-reveal>
                <span className="kicker kicker--plain text-mint">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 font-serif text-[1.15rem]">{title}</h3>
                <p className="lede mt-2">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
