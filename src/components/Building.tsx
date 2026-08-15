import { building } from '../data/content'
import { Reveal } from './Reveal'

export function Building() {
  return (
    <section id="building" className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="text-[12px] tracking-[0.28em] text-accent uppercase">Currently building</p>
        <h2 className="display mt-3 max-w-3xl text-5xl md:text-7xl">
          Produtos que ainda não pediram desculpa por estar incompletos.
        </h2>
        <p className="mt-6 max-w-lg text-[15px] text-mute">
          Não é lista de ideias. É o que está em cima da mesa — com o status que realmente tem.
        </p>
      </Reveal>

      <div className="mt-16 divide-y divide-line border-y border-line">
        {building.map((item, i) => (
          <Reveal key={item.title}>
            <article className="grid gap-4 py-10 md:grid-cols-[80px_1fr_1.2fr] md:items-start">
              <p className="text-[12px] tracking-[0.2em] text-faint">0{i + 1}</p>
              <div>
                <h3 className="display text-3xl md:text-4xl">{item.title}</h3>
                <p className="mt-2 text-[11px] tracking-[0.16em] text-accent uppercase">{item.status}</p>
              </div>
              <p className="text-sm text-mute md:pt-2">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
