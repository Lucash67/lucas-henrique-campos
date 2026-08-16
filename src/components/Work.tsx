import type { Project } from '../data/content'
import { moreDemos, projects } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { ProjectMark } from './Mark'
import { SectionHead } from './SectionHead'

function Actions({ project }: { project: Project }) {
  return (
    <div className="mt-7 flex flex-wrap items-center gap-x-8 gap-y-3">
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer"
        className="group/link inline-flex items-center gap-2 text-[13px] text-ink"
      >
        Abrir projeto
        <span
          aria-hidden
          className="text-mint transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
        >
          ↗
        </span>
      </a>
      {project.githubUrl ? (
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[13px] text-mute transition-colors duration-200 hover:text-ink"
        >
          Ver código
        </a>
      ) : null}
    </div>
  )
}

function Featured({ project, flip }: { project: Project; flip: boolean }) {
  const ref = useReveal<HTMLElement>()

  return (
    <article ref={ref} data-reveal className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <div className={flip ? 'lg:order-2' : ''}>
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-[12px] text-mint">{project.index}</span>
          <span className="kicker text-faint">{project.category}</span>
          <span className="kicker ml-auto text-faint">{project.year}</span>
        </div>
        <h3 className="headline mt-4 text-[clamp(2rem,5vw,3.25rem)]">{project.name}</h3>
        <p className="mt-5 max-w-lg text-[15px] leading-relaxed text-mute">{project.description}</p>
        <p className="mt-5 text-[13px] text-faint">{project.technologies.join(' · ')}</p>
        <Actions project={project} />
      </div>
      <a
        href={project.demoUrl}
        target="_blank"
        rel="noreferrer"
        aria-label={`Abrir ${project.name}`}
        className={`block transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:-translate-y-1 ${
          flip ? 'lg:order-1' : ''
        }`}
      >
        <ProjectMark id={project.id} />
      </a>
    </article>
  )
}

export function Work() {
  const featured = projects.filter((p) => p.featured)
  const rest = projects.filter((p) => !p.featured)
  const tail = useReveal<HTMLDivElement>()

  return (
    <section id="work" className="relative px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        n="02"
        label="Projetos"
        lines={['Coisas que saíram', 'da pasta para o ar.']}
        aside="Curadoria, não despejo. Todo link abaixo abre no navegador agora."
      />

      <div className="mt-20 space-y-24 md:space-y-28">
        {featured.map((project, i) => (
          <Featured key={project.id} project={project} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="mt-24 grid gap-6 md:grid-cols-3">
        {rest.map((project) => (
          <article
            key={project.id}
            className="flex flex-col rounded-2xl border border-line bg-surface p-6"
          >
            <div className="flex items-baseline justify-between gap-3">
              <span className="font-mono text-[12px] text-mint">{project.index}</span>
              <span className="kicker text-faint">{project.category}</span>
            </div>
            <h3 className="headline mt-5 text-2xl">{project.name}</h3>
            <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{project.description}</p>
            <p className="mt-5 text-[12px] text-faint">{project.technologies.join(' · ')}</p>
            <Actions project={project} />
          </article>
        ))}
      </div>

      <div ref={tail} data-reveal className="mt-16 border-t border-line pt-8">
        <p className="kicker text-faint">Também no ar</p>
        <ul className="mt-5 flex flex-wrap gap-x-8 gap-y-3">
          {moreDemos.map((demo) => (
            <li key={demo.href}>
              <a
                href={demo.href}
                target="_blank"
                rel="noreferrer"
                className="text-sm text-mute underline decoration-transparent underline-offset-[6px] transition-colors duration-200 hover:text-ink hover:decoration-mint"
              >
                {demo.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
