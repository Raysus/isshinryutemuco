import bcrypt from 'bcryptjs'
import fs from 'node:fs'
import path from 'node:path'
import { randomUUID } from 'node:crypto'

export type User = {
  id: string
  email: string
  passwordHash: string
  role: 'admin'
}

export type NewsItem = {
  id: string
  title: string
  body: string
  imageUrl: string | null
  createdAt: string
  updatedAt: string
  authorEmail: string
}

function dataDir(rootDir: string) {
  return path.join(rootDir, 'data')
}

function usersPath(rootDir: string) {
  return path.join(dataDir(rootDir), 'users.json')
}

function newsPath(rootDir: string) {
  return path.join(dataDir(rootDir), 'news.json')
}

export function ensureDataFiles(rootDir: string) {
  fs.mkdirSync(dataDir(rootDir), { recursive: true })
  if (!fs.existsSync(usersPath(rootDir))) {
    fs.writeFileSync(usersPath(rootDir), '[]\n', 'utf8')
  }
  if (!fs.existsSync(newsPath(rootDir))) {
    const seed: NewsItem[] = [
      {
        id: randomUUID(),
        title: 'Bienvenida al nuevo sitio',
        body: 'Estamos renovando la presencia digital del Dojo Isshin Akira Temuco. Pronto publicaremos más novedades de entrenamientos, exámenes y actividades.',
        imageUrl: null,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        authorEmail: 'sistema',
      },
    ]
    fs.writeFileSync(newsPath(rootDir), `${JSON.stringify(seed, null, 2)}\n`, 'utf8')
  }
}

export function readUsers(rootDir: string): User[] {
  return JSON.parse(fs.readFileSync(usersPath(rootDir), 'utf8')) as User[]
}

export function writeUsers(rootDir: string, users: User[]) {
  fs.writeFileSync(usersPath(rootDir), `${JSON.stringify(users, null, 2)}\n`, 'utf8')
}

export function readNews(rootDir: string): NewsItem[] {
  return JSON.parse(fs.readFileSync(newsPath(rootDir), 'utf8')) as NewsItem[]
}

export function writeNews(rootDir: string, news: NewsItem[]) {
  fs.writeFileSync(newsPath(rootDir), `${JSON.stringify(news, null, 2)}\n`, 'utf8')
}

export function ensureAdminUser(rootDir: string) {
  const email = (process.env.ADMIN_EMAIL ?? 'admin@isshinryutemuco.cl').toLowerCase()
  const password = process.env.ADMIN_PASSWORD ?? 'isshin-admin-2026'
  const users = readUsers(rootDir)
  const existing = users.find((user) => user.email === email)

  if (existing) return

  const passwordHash = bcrypt.hashSync(password, 10)
  users.push({
    id: randomUUID(),
    email,
    passwordHash,
    role: 'admin',
  })
  writeUsers(rootDir, users)
  console.log(`Admin creado: ${email}`)
}
