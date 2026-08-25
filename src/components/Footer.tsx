import { Link } from 'react-router-dom'
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
          <a className={styles.email} href={`mailto:${footer.email}`}>
            {footer.email}
          </a>
        </div>

        <nav className={styles.nav} aria-label="Enlaces del pie">
          <Link to="/propuestas">Propuestas de diseño</Link>
          {footer.links.map((link) =>
            link.href.startsWith('http') ? (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label}
              </a>
            ) : (
              <Link key={link.href} to={link.href}>
                {link.label}
              </Link>
            ),
          )}
        </nav>
      </div>
      <p className={styles.copy}>
        © {year} {site.shortName}
      </p>
    </footer>
  )
}
