import { school } from '../content'
import styles from './School.module.css'

export function School() {
  return (
    <section id={school.id} className={styles.section} aria-labelledby="escuela-title">
      <div className={styles.inner}>
        <div className={styles.introCol}>
          <p className={styles.eyebrow}>Dojo Isshin Akira</p>
          <h2 id="escuela-title" className={styles.title}>
            {school.title}
          </h2>
          <p className={styles.lead}>{school.lead}</p>
          <p className={styles.body}>{school.body}</p>
        </div>

        <ol className={styles.principles}>
          {school.principles.map((item, index) => (
            <li key={item.title} className={styles.principle}>
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleText}>{item.text}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
