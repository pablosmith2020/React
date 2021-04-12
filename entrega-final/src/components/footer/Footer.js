import React from "react";
import foto1 from "../../img/payment_methods.png";


class Footer extends React.Component {
  render() {
    return (
      <div className="site-footer">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6">
              <section className="widget widget-light-skin">
                <h3 className="widget-title">Contactenos</h3>
                <p className="text-white">Telefono: +54 011 4569-9655</p>
                <ul className="list-unstyled text-sm text-white">
                  <li>
                    <span className="opacity-50">Lunes-Viernes:</span>9:00 am -
                    18:00 pm
                  </li>
                  <li>
                    <span className="opacity-50">Sabados:</span>09:00 am - 13:00
                    pm
                  </li>
                </ul>
                <p>
                  <a className="navi-link-light" href="/#">
                    soporte@unishop.com
                  </a>
                </p>
                <a
                  className="social-button shape-circle sb-facebook sb-light-skin"
                  href="/#"
                >
                  <i className="socicon-facebook"></i>
                </a>
                <a
                  className="social-button shape-circle sb-twitter sb-light-skin"
                  href="/#"
                >
                  <i className="socicon-twitter"></i>
                </a>
                <a
                  className="social-button shape-circle sb-instagram sb-light-skin"
                  href="/#"
                >
                  <i className="socicon-instagram"></i>
                </a>
                <a
                  className="social-button shape-circle sb-google-plus sb-light-skin"
                  href="/#"
                >
                  <i className="socicon-googleplus"></i>
                </a>
              </section>
            </div>
            <div className="col-lg-3 col-md-6">
              <section className="widget widget-light-skin">
                <h3 className="widget-title">Nuestras Apps</h3>
                <a className="market-button apple-button mb-light-skin" href="/#">
                  <span className="mb-subtitle">Descargarla</span>
                  <span className="mb-title">App Store</span>
                </a>
                <a className="market-button google-button mb-light-skin" href="/#">
                  <span className="mb-subtitle">Download on the</span>
                  <span className="mb-title">Google Play</span>
                </a>
                <a className="market-button windows-button mb-light-skin" href="/#">
                  <span className="mb-subtitle">Download on the</span>
                  <span className="mb-title">Windows Store</span>
                </a>
              </section>
            </div>
            <div className="col-lg-3 col-md-6">
              <section className="widget widget-links widget-light-skin">
                <h3 className="widget-title">Sobre Nosotros</h3>
                <ul>
                  <li>
                    <a href="/#">Carreras</a>
                  </li>
                  <li>
                    <a href="/#">Acerca de Nosotros</a>
                  </li>
                  <li>
                    <a href="/#">Nuestra Historia</a>
                  </li>
                  <li>
                    <a href="/#">Servicios</a>
                  </li>
                  <li>
                    <a href="/#">Nuestro Blog</a>
                  </li>
                </ul>
              </section>
            </div>
            <div className="col-lg-3 col-md-6">
              <section className="widget widget-links widget-light-skin">
                <h3 className="widget-title">Informacion de Cuenta - Envio</h3>
                <ul>
                  <li>
                    <a href="/#">Su Cuenta</a>
                  </li>
                  <li>
                    <a href="/#">Tasas de Envios &amp; Politicas</a>
                  </li>
                  <li>
                    <a href="/#">Reembolsos $ Reemplazos</a>
                  </li>
                  <li>
                    <a href="/#">Impuestos</a>
                  </li>
                  <li>
                    <a href="/#">Informacion de Envio</a>
                  </li>
                  <li>
                    <a href="/#">Programa de Afiliacion</a>
                  </li>
                </ul>
              </section>
            </div>
          </div>
          <hr className="hr-light mt-2 margin-bottom-2x"></hr>
          <div className="row">
            <div className="col-md-7 padding-bottom-1x">
              <div className="margin-bottom-1x">
                {" "}
                {/* style="max-width: 615px;">*/}
                <img src={foto1} alt="Payment Methods"></img>
              </div>
            </div>
            <div className="col-md-5 padding-bottom-1x">
              <div className="margin-top-1x hidden-md-up"> </div>
              <form
                className="subscribe-form"
                action="http://rokaux.us12.list-manage.com/subscribe/post?u=c7103e2c981361a6639545bd5&amp;amp;id=1194bb7544"
                method="post"
                target="_blank"
              >
                <div className="clearfix"></div>
                <div className="input-group input-light">
                  <input
                    className="form-control"
                    type="email"
                    name="EMAIL"
                    placeholder="Ingrese su  e-mail"
                  ></input>
                  <span className="input-group-addon">
                    <i className="icon-mail"></i>
                  </span>
                </div>
                <div>
                  {/*<div  style="position: absolute; left: -5000px;" aria-hidden="true">*/}
                  <input
                    type="text"
                    name="b_c7103e2c981361a6639545bd5_1194bb7544"
                    tabIndex="-1"
                  ></input>

                  <button className="btn btn-primary" type="submit">
                    <i className="icon-check"></i>
                  </button>
                </div>
                <span className="form-text text-sm text-white opacity-50">
                  Suscríbase a nuestro boletín para recibir ofertas de
                  descuentos anticipados, últimas noticias, información de
                  ventas y promociones.
                </span>
              </form>
            </div>

            <p className="footer-copyright">
              © Derehos Reservados &nbsp;
              <i className="icon-heart text-danger"></i>
              <a href="/#" target="_blank">
                {" "}
                &nbsp;por Pablo Smith
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
