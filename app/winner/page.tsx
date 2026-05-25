import Link from "next/link";

type WinnerPageProps = {
  searchParams?: Promise<{
    usuario?: string;
    contrasena?: string;
  }>;
};

export default async function WinnerPage({ searchParams }: WinnerPageProps) {
  const params = await searchParams;
  const usuario = params?.usuario ?? "";
  const contrasena = params?.contrasena ?? "";

  return (
    <main className="login-page">
      <section className="login-shell" aria-labelledby="winner-title">
        <div className="login-copy">
          <p className="eyebrow">Resultado</p>
          <h1 id="winner-title">Has sido hackeado</h1>
          <p className="description">
            Estos fueron los datos que ingresaste en el formulario.
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