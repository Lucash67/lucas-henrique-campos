import { site } from '../data/content'

export function Footer() {
  return (
    <footer className="flex flex-col gap-6 border-t border-line px-5 py-8 text-[12px] text-faint md:flex-row md:items-center md:justify-between md:px-10">
      <p>{site.name}</p>
      <p className="italic text-mute">Feito no intervalo entre uma aula e um deploy.</p>
      <p>© {new Date().getFullYear()} · {site.city}</p>
    </footer>
  )
}
