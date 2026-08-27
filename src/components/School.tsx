import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { school } from '../content'
import styles from './School.module.css'

export function School() {
  return (
    <section id={school.id} className={styles.section} aria-labelledby="escuela-title">
      <div className={styles.inner}>
        <motion.div
          className={styles.introCol}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className={styles.eyebrow}>Dojo Isshin Akira</p>
          <h2 id="escuela-title" className={styles.title}>
            {school.title}
          </h2>
          <p className={styles.lead}>{school.lead}</p>
          <p className={styles.body}>{school.body}</p>
          <div className={styles.links}>
            {school.links.map((link) => (
              <Link key={link.href} className={styles.link} to={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </motion.div>

        <ol className={styles.principles}>
          {school.principles.map((item, index) => (
            <motion.li
              key={item.title}
              className={styles.principle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className={styles.index} aria-hidden="true">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h3 className={styles.principleTitle}>{item.title}</h3>
                <p className={styles.principleText}>{item.text}</p>
              </div>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  )
}
