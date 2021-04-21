import React, { useState, createContext, useEffect } from 'react';

export const CartContext = createContext();
export const CartProvider = (props) => {
  const [Cart, setCart] = useState([
    {
      description: 'Zapatillas Adidas',
      count: 1,
      price: 43.90,
      id: 1,
      total:'43.90',
      img:'1'
    },
    {
        description: 'Gorra Deportiva',
        count: 2,
        price: 24.80,
        id: 2,
        total:'12,40',
        img:'2'
    },
    {
        description: 'Cartera Ugart',
        count: 1,
        price: 200.09,
        id: 3,
        total:'200.09',
        img:'3'
    },
  ]);

let suma=0
const [CountElementCar, SetCountElementCar]= useState(Cart.length)
const [TotalAmount, setTotalAmount ] = useState(0)

Cart?.map((Car) =>{
    suma+= Car.price;  
})
  useEffect(() => {
    setTotalAmount(suma)
  }, []);


  const AddProdcut = (idProduct) => {

  };


  
  const DeleteProdcuct = (idProduct) => {
      
};

  return (
    <CartContext.Provider value={[Cart, setCart,TotalAmount,CountElementCar]} >
      {props.children}
    </CartContext.Provider>
  );
};
