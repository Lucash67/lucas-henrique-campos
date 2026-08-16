import { site } from '../data/content'

export function Hero() {
  return (
    <section id="top" className="section pt-8">
      <div className="wrap hero-cascade">
        <div className="hero__copy mx-auto max-w-[40rem]">
          <p className="kicker" data-desk-reveal>
            {site.city}, {site.state}
          </p>
          <h1 className="display mt-5" data-desk-reveal>
            Lucas Henrique
            <br />
            Campos
          </h1>
          <p className="lede mt-5" data-desk-reveal>
            Construo o sistema atrás da venda.
          </p>
          <a href="#work" className="btn btn--solid btn--shine mt-7 w-full min-[720px]:w-auto" data-desk-reveal>
            Ver o trabalho
          </a>
        </div>

        <div className="media mx-auto mt-12 max-w-[28rem]">
          <div className="media__blob" aria-hidden />
          <div className="media__seal" data-desk-reveal aria-hidden>
            <span className="display text-[4.2rem] text-mint">L</span>
          </div>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 min-[720px]:grid-cols-4">
          {[
            ['Idade', `${site.age} anos`],
            ['Formação', 'UNIFOR · Negócios'],
            ['Hoje', 'Terus · produtos próprios'],
            ['Cidade', site.city],
          ].map(([label, value]) => (
            <div key={label} className="chip" data-desk-reveal>
              <span>{label}</span>
              <span>{value}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
