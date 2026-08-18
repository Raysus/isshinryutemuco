import { Contact } from '../components/Contact'
import { Dojos } from '../components/Dojos'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { News } from '../components/News'
import { Programs } from '../components/Programs'
import { Schedule } from '../components/Schedule'
import { School } from '../components/School'
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
        <School />
        <Programs />
        <Schedule />
        <News />
        <Dojos />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
