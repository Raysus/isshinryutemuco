import { footer, site } from '../content'
import styles from './Footer.module.css'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div>
          <p className={styles.brand}>{site.name}</p>
          <p className={styles.note}>{footer.note}</p>
        </div>

        <nav className={styles.nav} aria-label="Enlaces del pie">
          {footer.links.map((link) => (
            <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      <p className={styles.copy}>© {year} {site.shortName}</p>
    </footer>
  )
}
