import { experience, path, site } from '../data/content'
import { Reveal } from './Reveal'

export function About() {
  return (
    <section id="about" className="px-5 py-24 md:px-10 md:py-32">
      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <p className="text-[12px] tracking-[0.28em] text-accent uppercase">About</p>
          <h2 className="display mt-3 text-5xl md:text-7xl">Ainda construindo. Já entregando.</h2>
          <div className="mt-8 max-w-xl space-y-5 text-[15px] leading-relaxed text-mute">
            <p>
              Tenho {site.age} anos e vivo em {site.city}. Curso negócios na UNIFOR — 3º semestre —
              e passei pela Infinity School, onde programação, design e marketing digital
              começaram a ocupar o mesmo caderno.
            </p>
            <p>
              A carreira não está esperando o diploma. Trabalho na Terus, com tecnologia para o
              varejo, e já operei o digital da Acal. No paralelo, construo produtos
              próprios e projetos para outras pessoas.
            </p>
            <p>
              A sequência que me interessa é simples: estudo, construo, aplico, trabalho,
              experimento. Ideia só conta quando vira produto — mesmo que ainda imperfeito.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="text-[12px] tracking-[0.28em] text-faint uppercase">Path</p>
          <ol className="mt-8">
            {path.map((item, i) => (
              <li key={item.title} className="relative border-l border-line pl-6 pb-8 last:pb-0">
                <span className="absolute top-1.5 -left-[4px] h-2 w-2 rounded-full bg-accent" />
                <p className="text-[11px] tracking-[0.2em] text-accent uppercase">{item.phase}</p>
                <h3 className="mt-1 text-lg text-ink">{item.title}</h3>
                <p className="mt-2 text-sm text-mute">{item.text}</p>
                {i === path.length - 1 ? null : <span className="sr-only">depois</span>}
              </li>
            ))}
          </ol>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-4 md:grid-cols-2">
        {experience.map((job) => (
          <Reveal key={job.org}>
            <article className="min-h-[240px] rounded-sm border border-line bg-surface p-7">
              <div className="flex items-start justify-between gap-4">
                <h3 className="display text-4xl">{job.org}</h3>
                <p className="text-[11px] tracking-[0.16em] text-faint uppercase">{job.context}</p>
              </div>
              <p className="mt-2 text-[12px] tracking-[0.16em] text-accent uppercase">{job.field}</p>
              <p className="mt-5 text-sm text-mute">{job.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
