import Select from "@material-ui/core/Select";

import React, { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import CartEmpty from "../../../img/CartEmpty.png";

import foto1 from "../../../img/cart-dropdown/00.jpg";

const Card = () => {
  const { Cart, TotalAmount, DeleteProdcuct, DeleteAllProdcuct } = useContext(
    CartContext
  );

  const [state, setState] = React.useState({
    count: "0",
    name: "hai",
  });
  const handleChange = (event) => {
    const name = event.target.name;
    setState({
      ...state,
      [name]: event.target.value,
    });
  };

  const StyleCartEmpty = {
    color: "blue",
    textAlign: "center",
  };

  return (
    <div>
      {Cart.length === 0 ? (
        <div>
          <section style={StyleCartEmpty}>
            <h1>No tienes ningún artículo en tu carrito de compras.</h1>
            <img src={CartEmpty} alt="Carrito Vacio"></img>
          </section>
        </div>
      ) : (
        <div id="shoppingCart" className="table-responsive shopping-cart">
          <table id="root" className="table">
            <thead id="thead1">
              <tr id="tr1">
                <th id="th1">Producto</th>
                <th className="text-center" id="th-header1">
                  Cantidad
                </th>
                <th className="text-center" id="th-header2">
                  Sub Total
                </th>
                <th className="text-center" id="th-header3">
                  Descuento
                </th>
                <th className="text-center" id="th-header4">
                  <a
                    className="btn btn-sm btn-outline-danger"
                    href="#"
                    onClick={() => DeleteAllProdcuct()}
                  >
                    Eliminar Productos
                  </a>
                </th>
              </tr>
            </thead>
            <tbody id="tbody">
              {Cart?.map((Car) => {
                //console.log(Car.colour)
                return (
                  <tr id={`tr-${Car.id}`} key={`tr-${Car.id}`}>
                    <td id={`td-${Car.id}`}>
                      <div id={`divProduct-${Car.id}`} className="product-item">
                        <a
                          id={`a-${Car.id}`}
                          className="product-thumb"
                          href="/#"
                        >
                          <img
                            id={`img-${Car.id}`}
                            src={foto1}
                            alt="Imagen"
                          ></img>
                        </a>
                        <div
                          id={`divProduct2-${Car.id}`}
                          className="product-info"
                        >
                          <h4 id={`h4-${Car.id}`} className="product-title">
                            <a id={`a2-${Car.id}`} href="/#">
                              {Car.description}
                            </a>
                          </h4>
                          <span id={`span1-${Car.id}`}>
                            <em id={`em1-${Car.id}`}>
                              {`Tamaño: ${Car.size}`}{" "}
                            </em>
                          </span>
                          <span id={`span2-${Car.id}`}>
                            <em
                              id={`em-${Car.id}`}
                            >{`Color: ${Car.colour}`}</em>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td id={`td2-${Car.id}`} className="text-center">
                      <div id={`div2-${Car.id}`} className="count-input">
                        <Select
                          className="form-control"
                          native
                          value={Car.count}
                          onChange={handleChange}
                          inputProps={{
                            name: "count",
                            id: "countProduct",
                          }}
                        >
                          <option aria-label="None" value="" />
                          <option value={1}>1</option>
                          <option value={2}>2</option>
                          <option value={3}>3</option>
                          <option value={4}>4</option>
                          <option value={5}>5</option>
                        </Select>
                      </div>
                    </td>
                    <td
                      id={`td3-${Car.id}`}
                      className="text-center text-lg text-medium"
                    >
                      {" "}
                      $ {Car.price}
                    </td>
                    <td
                      id={`td4-${Car.id}`}
                      className="text-center text-lg text-medium"
                    >
                      {Car.discount} %
                    </td>
                    <td id={`td5-${Car.id}`} className="text-center">
                      <a
                        id={`a3-${Car.id}`}
                        className="remove-from-cart"
                        href="#"
                      >
                        <i
                          id={`i2-${Car.id}`}
                          className="icon-cross"
                          onClick={() => DeleteProdcuct(Car.id)}
                        >
                          X
                        </i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="shopping-cart-footer">
            <div className="column">
              <form className="coupon-form" method="post">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Numero de Cupon"
                  required=""
                ></input>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="submit"
                >
                  Aplicar Cupon
                </button>
              </form>
            </div>
            <div className="column text-lg">
              Subtotal:{" "}
              <span id="spanTotalAmount" className="text-medium">
                {TotalAmount}
              </span>
            </div>
          </div>

          <div className="shopping-cart-footer">
            <div className="column">
              <a
                className="btn btn-outline-secondary shop-grid-ls.html"
                href="/#"
              >
                <Link to="/">
                  <i className="icon-arrow-left"></i>&nbsp;Ir a la Tienda
                </Link>
              </a>
            </div>
            <div className="column">
              <a className="btn btn-success" href="/#">
                Comprar
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
