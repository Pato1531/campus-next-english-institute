import Link from "next/link";
import { createClient } from "@/lib/supabase/server";
import {
  getCursosDelAlumno,
  getLeccionesCompletadasCurso,
} from "@/lib/campus/data";
import { getPrimeraLeccionPendiente } from "@/data/curriculum";
import CourseCard from "@/components/campus/CourseCard";
import ProgressRing from "@/components/campus/ProgressRing";

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

  // El curso "en curso": el primero que no esté 100% completo.
  const cursoEnCurso = cursos.find((c) => c.porcentaje < 100) ?? null;
  let proximaLeccion = null;
  if (cursoEnCurso) {
    const completadasIds = await getLeccionesCompletadasCurso(
      user.id,
      cursoEnCurso.cursoSlug
    );
    proximaLeccion = getPrimeraLeccionPendiente(
      cursoEnCurso.cursoSlug,
      completadasIds
    );
  }

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

      {cursoEnCurso && proximaLeccion && (
        <Link
          href={`/mis-cursos/${cursoEnCurso.cursoSlug}`}
          className="mt-8 flex flex-col items-start gap-4 rounded-2xl bg-violet-light2 p-6 transition hover:bg-violet-light sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-violet-dark/70">
              Seguí donde lo dejaste
            </p>
            <h2 className="mt-1 text-lg font-semibold text-violet-dark">
              {proximaLeccion.titulo}
            </h2>
            <p className="mt-1 text-sm text-ink-secondary">
              {cursoEnCurso.titulo}
            </p>
          </div>
          <ProgressRing porcentaje={cursoEnCurso.porcentaje} />
        </Link>
      )}

      {cursos.length === 0 ? (
        <p className="mt-8 text-sm text-ink-secondary">
          Todavía no tenés cursos activos. Podés inscribirte en{" "}
          <a
            href="https://nextezeiza.com"
            className="font-medium text-violet underline"
          >
            nextezeiza.com
          </a>
          .
        </p>
      ) : (
        <div className="mt-10">
          <h2 className="mb-4 text-xs font-semibold uppercase tracking-wide text-ink-secondary">
            Tus cursos
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {cursos.map((curso) => (
              <CourseCard key={curso.cursoSlug} {...curso} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
