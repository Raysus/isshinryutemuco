import { CtaBand } from '../components/CtaBand'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { News } from '../components/News'
import { Programs } from '../components/Programs'
import { School } from '../components/School'
import { SedesHorarios } from '../components/SedesHorarios'
import { Stats } from '../components/Stats'
import '../App.css'

export function HomePage() {
  return (
    <>
      <a className="skipLink" href="#inicio">
        Saltar al contenido
      </a>
      <Header />
      <main id="inicio">
        <Hero />
        <Stats />
        <School />
        <Programs />
        <News />
        <SedesHorarios />
        <CtaBand />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
