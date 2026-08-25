import { Link } from 'react-router-dom'
import styles from './ProposalsHub.module.css'

const items = [
  {
    to: '/',
    tag: 'Actual',
    title: 'Propuesta vigente',
    text: 'Landing actual: hero carrusel, programas, horarios, noticias y dojos.',
  },
  {
    to: '/propuesta-b',
    tag: 'Extra',
    title: 'Cinemática por capítulos',
    text: 'Pantallas a full viewport con scroll-snap, tipografía grande y progresión inmersiva sección a sección.',
  },
] as const

export function ProposalsHub() {
  return (
    <main className={styles.page}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Isshin Akira Temuco</p>
        <h1 className={styles.title}>Propuestas de diseño</h1>
        <p className={styles.lead}>
          Misma información y requerimientos, distinta estructura y diagramación.
        </p>
        <ul className={styles.grid}>
          {items.map((item) => (
            <li key={item.to}>
              <Link className={styles.card} to={item.to}>
                <span className={styles.tag}>{item.tag}</span>
                <strong className={styles.cardTitle}>{item.title}</strong>
                <span className={styles.cardText}>{item.text}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  )
}
