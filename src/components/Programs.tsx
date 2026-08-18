import { programs, programsIntro } from '../content'
import styles from './Programs.module.css'

export function Programs() {
  return (
    <section id="programas" className={styles.section} aria-labelledby="programas-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Formación por etapas</p>
        <h2 id="programas-title" className={styles.title}>
          Programa de entrenamiento
        </h2>
        <p className={styles.intro}>{programsIntro}</p>

        <div className={styles.list}>
          {programs.map((program, index) => (
            <article
              key={program.id}
              className={styles.item}
              style={{ animationDelay: `${index * 80}ms` }}
            >
              <img
                className={styles.image}
                src={program.image}
                alt=""
                loading="lazy"
              />
              <div className={styles.copy}>
                <h3 className={styles.itemTitle}>{program.title}</h3>
                <p className={styles.summary}>{program.summary}</p>
                <ul className={styles.points}>
                  {program.points.map((point) => (
                    <li key={point}>{point}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
