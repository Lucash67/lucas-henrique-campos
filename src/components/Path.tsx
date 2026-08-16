import { path } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { SectionHead } from './SectionHead'

export function Path() {
  const list = useReveal<HTMLOListElement>()

  return (
    <section id="path" className="relative px-5 py-24 md:px-10 md:py-32">
      <SectionHead n="04" label="Trajetória" lines={['Onde eu aprendi', 'o que sei fazer.']} />

      <ol ref={list} data-reveal className="relative mx-auto mt-20 max-w-2xl">
        <span aria-hidden className="absolute top-3 bottom-3 left-[5px] w-px bg-line" />
        {path.map((item) => (
          <li key={item.org} className="relative pl-10 py-8">
            <span
              aria-hidden
              className="absolute top-10 left-0 h-2.5 w-2.5 rounded-full border-2 border-mint bg-bg"
            />
            <p className="kicker text-faint">{item.period}</p>
            <p className="kicker mt-3 text-mint">{item.org}</p>
            <h3 className="headline mt-2 text-2xl md:text-3xl">{item.role}</h3>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-mute">{item.text}</p>
          </li>
        ))}
      </ol>
    </section>
  )
}
