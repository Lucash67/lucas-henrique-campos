import { useEffect } from 'react'
import { Building } from './components/Building'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Identity } from './components/Identity'
import { Nav } from './components/Nav'
import { Path } from './components/Path'
import { Ticker } from './components/Ticker'
import { Toolkit } from './components/Toolkit'
import { Work } from './components/Work'
import { bootReveal } from './lib/reveal'

export default function App() {
  useEffect(() => {
    bootReveal()
  }, [])

  return (
    <>
      <a href="#work" className="skip">
        Ir para o trabalho
      </a>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <Identity />
        <Work />
        <Building />
        <Path />
        <Toolkit />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
