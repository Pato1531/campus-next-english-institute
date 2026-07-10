// src/app/auth/callback/route.ts
// Acá aterriza el alumno al tocar el link del email (magic link o invitación).
// Intercambia el código por una sesión válida y lo manda al dashboard.
import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(request: NextRequest) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  const next = searchParams.get("next") ?? "/dashboard";

  if (code) {
    const supabase = await createClient();
    const { error } = await supabase.auth.exchangeCodeForSession(code);
    if (!error) {
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // Código inválido o vencido: vuelve al login a pedir un enlace nuevo.
  return NextResponse.redirect(`${origin}/login?error=enlace_invalido`);
}
