import { useEffect } from 'react'
import { moreDemos, type Project } from '../data/content'

type Props = {
  project: Project | null
  onClose: () => void
}

export function ProjectModal({ project, onClose }: Props) {
  useEffect(() => {
    if (!project) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [project, onClose])

  if (!project) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center p-3 md:items-center md:p-8">
      <button
        type="button"
        aria-label="Fechar"
        className="absolute inset-0 bg-bg/70 backdrop-blur-md"
        onClick={onClose}
      />
      <article
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-title"
        className="relative max-h-[90svh] w-full max-w-3xl overflow-y-auto rounded-sm border border-line bg-bg-2 p-6 md:p-10"
      >
        <div className="flex items-start justify-between gap-4">
          <p className="text-[11px] tracking-[0.22em] text-accent uppercase">{project.category}</p>
          <button
            type="button"
            onClick={onClose}
            className="text-[11px] tracking-[0.18em] text-mute uppercase hover:text-ink"
          >
            Fechar
          </button>
        </div>
        <h2 id="project-title" className="display mt-4 text-4xl md:text-6xl">
          {project.title}
        </h2>
        <p className="mt-5 text-[15px] text-mute">{project.description}</p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <div>
            <p className="text-[11px] tracking-[0.2em] text-faint uppercase">Objetivo</p>
            <p className="mt-2 text-sm text-ink/85">{project.problem}</p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.2em] text-faint uppercase">Proposta</p>
            <p className="mt-2 text-sm text-ink/85">{project.proposal}</p>
          </div>
        </div>

        <ul className="mt-8 flex flex-wrap gap-2">
          {project.technologies.map((t) => (
            <li
              key={t}
              className="rounded-full border border-line px-3 py-1 text-[11px] tracking-[0.12em] text-mute uppercase"
            >
              {t}
            </li>
          ))}
        </ul>

        {project.id === 'real-estate-lps' ? (
          <ul className="mt-8 space-y-2">
            {moreDemos.map((d) => (
              <li key={d.href}>
                <a href={d.href} target="_blank" rel="noreferrer" className="text-sm text-accent hover:text-ink">
                  {d.label}
                </a>
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-3">
          {project.demoUrl ? (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-accent px-5 py-2.5 text-[12px] tracking-[0.16em] text-bg uppercase"
            >
              Explorar demo
            </a>
          ) : (
            <span className="text-[12px] tracking-[0.16em] text-faint uppercase">Demo em preparação</span>
          )}
          {project.githubUrl ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-line px-5 py-2.5 text-[12px] tracking-[0.16em] text-ink uppercase"
            >
              Ver código
            </a>
          ) : null}
        </div>
      </article>
    </div>
  )
}
