"use client";

// src/components/campus/CertificadoButton.tsx
// jsPDF se importa de forma diferida (dynamic import) dentro de generar(),
// no al cargar el módulo — así "Mi Progreso" no arrastra ~130kB de más
// para alumnos que todavía no tienen ningún curso al 100%.

import { trackEvent } from "@/lib/gtag";

interface Props {
  nombreAlumno: string;
  cursoTitulo: string;
  cursoNivel: string;
  totalLecciones: number;
}

const VIOLET = [98, 55, 124] as const;
const VIOLET_DARK = [83, 46, 105] as const;
const INK = [40, 38, 42] as const;
const INK_SECONDARY = [107, 93, 117] as const;

function generarNumeroCertificado(cursoTitulo: string): string {
  const prefijo = cursoTitulo
    .replace(/[^a-zA-Z]/g, "")
    .toUpperCase()
    .slice(0, 3);
  const año = new Date().getFullYear();
  const sufijo = Math.random().toString(36).slice(2, 7).toUpperCase();
  return `NEZ-${prefijo}-${año}-${sufijo}`;
}

export default function CertificadoButton({
  nombreAlumno,
  cursoTitulo,
  cursoNivel,
  totalLecciones,
}: Props) {
  async function generar() {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();
    const centerX = width / 2;

    // ---- Fondo y bordes decorativos (doble línea, look formal) ----
    doc.setFillColor(255, 255, 255);
    doc.rect(0, 0, width, height, "F");

    doc.setDrawColor(...VIOLET);
    doc.setLineWidth(1);
    doc.rect(8, 8, width - 16, height - 16);

    doc.setLineWidth(0.3);
    doc.rect(11.5, 11.5, width - 23, height - 23);

    // Esquinas ornamentales simples
    const esquinas: [number, number, number, number][] = [
      [8, 8, 18, 8],
      [8, 8, 8, 18],
      [width - 8, 8, width - 18, 8],
      [width - 8, 8, width - 8, 18],
      [8, height - 8, 18, height - 8],
      [8, height - 8, 8, height - 18],
      [width - 8, height - 8, width - 18, height - 8],
      [width - 8, height - 8, width - 8, height - 18],
    ];
    doc.setDrawColor(...VIOLET);
    doc.setLineWidth(1.2);
    esquinas.forEach(([x1, y1, x2, y2]) => doc.line(x1, y1, x2, y2));

    // ---- Sello circular con "N" ----
    const selloY = 30;
    doc.setDrawColor(...VIOLET);
    doc.setLineWidth(0.8);
    doc.circle(centerX, selloY, 11, "S");
    doc.setLineWidth(0.3);
    doc.circle(centerX, selloY, 8.7, "S");
    doc.setFont("times", "bold");
    doc.setFontSize(20);
    doc.setTextColor(...VIOLET);
    doc.text("N", centerX, selloY + 3, { align: "center" });

    // ---- Encabezado institucional ----
    doc.setFont("helvetica", "normal");
    doc.setFontSize(10);
    doc.setTextColor(...INK_SECONDARY);
    doc.text("NEXT ENGLISH INSTITUTE", centerX, 50, { align: "center" });
    doc.setFontSize(8.5);
    doc.text("Ezeiza, Buenos Aires, Argentina", centerX, 55, { align: "center" });

    // ---- Título ----
    doc.setFont("times", "bold");
    doc.setFontSize(30);
    doc.setTextColor(...VIOLET_DARK);
    doc.text("Certificado de Finalización", centerX, 72, { align: "center" });

    doc.setDrawColor(...VIOLET);
    doc.setLineWidth(0.4);
    doc.line(centerX - 30, 76, centerX + 30, 76);

    // ---- Cuerpo ----
    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(...INK);
    doc.text("Se certifica que", centerX, 90, { align: "center" });

    doc.setFont("times", "bolditalic");
    doc.setFontSize(24);
    doc.setTextColor(...VIOLET_DARK);
    doc.text(nombreAlumno, centerX, 103, { align: "center" });

    doc.setDrawColor(...INK_SECONDARY);
    doc.setLineWidth(0.2);
    const nombreAncho = Math.max(
      doc.getTextWidth(nombreAlumno) + 20,
      70
    );
    doc.line(centerX - nombreAncho / 2, 107, centerX + nombreAncho / 2, 107);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(12);
    doc.setTextColor(...INK);
    doc.text(
      "completó satisfactoriamente el curso",
      centerX,
      118,
      { align: "center" }
    );

    doc.setFont("times", "bold");
    doc.setFontSize(19);
    doc.setTextColor(...VIOLET_DARK);
    doc.text(cursoTitulo, centerX, 129, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(10.5);
    doc.setTextColor(...INK_SECONDARY);
    doc.text(
      `Nivel ${cursoNivel} · ${totalLecciones} lecciones completadas`,
      centerX,
      136,
      { align: "center" }
    );

    // ---- Pie: firma + fecha + número de certificado ----
    const fecha = new Date().toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    const numeroCertificado = generarNumeroCertificado(cursoTitulo);
    const pieY = height - 32;

    // Firma (izquierda)
    doc.setDrawColor(...INK_SECONDARY);
    doc.setLineWidth(0.25);
    doc.line(40, pieY, 100, pieY);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...INK);
    doc.text("Next English Institute", 70, pieY + 5, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...INK_SECONDARY);
    doc.text("Dirección Académica", 70, pieY + 9.5, { align: "center" });

    // Fecha (centro)
    doc.line(centerX - 30, pieY, centerX + 30, pieY);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...INK);
    doc.text(fecha, centerX, pieY + 5, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...INK_SECONDARY);
    doc.text("Fecha de emisión", centerX, pieY + 9.5, { align: "center" });

    // N° de certificado (derecha)
    doc.line(width - 100, pieY, width - 40, pieY);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(...INK);
    doc.text(numeroCertificado, width - 70, pieY + 5, { align: "center" });
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8);
    doc.setTextColor(...INK_SECONDARY);
    doc.text("N.º de certificado", width - 70, pieY + 9.5, { align: "center" });

    const nombreArchivo = `certificado-${cursoTitulo
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")}.pdf`;

    trackEvent("generate_certificate", { curso: cursoTitulo });

    doc.save(nombreArchivo);
  }

  return (
    <button
      onClick={generar}
      className="rounded-lg bg-violet px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet-dark"
    >
      Descargar certificado
    </button>
  );
}
