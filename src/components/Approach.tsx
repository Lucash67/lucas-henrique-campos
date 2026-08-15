import { principles, stack } from '../data/content'
import { Reveal } from './Reveal'

export function Approach() {
  return (
    <section className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="text-[12px] tracking-[0.28em] text-accent uppercase">Approach</p>
        <h2 className="display mt-3 max-w-3xl text-5xl md:text-7xl">
          Eu não construo só a tela. Eu construo o recorte.
        </h2>
        <p className="mt-6 max-w-xl text-[15px] text-mute">
          Código sem problema é exercício. Marketing sem produto é ruído. Prefiro o ponto em
          que os dois se encontram — e alguém consegue usar no dia seguinte.
        </p>
      </Reveal>

      <div className="mt-16 grid gap-px bg-line md:grid-cols-2">
        {principles.map((p, i) => (
          <Reveal key={p.n} delay={i * 0.05} className="bg-bg p-6 md:p-10">
            <p className="text-[12px] tracking-[0.2em] text-accent">{p.n}</p>
            <h3 className="display mt-4 text-3xl md:text-4xl">{p.title}</h3>
            <p className="mt-4 max-w-md text-sm text-mute">{p.text}</p>
          </Reveal>
        ))}
      </div>

      <Reveal className="mt-20">
        <p className="text-[12px] tracking-[0.28em] text-faint uppercase">Ferramentas que aparecem no trabalho</p>
        <p className="mt-3 max-w-lg text-sm text-mute">
          Lista honesta — o que uso de fato. Não é um ranking de senioridade.
        </p>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {stack.map((s) => (
            <div key={s.area}>
              <p className="text-[12px] tracking-[0.2em] text-accent uppercase">{s.area}</p>
              <p className="mt-3 text-sm leading-7 text-ink/80">{s.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  )
}
