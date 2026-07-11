"use client";

// src/components/campus/CourseCard.tsx
import { useState } from "react";
import Link from "next/link";

interface Props {
  cursoSlug: string;
  titulo: string;
  nivel: string;
  porcentaje: number;
  leccionesCompletadas: number;
  totalLecciones: number;
}

// Reutiliza las portadas que ya existen en la landing — sin duplicar
// archivos entre los dos repos.
const LANDING_IMG_BASE =
  "https://landing-next-english-institute.vercel.app/images/elearning";

export default function CourseCard({
  cursoSlug,
  titulo,
  nivel,
  porcentaje,
  leccionesCompletadas,
  totalLecciones,
}: Props) {
  const [imgError, setImgError] = useState(false);

  return (
    <Link
      href={`/mis-cursos/${cursoSlug}`}
      className="group overflow-hidden rounded-2xl border border-violet-border bg-white transition motion-safe:hover:-translate-y-0.5 hover:shadow-md focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet"
    >
      <div className="relative aspect-video w-full overflow-hidden bg-violet-light2">
        {!imgError ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={`${LANDING_IMG_BASE}/${cursoSlug}.jpg`}
            alt=""
            onError={() => setImgError(true)}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <span className="text-3xl font-semibold text-violet/30">
              {titulo.charAt(0)}
            </span>
          </div>
        )}
      </div>
      <div className="p-5">
        <p className="text-xs font-medium uppercase tracking-wide text-ink-secondary">
          {nivel}
        </p>
        <h3 className="mt-1 font-semibold text-violet-dark">{titulo}</h3>
        <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-violet-border">
          <div
            className="h-full rounded-full bg-violet motion-safe:transition-[width] motion-safe:duration-500"
            style={{ width: `${porcentaje}%` }}
          />
        </div>
        <p className="mt-2 text-xs text-ink-secondary">
          {leccionesCompletadas} / {totalLecciones} lecciones · {porcentaje}%
        </p>
      </div>
    </Link>
  );
}
