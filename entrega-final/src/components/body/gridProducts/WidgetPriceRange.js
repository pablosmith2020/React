import React from "react";
import { makeStyles } from "@material-ui/core/styles";
//import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
  root: {
    width: 200,
  },
});

function valuetext(value) {
  return `${value}°C`;
}

const WidgetPriceRange = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([0, 1200]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  /*  https://material-ui.com/es/api/slider/ */
  return (
    <div className={classes.root}>
      <h3 className="widget-title">Rango de Precios</h3>

      <Slider
        className="ui-range-slider-footer"
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        color="primary"
      />
    </div>
  );
};

export default WidgetPriceRange;
