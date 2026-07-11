"use client";

// src/components/campus/Nav.tsx
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

const links = [
  { href: "/dashboard", label: "Dashboard" },
  { href: "/mis-cursos", label: "Mis Cursos" },
  { href: "/mi-progreso", label: "Mi Progreso" },
];

export default function Nav({ email }: { email: string }) {
  const pathname = usePathname();
  const router = useRouter();

  async function cerrarSesion() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.replace("/login");
  }

  return (
    <header className="border-b border-violet-border bg-white">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 px-6 py-4">
        <Link href="/dashboard" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-violet text-sm font-semibold text-white">
            N
          </span>
          <span className="text-base font-semibold text-violet-dark">
            Campus{" "}
            <span className="font-normal text-ink-secondary">
              Next Ezeiza
            </span>
          </span>
        </Link>

        <nav className="flex flex-wrap items-center gap-6">
          {links.map((l) => {
            const activo =
              pathname === l.href || pathname.startsWith(l.href + "/");
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`border-b-2 pb-1 text-sm transition ${
                  activo
                    ? "border-violet font-semibold text-violet-dark"
                    : "border-transparent text-ink-secondary hover:border-violet-border hover:text-violet-dark"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
          <span className="hidden text-xs text-ink-secondary sm:inline">
            {email}
          </span>
          <button
            onClick={cerrarSesion}
            className="text-sm text-ink-secondary underline decoration-violet-border underline-offset-2 hover:text-violet-dark"
          >
            Cerrar sesión
          </button>
        </nav>
      </div>
    </header>
  );
}
