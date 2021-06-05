import React from "react";


const RecoveryPassword = () => {
  return (
    <div>
      {/* Encabezado */}
      <div className="page-title">
        <div className="container">
          <div className="column">
            <h1>Recordar Password</h1>
          </div>
          <div className="column">
            <ul className="breadcrumbs">
              <li>
                <a href="index.html">Home</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li>
                <a href="account-orders.html">Cuenta</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li>Recordar Password</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Body */}
      <div className="container padding-bottom-3x mb-2">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <h2>¿Olvidaste tu contraseña?</h2>
            <p>
              Cambie su contraseña en tres sencillos pasos. Esto ayuda a
              mantener segura su nueva contraseña.
            </p>
            <ol className="list-unstyled">
              <li>
                <span className="text-primary text-medium">1. </span>Complete su
                dirección de correo electrónico debajo.
              </li>
              <li>
                <span className="text-primary text-medium">2. </span>Le
                enviaremos un código temporal por correo electrónico.
              </li>
              <li>
                <span className="text-primary text-medium">3. </span>Utilice el
                código para cambiar su contraseña en nuestro sitio web seguro.
              </li>
            </ol>
            <form className="card mt-4">
              <div className="card-body">
                <div className="form-group">
                  <label for="email-for-pass">
                    Ingrese su dirección de correo electrónico
                  </label>
                  <input
                    className="form-control"
                    type="text"
                    id="email-for-pass"
                    required=""
                  ></input>
                  <small className="form-text text-muted">
                    Escriba la dirección de correo electrónico que utilizó
                    cuando se registró en Unishop. Luego, enviaremos un código
                    por correo electrónico a esta dirección.
                  </small>
                </div>
              </div>
              <div className="card-footer">
                <button className="btn btn-primary" type="submit">
                  Obtener nueva contraseña
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
export default RecoveryPassword;
