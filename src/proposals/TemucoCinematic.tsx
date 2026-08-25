import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  dojos,
  hero,
  heroSlides,
  programs,
  schedule,
  school,
  site,
} from '../content'
import { api, type NewsItem } from '../lib/api'
import { trackTrialClassClick } from '../lib/analytics'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import styles from './TemucoCinematic.module.css'

export function TemucoCinematic() {
  const scroller = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)
  const [program, setProgram] = useState(0)
  const [news, setNews] = useState<NewsItem[]>([])

  useEffect(() => {
    void api.listNews().then(setNews).catch(() => setNews([]))
  }, [])

  useEffect(() => {
    const id = window.setInterval(() => {
      setSlide((s) => (s + 1) % heroSlides.length)
    }, 5000)
    return () => window.clearInterval(id)
  }, [])

  function goChapter(i: number) {
    const el = scroller.current?.querySelectorAll<HTMLElement>('[data-chapter]')[i]
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const active = heroSlides[slide]

  return (
    <div className={styles.root}>
      <header className={styles.bar}>
        <Link to="/propuestas">← Propuestas</Link>
        <span>Extra B · Cinemática</span>
        <a
          href={site.cta.href}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackTrialClassClick('proposal-b-header')}
        >
          WhatsApp
        </a>
      </header>

      <nav className={styles.dots} aria-label="Capítulos">
        {['Hero', 'Escuela', 'Programas', 'Horarios', 'Noticias', 'Dojos'].map((label, i) => (
          <button key={label} type="button" onClick={() => goChapter(i)} aria-label={label} />
        ))}
      </nav>

      <div className={styles.scroller} ref={scroller}>
        <section className={styles.chapter} data-chapter style={{ backgroundImage: `linear-gradient(120deg,rgba(8,8,8,.82),rgba(8,8,8,.35)), url(${hero.image})` }}>
          <div className={styles.heroInner}>
            <p className={styles.kicker}>Isshin Akira</p>
            <h1>{hero.brand}</h1>
            <p className={styles.heroTitle}>{hero.title}</p>
            <div className={styles.slideCard} key={active.id}>
              <p>{active.kicker}</p>
              <h2>{active.title}</h2>
              <p>{active.text}</p>
            </div>
            <div className={styles.slideDots}>
              {heroSlides.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  className={i === slide ? styles.on : undefined}
                  onClick={() => setSlide(i)}
                  aria-label={s.kicker}
                />
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.chapter} ${styles.ink}`} data-chapter>
          <div className={styles.wide}>
            <p className={styles.kicker}>Escuela</p>
            <h2>{school.title}</h2>
            <p className={styles.big}>{school.lead}</p>
            <div className={styles.split3}>
              {school.principles.map((p) => (
                <article key={p.title}>
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                </article>
              ))}
            </div>
            <div className={styles.links}>
              <Link to="/escuela/mision-y-vision">Misión e identidad</Link>
              <Link to="/escuela/equipo">Equipo</Link>
            </div>
          </div>
        </section>

        <section className={`${styles.chapter} ${styles.smoke}`} data-chapter>
          <div className={styles.wide}>
            <p className={styles.kicker}>Programas</p>
            <h2>{programs[program].title}</h2>
            <div className={styles.programStage}>
              <button type="button" onClick={() => setProgram((p) => (p - 1 + programs.length) % programs.length)}>
                ←
              </button>
              <img src={programs[program].image} alt="" />
              <button type="button" onClick={() => setProgram((p) => (p + 1) % programs.length)}>
                →
              </button>
            </div>
            <p className={styles.big}>{programs[program].summary}</p>
            <ul className={styles.points}>
              {programs[program].points.map((pt) => (
                <li key={pt}>{pt}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className={`${styles.chapter} ${styles.ink}`} data-chapter>
          <div className={styles.wide}>
            <p className={styles.kicker}>Horarios</p>
            <h2>{schedule.title}</h2>
            <div className={styles.scheduleGrid}>
              {schedule.venues.map((venue) => (
                <article key={venue.id}>
                  <p>{venue.period}</p>
                  <h3>{venue.name}</h3>
                  <ul>
                    {venue.groups.flatMap((g) =>
                      g.slots.map((s) => (
                        <li key={`${venue.id}-${g.id}-${s.ages}-${s.time}`}>
                          {g.days}: {s.ages} · {s.time}
                        </li>
                      )),
                    )}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className={`${styles.chapter} ${styles.smoke}`} data-chapter>
          <div className={styles.wide}>
            <p className={styles.kicker}>Noticias</p>
            <h2>Del dojo</h2>
            <div className={styles.newsRow}>
              {news.length === 0 ? (
                <article>
                  <h3>Próximamente</h3>
                  <p>Las novedades aparecerán aquí.</p>
                </article>
              ) : (
                news.slice(0, 3).map((n) => (
                  <article key={n.id}>
                    <h3>{n.title}</h3>
                    <p>{n.body}</p>
                  </article>
                ))
              )}
            </div>
          </div>
        </section>

        <section className={`${styles.chapter} ${styles.finale}`} data-chapter>
          <div className={styles.wide}>
            <p className={styles.kicker}>Sedes Temuco</p>
            <h2>Entrena con nosotros</h2>
            <div className={styles.dojoRow}>
              {dojos.map((d) => (
                <article key={d.id}>
                  <h3>{d.name}</h3>
                  <p>{d.address}</p>
                </article>
              ))}
            </div>
            <a
              className={styles.bigCta}
              href={site.cta.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackTrialClassClick('proposal-b-end')}
            >
              {site.cta.label}
            </a>
          </div>
        </section>
      </div>
      <FloatingWhatsApp />
    </div>
  )
}
