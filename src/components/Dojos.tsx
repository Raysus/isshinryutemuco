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
          Entrena en Temuco, Concepción o Los Ángeles. Elige tu sede y contáctanos
          directamente.
        </p>

        <ul className={styles.list}>
          {dojos.map((dojo) => (
            <li key={dojo.id} className={styles.item}>
              <h3 className={styles.name}>{dojo.name}</h3>
              <p className={styles.address}>{dojo.address}</p>
              <div className={styles.actions}>
                <a href={dojo.phoneHref}>{dojo.phone}</a>
                {dojo.email && dojo.emailHref ? (
                  <a href={dojo.emailHref}>{dojo.email}</a>
                ) : null}
                <a
                  className={styles.whatsapp}
                  href={dojo.whatsappHref}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
