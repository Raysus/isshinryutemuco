import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import styles from './InteractiveMission.module.css'

type Item = { title: string; text?: string }

export function InteractiveMission({
  items,
  footnote,
}: {
  items: Item[]
  footnote?: string
}) {
  const [active, setActive] = useState(0)
  const current = items[active]

  return (
    <div className={styles.root}>
      <div className={styles.tabs} role="tablist" aria-label="Misión, visión e identidad">
        {items.map((item, i) => (
          <button
            key={item.title}
            type="button"
            role="tab"
            aria-selected={i === active}
            className={i === active ? styles.tabOn : styles.tab}
            onClick={() => setActive(i)}
            onMouseEnter={() => setActive(i)}
          >
            <span className={styles.index}>{String(i + 1).padStart(2, '0')}</span>
            {item.title}
            {i === active ? <motion.span layoutId="mission-tab" className={styles.line} /> : null}
          </button>
        ))}
      </div>

      <div className={styles.stage}>
        <AnimatePresence mode="wait">
          <motion.article
            key={current.title}
            className={styles.panel}
            role="tabpanel"
            initial={{ opacity: 0, y: 24, rotateX: -6 }}
            animate={{ opacity: 1, y: 0, rotateX: 0 }}
            exit={{ opacity: 0, y: -16, rotateX: 4 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h3
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.05 }}
            >
              {current.title}
            </motion.h3>
            {current.text ? (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.12 }}
              >
                {current.text}
              </motion.p>
            ) : (
              <p className={styles.pending}>Contenido detallado próximamente.</p>
            )}
          </motion.article>
        </AnimatePresence>

        <div className={styles.progress} aria-hidden="true">
          {items.map((item, i) => (
            <button
              key={item.title}
              type="button"
              className={i === active ? styles.dotOn : styles.dot}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      {footnote ? (
        <motion.p
          className={styles.footnote}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          {footnote}
        </motion.p>
      ) : null}
    </div>
  )
}
