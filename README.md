# Isshinryu Temuco — Landing + Admin

Sitio del **Dojo Isshin Akira Temuco** (Karate y Kobudo Isshin Ryu OIKKA) con landing en React y panel admin para publicar noticias.

## Cómo correrlo (local)

```bash
cp .env.example .env   # si aún no tienes .env
npm install
npm run dev
```

Abre:

- Sitio: http://127.0.0.1:5173/
- Admin: http://127.0.0.1:5173/admin

Credenciales por defecto (definidas en `.env`):

- Email: `admin@isshinryutemuco.cl`
- Password: `isshin-admin-2026`

Cámbialas antes de producción.

## Estructura

```text
src/                 # Frontend React
server/              # API Express (auth + noticias + uploads)
data/                # JSON local (usuarios/noticias) — no se sube a git
uploads/             # Imágenes subidas — no se sube a git
docs/GUIA-DEL-CODIGO.md
```

## Scripts

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Web (Vite) + API (Express) juntos |
| `npm run build` | Build del frontend |
| `npm start` | Sirve API + frontend build (producción) |
| `npm run lint` | Oxlint |
