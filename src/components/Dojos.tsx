import { dojos } from '../content'
import styles from './Dojos.module.css'

export function Dojos() {
  return (
    <section id="dojos" className={styles.section} aria-labelledby="dojos-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Sedes</p>
          <h2 id="dojos-title" className={styles.title}>
            Nuestros dojos
          </h2>
          <p className={styles.intro}>
            El Hombu Dojo está en Diego Portales 603. También entrenamos en Vanguardia Center · Local 114.
          </p>
        </header>

        <ul className={styles.list}>
          {dojos.map((dojo) => (
            <li key={dojo.id} className={styles.item}>
              <div className={styles.meta}>
                {dojo.badge ? <p className={styles.badge}>{dojo.badge}</p> : null}
                <h3 className={styles.name}>{dojo.name}</h3>
                <p className={styles.address}>{dojo.address}</p>
              </div>
              <div className={styles.actions}>
                {dojo.phone && dojo.phoneHref ? (
                  <a className={styles.linkAction} href={dojo.phoneHref}>
                    {dojo.phone}
                  </a>
                ) : null}
                {dojo.email && dojo.emailHref ? (
                  <a className={styles.linkAction} href={dojo.emailHref}>
                    {dojo.email}
                  </a>
                ) : null}
                {dojo.whatsappHref ? (
                  <a
                    className={styles.whatsapp}
                    href={dojo.whatsappHref}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Escribir por WhatsApp
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
