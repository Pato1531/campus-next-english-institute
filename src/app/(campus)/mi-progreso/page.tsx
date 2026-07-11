import { createClient } from "@/lib/supabase/server";
import { getCursosDelAlumno } from "@/lib/campus/data";

export default async function MiProgresoPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const cursos = await getCursosDelAlumno(user.id);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-violet-dark">Mi progreso</h1>

      {cursos.length === 0 ? (
        <p className="mt-4 text-sm text-ink-secondary">
          Todavía no tenés cursos activos.
        </p>
      ) : (
        <div className="mt-6 space-y-6">
          {cursos.map((curso) => (
            <div
              key={curso.cursoSlug}
              className="rounded-xl border border-violet-border p-5"
            >
              <div className="flex items-center justify-between">
                <h2 className="font-semibold text-violet-dark">
                  {curso.titulo}
                </h2>
                <span className="text-sm text-ink-secondary">
                  {curso.porcentaje}%
                </span>
              </div>
              <div className="mt-3 h-2 w-full rounded-full bg-violet-border">
                <div
                  className="h-2 rounded-full bg-violet"
                  style={{ width: `${curso.porcentaje}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-ink-secondary">
                {curso.leccionesCompletadas} de {curso.totalLecciones}{" "}
                lecciones completadas
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
