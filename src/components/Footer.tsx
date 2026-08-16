import { site } from '../data/content'

export function Footer() {
  return (
    <footer className="border-t border-line py-8">
      <div className="wrap flex flex-col gap-3 text-[0.75rem] text-faint min-[720px]:flex-row min-[720px]:items-center min-[720px]:justify-between">
        <p>{site.name}</p>
        <p className="font-serif italic">Feito entre uma aula e um deploy.</p>
        <p>
          © {new Date().getFullYear()} · {site.city}
        </p>
      </div>
    </footer>
  )
}
