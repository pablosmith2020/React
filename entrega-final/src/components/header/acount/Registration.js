import React, { useContext, useState } from "react";

const Registration = () => {
  const [user, setuser] = useState("");
  const [pass, setpass] = useState("");

  return (
    <div className="col-md-6">
      <div className="padding-top-3x hidden-md-up"></div>
      <h3 className="margin-bottom-1x">¿Aun no tiene Cuenta? Registrese</h3>
      <p>
        El registro demora menos de un minuto y le brinda control total sobre
        sus pedidos.
      </p>

      <form className="row" method="post">
        <div className="col-sm-6">
          <div className="form-group">
            <label>Nombres</label>
            <input
              className="form-control"
              type="text"
              id="regName"
              required=""
            >
          
            </input>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Apellido</label>
            <input
              className="form-control"
              type="text"
              id="regLastName"
              required=""
            ></input>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>E-mail (Usuario)</label>
            <input
              className="form-control"
              type="email"
              id="reg-email"
              required=""
            ></input>
          </div>
        </div>

        <div className="col-sm-6">
          <div className="form-group">
            <label>Provincia</label>
            <select className="form-control" id="regProvince" required="">
              <option value="0">Seleccione una Provincia</option>
              <option value="1">Capital Federal</option>
              <option value="2">San Luis</option>
              <option value="3">Cordoba</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Telefono Celular</label>
            <input
              className="form-control"
              type="tel"
              id="reg-phone"
              placeholder="(011) 7628-4353"
              required=""
            ></input>
            {/*  <!-- pattern="\([0-9]{4}\) [0-9]{4}[ -][0-9]{4}" title="Un número de teléfono válido consta de un código de área  entre paréntesis, un espacio, los restantes dígitos del número separados por  guión medio (-)" --> */}
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Telefono Particular</label>
            <input
              className="form-control"
              type="text"
              id="reg-phone-private"
              required=""
            ></input>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Password</label>
            <input
              className="form-control"
              type="password"
              id="reg-pass"
              required=""
            ></input>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label>Confirmar Password</label>
            <input
              className="form-control"
              type="password"
              id="reg-pass-confirm"
              required=""
            ></input>
          </div>
        </div>

        <div className="col-12 text-center text-sm-right">
          <button
            id="checkIn"
            className="btn btn-primary margin-bottom-none"
            type="button"
            disabled=""
          >
            Registrarse
          </button>
        </div>
      </form>
    </div>
  );
};
export default Registration;
