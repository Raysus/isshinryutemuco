import { useEffect, useState } from 'react'
import { fallbackNews } from '../content'
import { api, imageSrc, type NewsItem } from '../lib/api'
import styles from './News.module.css'

function formatDate(value: string) {
  return new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
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
        <header className={styles.header}>
          <div>
            <p className={styles.eyebrow}>Novedades</p>
            <h2 id="noticias-title" className={styles.title}>
              Noticias del dojo
            </h2>
          </div>
          <p className={styles.intro}>
            Exámenes, actividades y anuncios de Isshin Akira.
          </p>
        </header>

        {loading ? <p className={styles.status}>Cargando noticias…</p> : null}

        {featured ? (
          <div className={styles.layout}>
            <article className={styles.featured}>
              {imageSrc(featured.imageUrl) ? (
                <img
                  className={styles.featuredImage}
                  src={imageSrc(featured.imageUrl) ?? undefined}
                  alt=""
                  loading="lazy"
                />
              ) : (
                <div className={styles.placeholder} aria-hidden="true" />
              )}
              <div className={styles.featuredCopy}>
                <time className={styles.date} dateTime={featured.createdAt}>
                  {formatDate(featured.createdAt)}
                </time>
                <h3 className={styles.featuredTitle}>{featured.title}</h3>
                <p className={styles.body}>{featured.body}</p>
              </div>
            </article>

            {rest.length > 0 ? (
              <div className={styles.sideList}>
                {rest.map((item) => (
                  <article key={item.id} className={styles.sideItem}>
                    <time className={styles.date} dateTime={item.createdAt}>
                      {formatDate(item.createdAt)}
                    </time>
                    <h3 className={styles.sideTitle}>{item.title}</h3>
                    <p className={styles.sideBody}>{item.body}</p>
                  </article>
                ))}
              </div>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
