import { school } from '../content'
import styles from './School.module.css'

export function School() {
  return (
    <section id={school.id} className={styles.section} aria-labelledby="escuela-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Dojo Isshin Akira</p>
        <h2 id="escuela-title" className={styles.title}>
          {school.title}
        </h2>
        <p className={styles.lead}>{school.lead}</p>
        <p className={styles.body}>{school.body}</p>

        <ul className={styles.principles}>
          {school.principles.map((item) => (
            <li key={item.title} className={styles.principle}>
              <h3 className={styles.principleTitle}>{item.title}</h3>
              <p className={styles.principleText}>{item.text}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
