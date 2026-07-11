import { redirect, notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCurriculumForCourse } from "@/data/curriculum";
import { getLeccionesCompletadasCurso, estaInscripto } from "@/lib/campus/data";
import CursoDetalle from "@/components/campus/CursoDetalle";

export default async function CursoPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  // No alcanza con estar logueado: tiene que estar inscripto a ESTE curso.
  const inscripto = await estaInscripto(user.id, slug);
  if (!inscripto) notFound();

  const curriculumCurso = getCurriculumForCourse(slug);
  if (!curriculumCurso) notFound();

  const completadasIds = await getLeccionesCompletadasCurso(user.id, slug);

  return (
    <CursoDetalle
      curso={curriculumCurso}
      leccionesCompletadasIds={completadasIds}
    />
  );
}
