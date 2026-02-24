# Eleven Ascensores — Análisis del Proyecto

## Resumen ejecutivo

**Eleven** es una **plataforma SaaS B2B de gestión integral para empresas de mantenimiento de ascensores**, desarrollada para automatizar el ciclo completo de operaciones: desde la programación mensual de trabajos hasta la facturación electrónica ante ARCA (AFIP).

El proyecto consta de **tres aplicaciones interconectadas, todas en producción**:
1. **Landing page pública** (Next.js): Sitio institucional optimizado para SEO local
2. **Sistema administrativo web** (Next.js + NestJS + PostgreSQL): Dashboard de KPIs, gestión de clientes/edificios, órdenes de trabajo
3. **Portal móvil QR** (Web responsive): Interfaz para técnicos en campo — sin app nativa, acceso por código QR

**Diferenciador clave**: Integración completa con **ARCA** (Administración Federal de Ingresos Públicos de Argentina) para emisión automática de facturas electrónicas con CAE — muy pocas soluciones del mercado tienen esto integrado.

---

## El cliente

**Eleven Ascensores** es una empresa de mantenimiento de ascensores de Santa Fe, Argentina. Sus servicios:
- Mantenimiento preventivo mensual (servicio principal, recurrente)
- Instalación de nuevos ascensores
- Reparaciones de emergencia (24/7)
- Modernización de equipos existentes

**El problema que resolvía**:
- Gestión de docenas de edificios/clientes completamente manual
- Facturación electrónica (ARCA): proceso que llevaba días de trabajo mensual, propenso a errores
- Técnicos en campo sin acceso digital al trabajo asignado
- Sin trazabilidad del historial de trabajos por edificio

---

## Qué construí

### 1. Landing Page Pública (SEO-first)
Sitio institucional con enfoque en posicionamiento local en Google:
- **Home**: Hero con CTA, barra de confianza con KPIs animados, cards de servicios, FAQ con schema JSON-LD, formulario de contacto
- **Páginas de servicios** (SEO): `/servicios/mantenimiento-ascensores-santa-fe`, `/servicios/instalacion-ascensores-santa-fe`, `/servicios/modernizacion-ascensores-santa-fe`
- **SEO técnico**: JSON-LD schemas (LocalBusiness, Service, FAQ, Breadcrumb), sitemap dinámico, robots.txt, metadata por página

### 2. Sistema Administrativo

**Dashboard principal (`/dashboard`)**
- KPIs mensuales: avance del mes (%), facturación ($, % facturado), cobranza ($ cobrado)
- Tabla de órdenes de trabajo con filtros por estado, cliente y tipo de trabajo
- Selector de mes/año para análisis de períodos
- Acciones: generar órdenes masivas para un mes, crear orden manual

**Generación masiva de órdenes**
- Un botón genera automáticamente las órdenes del mes para TODOS los edificios activos
- Elimina la creación manual repetitiva (el caso de uso más frecuente)

**Gestión de Clientes (`/clients`)**
- CRUD completo con soft delete
- Campos: nombre, CUIT, teléfono, email, dirección, ingresos mensuales, activo

**Gestión de Edificios (`/buildings`)**
- CRUD completo con historial de cambios de precio (auditoría)
- Generación de **código QR por edificio** (PNG descargable) para el portal móvil
- Toggle activo/en mantenimiento
- Datos: nombre, dirección, cliente, cantidad de paradas/ascensores, precio de abono

**Facturación ARCA (`/arca`)**
- Configuración: CUIT, razón social, punto de venta, certificado X.509, clave privada
- Emisión automática de facturas con obtención de CAE
- Generación de PDF con QR ARCA (formato oficial AFIP) y upload automático a Firebase Storage
- Soporte dual: entorno de homologación (pruebas) y producción
- Test de conexión al WSAA de ARCA

### 3. Portal Móvil para Técnicos (QR)
- Sin app nativa: acceso desde cualquier teléfono escaneando el QR del edificio
- Vista por edificio: órdenes de trabajo del mes, estado actual
- Acciones: iniciar trabajo (→ `in_progress`), completar trabajo (→ `completed`), agregar observaciones
- Historial de trabajos realizados en el edificio

---

## Stack técnico

### Frontend
| Tecnología | Versión | Uso |
|---|---|---|
| Next.js | 16.0.7 (App Router) | Framework principal |
| React | 19.2.1 | UI |
| TypeScript | 5 | Tipado |
| Tailwind CSS | v4 | Estilos |
| shadcn/ui + Radix UI | – | Componentes accesibles |
| TanStack React Query | 5.90 | Data fetching y cache |
| TanStack React Table | – | Tablas complejas |
| React Hook Form + Zod | – | Formularios + validación |
| Lucide React | – | Iconografía |
| Sonner | – | Notificaciones toast |
| Firebase SDK | – | Storage (facturas PDF) |
| Axios | – | HTTP client |
| next-themes | – | Modo oscuro/claro |
| date-fns | – | Manejo de fechas |

### Backend
| Tecnología | Versión | Uso |
|---|---|---|
| NestJS | 11.1.9 | Framework API |
| TypeScript | 5 | Tipado |
| TypeORM | 0.3.27 | ORM + migraciones |
| PostgreSQL | 8.16 | Base de datos |
| Passport JWT | – | Autenticación |
| class-validator / class-transformer | – | Validación DTOs |
| @nestjs/swagger | – | Documentación API |
| @nestjs/throttler | – | Rate limiting (120 req/min) |
| Firebase Admin SDK | 13.6 | Storage, custom tokens |
| **soap** | 1.7.1 | Cliente SOAP para ARCA |
| **node-forge** | 1.3.3 | PKI: certificados X.509, PKCS7/CMS |
| **pdfkit** | – | Generación de PDFs |
| **qrcode** | – | QR para PDF AFIP |
| bcrypt | – | Hashing contraseñas |
| Morgan | – | HTTP logging |

### Infraestructura
| Servicio | Uso |
|---|---|
| Vercel | Frontend Next.js |
| Render (Docker) | Backend NestJS |
| Railway | PostgreSQL manejado |
| Firebase Cloud Storage | PDFs de facturas |
| GitHub Actions | CI/CD |

---

## Decisiones técnicas destacables

### Integración ARCA (AFIP) — La más compleja del proyecto
Protocolo SOAP con PKI completo:
1. **WSAA** (autenticación): Firma del Ticket de Requerimiento de Acceso (TRA) con certificado X.509 y PKCS7/CMS usando `node-forge`, envío al servicio WSAA de ARCA
2. **Cache de ticket**: Token de sesión almacenado en DB con validez de 12h (con margen de refresco), evita re-autenticar en cada factura
3. **WSFE** (emisión): Construcción del request SOAP con datos del comprobante, obtención del CAE
4. **PDF automático**: Generado con PDFKit incluyendo QR ARCA en base64 (formato oficial), subido a Firebase Storage
5. **URL pública**: Almacenada en la orden de trabajo, descargable desde el dashboard

### Autenticación JWT con refresh tokens dinámicos
- Access token: 15 minutos (seguridad)
- Refresh token: 7 días (normal) o 30 días (si "Recordarme" activado)
- Auto-logout tras 30 min de inactividad (sin "Recordarme")
- Tokens revocables via `tokensValidAfter` en la entidad User

### Portal QR sin app nativa
- URL parametrizada: `https://app.eleven/qr/{buildingId}`
- Responsive máx. 428px (ancho de teléfono)
- Sin fricción: el técnico escanea el QR del edificio, ve sus tareas, las completa
- Sin instalación, sin cuenta extra

### Generación masiva de órdenes
- Un endpoint `POST /work-orders/generate-monthly` crea automáticamente las órdenes para todos los edificios activos del mes especificado
- Elimina decenas de creaciones manuales repetitivas, el pain point más frecuente del negocio

### Migraciones TypeORM versionadas (9 migraciones)
Control de versión del schema con auto-run en startup en producción. Rollback posible.

### Rate limiting global
`@nestjs/throttler`: 120 requests/minuto por IP. Protege contra abuso y DDoS.

---

## Métricas del proyecto

| Métrica | Valor |
|---|---|
| Aplicaciones | 3 (landing, admin, QR portal) |
| Entidades de DB | 7 (User, Client, Building, WorkOrder, WorkOrderStatusHistory, ArcaConfig, BuildingPriceHistory) |
| Módulos backend | 6 (Auth, Clients, Buildings, WorkOrders, QrAccess, Arca) |
| Endpoints REST | ~35 |
| Migraciones TypeORM | 9 |
| Componentes React | 45+ |
| Páginas públicas | 4 (landing + 3 servicios) |
| Páginas administrativas | 8+ |
| Estados de orden de trabajo | 4 (pending, in_progress, completed, cancelled) |
| Tipos de trabajo | 4 (mantenimiento, instalación, reparación, modernización) |
| Schemas JSON-LD | 4 (LocalBusiness, Service, FAQ, Breadcrumb) |

---

## Estado del proyecto

✅ **En producción**
- Backend: Render (Docker)
- Frontend: Vercel
- DB: Railway (PostgreSQL managed)
- Dominio configurado

✅ **Funcionalidades completas**
- Login + autenticación con roles
- CRUD de clientes, edificios, órdenes
- Generación masiva de órdenes mensuales
- Dashboard con KPIs en tiempo real
- Integración ARCA (facturación electrónica con CAE)
- Portal QR para técnicos
- Landing page con SEO
- Historial de cambios de estado y precios
- Validación completa (backend + frontend)
- Rate limiting + CORS configurado
