"use client";

// src/components/campus/CursoDetalle.tsx
import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import type { CursoCurriculum, Leccion } from "@/data/curriculum";
import Quiz from "@/components/campus/Quiz";

interface Props {
  curso: CursoCurriculum;
  leccionesCompletadasIds: string[];
}

export default function CursoDetalle({ curso, leccionesCompletadasIds }: Props) {
  const [completadas, setCompletadas] = useState(
    new Set(leccionesCompletadasIds)
  );
  const todasLasLecciones = curso.modulos.flatMap((m) => m.lecciones);
  const [leccionActiva, setLeccionActiva] = useState<Leccion | null>(
    todasLasLecciones[0] ?? null
  );
  const [guardando, setGuardando] = useState(false);
  const [recienCompletada, setRecienCompletada] = useState(false);

  const totalLecciones = todasLasLecciones.length;
  const porcentaje =
    totalLecciones > 0
      ? Math.round((completadas.size / totalLecciones) * 100)
      : 0;

  const indiceActual = leccionActiva
    ? todasLasLecciones.findIndex((l) => l.id === leccionActiva.id)
    : -1;
  const siguienteLeccion =
    indiceActual >= 0 ? (todasLasLecciones[indiceActual + 1] ?? null) : null;

  function seleccionarLeccion(leccion: Leccion) {
    setLeccionActiva(leccion);
    setRecienCompletada(false);
  }

  async function marcarCompletada(leccionId: string) {
    setGuardando(true);
    const supabase = createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      setGuardando(false);
      return;
    }

    const { error } = await supabase.from("progreso_lecciones").upsert(
      {
        alumno_id: user.id,
        curso_slug: curso.cursoSlug,
        leccion_id: leccionId,
        completada: true,
        completada_en: new Date().toISOString(),
      },
      { onConflict: "alumno_id,curso_slug,leccion_id" }
    );

    setGuardando(false);
    if (!error) {
      setCompletadas((prev) => new Set(prev).add(leccionId));
      setRecienCompletada(true);
    }
  }

  return (
    <div>
      <p className="text-xs uppercase tracking-wide text-ink-secondary">
        {curso.nivel}
      </p>
      <h1 className="mt-1 text-2xl font-semibold text-violet-dark">
        {curso.titulo}
      </h1>
      <div className="mt-3 h-1.5 w-full max-w-md overflow-hidden rounded-full bg-violet-border">
        <div
          className="h-full rounded-full bg-violet motion-safe:transition-[width] motion-safe:duration-500"
          style={{ width: `${porcentaje}%` }}
        />
      </div>
      <p className="mt-1 text-xs text-ink-secondary">
        {completadas.size} / {totalLecciones} lecciones · {porcentaje}%
      </p>

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Lista de módulos y lecciones */}
        <nav aria-label="Módulos del curso" className="space-y-6">
          {curso.modulos.map((modulo) => (
            <div key={modulo.id}>
              <h3 className="mb-2 text-sm font-semibold text-violet-dark">
                {modulo.titulo}
              </h3>
              <ul className="space-y-1">
                {modulo.lecciones.map((leccion) => {
                  const hecha = completadas.has(leccion.id);
                  const activa = leccionActiva?.id === leccion.id;
                  return (
                    <li key={leccion.id}>
                      <button
                        onClick={() => seleccionarLeccion(leccion)}
                        aria-current={activa ? "true" : undefined}
                        className={`flex w-full items-center gap-2 rounded-lg px-3 py-2 text-left text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet ${
                          activa
                            ? "bg-violet-light2 text-violet-dark"
                            : "text-ink-secondary hover:bg-violet-light2/60"
                        }`}
                      >
                        <span
                          className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full text-[10px] ${
                            hecha
                              ? "bg-violet text-white"
                              : "border border-violet-border text-ink-secondary"
                          }`}
                        >
                          {hecha ? "✓" : leccion.orden}
                        </span>
                        {leccion.titulo}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          ))}
        </nav>

        {/* Lección activa */}
        {leccionActiva && (
          <div>
            <p className="text-xs text-ink-secondary">
              Lección {indiceActual + 1} de {totalLecciones}
            </p>
            <h2 className="mt-1 text-lg font-semibold text-violet-dark">
              {leccionActiva.titulo}
            </h2>

            <div className="mt-4 aspect-video w-full overflow-hidden rounded-xl bg-black">
              <iframe
                key={leccionActiva.id}
                src={toEmbedUrl(leccionActiva.videoUrl)}
                title={leccionActiva.titulo}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              <a
                href={leccionActiva.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-lg border border-violet-border px-4 py-2 text-sm text-violet-dark transition hover:border-violet focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
              >
                Descargar material de estudio (PDF)
              </a>

              {(!leccionActiva.preguntas ||
                leccionActiva.preguntas.length === 0) && (
                <button
                  onClick={() => marcarCompletada(leccionActiva.id)}
                  disabled={guardando || completadas.has(leccionActiva.id)}
                  className="rounded-lg bg-violet px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-dark disabled:opacity-60 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-dark"
                >
                  {completadas.has(leccionActiva.id)
                    ? "Lección completada ✓"
                    : guardando
                      ? "Guardando..."
                      : "Marcar como completada"}
                </button>
              )}

              {siguienteLeccion && (
                <button
                  onClick={() => seleccionarLeccion(siguienteLeccion)}
                  className="text-sm font-medium text-violet-dark underline decoration-violet-border underline-offset-2 hover:decoration-violet"
                >
                  Siguiente lección →
                </button>
              )}
            </div>

            {leccionActiva.preguntas && leccionActiva.preguntas.length > 0 && (
              <div className="mt-6">
                <Quiz
                  key={leccionActiva.id}
                  preguntas={leccionActiva.preguntas}
                  bloqueado={completadas.has(leccionActiva.id)}
                  onAprobado={() => marcarCompletada(leccionActiva.id)}
                />
              </div>
            )}


            <p
              role="status"
              className={`mt-3 text-sm text-violet-dark transition-opacity duration-300 ${
                recienCompletada ? "opacity-100" : "opacity-0"
              }`}
            >
              ¡Bien ahí! Quedó guardada como completada.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function toEmbedUrl(url: string): string {
  // Convierte una URL normal de YouTube (watch?v=ID) a formato embed.
  const match = url.match(/(?:v=|youtu\.be\/)([\w-]{11})/);
  if (!match) return url;
  return `https://www.youtube.com/embed/${match[1]}`;
}
