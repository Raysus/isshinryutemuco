import { schedule } from '../content'
import styles from './Schedule.module.css'

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

        <div className={styles.groups}>
          {schedule.groups.map((group) => (
            <article key={group.id} className={styles.group}>
              <p className={styles.days}>{group.days}</p>
              <h3 className={styles.place}>{group.place}</h3>
              <ul className={styles.slots}>
                {group.slots.map((slot) => (
                  <li key={`${group.id}-${slot.ages}`}>
                    <span className={styles.ages}>{slot.ages}</span>
                    <span className={styles.time}>{slot.time}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className={styles.note}>{schedule.note}</p>
      </div>
    </section>
  )
}
