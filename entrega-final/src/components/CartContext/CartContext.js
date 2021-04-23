import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();

export const CartProvider = props => {
 
let suma=0 
  const [Cart, setCart] = useState([
    {
      description: 'Zapatillas Adidas',
      count: 1,
      price: 43.90,
      discount:25,
      id: 1,
      colour:'Negro',
      size:'Medio',
      total:'43.90',
      img:'1'
    },
    {
        description: 'Gorra Deportiva',
        count: 2,
        price: 24.80,
        discount:0,
        id: 2,
        colour:'Azul',
        size:'Grande',
        total:'12,40',
        img:'2'
    },
    {
        description: 'Cartera Ugart',
        count: 1,
        price: 200.09,
        discount:10,
        id: 3,
        colour:'Blanca',
        size:'XXL',
        total:'200.09',
        img:'3'
    },
  ]);

const [CountElementCar, SetCountElementCar]= useState(0)
const [TotalAmount, SetTotalAmount ] = useState(0)


/* const sumar =() =>{
Cart?.map((Car) =>{
    suma+= Car.price;  
})
}

 */

  useEffect(() => {
    SetTotalAmount(suma)
    SetCountElementCar(Cart.length)
    console.log("Cargue Context")
  }, []);

//console.log("estoy en context:" + CountElementCar)
  const AddProdcut = (idProduct) => {

  };


  
  const DeleteProdcuct = (idProduct) => {
      
};

  return (
    <CartContext.Provider value={{Cart, setCart,TotalAmount,CountElementCar}}  >
      {props.children}
    </CartContext.Provider>
  );
};
