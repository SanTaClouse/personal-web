# BRIEF — SantiagoSamuel.com.ar
> Documento de referencia completo para el desarrollo de la web personal de Santiago Samuel.
> Usar este archivo como contexto inicial en cada sesión de desarrollo.

---

## DATOS GENERALES

- **Nombre:** Santiago Samuel (apellido real: Rivero — usar "Santiago Samuel" como nombre artístico/profesional)
- **Ubicación:** Santa Fe, Argentina
- **Dominio objetivo:** SantiagoSamuel.com.ar
- **Instagram:** [@santi.rivero06](https://www.instagram.com/santi.rivero06/)
- **WhatsApp:** *(agregar link directo wa.me/549XXXXXXXXXX)*
- **Stack recomendado:** Next.js · Tailwind CSS · TypeScript

---

## OBJETIVO DE LA WEB

Página web personal que cumple dos funciones simultáneas:

1. **Presentar** a Santiago como artista, músico y desarrollador web
2. **Vender** servicios de grabaciones de vientos, arreglos, transcripciones y desarrollo web

La sección de grabaciones es la prioritaria en términos de conversión y SEO.

---

## TONO Y VOZ

- Cercana y personal, como habla Santiago
- Sin exceso de formalidad
- Con personalidad: expresiva, ingeniosa, con humor natural
- Nunca corporativa ni fría

---

## ARQUITECTURA DE URLs

```
SantiagoSamuel.com.ar/               → Home (landing personal)
SantiagoSamuel.com.ar/musico         → Hub musical
SantiagoSamuel.com.ar/musico/grabaciones      → ⭐ Página de ventas principal
SantiagoSamuel.com.ar/musico/transcripciones  → Servicio de transcripciones
SantiagoSamuel.com.ar/musico/sergiotorres     → Sección especial Sergio Torres
SantiagoSamuel.com.ar/musico/clases           → Clases de piano
SantiagoSamuel.com.ar/desarrollador           → Hub tech
SantiagoSamuel.com.ar/desarrollador/laluna    → Case study La Luna
SantiagoSamuel.com.ar/desarrollador/eleven    → Case study Eleven Ascensores
```

---

## NAVEGACIÓN / HEADER

- Logo o nombre "Santiago Samuel"
- Link visible a Instagram **@santi.rivero06** en el header (antes de cualquier sección)
- Links de navegación: Músico · Desarrollador · Contacto
- El header debe aparecer en todas las páginas

---

---

# PÁGINA: HOME — `/`

## Hero Section
*(Foto con trombón de fondo, texto encima)*

**H1:**
```
Santiago Samuel
```

**Tagline (H2):**
```
Músico. Arreglador. Trombonista. Y sí, también desarrollo páginas web.
```

**Subtítulo:**
```
Doce años haciendo música en serio. Curioso de todo desde siempre.
```

**CTA:**
```
→ Conocé mi trabajo
```

---

## Sección Cards — Las dos ramas
*(Dos cards grandes, lado a lado, cada una con foto de Santiago)*

**Card 1:**
- Icono: 🎺
- Título: `Músico & Arreglador`
- Descripción: `Grabaciones de vientos, arreglos, transcripciones y clases.`
- CTA: `Explorar →`
- Link: `/musico`

**Card 2:**
- Icono: 💻
- Título: `Desarrollador Web`
- Descripción: `Páginas y sistemas de gestión para negocios reales.`
- CTA: `Explorar →`
- Link: `/desarrollador`

---

## Sección: Sobre mí

```
Todo empezó con un piano y un montón de amigos del colegio.

Hace doce años agarré el piano por primera vez, sin saber muy bien para dónde iba eso.
Rápidamente me empezaron a llamar para tocar cumbia santafesina — la música que se vive y
se respira en Santa Fe — y desde ese momento no paré más. Tuve el placer de compartir
escenario con bandas y artistas que marcaron la región: Grupo Cali, Nico Mattioli y
Juanjo Piedrabuena, entre otros.

En paralelo, estudié piano en el Liceo Municipal, después entré al Instituto Superior de
Música, y finalmente me recibí como Licenciado en Sonorización y Grabación en la
Universidad Nacional del Litoral. Mientras tanto, daba clases de piano. La música era
lo único que sabía hacer, y lo hacía bien.

Y entonces apareció el trombón.

No sé cómo explicarlo mejor que esto: me enamoré del instrumento antes de tenerlo.
En 2018 me anoté en la carrera de Trombón del Liceo Municipal antes de haberlo tocado
siquiera una vez. Los primeros seis meses practiqué solo con la boquilla. Después decidí
complementar esa formación estudiando por mi cuenta, aprovechando todo lo que el internet
tiene para ofrecer, y me convertí en un autodidacta convencido de que cuando algo te
apasiona de verdad, encontrás la manera.

Hoy vivo de la música. Formo parte de la banda de Sergio Torres, uno de los artistas más
importantes de la cumbia del Litoral, con quien vengo girando por todo el país desde agosto
de 2023. Empecé tocando el piano y hoy soy el trombonista de la banda. Grabaciones, shows
en vivo, kilómetros compartidos — fue y sigue siendo una experiencia enorme.

Además de la música, en 2025 hice algo que no me esperaba: un curso de desarrollo web que
me abrió un mundo nuevo. Esa misma curiosidad que me metió en el trombón me llevó a crear
páginas y sistemas reales para negocios reales. ¿Querés ver lo que hice? Esta página la
hice yo mismo.

Siempre fui muy de querer entender cómo funciona todo. Por qué pasa lo que pasa. Eso me
llevó a proponer cosas que al principio parecían grandes y después resultaron posibles.
La música me enseñó que la disciplina y el oído fino no son solo para la música.
```

**Links al pie de Sobre mí:**
- `→ WhatsApp` *(link directo)*
- `→ Instagram @santi.rivero06`

---

---

# PÁGINA: GRABACIONES — `/musico/grabaciones`
*(Página de ventas principal. Prioridad máxima en SEO y conversión)*

## SEO Keywords a incluir en texto visible y metadata:
`grabación de vientos` · `arreglos de vientos` · `sección de vientos estudio` ·
`trombón para grabación` · `grabación de brass` · `arreglos cumbia` ·
`grabación de vientos Argentina` · `horn section recording`

---

## Hero
*(Foto en estudio o con trombón. Fondo oscuro, texto encima)*

**H1:**
```
Tu música necesita vientos.
```

**Subtítulo:**
```
Arreglos y grabaciones de sección de vientos para tu producción musical.
Rápido, latino y accesible.
```

**CTA principal:**
```
→ Hablemos por WhatsApp
```

---

## Sección: Ejemplo destacado
*(Va ANTES del diferencial — mostrar el mejor trabajo primero)*

**Título:**
```
Escuchá cómo suena
```

*(Embed YouTube o SoundCloud — PENDIENTE: agregar link del trabajo más representativo)*

**CTA:**
```
→ Quiero esto para mi música
```
*(botón WhatsApp)*

---

## Sección: El diferencial

**Título:**
```
¿Qué me hace diferente?
```

**Bloque 1 — Velocidad:**
```
Velocidad real.
En menos de una semana tenés la sección de vientos grabada, editada y lista para
integrar a tu producción. Sin esperas eternas. Sin excusas.
```

**Bloque 2 — Sección completa:**
```
Una sección completa, no un solo instrumento.
Trabajo junto a un excelente trompetista con quien venimos grabando hace tiempo.
El resultado mínimo son 4 voces de brass: 2 trombones y 2 trompetas. Y eso es el
punto de partida — en secciones clave del arreglo solemos sumar más voces para
darle más cuerpo y carácter al sonido.
```

**Bloque 3 — Sonido latino:**
```
Sonido latino de verdad.
No es un sample ni un preset. Son instrumentos reales, tocados por músicos que
crecieron y viven dentro de la música latinoamericana.
```

**Bloque 4 — Precio:**
```
A un costo accesible.
Creo que la buena música no debería ser cara. Trabajo con precios que tienen
sentido, tanto para proyectos independientes como para producciones más grandes.
```

---

## Sección: Qué ofrezco

**Servicio 1:**
```
Ejecución sobre tu arreglo
Si ya tenés el arreglo escrito o lo tiene tu productor, me lo pasás y nosotros
nos encargamos de la grabación completa.
```

**Servicio 2:**
```
Arreglo + grabación
Si necesitás que hagamos el arreglo desde cero, lo componemos nosotros y el
trabajo se entrega con la partitura finalizada lista para que la uses como
quieras. (Este servicio tiene un costo adicional al de la grabación.)
```

**Servicio 3:**
```
Producción completa de vientos para un disco
Si tenés varios temas, trabajar el material completo tiene un valor
considerablemente menor al precio por track individual. Escribime y lo conversamos.
```

---

## Sección: Cómo trabajamos juntos
*(5 pasos)*

```
01 — Me contactás
Por WhatsApp o Instagram. Me contás de qué se trata tu proyecto: el estilo,
la cantidad de temas, si ya tenés arreglos o necesitás que los hagamos nosotros.

02 — Te mando una propuesta
En base a lo que necesitás, te armo una propuesta clara con tiempos y condiciones.

03 — Manos a la obra
Componemos o ejecutamos los arreglos, grabamos todas las voces, editamos todo.

04 — Pre-escucha y devolución
Antes de cerrar el trabajo te envío un MP3 con una premezcla para que escuches
cómo va quedando todo. Si algo no te convence, hay lugar para una devolución
y ajustamos.

05 — Entrega final
Una vez que todo está aprobado y la transferencia confirmada, recibís todos los
archivos multipista en formato .WAV de alta calidad — todas las voces de los
brasses ya editadas, limpias y listas para incluir en tu proyecto sin ningún
trabajo extra.
```

**CTA:**
```
→ Quiero sumarle vientos a mi música
```
*(botón WhatsApp)*

---

## Sección: Más ejemplos
*(PENDIENTE: agregar embeds de YouTube/SoundCloud con trabajos reales)*

---

## Video Reel
*(PENDIENTE: cuando esté listo, embed de YouTube acá)*
*(Por ahora: foto de estudio con texto "Próximamente: video con trabajos recientes.")*

---

## Cierre / CTA final

```
¿Tenés un proyecto en mente?

No importa si es una canción suelta o un disco completo. Escribime y en menos
de 24 horas te respondo con todo lo que necesitás saber.
```

**CTA:**
```
→ Escribime por WhatsApp
```

**Instagram:**
```
También podés seguirme en Instagram para escuchar trabajo reciente.
@santi.rivero06
```

---

## VERSIÓN EN INGLÉS — misma página, misma estructura

**H1:**
```
Your music needs horns.
```

**Subtítulo:**
```
Horn section arrangements and recordings for your production.
Fast, latin and affordable.
```

**El diferencial (en inglés):**

```
Real speed.
In less than a week you get four horn voices recorded, edited and ready to drop
into your mix. No long waits. No excuses.

A complete section, not just one instrument.
I work alongside an excellent trumpet player. The minimum result is 4 brass
voices: 2 trombones and 2 trumpets — and that's just the starting point.
We often add more voices in key sections to give more body and character.

Authentic latin sound.
This isn't a sample or a preset. These are real instruments, played by musicians
who grew up inside Latin American music.

Affordable rates.
I believe great music shouldn't be expensive. I work with prices that make sense,
whether you're an independent artist or a larger production.
```

**Proceso (en inglés):**
```
01 — You reach out via WhatsApp or Instagram and tell me about your project.
02 — I send you a clear proposal with timeline and terms.
03 — We write the arrangements, record the voices, edit everything.
04 — I send you an MP3 premix so you can check everything sounds right.
     One revision included.
05 — Once approved and payment confirmed, you receive all multitrack .WAV files —
     all brass voices edited, clean and ready for your mix.

Full album productions are priced considerably lower than individual track rates.
Get in touch and let's talk.
```

**CTA:**
```
→ Let's add horns to your music
```

---

---

# PÁGINA: SERGIO TORRES — `/musico/sergiotorres`

## Título
```
Sergio Torres & Los Dueños del Swing
```

## Texto principal
```
Hay artistas que definen el sonido de una ciudad. Sergio Torres es uno de ellos.

Nacido en Santa Fe, Argentina, Sergio lleva más de cuatro décadas construyendo
una carrera que lo convirtió en uno de los máximos referentes de la cumbia
santafesina y la música tropical del país. Temas como Tatuaje, Llorarás,
Laura no está, Adicto a tu piel y Piropo son parte del cancionero popular de
toda una región. Fue el primer artista santafesino en presentarse en el Luna
Park de Buenos Aires, y su música llegó a sonar en Panamá, Colombia y más
allá de las fronteras argentinas.

Una carrera con más de 35 años de historia, construida show a show, disco a
disco, ciudad por ciudad.
```

## Mi lugar en la banda
```
Desde agosto de 2023 tengo el honor de formar parte de esta banda.

Entré tocando el piano. Con el tiempo fui sumando el trombón, y hoy es mi rol
principal dentro de la formación. En estos más de dos años hemos recorrido
escenarios a lo largo y ancho de todo el país, compartido grabaciones y
construido algo que va mucho más allá de un trabajo: es una escuela en vivo,
noche tras noche.

Ser parte de la banda de Sergio Torres es uno de los capítulos que más me
enorgullece en mi historia como músico.
```

## Links
- Instagram: [@sergiotorresof](https://www.instagram.com/sergiotorresof/)
- YouTube: [Canal oficial](https://www.youtube.com/channel/UC_HcKuICZJB10Dh64wfetmw)

---

---

# PÁGINA: TRANSCRIPCIONES — `/musico/transcripciones`

## SEO Keywords:
`transcripción para SADAIC` · `registro de obra SADAIC` · `transcripción melodía y armonía` ·
`partitura para SADAIC Santa Fe` · `cómo registrar una canción en SADAIC` ·
`transcripción musical Argentina`

## Hero

**H1:**
```
Tu canción merece quedar registrada.
```

**Subtítulo:**
```
Servicio de transcripción musical para registro en SADAIC y otros organismos
internacionales de derechos de autor.
```

**CTA:**
```
→ Consultá por WhatsApp
```

## Introducción
```
Si componés música, tenés derecho a protegerla. Y para registrar una obra en
SADAIC — el organismo que protege los derechos de los autores y compositores
en Argentina — necesitás la transcripción escrita de la melodía y la armonía
de tu canción.

Ese papel es el que demuestra que la obra es tuya.

El problema es que no todos los músicos leen o escriben partituras.
Para eso estoy yo.
```

## Servicios

```
Transcripción para registro en SADAIC
El servicio más solicitado. Escucho tu canción y transcribo la melodía principal
y la armonía (cifrado de acordes) en el formato correcto para presentar ante
SADAIC. Rápido, prolijo y listo para usar.

Transcripción melódica
Solo la línea melódica de una canción, instrumento o voz. Útil para arreglos,
covers, estudios y más.

Transcripción armónica
El cifrado completo de acordes de una canción. Ideal para músicos que necesitan
aprender o enseñar un tema.

Transcripción completa
Partitura completa con todas las voces e instrumentos. Para proyectos que
requieren mayor detalle.
```

## ¿Estás fuera de Argentina?
```
El proceso es el mismo. Cada país tiene su propio organismo de gestión de
derechos de autor — en España es la SGAE, en Estados Unidos BMI o ASCAP,
en México SACM, en Uruguay AGADU. Si necesitás una transcripción para
registrar tu obra en cualquiera de esos organismos, el formato puede variar
pero el trabajo es el mismo. Escribime y lo resolvemos.
```

## Cómo funciona
```
01 — Me mandás el audio
Puede ser un demo, una grabación de teléfono, un archivo de estudio. Lo que tengas.

02 — Transcribo la obra
Melodía, armonía, o ambas — según lo que necesites.

03 — Recibís la partitura
Archivo en PDF listo para presentar, más el archivo editable si lo necesitás.
```

**CTA:**
```
→ Quiero transcribir mi canción
```

## Cierre
```
¿Querés registrar tu obra?

Escribime con el audio de tu canción y te cuento todo lo que necesitás saber.
El proceso es más simple de lo que parece.
```

---

---

# PÁGINA: CLASES DE PIANO — `/musico/clases`

## Título
```
Clases de piano particulares — Presencial y Virtual
```

## Texto
```
Doy clases de piano con más de cinco años de experiencia enseñando a alumnos
de distintas edades y niveles.

Las clases pueden ser presenciales en mi domicilio en Santa Fe capital, o
virtuales para quienes estén en cualquier otra ciudad o país.

Si estás empezando desde cero, si querés retomar algo que dejaste, o si ya
tocás y querés mejorar técnica, lectura o repertorio — puedo ayudarte.

Las clases son personalizadas: el ritmo y el contenido se adaptan a lo que vos
necesitás y a lo que te gusta escuchar.
```

**CTA:**
```
→ Consultá disponibilidad por WhatsApp
```

---

---

# PÁGINA: DESARROLLADOR — `/desarrollador`

## Hero

**H1:**
```
También desarrollo páginas web. Y no, no es casualidad.
```

**Subtítulo:**
```
Sistemas de gestión, páginas institucionales y portfolios para negocios reales.
```

## Historia
```
Siempre me fascinó crear cosas. No solo imaginarlas — plasmarlas. Ver algo que
no existía y hacerlo existir.

Eso me llevó a la música. Y también, en paralelo, a la programación.

En la facultad aprendí Python en Informática y algo hizo click. Me gustó tanto
que cuando llegó el momento de hacer mi tesis de Licenciatura en Sonorización y
Grabación — sobre Dolby Atmos — decidí construir algo desde cero: HRTF Studio,
una aplicación que convierte audio mono en audio 3D espacializado, simulando
cómo el oído humano percibe el sonido desde distintas direcciones en el espacio.

La app procesa señales de audio usando filtros HRTF de la base de datos KEMAR,
aplica convolución matemática para generar la experiencia binaural, y tiene una
interfaz gráfica completa para elegir ángulos, planos y dirección del sonido.
La construí en Python con procesamiento de señales real.

El resultado fue tan completo que mi tutor me dijo que no la incluyera en la
tesis. Que daba para una tesis aparte.

Me recibí. Y esas ganas no se fueron a ningún lado.

En 2025 decidí aprovechar ese impulso y especializarme en desarrollo web. Hice
un curso intensivo, aprendí las herramientas del ecosistema moderno, y en lugar
de quedarme practicando con proyectos de mentira, salí a resolver problemas
reales para negocios reales.

Lo que más me motiva es construir sistemas administrativos a medida para empresas
— ese punto donde la tecnología se cruza con un modelo de negocio concreto y le
cambia el día a día a alguien real. Ahorro de tiempo, menos errores, más control.
Eso es lo que me mueve.

Y sí — esta página la hice yo mismo.
```

## Proyectos
*(Carrusel de cards. Cada card linkea a su página interna.)*

**Proyectos disponibles:**
- La Luna → `/desarrollador/laluna`
- Eleven Ascensores → `/desarrollador/eleven`
- HRTF Studio → GitHub externo

---

## Cierre
```
¿Tenés un negocio que necesita presencia online o un sistema a medida?

Hablemos. Entiendo tanto de tecnología como de los problemas reales que tiene
un negocio porque vengo de afuera del mundo tech — y eso hace la diferencia.
```

**CTA:**
```
→ Escribime por WhatsApp
```

---

---

# PÁGINA: LA LUNA — `/desarrollador/laluna`

## Título
```
La Luna — Mayorista de frutas y verduras
```

## Subtítulo
```
Página web institucional para el principal mayorista de frutas y verduras
de Maciel, Santa Fe.
```

## Texto
```
La Luna es el mayorista de frutas y verduras más importante de Maciel, Santa Fe.
Necesitaban presencia online: una página que los representara, les diera
visibilidad en la zona y les permitiera mostrar su negocio de manera profesional.

Desarrollé una página web institucional completa, con diseño adaptado a su
identidad, optimizada para dispositivos móviles y con foco en posicionamiento
SEO local para que los clientes de la región los encuentren fácilmente.
```

## Stack
*(COMPLETAR: Next.js · Tailwind CSS · ...)*

## Links
- `→ Ver sitio` *(PENDIENTE: agregar link al deploy)*
- `→ Ver código` *(PENDIENTE: agregar link a GitHub si aplica)*

---

---

# PÁGINA: ELEVEN ASCENSORES — `/desarrollador/eleven`

## Título
```
Eleven Ascensores — Sistema de gestión + web institucional
```

## Subtítulo
```
Página web y SaaS administrativo para una empresa de mantenimiento de
ascensores de Santa Fe capital.
```

## Texto
```
Eleven Ascensores se dedica al mantenimiento, instalación y modernización de
ascensores en Santa Fe capital. Llegaron con dos necesidades distintas y las
resolvimos juntos.

Por un lado, desarrollé su página web institucional orientada a SEO local,
para que aparezcan cuando alguien en Santa Fe busca servicios de ascensores.

Por otro, construí un sistema de gestión administrativo a medida — un SaaS
completo donde pueden llevar el control de clientes, pedidos y órdenes de
trabajo desde cualquier dispositivo. Sin planillas, sin papeles, sin
información perdida.

Este tipo de proyectos es el que más me apasiona: una solución que cambia
la manera en que una empresa opera todos los días.
```

## Stack
NestJS · Next.js · PostgreSQL · TypeScript *(COMPLETAR lo que falta)*

## Links
- `→ Ver sitio web` *(PENDIENTE: agregar link al deploy web)*
- `→ Ver sistema` *(PENDIENTE: agregar link al deploy del SaaS)*

---

---

# PROYECTO ESPECIAL: HRTF STUDIO

## Título
```
HRTF Studio — Aplicación de audio espacial 3D
```

## Texto
```
Desarrollada como parte de la tesis de Licenciatura en Sonorización y Grabación.
Convierte audio mono en audio binaural espacializado usando filtros HRTF de la
base de datos KEMAR. Procesamiento de señales real, interfaz gráfica con Tkinter,
exportación en .wav estéreo.

El proyecto fue tan completo que el tutor de tesis recomendó no incluirlo —
daba para una tesis separada.
```

## Stack
```
Python · SciPy · Tkinter · NumPy
```

## Link
- `→ Ver en GitHub`: https://github.com/SanTaClouse/HRTF-Studio

---

---

# PENDIENTES — Completar antes del desarrollo

| Item | Estado |
|------|--------|
| Link directo de WhatsApp (wa.me/549...) | ⏳ PENDIENTE |
| Embed/link del mejor trabajo de grabaciones | ⏳ PENDIENTE |
| Embeds adicionales de grabaciones (2-3 más) | ⏳ PENDIENTE |
| Video Reel | ⏳ PENDIENTE — grabar y subir |
| Link deploy La Luna | ⏳ PENDIENTE |
| Link deploy Eleven web | ⏳ PENDIENTE |
| Link deploy Eleven SaaS | ⏳ PENDIENTE |
| Stack completo La Luna | ⏳ PENDIENTE |
| Stack completo Eleven | ⏳ PENDIENTE |
| Fotos profesionales con trombón | ✅ Disponibles |
| Instagram @santi.rivero06 | ✅ |
| YouTube Sergio Torres | ✅ https://www.youtube.com/channel/UC_HcKuICZJB10Dh64wfetmw |
| Instagram Sergio Torres | ✅ https://www.instagram.com/sergiotorresof/ |
| GitHub HRTF Studio | ✅ https://github.com/SanTaClouse/HRTF-Studio |

---

---

# NOTAS TÉCNICAS PARA EL DESARROLLO

## Video en páginas web
Subir videos a YouTube (pueden ser "no listados") y embeber con `<iframe>`.
Para audios: SoundCloud embed o elemento `<audio>` nativo con archivo .mp3.

## SEO
- Cada página debe tener su propio `<title>` y `<meta description>` únicos
- La página de grabaciones es la prioridad SEO absoluta
- Usar las keywords listadas en cada sección dentro del texto visible
- Schema markup de persona en el Home
- Open Graph tags para compartir en redes

## Imágenes
- Santiago tiene fotos profesionales con trombón → usar como hero images
- Formato WebP para performance
- Alt text descriptivo en todas las imágenes

## Idioma
- Todo el sitio en español
- La sección `/musico/grabaciones` tiene versión en inglés integrada
  (puede ser un toggle ES/EN dentro de esa página, o una URL `/grabaciones/en`)

## Analytics
- Instalar Google Analytics o Vercel Analytics desde el día 1
- Configurar eventos de conversión en los botones de WhatsApp

---

*Documento generado en sesión de trabajo con Claude — Febrero 2026*
*Actualizar este archivo a medida que se completan los pendientes*
