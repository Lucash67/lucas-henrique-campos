import { site } from '../data/content'
import { SectionHead } from './SectionHead'

const links = [
  { label: 'E-mail', value: site.email, href: `mailto:${site.email}`, extra: false },
  { label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsapp, extra: true },
  { label: 'GitHub', value: 'Lucash67', href: site.github, extra: true },
]

export function Contact() {
  return (
    <section id="contact" className="section">
      <div className="wrap">
        <SectionHead
          n="06"
          label="Contato"
          lines={['Se fizer sentido,', 'conversa.']}
          aside={`${site.city}, ${site.state} — aberto a trabalho remoto e presencial.`}
        />

        <div className="mt-8 flex justify-center" data-reveal>
          <a href={site.whatsapp} target="_blank" rel="noreferrer" className="btn btn--solid btn--shine">
            Conversar no WhatsApp ↗
          </a>
        </div>

        <ul className="mx-auto mt-12 max-w-2xl" data-reveal>
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                {...(link.extra ? { target: '_blank', rel: 'noreferrer' } : {})}
                className="group grid grid-cols-[1fr_auto] items-center gap-4 border-t border-line py-5 last:border-b"
              >
                <span className="kicker kicker--plain text-faint">{link.label}</span>
                <span className="text-right font-serif text-[1.15rem] group-hover:text-mint">
                  {link.value}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
