import { VideoPlayer } from './VideoPlayer'
import { useMedia } from '../lib/useMedia'
import styles from './Videos.module.css'

export function Videos() {
  const { videos, videosTitle, videosIntro, loading } = useMedia()

  return (
    <section id="videos" className={styles.section} aria-labelledby="videos-title">
      <div className={styles.inner}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Dojo</p>
          <h2 id="videos-title" className={styles.title}>
            {videosTitle || 'Videos'}
          </h2>
          {videosIntro ? <p className={styles.intro}>{videosIntro}</p> : null}
        </header>

        {loading ? <p className={styles.status}>Cargando videos…</p> : null}
        {!loading && videos.length === 0 ? (
          <p className={styles.status}>Pronto publicaremos videos del dojo.</p>
        ) : null}

        {videos.length > 0 ? (
          <div className={styles.grid}>
            {videos.map((video) => (
              <article key={video.id} className={styles.card}>
                <div className={styles.frame}>
                  <VideoPlayer video={video} />
                </div>
                <h3 className={styles.cardTitle}>{video.title}</h3>
                {video.note ? <p className={styles.cardNote}>{video.note}</p> : null}
              </article>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  )
}
