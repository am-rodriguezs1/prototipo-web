# Prototipo Web — Gestor de Alarmas Ganaderas

Prototipo funcional desarrollado en **Angular** como entrega final para la materia **UX: Mejoramiento de la Experiencia de Usuario** de la Maestría en Ingeniería de Software (MiSo) — Universidad de los Andes.

---

## Integrantes

| Nombre |
|---|
| Juan Camilo Acevedo Ospina |
| Mauricio Rodriguez |

---

## Descripción

La aplicación simula un gestor de alarmas para el manejo de bovinos, permitiendo programar y visualizar alarmas médicas, nutricionales y de manejo. El prototipo está compuesto por **7 pantallas** organizadas en dos flujos principales.

---

## Flujos principales

### Flujo 1 — Crear Alarma

Permite al usuario registrar una nueva alarma de forma manual.

| # | Pantalla | Ruta |
|---|---|---|
| 1 | Login | `/login` |
| 2 | Dashboard | `/app/dashboard` |
| 3 | Gestor de Alarmas | `/app/alarmas` |
| 4 | Crear Nueva Alarma | `/app/alarmas/nueva` |

### Flujo 2 — Importación Masiva

Permite al usuario cargar múltiples alarmas desde un archivo, con validación y confirmación por pasos.

| # | Pantalla | Ruta |
|---|---|---|
| 1 | Login | `/login` |
| 2 | Dashboard | `/app/dashboard` |
| 3 | Gestor de Alarmas | `/app/alarmas` |
| 4 | Paso 1: Cargar archivo | `/app/alarmas/importar` |
| 5 | Paso 2: Validación | `/app/alarmas/importar` |
| 6 | Paso 3: Confirmación | `/app/alarmas/importar` |

> Las pantallas de Login, Dashboard y Gestor de Alarmas son compartidas entre ambos flujos.

---

## Tecnologías

- Angular 17+
- TypeScript
- SCSS
- Google Material Symbols

## Cómo ejecutar

```bash
npm install
ng serve
```

La aplicación estará disponible en `http://localhost:4200`.

> Credenciales de prueba: cualquier usuario/contraseña (el login redirige directamente al dashboard).
