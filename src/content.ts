export const site = {
  name: 'Dojo Isshin Akira Temuco',
  shortName: 'Isshin Akira',
  tagline: 'Karate y Kobudo Isshin Ryu OIKKA para niños, jóvenes y adultos',
  cta: {
    label: 'Agendar mi clase de prueba',
    href: '#contacto',
  },
}

export const navLinks = [
  { label: 'Escuela', href: '#escuela' },
  { label: 'Programas', href: '#programas' },
  { label: 'Dojos', href: '#dojos' },
  { label: 'Contacto', href: '#contacto' },
] as const

export const hero = {
  brand: 'Isshin Akira',
  title: 'Karate y Kobudo Isshin Ryu en Temuco',
  subtitle:
    'Formación profesional para niños, jóvenes y adultos. Escuela de un solo corazón.',
  image: '/images/hero.jpg',
  imageAlt: 'Practicantes de Karate Isshin Ryu en entrenamiento',
}

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
}

export const programsIntro =
  'Nuestro objetivo es entregar una formación adecuada y profesional en las diferentes etapas de desarrollo de cada integrante del Dojo, organizando programas según etapas, niveles y necesidades de cada alumno.'

export const programs = [
  {
    id: 'infantil',
    title: 'Etapa Infantil',
    image: '/images/infantil.jpg',
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
    image: '/images/adolescentes.jpg',
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
    image: '/images/adultos.jpg',
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
    image: '/images/deportiva.jpg',
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

export const dojos = [
  {
    id: 'temuco',
    name: 'Dojo Temuco',
    address: 'Diego Portales 603, Temuco',
    phone: '+56 9 5070 7183',
    phoneHref: 'tel:+56950707183',
    email: 'contacto@isshinryutemuco.cl',
    emailHref: 'mailto:contacto@isshinryutemuco.cl',
    whatsappHref: 'https://api.whatsapp.com/send?phone=56950707183',
  },
  {
    id: 'concepcion',
    name: 'Dojo Concepción',
    address:
      'Edgardo Merino Garrido con Cayuman, Villa Rukacolimapu, San Pedro de La Paz',
    phone: '+56 9 5835 2349',
    phoneHref: 'tel:+56958352349',
    email: 'marisol.belmar.karate@gmail.com',
    emailHref: 'mailto:marisol.belmar.karate@gmail.com',
    whatsappHref: 'https://api.whatsapp.com/send?phone=56958352349',
  },
  {
    id: 'los-angeles',
    name: 'Dojo Los Ángeles',
    address: 'Valdivia 763, Los Ángeles, VIII Región, Chile',
    phone: '+56 9 9246 8396',
    phoneHref: 'tel:+56992468396',
    email: null,
    emailHref: null,
    whatsappHref: 'https://api.whatsapp.com/send?phone=56992468396',
  },
] as const

export const contact = {
  title: 'Agenda tu clase de prueba',
  text: 'Escríbenos por WhatsApp o correo y te contactaremos a la brevedad para coordinar tu primera clase.',
  primaryCta: {
    label: 'WhatsApp Temuco',
    href: 'https://api.whatsapp.com/send?phone=56950707183&text=Hola%2C%20quiero%20agendar%20una%20clase%20de%20prueba',
  },
  email: {
    label: 'contacto@isshinryutemuco.cl',
    href: 'mailto:contacto@isshinryutemuco.cl',
  },
}

export const footer = {
  links: [
    {
      label: 'Sitio actual',
      href: 'https://isshinryutemuco.cl/',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/channel/UCjZWfkaLP2jMYvHJG_xDDyQ',
    },
  ],
  note: 'Dojo Isshin Akira Temuco — Karate y Kobudo Isshin Ryu OIKKA',
}
