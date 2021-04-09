import React, { useState } from "react";

import "../../css/App.css";
import "../../css/styles.css";
import "../../css/vendor.css";
import flagImage from "../../img/flags/AR.png";
import Background1 from "../../img/banners/02.jpg";
import Background2 from "../../img/banners/03.jpg";
import logo from "../../img/logo/logo.png";
import MobileMenu from "./MobileMenu";
import HeaderCart from "./HeaderCart";

const myStyleBody = { overflow: "visible" };



 export const  Header =() => {
  
  const [flag, setFlag] = useState(null);
  const  handleMenuMobile =()=> {

    setFlag(!flag);
    return console.log(flag)
   }
  
  return (
      <div id="index" className="hasScrollbar" style={myStyleBody}>
        <div className="offcanvas-container" id="mobile-menu">
          <a className="account-link" href="account-orders.html">
            <div className="user-info">
              <h6 className="user-name">Pablo Smith</h6>
              <span className="text-sm text-white opacity-60">290 Puntos</span>
            </div>
          </a>
          <nav className="offcanvas-menu">
            <ul className="menu">
              <li className="has-children">
                <a href="/#">
                  <span>Shop</span>
                </a>
                <span className="sub-menu-toggle"></span>
                <ul className="offcanvas-submenu">
                  <li className="back-btn">
                    <a href="/#">Back</a>
                  </li>
                  <li>
                    <a href="shop-categories.html">Ver Categorias</a>
                  </li>
                  <li className="has-children">
                    <a href="shop-grid-ls.html">
                      <span>Ver en Grilla</span>
                    </a>
                    <span className="sub-menu-toggle"></span>
                  </li>
                  <li className="has-children">
                    <span>
                      <a href="shop-list-ls.html">Shop List</a>
                    </span>
                    <span className="sub-menu-toggle"></span>
                    <ul className="offcanvas-submenu">
                      <li className="back-btn">
                        <a href="/#">Back</a>
                      </li>
                      <li>
                        <a href="shop-list-ls.html">List Left Sidebar</a>
                      </li>
                      <li>
                        <a href="shop-list-rs.html">List Right Sidebar</a>
                      </li>
                      <li>
                        <a href="shop-list-ns.html">List No Sidebar</a>
                      </li>
                    </ul>
                  </li>

                  <li>
                    <a href="shop-single.html">Single Product</a>
                  </li>
                  <li>
                    <a href="cart.html">Cart</a>
                  </li>
                  <li>
                    <a href="checkout.html">Checkout</a>
                  </li>
                </ul>
              </li>

              <li className="has-children">
                <span>
                  <a href="/#">Categories</a>
                  <span className="sub-menu-toggle"></span>
                </span>
                <ul className="offcanvas-submenu">
                  <li className="back-btn">
                    <a href="/#">Back</a>
                  </li>
                  <li className="has-children">
                    <span>
                      <a href="/#">Men's Shoes</a>
                      <span className="sub-menu-toggle"></span>
                    </span>
                    <ul className="offcanvas-submenu">
                      <li className="back-btn">
                        <a href="/#">Back</a>
                      </li>
                      <li>
                        <a href="/#">Sneakers</a>
                      </li>
                      <li>
                        <a href="/#">Loafers</a>
                      </li>
                      <li>
                        <a href="/#">Boat Shoes</a>
                      </li>
                      <li>
                        <a href="/#">Sandals</a>
                      </li>
                      <li>
                        <a href="/#">View All</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <span>
                      <a href="/#">Women's Shoes</a>
                      <span className="sub-menu-toggle"></span>
                    </span>
                    <ul className="offcanvas-submenu">
                      <li className="back-btn">
                        <a href="/#">Back</a>
                      </li>
                      <li>
                        <a href="/#">Sandals</a>
                      </li>
                      <li>
                        <a href="/#">Flats</a>
                      </li>
                      <li>
                        <a href="/#">Sneakers</a>
                      </li>
                      <li>
                        <a href="/#">Heels</a>
                      </li>
                      <li>
                        <a href="/#">View All</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <span>
                      <a href="/#">Men's Clothing</a>
                      <span className="sub-menu-toggle"></span>
                    </span>
                    <ul className="offcanvas-submenu">
                      <li className="back-btn">
                        <a href="/#">Back</a>
                      </li>
                      <li>
                        <a href="/#">Shirts &amp; Tops</a>
                      </li>
                      <li>
                        <a href="/#">Pants</a>
                      </li>
                      <li>
                        <a href="/#">Jackets</a>
                      </li>
                      <li>
                        <a href="/#">View All</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <span>
                      <a href="/#">Women's Clothing</a>
                      <span className="sub-menu-toggle"></span>
                    </span>
                    <ul className="offcanvas-submenu">
                      <li className="back-btn">
                        <a href="/#">Back</a>
                      </li>
                      <li>
                        <a href="/#">Dresses</a>
                      </li>
                      <li>
                        <a href="/#">Shirts &amp; Tops</a>
                      </li>
                      <li>
                        <a href="/#">Shorts</a>
                      </li>
                      <li>
                        <a href="/#">Swimwear</a>
                      </li>
                      <li>
                        <a href="/#">View All</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <span>
                      <a href="/#">Bags</a>
                      <span className="sub-menu-toggle"></span>
                    </span>
                    <ul className="offcanvas-submenu">
                      <li className="back-btn">
                        <a href="/#">Back</a>
                      </li>
                      <li>
                        <a href="/#">Handbags</a>
                      </li>
                      <li>
                        <a href="/#">Backpacks</a>
                      </li>
                      <li>
                        <a href="/#">Luggage</a>
                      </li>
                      <li>
                        <a href="/#">Wallets</a>
                      </li>
                      <li>
                        <a href="/#">View All</a>
                      </li>
                    </ul>
                  </li>
                  <li className="has-children">
                    <span>
                      <a href="/#">Accessories</a>
                      <span className="sub-menu-toggle"></span>
                    </span>
                    <ul className="offcanvas-submenu">
                      <li className="back-btn">
                        <a href="/#">Back</a>
                      </li>
                      <li>
                        <a href="/#">Sunglasses</a>
                      </li>
                      <li>
                        <a href="/#">Hats</a>
                      </li>
                      <li>
                        <a href="/#">Watches</a>
                      </li>
                      <li>
                        <a href="/#">Jewelry</a>
                      </li>
                      <li>
                        <a href="/#">Belts</a>
                      </li>
                      <li>
                        <a href="/#">View All</a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>

        <div className="topbar">
          <div className="topbar-column">
            <a className="hidden-md-down" href="mailto:support@unishop.com">
              <i className="icon-mail"></i>&nbsp; support@unishop.com
            </a>
            <a className="hidden-md-down" href="tel:+541145699874">
              <i className="icon-bell"></i>&nbsp; +54 011 4569-9874
            </a>
            <a
              className="social-button sb-facebook shape-none sb-dark"
              href="/#"
              target="_blank"
            >
              <i className="socicon-facebook"></i>
            </a>
            <a
              className="social-button sb-twitter shape-none sb-dark"
              href="/#"
              target="_blank"
            >
              <i className="socicon-twitter"></i>
            </a>
            <a
              className="social-button sb-instagram shape-none sb-dark"
              href="/#"
              target="_blank"
            >
              <i className="socicon-instagram"></i>
            </a>
            <a
              className="social-button sb-pinterest shape-none sb-dark"
              href="/#"
              target="_blank"
            >
              <i className="socicon-pinterest"></i>
            </a>
          </div>

          <div className="topbar-column">
            <a className="hidden-md-down" href="/#">
              <i className="icon-download"></i>Descargue la APP
            </a>

            <div className="lang-currency-switcher-wrap">
              <div className="lang-currency-switcher dropdown-toggle">
                <span className="language">
                  <img src={flagImage} alt="Argentina" />
                </span>
                <span className="currency">$</span>
              </div>

              <div className="dropdown-menu">
                <div className="currency-select">
                  <select className="form-control form-control-rounded form-control-sm">
                    <option value="$">PESOS</option>
                  </select>
                </div>
                <a className="dropdown-item" href="/#">
                  <img src={flagImage} alt="Argentina" />
                  Argentina
                </a>
                <a className="dropdown-item" href="/#"> </a>
              </div>
            </div>
          </div>
        </div>

        <header className="navbar navbar-sticky">
          <form className="site-search" method="get">
            <input
              type="  text"
              name="site_search"
              placeholder="Ingrese Producto a Buscar..."
            />
            <div className="search-tools">
              <span className="clear-search">Limpiar</span>
              <span className="close-search">
                <i className="icon-cross"></i>
              </span>
            </div>
          </form>

          <div className="site-branding">
            <div className="inner">
              <div
                id="ButtonBurger"  
                className="offcanvas-toggle cats-toggle"
                
                onClick={handleMenuMobile}  
                data-toggle="offcanvas"
              > </div>

              {/* PMS aca debo invocar al componentecMobileMenu.js*/}
              {flag === true && <MobileMenu />}
              <a
                className="offcanvas-toggle menu-toggle"
                href="#mobile-menu"
                data-toggle="offcanvas"
              >
              </a>
              
              <a className="site-logo" href="index.html">
                <img src={logo} alt="Logo" />
              </a>
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
                    <a href="shop-categories.html">Categorias</a>
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
                        <span
                          className="overlay-dark"
                          styles="opacity: .4;"
                        ></span>
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
                <a id="btnMyAccount" href="account-login.html">
                  <span>Mi Cuenta</span>
                </a>
              </li>
            </ul>
          </nav>
          <div className="toolbar">
            <div className="inner">
              <div className="tools">
                <div className="search">
                  <i className="icon-search"></i>
                </div>
                <div id="ImgAccount" className="account">
                  <a href="/#"> </a>
                  <ul
                    id="MenuAccount"
                    className="toolbar-dropdown"
                    style={{ display: "none" }}
                  >
                    <li className="sub-menu-user">
                      <div id="divMenuAccount" className="user-info">
                        <h6 id="nameUser" className="user-name"> </h6>
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
                      <a href="account-address.html#/MyOrders">
                        Lista de Pedidos
                      </a>
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
                  <a href="account-login.html"> </a>
                  <i
                    href="/account-login.html"
                    className="icon-head"
                    id="IconAccountHeader"
                  ></i>
                </div>

                <HeaderCart />
              </div>
            </div>
          </div>
        </header>
      </div>
    );
  }
export default Header;
