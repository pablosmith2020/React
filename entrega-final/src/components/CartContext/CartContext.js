import React, { useState, createContext, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

export const CartContext = createContext();

export const CartProvider = (props) => {
  const [Cart, setCart] = useState([
    {
      description: "Zapatillas Adidas",
      count: 1,
      price: 43.9,
      discount: 25,
      id: 1,
      colour: "Negro",
      size: "Medio",
      total: "43.90",
      img: "1",
    },
    {
      description: "Gorra Deportiva",
      count: 2,
      price: 24.8,
      discount: 0,
      id: 2,
      colour: "Azul",
      size: "Grande",
      total: "12,40",
      img: "2",
    },
    {
      description: "Cartera Ugart",
      count: 1,
      price: 200.09,
      discount: 10,
      id: 3,
      colour: "Blanca",
      size: "XXL",
      total: "200.09",
      img: "3",
    },
  ]);

  const [TotalAmount, SetTotalAmount] = useState(0);

 const TotalAmountCart = () => {
    let suma = 0;
    Cart.map((Car) => (suma += Car.price));
    SetTotalAmount(Number.parseFloat(suma).toFixed(2));
  };

  useEffect((Cart) => {
    TotalAmountCart();
  }, [Cart]);

 

  // Objeto para agregar a mi Array
  const product1 = {
    id: uuidv4(),
    description: "Nuevo Producto",
    price: 2500,
    count: 5,
    img: "4",
    total: 2500,
    colour: "Negro Nuevo Item",
    size: "Medio Nuevo Item",
  };

  const AddProduct = (idProduct) => {
    setCart([...Cart, product1]);
  };

  const DeleteProdcuct = (idProduct) => {
    setCart(Cart.filter((Car) => Car.id !== idProduct));
  };

  const DeleteAllProdcuct = () => {
    setCart(Cart.filter((Car) => Car.id !== Car.id));
  };

  return (
    <CartContext.Provider
      value={{
        Cart,
        AddProduct,
        TotalAmount,

        DeleteProdcuct,
        DeleteAllProdcuct,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
