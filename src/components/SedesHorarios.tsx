import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { sedes, sedesSection } from '../content'
import { trackTrialClassClick } from '../lib/analytics'
import styles from './SedesHorarios.module.css'

type Sede = (typeof sedes)[number]

function SedeCard({ sede, index }: { sede: Sede; index: number }) {
  const [active, setActive] = useState(0)
  const group = sede.groups[active] ?? sede.groups[0]

  return (
    <motion.article
      className={styles.card}
      initial={{ opacity: 0, y: 42 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <div className={styles.mapWrap}>
        <iframe
          className={styles.map}
          src={sede.mapEmbed}
          title={`Mapa de ${sede.name}`}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
        <a
          className={styles.mapLink}
          href={sede.mapLink}
          target="_blank"
          rel="noreferrer"
        >
          Cómo llegar
        </a>
      </div>

      <div className={styles.body}>
        <p className={styles.badge}>{sede.badge}</p>
        <h3 className={styles.name}>{sede.name}</h3>
        <p className={styles.address}>{sede.address}</p>

        <div className={styles.actions}>
          <a
            className={styles.primary}
            href={sede.whatsappHref}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackTrialClassClick(`sede-${sede.id}`)}
          >
            Escribir por WhatsApp
          </a>
          {sede.phone && sede.phoneHref ? (
            <a className={styles.action} href={sede.phoneHref}>
              {sede.phone}
            </a>
          ) : null}
          {sede.email && sede.emailHref ? (
            <a className={styles.action} href={sede.emailHref}>
              Correo
            </a>
          ) : null}
        </div>

        <div className={styles.schedule}>
          <p className={styles.schedHint}>Horarios · elige el día</p>
          <div className={styles.dayNav} role="tablist" aria-label={`Días · ${sede.name}`}>
            {sede.groups.map((g, i) => (
              <motion.button
                key={g.id}
                type="button"
                role="tab"
                aria-selected={i === active}
                className={i === active ? `${styles.chip} ${styles.chipOn}` : styles.chip}
                onClick={() => setActive(i)}
                whileTap={{ scale: 0.96 }}
              >
                {i === active ? (
                  <motion.span
                    layoutId={`sede-chip-${sede.id}`}
                    className={styles.chipBg}
                    transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                  />
                ) : null}
                <span className={styles.chipText}>{g.days}</span>
              </motion.button>
            ))}
          </div>

          <div className={styles.panel}>
            <AnimatePresence mode="wait">
              <motion.ul
                key={group.id}
                className={styles.slots}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
              >
                {group.slots.map((slot) => (
                  <li key={`${group.id}-${slot.ages}-${slot.time}`}>
                    <span className={styles.ages}>{slot.ages}</span>
                    <span className={styles.time}>{slot.time}</span>
                  </li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>

          {sede.note ? <p className={styles.sedeNote}>{sede.note}</p> : null}
        </div>
      </div>
    </motion.article>
  )
}

export function SedesHorarios() {
  return (
    <section id="sedes" className={styles.section} aria-labelledby="sedes-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Dónde entrenar</p>
          <h2 id="sedes-title" className={styles.title}>
            {sedesSection.title}
          </h2>
          <p className={styles.intro}>{sedesSection.intro}</p>
        </header>

        <div className={styles.cards}>
          {sedes.map((sede, i) => (
            <SedeCard key={sede.id} sede={sede} index={i} />
          ))}
        </div>

        <p className={styles.note}>{sedesSection.note}</p>
      </div>
    </section>
  )
}
