import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Typography from "@material-ui/core/Typography";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import WidgetBillingAddress from "./WidgetBillingAddress";
import WidgetChooseShippingMetod from "./WidgetChooseShippingMetod";
import WidgetChoosePay from "./WidgetChoosePay";
import WidgetReviewBuy from "./WidgetReviewBuy";

import {
  faLongArrowAltRight,
  faLongArrowAltLeft,
} from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },

  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  active: {
    backgroundColor: "#0da9ef",
    color: "#fff",
    cursor: "default",
  },
}));

function getSteps() {
  return ["Direccion", "Metodo de Envio", "Revise su Pedido", "Pagar "];
}

const StepsBuys = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const [skipped, setSkipped] = useState(new Set());
  const steps = getSteps();

  const isStepOptional = (step) => {
    return step === 8;
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    //validar datos personales
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // You probably want to guard against something like this,
      // it should never occur unless someone's actively trying to break something.
      throw new Error("You can't skip a step that isn't optional.");
    }

    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep);
      return newSkipped;
    });
  };

  const isStepSkipped = (step) => {
    return skipped.has(step);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} alternativeLabel>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          if (isStepOptional(index)) {
            labelProps.optional = (
              <Typography variant="caption">Optional</Typography>
            );
          }
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {/* Componentes */}

      {(() => {
        switch (activeStep) {
          case 0:
            return <WidgetBillingAddress />;
          //break;
          case 1:
            return <WidgetChooseShippingMetod />;
          //break;
          case 2:
            return <WidgetReviewBuy />;
          case 3:
            return <WidgetChoosePay />; //<Test /> ;
          default:
            return "Error al cargar Datos";
            console.log(steps);
        }
      })()}

      {activeStep === steps.length ? (
        <div>
          <Typography className={classes.instructions}>
            Todos los pasos completados
          </Typography>
          <div
            className="btn btn-outline-secondary"
            href="/"
            onClick={handleReset}
          >
            <i className="icon-arrow-left"></i>
            <span className="hidden-xs-down">&nbsp;Reset</span>
          </div>

          {/* 
            <Button onClick={handleReset} className='btn btn-primary'>
              Reset
            </Button> */}
        </div>
      ) : (
        <div className="checkout-footer margin-top-1x">
          <div className="column">
            {activeStep > 0 ? (
              <div
                className="btn btn-outline-secondary"
                href="/"
                onClick={handleBack}
              >
                <i>
                  <FontAwesomeIcon icon={faLongArrowAltLeft} />
                </i>
                <span className="hidden-xs-down">&nbsp;Volver</span>
              </div>
            ) : null}

            {/* <Button disabled={activeStep === 0} onClick={handleBack} className='btn btn-outline-secondary'>
                        Volver
                    </Button> */}
            {isStepOptional(activeStep) && (
              <div className="btn btn-primary" href="/" onClick={handleSkip}>
                <span className="hidden-xs-down">Continue&nbsp;</span>
                <i className="icon-arrow-right"></i>
                Skip
              </div>
            )}
          </div>
          <div className="column">
            <div className="btn btn-primary" href="/" onClick={handleNext}>
              {/*  <span ClassName="hidden-xs-down">&nbsp;Volver</span> */}

              {/*  <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                className='btn btn-primary'
              > */}
              {activeStep === steps.length - 1 ? "Comprar " : "Continuar "}
              <i>
                <FontAwesomeIcon icon={faLongArrowAltRight} />
              </i>
            </div>
          </div>
        </div>
        //   </div>
        // </div>
      )}
    </div>
  );
};
export default StepsBuys;
