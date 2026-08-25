import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './InteractiveTeam.module.css'

type Person = {
  name: string
  role: string
  focus?: string
  bio?: string
}

export function InteractiveTeam({ people }: { people: Person[] }) {
  const [active, setActive] = useState(0)
  const person = people[active]

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
              {p.name
                .split(' ')
                .slice(0, 2)
                .map((w) => w[0])
                .join('')}
            </span>
            <strong>{p.name}</strong>
            <span className={styles.role}>{p.role}</span>
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
          <p className={styles.eyebrow}>Instructor</p>
          <h3>{person.name}</h3>
          <p className={styles.detailRole}>{person.role}</p>
          {person.focus ? <p className={styles.focus}>{person.focus}</p> : null}
          {person.bio ? <p className={styles.bio}>{person.bio}</p> : null}
        </motion.aside>
      </AnimatePresence>
    </div>
  )
}
