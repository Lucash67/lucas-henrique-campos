import type { Project } from '../data/content'
import { moreDemos, projects } from '../data/content'
import { ProjectMark } from './Mark'
import { SectionHead } from './SectionHead'

function Actions({ project }: { project: Project }) {
  return (
    <div className="mt-5 flex flex-wrap gap-4">
      <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
        Abrir projeto ↗
      </a>
      {project.githubUrl ? (
        <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
          Ver código
        </a>
      ) : null}
    </div>
  )
}

function Featured({ project }: { project: Project }) {
  return (
    <article data-reveal className="grid items-center gap-8 min-[980px]:grid-cols-2 min-[980px]:gap-12">
      <div>
        <p className="kicker">
          {project.index} — {project.category}
        </p>
        <h3 className="headline mt-3">{project.name}</h3>
        <p className="lede mt-4">{project.description}</p>
        <p className="mt-4 text-[0.8rem] text-faint">{project.technologies.join(' · ')}</p>
        <Actions project={project} />
      </div>
      <a href={project.demoUrl} target="_blank" rel="noreferrer" aria-label={`Abrir ${project.name}`}>
        <ProjectMark id={project.id} />
      </a>
    </article>
  )
}

export function Work() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)

  return (
    <section id="work" className="section">
      <div className="wrap">
        <SectionHead
          n="02"
          label="Projetos"
          lines={['Coisas que saíram', 'da pasta para o ar.']}
          aside="Curadoria, não despejo. Todo link abaixo abre no navegador agora."
        />

        <div className="mt-14 space-y-16">
          {featured.map((project) => (
            <Featured key={project.id} project={project} />
          ))}
        </div>

        <div className="card-grid mt-14 grid gap-3 min-[720px]:grid-cols-2">
          {rest.map((project) => (
            <a
              key={project.id}
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              data-reveal
              className="card card--compact"
            >
              <ProjectMark id={project.id} />
              <span>
                <span className="kicker kicker--plain text-mint">{project.category}</span>
                <span className="mt-1 block font-serif text-[1.2rem]">{project.name}</span>
              </span>
            </a>
          ))}
        </div>

        <div data-reveal className="mt-12">
          <p className="kicker">Também no ar</p>
          <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
            {moreDemos.map((demo) => (
              <li key={demo.href}>
                <a
                  href={demo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sm text-mute underline decoration-transparent underline-offset-[6px] hover:text-ink hover:decoration-mint"
                >
                  {demo.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
