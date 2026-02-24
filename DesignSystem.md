# DESIGN SYSTEM — SantiagoSamuel.com.ar
> Documento de referencia visual para el desarrollo web.
> Versión 1.0 · Febrero 2026 · Sujeto a cambios

---

## 1. Introducción y Filosofía de Diseño

### 1.1 Inspiración

La estética nace directamente de las fotografías profesionales del artista. Todas las imágenes comparten:

- Fondo de estudio cálido — tonos marrón siena y tierra oscura
- Iluminación con reflejo rosado/magenta en las sombras
- El bronce dorado del trombón como elemento central
- Remera blanca del artista como punto de luz y contraste
- Atmósfera íntima, cálida, profesional pero accesible

La web debe sentirse como una extensión natural de esas fotos — como si el artista te estuviera recibiendo en su espacio. No es una web corporativa. Es un espacio personal con carácter.

---

### 1.2 Principios de Diseño

**Oscuro por defecto**
El fondo oscuro hace que las fotografías "floten" de manera natural, sin necesidad de recortes ni fondos artificiales. La foto se integra al diseño, no se pega encima.

**El dorado como acento dominante**
El color del trombón es el hilo conductor visual de toda la web. Botones, separadores, highlights y detalles interactivos usan el dorado bronce. Es el puente entre las fotografías y la interfaz.

**Contraste limpio**
Texto claro sobre fondo oscuro. Sin gris sobre gris. Sin texto pequeño ilegible. La jerarquía visual tiene que ser inmediata.

**Calidez latina**
Los colores cálidos (dorado, rosa, crema) refuerzan el universo musical del artista. No hay azules ni verdes en esta paleta. Todo respira tierra, bronce y luz cálida.

**Mobile-first**
La mayoría del tráfico llega desde Instagram en mobile. El diseño parte del teléfono y escala al desktop, nunca al revés.

---

## 2. Paleta de Colores

Todos los valores en HEX. Configurar en `tailwind.config.ts` bajo el namespace `brand`.

### 2.1 Colores Principales

| Nombre | HEX | Rol | Uso |
|--------|-----|-----|-----|
| Negro Cálido | `#1A1210` | Fondo principal | Body, hero backgrounds, página entera |
| Marrón Oscuro | `#2C1F1A` | Fondo secundario | Cards, secciones alternas, nav |
| Dorado Bronce | `#C9963A` | Acento primario | Botones CTA, links, borders activos, iconos |
| Rosa Magenta | `#D4607A` | Acento secundario | Hover states, badges, detalles decorativos |
| Blanco Cálido | `#F5EDE3` | Texto principal | Títulos, texto importante sobre fondo oscuro |
| Beige Crema | `#B8A99A` | Texto secundario | Subtítulos, texto de cuerpo, metadatos |

### 2.2 Colores de Soporte

| Nombre | HEX | Rol | Uso |
|--------|-----|-----|-----|
| Dorado Oscuro | `#8B6A28` | Acento oscuro | Hover del botón dorado, texto sobre fondo claro |
| Negro Puro | `#0D0A09` | Fondo profundo | Overlays, modales, sombras extremas |
| Marrón Medio | `#4A3428` | Bordes y separadores | Divisores, borders de cards, líneas |
| Crema Muy Claro | `#FDF6EE` | Fondo alternativo | Secciones que necesiten contraste inverso |

### 2.3 Configuración en Tailwind CSS

```ts
// tailwind.config.ts
extend: {
  colors: {
    brand: {
      bgPrimary:     '#1A1210',
      bgSecondary:   '#2C1F1A',
      bgDeep:        '#0D0A09',
      border:        '#4A3428',
      gold:          '#C9963A',
      goldDark:      '#8B6A28',
      rose:          '#D4607A',
      textPrimary:   '#F5EDE3',
      textSecondary: '#B8A99A',
      cream:         '#FDF6EE',
    }
  }
}
```

---

## 3. Tipografía

Sistema de dos familias principales: serif expresiva para títulos (personalidad artística) y sans-serif limpia para cuerpo (legibilidad). Disponibles en Google Fonts vía `next/font`.

### 3.1 Familias Tipográficas

| Uso | Familia | Peso | Tamaño | Descripción |
|-----|---------|------|--------|-------------|
| Hero / H1 principal | Playfair Display | 700 Bold | 48–72px | Impacto máximo. Solo para el tagline principal del hero. |
| Títulos H1 | Playfair Display | 700 Bold | 36–48px | Encabezados de sección principales. |
| Títulos H2 | Playfair Display | 600 SemiBold | 28–36px | Sub-secciones y encabezados de cards. |
| Títulos H3 | DM Sans | 600 SemiBold | 22–24px | Bloques de contenido, labels de servicios. |
| Cuerpo / Body | DM Sans | 400 Regular | 16–18px | Todo el texto de párrafos y descripciones. |
| Subtítulos / Lead | DM Sans | 300 Light | 18–20px | Texto introductorio, subtítulos debajo del H1. |
| Labels / Caps | DM Sans | 600 SemiBold | 12–14px | Tags, etiquetas, categorías. Siempre en mayúsculas con letter-spacing amplio. |
| Código / Técnico | JetBrains Mono | 400 Regular | 14–16px | Stack tecnológico, snippets, detalles técnicos. |
| CTA / Botones | DM Sans | 600 SemiBold | 14–16px | Texto de botones. Letter-spacing: 0.05em. |

### 3.2 Importar en Next.js

```tsx
// app/layout.tsx
import { Playfair_Display, DM_Sans, JetBrains_Mono } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-playfair'
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  variable: '--font-dm-sans'
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-mono'
})
```

### 3.3 Escala Tipográfica en Tailwind

```ts
// tailwind.config.ts — extend.fontSize
fontSize: {
  'hero':    ['4.5rem',    { lineHeight: '1.1',  letterSpacing: '-0.02em' }],
  'display': ['3rem',      { lineHeight: '1.15', letterSpacing: '-0.01em' }],
  'title':   ['2rem',      { lineHeight: '1.2'  }],
  'body':    ['1.0625rem', { lineHeight: '1.7'  }],
  'label':   ['0.75rem',   { lineHeight: '1',    letterSpacing: '0.1em'  }],
}
```

---

## 4. Sistema de Fotografías

Las fotografías son el activo visual más poderoso del sitio. El diseño fue construido para integrarlas de manera nativa.

### 4.1 Características de las Fotos

- Fondo de estudio — marrón siena cálido, textura terrosa
- Iluminación de tres puntos con acento rosado/magenta en sombras
- Artista siempre con remera blanca — crea el punto de contraste natural
- Trombón en bronce dorado — el prop visual central
- Todas las fotos siguen la misma paleta → coherencia perfecta entre secciones
- Formato vertical/portrait — ideal para hero en mobile

### 4.2 Ubicación de Archivos

Todas las imágenes van en `/public/images/`. Claude puede seleccionar desde esa carpeta al desarrollar.

```
/public
  /images
    /hero          ← fotos para secciones hero (alta resolución)
    /cards         ← fotos para cards del home
    /about         ← fotos para sección Sobre mí
    /projects      ← capturas de proyectos web
    /og            ← imágenes Open Graph (1200×630px)
```

### 4.3 Tratamiento Visual en la Web

**Hero con foto de fondo (overlay)**
La foto ocupa el 100% del ancho. Se aplica un overlay con gradiente oscuro para garantizar legibilidad del texto encima.
```css
background: linear-gradient(to bottom, rgba(26,18,16,0.3) 0%, rgba(26,18,16,0.85) 100%)
```

**Fotos en cards**
Formato cuadrado o 4:3. Border-radius: 12px. Sin filtros adicionales — la paleta ya es coherente.

**Foto en sección Sobre mí**
Foto en vertical, flotando a un lado del texto. En mobile: apilada arriba del texto. Box-shadow cálido:
```css
box-shadow: 0 8px 32px rgba(201,150,58,0.15)
```

**Optimización obligatoria**
Usar siempre `next/image`. Formato WebP. Tamaño máximo para hero: 1200px de ancho. Lazy loading en todas las imágenes fuera del viewport inicial.

---

## 5. Componentes de Interfaz

### 5.1 Botones

| Componente | Descripción | Estilo / Tokens |
|------------|-------------|-----------------|
| Botón Primario (CTA) | Acción principal. Ej: "Hablemos por WhatsApp" | `bg: #C9963A · text: #1A1210 · DM Sans 600 · px:24 py:12 · radius:6px · hover: #8B6A28` |
| Botón Secundario | Acción alternativa. Ej: "Ver ejemplos" | `bg: transparent · border: 1px #C9963A · text: #C9963A · hover: bg #C9963A text #1A1210` |
| Botón Ghost / Texto | Links de navegación inline. Ej: "Explorar →" | `bg: none · text: #B8A99A · hover: text #F5EDE3 · underline animado` |
| Botón WhatsApp | CTA flotante o inline con ícono WhatsApp | `bg: #25D366 · text: #FFFFFF · ícono SVG · rounded-full en versión flotante` |

### 5.2 Cards

| Componente | Descripción | Estilo / Tokens |
|------------|-------------|-----------------|
| Card de Servicio | Cards del home (Músico / Desarrollador) | `bg: #2C1F1A · border: 1px #4A3428 · radius: 12px · hover: border #C9963A · shadow cálida` |
| Card de Proyecto | Cards en el carrusel de /desarrollador | `bg: #2C1F1A · imagen arriba · texto abajo · hover: scale(1.02) transition` |
| Card de Paso | Pasos del proceso en /musico/grabaciones | `número grande en #C9963A · texto en #B8A99A · border-left: 3px #C9963A` |

### 5.3 Separadores y Detalles

| Componente | Descripción | Estilo / Tokens |
|------------|-------------|-----------------|
| Separador de Sección | Línea entre secciones principales | `border: 1px solid #4A3428 · ancho: 100% · margen: 64px vertical` |
| Separador Dorado | Línea decorativa bajo H1 | `border: 2px solid #C9963A · ancho: 60px · margen: 12px auto` |
| Badge / Tag | Etiquetas de skills, servicios | `bg: rgba(201,150,58,0.15) · text: #C9963A · px:12 py:4 · radius: 4px · DM Sans 600 caps` |
| Ícono de Nota | Bullets visuales en listas de features | `→ en dorado antes del texto · sin punto · DM Sans 400` |

### 5.4 Navegación

| Componente | Descripción | Estilo / Tokens |
|------------|-------------|-----------------|
| Header / Navbar | Fija en top, visible en scroll | `bg: rgba(26,18,16,0.92) · backdrop-blur · border-bottom: 1px #4A3428 · height: 64px` |
| Logo / Nombre | Santiago Samuel en el nav | `Playfair Display 700 · color: #F5EDE3 · hover: #C9963A` |
| Link de Instagram | Ícono + @santi.rivero06 en el header | `color: #C9963A · posición: derecha del nav · visible siempre` |
| Links de nav | Músico · Desarrollador · Contacto | `DM Sans 400 · color: #B8A99A · hover: #F5EDE3 · active: #C9963A` |
| Hamburger mobile | Menú colapsable en mobile | `ícono en #F5EDE3 · menú desplegable bg: #1A1210` |

---

## 6. Espaciado, Layout y Grid

### 6.1 Sistema de Espaciado

Basado en múltiplos de 8px.

| Token | Valor | Uso |
|-------|-------|-----|
| `xs / p-2` | 8px | Espacio interno de badges, padding de items pequeños |
| `sm / p-4` | 16px | Padding interno de cards pequeñas |
| `md / p-6` | 24px | Espacio estándar entre elementos |
| `lg / p-8` | 32px | Padding de secciones en mobile |
| `xl / p-12` | 48px | Separación entre bloques de contenido |
| `2xl / p-16` | 64px | Padding vertical de secciones en desktop |
| `3xl / p-24` | 96px | Separación entre secciones principales |

### 6.2 Ancho Máximo de Contenido

El contenido principal nunca supera `max-w-6xl` (1152px). Padding horizontal mínimo en mobile: `px-5` (20px).

### 6.3 Grid para Cards

- Mobile (< 768px): 1 columna → `grid-cols-1`
- Tablet (768px – 1024px): 2 columnas → `md:grid-cols-2`
- Desktop (> 1024px): 2 o 3 columnas según sección → `lg:grid-cols-3`

```tsx
// Ejemplo cards del home
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 px-5 md:px-8 lg:px-0 max-w-6xl mx-auto">
```

---

## 7. Animaciones y Micro-interacciones

### 7.1 Transiciones Base

- Duración estándar: 200ms – 300ms
- Easing: `ease-in-out` para la mayoría · `ease-out` para entradas
- NUNCA usar transiciones lentas (> 500ms) en elementos interactivos

### 7.2 Interacciones Específicas

| Componente | Comportamiento | Tailwind / CSS |
|------------|---------------|----------------|
| Hover en botón primario | Oscurece el fondo | `hover:bg-brand-goldDark transition-colors duration-200` |
| Hover en card | Sube levemente y border dorado | `hover:-translate-y-1 hover:border-brand-gold transition-all duration-250` |
| Hover en link de nav | Color más claro | `text-brand-textSecondary hover:text-brand-textPrimary transition-colors duration-150` |
| Fade-in en scroll | Elementos entran al hacer scroll | `opacity-0 → opacity-100 · translateY-5 → 0 · duration-500 · Intersection Observer` |
| Navbar al hacer scroll | Se vuelve más opaca | `backdrop-blur aumenta · bg-opacity aumenta tras 80px de scroll` |

---

## 8. Modo Claro (Opcional)

La web está diseñada en modo oscuro. Si se implementa toggle:

| Token | Modo Oscuro (default) | Modo Claro |
|-------|----------------------|------------|
| `bg-primary` | `#1A1210` | `#FDF6EE` |
| `bg-secondary` | `#2C1F1A` | `#F2E8DF` |
| `text-primary` | `#F5EDE3` | `#1A1210` |
| `text-secondary` | `#B8A99A` | `#6B5040` |
| `accent-gold` | `#C9963A` | `#8B6A28` |

---

## 9. Checklist de Consistencia Visual

Antes de publicar cualquier página:

### Colores
- [ ] ¿Todos los fondos usan brand.bgPrimary o brand.bgSecondary?
- [ ] ¿Los botones CTA usan brand.gold con texto brand.bgPrimary?
- [ ] ¿No hay blancos puros (#FFFFFF) en fondos?
- [ ] ¿El acento rose aparece solo en detalles, no como color dominante?

### Tipografía
- [ ] ¿H1 y H2 usan Playfair Display? ¿El cuerpo usa DM Sans?
- [ ] ¿Los labels están en mayúsculas con letter-spacing amplio?
- [ ] ¿El tamaño mínimo de texto es 14px en mobile?

### Fotografías
- [ ] ¿Todas las imágenes están en /public/images/ y usan next/image?
- [ ] ¿Los heroes tienen overlay oscuro para legibilidad del texto?
- [ ] ¿Las fotos de cards tienen border-radius: 12px?

### Spacing
- [ ] ¿Las secciones tienen al menos 64px de padding vertical en desktop?
- [ ] ¿El contenido tiene max-w-6xl y está centrado?
- [ ] ¿En mobile el padding horizontal es mínimo px-5?

### Interactividad
- [ ] ¿Todos los elementos interactivos tienen estado hover visible?
- [ ] ¿Los botones de WhatsApp son visibles y accesibles en mobile?
- [ ] ¿El header es fijo y siempre muestra el link a Instagram?

---

## 10. Nota Final

Este documento es una guía de referencia, no un contrato. Durante el desarrollo pueden surgir decisiones que requieran ajustar alguno de estos valores — especialmente al ver las fotografías reales integradas en el diseño.

El criterio final siempre es: **¿este diseño hace que las fotos de Santiago y su historia se sientan en casa?** Si la respuesta es sí, va bien.

---

*SantiagoSamuel.com.ar · Design System v1.0 · Febrero 2026*
