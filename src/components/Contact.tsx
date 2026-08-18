import { contact, site } from '../content'
import styles from './Contact.module.css'

export function Contact() {
  return (
    <section id="contacto" className={styles.section} aria-labelledby="contacto-title">
      <div className={styles.inner}>
        <div className={styles.copy}>
          <p className={styles.eyebrow}>{site.shortName}</p>
          <h2 id="contacto-title" className={styles.title}>
            {contact.title}
          </h2>
          <p className={styles.text}>{contact.text}</p>
        </div>

        <div className={styles.actions}>
          <a
            className={styles.primary}
            href={contact.primaryCta.href}
            target="_blank"
            rel="noreferrer"
          >
            {contact.primaryCta.label}
          </a>
          <a className={styles.secondary} href={contact.email.href}>
            {contact.email.label}
          </a>
        </div>
      </div>
    </section>
  )
}
