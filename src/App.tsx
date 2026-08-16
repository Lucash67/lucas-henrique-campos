import { Building } from './components/Building'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Identity } from './components/Identity'
import { Nav } from './components/Nav'
import { Path } from './components/Path'
import { Toolkit } from './components/Toolkit'
import { Work } from './components/Work'

export default function App() {
  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:bg-mint focus:px-3 focus:py-2 focus:text-bg"
      >
        Ir para o trabalho
      </a>
      <div className="atmosphere" aria-hidden />
      <div className="grain" aria-hidden />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <Identity />
        <Work />
        <Building />
        <Path />
        <Toolkit />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </>
  )
}
