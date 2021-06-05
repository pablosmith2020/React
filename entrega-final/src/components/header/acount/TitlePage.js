import React from "react";

const PageTitle = () => {
  return (
    <div className="page-title">
      <div className="container">
        <div className="column">
          <h1>Ingresar / Registrar Nuevo Usuario</h1>
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
            <li>Registrarce</li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PageTitle;
