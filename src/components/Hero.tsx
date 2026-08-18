import { hero, site } from '../content'
import styles from './Hero.module.css'

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-brand">
      <div
        className={styles.media}
        style={{ backgroundImage: `url(${hero.image})` }}
        role="img"
        aria-label={hero.imageAlt}
      />
      <div className={styles.overlay} />

      <div className={styles.content}>
        <p id="hero-brand" className={styles.brand}>
          {hero.brand}
        </p>
        <h1 className={styles.title}>{hero.title}</h1>
        <p className={styles.subtitle}>{hero.subtitle}</p>
        <a href={site.cta.href} className={styles.cta}>
          {site.cta.label}
        </a>
      </div>
    </section>
  )
}
