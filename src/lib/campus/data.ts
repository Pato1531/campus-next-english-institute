// src/lib/campus/data.ts
// Combina datos de Supabase (inscripciones, progreso_lecciones) con el
// contenido estático de curriculum.ts para armar lo que necesitan las
// pantallas del campus.

import { createClient } from "@/lib/supabase/server";
import { getCurriculumForCourse, getTotalLecciones } from "@/data/curriculum";

export interface CursoConProgreso {
  cursoSlug: string;
  titulo: string;
  nivel: string;
  totalLecciones: number;
  leccionesCompletadas: number;
  porcentaje: number;
}

export async function getCursosDelAlumno(
  alumnoId: string
): Promise<CursoConProgreso[]> {
  const supabase = await createClient();

  const { data: inscripciones } = await supabase
    .from("inscripciones")
    .select("curso_slug")
    .eq("alumno_id", alumnoId);

  if (!inscripciones || inscripciones.length === 0) return [];

  const { data: progreso } = await supabase
    .from("progreso_lecciones")
    .select("curso_slug")
    .eq("alumno_id", alumnoId)
    .eq("completada", true);

  return inscripciones.map(({ curso_slug }) => {
    const cursoData = getCurriculumForCourse(curso_slug);
    const totalLecciones = getTotalLecciones(curso_slug);
    const completadas = (progreso ?? []).filter(
      (p) => p.curso_slug === curso_slug
    ).length;

    return {
      cursoSlug: curso_slug,
      titulo: cursoData?.titulo ?? curso_slug,
      nivel: cursoData?.nivel ?? "",
      totalLecciones,
      leccionesCompletadas: completadas,
      porcentaje:
        totalLecciones > 0
          ? Math.round((completadas / totalLecciones) * 100)
          : 0,
    };
  });
}

export async function getLeccionesCompletadasCurso(
  alumnoId: string,
  cursoSlug: string
): Promise<string[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("progreso_lecciones")
    .select("leccion_id")
    .eq("alumno_id", alumnoId)
    .eq("curso_slug", cursoSlug)
    .eq("completada", true);

  return (data ?? []).map((r) => r.leccion_id);
}

export async function estaInscripto(
  alumnoId: string,
  cursoSlug: string
): Promise<boolean> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("inscripciones")
    .select("curso_slug")
    .eq("alumno_id", alumnoId)
    .eq("curso_slug", cursoSlug)
    .maybeSingle();

  return !!data;
}
