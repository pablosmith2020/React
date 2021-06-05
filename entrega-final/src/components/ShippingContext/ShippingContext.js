import React, { useState, createContext, useEffect } from "react";

export const ShippingContext = createContext();


const ValuesShipping = {
  name: "",
  lastName: "",
  email: "",
  phone: "",
  betweenStreets: "",
  country:"",
  province:"",
  zipcoe:"",
  city:"",
  direction:"",
  shippingMethod:"",
  payMethod:"",
};




export const ShippingProvider = (props) => {
  const [shipping, Setshipping] = useState({});


const setDataShipping =()=>{

console.log("Entre a function setDataShipping")

}


const getDataShipping =()=>{

  console.log("Entre a function getDataShipping")
  
  }



  
  useEffect(() => {
    //Cargar de Firebase;
    Setshipping(ValuesShipping)
  }, []);

  return (
    <ShippingContext.Provider
      value={{
        setDataShipping,
        getDataShipping,
      }}
    >
      {props.children}
    </ShippingContext.Provider>
  );
};
