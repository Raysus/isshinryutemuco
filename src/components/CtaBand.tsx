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
          <p className={styles.eyebrow}>Sé parte del dojo</p>
          <h2 id="cta-title" className={styles.title}>
            Tu lugar en el tatami te espera
          </h2>
          <p className={styles.text}>
            Únete a la familia Isshin Akira: entrena Karate y Kobudo Isshin Ryu en Temuco,
            para niños, jóvenes y adultos. Da el primer paso hoy y crece con un solo corazón.
          </p>
          <div className={styles.actions}>
            <a
              className={`${styles.primary} ctaPulse`}
              href={site.cta.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackTrialClassClick('cta-band')}
            >
              <span className="ctaLabel">
                {site.cta.label}
                <span className="ctaArrow" aria-hidden="true">
                  →
                </span>
              </span>
            </a>
            <a className={styles.secondary} href={homeHash('sedes')}>
              Ver sedes y horarios
            </a>
          </div>
          <p className={styles.microcopy}>
            Clase de prueba sin compromiso · te esperamos en el tatami
          </p>
        </motion.div>
      </div>
    </section>
  )
}
