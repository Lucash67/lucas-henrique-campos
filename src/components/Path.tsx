import { path } from '../data/content'
import { SectionHead } from './SectionHead'

export function Path() {
  return (
    <section id="path" className="section">
      <div className="wrap">
        <SectionHead n="04" label="Trajetória" lines={['Onde eu aprendi', 'o que sei fazer.']} />

        <ol className="relative mx-auto mt-12 max-w-2xl">
          <span aria-hidden className="absolute top-3 bottom-3 left-[5px] w-px bg-line" />
          {path.map((item) => (
            <li key={item.org} className="relative py-7 pl-10" data-reveal>
              <span
                aria-hidden
                className="absolute top-9 left-0 h-2.5 w-2.5 rounded-full border-2 border-mint bg-paper"
              />
              <p className="kicker kicker--plain text-faint">{item.period}</p>
              <p className="kicker mt-3">{item.org}</p>
              <h3 className="headline mt-2">{item.role}</h3>
              <p className="lede mt-3">{item.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
