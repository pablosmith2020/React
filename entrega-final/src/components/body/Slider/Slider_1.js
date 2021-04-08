import React from "react";
import RBCarousel from "react-bootstrap-carousel";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

import backgroundImage_1 from "../../../img/hero-slider/main-bg.jpg";
import Image_1 from "../../../img/hero-slider/logo01.png";
import Image_2 from "../../../img/hero-slider/01.png";
import Image_3 from "../../../img/hero-slider/logo03.png";
import Image_4 from "../../../img/hero-slider/03.png";
import Image_5 from "../../../img/hero-slider/logo02.png";
import Image_6 from "../../../img/hero-slider/logo01.png";
import Image_7 from "../../../img/hero-slider/02.png";

const myStyleBody3 = { backgroundImage: "url(" + backgroundImage_1 + ")" };
const myStyleBody1 = { width: "1349px" };
const myStyleBody2 = { width: "125px" };


const icon_glass = <span className="fa fa-glass" />;
const icon_music = <span className="fa fa-music" />;

const Row = React.memo(function Row(props) {
  return <div className="row">{props.children}</div>;
});
const Col = React.memo(function Col(props) {
  return (
    <div className={`col-sm-${props.span}`} style={props.style}>
      {props.children}
    </div>
  );
});

class Slider_1 extends React.PureComponent {
  constructor(props) {
    super(props);
    this.slider = React.createRef();
    this.state = {
      autoplay: true,
    };
  }
  _onSelect = (active, direction) => {
    console.log(`active=${active} && direction=${direction}`);
  };
  _visiableOnSelect = (active) => {
    console.log(`visiable onSelect active=${active}`);
  };
  _slideNext = () => {
    this.slider.current.slideNext();
  };
  _slidePrev = () => {
    this.slider.current.slidePrev();
  };
  _goToSlide = () => {
    this.slider.current.goToSlide(1);
  };
  _autoplay = () => {
    this.setState({ autoplay: !this.state.autoplay });
  };
  _changeIcon = () => {
    let { leftIcon, rightIcon } = this.state;
    leftIcon = leftIcon ? undefined : icon_glass;
    rightIcon = rightIcon ? undefined : icon_music;
    this.setState({ leftIcon, rightIcon });
  };

  render() {
    return (
      <div className="container-fluid" style={{ paddingBottom: 20 }}>
        <Row>
          <Col span={12} style={{ marginTop: 20 }}>
            <RBCarousel className="carousel-fade" version={4}>
              <div>
                <img
                  className="d-block w-100"
                  src={backgroundImage_1}
                  alt="Third slide"
                />
                <div className="carousel-center">
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
                <div className="carousel-caption"></div>
              </div>

              <div>
                <img
                  className="d-block w-100"
                  src={backgroundImage_1}
                  alt="Third slide"
                />
                <span className="carousel-center">
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
                </span>
                <div className="carousel-caption"></div>
              </div>
              <div>
                <img
                  className="d-block w-100"
                  src={backgroundImage_1}
                  alt="Third slide"
                />
                <span className="carousel-center">
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
                </span>
                <div className="carousel-caption"></div>
              </div>
            </RBCarousel>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Slider_1;
