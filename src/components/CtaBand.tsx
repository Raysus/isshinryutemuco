import { motion } from 'framer-motion'
import { hero, site } from '../content'
import { trackTrialClassClick } from '../lib/analytics'
import { homeHash } from '../lib/paths'
import styles from './CtaBand.module.css'

export function CtaBand() {
  return (
    <section
      className={styles.section}
      aria-labelledby="cta-title"
      style={{
        backgroundImage: `linear-gradient(rgba(10, 10, 10, 0.9), rgba(10, 10, 10, 0.94)), url(${hero.image})`,
      }}
    >
      <div className={styles.inner}>
        <motion.div
          className={styles.content}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>Tu primera clase</p>
          <h2 id="cta-title" className={styles.title}>
            Da el primer paso en el dojo
          </h2>
          <p className={styles.text}>
            Agenda una clase de prueba y vive el Karate y Kobudo Isshin Ryu en Temuco.
            Formación para niños, jóvenes y adultos, con un solo corazón.
          </p>
          <div className={styles.actions}>
            <a
              className={styles.primary}
              href={site.cta.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackTrialClassClick('cta-band')}
            >
              {site.cta.label}
            </a>
            <a className={styles.secondary} href={homeHash('sedes')}>
              Ver sedes y horarios
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
