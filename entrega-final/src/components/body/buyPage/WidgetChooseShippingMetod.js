import React, { useState, useEffect, useContext } from "react";
import { ShippingContext } from "../../ShippingContext/ShippingContext";

const DataShippMetod = [
  {
    id: "1",
    value: "Retira en Sucuarsal 1",
    isChecked: false,
    time: "1 dia",
    cost: "22.50",
  },
  {
    id: "2",
    value: "Retira en Sucuarsal 2",
    isChecked: false,
    time: "2 dia",
    cost: "25.50",
  },
  {
    id: "3",
    value: "Mercado Envio",
    isChecked: false,
    time: "4 dia",
    cost: "50.55",
  },
  {
    id: "4",
    value: "OCA",
    isChecked: false,
    time: "7 dia",
    cost: "121.23",
  },
];

const RadioInput = ({ id, label, value, checked, setter }) => {
  const HandleOnClickTr = () => {
    //Resguardar opcion en Contexto
  };

  return (
    <label>
      <input
        id={() => setter(id)}
        type="checkbox"
        checked={checked == value}
        onChange={() => setter(value)}
        onClick={HandleOnClickTr}
      />
      <span>{label}</span>
    </label>
  );
};

const WidgetChooseShippingMetod = () => {
  //const { setDataShipping, getDataShipping } = useContext(ShippingContext);
  const [shippingMetods, setshippingMetods] = useState([]);
  const [shippingMetodSelected, setshippingMetodSelected] = useState();

  useEffect(() => {
    setshippingMetods(DataShippMetod);
    //console.log("Cargo Useffect");
  }, []);

  const handleCheckChieldElement = (event) => {};

  console.log(shippingMetodSelected);

  return (
    <div id="Checkbox">
      <h4>Elija el método de envío</h4>

      <hr className="padding-bottom-1x"></hr>

      <div className="table-responsive">
        <table className="table table-hover">
          <thead className="thead-default">
            <tr>
              <th>Método de Envío</th>
              <th>Tiempo de Entrega</th>
              <th>Costo de Envío</th>
            </tr>
          </thead>
          <tbody>
            {shippingMetods.map((shippingMetod) => {
              return (
                <tr key={shippingMetod.id}>
                  <td className="align-middle">
                    <div>
                      <RadioInput
                        id={shippingMetod.id}
                        label={"   " + shippingMetod.value}
                        value={shippingMetod.id}
                        checked={shippingMetodSelected}
                        setter={setshippingMetodSelected}
                      />
                    </div>
                  </td>
                  <td className="align-middle">{shippingMetod.time}</td>
                  <td className="align-middle">$ {shippingMetod.cost}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default WidgetChooseShippingMetod;
