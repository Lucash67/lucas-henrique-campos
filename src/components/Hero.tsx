import { site } from '../data/content'

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-between px-5 pt-32 pb-10 md:px-10"
    >
      <p className="kicker text-mute">
        {site.city}, {site.state}
      </p>

      <div className="relative mx-auto w-full max-w-5xl text-center">
        {/* Figure sitting on the name — principle from the reference, not a face */}
        <div
          aria-hidden
          className="pointer-events-none mx-auto mb-[-2.4rem] grid h-36 w-36 place-items-center rounded-full border border-line bg-surface/80 md:mb-[-3.2rem] md:h-48 md:w-48"
        >
          <span className="display text-6xl text-mint md:text-7xl">L</span>
        </div>

        <h1 className="headline text-[clamp(2.6rem,9vw,6.5rem)]">
          Lucas Henrique
          <br />
          Campos
        </h1>

        <p className="headline mx-auto mt-8 max-w-2xl text-[clamp(1.45rem,3.2vw,2.15rem)]">
          Construo o sistema
          <br />
          <span className="text-mute">atrás da venda.</span>
        </p>
      </div>

      <dl className="mx-auto grid w-full max-w-5xl grid-cols-2 gap-y-6 border-t border-line pt-6 md:grid-cols-4">
        <div>
          <dt className="kicker text-faint">Idade</dt>
          <dd className="mt-1.5 text-sm text-ink/85">{site.age} anos</dd>
        </div>
        <div>
          <dt className="kicker text-faint">Formação</dt>
          <dd className="mt-1.5 text-sm text-ink/85">UNIFOR · Negócios</dd>
        </div>
        <div>
          <dt className="kicker text-faint">Hoje</dt>
          <dd className="mt-1.5 text-sm text-ink/85">Terus · produtos próprios</dd>
        </div>
        <div className="col-span-2 md:col-span-1 md:justify-self-end">
          <a
            href="#work"
            className="group inline-flex items-center gap-3 text-[13px] tracking-[0.1em] text-ink uppercase"
          >
            Ver o trabalho
            <span className="inline-block h-px w-8 bg-mint transition-[width] duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-14" />
          </a>
        </div>
      </dl>
    </section>
  )
}
