import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { FloatingWhatsApp } from '../components/FloatingWhatsApp'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { InteractiveMission } from '../components/InteractiveMission'
import { InteractiveTeam } from '../components/InteractiveTeam'
import { getInfoPage, type InfoBlock } from '../content/pages'
import { site } from '../content'
import { trackTrialClassClick } from '../lib/analytics'
import styles from './InfoPage.module.css'

function Blocks({ blocks, path }: { blocks: InfoBlock[]; path: string }) {
  if (path === '/escuela/mision-y-vision') {
    const subsections = blocks.find((b) => b.type === 'subsections')
    const footnote = blocks.find((b) => b.type === 'paragraph')
    if (subsections && subsections.type === 'subsections') {
      return (
        <InteractiveMission
          items={subsections.items}
          footnote={footnote && footnote.type === 'paragraph' ? footnote.text : undefined}
        />
      )
    }
  }

  if (path === '/escuela/equipo') {
    const people = blocks.find((b) => b.type === 'people')
    if (people && people.type === 'people') {
      return <InteractiveTeam people={people.items} />
    }
  }

  return (
    <>
      {blocks.map((block, index) => {
        if (block.type === 'paragraph') {
          return (
            <p key={index} className={styles.paragraph}>
              {block.text}
            </p>
          )
        }
        if (block.type === 'list') {
          return (
            <ul key={index} className={styles.list}>
              {block.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          )
        }
        if (block.type === 'people') {
          return (
            <ul key={index} className={styles.people}>
              {block.items.map((person) => (
                <li key={person.name}>
                  <strong>{person.name}</strong>
                  <span>{person.role}</span>
                </li>
              ))}
            </ul>
          )
        }
        return (
          <ul key={index} className={styles.subsections}>
            {block.items.map((item) => (
              <li key={item.title}>
                <h3>{item.title}</h3>
                {item.text ? (
                  <p>{item.text}</p>
                ) : (
                  <p className={styles.pending}>Contenido detallado próximamente.</p>
                )}
              </li>
            ))}
          </ul>
        )
      })}
    </>
  )
}

export function InfoPage({ path }: { path: string }) {
  const page = getInfoPage(path)

  if (!page) {
    return (
      <>
        <Header />
        <main className={styles.main}>
          <p>Página no encontrada.</p>
          <Link to="/">Volver al inicio</Link>
        </main>
        <Footer />
      </>
    )
  }

  return (
    <>
      <Header />
      <main className={styles.main}>
        <div className={styles.innerWide}>
          <motion.p
            className={styles.eyebrow}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            {page.eyebrow}
          </motion.p>
          <motion.h1
            className={styles.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05 }}
          >
            {page.title}
          </motion.h1>
          {page.lead ? (
            <motion.p
              className={styles.lead}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              {page.lead}
            </motion.p>
          ) : null}
          <div className={styles.body}>
            <Blocks blocks={page.blocks} path={path} />
          </div>
          <div className={styles.actions}>
            <Link className={styles.back} to="/">
              Volver al inicio
            </Link>
            <a
              className={styles.cta}
              href={site.cta.href}
              target="_blank"
              rel="noreferrer"
              onClick={() => trackTrialClassClick('info-page')}
            >
              {site.cta.label}
            </a>
          </div>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}
