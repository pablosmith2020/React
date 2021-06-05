import React, { useState } from "react";
import Cards from "react-credit-cards";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import imgCreditCard from "../../../img/credit-cards.png";
import "react-credit-cards/es/styles-compiled.css";
import InputMask from "react-input-mask";
import {
  isValid,
  isExpirationDateValid,
  isSecurityCodeValid,
  getCreditCardNameByNumber,
} from "creditcard.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const WidgetChoosePay = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [numbercreditCardValid, SetnumberCreditCardValid] = useState(true);
  const [expiryValid, SetexpiryValid] = useState(true);
  const [cvcValid, SetcvcValid] = useState(true);

  const [data, setData] = useState({
    cvc: "000",
    expiry: "",
    name: "Nombre Titular",
    number: "",
    focus: "",
  });

  const handleInputChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleInputChangenumber = (e) => {
    SetnumberCreditCardValid(false);
    if (e.target.value.length < 17) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
    if (e.target.value.length > 15) {
      SetnumberCreditCardValid(true);
    } else {
      SetnumberCreditCardValid(false);
    }
  };

  const HandleOnBlurExpiry = (e) => {
    SetexpiryValid(false);
    if (
      isExpirationDateValid(data.expiry.slice(0, 2), data.expiry.slice(3, 5))
    ) {
      SetexpiryValid(true);
    }
  };

  const HandleOnBlurCvc = () => {
    SetcvcValid(false);
    if (numbercreditCardValid) {
      if (isSecurityCodeValid(data.number, data.cvc.replace("_", ""))) {
        SetcvcValid(true);
      } else {
        SetcvcValid(false);
      }
    }
  };

  const handleInputChangeExpiry = (e) => {
    if (e.target.value.length < 6) {
      setData({
        ...data,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleInputFocus = (e) => {
    setData({ ...data, focus: e.target.name });
  };

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div>
      <h4>Seleccione el Método de Pago</h4>
      <hr className="padding-bottom-1x"></hr>
      <Accordion
        expanded={expanded === "panel1"}
        onChange={handleChange("panel1")}
        className="card"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="AccordionSummary"
          id="panel1a-header"
        >
          <Typography role="tab">Tarjeta de Credito</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="card-body">
            <p>
              Aceptamos las siguientes tarjetas de crédito:
              <img
                className="d-inline-block align-middle"
                src={imgCreditCard}
                style={{ width: "120px" }}
                alt="Tarjetas de Credito"
              ></img>
            </p>

            <div id="PaymentForm" className="card-wrapper">
              <Cards
                cvc={data.cvc}
                expiry={data.expiry}
                focused={data.focus}
                name={data.name}
                number={data.number}
              />
            </div>

            <form className="interactive-credit-card row">
              <div className="form-group col-sm-6">
                <input
                  style={
                    !numbercreditCardValid
                      ? { borderColor: "red" }
                      : { borderColor: "#ced4da" }
                  }
                  className=" form-control jp-card-invalid unknown"
                  type="number"
                  name="number"
                  value={data.number}
                  placeholder="Numero de tarjeta"
                  onChange={handleInputChangenumber}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
              <div className="form-group col-sm-6">
                <input
                  className="form-control"
                  type="text"
                  name="name"
                  value={data.value}
                  placeholder="Nombre (tal cual indica la Tarjeta)"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  required
                />
              </div>
              <div className="form-group col-sm-3">
                <InputMask
                  style={
                    !expiryValid
                      ? { borderColor: "red" }
                      : { borderColor: "#ced4da" }
                  }
                  mask="99/99"
                  className="form-control"
                  type="text"
                  name="expiry"
                  value={data.expiry}
                  placeholder="MM/YY"
                  onChange={handleInputChangeExpiry}
                  onFocus={handleInputFocus}
                  onBlur={HandleOnBlurExpiry}
                  required
                />
              </div>
              <div className="form-group col-sm-3">
                <InputMask
                  style={
                    !cvcValid
                      ? { borderColor: "red" }
                      : { borderColor: "#ced4da" }
                  }
                  mask="9999"
                  className="form-control"
                  type="text"
                  name="cvc"
                  value={data.value}
                  placeholder="CVC"
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                  onBlur={HandleOnBlurCvc}
                  required
                />
              </div>

              <div className="col-sm-6">
                <button
                  className="btn btn-outline-primary btn-block margin-top-none"
                  type="submit"
                >
                  Pagar
                </button>
              </div>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel2"}
        onChange={handleChange("panel2")}
        className="card"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="AccordionSummary"
          id="panel1a-header"
        >
          <Typography role="tab">Pagar con PayPal</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="class">
            <p>PayPal: la forma más segura y sencilla de pagar</p>
            <form className="row" >
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="E-mail"
                    required=""
                  ></input>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    required=""
                  ></input>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <a
                    className="navi-link"
                    href="https://www.paypal.com/ar/webapps/mpp/home"
                   
                  >
                    Recordar Credenciales
                  </a>
                  <button
                    className="btn btn-outline-primary margin-top-none"
                    
                  >
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        expanded={expanded === "panel3"}
        onChange={handleChange("panel3")}
        className="card"
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="AccordionSummary"
          id="panel1a-header"
        >
          <Typography role="tab">Pagar Mercado Pago</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <div className="class">
            <p>Mercado Pago: Ingrese sus Credenciales</p>
            <form className="row" >
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="email"
                    placeholder="E-mail"
                    required=""
                  ></input>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input
                    className="form-control"
                    type="password"
                    placeholder="Password"
                    required=""
                  ></input>
                </div>
              </div>
              <div className="col-12">
                <div className="d-flex flex-wrap justify-content-between align-items-center">
                  <a
                    className="navi-link"
                    href="https://www.mercadopago.com.ar/"
                  >
                    Recordar Credenciales
                  </a>
                  <button
                    className="btn btn-outline-primary margin-top-none"
                    
                  >
                    Log In
                  </button>
                </div>
              </div>
            </form>
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};
export default WidgetChoosePay;
