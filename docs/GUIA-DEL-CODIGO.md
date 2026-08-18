# Guía del código — Isshinryu Temuco Landing

Documento para entender **cómo está armado el proyecto**, qué hace cada archivo y qué conceptos de React/TypeScript estás practicando. Sirve para retomar el código sin depender de memoria.

---

## 1. Qué es este proyecto

Es un **landing page de una sola página** (single page): el usuario hace scroll y navega con anclas (`#escuela`, `#programas`, etc.).

No hay backend todavía. Los textos viven en TypeScript (`content.ts`) y la UI en componentes React.

Stack:

| Pieza | Rol |
|-------|-----|
| **Vite** | Bundler / servidor de desarrollo |
| **React 19** | UI con componentes |
| **TypeScript** | Tipado estático |
| **CSS Modules** | Estilos por componente (no se pisan entre sí) |

---

## 2. Flujo de arranque (de HTML a pantalla)

Orden real de ejecución:

1. El navegador carga `index.html`
2. Ese HTML monta el script `src/main.tsx`
3. `main.tsx` crea el root de React en `#root` y renderiza `<App />`
4. `App.tsx` ensambla Header + secciones + Footer
5. Cada sección lee datos de `content.ts` y aplica su `.module.css`

```text
index.html
   └── main.tsx
         └── App.tsx
               ├── Header
               ├── Hero
               ├── School
               ├── Programs
               ├── Dojos
               ├── Contact
               └── Footer
```

### `index.html`

- `lang="es"`: idioma del documento
- `<meta name="description">`: resumen para SEO / previews
- `<div id="root">`: único contenedor donde React pinta la app
- El favicon apunta a `/favicon.png` (carpeta `public/`)

### `src/main.tsx`

```tsx
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
```

- `createRoot`: API moderna de React 18+
- `StrictMode`: en desarrollo ayuda a detectar efectos/problemas; no cambia el producto final
- `!` (non-null assertion): le dices a TypeScript “este elemento existe”

### `src/App.tsx`

Es el **compositor**. No tiene lógica de negocio: solo ordena secciones.

```tsx
<>
  <Header />
  <main id="inicio">...</main>
  <Footer />
</>
```

- `<>...</>` = Fragment: agrupa sin crear un `div` extra
- `id="inicio"`: ancla del logo / “volver arriba”

---

## 3. Contenido separado de la UI — `src/content.ts`

Regla del proyecto: **cambiar textos, teléfonos o CTAs sin tocar componentes**.

Exporta objetos y arrays:

- `site`, `navLinks`, `hero`
- `school`, `programs`, `dojos`
- `contact`, `footer`

Ejemplo de patrón:

```ts
export const navLinks = [
  { label: 'Escuela', href: '#escuela' },
  // ...
] as const
```

- `as const`: TypeScript vuelve literales más estrictos (mejor autocompletado y menos errores)
- Los componentes hacen `import { navLinks } from '../content'` y recorren con `.map()`

Si mañana cambia el WhatsApp de Temuco, editas **un** campo en `dojos` / `contact`, no siete archivos JSX.

---

## 4. Estilos globales — `src/index.css`

Define **design tokens** en `:root`:

- Colores: fondo, texto, acento rojo del dojo
- Tipografías: Bebas Neue (display) + Source Sans 3 (cuerpo)
- Layout: `--max-width`, `--header-height`, `--space`

También hay un reset mínimo (`box-sizing`, `margin` del `body`, links, imágenes).

Idea clave: si quieres otro rojo, cambias `--color-accent` una vez.

---

## 5. CSS Modules — por qué `Header.module.css`

Archivos `*.module.css` generan **clases con hash único**.

En el TSX:

```tsx
import styles from './Header.module.css'
// ...
<header className={styles.header}>
```

Ventajas:

- `.header` del Header no choca con `.header` de otro archivo
- Se ve claro qué estilos pertenecen a qué componente
- Evita CSS global descontrolado

Convención del repo: **un módulo CSS por componente de sección**.

---

## 6. Componentes (qué hace cada uno)

### `Header.tsx` — navegación sticky + menú móvil

Conceptos React:

- `useState(false)` para saber si el menú está abierto
- Eventos `onClick` para abrir/cerrar y cerrar al navegar
- Accesibilidad: `aria-expanded`, `aria-controls`, `aria-label`

Patrón del menú:

```tsx
className={open ? `${styles.nav} ${styles.navOpen}` : styles.nav}
```

En desktop el nav es horizontal; bajo `768px` el botón “Menú” controla `.navOpen`.

El logo viene de `public/images/logo.png`.

### `Hero.tsx` — primera pantalla

- Marca grande (`hero.brand`) como señal principal de marca
- Un `h1`, un subtítulo, un CTA
- Imagen full-bleed vía `background-image` + overlay oscuro para legibilidad
- Animaciones suaves (`heroZoom`, `heroRise`) con respeto a `prefers-reduced-motion`

Esto implementa la idea de landing: **poca información, mucho impacto**.

### `School.tsx` — escuela / filosofía

- Textos de Okinawa / Isshin Ryu / Isshin Akira
- Lista de principios con `.map()`

Semántica: `section` + `h2` + lista.

### `Programs.tsx` — etapas de entrenamiento

- Datos en `programs` (infantil, adolescentes, adultos, deportiva)
- Cada ítem es un `<article>` con imagen + resumen + bullets
- Layout alternado (par/impar) solo con CSS (`nth-child(even)`)

Imágenes en `public/images/` (se referencian como `/images/...`).

### `Dojos.tsx` — sedes

- Tres dojos: Temuco, Concepción, Los Ángeles
- Links `tel:`, `mailto:` y WhatsApp
- Render condicional del email:

```tsx
{dojo.email && dojo.emailHref ? <a href={dojo.emailHref}>...</a> : null}
```

Los Ángeles no tiene email en el sitio original → `null`.

### `Contact.tsx` — CTA final

- WhatsApp Temuco (con texto prellenado) + correo
- Sección pensada para convertir (“agendar clase de prueba”)

### `Footer.tsx`

- Año dinámico con `new Date().getFullYear()`
- Enlaces externos (`target="_blank"` + `rel="noreferrer"`)

---

## 7. Carpeta `public/` vs `src/assets/`

| Ubicación | Cómo se usa |
|-----------|-------------|
| `public/` | URL fija: `/images/hero.jpg` |
| `src/assets/` | Se importa en JS y Vite le pone hash en el build |

Aquí las fotos del dojo están en `public/images/` para URLs simples desde `content.ts`.

---

## 8. TypeScript: qué te está cuidando

En `tsconfig.app.json` hay reglas útiles:

- `noUnusedLocals` / `noUnusedParameters`: no dejes imports muertos
- `jsx: react-jsx`: no necesitas `import React from 'react'` solo para JSX
- `verbatimModuleSyntax`: imports de tipos deben ser claros cuando aplique

Si el build falla, casi siempre es:

1. Import sin usar
2. Propiedad mal escrita al leer `content.ts`
3. Error de tipado en un `.map()`

Comando que valida todo:

```bash
npm run build
```

(Ejecuta `tsc -b` + empaquetado de Vite.)

---

## 9. Git / GitHub — flujo que usamos

Ramas vistas en el aprendizaje:

- `master` — estable
- `feat/header-base` — Header + tokens
- `feat/landing-complete` — landing completo

Hábitos buenos:

1. Feature en rama `feat/...`
2. Commits con mensaje claro (`feat: ...`, `chore: ...`)
3. Push + PR (o merge a `master`)
4. No subir secretos (este proyecto no tiene `.env` aún)

Repo: https://github.com/Raysus/isshinryutemuco

---

## 10. Cómo editar cosas comunes

| Quiero cambiar… | Archivo |
|-----------------|---------|
| Teléfono / WhatsApp / mail | `src/content.ts` → `dojos` / `contact` |
| Textos del hero | `src/content.ts` → `hero` |
| Color rojo / tipografías | `src/index.css` → `:root` |
| Orden de secciones | `src/App.tsx` |
| Estilo del Header | `Header.module.css` |
| Foto del hero | `public/images/hero.jpg` |

---

## 11. Mapa mental React (lo que ya practicaste)

1. **Componente** = función que retorna JSX
2. **Props / datos** = aquí vienen de `content.ts` (en vez de props padre→hijo en muchos casos)
3. **Estado** = `useState` en el Header (menú)
4. **Listas** = `.map()` + `key` estable
5. **Eventos** = `onClick`
6. **Composición** = App junta piezas pequeñas
7. **Estilos scoped** = CSS Modules

Próximo nivel natural (Fase backend):

- Formulario controlado (`useState` por campo o FormData)
- `fetch` a una API / Supabase / Formspree
- Variables de entorno `import.meta.env.VITE_...`
- Validación y mensajes de error/éxito

---

## 12. Comandos útiles

```bash
npm run dev       # desarrollo local
npm run build     # producción
npm run preview   # probar el build
npm run lint      # oxlint

git status
git checkout -b feat/mi-cambio
git add .
git commit -m "feat: descripción corta"
git push -u origin HEAD
```

---

## 13. Checklist de lectura recomendada (en este orden)

1. `index.html`
2. `src/main.tsx`
3. `src/App.tsx`
4. `src/content.ts`
5. `src/index.css`
6. `src/components/Header.tsx` + su CSS (estado + responsive)
7. `Hero.tsx` → `School.tsx` → `Programs.tsx` → `Dojos.tsx` → `Contact.tsx` → `Footer.tsx`

Si entiendes ese recorrido, ya puedes mantener y extender el landing con criterio.
