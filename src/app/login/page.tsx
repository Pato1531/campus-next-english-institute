"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [estado, setEstado] = useState<"idle" | "enviando" | "enviado" | "error">(
    "idle"
  );

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setEstado("enviando");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithOtp({
      email: email.trim().toLowerCase(),
      options: {
        emailRedirectTo: `${window.location.origin}/auth/callback`,
        shouldCreateUser: false, // el alta la hace únicamente el webhook de MP
      },
    });

    setEstado(error ? "error" : "enviado");
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <div className="w-full max-w-sm">
        <h1 className="mb-2 text-2xl font-semibold text-violet-dark">
          Ingresá al campus
        </h1>
        <p className="mb-6 text-sm text-ink-secondary">
          Ingresá el email con el que compraste tu curso. Te mandamos un
          enlace de acceso, sin contraseña.
        </p>

        {estado === "enviado" ? (
          <div className="rounded-lg border border-violet-border bg-violet-border/20 p-4 text-sm text-violet-dark">
            Listo. Revisá tu email — el enlace te lleva directo al campus.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
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
              disabled={estado === "enviando"}
              className="rounded-lg bg-violet px-4 py-2.5 text-sm font-medium text-white transition hover:bg-violet-dark disabled:opacity-60"
            >
              {estado === "enviando" ? "Enviando..." : "Enviarme el acceso"}
            </button>

            {estado === "error" && (
              <p className="text-sm text-red-600">
                No pudimos enviar el enlace. Si el problema sigue, escribinos.
              </p>
            )}
          </form>
        )}
      </div>
    </main>
  );
}
