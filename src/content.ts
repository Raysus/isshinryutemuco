import type { NewsItem } from './lib/api'
import { assetUrl } from './lib/paths'

export const site = {
  name: 'Dojo Isshin Akira Temuco',
  shortName: 'Isshin Akira',
  tagline: 'Karate y Kobudo Isshin Ryu OIKKA para niños, jóvenes y adultos',
  cta: {
    label: 'Agendar mi clase de prueba',
    href: 'https://api.whatsapp.com/send?phone=56967588846&text=Hola%2C%20quiero%20agendar%20una%20clase%20de%20prueba',
  },
  whatsapp: {
    phone: '56967588846',
    href: 'https://api.whatsapp.com/send?phone=56967588846&text=Hola%2C%20quiero%20agendar%20una%20clase%20de%20prueba',
    label: 'Escribir por WhatsApp',
  },
}

/** Visible in the public header */
export const navLinks = [
  { label: 'Escuela', href: '/#escuela' },
  { label: 'Misión', href: '/escuela/mision-y-vision' },
  { label: 'Equipo', href: '/escuela/equipo' },
  { label: 'Programas', href: '/#programas' },
  { label: 'Horarios', href: '/#horarios' },
  { label: 'Noticias', href: '/#noticias' },
  { label: 'Dojos', href: '/#dojos' },
] as const

/**
 * Prepared pages/routes — hidden from nav until we publish them.
 * Toggle `published: true` and add to nav when ready.
 */
export const hiddenPages = [
  {
    published: true,
    path: '/escuela/mision-y-vision',
    label: 'Misión y Visión',
  },
  {
    published: false,
    path: '/escuela/historia-y-biografias',
    label: 'Historia y Biografías',
  },
  {
    published: true,
    path: '/escuela/equipo',
    label: 'Equipo',
  },
  {
    published: false,
    path: '/programas/infantil',
    label: 'Etapa Infantil',
  },
  {
    published: false,
    path: '/programas/adolescentes',
    label: 'Etapa Adolescentes',
  },
  {
    published: false,
    path: '/programas/adultos',
    label: 'Etapa Adultos',
  },
  {
    published: false,
    path: '/programas/deportiva',
    label: 'Etapa Deportiva',
  },
] as const

export const hero = {
  brand: 'Isshin Akira',
  title: 'Karate y Kobudo Isshin Ryu en Temuco',
  subtitle:
    'Formación profesional para niños, jóvenes y adultos. Escuela de un solo corazón.',
  image: assetUrl('images/hero.jpg'),
  imageAlt: 'Practicantes de Karate Isshin Ryu en entrenamiento',
}

/** Carrusel del hero: eventos, noticias, representación, público */
export const heroSlides = [
  {
    id: 'eventos',
    kicker: 'Eventos',
    title: 'Exámenes, seminarios y encuentros',
    text: 'Actividades del dojo y de la familia OIKKA: graduaciones, entrenamientos especiales y competencia sana.',
  },
  {
    id: 'noticias',
    kicker: 'Noticias',
    title: 'Lo que pasa en Isshin Akira',
    text: 'Avisos de horarios, logros de alumnos y novedades del Honbu Dojo Temuco.',
  },
  {
    id: 'representacion',
    kicker: 'La escuela',
    title: 'Isshin Akira · un solo corazón',
    text: 'Representamos Isshin Ryu con claridad técnica, respeto y constancia en cada clase.',
  },
  {
    id: 'publico',
    kicker: 'Para quién',
    title: 'Niños, jóvenes y adultos',
    text: 'Programas por etapa: desde la primera clase hasta la formación deportiva.',
  },
] as const

export const school = {
  id: 'escuela',
  title: 'Nuestra escuela',
  lead:
    'La isla de Okinawa (Japón) es la cuna del Karate Do y tierra de origen del Karate Isshin Ryu, que significa “Escuela de un solo corazón”.',
  body:
    'El nombre de la escuela es Isshin Akira: “Hombre de mente clara de un solo corazón”. Esa idea orienta la filosofía del entrenamiento diario y es la esencia de Okinawa Isshin Ryu Karate y Kobudo Association (OIKKA).',
  principles: [
    {
      title: 'Un solo corazón',
      text: 'Isshin Ryu une cuerpo, mente y espíritu en un entrenamiento coherente y disciplinado.',
    },
    {
      title: 'Mente clara',
      text: 'Isshin Akira enfatiza claridad, respeto y constancia en cada clase.',
    },
    {
      title: 'Formación integral',
      text: 'Trabajamos técnica, valores y desarrollo personal en cada etapa de la vida.',
    },
  ],
  links: [
    { label: 'Misión, visión e identidad', href: '/escuela/mision-y-vision' },
    { label: 'Conoce al equipo', href: '/escuela/equipo' },
  ],
}

export const programsIntro =
  'Nuestro objetivo es entregar una formación adecuada y profesional en las diferentes etapas de desarrollo de cada integrante del Dojo, organizando programas según etapas, niveles y necesidades de cada alumno.'

export const programs = [
  {
    id: 'infantil',
    title: 'Etapa Infantil',
    image: assetUrl('images/infantil.jpg'),
    summary:
      'Estimulación psicomotriz en ambiente lúdico, hábitos de disciplina y respeto, e inicio en los elementos básicos del Karate Do Isshin Ryu.',
    points: [
      'Capacidades físicas acordes a la edad',
      'Reglas de cortesía en el dojo',
      'Historia general del Isshin Ryu',
      'Uso apropiado de la respiración',
    ],
  },
  {
    id: 'adolescentes',
    title: 'Etapa Adolescentes',
    image: assetUrl('images/adolescentes.jpg'),
    summary:
      'Valores como perseverancia y personalidad, estabilidad psicológica en el entrenamiento y desarrollo de cualidades físicas y técnicas.',
    points: [
      'Técnicas básicas y kihon',
      'Katas, bunkai y defensa personal',
      'Kumite y hábitos de entrenamiento',
      'Conciencia corporal y respiratoria',
    ],
  },
  {
    id: 'adultos',
    title: 'Etapa Adultos',
    image: assetUrl('images/adultos.jpg'),
    summary:
      'Preparación física, técnica y táctica del Karate Do, con énfasis en autocontrol, liderazgo y fortalecimiento cardiorrespiratorio.',
    points: [
      'Katas y defensa personal',
      'Historia de las artes marciales',
      'Kotekitae y posiciones',
      'Perseverancia y afrontar la adversidad',
    ],
  },
  {
    id: 'deportiva',
    title: 'Etapa Deportiva',
    image: assetUrl('images/deportiva.jpg'),
    summary:
      'Orientación competitiva con disciplina, respeto y compañerismo: preparación física, técnico-táctica y psicológica para kata y kumite.',
    points: [
      'Objetivos de competencia',
      'Preparación teórico-práctica',
      'Concentración y sentido de distancia',
      'Toma de decisiones en combate',
    ],
  },
] as const

export const schedule = {
  title: 'Horarios',
  intro:
    'Clases de Karate y Kobudo Isshin Akira en dos sedes de Temuco. Consulta también por horarios extra o adaptativos.',
  note: 'Los horarios pueden variar; confirma por WhatsApp o correo antes de tu primera visita.',
  venues: [
    {
      id: 'vanguardia',
      name: 'Vanguardia Center · Local 114',
      badge: 'Sucursal',
      period: 'Lunes a sábado',
      note: 'Horarios provisionales (por confirmar).',
      groups: [
        {
          id: 'vanguardia-lun-mie',
          days: 'Lunes y miércoles',
          slots: [
            { ages: '7 a 12 años', time: '18:00 hrs.' },
            { ages: '13 años o más', time: '17:00 hrs.' },
          ],
        },
        {
          id: 'vanguardia-mar-jue',
          days: 'Martes y jueves',
          slots: [
            { ages: '4 a 6 años', time: '16:00 y 18:00 hrs.' },
            { ages: '7 a 12 años', time: '17:00 hrs.' },
            { ages: '13 años o más', time: '19:00 hrs.' },
            { ages: 'Jóvenes y adultos', time: '20:00 hrs.' },
          ],
        },
        {
          id: 'vanguardia-sabado',
          days: 'Sábado',
          slots: [
            { ages: '4 a 6 años', time: '09:00 y 12:00 hrs.' },
            { ages: '7 a 12 años', time: '11:00 hrs.' },
            { ages: '13 años o más', time: '10:00 hrs.' },
            { ages: 'Jóvenes y adultos', time: '13:15 hrs.' },
          ],
        },
      ],
    },
    {
      id: 'hombu',
      name: 'Honbu Dojo · Portales #603',
      badge: 'Sede principal',
      period: 'Martes, jueves y sábado',
      note: null,
      groups: [
        {
          id: 'hombu-mar-jue',
          days: 'Martes y jueves',
          slots: [
            { ages: 'Clase', time: '19:00 hrs.' },
            { ages: 'Clase', time: '20:00 hrs.' },
          ],
        },
        {
          id: 'hombu-sabado',
          days: 'Sábado',
          slots: [
            { ages: 'Kobudo OIKKA · Abierto a otros estilos', time: '10:30 hrs.' },
            { ages: 'Clase', time: '12:30 hrs.' },
          ],
        },
      ],
    },
  ],
}

export const dojos = [
  {
    id: 'hombu-temuco',
    name: 'Honbu Dojo Temuco',
    badge: 'Sede principal',
    address: 'Diego Portales 603, Temuco',
    phone: '+56 9 6758 8856',
    phoneHref: 'tel:+56967588856',
    email: 'senseialvear@gmail.com',
    emailHref: 'mailto:senseialvear@gmail.com',
    whatsappHref: 'https://api.whatsapp.com/send?phone=56967588846',
  },
  {
    id: 'vanguardia',
    name: 'Dojo Temuco — Vanguardia Center',
    badge: 'Sucursal',
    address: 'Vanguardia Center · Local 114, Temuco',
    phone: '+56 9 5070 7183',
    phoneHref: 'tel:+56950707183',
    email: 'isshinakiratemuco@gmail.com',
    emailHref: 'mailto:isshinakiratemuco@gmail.com',
    whatsappHref: 'https://api.whatsapp.com/send?phone=56967588846',
  },
] as const

/**
 * Noticias de respaldo (estáticas) para entornos sin backend, como GitHub Pages.
 * En local/producción con API, las noticias en vivo del panel las reemplazan.
 * Edita estos textos para lo que quieras mostrar en el sitio estático.
 */
export const fallbackNews: NewsItem[] = [
  {
    id: 'fallback-seminario',
    title: 'Seminario de Kobudo Isshin Ryu',
    body: 'Jornada especial de armas tradicionales de Okinawa con instructores de la familia OIKKA. Consulta fechas y cupos en el Honbu Dojo.',
    imageUrl: null,
    createdAt: '2026-08-20T12:00:00.000Z',
    updatedAt: '2026-08-20T12:00:00.000Z',
    authorEmail: 'sistema',
  },
  {
    id: 'fallback-examen',
    title: 'Examen de grados 2026',
    body: 'Preparación y fechas del próximo examen de cinturones para todas las etapas. Conversa con tu instructor para inscribirte.',
    imageUrl: null,
    createdAt: '2026-08-10T12:00:00.000Z',
    updatedAt: '2026-08-10T12:00:00.000Z',
    authorEmail: 'sistema',
  },
  {
    id: 'fallback-bienvenida',
    title: 'Bienvenida al nuevo sitio',
    body: 'Estamos renovando la presencia digital del Dojo Isshin Akira Temuco. Pronto publicaremos más novedades de entrenamientos, exámenes y actividades.',
    imageUrl: null,
    createdAt: '2026-08-01T12:00:00.000Z',
    updatedAt: '2026-08-01T12:00:00.000Z',
    authorEmail: 'sistema',
  },
]

export const footer = {
  links: [
    {
      label: 'Misión y visión',
      href: '/escuela/mision-y-vision',
    },
    {
      label: 'Equipo',
      href: '/escuela/equipo',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCjZWfkaLP2jMYvHJG_xDDyQ',
    },
  ],
  note: 'Dojo Isshin Akira Temuco — Karate y Kobudo Isshin Ryu OIKKA',
  email: 'senseialvear@gmail.com',
}
