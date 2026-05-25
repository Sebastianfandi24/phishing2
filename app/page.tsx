export default function Home() {
  return (
    <main className="login-page">
      <section className="login-shell" aria-labelledby="login-title">
        <div className="login-copy">
          <p className="eyebrow">Acceso seguro</p>
          <h1 id="login-title">Debe iniciar sesión</h1>
          <p className="description">
            Ingrese su usuario y contraseña para continuar.
          </p>
        </div>

        <form className="login-card">
          <label className="field">
            <span>Usuario</span>
            <input
              type="text"
              name="usuario"
              autoComplete="username"
              placeholder="Tu usuario"
              required
            />
          </label>

          <label className="field">
            <span>Contraseña</span>
            <input
              type="password"
              name="contrasena"
              autoComplete="current-password"
              placeholder="Tu contraseña"
              required
            />
          </label>

          <button className="primary-button" type="submit">
            Acceder
          </button>

          <button className="secondary-button" type="button">
            Olvidé mi contraseña
          </button>
        </form>
      </section>
    </main>
  );
}
