// src/data/curriculum.ts
// Fuente única de verdad del contenido de cada curso: portada, módulos y lecciones.
// Mismo espíritu que elearningCourses.ts: agregar contenido = agregar datos acá,
// sin tocar componentes ni rutas.
//
// CÓMO COMPLETAR: reemplazá cada 'COMPLETAR_*' por el contenido real. No cambies
// los 'id' de las lecciones una vez que haya alumnos con progreso guardado — son
// la referencia estable que usa progreso_lecciones en Supabase.

export interface OpcionPregunta {
  texto: string;
  correcta: boolean;
}

export interface Pregunta {
  id: string;
  enunciado: string;
  opciones: OpcionPregunta[];
}

export interface Leccion {
  id: string;
  titulo: string;
  videoUrl: string;
  pdfUrl: string;
  orden: number;
  // Opcional a propósito: mientras no se cargue el mini test de una lección,
  // el campus muestra el botón manual de "marcar como completada" como
  // fallback. En cuanto se agregan preguntas acá, el test la reemplaza.
  preguntas?: Pregunta[];
}

export interface Modulo {
  id: string;
  titulo: string;
  orden: number;
  lecciones: Leccion[];
}

export interface CursoCurriculum {
  cursoSlug: string;
  titulo: string;
  nivel: string;
  modulos: Modulo[];
}

export const curriculum: CursoCurriculum[] = [
  {
    cursoSlug: "english-for-tourism",
    titulo: "COMPLETAR_TITULO_CURSO",
    nivel: "COMPLETAR_NIVEL",
    modulos: [
      {
        id: "tourism-m1",
        titulo: "Módulo 1 · COMPLETAR_TITULO",
        orden: 1,
        lecciones: [
          {
            id: "tourism-m1-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "tourism-m1-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "tourism-m1-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
        ],
      },
      {
        id: "tourism-m2",
        titulo: "Módulo 2 · COMPLETAR_TITULO",
        orden: 2,
        lecciones: [
          {
            id: "tourism-m2-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "tourism-m2-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "tourism-m2-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "tourism-m2-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
      {
        id: "tourism-m3",
        titulo: "Módulo 3 · COMPLETAR_TITULO",
        orden: 3,
        lecciones: [
          {
            id: "tourism-m3-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "tourism-m3-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
        ],
      },
    ],
  },
  {
    cursoSlug: "job-ready-english",
    titulo: "COMPLETAR_TITULO_CURSO",
    nivel: "COMPLETAR_NIVEL",
    modulos: [
      {
        id: "jobready-m1",
        titulo: "Módulo 1 · COMPLETAR_TITULO",
        orden: 1,
        lecciones: [
          {
            id: "jobready-m1-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "jobready-m1-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "jobready-m1-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "jobready-m1-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
      {
        id: "jobready-m2",
        titulo: "Módulo 2 · COMPLETAR_TITULO",
        orden: 2,
        lecciones: [
          {
            id: "jobready-m2-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "jobready-m2-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "jobready-m2-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "jobready-m2-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
      {
        id: "jobready-m3",
        titulo: "Módulo 3 · COMPLETAR_TITULO",
        orden: 3,
        lecciones: [
          {
            id: "jobready-m3-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "jobready-m3-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "jobready-m3-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "jobready-m3-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
    ],
  },
  {
    cursoSlug: "english-from-zero",
    titulo: "COMPLETAR_TITULO_CURSO",
    nivel: "COMPLETAR_NIVEL",
    modulos: [
      {
        id: "efz-m1",
        titulo: "Módulo 1 · COMPLETAR_TITULO",
        orden: 1,
        lecciones: [
          {
            id: "efz-m1-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "efz-m1-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "efz-m1-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "efz-m1-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
      {
        id: "efz-m2",
        titulo: "Módulo 2 · COMPLETAR_TITULO",
        orden: 2,
        lecciones: [
          {
            id: "efz-m2-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "efz-m2-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "efz-m2-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "efz-m2-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
      {
        id: "efz-m3",
        titulo: "Módulo 3 · COMPLETAR_TITULO",
        orden: 3,
        lecciones: [
          {
            id: "efz-m3-l1",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 1,
          },
          {
            id: "efz-m3-l2",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 2,
          },
          {
            id: "efz-m3-l3",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 3,
          },
          {
            id: "efz-m3-l4",
            titulo: "COMPLETAR_TITULO",
            videoUrl: "COMPLETAR_VIDEO_URL",
            pdfUrl: "COMPLETAR_PDF_URL",
            orden: 4,
          },
        ],
      },
    ],
  },
];

// ---- Helpers ----

export function getCurriculumForCourse(cursoSlug: string): CursoCurriculum | undefined {
  return curriculum.find((c) => c.cursoSlug === cursoSlug);
}

export function getTotalLecciones(cursoSlug: string): number {
  const curso = getCurriculumForCourse(cursoSlug);
  if (!curso) return 0;
  return curso.modulos.reduce((total, m) => total + m.lecciones.length, 0);
}

export function findLeccion(cursoSlug: string, leccionId: string): Leccion | undefined {
  const curso = getCurriculumForCourse(cursoSlug);
  if (!curso) return undefined;
  for (const modulo of curso.modulos) {
    const leccion = modulo.lecciones.find((l) => l.id === leccionId);
    if (leccion) return leccion;
  }
  return undefined;
}

// Primera lección sin completar, recorriendo módulos y lecciones en orden.
// Devuelve null si el alumno ya completó todo el curso.
export function getPrimeraLeccionPendiente(
  cursoSlug: string,
  leccionesCompletadasIds: string[]
): Leccion | null {
  const curso = getCurriculumForCourse(cursoSlug);
  if (!curso) return null;
  const completadas = new Set(leccionesCompletadasIds);
  for (const modulo of curso.modulos) {
    for (const leccion of modulo.lecciones) {
      if (!completadas.has(leccion.id)) return leccion;
    }
  }
  return null;
}
