import React, { useState, useEffect } from "react";

const DataDirection = [
  {
    id: 1,
    description: "Misma Direccion",
    value: true,
  },
];

const WidgetBillingAddress = () => {
  const [name, Setname] = useState("");
  const [sameAddress, SetSameAddress] = useState([]);

  useEffect(() => {
    SetSameAddress(DataDirection);
  }, []);

  return (
    <div>
      <h4>Dirección de Envio</h4>
      <hr className="padding-bottom-1x"></hr>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-fn">Nombres</label>
            <input
              className="form-control"
              type="text"
              id="checkout-fn"
              required
            ></input>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-ln">Apellido</label>
            <input
              className="form-control"
              type="text"
              id="checkout-ln"
            ></input>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-email">E-mail </label>
            <input
              className="form-control"
              type="email"
              id="checkout-email"
            ></input>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-phone">Telefono Celular</label>
            <input
              className="form-control"
              type="text"
              id="checkout-phone"
            ></input>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-company">Entre Calles</label>
            <input
              className="form-control"
              type="text"
              id="checkout-company"
            ></input>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-country">Pais</label>
            <select className="form-control" id="checkout-country">
              <option>Argentina</option>
            </select>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-city">Provincia</label>
            <select className="form-control" id="checkout-city">
              <option>Ciudad de Buenos Aires</option>
              <option>Buenos Aires</option>
              <option>Catamarca</option>
              <option>Chaco</option>
              <option>Chubut</option>
              <option>Córdoba</option>
              <option>Corrientes</option>
              <option>Entre Ríos</option>
              <option>Formosa</option>
              <option>Jujuy</option>
              <option>La Pampa</option>
              <option>La Rioja</option>
              <option>Mendoza</option>
              <option>Misiones</option>
              <option>Neuquén</option>
              <option>Río Negro</option>
              <option>Salta</option>
              <option>San Juan</option>
              <option>San Luis</option>
              <option>Santa Cruz</option>
              <option>Santa Fe</option>
              <option>Santiago del Estero</option>
              <option>Tierra del Fuego</option>
              <option>Tucumán</option>
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-zip">Codigo Postal</label>
            <input
              className="form-control"
              type="text"
              id="checkout-zip"
            ></input>
          </div>
        </div>
      </div>

      <div className="row padding-bottom-1x">
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-address1">Ciudad</label>
            <input
              className="form-control"
              type="text"
              id="checkout-address1"
            ></input>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group">
            <label id="checkout-address2">Direccion</label>
            <input
              className="form-control"
              type="text"
              id="checkout-address2"
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WidgetBillingAddress;
