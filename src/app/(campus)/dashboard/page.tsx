import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import { getCursosDelAlumno } from "@/lib/campus/data";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null; // el layout ya protege esta ruta

  const cursos = await getCursosDelAlumno(user.id);
  const promedio = cursos.length
    ? Math.round(
        cursos.reduce((acc, c) => acc + c.porcentaje, 0) / cursos.length
      )
    : 0;
  const nombre = (user.user_metadata?.nombre as string | undefined)?.split(
    " "
  )[0];

  return (
    <div>
      <h1 className="text-2xl font-semibold text-violet-dark">
        Hola{nombre ? `, ${nombre}` : ""} 👋
      </h1>
      <p className="mt-1 text-sm text-ink-secondary">
        {cursos.length === 0
          ? "Todavía no tenés cursos activos."
          : `Tenés ${cursos.length} curso${
              cursos.length > 1 ? "s" : ""
            } activo${cursos.length > 1 ? "s" : ""}, con un ${promedio}% de avance promedio.`}
      </p>

      {cursos.length > 0 && (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {cursos.map((curso) => (
            <Link
              key={curso.cursoSlug}
              href={`/mis-cursos/${curso.cursoSlug}`}
              className="rounded-xl border border-violet-border p-5 transition hover:border-violet"
            >
              <p className="text-xs uppercase tracking-wide text-ink-secondary">
                {curso.nivel}
              </p>
              <h2 className="mt-1 text-lg font-semibold text-violet-dark">
                {curso.titulo}
              </h2>
              <div className="mt-4 h-2 w-full rounded-full bg-violet-border">
                <div
                  className="h-2 rounded-full bg-violet"
                  style={{ width: `${curso.porcentaje}%` }}
                />
              </div>
              <p className="mt-2 text-xs text-ink-secondary">
                {curso.leccionesCompletadas} / {curso.totalLecciones}{" "}
                lecciones · {curso.porcentaje}%
              </p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
