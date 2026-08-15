import { moreDemos, projects, type Project } from '../data/content'
import { Reveal } from './Reveal'

type Props = {
  onOpen: (project: Project) => void
}

function statusLabel(status: Project['status']) {
  if (status === 'live') return 'Demo ao vivo'
  if (status === 'building') return 'Em desenvolvimento'
  return 'Conceito'
}

export function Work({ onOpen }: Props) {
  const featured = projects.find((p) => p.featured && p.id === 'lh-hub') ?? projects[0]
  const rest = projects.filter((p) => p.id !== featured.id)

  return (
    <section id="work" className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <div className="mb-16 flex items-end justify-between gap-6">
          <div>
            <p className="text-[12px] tracking-[0.28em] text-accent uppercase">Selected work</p>
            <h2 className="display mt-3 text-5xl md:text-7xl">O que já está no ar</h2>
          </div>
          <p className="hidden max-w-xs text-right text-sm text-mute md:block">
            Uma seleção. Não é tudo que existe no computador — é o que sustenta a conversa.
          </p>
        </div>
      </Reveal>

      <Reveal>
        <article
          data-cursor
          className={`group relative overflow-hidden rounded-sm bg-linear-to-br ${featured.tone} p-6 md:p-12`}
        >
          <div className="mb-16 flex items-start justify-between gap-4">
            <p className="text-[12px] tracking-[0.22em] text-accent uppercase">{featured.category}</p>
            <p className="text-[12px] tracking-[0.18em] text-faint uppercase">{featured.year}</p>
          </div>
          <h3 className="display max-w-3xl text-5xl md:text-8xl">{featured.title}</h3>
          <p className="mt-6 max-w-lg text-[15px] text-mute">{featured.description}</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => onOpen(featured)}
              className="rounded-full border border-accent/40 bg-accent-soft px-5 py-2.5 text-[12px] tracking-[0.16em] text-accent uppercase"
            >
              Explorar projeto
            </button>
            {featured.demoUrl ? (
              <a
                href={featured.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-line px-5 py-2.5 text-[12px] tracking-[0.16em] text-ink/80 uppercase"
              >
                Abrir demo
              </a>
            ) : null}
          </div>
        </article>
      </Reveal>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {rest.map((project, i) => (
          <Reveal key={project.id} delay={i * 0.06}>
            <article
              data-cursor
              className={`flex min-h-[340px] flex-col justify-between rounded-sm bg-linear-to-br ${project.tone} p-6 md:p-8`}
            >
              <div className="flex items-start justify-between gap-4">
                <p className="text-[11px] tracking-[0.2em] text-accent uppercase">{project.category}</p>
                <p className="text-[11px] tracking-[0.16em] text-faint uppercase">{statusLabel(project.status)}</p>
              </div>
              <div>
                <h3 className="display text-4xl md:text-5xl">{project.title}</h3>
                <p className="mt-4 max-w-md text-sm text-mute">{project.description}</p>
                <button
                  type="button"
                  onClick={() => onOpen(project)}
                  className="mt-8 text-[12px] tracking-[0.16em] text-ink uppercase underline decoration-line underline-offset-8 hover:decoration-accent"
                >
                  Explorar projeto
                </button>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-16">
        <p className="text-[12px] tracking-[0.22em] text-faint uppercase">Mais landings públicas</p>
        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          {moreDemos.map((d) => (
            <li key={d.href}>
              <a
                href={d.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-mute transition-colors hover:text-ink"
              >
                {d.label}
              </a>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
