import { useState } from 'react'
import { navLinks, site } from '../content'
import styles from './Header.module.css'

export function Header() {
  const [open, setOpen] = useState(false)

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <a href="#inicio" className={styles.brand} onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="" className={styles.logo} width={36} height={36} />
          <span>{site.shortName}</span>
        </a>

        <button
          type="button"
          className={styles.menuButton}
          aria-expanded={open}
          aria-controls="nav-principal"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? 'Cerrar' : 'Menú'}
        </button>

        <nav
          id="nav-principal"
          className={open ? `${styles.nav} ${styles.navOpen}` : styles.nav}
          aria-label="Principal"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={styles.link}
              onClick={() => setOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href={site.cta.href} className={styles.cta} onClick={() => setOpen(false)}>
            {site.cta.label}
          </a>
        </nav>
      </div>
    </header>
  )
}