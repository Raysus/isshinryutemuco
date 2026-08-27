import { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../auth/useAuth'
import styles from './AccountMenu.module.css'

function initialOf(email: string) {
  return email.trim().charAt(0).toUpperCase() || 'A'
}

export function AccountMenu({ onNavigate }: { onNavigate?: () => void }) {
  const { user, loading, logout } = useAuth()
  const [open, setOpen] = useState(false)
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    function onDown(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        setOpen(false)
      }
    }
    function onKey(event: KeyboardEvent) {
      if (event.key === 'Escape') setOpen(false)
    }
    document.addEventListener('mousedown', onDown)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('mousedown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  if (loading) return null

  if (!user) {
    return (
      <Link className={styles.login} to="/admin" onClick={onNavigate}>
        <PersonIcon />
        <span>Ingresar</span>
      </Link>
    )
  }

  async function handleLogout() {
    setOpen(false)
    try {
      await logout()
    } catch {
      /* mantener sesión visible si falla el cierre */
    }
  }

  return (
    <div className={styles.account} ref={ref}>
      <button
        type="button"
        className={styles.trigger}
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Menú de cuenta"
        onClick={() => setOpen((value) => !value)}
      >
        <span className={styles.avatar} aria-hidden="true">
          {initialOf(user.email)}
        </span>
        <ChevronIcon className={open ? styles.chevOpen : styles.chev} />
      </button>

      {open ? (
        <div className={styles.menu} role="menu">
          <div className={styles.menuHead}>
            <span className={styles.avatarLg} aria-hidden="true">
              {initialOf(user.email)}
            </span>
            <div className={styles.who}>
              <p className={styles.name}>Administrador</p>
              <p className={styles.email}>{user.email}</p>
            </div>
          </div>

          <div className={styles.list}>
            <Link
              className={styles.item}
              role="menuitem"
              to="/admin/noticias"
              onClick={() => {
                setOpen(false)
                onNavigate?.()
              }}
            >
              <span>Panel de noticias</span>
              <NewsIcon />
            </Link>
          </div>

          <div className={styles.divider} />

          <button
            type="button"
            className={`${styles.item} ${styles.logout}`}
            role="menuitem"
            onClick={handleLogout}
          >
            <span>Cerrar sesión</span>
            <LogoutIcon />
          </button>
        </div>
      ) : null}
    </div>
  )
}

const iconProps = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function PersonIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

function ChevronIcon({ className }: { className?: string }) {
  return (
    <svg {...iconProps} className={className} aria-hidden="true">
      <path d="m6 9 6 6 6-6" />
    </svg>
  )
}

function NewsIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Z" />
      <path d="M2 11v9a2 2 0 0 0 2 2" />
      <path d="M18 14h-8M15 18h-5M10 6h8v4h-8V6Z" />
    </svg>
  )
}

function LogoutIcon() {
  return (
    <svg {...iconProps} aria-hidden="true">
      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
      <polyline points="16 17 21 12 16 7" />
      <line x1="21" x2="9" y1="12" y2="12" />
    </svg>
  )
}
