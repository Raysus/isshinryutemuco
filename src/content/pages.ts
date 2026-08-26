import { assetUrl } from '../lib/paths'

export type Person = {
  name: string
  role: string
  focus?: string
  bio?: string
  grade?: string
  photo?: string
}

export type InfoBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'subsections'; items: { title: string; text?: string }[] }
  | { type: 'people'; items: Person[] }

export type InfoPageContent = {
  path: string
  title: string
  eyebrow: string
  lead?: string
  blocks: InfoBlock[]
}

export const infoPages: InfoPageContent[] = [
  {
    path: '/escuela/mision-y-vision',
    title: 'Misión, visión e identidad',
    eyebrow: 'Nuestra escuela',
    lead:
      'Isshin Akira es el Honbu Dojo de Temuco: un espacio para crecer con Isshin Ryu, con mente clara y un solo corazón.',
    blocks: [
      {
        type: 'subsections',
        items: [
          {
            title: 'Misión',
            text: 'Enseñar Okinawa Isshin Ryu Karate y Kobudo con formación integral: técnica seria, valores y respeto por cada alumno. Queremos que niños, jóvenes y adultos fortalezcan cuerpo, carácter y comunidad en el dojo.',
          },
          {
            title: 'Visión',
            text: 'Ser el referente de Isshin Ryu en la Araucanía: un dojo confiable, abierto a la familia y conectado a OIKKA, donde cada persona disfrute el camino y mejore su calidad de vida.',
          },
          {
            title: 'Identidad del dojo',
            text: 'Isshin Akira significa “hombre de mente clara de un solo corazón”. Entrenamos con claridad, humildad y constancia. El keiko diario une técnica de Okinawa, camaradería y responsabilidad social.',
          },
        ],
      },
      {
        type: 'paragraph',
        text: 'El Dojo Isshin Akira inicia su formación el 22 de octubre de 2003 y se inscribe el 6 de noviembre del mismo año en Chiledeportes (Ley N° 19.712), registro N° 900399-1.',
      },
    ],
  },
  {
    path: '/escuela/historia-y-biografias',
    title: 'Historia y biografías',
    eyebrow: 'Nuestra escuela',
    lead:
      'Índice de orígenes y figuras del linaje Isshin Ryu. Las subsecciones detalladas se irán publicando aquí.',
    blocks: [
      {
        type: 'subsections',
        items: [
          { title: 'Orígenes del karate' },
          { title: 'Orígenes del Kobudo' },
          { title: 'Orígenes del Isshin Ryu' },
          { title: 'Chotoku Kyan' },
          { title: 'Chojun Miyagi' },
          { title: 'Choki Motobu' },
          { title: 'Shinken Taira' },
          { title: 'Tatsuo Shimabuku' },
          { title: 'Angi Uezu' },
          { title: 'Christopher Chase' },
          { title: 'Carlos Alvear Torres' },
          { title: 'Alexis Alvear Constanzo' },
          { title: 'Cristian Jarpa Bucher' },
          { title: 'Mario Rodríguez De Pablo' },
          { title: 'Beltrán Vargas Pedreros' },
        ],
      },
    ],
  },
  {
    path: '/escuela/equipo',
    title: 'Equipo',
    eyebrow: 'Nuestra escuela',
    lead: 'Instructores del Dojo Isshin Akira Temuco.',
    blocks: [
      {
        type: 'people',
        items: [
          {
            name: 'Carlos Alvear Torres',
            role: 'Sensei · Kyoshi — Dojo Isshin Akira',
            grade: '7º Dan',
            focus: 'Dirección técnica y formación integral',
            bio: 'Dirige el Honbu Dojo Isshin Akira en Temuco. Lidera la enseñanza de Karate y Kobudo Isshin Ryu con el sello OIKKA, acompañando a niños, jóvenes y adultos en el camino del dojo.',
            photo: assetUrl('images/equipo/carlos-alvear.png'),
          },
          {
            name: 'Alexis Alvear Constanzo',
            role: 'Sensei — Dojo Isshin Akira',
            grade: '4º Dan',
            focus: 'Enseñanza diaria y acompañamiento',
            bio: 'Sensei Alexis Alvear Constanzo colabora en la enseñanza y el día a día del Dojo Isshin Akira, acompañando la formación de la familia del dojo con constancia y cercanía.',
            photo: assetUrl('images/equipo/alexis-alvear.png'),
          },
          {
            name: 'Beltias Vargas',
            role: 'Senpai — Dojo Isshin Akira',
            grade: '2º Dan',
            focus: 'Apoyo en la enseñanza y formación del dojo',
            bio: 'Senpai del Dojo Isshin Akira, acompaña el entrenamiento de Karate y Kobudo Isshin Ryu y apoya la formación de los alumnos con dedicación y respeto.',
          },
        ],
      },
    ],
  },
  {
    path: '/programas/infantil',
    title: 'Etapa Infantil',
    eyebrow: 'Programa de entrenamiento',
    lead: 'Ambiente lúdico, valores y primeros pasos en Karate Do Isshin Ryu.',
    blocks: [
      {
        type: 'list',
        items: [
          'Estimulación psicomotriz (ambiente lúdico).',
          'Crear hábitos de conducta y valores (disciplina, respeto).',
          'Adquirir capacidades físicas generales y específicas acorde a la edad y género.',
          'Iniciar el aprendizaje de los elementos básicos del Karate Do Isshin Ryu.',
          'Desarrollo teórico mediante conversaciones, charlas, debates y análisis de video adecuados a su edad.',
          'Aplicar correctamente las reglas de cortesía en el dojo.',
          'Conocer las generalidades de la historia del Karate Do Isshin Ryu.',
          'Uso apropiado de la respiración.',
        ],
      },
    ],
  },
  {
    path: '/programas/adolescentes',
    title: 'Etapa Adolescentes',
    eyebrow: 'Programa de entrenamiento',
    lead: 'Valores, estabilidad y desarrollo técnico en la adolescencia.',
    blocks: [
      {
        type: 'list',
        items: [
          'Fomentar valores como personalidad, tesón, perseverancia y amor por lo que hacen.',
          'Crear principios de educación integral.',
          'Estabilidad psicológica en los entrenamientos, fortaleciendo su entorno.',
          'Desarrollar y mejorar cualidades físicas generales y específicas.',
          'Hábitos y habilidades en ejercicios formales.',
          'Nociones de las limitaciones y posibilidades del cuerpo (sistemas osteoartromuscular, energético, respiratorio, etc.).',
          'Hábitos en técnicas básicas, kihon, katas, bunkai, defensa personal y kumite.',
        ],
      },
    ],
  },
  {
    path: '/programas/adultos',
    title: 'Etapa Adultos',
    eyebrow: 'Programa de entrenamiento',
    lead: 'Preparación física, técnica, táctica y psicológica del Karate Do.',
    blocks: [
      {
        type: 'list',
        items: [
          'Desarrollar y mejorar la preparación física general y específica.',
          'Continuar los elementos básicos del Karate Do.',
          'Preparación técnico-táctica y teórica.',
          'Nociones de limitaciones y posibilidades del cuerpo y sus sistemas.',
          'Sistema de entrenamiento de katas y defensa personal.',
          'Manejo del liderazgo.',
          'Historia y desarrollo de las artes marciales.',
          'Fortalecimiento de brazos, piernas, posiciones, kotekitae y cardiorrespiratorio.',
          'Preparación psicológica: perseverancia y autocontrol.',
          'Capacidades para enfrentar la adversidad.',
          'Reglas de cortesía en el dojo y uso apropiado de la respiración.',
        ],
      },
    ],
  },
  {
    path: '/programas/deportiva',
    title: 'Etapa Deportiva',
    eyebrow: 'Programa de entrenamiento',
    lead: 'Orientación competitiva con disciplina, respeto y compañerismo.',
    blocks: [
      {
        type: 'list',
        items: [
          'Fomentar disciplina, respeto, honestidad y compañerismo.',
          'Orientación metodológica para mejorar los recursos de cada persona.',
          'Objetivos específicos de la competencia dentro del Karate Do.',
          'Preparación física general y específica.',
          'Preparación técnico-táctica y teórica.',
          'Preparación psicológica en katas y kumite: concentración, distancia, tiempo de combate y toma de decisiones.',
        ],
      },
    ],
  },
]

export function getInfoPage(path: string) {
  return infoPages.find((page) => page.path === path)
}
