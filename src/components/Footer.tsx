import { Link } from 'react-router-dom'
import { footer, navLinks, site } from '../content'
import { withBase } from '../lib/paths'
import styles from './Footer.module.css'

const exploreLinks = navLinks.filter((link) => link.href.startsWith('/#'))

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.col}>
          <p className={styles.brand}>{site.name}</p>
          <p className={styles.note}>{footer.note}</p>
          <a className={styles.email} href={`mailto:${footer.email}`}>
            {footer.email}
          </a>
          <a
            className={styles.whatsapp}
            href={site.whatsapp.href}
            target="_blank"
            rel="noreferrer"
          >
            {site.whatsapp.label}
          </a>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Explorar</p>
          <nav className={styles.links} aria-label="Explorar el sitio">
            {exploreLinks.map((link) => (
              <a key={link.href} href={withBase(link.href)}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.col}>
          <p className={styles.colTitle}>Escuela</p>
          <nav className={styles.links} aria-label="Enlaces de la escuela">
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
      </div>

      <p className={styles.copy}>
        © {year} {site.shortName} — Karate y Kobudo Isshin Ryu OIKKA
      </p>
    </footer>
  )
}
