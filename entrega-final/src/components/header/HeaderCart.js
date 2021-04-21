import React, { useContext } from "react";
import { CartContext } from "../CartContext/CartContext";
import { Link } from "react-router-dom";

import foto1 from "../../img/cart-dropdown/00.jpg";

const HeaderCart = () => {
  const [Cart, TotalAmount, CountElementCar] = useContext(CartContext);

  /*  useEffect(() => {}, []); */

  const removeElementCart = (idProduct) => {
    //console.log("remove Item")
  };

  const AddElement = () => {
    //console.log("AddElement ")
  };

  return (
    <div className="cart">
      <a id="BtnHeaderCart" href="cart.html">
        {" "}
      </a>
      <i className="icon-bag"></i>
      <span id="CountProductCart" className="count">
        {CountElementCar}
      </span>
      <span id="TotalPurchaseCart" className="subtotal">
        {TotalAmount}
      </span>
      <div className="toolbar-dropdown" id="ShoppingToolbar-dropdown">
        {Cart?.map((Car) => {
          //console.log(Category)
          return (
            <div
              id={`divThird-${Car.id}`}
              className="dropdown-product-item"
              key={Car.id}
            >
              <span
                id={`spanFirst-${Car.id}`}
                className="dropdown-product-remove"
              >
                <i
                  id={Car.id}
                  className="icon-cross"
                  onClick={removeElementCart(Car.id)}
                >
                  X
                </i>
              </span>
              <a
                id={`aSecond-${Car.id}`}
                className="dropdown-product-thumb"
                href="/#"
              >
                <img id={`img-${Car.id}`} src={foto1} alt="Imagen Producto" />
              </a>
              <div id={`div-${Car.id}`} className="dropdown-product-info">
                <a
                  id={`aFirst-${Car.id}`}
                  className="dropdown-product-title"
                  href="/#"
                >
                  {Car.description}
                </a>
              </div>
              <span
                id={`spanLast-${Car.id}`}
                className="dropdown-product-detailse"
              >
                {Car.count} x {Car.price}
              </span>
            </div>
          );
        })}
        <div id="divFooter" className="toolbar-dropdown-group">
          <div id="divTotal" className="column">
            <span id="spanTotal" className="text-lg">
              Total:
            </span>
          </div>
          <div id="divPrecio" className="column text-right">
            <span id="spanPrecio" className="text-lg text-medium">
              {TotalAmount}
            </span>
          </div>
        </div>
        <div id="BtnHeader" className="toolbar-dropdown-group">
          <div id="divFooter1" className="column">
            <Link to="/Cart">
              <a
                id="BtnHeaderCart"
                className="btn btn-sm btn-block btn-secondary"
                href="cart.html"
              >
                Mi Carrito
              </a>
            </Link>
          </div>
          <div id="divFooter2" className="column">
            <a
              id="BtnHeaderCart2"
              className="btn btn-sm btn-block btn-success"
              href="checkout-address.html"
            >
              Comprar
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderCart;
