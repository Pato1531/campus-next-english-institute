// src/lib/campus/data.ts
// Combina datos de Supabase (inscripciones, progreso_lecciones) con el
// contenido estático de curriculum.ts para armar lo que necesitan las
// pantallas del campus.

import { createClient } from "@/lib/supabase/server";
import { getCurriculumForCourse, getTotalLecciones } from "@/data/curriculum";

// El acceso a un curso dura 6 meses desde que se creó la inscripción
// (fecha en la que el webhook de MP dio de alta al alumno tras el pago).
export const MESES_DE_ACCESO = 6;

function calcularFechaVencimiento(fechaInscripcion: string): Date {
  const fecha = new Date(fechaInscripcion);
  fecha.setMonth(fecha.getMonth() + MESES_DE_ACCESO);
  return fecha;
}

function estaVencido(fechaInscripcion: string): boolean {
  return calcularFechaVencimiento(fechaInscripcion).getTime() < Date.now();
}

export interface CursoConProgreso {
  cursoSlug: string;
  titulo: string;
  nivel: string;
  totalLecciones: number;
  leccionesCompletadas: number;
  porcentaje: number;
  vencido: boolean;
  fechaVencimiento: string; // ISO, para mostrar "vence el ..." en la UI si hace falta
}

export async function getCursosDelAlumno(
  alumnoId: string
): Promise<CursoConProgreso[]> {
  const supabase = await createClient();

  const { data: inscripciones } = await supabase
    .from("inscripciones")
    .select("curso_slug, creado_en")
    .eq("alumno_id", alumnoId);

  if (!inscripciones || inscripciones.length === 0) return [];

  const { data: progreso } = await supabase
    .from("progreso_lecciones")
    .select("curso_slug")
    .eq("alumno_id", alumnoId)
    .eq("completada", true);

  return inscripciones.map(({ curso_slug, creado_en }) => {
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
      vencido: estaVencido(creado_en),
      fechaVencimiento: calcularFechaVencimiento(creado_en).toISOString(),
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

export interface EstadoInscripcion {
  inscripto: boolean;
  vencido: boolean;
  fechaVencimiento: string | null;
}

export async function getEstadoInscripcion(
  alumnoId: string,
  cursoSlug: string
): Promise<EstadoInscripcion> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("inscripciones")
    .select("creado_en")
    .eq("alumno_id", alumnoId)
    .eq("curso_slug", cursoSlug)
    .maybeSingle();

  if (!data) {
    return { inscripto: false, vencido: false, fechaVencimiento: null };
  }

  return {
    inscripto: true,
    vencido: estaVencido(data.creado_en),
    fechaVencimiento: calcularFechaVencimiento(data.creado_en).toISOString(),
  };
}
