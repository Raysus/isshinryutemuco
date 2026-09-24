
import { motion } from 'framer-motion'
import { imageSrc } from '../lib/api'
import { formatEventDay } from '../lib/eventFormat'
import { useUpcomingEvents } from '../lib/useUpcomingEvents'
import styles from './Events.module.css'

export function Events() {
  const { items, loading } = useUpcomingEvents()

  return (
    <section id="eventos" className={styles.section} aria-labelledby="eventos-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className={styles.eyebrow}>Calendario</p>
            <h2 id="eventos-title" className={styles.title}>
              Próximos eventos
            </h2>
          </div>
          <p className={styles.intro}>Exámenes, seminarios y actividades del dojo.</p>
        </motion.header>

        {loading ? <p className={styles.status}>Cargando eventos…</p> : null}
        {!loading && items.length === 0 ? (
          <p className={styles.status}>No hay eventos próximos por ahora.</p>
        ) : null}

        {items.length > 0 ? (
          <div className={styles.list}>
            {items.map((item, i) => {
              const src = imageSrc(item.imageUrl)
              return (
                <motion.article
                  key={item.id}
                  className={styles.item}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: i * 0.06 }}
                >
                  <p className={styles.when}>
                    <time dateTime={item.date}>{formatEventDay(item)}</time>
                    {item.time ? <span className={styles.time}>{item.time} hrs.</span> : null}
                  </p>
                  <div>
                    <h3 className={styles.itemTitle}>{item.title}</h3>
                    {item.place ? <p className={styles.place}>{item.place}</p> : null}
                    {src ? <img className={styles.image} src={src} alt="" loading="lazy" /> : null}
                    <p className={styles.body}>{item.body}</p>
                  </div>
                </motion.article>
              )
            })}
          </div>
        ) : null}
      </div>
    </section>
  )
}
