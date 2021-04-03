import React from "react";
import backgroundImage_1 from "../../img/hero-slider/main-bg.jpg";
import Image_1 from "../../img/hero-slider/logo01.png";
import Image_2 from "../../img/hero-slider/01.png";
import Image_3 from "../../img/hero-slider/logo03.png";
import Image_4 from "../../img/hero-slider/03.png";
import Image_5 from "../../img/hero-slider/logo02.png";
import Image_6 from "../../img/hero-slider/logo01.png";
import Image_7 from "../../img/hero-slider/02.png";

const myStyleBody1 = { width: "1349px" };
const myStyleBody2 = { width: "125px" };
const myStyleBody3 = { backgroundImage: "url(" + backgroundImage_1 + ")" };

class Slider_1 extends React.Component {
  render() {
    return (
      <section className="hero-slider" style={myStyleBody3}>
        <div
          className="owl-carousel large-controls dots-inside owl-loaded owl-drag"
          data-owl-carousel='{ "nav": true, "dots": true, "loop": true, "autoplay": true, "autoplayTimeout": 7000 }'
        >
          <div className="owl-stage-outer">
            <div className="owl-stage owl-stage-outer-owl-stage">
              <div className="owl-item cloned" style={myStyleBody1}>
                <div className="item"></div>
                <div className="container padding-top-3x">
                  <div className="row justify-content-center align-items-center">
                    <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                      <div className="from-bottom">
                        <img
                          className="d-inline-block w-200 mb-4"
                          src={Image_1}
                          alt="Converse"
                        ></img>
                        <div className="h2 text-body text-normal mb-2 pt-1">
                          {" "}
                          Zapatillas All Star{" "}
                        </div>
                        <div className="h2 text-body text-normal mb-4 pb-1">
                          Por Solo
                          <span className="text-bold">$5900</span>
                        </div>
                      </div>
                      <a
                        className="btn btn-primary scale-up delay-1"
                        href="shop-single.html"
                      >
                        {" "}
                        Comprar Ahora{" "}
                      </a>
                    </div>
                    <div className="col-md-6 padding-bottom-2x mb-3">
                      <img
                        className="d-block mx-auto"
                        src={Image_2}
                        alt="Chuck Taylor All Star II"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={myStyleBody1}>
                <div className="item">
                  <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                        <div className="from-bottom">
                          <img
                            className="d-inline-block mb-4"
                            src={Image_3}
                            style={myStyleBody2}
                            alt="Motorola"
                          ></img>
                          <div className="h2 text-body text-normal mb-2 pt-1">
                            {" "}
                            Smart Watch Moto 360 2nd{" "}
                          </div>
                          <div className="h2 text-body text-normal mb-4 pb-1">
                            Por Solo <span className="text-bold">$2990</span>
                          </div>
                        </div>
                        <a
                          className="btn btn-primary scale-up delay-1"
                          href="shop-single.html"
                        >
                          Comprar Ahora
                        </a>
                      </div>
                      <div className="col-md-6 padding-bottom-2x mb-3">
                        <img
                          className="d-block mx-auto"
                          src={Image_4}
                          alt="Moto 360"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item" style={myStyleBody1}>
                <div className="item">
                  <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                        <div className="from-bottom">
                          <img
                            className="d-inline-block w-150 mb-4"
                            src={Image_5}
                            alt="Puma"
                          ></img>
                          <div className="h2 text-body text-normal mb-2 pt-1">
                            Coleccion Mochilas Puma
                          </div>
                          <div className="h2 text-body text-normal mb-4 pb-1">
                            desde <span className="text-bold">$3700.99</span>
                          </div>
                        </div>
                        <a
                          className="btn btn-primary scale-up delay-1"
                          href="shop-grid-ls.html"
                        >
                          Ver Ofertas
                        </a>
                      </div>
                      <div className="col-md-6 padding-bottom-2x mb-3">
                        <img
                          className="d-block mx-auto"
                          src={Image_7}
                          alt="Puma Backpack"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item active" style={myStyleBody1}>
                <div className="item">
                  <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                        <div className="from-bottom">
                          <img
                            className="d-inline-block w-200 mb-4"
                            src={Image_6}
                            alt="Converse"
                          ></img>
                          <div className="h2 text-body text-normal mb-2 pt-1">
                            Zapatillas All Star
                          </div>
                          <div className="h2 text-body text-normal mb-4 pb-1">
                            Por Solo <span className="text-bold">$5900</span>
                          </div>
                        </div>
                        <a
                          className="btn btn-primary scale-up delay-1"
                          href="shop-single.html"
                        >
                          Comprar Ahora{" "}
                        </a>
                        <div className="col-md-6 padding-bottom-2x mb-3"></div>
                      </div>
                      <img
                        className="d-block mx-auto"
                        src={Image_2}
                        alt="Chuck Taylor All Star II"
                      ></img>
                    </div>
                  </div>
                </div>
              </div>

              <div className="owl-item" style={myStyleBody1}>
                <div className="item">
                  <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                        <div className="from-bottom">
                          <img
                            className="d-inline-block mb-4"
                            src={Image_3}
                            style={myStyleBody2}
                            alt="Morotola"
                          ></img>
                          <div className="h2 text-body text-normal mb-2 pt-1">
                            Smart Watch Moto 360 2nd{" "}
                          </div>
                          <div className="h2 text-body text-normal mb-4 pb-1">
                            Por Solo <span className="text-bold">$2990</span>
                          </div>
                        </div>
                        <a
                          className="btn btn-primary scale-up delay-1"
                          href="shop-single.html"
                        >
                          {" "}
                          Comprar Ahora
                        </a>
                      </div>
                      <div className="col-md-6 padding-bottom-2x mb-3">
                        <img
                          className="d-block mx-auto"
                          src={Image_4}
                          alt="Moto 360"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={myStyleBody1}>
                <div className="item">
                  <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                        <div className="from-bottom">
                          <img
                            className="d-inline-block w-150 mb-4"
                            src={Image_4}
                            alt="Puma"
                          ></img>
                          <div className="h2 text-body text-normal mb-2 pt-1">
                            Coleccion Mochilas Puma
                          </div>
                          <div className="h2 text-body text-normal mb-4 pb-1">
                            desde <span className="text-bold">$3700.99</span>
                          </div>
                        </div>
                        <a
                          className="btn btn-primary scale-up delay-1"
                          href="shop-grid-ls.html"
                        >
                          Ver Ofertas
                        </a>
                      </div>
                      <div className="col-md-6 padding-bottom-2x mb-3">
                        <img
                          className="d-block mx-auto"
                          src={Image_7}
                          alt="Puma Backpack"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="owl-item cloned" style={myStyleBody1}>
                <div className="item">
                  <div className="container padding-top-3x">
                    <div className="row justify-content-center align-items-center">
                      <div className="col-lg-5 col-md-6 padding-bottom-2x text-md-left text-center">
                        <div className="from-bottom">
                          <img
                            className="d-inline-block w-200 mb-4"
                            src={Image_1}
                            alt="Converse"
                          ></img>
                          <div className="h2 text-body text-normal mb-2 pt-1">
                            Zapatillas All Star{" "}
                          </div>
                          <div className="h2 text-body text-normal mb-4 pb-1">
                            Por Solo <span className="text-bold">$5900</span>
                          </div>
                        </div>
                        <a
                          className="btn btn-primary scale-up delay-1"
                          href="shop-single.html"
                        >
                          Comprar Ahora
                        </a>
                      </div>
                      <div className="col-md-6 padding-bottom-2x mb-3">
                        <img
                          className="d-block mx-auto"
                          src={Image_2}
                          alt="Chuck Taylor All Star II"
                        ></img>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="owl-nav">
            <div className="owl-prev"></div>
            <div className="owl-next"></div>
          </div>
          <div className="owl-dots">
            <div className="owl-dot">
              <span></span>
            </div>
            <div className="owl-dot active">
              <span></span>
            </div>
            <div className="owl-dot">
              <span></span>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Slider_1;
