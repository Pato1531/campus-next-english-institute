import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import GoogleAnalytics from "@/components/GoogleAnalytics";

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Campus | Next English Institute",
  description: "Tu espacio de aprendizaje en Next English Institute.",
  robots: { index: false, follow: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={`${openSans.variable} font-sans`}>
        {children}
        <GoogleAnalytics />
      </body>
    </html>
  );
}
