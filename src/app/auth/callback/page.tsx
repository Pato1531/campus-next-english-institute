"use client";

// src/app/auth/callback/page.tsx
// Reemplaza al viejo route.ts (server-side). Tiene que ser client-side
// porque el flujo de invitación (inviteUserByEmail, disparado desde el
// webhook) genera links con el token en el fragmento (#access_token=...),
// y el fragmento de una URL NUNCA llega al servidor — solo el navegador
// puede leerlo. El login manual (signInWithOtp) en cambio genera links
// con ?code=..., que también manejamos acá mismo por simplicidad.

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function AuthCallbackPage() {
  const router = useRouter();
  const [error, setError] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    let cancelado = false;

    async function completarLogin() {
      // Caso 1: link con ?code=... (login manual desde /login)
      const params = new URLSearchParams(window.location.search);
      const code = params.get("code");

      if (code) {
        const { error } = await supabase.auth.exchangeCodeForSession(code);
        if (!cancelado) {
          if (error) setError(true);
          else router.replace("/dashboard");
        }
        return;
      }

      // Caso 2: link con #access_token=... (invitación del webhook)
      // El cliente de Supabase procesa el hash solo al inicializarse.
      const { data } = await supabase.auth.getSession();
      if (data.session) {
        router.replace("/dashboard");
        return;
      }

      // Por si el procesamiento del hash tarda un instante.
      const { data: listener } = supabase.auth.onAuthStateChange(
        (_event, session) => {
          if (session && !cancelado) router.replace("/dashboard");
        }
      );

      setTimeout(() => {
        if (!cancelado) setError(true);
      }, 4000);

      return () => listener.subscription.unsubscribe();
    }

    completarLogin();
    return () => {
      cancelado = true;
    };
  }, [router]);

  if (error) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-white px-4">
        <div className="max-w-sm text-center">
          <p className="text-sm text-red-600">
            El enlace venció o ya se usó. Pedí uno nuevo desde el login.
          </p>
          <a
            href="/login"
            className="mt-4 inline-block text-sm text-violet underline"
          >
            Volver al login
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-white px-4">
      <p className="text-sm text-ink-secondary">Ingresando al campus…</p>
    </main>
  );
}
