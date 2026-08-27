import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { programs, programsIntro } from '../content'
import styles from './Programs.module.css'

const INTERVAL_MS = 7000

export function Programs() {
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const program = programs[index]

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced || paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % programs.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [paused])

  function go(delta: number) {
    setIndex((current) => (current + delta + programs.length) % programs.length)
  }

  return (
    <section id="programas" className={styles.section} aria-labelledby="programas-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>Formación por etapas</p>
          <h2 id="programas-title" className={styles.title}>
            Programa de entrenamiento
          </h2>
          <p className={styles.intro}>{programsIntro}</p>
        </motion.header>

        <motion.div
          className={styles.carousel}
          aria-roledescription="carrusel"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <article className={styles.slide} key={program.id}>
            <div className={styles.media}>
              <img className={styles.image} src={program.image} alt="" loading="lazy" />
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
            </div>
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

          <div className={styles.progress} aria-hidden="true">
            <span
              key={index}
              className={
                paused ? `${styles.progressFill} ${styles.progressPaused}` : styles.progressFill
              }
            />
          </div>

          <div className={styles.controls}>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => go(-1)}
              aria-label="Etapa anterior"
            >
              ←
            </button>
            <div className={styles.dots} role="tablist" aria-label="Etapas del programa">
              {programs.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  aria-label={item.title}
                  className={i === index ? `${styles.dot} ${styles.dotActive}` : styles.dot}
                  onClick={() => setIndex(i)}
                />
              ))}
            </div>
            <button
              type="button"
              className={styles.navBtn}
              onClick={() => go(1)}
              aria-label="Etapa siguiente"
            >
              →
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
