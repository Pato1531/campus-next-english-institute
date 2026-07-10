import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // El campus no se indexa: es contenido privado detrás de login.
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [{ key: "X-Robots-Tag", value: "noindex, nofollow" }],
      },
    ];
  },
};

export default nextConfig;
