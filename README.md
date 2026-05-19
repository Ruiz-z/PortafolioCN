# Portafolio de Evidencias — Cómputo en la Nube

Portafolio académico desarrollado para la materia **Cómputo en la Nube** del Instituto Tecnológico de Saltillo (TecNM). Documenta las actividades, prácticas y aprendizajes del semestre Enero–Junio 2026.

**Sitio en vivo:** [Ver portafolio]( https://portafolio-cn-theta.vercel.app/)

---

## ¿Qué es esto?

Es un sitio web de una sola página (SPA) que reúne todas las evidencias del curso organizadas por unidad. Cada unidad tiene un carrusel con sus actividades, donde puedes ver la descripción, el aprendizaje obtenido, la reflexión y el PDF correspondiente.

No es un portafolio de trabajo — es un portafolio escolar que documenta el proceso de aprendizaje a lo largo del semestre.

## Contenido

El portafolio cubre 5 unidades del curso:

- **Unidad 1** — Introducción y fundamentos del cómputo en la nube
- **Unidad 2** — Arquitectura de la nube (AWS, Azure, Google Cloud, GitHub)
- **Unidad 3** — Consideraciones para el desarrollo (microservicios, DevOps)
- **Unidad 4** — Seguridad en la nube (9 prácticas)
- **Unidad 5** — Diseño y desarrollo de aplicaciones en la nube

## Stack

- React 19 + Vite
- CSS plano (un archivo por componente, sin frameworks)
- lucide-react para íconos
- Sin TypeScript, sin Tailwind, sin Redux

## Correrlo localmente

```bash
git clone https://github.com/Ruiz-z/PortafolioCN.git
cd PortafolioCN
pnpm install
pnpm run dev
```

Para generar el build de producción:

```bash
pnpm run build
```

## Estructura

```
src/
├── components/   # Un componente por sección
├── data/         # evidencias.js, objetivos.js, anexos.js
└── styles/       # Un .css por componente
public/
└── unidades/     # PDFs de cada actividad por unidad
```

Si quieres agregar o editar actividades, solo modifica `src/data/evidencias.js`. Cada entrada tiene título, fecha, descripción, aprendizaje, reflexión y anexos.

## Autor

**Mauro Rodrigo Ruiz Alvarez**(Ruiz-z y MauroRUiz04) 
· No. Control 22050727  
Ingeniería en Sistemas Computacionales · TecNM Campus Saltillo  
Profesor: Ing. Miguel Salazar del Bosque
