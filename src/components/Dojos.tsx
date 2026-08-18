import { dojos } from '../content'
import styles from './Dojos.module.css'

export function Dojos() {
  return (
    <section id="dojos" className={styles.section} aria-labelledby="dojos-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Sedes</p>
        <h2 id="dojos-title" className={styles.title}>
          Nuestros dojos
        </h2>
        <p className={styles.intro}>
          El Hombu Dojo está en Temuco. También entrenamos en una segunda sede local y en
          Los Ángeles.
        </p>

        <ul className={styles.list}>
          {dojos.map((dojo) => (
            <li key={dojo.id} className={styles.item}>
              <div>
                {dojo.badge ? <p className={styles.badge}>{dojo.badge}</p> : null}
                <h3 className={styles.name}>{dojo.name}</h3>
                <p className={styles.address}>{dojo.address}</p>
              </div>
              <div className={styles.actions}>
                {dojo.phone && dojo.phoneHref ? (
                  <a href={dojo.phoneHref}>{dojo.phone}</a>
                ) : null}
                {dojo.email && dojo.emailHref ? (
                  <a href={dojo.emailHref}>{dojo.email}</a>
                ) : null}
                {dojo.whatsappHref ? (
                  <a
                    className={styles.whatsapp}
                    href={dojo.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    WhatsApp
                  </a>
                ) : (
                  <span className={styles.pending}>Contacto por confirmar</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
