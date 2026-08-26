import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
} from 'framer-motion'
import {
  dojos,
  hero,
  heroSlides,
  programs,
  schedule,
  school,
  site,
} from '../content'
import { api, imageSrc, type NewsItem } from '../lib/api'
import { trackTrialClassClick } from '../lib/analytics'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { Footer } from '../components/Footer'
import styles from './TemucoHybrid.module.css'

const sections = [
  { id: 'inicio', label: 'Inicio' },
  { id: 'escuela', label: 'Escuela' },
  { id: 'programas', label: 'Programas' },
  { id: 'horarios', label: 'Horarios' },
  { id: 'noticias', label: 'Noticias' },
  { id: 'dojos', label: 'Dojos' },
] as const

function formatDate(value: string) {
  return new Intl.DateTimeFormat('es-CL', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(value))
}

export function TemucoHybrid() {
  const rootRef = useRef<HTMLDivElement>(null)
  const [slide, setSlide] = useState(0)
  const [activeSection, setActiveSection] = useState(0)
  const [program, setProgram] = useState(0)
  const [news, setNews] = useState<NewsItem[]>([])
  const { scrollYProgress } = useScroll({ container: rootRef })
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 28 })

  useMotionValueEvent(scrollYProgress, 'change', (v) => {
    const idx = Math.min(sections.length - 1, Math.floor(v * sections.length))
    setActiveSection(idx)
  })

  useEffect(() => {
    const id = window.setInterval(
      () => setSlide((s) => (s + 1) % heroSlides.length),
      4800,
    )
    return () => window.clearInterval(id)
  }, [])

  useEffect(() => {
    void api
      .listNews()
      .then(setNews)
      .catch(() => setNews([]))
  }, [])

  function go(id: string) {
    rootRef.current
      ?.querySelector(`#${id}`)
      ?.scrollIntoView({ behavior: 'smooth' })
  }

  const active = heroSlides[slide]
  const featured = news[0]
  const rest = news.slice(1, 4)

  return (
    <div className={styles.root}>
      <header className={styles.bar}>
        <Link className={styles.back} to="/propuestas">
          ← Propuestas
        </Link>
        <nav className={styles.nav} aria-label="Secciones">
          {sections.map((s, i) => (
            <button
              key={s.id}
              type="button"
              className={i === activeSection ? styles.navOn : undefined}
              onClick={() => go(s.id)}
            >
              {s.label}
            </button>
          ))}
        </nav>
        <a
          className={styles.barCta}
          href={site.cta.href}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackTrialClassClick('proposal-b-header')}
        >
          WhatsApp
        </a>
      </header>

      <aside className={styles.rail} aria-label="Progreso de secciones">
        <motion.div className={styles.railFill} style={{ scaleY: progress }} />
        {sections.map((s, i) => (
          <button
            key={s.id}
            type="button"
            className={i === activeSection ? styles.railOn : undefined}
            onClick={() => go(s.id)}
          >
            {s.label}
          </button>
        ))}
      </aside>

      <div className={styles.scroller} ref={rootRef}>
        <section id="inicio" className={styles.hero}>
          <motion.div
            className={styles.heroMedia}
            style={{ backgroundImage: `url(${hero.image})` }}
            initial={{ scale: 1.12 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className={styles.heroShade} />
          <div className={styles.heroCopy}>
            <motion.p
              className={styles.kicker}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              Isshin Akira · Temuco
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.08 }}
            >
              {hero.brand}
            </motion.h1>
            <motion.p
              className={styles.heroSub}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.16 }}
            >
              {hero.subtitle}
            </motion.p>

            <div className={styles.slideStage}>
              <AnimatePresence mode="wait">
                <motion.article
                  key={active.id}
                  className={styles.slide}
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -36 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>{active.kicker}</p>
                  <h2>{active.title}</h2>
                  <p>{active.text}</p>
                </motion.article>
              </AnimatePresence>
              <div className={styles.slideDots}>
                {heroSlides.map((s, i) => (
                  <button
                    key={s.id}
                    type="button"
                    aria-label={s.kicker}
                    className={i === slide ? styles.on : undefined}
                    onClick={() => setSlide(i)}
                  />
                ))}
              </div>
            </div>

            <motion.a
              className={styles.heroCta}
              href={site.cta.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => trackTrialClassClick('proposal-b-hero')}
            >
              {site.cta.label}
            </motion.a>
          </div>
        </section>

        <section id="escuela" className={styles.section}>
          <motion.div
            className={styles.sectionInner}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
          >
            <p className={styles.kickerDark}>Escuela</p>
            <h2>{school.title}</h2>
            <p className={styles.lead}>{school.lead}</p>
            <p className={styles.lead}>{school.body}</p>

            <ol className={styles.principles}>
              {school.principles.map((item, index) => (
                <motion.li
                  key={item.title}
                  className={styles.principle}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <span className={styles.index} aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div>
                    <h3 className={styles.principleTitle}>{item.title}</h3>
                    <p className={styles.principleText}>{item.text}</p>
                  </div>
                </motion.li>
              ))}
            </ol>

            <div className={styles.pillRow}>
              {school.links.map((link) => (
                <motion.div
                  key={link.href}
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Link className={styles.pill} to={link.href}>
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        <section id="programas" className={`${styles.section} ${styles.alt}`}>
          <div className={styles.sectionInner}>
            <p className={styles.kickerDark}>Programas</p>
            <h2>Etapas de entrenamiento</h2>
            <div className={styles.programTabs} role="tablist">
              {programs.map((p, i) => (
                <button
                  key={p.id}
                  type="button"
                  role="tab"
                  aria-selected={i === program}
                  className={i === program ? styles.tabOn : styles.tab}
                  onClick={() => setProgram(i)}
                >
                  {p.title.replace('Etapa ', '')}
                  {i === program ? (
                    <motion.span
                      layoutId="temuco-b-tab"
                      className={styles.tabLine}
                    />
                  ) : null}
                </button>
              ))}
            </div>
            <AnimatePresence mode="wait">
              <motion.div
                key={programs[program].id}
                className={styles.programPanel}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
              >
                <div
                  className={styles.programMedia}
                  style={{ backgroundImage: `url(${programs[program].image})` }}
                />
                <div>
                  <h3>{programs[program].title}</h3>
                  <p>{programs[program].summary}</p>
                  <ul>
                    {programs[program].points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        <section id="horarios" className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.kickerDark}>Horarios</p>
            <h2>{schedule.title}</h2>
            <div className={styles.venueGrid}>
              {schedule.venues.map((venue, i) => (
                <motion.article
                  key={venue.id}
                  className={styles.venue}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  whileHover={{ y: -6 }}
                >
                  <p className={styles.badge}>{venue.badge}</p>
                  <h3>{venue.name}</h3>
                  <p>{venue.period}</p>
                  {venue.groups.map((g) => (
                    <div key={g.id} className={styles.group}>
                      <strong>{g.days}</strong>
                      {g.slots.map((s) => (
                        <span key={`${s.ages}-${s.time}`}>
                          {s.ages} · {s.time}
                        </span>
                      ))}
                    </div>
                  ))}
                </motion.article>
              ))}
            </div>
          </div>
        </section>

        <section id="noticias" className={`${styles.section} ${styles.alt}`}>
          <div className={styles.sectionInner}>
            <p className={styles.kickerDark}>Novedades</p>
            <h2>Noticias del dojo</h2>
            <p className={styles.lead}>
              Exámenes, actividades y anuncios de Isshin Akira, en vivo desde el
              panel del dojo.
            </p>

            {news.length === 0 ? (
              <div className={styles.newsEmpty}>
                <p>Aún no hay noticias publicadas.</p>
                <Link className={styles.pill} to="/admin">
                  Ir al panel admin
                </Link>
              </div>
            ) : (
              <div className={styles.newsLayout}>
                <motion.article
                  className={styles.featured}
                  initial={{ opacity: 0, y: 28 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {imageSrc(featured.imageUrl) ? (
                    <img
                      className={styles.featuredImage}
                      src={imageSrc(featured.imageUrl) ?? undefined}
                      alt=""
                      loading="lazy"
                    />
                  ) : (
                    <div className={styles.newsPlaceholder} aria-hidden="true" />
                  )}
                  <div className={styles.featuredCopy}>
                    <time className={styles.date} dateTime={featured.createdAt}>
                      {formatDate(featured.createdAt)}
                    </time>
                    <h3>{featured.title}</h3>
                    <p>{featured.body}</p>
                  </div>
                </motion.article>

                {rest.length > 0 ? (
                  <div className={styles.newsSide}>
                    {rest.map((item, i) => (
                      <motion.article
                        key={item.id}
                        className={styles.newsSideItem}
                        initial={{ opacity: 0, x: 24 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.08 }}
                      >
                        <time className={styles.date} dateTime={item.createdAt}>
                          {formatDate(item.createdAt)}
                        </time>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                      </motion.article>
                    ))}
                  </div>
                ) : null}
              </div>
            )}
          </div>
        </section>

        <section id="dojos" className={styles.section}>
          <div className={styles.sectionInner}>
            <p className={styles.kickerDark}>Sedes</p>
            <h2>Dojos en Temuco</h2>
            <div className={styles.dojoRow}>
              {dojos.map((d, i) => (
                <motion.article
                  key={d.id}
                  className={styles.dojo}
                  initial={{ opacity: 0, scale: 0.96 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <p className={styles.badge}>{d.badge}</p>
                  <h3>{d.name}</h3>
                  <p>{d.address}</p>
                  <div className={styles.dojoContact}>
                    {d.phone && d.phoneHref ? (
                      <a href={d.phoneHref}>{d.phone}</a>
                    ) : null}
                    {d.email && d.emailHref ? (
                      <a href={d.emailHref}>{d.email}</a>
                    ) : null}
                    {d.whatsappHref ? (
                      <a href={d.whatsappHref} target="_blank" rel="noreferrer">
                        Escribir por WhatsApp
                      </a>
                    ) : null}
                  </div>
                </motion.article>
              ))}
            </div>
            <motion.a
              className={styles.cta}
              href={site.cta.href}
              target="_blank"
              rel="noreferrer"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => trackTrialClassClick('proposal-b-cta')}
            >
              {site.cta.label}
            </motion.a>
          </div>
        </section>

        <Footer />
      </div>

      <FloatingWhatsApp />
    </div>
  )
}
