# SEO — SantiagoSamuel.com.ar
> Estrategia completa de posicionamiento orgánico.
> Desde el día 1 hasta los 12 meses.

---

## POR QUÉ EL SEO ES CLAVE PARA ESTE PROYECTO

Santiago tiene dos tipos de audiencia con intenciones muy distintas:

- **Local** → gente en Santa Fe que busca clases de piano, transcripciones para SADAIC, o servicios de desarrollo web
- **Nacional e internacional** → productores y artistas que buscan grabaciones de vientos o arreglos de brass

El SEO bien hecho permite que ambas audiencias encuentren la página sin pagar publicidad. La prioridad absoluta es `/musico/grabaciones` porque es la página que genera ingresos internacionales.

---

## FUNDAMENTOS — Antes de publicar

Estas cosas deben estar resueltas desde el día 1. Sin esto, todo lo demás no sirve.

---

### 1. Dominio y hosting

- Registrar `SantiagoSamuel.com.ar` (dominio .com.ar para posicionamiento local argentino)
- Considerar también `SantiagoSamuel.com` para captar tráfico internacional
- Hosting con buena velocidad en Sudamérica (Vercel es ideal para Next.js — CDN global, gratis para proyectos personales)
- Forzar HTTPS desde el día 1 (sin esto Google penaliza)

---

### 2. Configuración técnica base en Next.js

Cada página necesita su propio archivo de metadata. En Next.js 14+ con App Router:

```tsx
// app/musico/grabaciones/page.tsx
export const metadata = {
  title: "Grabaciones de Vientos | Arreglos de Brass | Santiago Samuel",
  description: "Sección de vientos profesional para tu producción musical. 4 voces de brass grabadas en menos de una semana. Arreglos y grabaciones de trombón y trompeta. Sonido latino real.",
  keywords: ["grabación de vientos", "arreglos de vientos", "sección de brass", "grabación de trombón", "arreglos cumbia", "horn section recording Argentina"],
  openGraph: {
    title: "Grabaciones de Vientos | Santiago Samuel",
    description: "Horn section para tu producción. Rápido, latino y accesible.",
    url: "https://www.santiagosamuel.com.ar/musico/grabaciones",
    siteName: "Santiago Samuel",
    images: [{ url: "/og-grabaciones.jpg", width: 1200, height: 630 }],
    locale: "es_AR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Grabaciones de Vientos | Santiago Samuel",
    description: "Horn section para tu producción. Rápido, latino y accesible.",
    images: ["/og-grabaciones.jpg"],
  },
  alternates: {
    canonical: "https://www.santiagosamuel.com.ar/musico/grabaciones",
  },
}
```

Hacer esto para **cada página** con título, descripción y keywords únicos.

---

### 3. Metadata por página — Textos listos para usar

| Página | Title | Meta Description |
|--------|-------|-----------------|
| `/` | `Santiago Samuel — Músico, Arreglador y Desarrollador Web \| Santa Fe` | `Músico, trombonista y desarrollador web de Santa Fe, Argentina. Arreglos y grabaciones de vientos, transcripciones para SADAIC y sistemas web para negocios.` |
| `/musico/grabaciones` | `Grabaciones de Vientos y Arreglos de Brass \| Santiago Samuel` | `Sección de vientos profesional para tu producción. 4 voces de brass en menos de una semana. Trombón y trompeta. Sonido latino real. Contacto directo.` |
| `/musico/transcripciones` | `Transcripciones para SADAIC \| Partituras y Registro de Obras \| Santiago Samuel` | `Servicio de transcripción de melodía y armonía para registrar tu canción en SADAIC. Rápido y accesible. También para SGAE, BMI, ASCAP y más.` |
| `/musico/sergiotorres` | `Sergio Torres — Músico de la Banda \| Santiago Samuel` | `Desde agosto de 2023 formo parte de la banda de Sergio Torres, referente de la cumbia santafesina. Shows, grabaciones y giras por todo el país.` |
| `/musico/clases` | `Clases de Piano Particulares en Santa Fe \| Presencial y Virtual \| Santiago Samuel` | `Clases de piano con 5 años de experiencia. Presenciales en Santa Fe capital o virtuales para cualquier ciudad. Todos los niveles.` |
| `/desarrollador` | `Desarrollador Web en Santa Fe \| Páginas y Sistemas a Medida \| Santiago Samuel` | `Desarrollo de páginas web y sistemas de gestión para negocios en Santa Fe y Argentina. Next.js, NestJS, PostgreSQL. Proyectos reales funcionando.` |
| `/desarrollador/laluna` | `La Luna — Página Web para Mayorista \| Santiago Samuel Desarrollador` | `Desarrollo de página web institucional para La Luna, mayorista de frutas y verduras de Maciel, Santa Fe. SEO local y diseño mobile-first.` |
| `/desarrollador/eleven` | `Eleven Ascensores — Web y Sistema de Gestión \| Santiago Samuel` | `Página web y SaaS administrativo a medida para empresa de ascensores en Santa Fe. Control de clientes, pedidos y órdenes de trabajo.` |

---

### 4. Schema Markup (datos estructurados)

Esto le dice a Google exactamente quién sos. Va en el layout principal.

**Person Schema — en el Home:**
```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Santiago Samuel",
  "jobTitle": "Músico, Arreglador y Desarrollador Web",
  "url": "https://www.santiagosamuel.com.ar",
  "sameAs": [
    "https://www.instagram.com/santi.rivero06/"
  ],
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Santa Fe",
    "addressCountry": "AR"
  }
}
```

**Service Schema — en /musico/grabaciones:**
```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Grabaciones y Arreglos de Vientos",
  "provider": {
    "@type": "Person",
    "name": "Santiago Samuel"
  },
  "areaServed": "Worldwide",
  "description": "Grabaciones profesionales de sección de vientos. 4 voces de brass en menos de una semana.",
  "serviceType": "Music Production"
}
```

---

### 5. sitemap.xml y robots.txt

Next.js puede generarlos automáticamente:

```tsx
// app/sitemap.ts
export default function sitemap() {
  return [
    { url: "https://www.santiagosamuel.com.ar", lastModified: new Date(), priority: 1 },
    { url: "https://www.santiagosamuel.com.ar/musico/grabaciones", lastModified: new Date(), priority: 0.9 },
    { url: "https://www.santiagosamuel.com.ar/musico/transcripciones", lastModified: new Date(), priority: 0.8 },
    { url: "https://www.santiagosamuel.com.ar/musico/sergiotorres", lastModified: new Date(), priority: 0.7 },
    { url: "https://www.santiagosamuel.com.ar/musico/clases", lastModified: new Date(), priority: 0.6 },
    { url: "https://www.santiagosamuel.com.ar/desarrollador", lastModified: new Date(), priority: 0.8 },
    { url: "https://www.santiagosamuel.com.ar/desarrollador/laluna", lastModified: new Date(), priority: 0.6 },
    { url: "https://www.santiagosamuel.com.ar/desarrollador/eleven", lastModified: new Date(), priority: 0.6 },
  ]
}
```

---

### 6. Performance (Core Web Vitals)

Google rankea mejor los sitios rápidos. En Next.js esto es bastante automático, pero hay que prestar atención a:

- Usar `next/image` para todas las imágenes (optimiza automáticamente)
- Convertir todas las imágenes a **WebP**
- Lazy loading en imágenes que no están en el hero
- No cargar fuentes de Google Fonts síncronamente — usar `next/font`
- Los embeds de YouTube cargarlos con lazy (usar `loading="lazy"` en el iframe)

Herramienta para medir: [PageSpeed Insights](https://pagespeed.web.dev/) — el objetivo es **90+ en mobile**.

---

### 7. Google Search Console + Analytics

- Crear cuenta en [Google Search Console](https://search.google.com/search-console)
- Verificar el dominio desde el día 1
- Enviar el sitemap manualmente: `https://www.santiagosamuel.com.ar/sitemap.xml`
- Instalar [Vercel Analytics](https://vercel.com/analytics) (gratis) o Google Analytics 4
- Configurar eventos de conversión en los clics a WhatsApp

---

## KEYWORDS — Investigación completa

### Grabaciones de vientos (prioridad máxima)

| Keyword | Intención | Dificultad estimada | Prioridad |
|---------|-----------|-------------------|-----------|
| grabación de vientos | Comercial | Baja | 🔴 Máxima |
| arreglos de vientos para estudio | Comercial | Baja | 🔴 Máxima |
| sección de brass para grabación | Comercial | Muy baja | 🔴 Máxima |
| arreglos de trombón y trompeta | Comercial | Muy baja | 🔴 Máxima |
| grabación de brass Argentina | Comercial | Muy baja | 🔴 Máxima |
| arreglos de vientos cumbia | Comercial | Muy baja | 🔴 Máxima |
| horn section recording | Comercial | Media | 🟡 Alta |
| horn arrangements latin music | Comercial | Media | 🟡 Alta |
| brass section studio recording | Comercial | Media | 🟡 Alta |
| trombone and trumpet recording | Comercial | Baja | 🟡 Alta |

### Transcripciones (prioridad alta — mucho volumen local)

| Keyword | Intención | Dificultad | Prioridad |
|---------|-----------|------------|-----------|
| transcripción para SADAIC | Comercial | Muy baja | 🔴 Máxima |
| cómo registrar una canción en SADAIC | Informacional | Baja | 🔴 Máxima |
| partitura para SADAIC | Comercial | Muy baja | 🔴 Máxima |
| transcripción de melodía y armonía | Comercial | Baja | 🟡 Alta |
| registro de obra musical Argentina | Informacional | Baja | 🟡 Alta |
| transcripción musical Santa Fe | Comercial | Muy baja | 🟢 Media |

### Desarrollo web (prioridad media)

| Keyword | Intención | Dificultad | Prioridad |
|---------|-----------|------------|-----------|
| desarrollador web Santa Fe | Comercial | Baja | 🟡 Alta |
| páginas web para empresas Santa Fe | Comercial | Baja | 🟡 Alta |
| sistema de gestión a medida Argentina | Comercial | Media | 🟡 Alta |
| desarrollo web freelance Santa Fe | Comercial | Muy baja | 🟢 Media |

### Clases de piano (prioridad baja)

| Keyword | Intención | Dificultad | Prioridad |
|---------|-----------|------------|-----------|
| clases de piano Santa Fe | Comercial | Baja | 🟢 Media |
| clases de piano particulares Santa Fe | Comercial | Muy baja | 🟢 Media |
| clases de piano online Argentina | Comercial | Media | 🟢 Media |

---

## OBJETIVOS Y PLAN POR ETAPAS

---

### ⚡ CORTO PLAZO — Mes 1 al 3
**Objetivo: Que Google indexe y entienda el sitio correctamente**

**Mes 1 — Fundaciones:**
- [ ] Publicar el sitio con todas las páginas (aunque algunas estén incompletas)
- [ ] Configurar metadata única en cada página
- [ ] Agregar Schema Markup de Person y Service
- [ ] Crear y enviar sitemap en Google Search Console
- [ ] Verificar que todas las páginas están indexadas
- [ ] Performance 90+ en PageSpeed
- [ ] Crear perfil de **Google My Business** con nombre "Santiago Samuel - Músico y Desarrollador Web" y ubicación Santa Fe (esto es clave para búsquedas locales)

**Mes 2 — Contenido y links:**
- [ ] Publicar al menos 1 ejemplo de audio/video real en `/musico/grabaciones`
- [ ] Completar la sección Sergio Torres con fotos reales
- [ ] Publicar los case studies de La Luna y Eleven con capturas reales
- [ ] Subir el Video Reel cuando esté listo
- [ ] Agregar link a la web desde el bio de Instagram (@santi.rivero06)
- [ ] Pedir a La Luna y Eleven Ascensores que pongan un link a tu web desde sus sitios (backlinks reales)

**Mes 3 — Primeras mediciones:**
- [ ] Revisar Google Search Console: ¿para qué keywords está apareciendo?
- [ ] Verificar que las páginas prioritarias están en las primeras páginas para keywords de baja competencia
- [ ] Ajustar los textos de las páginas que no estén rankeando

**Resultado esperado al mes 3:**
Aparecer en Google para búsquedas de nombre propio ("Santiago Samuel músico") y keywords muy específicas de baja competencia ("grabación de vientos Santa Fe", "transcripción para SADAIC").

---

### 📈 MEDIANO PLAZO — Mes 3 al 6
**Objetivo: Generar tráfico orgánico constante y las primeras consultas por SEO**

**Contenido nuevo:**
- [ ] Escribir 2-3 artículos de blog cortos orientados a keywords informacionales:
  - *"Cómo registrar tu canción en SADAIC: guía paso a paso"* → captura búsquedas de gente que no sabe qué es SADAIC pero necesita registrar su obra
  - *"Qué es una sección de vientos y cómo puede transformar tu producción"* → educa al cliente y posiciona para "arreglos de vientos"
  - *"Dolby Atmos y audio espacial: de la tesis a la aplicación"* → posiciona en búsquedas tech nicho y cuenta la historia de HRTF Studio
- [ ] Publicar los trabajos de grabaciones a medida que se van haciendo (cada nuevo trabajo es contenido nuevo)
- [ ] Agregar testimonios reales de clientes en las páginas de servicio (el texto de un testimonio suma keywords naturales)

**Links externos (backlinks):**
- [ ] Crear perfil en **SoundBetter** o **AirGigs** (plataformas internacionales de músicos de sesión) con link a la web — esto genera backlinks de calidad
- [ ] Publicar en grupos de Facebook de productores y músicos con link a la sección de grabaciones
- [ ] Si Sergio Torres tiene web o el equipo publica algo, pedir mención con link

**Resultado esperado al mes 6:**
Primeras consultas que lleguen orgánicamente por Google (sin que Santiago las haya generado activamente). Aparecer en top 5 para "transcripción para SADAIC" y "grabación de vientos Argentina".

---

### 🚀 LARGO PLAZO — Mes 6 al 12
**Objetivo: Posicionamiento consolidado y flujo constante de consultas internacionales**

**Autoridad y contenido:**
- [ ] Publicar regularmente trabajos nuevos (cada grabación terminada = nuevo contenido)
- [ ] Sumar reseñas de Google My Business (pedirle a clientes satisfechos que dejen una reseña)
- [ ] Agregar una sección de FAQ en `/musico/grabaciones` respondiendo preguntas comunes:
  - *¿Cuánto cuesta una grabación de vientos?*
  - *¿Cómo envío el material para grabar?*
  - *¿Puedo pedir arreglos si no tengo partitura?*
  - Estas preguntas en formato FAQ generan fragmentos destacados en Google
- [ ] Considerar subtítulos en inglés en los videos de YouTube para captar tráfico angloparlante
- [ ] Evaluar Google Ads en `/musico/grabaciones` con presupuesto mínimo para keywords en inglés ("horn section recording", "brass arrangements") si el tráfico orgánico en inglés es lento

**Resultado esperado al mes 12:**
- Top 3 en Google Argentina para "transcripción para SADAIC"
- Top 5 para "grabación de vientos Argentina" y "arreglos de brass"
- Aparición consistente para keywords en inglés de nicho
- Tráfico orgánico mensual: 200-500 visitas únicas (objetivo conservador)
- 3-5 consultas mensuales que lleguen exclusivamente por SEO

---

## RESUMEN VISUAL DE PRIORIDADES

```
PRIORIDAD 1 — /musico/grabaciones
  → Keywords: grabación de vientos, arreglos de brass, horn section recording
  → Objetivo: ventas internacionales
  → Acción inmediata: metadata + schema + ejemplos reales de audio

PRIORIDAD 2 — /musico/transcripciones
  → Keywords: transcripción para SADAIC, partitura para SADAIC
  → Objetivo: clientes locales Argentina
  → Acción inmediata: metadata + texto con keywords + Google My Business

PRIORIDAD 3 — / (Home)
  → Keywords: nombre propio + marca personal
  → Objetivo: credibilidad general
  → Acción inmediata: schema Person + velocidad de carga

PRIORIDAD 4 — /desarrollador
  → Keywords: desarrollador web Santa Fe, sistema de gestión a medida
  → Objetivo: clientes locales tech
  → Acción inmediata: case studies con texto real (no solo capturas)

PRIORIDAD 5 — /musico/clases
  → Keywords: clases de piano Santa Fe, clases piano online
  → Objetivo: alumnos locales y virtuales
  → Acción: solo metadata básica, no invertir tiempo extra acá
```

---

## CHECKLIST RÁPIDO — Día 1

Antes de publicar, verificar que cada página tiene:

- [ ] `<title>` único y descriptivo (máximo 60 caracteres)
- [ ] `<meta description>` única (máximo 155 caracteres)
- [ ] URL limpia y descriptiva (sin `/page/1` ni `?id=123`)
- [ ] Al menos un `<h1>` por página
- [ ] Imágenes con atributo `alt` descriptivo
- [ ] Link canónico `<link rel="canonical">`
- [ ] Open Graph tags (para compartir en redes)
- [ ] Carga en menos de 3 segundos en mobile
- [ ] Sitio verificado en Google Search Console
- [ ] Sitemap enviado a Google

---

## HERRAMIENTAS RECOMENDADAS (todas gratuitas)

| Herramienta | Para qué |
|-------------|----------|
| [Google Search Console](https://search.google.com/search-console) | Ver cómo Google ve tu sitio, qué keywords generan clics |
| [PageSpeed Insights](https://pagespeed.web.dev/) | Medir velocidad de carga |
| [Google My Business](https://business.google.com/) | Aparecer en búsquedas locales de Santa Fe |
| [Vercel Analytics](https://vercel.com/analytics) | Ver visitas sin configuración compleja |
| [Ahrefs Webmaster Tools](https://ahrefs.com/webmaster-tools) | Ver backlinks y keywords (gratis con verificación) |
| [Schema Markup Validator](https://validator.schema.org/) | Verificar que los datos estructurados están bien |
| [SoundBetter](https://soundbetter.com/) | Perfil de músico de sesión con backlink a la web |

---

*Documento generado en sesión de trabajo con Claude — Febrero 2026*
*Revisar y actualizar a medida que el sitio crece*
