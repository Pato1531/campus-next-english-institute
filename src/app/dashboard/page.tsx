import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  return (
    <main className="min-h-screen bg-white px-6 py-10">
      <h1 className="text-2xl font-semibold text-violet-dark">
        Bienvenido/a al campus
      </h1>
      <p className="mt-2 text-sm text-ink-secondary">
        Sesión activa: {user.email}
      </p>
      <p className="mt-6 text-sm text-neutral-500">
        Esto es un placeholder — acá va el dashboard real (Mis Cursos, Mi
        Progreso) en el próximo paso.
      </p>
    </main>
  );
}
