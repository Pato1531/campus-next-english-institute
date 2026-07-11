"use client";

// src/components/campus/Quiz.tsx
import { useState } from "react";
import type { Pregunta } from "@/data/curriculum";

interface Props {
  preguntas: Pregunta[];
  onAprobado: () => void;
  bloqueado?: boolean; // ya se aprobó antes, no hace falta rendir de nuevo
}

export default function Quiz({ preguntas, onAprobado, bloqueado }: Props) {
  const [respuestas, setRespuestas] = useState<Record<string, number>>({});
  const [corregido, setCorregido] = useState(false);
  const [aprobado, setAprobado] = useState(false);

  const todasRespondidas = preguntas.every(
    (p) => respuestas[p.id] !== undefined
  );

  function elegir(preguntaId: string, indiceOpcion: number) {
    if (corregido) return;
    setRespuestas((prev) => ({ ...prev, [preguntaId]: indiceOpcion }));
  }

  function corregir() {
    const todasCorrectas = preguntas.every((p) => {
      const elegida = respuestas[p.id];
      return elegida !== undefined && p.opciones[elegida]?.correcta;
    });
    setCorregido(true);
    setAprobado(todasCorrectas);
    if (todasCorrectas) onAprobado();
  }

  function reintentar() {
    setCorregido(false);
    setAprobado(false);
    setRespuestas({});
  }

  if (bloqueado) {
    return (
      <div className="rounded-xl border border-violet-border bg-white p-5">
        <p className="text-sm font-medium text-violet-dark">
          Mini test aprobado ✓
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6 rounded-xl border border-violet-border bg-white p-5">
      <h3 className="text-sm font-semibold text-violet-dark">Mini test</h3>

      {preguntas.map((pregunta, pi) => {
        const elegida = respuestas[pregunta.id];
        return (
          <div key={pregunta.id}>
            <p className="text-sm font-medium text-ink-secondary">
              {pi + 1}. {pregunta.enunciado}
            </p>
            <div className="mt-2 space-y-1.5">
              {pregunta.opciones.map((opcion, oi) => {
                const seleccionada = elegida === oi;
                let estilo =
                  "border-violet-border text-ink-secondary hover:border-violet";
                if (corregido && seleccionada) {
                  estilo = opcion.correcta
                    ? "border-green-600 bg-green-50 text-green-800"
                    : "border-red-600 bg-red-50 text-red-800";
                } else if (corregido && opcion.correcta) {
                  estilo = "border-green-600 bg-green-50 text-green-800";
                } else if (seleccionada) {
                  estilo = "border-violet bg-violet-light2 text-violet-dark";
                }
                return (
                  <button
                    key={oi}
                    type="button"
                    onClick={() => elegir(pregunta.id, oi)}
                    disabled={corregido}
                    className={`block w-full rounded-lg border px-3 py-2 text-left text-sm transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-violet ${estilo}`}
                  >
                    {opcion.texto}
                  </button>
                );
              })}
            </div>
          </div>
        );
      })}

      {!corregido ? (
        <button
          onClick={corregir}
          disabled={!todasRespondidas}
          className="rounded-lg bg-violet px-4 py-2 text-sm font-medium text-white transition hover:bg-violet-dark disabled:opacity-50"
        >
          Corregir
        </button>
      ) : aprobado ? (
        <p className="text-sm font-medium text-green-700">
          ¡Aprobaste! La lección quedó marcada como completada.
        </p>
      ) : (
        <div>
          <p className="mb-2 text-sm font-medium text-red-700">
            Alguna respuesta no es correcta — fijate cuáles quedaron en verde
            y probá de nuevo.
          </p>
          <button
            onClick={reintentar}
            className="rounded-lg border border-violet-border px-4 py-2 text-sm text-violet-dark transition hover:border-violet"
          >
            Intentar de nuevo
          </button>
        </div>
      )}
    </div>
  );
}
