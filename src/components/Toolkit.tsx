import { toolkit } from '../data/content'
import { SectionHead } from './SectionHead'

const extras = toolkit.flatMap((group) => group.items.split(' · ')).slice(0, 6)

export function Toolkit() {
  return (
    <section className="section">
      <div className="wrap">
        <SectionHead
          n="05"
          label="Toolkit"
          lines={['As ferramentas', 'e onde elas param.']}
          aside="Listado porque apareceu em trabalho real, não porque eu vi um tutorial."
        />

        <div className="card-grid mt-12 grid gap-3 min-[720px]:grid-cols-2">
          {toolkit.map((group) => (
            <div key={group.label} className="card p-6" data-reveal>
              <p className="kicker">{group.label}</p>
              <h3 className="headline mt-3">{group.name}</h3>
              <p className="lede mt-3">{group.items}</p>
            </div>
          ))}
        </div>

        <div className="panel mt-3 flex flex-col gap-5 px-7 py-8 min-[720px]:flex-row min-[720px]:items-center min-[720px]:justify-between" data-reveal>
          <p className="headline">Estudar. Publicar. Corrigir.</p>
          <ul className="flex flex-wrap gap-2">
            {extras.map((tag) => (
              <li key={tag} className="rounded-full border border-line bg-surface px-3 py-1 text-[12px] text-mute">
                {tag}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
