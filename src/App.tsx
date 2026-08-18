import { Contact } from './components/Contact'
import { Dojos } from './components/Dojos'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Programs } from './components/Programs'
import { School } from './components/School'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <main id="inicio">
        <Hero />
        <School />
        <Programs />
        <Dojos />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
