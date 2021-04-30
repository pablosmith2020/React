import { NavLink } from "react-router-dom";
import flagImage from "../../img/flags/AR.png";
import MenuComponent from "./MenuComponent";
import SearchProductComponent from "./SearchProduct";
import { HeaderContext } from "../HeaderContext/HeaderContext";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDownload,
  faBell,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const myStyleBody = { overflow: "visible" };

export const Header = () => {
  const { viewMenu } = useContext(HeaderContext);

  return (
    <div id="index" className="hasScrollbar" style={myStyleBody}>
      <div className="offcanvas-container" id="mobile-menu">
        <a className="account-link" href="account-orders.html">
          <div className="user-info">
            <h6 className="user-name">Pablo Smith</h6>
            <span className="text-sm text-white opacity-60">290 Puntos</span>
          </div>
        </a>

        {/*Menu Nav*/}
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
                <NavLink activeClassName="active" exact to="/Product">
                  <li className="has-children">
                    <a href="/#">
                      <span>Ver Producto</span>
                    </a>
                    <span className="sub-menu-toggle"></span>
                  </li>
                </NavLink>
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
                  <a href="/#">Cart</a>
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
            <i>
              <FontAwesomeIcon icon={faEnvelope} />
            </i>
            &nbsp; support@unishop.com
          </a>
          <a className="hidden-md-down" href="tel:+541145699874">
            <i>
              <FontAwesomeIcon icon={faBell} />
            </i>
            &nbsp; +54 011 4569-9874
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
            <i>
              <FontAwesomeIcon icon={faDownload} />
            </i>{" "}
            Descargue la APP
          </a>

          <div className="lang-currency-switcher-wrap">
            <div className="lang-currency-switcher dropdown-toggle">
              <span className="language">
                <img src={flagImage} alt="Argentina" />
              </span>
              <span className="currency">$ PESOS</span>
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
              <a className="dropdown-item" href="/#">
                {" "}
              </a>
            </div>
          </div>
        </div>
      </div>

      <header className="navbar navbar-sticky">
        {viewMenu ? <MenuComponent /> : <SearchProductComponent />}
      </header>
    </div>
  );
};
export default Header;
