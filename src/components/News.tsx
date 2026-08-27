import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { fallbackNews } from '../content'
import { api, imageSrc, type NewsItem } from '../lib/api'
import { assetUrl } from '../lib/paths'
import styles from './News.module.css'

function formatDate(value: string) {
  return new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}

function Placeholder() {
  return (
    <div className={styles.placeholder} aria-hidden="true">
      <img className={styles.placeholderLogo} src={assetUrl('images/logo.png')} alt="" />
      <span className={styles.placeholderText}>Isshin Akira · Temuco</span>
    </div>
  )
}

export function News() {
  const [items, setItems] = useState<NewsItem[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true
    api
      .listNews()
      .then((data) => {
        if (alive) setItems(data.length > 0 ? data : fallbackNews)
      })
      .catch(() => {
        // Sin backend (p. ej. GitHub Pages) usamos noticias de respaldo.
        if (alive) setItems(fallbackNews)
      })
      .finally(() => {
        if (alive) setLoading(false)
      })
    return () => {
      alive = false
    }
  }, [])

  const featured = items[0]
  const rest = items.slice(1, 4)

  return (
    <section id="noticias" className={styles.section} aria-labelledby="noticias-title">
      <div className={styles.inner}>
        <motion.header
          className={styles.header}
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
        >
          <div>
            <p className={styles.eyebrow}>Novedades</p>
            <h2 id="noticias-title" className={styles.title}>
              Noticias del dojo
            </h2>
          </div>
          <p className={styles.intro}>
            Exámenes, actividades y anuncios de Isshin Akira.
          </p>
        </motion.header>

        {loading ? <p className={styles.status}>Cargando noticias…</p> : null}

        {featured ? (
          <div className={styles.layout}>
            <motion.article
              className={styles.featured}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
            >
              {imageSrc(featured.imageUrl) ? (
                <img
                  className={styles.featuredImage}
                  src={imageSrc(featured.imageUrl) ?? undefined}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <Placeholder />
              )}
              <div className={styles.featuredCopy}>
                <time className={styles.date} dateTime={featured.createdAt}>
                  {formatDate(featured.createdAt)}
                </time>
                <h3 className={styles.featuredTitle}>{featured.title}</h3>
                <p className={styles.body}>{featured.body}</p>
              </div>
            </motion.article>

            {rest.length > 0 ? (
              <div className={styles.sideList}>
                {rest.map((item, i) => (
                  <motion.article
                    key={item.id}
                    className={styles.sideItem}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.6 }}
                    transition={{ duration: 0.45, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <time className={styles.date} dateTime={item.createdAt}>
                      {formatDate(item.createdAt)}
                    </time>
                    <h3 className={styles.sideTitle}>{item.title}</h3>
                    <p className={styles.sideBody}>{item.body}</p>
                  </motion.article>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
