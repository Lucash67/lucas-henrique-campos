import { toolkit } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { SectionHead } from './SectionHead'

const extras = ['Git', 'GitHub', 'Vercel', 'Docker', 'Figma', 'IA']

export function Toolkit() {
  const grid = useReveal<HTMLDivElement>()

  return (
    <section className="relative px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        n="05"
        label="Toolkit"
        lines={['As ferramentas', 'e onde elas param.']}
        aside="Listado porque apareceu em trabalho real, não porque eu vi um tutorial."
      />

      <div ref={grid} data-reveal className="mt-16 grid gap-4 md:grid-cols-2">
        {toolkit.map((group) => (
          <div key={group.label} className="rounded-2xl border border-line bg-surface p-7 md:p-8">
            <p className="kicker text-mint">{group.label}</p>
            <h3 className="headline mt-3 text-2xl md:text-3xl">{group.name}</h3>
            <p className="mt-3 text-sm leading-7 text-mute">{group.items}</p>
          </div>
        ))}
      </div>

      <div className="mt-4 flex flex-col gap-5 rounded-2xl border border-line bg-surface px-7 py-8 md:flex-row md:items-center md:justify-between md:px-10">
        <p className="headline text-2xl md:text-3xl">Estudar. Publicar. Corrigir.</p>
        <ul className="flex flex-wrap gap-2">
          {extras.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-line px-3 py-1 text-[12px] text-mute"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
