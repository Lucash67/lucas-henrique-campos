import { building } from '../data/content'
import { SectionHead } from './SectionHead'

export function Building() {
  return (
    <section id="building" className="section">
      <div className="wrap">
        <SectionHead
          n="03"
          label="Building"
          lines={['O próximo capítulo', 'ainda está aberto.']}
          aside="Produtos próprios. O status aqui é literal — nada é chamado de beta se não for."
        />

        <ol className="card-grid mt-12 grid gap-3 min-[720px]:grid-cols-2">
          {building.map((item) => (
            <li
              key={item.name}
              data-reveal
              className={`card p-6 ${item.featured ? 'min-[720px]:col-span-2' : ''}`}
            >
              <div className="flex items-baseline justify-between gap-3">
                <span className="kicker kicker--plain text-mint">{item.index}</span>
                <span className="kicker kicker--plain text-faint">{item.access}</span>
              </div>
              <h3 className="headline mt-3">{item.name}</h3>
              <p className="mt-3 inline-flex items-center gap-2">
                <span
                  aria-hidden
                  className={`badge-live h-1.5 w-1.5 rounded-full ${
                    item.status === 'Conceito' ? 'bg-faint' : 'bg-mint'
                  }`}
                />
                <span className="kicker kicker--plain text-mute">{item.status}</span>
              </p>
              <p className="lede mt-4">{item.description}</p>
              <p className="mt-3 text-[0.8rem] text-faint">{item.technologies.join(' · ')}</p>
              {item.demoUrl ? (
                <div className="mt-5 flex flex-wrap gap-3">
                  <a href={item.demoUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
                    Ver como está ↗
                  </a>
                  {item.githubUrl ? (
                    <a href={item.githubUrl} target="_blank" rel="noreferrer" className="btn btn--ghost">
                      Ver código
                    </a>
                  ) : null}
                </div>
              ) : (
                <p className="mt-5 text-[0.8rem] text-faint">Nada publicado ainda</p>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
