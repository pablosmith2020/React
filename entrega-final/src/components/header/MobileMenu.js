import React from "react";

const myStyleBody = { overflow: "visible" };

class MobileMenu extends React.Component {
  render() {
    return (
      <div id="index" className="hasScrollbar" style={myStyleBody}>
        <div className="offcanvas-container" id="shop-categories">
          <div className="offcanvas-header">
            <h3 className="offcanvas-title">Categorias</h3>
          </div>
          <nav className="offcanvas-menu">
            <ul className="menu">
              <li className="has-children">
                <span>
                  <a href="#">Zapatos de Hombre</a>
                  <span className="sub-menu-toggle"></span>
                </span>
                <ul className="offcanvas-submenu">
                  <li className="back-btn">
                    <a href="#">Back</a>
                  </li>
                  <li>
                    <a href="#">Zapatillas</a>
                  </li>
                  <li>
                    <a href="#">Mocasines</a>
                  </li>
                  <li>
                    <a href="#">De Vestir</a>
                  </li>
                  <li>
                    <a href="#">Sandalias</a>
                  </li>
                  <li>
                    <a href="#">Ver Todos</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <span>
                  <a href="#">Zapatos de Mujer</a>
                  <span className="sub-menu-toggle"></span>
                </span>
                <ul className="offcanvas-submenu">
                  <li className="back-btn">
                    <a href="#">Back</a>
                  </li>
                  <li>
                    <a href="#">Sandalias</a>
                  </li>
                  <li>
                    <a href="#">Pantalones</a>
                  </li>
                  <li>
                    <a href="#">Zapatillas</a>
                  </li>
                  <li>
                    <a href="#">Tacones</a>
                  </li>
                  <li>
                    <a href="#">Ver Todos</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <span>
                  <a href="#">Ropa de Hombre</a>
                  <span className="sub-menu-toggle"></span>
                </span>
                <ul className="offcanvas-submenu">
                  <li className="back-btn">
                    <a href="#">Back</a>
                  </li>
                  <li>
                    <a href="#">Camisas</a>
                  </li>
                  <li>
                    <a href="#">Pantalones</a>
                  </li>
                  <li>
                    <a href="#">Chaquetas</a>
                  </li>
                  <li>
                    <a href="#">Ver Todos</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <span>
                  <a href="#">Ropa de Mujer</a>
                  <span className="sub-menu-toggle"></span>
                </span>
                <ul className="offcanvas-submenu">
                  <li className="back-btn">
                    <a href="#">Back</a>
                  </li>
                  <li>
                    <a href="#">Vestidos</a>
                  </li>
                  <li>
                    <a href="#">Remeras</a>
                  </li>
                  <li>
                    <a href="#">Shorts</a>
                  </li>
                  <li>
                    <a href="#">Traje de baño</a>
                  </li>
                  <li>
                    <a href="#">Ver Todos</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <span>
                  <a href="#">Ropa de Nene</a>
                  <span className="sub-menu-toggle"></span>
                </span>
                <ul className="offcanvas-submenu">
                  <li className="back-btn">
                    <a href="#">Back</a>
                  </li>
                  <li>
                    <a href="#">Botas</a>
                  </li>
                  <li>
                    <a href="#">Sandalias</a>
                  </li>
                  <li>
                    <a href="#">Pantalones</a>
                  </li>
                  <li>
                    <a href="#">Mocasines</a>
                  </li>
                  <li>
                    <a href="#">Ver Todos</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <span>
                  <a href="#">Bags</a>
                  <span className="sub-menu-toggle"></span>
                </span>
                <ul className="offcanvas-submenu">
                  <li className="back-btn">
                    <a href="#">Back</a>
                  </li>
                  <li>
                    <a href="#">Bolsos</a>
                  </li>
                  <li>
                    <a href="#">Mochilas</a>
                  </li>
                  <li>
                    <a href="#">Equipaje</a>
                  </li>
                  <li>
                    <a href="#">Carteras</a>
                  </li>
                  <li>
                    <a href="#">Ver Todos|</a>
                  </li>
                </ul>
              </li>
              <li className="has-children">
                <span>
                  <a href="#">Accesorios</a>
                  <span className="sub-menu-toggle"></span>
                </span>
                <ul className="offcanvas-submenu">
                  <li className="back-btn">
                    <a href="#">Back</a>
                  </li>
                  <li>
                    <a href="#">Lentes de Sol</a>
                  </li>
                  <li>
                    <a href="#">Sombreros</a>
                  </li>
                  <li>
                    <a href="#">Relojes</a>
                  </li>
                  <li>
                    <a href="#">Joyeria</a>
                  </li>
                  <li>
                    <a href="#">Cinturones</a>
                  </li>
                  <li>
                    <a href="#">Ver Todos</a>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    );
  }
}
export default MobileMenu;
