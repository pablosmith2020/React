import { slide as Menu } from "react-burger-menu";
import "./MenuBurger.css";
import Background1 from "../../img/banners/02.jpg";
import Background2 from "../../img/banners/03.jpg";
import logo from "../../img/logo/logo.png";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faUser } from "@fortawesome/free-solid-svg-icons";
import HeaderCart from "./HeaderCart";
import React, {  useContext } from "react";
import { HeaderContext } from "../HeaderContext/HeaderContext";

const MenuComponent = () => {
  const { setViewSearch } = useContext(HeaderContext);

  return (
    <div>
      <div className="site-branding">
        <div className="inner">
          <div id="ButtonBurger" className=" cats-toggle">
            <Menu className="MenuBurger">
              <a
                id="home"
                className="menu-item"
                href="/"
                style={{ color: "white" }}
              >
                Home
              </a>
              <a
                id="about"
                className="menu-item"
                href="/about"
                style={{ color: "white" }}
              >
                About
              </a>
              <a
                id="contact"
                className="menu-item"
                href="/contact"
                style={{ color: "white" }}
              >
                Contact
              </a>
            </Menu>
            <div id="divLogo" className="logo-center">
              <Link to="/" className="site-logo logo-center">
                <img src={logo} alt="Logo" className="logo-center" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <nav className="site-menu">
        <ul>
          <li>
            <a href="/#">
              <span>Shop</span>
            </a>
            <ul className="sub-menu">
              <li>
                {/*      <a href="shop-categories.html">Buscador Productos</a> */}
                <Link to="/GridProduct">Buscador Productos</Link>
              </li>
              <li className="has-children">
                <a href="shop-grid-ls.html">
                  <span>Ver en Grilla</span>
                </a>
              </li>
              <li className="has-children">
                <a href="shop-list-ls.html">
                  <span>Ver en Lista</span>
                </a>
              </li>
              <li>
                <a href="cart.html">Ver Carrito</a>
              </li>
              <li className="has-children">
                <a href="checkout-address.html">
                  <span>Checkout</span>
                </a>
                <ul className="sub-menu">
                  <li>
                    <a href="checkout-address.html">Direccion</a>
                  </li>
                  <li>
                    <a href="checkout-shipping.html">Envio</a>
                  </li>
                  <li>
                    <a href="checkout-payment.html">Pago</a>
                  </li>
                  <li>
                    <a href="checkout-review.html">Vista previa</a>
                  </li>
                  <li>
                    <a href="checkout-complete.html">Completar</a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="has-megamenu">
            <a href="/#">
              <span>Destacado</span>
            </a>
            <ul className="mega-menu">
              <li>
                <span className="mega-menu-title">Top Categories</span>
                <ul className="sub-menu">
                  <li>
                    <a href="/#">Zapatos de Hombre</a>
                  </li>
                  <li>
                    <a href="/#">Zapatos de Mujer</a>
                  </li>
                  <li>
                    <a href="/#">Remeras</a>
                  </li>
                  <li>
                    <a href="/#">Trajes de baño</a>
                  </li>
                  <li>
                    <a href="/#">Shorts / Pantalones</a>
                  </li>
                  <li>
                    <a href="/#">Accesorios</a>
                  </li>
                </ul>
              </li>
              <li>
                <span className="mega-menu-title">Tienda Especial</span>
                <ul className="sub-menu">
                  <li>
                    <a href="/#">Niños</a>
                  </li>
                  <li>
                    <a href="/#">Ropa de Natacion</a>
                  </li>
                  <li>
                    <a href="/#">Ropa Deportiva</a>
                  </li>
                  <li>
                    <a href="/#">Ropa Outdoor</a>
                  </li>
                  <li>
                    <a href="/#">Ropa Formal</a>
                  </li>
                  <li>
                    <a href="/#">Accesorios</a>
                  </li>
                </ul>
              </li>
              <li>
                <section
                  className="promo-box"
                  style={{ background: `url(${Background1})` }}
                >
                  <li>
                    <span className="overlay-dark" styles="opacity: .4;"></span>
                    <div className="promo-box-content text-center padding-top-2x padding-bottom-2x">
                      <h4 className="text-light text-thin text-shadow">
                        Nueva Coleccion
                      </h4>
                      <h3 className="text-bold text-light text-shadow">
                        Lentes de Sol
                      </h3>
                      <a className="btn btn-sm btn-primary" href="/#">
                        Shop Now
                      </a>
                    </div>
                  </li>
                </section>
              </li>
              <li>
                <section
                  className="promo-box"
                  style={{ background: `url(${Background2})` }}
                >
                  <span className="overlay-dark"></span>
                  <div className="promo-box-content text-center padding-top-2x padding-bottom-2x">
                    <h3 className="text-bold text-light text-shadow">
                      Ofertas Limitadas
                    </h3>
                    <h4 className="text-light text-thin text-shadow">
                      Ahorra hasta el 50%!
                    </h4>
                    <a className="btn btn-sm btn-primary" href="/#">
                      Learn More
                    </a>
                  </div>
                </section>
              </li>
            </ul>
          </li>
          <li id="liAccountMenuCenter">
        <Link to="/Acount"></Link>   
            
           
              {/* <span>Mi Cuenta</span> */}
            
          </li>
        </ul>
      </nav>

      <div className="toolbar">
        <div className="inner">
          <div className="tools">
            <div className="search" onClick={() => setViewSearch()}>
              <i>
                <FontAwesomeIcon icon={faSearch} />
              </i>
            </div>
            <div id="ImgAccount" className="account">
              <Link to='/Acount'> </Link>
              <ul
                id="MenuAccount"
                className="toolbar-dropdown"
                style={{ display: "none" }}
              >
                <li className="sub-menu-user">
                  <div id="divMenuAccount" className="user-info">
                    <h6 id="nameUser" className="user-name">
                      {" "}
                    </h6>
                    <span
                      id="rewardPoint"
                      className="text-xs text-muted"
                    ></span>
                  </div>
                </li>
                <li>
                  <a href="account-address.html#/MyProfile">Mi Cuenta</a>
                </li>
                <li>
                  <a href="account-address.html#/MyOrders">Lista de Pedidos</a>
                </li>
                <li>
                  <a href="account-address.html#/MyWishlist">Favoritos</a>
                </li>
                <li className="sub-menu-separator"></li>
                <li>
                  <a id="BtnLogout" href="/#">
                    <i className="icon-unlock"></i>Logout
                  </a>
                </li>
              </ul>
              {/* <a href="account-login.html"> </a> */}
              <i>
                <FontAwesomeIcon icon={faUser} />
              </i>
            </div>
            <HeaderCart />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MenuComponent;
