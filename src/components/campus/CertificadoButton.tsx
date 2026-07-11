"use client";

// src/components/campus/CertificadoButton.tsx
// jsPDF se importa de forma diferida (dynamic import) dentro de generar(),
// no al cargar el módulo — así "Mi Progreso" no arrastra ~130kB de más
// para alumnos que todavía no tienen ningún curso al 100%.

interface Props {
  nombreAlumno: string;
  cursoTitulo: string;
}

export default function CertificadoButton({
  nombreAlumno,
  cursoTitulo,
}: Props) {
  async function generar() {
    const { jsPDF } = await import("jspdf");
    const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a4" });
    const width = doc.internal.pageSize.getWidth();
    const height = doc.internal.pageSize.getHeight();

    // Marco
    doc.setDrawColor(98, 55, 124); // violet DEFAULT
    doc.setLineWidth(1.2);
    doc.rect(10, 10, width - 20, height - 20);

    doc.setTextColor(83, 46, 105); // violet dark
    doc.setFont("helvetica", "bold");
    doc.setFontSize(28);
    doc.text("Certificado de finalización", width / 2, 50, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(60, 60, 60);
    doc.text("Este certificado acredita que", width / 2, 70, { align: "center" });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(22);
    doc.setTextColor(98, 55, 124);
    doc.text(nombreAlumno, width / 2, 85, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(14);
    doc.setTextColor(60, 60, 60);
    doc.text("completó satisfactoriamente el curso", width / 2, 100, {
      align: "center",
    });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.setTextColor(98, 55, 124);
    doc.text(cursoTitulo, width / 2, 112, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(11);
    doc.setTextColor(107, 93, 117);
    const fecha = new Date().toLocaleDateString("es-AR", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
    doc.text(`Emitido el ${fecha} · Next Ezeiza`, width / 2, height - 25, {
      align: "center",
    });

    const nombreArchivo = `certificado-${cursoTitulo
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-z0-9]+/g, "-")}.pdf`;

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
