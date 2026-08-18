# Isshinryu Temuco — Landing

Landing page moderna del **Dojo Isshin Akira Temuco** (Karate y Kobudo Isshin Ryu OIKKA), hecha con React + TypeScript + Vite.

Sitio de referencia: [isshinryutemuco.cl](https://isshinryutemuco.cl/)

## Cómo correrlo

```bash
npm install
npm run dev
```

Build de producción:

```bash
npm run build
npm run preview
```

## Estructura

```text
src/
  content.ts              # Textos, dojos, CTAs (edita aquí el contenido)
  App.tsx                 # Orquesta Header + secciones + Footer
  components/             # UI por sección (TSX + CSS Module)
  index.css               # Tokens globales (colores, tipografía)
public/images/            # Fotos y logo del dojo
```

Guía detallada del código: [`docs/GUIA-DEL-CODIGO.md`](docs/GUIA-DEL-CODIGO.md)

## Scripts

| Comando | Qué hace |
|---------|----------|
| `npm run dev` | Servidor de desarrollo |
| `npm run build` | Typecheck + build estático |
| `npm run preview` | Sirve el build |
| `npm run lint` | Oxlint |
