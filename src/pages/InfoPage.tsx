import { Link } from 'react-router-dom'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { getInfoPage, type InfoBlock } from '../content/pages'
import { site } from '../content'
import styles from './InfoPage.module.css'

function Blocks({ blocks }: { blocks: InfoBlock[] }) {
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
                {item.text ? <p>{item.text}</p> : (
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
        <div className={styles.inner}>
          <p className={styles.eyebrow}>{page.eyebrow}</p>
          <h1 className={styles.title}>{page.title}</h1>
          {page.lead ? <p className={styles.lead}>{page.lead}</p> : null}
          <div className={styles.body}>
            <Blocks blocks={page.blocks} />
          </div>
          <div className={styles.actions}>
            <Link className={styles.back} to="/">
              Volver al inicio
            </Link>
            <a className={styles.cta} href={site.cta.href}>
              {site.cta.label}
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
