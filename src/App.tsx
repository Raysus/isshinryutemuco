import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'

function App() {

  return (
    <>
      <Header />
      <main id="inicio">
        <h1>Isshin Ryu Temuco</h1>
        <section id="escuela" style={{ minHeight: '60vh', padding: '2rem' }}>
          <h2>Escuela</h2>
        </section>
        <section id="programas" style={{ minHeight: '60vh', padding: '2rem' }}>
          <h2>Programas</h2>
        </section>
        <section id="dojos" style={{ minHeight: '60vh', padding: '2rem' }}>
          <h2>Dojos</h2>
        </section>
        <section id="contacto" style={{ minHeight: '60vh', padding: '2rem' }}>
          <h2>Contacto</h2>
        </section>
      </main>
    </>
  )
}

export default App
