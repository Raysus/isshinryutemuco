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

        <div className={styles.venues}>
          {schedule.venues.map((venue) => (
            <section key={venue.id} className={styles.venue} aria-labelledby={`venue-${venue.id}`}>
              <header className={styles.venueHead}>
                {venue.badge ? <p className={styles.badge}>{venue.badge}</p> : null}
                <h3 id={`venue-${venue.id}`} className={styles.venueName}>
                  {venue.name}
                </h3>
                <p className={styles.period}>{venue.period}</p>
                {venue.note ? <p className={styles.venueNote}>{venue.note}</p> : null}
              </header>

              <div className={styles.groups}>
                {venue.groups.map((group) => (
                  <article key={group.id} className={styles.group}>
                    <p className={styles.days}>{group.days}</p>
                    <ul className={styles.slots}>
                      {group.slots.map((slot) => (
                        <li key={`${group.id}-${slot.ages}-${slot.time}`}>
                          <span className={styles.ages}>{slot.ages}</span>
                          <span className={styles.time}>{slot.time}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </section>
          ))}
        </div>

        <p className={styles.note}>{schedule.note}</p>
      </div>
    </section>
  )
}
