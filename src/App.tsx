import { useState } from 'react'
import { About } from './components/About'
import { Approach } from './components/Approach'
import { Building } from './components/Building'
import { Contact } from './components/Contact'
import { Cursor } from './components/Cursor'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Nav } from './components/Nav'
import { ProjectModal } from './components/ProjectModal'
import { Work } from './components/Work'
import type { Project } from './data/content'

export default function App() {
  const [open, setOpen] = useState<Project | null>(null)

  return (
    <>
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:px-3 focus:py-2 focus:text-bg"
      >
        Ir para o trabalho
      </a>
      <div className="grain" aria-hidden />
      <Cursor />
      <Nav />
      <main>
        <Hero />
        <div className="rule mx-5 md:mx-10" />
        <Work onOpen={setOpen} />
        <div className="rule mx-5 md:mx-10" />
        <Approach />
        <div className="rule mx-5 md:mx-10" />
        <About />
        <div className="rule mx-5 md:mx-10" />
        <Building />
        <div className="rule mx-5 md:mx-10" />
        <Contact />
      </main>
      <Footer />
      <ProjectModal project={open} onClose={() => setOpen(null)} />
    </>
  )
}
