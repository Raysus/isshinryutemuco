import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import type { Person } from '../content/pages'
import styles from './InteractiveTeam.module.css'

function initials(name: string) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((w) => w[0])
    .join('')
}

export function InteractiveTeam({ people }: { people: Person[] }) {
  const [active, setActive] = useState(0)
  const [failed, setFailed] = useState<Record<string, boolean>>({})
  const person = people[active]

  const hasPhoto = (p: Person) => Boolean(p.photo) && !failed[p.name]
  const markFailed = (name: string) =>
    setFailed((state) => ({ ...state, [name]: true }))

  return (
    <div className={styles.root}>
      <div className={styles.cards} role="list">
        {people.map((p, i) => (
          <motion.button
            key={p.name}
            type="button"
            role="listitem"
            className={i === active ? `${styles.card} ${styles.cardOn}` : styles.card}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
            whileHover={{ y: -6 }}
            whileTap={{ scale: 0.98 }}
            layout
          >
            <span className={styles.mark} aria-hidden="true">
              {hasPhoto(p) ? (
                <img
                  className={styles.markPhoto}
                  src={p.photo}
                  alt=""
                  loading="lazy"
                  onError={() => markFailed(p.name)}
                />
              ) : (
                initials(p.name)
              )}
            </span>
            <span className={styles.cardText}>
              <strong>{p.name}</strong>
              <span className={styles.role}>{p.role}</span>
              {p.grade ? <span className={styles.grade}>{p.grade}</span> : null}
            </span>
            {i === active ? <motion.span layoutId="team-glow" className={styles.glow} /> : null}
          </motion.button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.aside
          key={person.name}
          className={styles.detail}
          initial={{ opacity: 0, x: 24 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -18 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          {hasPhoto(person) ? (
            <img
              className={styles.portrait}
              src={person.photo}
              alt={person.name}
              onError={() => markFailed(person.name)}
            />
          ) : (
            <div className={styles.portraitFallback} aria-hidden="true">
              {initials(person.name)}
            </div>
          )}
          <p className={styles.eyebrow}>Instructor</p>
          <h3>{person.name}</h3>
          <p className={styles.detailRole}>{person.role}</p>
          {person.grade ? <p className={styles.detailGrade}>{person.grade}</p> : null}
          {person.focus ? <p className={styles.focus}>{person.focus}</p> : null}
          {person.bio ? <p className={styles.bio}>{person.bio}</p> : null}
        </motion.aside>
      </AnimatePresence>
    </div>
  )
}
