import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import styles from './Stats.module.css'

const yearsSince2003 = Math.max(1, new Date().getFullYear() - 2003)

const stats = [
  { value: yearsSince2003, suffix: '+', label: 'años de trayectoria' },
  { value: 2, suffix: '', label: 'sedes en Temuco' },
  { value: 4, suffix: '', label: 'etapas de formación' },
  { value: 3, suffix: '', label: 'instructores' },
] as const

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!inView) return
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduced) {
      setCurrent(value)
      return
    }
    const duration = 1700
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration)
      const eased = 1 - Math.pow(1 - t, 3)
      setCurrent(Math.round(eased * value))
      if (t < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref} className={styles.value}>
      {current}
      {suffix}
    </span>
  )
}

export function Stats() {
  return (
    <section className={styles.section} aria-label="Cifras del dojo">
      <div className={styles.inner}>
        {stats.map((stat) => (
          <div key={stat.label} className={styles.item}>
            <Counter value={stat.value} suffix={stat.suffix} />
            <span className={styles.label}>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
