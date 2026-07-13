"use client";

import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

type Paso = "email" | "codigo";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [paso, setPaso] = useState<Paso>("email");
  const [email, setEmail] = useState("");
  const [codigo, setCodigo] = useState("");
  const [cargando, setCargando] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Si el link del mail trae el email (?email=...), lo pre-cargamos y
  // saltamos directo al paso del código — así el alumno no tiene que
  // volver a tipear el mail ni disparamos un código nuevo sin necesidad.
  useEffect(() => {
    const emailDeLaUrl = searchParams.get("email");
    if (emailDeLaUrl) {
      setEmail(decodeURIComponent(emailDeLaUrl));
      setPaso("codigo");
    }
  }, [searchParams]);

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
    <main className="flex min-h-screen items-center justify-center bg-violet-light px-4">
      <div className="w-full max-w-sm rounded-2xl border border-violet-border bg-white p-8">
        <h1 className="mb-2 text-2xl font-semibold text-violet-dark">
          Ingresá al campus
        </h1>

        {paso === "email" ? (
          <>
            <p className="mb-6 text-sm text-ink-secondary">
              Ingresá el email con el que compraste tu curso. Te mandamos un
              código de acceso.
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
              Te mandamos un código de acceso a{" "}
              <strong>{email}</strong>. Escribilo acá abajo.
            </p>
            <form onSubmit={verificarCodigo} className="flex flex-col gap-3">
              <input
                type="text"
                inputMode="numeric"
                maxLength={8}
                required
                autoFocus
                value={codigo}
                onChange={(e) => setCodigo(e.target.value.replace(/\D/g, ""))}
                placeholder="12345678"
                className="rounded-lg border border-violet-border px-4 py-2.5 text-center text-lg tracking-[0.3em] outline-none focus:border-violet"
              />
              <button
                type="submit"
                disabled={cargando || codigo.length < 6}
                className="rounded-lg bg-violet px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-dark disabled:opacity-60"
              >
                {cargando ? "Verificando..." : "Ingresar"}
              </button>
              {error && <p className="text-sm text-red-600">{error}</p>}
              <button
                type="button"
                onClick={() => {
                  setPaso("email");
                  setEmail("");
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

export default function LoginPage() {
  return (
    <Suspense fallback={null}>
      <LoginForm />
    </Suspense>
  );
}
