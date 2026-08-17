import type { Project } from '../data/content'
import { moreDemos, projects } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { ProjectMark } from './Mark'
import { SectionHead } from './SectionHead'

function ProjectCard({ project }: { project: Project }) {
  const ref = useReveal<HTMLElement>()

  return (
    <article ref={ref} data-reveal className="project-card">
      <div className="flex items-baseline justify-between">
        <span className="font-mono text-[12px] text-faint">{project.index}</span>
        <span className="kicker text-faint">{project.category}</span>
      </div>

      <ProjectMark id={project.id} frame={project.frame} />

      <h3 className="headline mt-5 text-[1.65rem]">{project.name}</h3>
      <p className="mt-3 flex-1 text-[14px] leading-relaxed text-mute">{project.description}</p>
      <p className="mt-4 text-[12px] text-faint">{project.technologies.join(' · ')}</p>

      <div className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
        <a
          href={project.demoUrl}
          target="_blank"
          rel="noreferrer"
          className="text-[13px] text-ink"
        >
          Abrir projeto ↗
        </a>
        {project.githubUrl ? (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-[13px] text-mute"
          >
            Ver código
          </a>
        ) : null}
      </div>
    </article>
  )
}

export function Work() {
  const tail = useReveal<HTMLDivElement>()

  return (
    <section id="work" className="relative px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        n="02"
        label="Projetos"
        lines={['Coisas que saíram', 'da pasta para o ar.']}
        aside="Curadoria, não despejo. Todo link abaixo abre no navegador agora."
      />

      <div className="mt-16 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
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
                className="text-sm text-mute underline decoration-transparent underline-offset-[6px] hover:text-ink hover:decoration-mint"
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
