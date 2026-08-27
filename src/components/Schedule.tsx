import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { schedule } from '../content'
import styles from './Schedule.module.css'

type Venue = (typeof schedule.venues)[number]

function VenueCard({ venue }: { venue: Venue }) {
  const [active, setActive] = useState(0)
  const group = venue.groups[active] ?? venue.groups[0]

  return (
    <article className={styles.venue} aria-labelledby={`venue-${venue.id}`}>
      <header className={styles.venueHead}>
        {venue.badge ? <p className={styles.badge}>{venue.badge}</p> : null}
        <h3 id={`venue-${venue.id}`} className={styles.venueName}>
          {venue.name}
        </h3>
        <p className={styles.period}>{venue.period}</p>
        {venue.note ? <p className={styles.venueNote}>{venue.note}</p> : null}
      </header>

      <p className={styles.dayHint}>Elige el día</p>
      <div className={styles.dayNav} role="tablist" aria-label={`Días · ${venue.name}`}>
        {venue.groups.map((g, i) => (
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
                layoutId={`sched-chip-${venue.id}`}
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
    </article>
  )
}

export function Schedule() {
  return (
    <section id="horarios" className={styles.section} aria-labelledby="horarios-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Agenda de clases</p>
          <h2 id="horarios-title" className={styles.title}>
            {schedule.title}
          </h2>
          <p className={styles.intro}>{schedule.intro}</p>
        </header>

        <div className={styles.venues}>
          {schedule.venues.map((venue) => (
            <VenueCard key={venue.id} venue={venue} />
          ))}
        </div>

        <p className={styles.note}>{schedule.note}</p>
      </div>
    </section>
  )
}
