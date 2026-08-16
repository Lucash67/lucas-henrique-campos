import { building } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { SectionHead } from './SectionHead'

export function Building() {
  const list = useReveal<HTMLOListElement>()

  return (
    <section id="building" className="relative px-5 py-24 md:px-10 md:py-32">
      <SectionHead
        n="03"
        label="Building"
        lines={['O próximo capítulo', 'ainda está aberto.']}
        aside="Produtos próprios. O status aqui é literal — nada é chamado de beta se não for."
      />

      <ol ref={list} data-reveal className="mt-16 grid gap-4 lg:grid-cols-3">
        {building.map((item) => (
          <li
            key={item.name}
            className={`rounded-2xl border border-line bg-surface p-7 md:p-8 ${
              item.featured ? 'lg:col-span-3 lg:grid lg:grid-cols-12 lg:gap-10 lg:p-10' : ''
            }`}
          >
            <div className={item.featured ? 'lg:col-span-4' : ''}>
              <div className="flex items-baseline justify-between gap-4">
                <span className="font-mono text-[12px] text-mint">{item.index}</span>
                <span className="kicker text-faint">{item.access}</span>
              </div>
              <h3
                className={`headline mt-4 ${
                  item.featured ? 'text-[clamp(2rem,4vw,3rem)]' : 'text-2xl'
                }`}
              >
                {item.name}
              </h3>
              <p className="mt-4 inline-flex items-center gap-2">
                <span
                  aria-hidden
                  className={`h-1.5 w-1.5 rounded-full ${
                    item.status === 'Conceito' ? 'bg-faint' : 'bg-mint'
                  }`}
                />
                <span className="kicker text-mute">{item.status}</span>
              </p>
            </div>

            <div className={item.featured ? 'mt-6 lg:col-span-7 lg:col-start-6 lg:mt-0' : 'mt-5'}>
              <p className="text-[15px] leading-relaxed text-mute">{item.description}</p>
              <p className="mt-4 text-[13px] text-faint">{item.technologies.join(' · ')}</p>

              {item.demoUrl ? (
                <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3">
                  <a
                    href={item.demoUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2 text-[13px] text-ink"
                  >
                    Ver como está
                    <span
                      aria-hidden
                      className="text-mint transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    >
                      ↗
                    </span>
                  </a>
                  {item.githubUrl ? (
                    <a
                      href={item.githubUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="text-[13px] text-mute transition-colors duration-200 hover:text-ink"
                    >
                      Ver código
                    </a>
                  ) : null}
                </div>
              ) : (
                <p className="mt-6 text-[13px] text-faint">Nada publicado ainda</p>
              )}
            </div>
          </li>
        ))}
      </ol>
    </section>
  )
}
