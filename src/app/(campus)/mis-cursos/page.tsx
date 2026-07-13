import { createClient } from "@/lib/supabase/server";
import { getCursosDelAlumno } from "@/lib/campus/data";
import CourseCard from "@/components/campus/CourseCard";

export default async function MisCursosPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) return null;

  const cursos = await getCursosDelAlumno(user.id);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-violet-dark">Mis cursos</h1>

      {cursos.length === 0 ? (
        <p className="mt-4 text-sm text-ink-secondary">
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
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {cursos.map((curso) => (
            <CourseCard key={curso.cursoSlug} {...curso} />
          ))}
        </div>
      )}
    </div>
  );
}
