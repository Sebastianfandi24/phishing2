import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Iniciar sesión | Phishing2",
  description: "Formulario de acceso simple en React para despliegue en Vercel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
