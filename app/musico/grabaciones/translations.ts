export type Lang = 'es' | 'en'

export const t = {
  es: {
    badge:          'Músico · Sesiones de Brasses',
    h1:             'Sesiones de brasses para producciones musicales.',
    subtitle:       'Arreglos y grabaciones de sección de vientos para tu producción musical.',
    subtitleAccent: 'Rápido, latino y accesible.',
    ctaHero:        'Hablemos por WhatsApp',

    sectionEscucha: 'Escuchá cómo suena',
    ctaEscucha:     'Quiero esto para mi música',

    sectionDif:  'El diferencial',
    tituloDif:   '¿Qué me hace diferente?',
    diferencial: [
      { n: '01', titulo: 'Velocidad real.', texto: 'En menos de una semana tenés la sección de vientos grabada, editada y lista para integrar a tu producción. Sin esperas eternas. Sin excusas.' },
      { n: '02', titulo: 'Una sección completa, no un solo instrumento.', texto: 'Trabajo junto a un excelente trompetista con quien venimos grabando hace tiempo. El resultado mínimo son 4 voces de brass: 2 trombones y 2 trompetas. Y eso es el punto de partida — en secciones clave del arreglo solemos sumar más voces para darle más cuerpo y carácter al sonido.' },
      { n: '03', titulo: 'Sonido latino de verdad.', texto: 'No es un sample ni un preset. Son instrumentos reales, tocados por músicos que crecieron y viven dentro de la música latinoamericana.' },
      { n: '04', titulo: 'A un costo accesible.', texto: 'Creo que la buena música no debería ser cara. Trabajo con precios que tienen sentido, tanto para proyectos independientes como para producciones más grandes.' },
    ],

    sectionServ:  'Servicios',
    tituloServ:   '¿Qué ofrezco?',
    servicios: [
      { titulo: 'Ejecución sobre tu arreglo',       desc: 'Si ya tenés el arreglo escrito o lo tiene tu productor, me lo pasás y nosotros nos encargamos de la grabación completa.', nota: undefined },
      { titulo: 'Arreglo + grabación',              desc: 'Si necesitás que hagamos el arreglo desde cero, lo componemos nosotros y el trabajo se entrega con la partitura finalizada lista para que la uses como quieras.', nota: 'Este servicio tiene un costo adicional al de la grabación.' },
      { titulo: 'Producción completa de vientos',   desc: 'Si tenés varios temas, trabajar el material completo tiene un valor considerablemente menor al precio por track individual. Escribime y lo conversamos.', nota: undefined },
    ],

    sectionProc:  'El proceso',
    tituloProc:   'Cómo trabajamos juntos',
    pasos: [
      { n: '01', titulo: 'Me contactás',           texto: 'Por WhatsApp o Instagram. Me contás de qué se trata tu proyecto: el estilo, la cantidad de temas, si ya tenés arreglos o necesitás que los hagamos nosotros.' },
      { n: '02', titulo: 'Te mando una propuesta', texto: 'En base a lo que necesitás, te armo una propuesta clara con tiempos y condiciones.' },
      { n: '03', titulo: 'Manos a la obra',        texto: 'Componemos o ejecutamos los arreglos, grabamos todas las voces, editamos todo.' },
      { n: '04', titulo: 'Pre-escucha y devolución', texto: 'Antes de cerrar el trabajo te envío un MP3 con una premezcla para que escuches cómo va quedando todo. Si algo no te convence, hay lugar para una devolución y ajustamos.' },
      { n: '05', titulo: 'Entrega final',          texto: 'Una vez que todo está aprobado y la transferencia confirmada, recibís todos los archivos multipista en formato .WAV de alta calidad — todas las voces de los brasses ya editadas, limpias y listas para incluir en tu proyecto sin ningún trabajo extra.' },
    ],
    ctaProc: 'Quiero sumarle vientos a mi música',

    sectionFinal: '¿Empezamos?',
    tituloFinal:  '¿Tenés un proyecto en mente?',
    textoFinal:   'No importa si es una canción suelta o un disco completo. Escribime y en menos de 24 horas te respondo con todo lo que necesitás saber.',
    ctaFinal:     'Escribime por WhatsApp',
  },

  en: {
    badge:          'Musician · Brass Sessions',
    h1:             'Brass sessions for music productions.',
    subtitle:       'Horn section arrangements and recordings for your musical production.',
    subtitleAccent: 'Fast, latin and affordable.',
    ctaHero:        "Let's talk on WhatsApp",

    sectionEscucha: 'Listen to how it sounds',
    ctaEscucha:     'I want this for my music',

    sectionDif:  'What makes me different',
    tituloDif:   'What makes me different?',
    diferencial: [
      { n: '01', titulo: 'Real speed.',                             texto: "In less than a week you get four horn voices recorded, edited and ready to drop into your mix. No long waits. No excuses." },
      { n: '02', titulo: 'A complete section, not just one instrument.', texto: "I work alongside an excellent trumpet player. The minimum result is 4 brass voices: 2 trombones and 2 trumpets — and that's just the starting point. We often add more voices in key sections to give more body and character." },
      { n: '03', titulo: 'Authentic latin sound.',                  texto: "This isn't a sample or a preset. These are real instruments, played by musicians who grew up inside Latin American music." },
      { n: '04', titulo: 'Affordable rates.',                       texto: "I believe great music shouldn't be expensive. I work with prices that make sense, whether you're an independent artist or a larger production." },
    ],

    sectionServ:  'Services',
    tituloServ:   'What do I offer?',
    servicios: [
      { titulo: 'Recording on your arrangement',         desc: "If you already have the arrangement written — or your producer does — just send it over and we'll handle the full recording.", nota: undefined },
      { titulo: 'Arrangement + recording',               desc: "If you need us to write the arrangement from scratch, we compose it and deliver it with the finalized score, ready for you to use however you like.", nota: 'This service has an additional cost on top of the recording fee.' },
      { titulo: 'Full horn production for an album',     desc: "If you have multiple tracks, working on the full project is priced considerably lower than individual track rates. Get in touch and let's talk.", nota: undefined },
    ],

    sectionProc:  'The process',
    tituloProc:   'How we work together',
    pasos: [
      { n: '01', titulo: 'You reach out',          texto: 'Via WhatsApp or Instagram. Tell me about your project: the style, the number of tracks, whether you already have arrangements or need us to write them.' },
      { n: '02', titulo: 'I send you a proposal',  texto: 'Based on what you need, I put together a clear proposal with timeline and terms.' },
      { n: '03', titulo: 'We get to work',         texto: 'We compose or perform the arrangements, record all the voices, and edit everything.' },
      { n: '04', titulo: 'Preview and feedback',   texto: "Before closing the project, I'll send you an MP3 premix so you can hear how everything is coming together. If something doesn't feel right, one revision is included." },
      { n: '05', titulo: 'Final delivery',         texto: 'Once everything is approved and payment confirmed, you receive all multitrack .WAV files — all brass voices edited, clean and ready to drop into your project with zero extra work.' },
    ],
    ctaProc: "Let's add horns to your music",

    sectionFinal: "Let's go",
    tituloFinal:  'Do you have a project in mind?',
    textoFinal:   "Doesn't matter if it's a single track or a full album. Reach out and I'll get back to you within 24 hours with everything you need to know.",
    ctaFinal:     'Write me on WhatsApp',
  },
} satisfies Record<Lang, Record<string, unknown>>
