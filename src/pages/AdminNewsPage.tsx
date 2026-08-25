import { type FormEvent, useEffect, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import { api, imageSrc, type NewsItem } from '../lib/api'
import { getAnalyticsSnapshot } from '../lib/analytics'
import styles from './Admin.module.css'

export function AdminNewsPage() {
  const { user, loading, logout } = useAuth()
  const [items, setItems] = useState<NewsItem[]>([])
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')
  const [image, setImage] = useState<File | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null)
  const [busy, setBusy] = useState(false)
  const [stats, setStats] = useState(() => getAnalyticsSnapshot())

  useEffect(() => {
    const refresh = () => setStats(getAnalyticsSnapshot())
    refresh()
    const id = window.setInterval(refresh, 4000)
    return () => window.clearInterval(id)
  }, [])

  async function loadNews() {
    const data = await api.listNews()
    setItems(data)
  }

  useEffect(() => {
    if (!user) return
    void loadNews().catch((err: Error) => setError(err.message))
  }, [user])

  if (loading) {
    return <div className={styles.page}><p className={styles.help}>Cargando…</p></div>
  }

  if (!user) {
    return <Navigate to="/admin" replace />
  }

  async function onCreate(event: FormEvent) {
    event.preventDefault()
    setBusy(true)
    setError(null)
    setMessage(null)
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('body', body)
      if (image) formData.append('image', image)
      await api.createNews(formData)
      setTitle('')
      setBody('')
      setImage(null)
      setMessage('Noticia publicada')
      await loadNews()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo publicar')
    } finally {
      setBusy(false)
    }
  }

  async function onDelete(id: string) {
    if (!window.confirm('¿Eliminar esta noticia?')) return
    setBusy(true)
    setError(null)
    try {
      await api.deleteNews(id)
      await loadNews()
    } catch (err) {
      setError(err instanceof Error ? err.message : 'No se pudo eliminar')
    } finally {
      setBusy(false)
    }
  }

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.topbar}>
          <div>
            <p className={styles.eyebrow}>Panel</p>
            <h1 className={styles.title}>Noticias</h1>
            <p className={styles.help}>Sesión: {user.email}</p>
          </div>
          <div className={styles.topActions}>
            <Link className={styles.back} to="/">
              Ver sitio
            </Link>
            <button
              className={styles.secondaryButton}
              type="button"
              onClick={() => void logout()}
            >
              Cerrar sesión
            </button>
          </div>
        </header>

        <div className={styles.panelWide} style={{ marginBottom: '1.25rem' }}>
          <h2 className={styles.sectionTitle}>Estadísticas del sitio</h2>
          <p className={styles.help}>
            Contadores locales de este navegador. Con Google Analytics (`VITE_GA_MEASUREMENT_ID`) también se
            envían eventos globales.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(12rem,1fr))', gap: '1rem', marginTop: '1rem' }}>
            <div>
              <p className={styles.help}>Ingresos / visitas</p>
              <p style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>{stats.pageViews}</p>
              <p className={styles.help}>
                Última: {stats.lastPageViewAt ? new Date(stats.lastPageViewAt).toLocaleString('es-CL') : '—'}
              </p>
            </div>
            <div>
              <p className={styles.help}>Clics “clase de prueba”</p>
              <p style={{ fontSize: '1.75rem', fontWeight: 700, margin: 0 }}>{stats.trialClassClicks}</p>
              <p className={styles.help}>
                Último: {stats.lastTrialClickAt ? new Date(stats.lastTrialClickAt).toLocaleString('es-CL') : '—'}
              </p>
            </div>
          </div>
        </div>

        <form className={styles.panelWide} onSubmit={onCreate}>
          <h2 className={styles.sectionTitle}>Publicar noticia</h2>
          <label className={styles.label}>
            Título
            <input
              className={styles.input}
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </label>
          <label className={styles.label}>
            Contenido
            <textarea
              className={styles.textarea}
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={6}
              required
            />
          </label>
          <label className={styles.label}>
            Imagen (opcional)
            <input
              className={styles.input}
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] ?? null)}
            />
          </label>
          {error ? <p className={styles.error}>{error}</p> : null}
          {message ? <p className={styles.success}>{message}</p> : null}
          <button className={styles.button} type="submit" disabled={busy}>
            {busy ? 'Guardando…' : 'Publicar'}
          </button>
        </form>

        <section className={styles.panelWide}>
          <h2 className={styles.sectionTitle}>Publicadas</h2>
          <ul className={styles.newsList}>
            {items.map((item) => {
              const src = imageSrc(item.imageUrl)
              return (
                <li key={item.id} className={styles.newsRow}>
                  {src ? <img src={src} alt="" className={styles.thumb} /> : null}
                  <div className={styles.newsCopy}>
                    <strong>{item.title}</strong>
                    <p>{item.body}</p>
                  </div>
                  <button
                    className={styles.dangerButton}
                    type="button"
                    disabled={busy}
                    onClick={() => void onDelete(item.id)}
                  >
                    Eliminar
                  </button>
                </li>
              )
            })}
          </ul>
        </section>
      </div>
    </div>
  )
}
