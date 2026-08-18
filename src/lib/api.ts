export type NewsItem = {
  id: string
  title: string
  body: string
  imageUrl: string | null
  createdAt: string
  updatedAt: string
  authorEmail: string
}

export type AuthUser = {
  id: string
  email: string
}

const API_BASE = import.meta.env.VITE_API_URL ?? ''

async function request<T>(path: string, init?: RequestInit): Promise<T> {
  const response = await fetch(`${API_BASE}${path}`, {
    credentials: 'include',
    ...init,
  })

  if (!response.ok) {
    let message = 'Error de servidor'
    try {
      const data = (await response.json()) as { error?: string }
      if (data.error) message = data.error
    } catch {
      // ignore parse errors
    }
    throw new Error(message)
  }

  if (response.status === 204) {
    return undefined as T
  }

  return (await response.json()) as T
}

export function imageSrc(imageUrl: string | null): string | null {
  if (!imageUrl) return null
  if (imageUrl.startsWith('http')) return imageUrl
  return `${API_BASE}${imageUrl}`
}

export const api = {
  me: () => request<AuthUser>('/api/auth/me'),
  login: (email: string, password: string) =>
    request<AuthUser>('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }),
  logout: () => request<{ ok: boolean }>('/api/auth/logout', { method: 'POST' }),
  listNews: () => request<NewsItem[]>('/api/news'),
  createNews: (formData: FormData) =>
    request<NewsItem>('/api/news', {
      method: 'POST',
      body: formData,
    }),
  deleteNews: (id: string) =>
    request<{ ok: boolean }>(`/api/news/${id}`, { method: 'DELETE' }),
}
