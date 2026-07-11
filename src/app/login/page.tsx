"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Paso = "email" | "codigo";

export default function LoginPage() {
  const router = useRouter();
  const [paso, setPaso] = useState<Paso>("email");
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function pedirCodigo(e: React.FormEvent) {
    e.preventDefault();
    setCargando(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: { shouldCreateUser: false }, // el alta la hace únicamente el webhook de MP
    });

    setCargando(false);
    if (error) {
      setError("No pudimos enviar el código. Si el problema sigue, escribinos.");
      return;
    }
    setPaso("codigo");
  }

  async function verificarCodigo(e: React.FormEvent) {
    e.preventDefault();
    setCargando(true);
    setError(null);

    const supabase = createClient();
    const { error } = await supabase.auth.verifyOtp({
      email: email.trim().toLowerCase(),
      token: codigo.trim(),
      type: "email",
    });

    setCargando(false);
    if (error) {
      setError("Código incorrecto o vencido. Pedí uno nuevo.");
      return;
    }
    router.push("/dashboard");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 text-2xl font-semibold text-violet-dark">
          Ingresá al campus
        </h1>

        {paso === "email" ? (
          <>
            <p className="mb-6 text-sm text-ink-secondary">
              Ingresá el email con el que compraste tu curso. Te mandamos un
              código de acceso de 6 dígitos.
            </p>
            <form onSubmit={pedirCodigo} className="flex flex-col gap-3">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="tu@email.com"
                className="rounded-lg border border-violet-border px-4 py-2.5 text-sm outline-none focus:border-violet"
              />
              <button
                type="submit"
                disabled={cargando}
                className="rounded-lg bg-violet px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-dark disabled:opacity-60"
              >
                {cargando ? "Enviando..." : "Enviarme el código"}
              </button>
              {error && <p className="text-sm text-red-600">{error}</p>}
            </form>
          </>
        ) : (
          <>
            <p className="mb-6 text-sm text-ink-secondary">
              Te mandamos un código de 6 dígitos a{" "}
              <strong>{email}</strong>. Escribilo acá abajo.
            </p>
            <form onSubmit={verificarCodigo} className="flex flex-col gap-3">
              <input
                type="text"
                inputMode="numeric"
                maxLength={6}
                required
                value={codigo}
                onChange={(e) => setCodigo(e.target.value.replace(/\D/g, ""))}
                placeholder="123456"
                className="rounded-lg border border-violet-border px-4 py-2.5 text-center text-lg tracking-[0.3em] outline-none focus:border-violet"
              />
              <button
                type="submit"
                disabled={cargando || codigo.length !== 6}
                className="rounded-lg bg-violet px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-dark disabled:opacity-60"
              >
                {cargando ? "Verificando..." : "Ingresar"}
              </button>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="button"
                onClick={() => {
                  setPaso("email");
                  setCodigo("");
                  setError(null);
                }}
                className="text-xs text-ink-secondary underline"
              >
                Usar otro email
              </button>
            </form>
          </>
        )}
      </div>
    </main>
  );
}
