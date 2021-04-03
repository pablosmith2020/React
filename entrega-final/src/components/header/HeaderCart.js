import React from "react";
import foto1 from "../../img/cart-dropdown/00.jpg";
import foto2 from "../../img/cart-dropdown/01.jpg";
import foto3 from "../../img/cart-dropdown/02.jpg";



class HeaderCart extends React.Component {
  render() {
    return (

        <div className="cart">
        <a id="BtnHeaderCart" href="cart.html"></a>
        <i className="icon-bag"></i>
        <span id="CountProductCart" className="count">
          3
        </span>
        <span id="TotalPurchaseCart" className="subtotal">
          293.77
        </span>
        <div className="toolbar-dropdown" id="ShoppingToolbar-dropdown">
          <div id="divThird-1205" className="dropdown-product-item">
            <span
              id="spanFirst-1205"
              className="dropdown-product-remove"
              onclick="removeElementCart(0,1205)"
            >
              <i id="i-1205" class="icon-cross"></i>
            </span>
            <a
              id="aSecond-1205"
              className="dropdown-product-thumb"
              href="shop-single.html"
            >
              <img id="img-1205" src={foto1} alt="Imagen Producto" />
            </a>
            <div id="div-1205" className="dropdown-product-info">
              <a
                id="aFirst-1205"
                className="dropdown-product-title"
                href="shop-single.html"
              >
                Zapatilla Adidas
              </a>
            </div>
            <span
              id="spanLast-1205"
              className="dropdown-product-detailse"
            >
              1 x $43.90
            </span>
          </div>
          <div id="divThird-1405" className="dropdown-product-item">
            <span
              id="spanFirst-1405"
              className="dropdown-product-remove"
              onclick="removeElementCart(1,1405)"
            >
              <i id="i-1405" className="icon-cross"></i>
            </span>
            <a
              id="aSecond-1405"
              className="dropdown-product-thumb"
              href="shop-single.html"
            >
              <img
                id="img-1405"
                src={foto2}
                alt="Imagen Producto"
              ></img>
            </a>
            <div id="div-1405" className="dropdown-product-info">
              <a
                id="aFirst-1405"
                className="dropdown-product-title"
                href="shop-single.html"
              >
                Gorra Deportiva
              </a>
            </div>
            <span
              id="spanLast-1405"
              className="dropdown-product-detailse"
            >
              2 x $24.89
            </span>
          </div>
          <div id="divThird-8805" className="dropdown-product-item">
            <span
              id="spanFirst-8805"
              className="dropdown-product-remove"
              onclick="removeElementCart(2,8805)"
            >
              <i id="i-8805" className="icon-cross"></i>
            </span>
            <a
              id="aSecond-8805"
              className="dropdown-product-thumb"
              href="shop-single.html"
            >
              <img
                id="img-8805"
                src={foto3}
                alt="Imagen Producto"
              ></img>
            </a>
            <div id="div-8805" className="dropdown-product-info">
              <a
                id="aFirst-8805"
                className="dropdown-product-title"
                href="shop-single.html"
              >
                Cartera Ugart
              </a>
            </div>
            <span
              id="spanLast-8805"
              className="dropdown-product-detailse"
            >
              1 x $200.09
            </span>
          </div>
          <div id="divFooter" className="toolbar-dropdown-group">
            <div id="divTotal" className="column">
              <span id="spanTotal" className="text-lg">
                Total:
              </span>
            </div>
            <div id="divPrecio" className="column text-right">
              <span id="spanPrecio" className="text-lg text-medium">
                293.77
              </span>
            </div>
          </div>
          <div id="BtnHeader" className="toolbar-dropdown-group">
            <div id="divFooter1" className="column">
              <a
                id="BtnHeaderCart"
                className="btn btn-sm btn-block btn-secondary"
                href="cart.html"
              >
                Mi Carrito
              </a>
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
    

    )}
}
export default HeaderCart