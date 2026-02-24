# La Luna — Análisis del Proyecto

## Resumen ejecutivo

**BackOfficeSystem-Luna** es una plataforma completa de gestión administrativa y comercial desarrollada para **La Luna**, el mayorista de frutas y verduras más importante de Maciel, Santa Fe, Argentina.

El proyecto consta de **dos aplicaciones integradas y en producción**:
1. **Sitio web institucional** (React + Vite): Presencia digital orientada a clientes finales y empresas mayoristas
2. **Sistema de backoffice administrativo** (NestJS + PostgreSQL): Panel de control interno para gestión de pedidos, clientes y stock

**En producción:** https://laluna123.vercel.app/

---

## El cliente

**La Luna** es una empresa familiar con más de 15 años de trayectoria en Maciel, Santa Fe. Su negocio opera en dos canales:

- **Venta minorista**: Atención directa en múltiples sucursales en Maciel y Oliveros
- **Venta mayorista**: Provisión de frutas y verduras frescas a comercios, supermercados y verdulerías de la zona

**El problema que tenían**: Sin presencia online, con gestión de pedidos mayoristas completamente manual (WhatsApp/teléfono), sin trazabilidad de clientes ni historial de compras.

---

## Qué construí

### 1. Sitio Web Público (React + Vite)
Landing page institucional con 5 páginas:
- **Home**: Carrusel de imágenes, presentación, valores, sección mayorista, preview de sucursales
- **Sucursales**: Ubicación, horarios, contacto de cada local
- **Mayorista**: Beneficios, servicios y formulario de solicitud de cotización
- **Contacto**: Formulario general + datos de comunicación
- **Login**: Acceso al backoffice (rutas protegidas)

### 2. Sistema Administrativo — Backoffice Completo
Panel de gestión con 6 módulos:

**Pedidos (`/ventas`)**
- Listado paginado con filtros por cliente, estado, rango de fechas
- Creación de pedidos con integración automática a WhatsApp (genera mensaje pre-formateado con cliente, descripción, total en ARS y dirección de entrega)
- Control de pagos: precio vs. precio abonado, estado Pago/Impago
- Acciones rápidas: marcar envío WA, actualizar abono, eliminar

**Clientes (`/clientes`)**
- CRUD completo con soft delete (preserva historial)
- Página de detalle por cliente: total facturado acumulado, cantidad de pedidos, último pedido, historial completo

**Mercadería (`/mercaderia`)**
- Gestión de stock por sucursal (4 sucursales)
- Modos de ajuste: SET (cantidad exacta) o ADD (suma/resta)
- Historial completo de cambios con auditoría: quién hizo el cambio, cuándo, cantidad anterior/nueva

**Estadísticas (`/estadisticas`)**
- Dashboard con KPIs: total ventas, total cobrado, total pendiente, cantidad de pedidos, cantidad de clientes
- Gráfico de línea (tendencia), barras mensuales, pie chart (pagados vs impagos)
- Tabla top clientes por volumen de compra
- Filtros por período

**Autenticación**
- JWT con roles: Admin (acceso completo) y Vendedor (acceso limitado)
- Token de 7 días, persistencia de sesión, logout limpio

---

## Stack técnico

### Frontend
| Tecnología | Versión | Uso |
|---|---|---|
| React | 18.2.0 | UI principal |
| Vite | 5.0.8 | Build tool |
| TypeScript | 5.9.3 | Tipado |
| React Router DOM | 6.30.2 | Enrutamiento SPA |
| Bootstrap 5 + React Bootstrap | 5.3.8 | CSS framework |
| Axios | 1.13.2 | HTTP client |
| React Hook Form + Yup | 7.66 / 1.7 | Formularios y validación |
| Recharts | 3.7.0 | Gráficos estadísticos |
| Framer Motion | 12.23 | Animaciones |
| SweetAlert2 | 11.26 | Modales y alertas |
| jsPDF + jspdf-autotable | 4.2 / 5.0 | Exportar a PDF |
| React Helmet Async | 2.0.5 | SEO meta tags |
| Vitest + Testing Library | 4.0 / 16.3 | Testing |

### Backend
| Tecnología | Versión | Uso |
|---|---|---|
| NestJS | 11.0.1 | Framework API |
| TypeScript | 5.7.3 | Tipado |
| TypeORM | 0.3.27 | ORM + migraciones |
| PostgreSQL | 8.16.3 | Base de datos |
| @nestjs/jwt + Passport JWT | 11.0 / 4.0.1 | Autenticación |
| bcrypt | 6.0.0 | Hasheado de contraseñas |
| class-validator / class-transformer | 0.14 / 0.5 | Validación DTOs |
| @nestjs/swagger | 11.2.0 | Documentación API |
| Cloudinary | 2.7.0 | Storage de archivos |
| Jest + ts-jest | 30.0 / 29.2 | Testing |

### Infraestructura
- **Frontend**: Vercel (CDN global, deploy automático desde GitHub)
- **Backend**: Render (API + PostgreSQL manejado)
- **CI/CD**: GitHub → auto-deploy en ambas plataformas

---

## Decisiones técnicas destacables

### Integración WhatsApp para pedidos
El sistema genera mensajes formateados automáticamente con normalización del número telefónico:
- Entrada: múltiples formatos (03434-569846, +54 343 456 9846, etc.)
- Normalización: detección de prefijo de país y conversión al formato `549XXXXXXXXX`
- Output: URL `wa.me/{phone}?text={encoded_message}` con encabezado, datos del cliente, descripción, precio formateado y firma

### Auditoría de stock completa
Tabla `stock_historial` que registra cada ajuste: producto, sucursal, cantidad anterior/nueva, diferencia, usuario responsable y timestamp exacto. Permite reconstruir el estado en cualquier momento.

### Índices estratégicos
Índices en: nombre de cliente, teléfono, estado de pedido, fecha y createdAt. Performance en queries incluso con 5.000+ pedidos.

### Soft delete + Check constraints
- Clientes: soft delete (campo `isDeleted`) para preservar historial y evitar orfandad de FK
- DB: constraint `precioAbonado <= precio` a nivel base de datos (complementa validación en app)

### Reportes agregados en DB
Las estadísticas se calculan con `JOIN + GROUP BY` directamente en PostgreSQL, no trayendo registros a memoria. Queries de reporte < 500ms con volumen real.

---

## Métricas del proyecto

| Métrica | Valor |
|---|---|
| Páginas públicas | 5 |
| Módulos del backoffice | 6 |
| Endpoints REST | 27 |
| Tablas en DB | 7 |
| Migraciones TypeORM | versionadas |
| Componentes React | 127 |
| Archivos TypeScript backend | 47 |
| Entidades con auditoría | 2 (clientes, stock) |
| Roles de usuario | 2 (admin, vendedor) |
| Sucursales manejadas | 4 |

---

## Estado del proyecto

✅ **En producción desde 2025**
- Frontend: https://laluna123.vercel.app/
- Backend API: Render (funcional)
- DB PostgreSQL: Render managed
- Documentación Swagger disponible en `/api/docs`
