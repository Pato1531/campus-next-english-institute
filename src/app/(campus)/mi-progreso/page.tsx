import { createClient } from "@/lib/supabase/server";
import { getCursosDelAlumno } from "@/lib/campus/data";
import CertificadoButton from "@/components/campus/CertificadoButton";

export default async function MiProgresoPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const cursos = await getCursosDelAlumno(user.id);
  const nombreAlumno =
    (user.user_metadata?.nombre as string | undefined) ?? user.email ?? "";
  const totalLecciones = cursos.reduce((acc, c) => acc + c.totalLecciones, 0);
  const totalCompletadas = cursos.reduce(
    (acc, c) => acc + c.leccionesCompletadas,
    0
  );
  const promedio = cursos.length
    ? Math.round(
        cursos.reduce((acc, c) => acc + c.porcentaje, 0) / cursos.length
      )
    : 0;

  return (
    <div>
      <h1 className="text-2xl font-semibold text-violet-dark">Mi progreso</h1>

      {cursos.length === 0 ? (
        <p className="mt-4 text-sm text-ink-secondary">
          Todavía no tenés cursos activos.
        </p>
      ) : (
        <>
          <div className="mt-4 flex flex-wrap gap-8 rounded-2xl bg-violet-light2 p-6">
            <div>
              <p className="text-2xl font-semibold text-violet-dark">
                {promedio}%
              </p>
              <p className="text-xs text-ink-secondary">avance promedio</p>
            </div>
            <div>
              <p className="text-2xl font-semibold text-violet-dark">
                {totalCompletadas} / {totalLecciones}
              </p>
              <p className="text-xs text-ink-secondary">
                lecciones completadas
              </p>
            </div>
          </div>

          <div className="mt-6 space-y-4">
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
                <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-violet-border">
                  <div
                    className="h-full rounded-full bg-violet motion-safe:transition-[width] motion-safe:duration-500"
                    style={{ width: `${curso.porcentaje}%` }}
                  />
                </div>
                <p className="mt-2 text-xs text-ink-secondary">
                  {curso.leccionesCompletadas} de {curso.totalLecciones}{" "}
                  lecciones completadas
                </p>

                {curso.porcentaje === 100 && (
                  <div className="mt-4">
                    <CertificadoButton
                      nombreAlumno={nombreAlumno}
                      cursoTitulo={curso.titulo}
                      cursoNivel={curso.nivel}
                      totalLecciones={curso.totalLecciones}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
