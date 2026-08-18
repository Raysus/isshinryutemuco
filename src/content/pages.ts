export type InfoBlock =
  | { type: 'paragraph'; text: string }
  | { type: 'list'; items: string[] }
  | { type: 'subsections'; items: { title: string; text?: string }[] }
  | { type: 'people'; items: { name: string; role: string }[] }

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
    title: 'Misión y visión',
    eyebrow: 'Nuestra escuela',
    lead:
      'Formación integral en Okinawa Isshin Ryu para niños, adolescentes y adultos, con foco en valores, cuerpo, mente y espíritu.',
    blocks: [
      {
        type: 'paragraph',
        text: 'Nuestra misión es difundir Okinawa Isshin Ryu Karate Kobudo Asociación a través de una formación integral, respetando la individualidad de cada alumno y guiándolo en la adquisición de valores para fortalecer su personalidad y enfrentar mejor las necesidades actuales.',
      },
      {
        type: 'paragraph',
        text: 'Las herramientas del Dojo Isshin Akira buscan mejorar la calidad de vida en lo emocional, mental, físico y deportivo: una experiencia de práctica física para conservar el cuerpo, buscar el ser interior y cultivar buenas conductas.',
      },
      {
        type: 'paragraph',
        text: 'El dojo está pensado como un lugar para crecer y formarnos, desarrollar cuerpo, mente y espíritu mediante entrenamiento, camaradería y experiencias compartidas, fomentando el ámbito social y valórico de la familia Isshin Ryu.',
      },
      {
        type: 'paragraph',
        text: 'Nuestra visión es ser un dojo que fomente creatividad, proactividad, innovación y confianza; comprometido con que cada integrante se forme en lo personal, social y espiritual, disfrute lo que hace y mejore su calidad de vida.',
      },
      {
        type: 'paragraph',
        text: 'También aspiramos a ser reconocidos como entidad formativa y deportiva por la familia y la sociedad, abriendo actividades y programas a la comunidad con responsabilidad social.',
      },
      {
        type: 'paragraph',
        text: 'El Dojo Isshin Akira inicia su formación el 22 de octubre de 2003 y se inscribe el 6 de noviembre del mismo año en Chiledeportes, bajo la Ley N° 19.712 “Ley del Deporte”, registro N° 900399-1.',
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
    lead: 'Instructores y colaboradores del Dojo Isshin Akira.',
    blocks: [
      {
        type: 'people',
        items: [
          { name: 'Carlos Alvear Torres', role: 'Sensei — Dojo Isshin Akira' },
          { name: 'Alexis Alvear Constanzo', role: 'Sempai — Dojo Isshin Akira' },
          { name: 'Sonny Oshiro', role: 'Representante cultural — Okinawa, Japón' },
          { name: 'Cristian Jarpa Bucher', role: 'Sempai — Dojo Buchinkan' },
          { name: 'Mario Rodríguez De Pablo', role: 'Terapeuta ocupacional' },
          { name: 'Sigrid Alvear Constanzo', role: 'Kinesiología' },
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
