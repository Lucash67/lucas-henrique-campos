import { site } from '../data/content'
import { Reveal } from './Reveal'

export function Contact() {
  return (
    <section id="contact" className="px-5 py-24 md:px-10 md:py-32">
      <Reveal>
        <p className="text-[12px] tracking-[0.28em] text-accent uppercase">Contact</p>
        <h2 className="display mt-3 max-w-4xl text-5xl md:text-[6.5vw]">
          Se fizer sentido conversar, conversa.
        </h2>
        <p className="mt-6 max-w-lg text-[15px] text-mute">
          Recrutadores, clientes, parceiros — o mesmo canal. Sem pitch automático.
        </p>
      </Reveal>

      <Reveal className="mt-14 flex flex-wrap gap-3">
        <a
          href={`mailto:${site.email}`}
          className="rounded-full bg-accent px-6 py-3 text-[12px] tracking-[0.16em] text-bg uppercase"
        >
          Escrever um e-mail
        </a>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-line px-6 py-3 text-[12px] tracking-[0.16em] text-ink uppercase"
        >
          WhatsApp
        </a>
        <a
          href={site.github}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-line px-6 py-3 text-[12px] tracking-[0.16em] text-ink uppercase"
        >
          GitHub
        </a>
      </Reveal>

      <Reveal className="mt-16 grid gap-6 text-sm text-mute md:grid-cols-3">
        <div>
          <p className="text-[11px] tracking-[0.2em] text-faint uppercase">E-mail</p>
          <a href={`mailto:${site.email}`} className="mt-2 block text-ink">
            {site.email}
          </a>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-faint uppercase">WhatsApp</p>
          <p className="mt-2 text-ink">{site.phoneDisplay}</p>
        </div>
        <div>
          <p className="text-[11px] tracking-[0.2em] text-faint uppercase">Onde</p>
          <p className="mt-2 text-ink">
            {site.city}, {site.state}
          </p>
        </div>
      </Reveal>
    </section>
  )
}
