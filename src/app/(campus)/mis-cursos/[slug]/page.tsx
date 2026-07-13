import Link from "next/link";
import { redirect, notFound } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { getCurriculumForCourse } from "@/data/curriculum";
import {
  getLeccionesCompletadasCurso,
  getEstadoInscripcion,
} from "@/lib/campus/data";
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

  const curriculumCurso = getCurriculumForCourse(slug);
  if (!curriculumCurso) notFound();

  // No alcanza con estar logueado: tiene que estar inscripto a ESTE curso,
  // y el acceso (6 meses desde la inscripción) tiene que seguir vigente.
  const estado = await getEstadoInscripcion(user.id, slug);
  if (!estado.inscripto) notFound();

  if (estado.vencido) {
    const fecha = estado.fechaVencimiento
      ? new Date(estado.fechaVencimiento).toLocaleDateString("es-AR", {
          year: "numeric",
          month: "long",
          day: "numeric",
        })
      : "";

    return (
      <div className="rounded-2xl border border-violet-border bg-white p-8 text-center">
        <h1 className="text-xl font-semibold text-violet-dark">
          Tu acceso a este curso venció
        </h1>
        <p className="mt-2 text-sm text-ink-secondary">
          El acceso a <strong>{curriculumCurso.titulo}</strong> duraba 6
          meses desde tu inscripción y venció el {fecha}.
        </p>
        <p className="mt-4 text-sm text-ink-secondary">
          Tu progreso y tu certificado (si ya completaste el curso) siguen
          disponibles en{" "}
          <Link href="/mi-progreso" className="font-medium text-violet underline">
            Mi Progreso
          </Link>
          . Si querés retomar el curso, escribinos para renovar tu acceso.
        </p>
      </div>
    );
  }

  const completadasIds = await getLeccionesCompletadasCurso(user.id, slug);

  return (
    <CursoDetalle
      curso={curriculumCurso}
      leccionesCompletadasIds={completadasIds}
    />
  );
}
