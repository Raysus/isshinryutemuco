import { useEffect, useState } from 'react'
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
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    let alive = true
    api
      .listNews()
      .then((data) => {
        if (alive) setItems(data)
      })
      .catch((err: Error) => {
        if (alive) setError(err.message)
      })
      .finally(() => {
        if (alive) setLoading(false)
      })
    return () => {
      alive = false
    }
  }, [])

  return (
    <section id="noticias" className={styles.section} aria-labelledby="noticias-title">
      <div className={styles.inner}>
        <p className={styles.eyebrow}>Novedades</p>
        <h2 id="noticias-title" className={styles.title}>
          Noticias del dojo
        </h2>
        <p className={styles.intro}>
          Exámenes, actividades y anuncios de Isshin Akira. El equipo publica desde el panel
          de administración.
        </p>

        {loading ? <p className={styles.status}>Cargando noticias…</p> : null}
        {error ? (
          <p className={styles.status}>
            No se pudieron cargar las noticias. ¿Está corriendo el servidor? ({error})
          </p>
        ) : null}

        {!loading && !error && items.length === 0 ? (
          <p className={styles.status}>Aún no hay noticias publicadas.</p>
        ) : null}

        <div className={styles.list}>
          {items.map((item) => {
            const src = imageSrc(item.imageUrl)
            return (
              <article key={item.id} className={styles.item}>
                {src ? (
                  <img className={styles.image} src={src} alt="" loading="lazy" />
                ) : (
                  <div className={styles.placeholder} aria-hidden="true" />
                )}
                <div className={styles.copy}>
                  <time className={styles.date} dateTime={item.createdAt}>
                    {formatDate(item.createdAt)}
                  </time>
                  <h3 className={styles.itemTitle}>{item.title}</h3>
                  <p className={styles.body}>{item.body}</p>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
