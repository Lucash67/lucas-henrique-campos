import { site } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { SectionHead } from './SectionHead'

const links = [
  { label: 'E-mail', value: site.email, href: `mailto:${site.email}`, extra: false },
  { label: 'WhatsApp', value: site.phoneDisplay, href: site.whatsapp, extra: true },
  { label: 'GitHub', value: 'Lucash67', href: site.github, extra: true },
]

export function Contact() {
  const list = useReveal<HTMLUListElement>()

  return (
    <section id="contact" className="relative px-5 py-24 md:px-10 md:py-36">
      <SectionHead
        n="06"
        label="Contato"
        lines={['Se fizer sentido,', 'conversa.']}
        aside={`${site.city}, ${site.state} — aberto a trabalho remoto e presencial.`}
      />

      <div className="mt-12">
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noreferrer"
          className="inline-flex rounded-full bg-mint px-5 py-2.5 text-[13px] font-medium text-[#06120e] transition-opacity duration-200 hover:opacity-90"
        >
          Conversar no WhatsApp ↗
        </a>
      </div>

      <ul ref={list} data-reveal className="mt-16 max-w-3xl">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              {...(link.extra ? { target: '_blank', rel: 'noreferrer' } : {})}
              className="group grid grid-cols-[1fr_auto] items-center gap-4 border-t border-line py-5 last:border-b md:grid-cols-12"
            >
              <span className="kicker text-faint md:col-span-3">{link.label}</span>
              <span className="text-lg text-ink transition-colors duration-300 group-hover:text-mint md:col-span-7 md:text-xl">
                {link.value}
              </span>
              <span
                aria-hidden
                className="justify-self-end text-mute transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:translate-x-1 group-hover:text-mint md:col-span-2"
              >
                ↗
              </span>
            </a>
          </li>
        ))}
      </ul>
    </section>
  )
}
