// app/hackeado/page.tsx

import Link from "next/link";

type HackeadoPageProps = {
  searchParams?: {
    usuario?: string;
    contrasena?: string;
  };
};

export default function HackeadoPage({
  searchParams,
}: HackeadoPageProps) {
  const usuario = searchParams?.usuario ?? "";
  const contrasena = searchParams?.contrasena ?? "";

  return (
    <main className="login-page">
      <section className="login-shell" aria-labelledby="hack-title">
        <div className="login-copy">
          <p className="eyebrow">Sistema comprometido</p>

          <h1 id="hack-title">Has sido hackeado</h1>

          <p className="description">
            Esta página muestra la información que escribiste en el formulario.
          </p>
        </div>

        <div className="login-card winner-card">
          <div className="winner-field">
            <span>Usuario</span>
            <strong>{usuario || "Sin dato"}</strong>
          </div>

          <div className="winner-field">
            <span>Contraseña</span>
            <strong>{contrasena || "Sin dato"}</strong>
          </div>

          <Link className="primary-button winner-link" href="/">
            Volver al inicio
          </Link>
        </div>
      </section>
    </main>
  );
}