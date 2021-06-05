import React, { useState, createContext, useEffect } from "react";
import { db } from "../Firebase/Firebase";

export const CartContext = createContext();

const ValuesnewProductToCart = {
  description: "",
  img1: "",
  price: "",
  total: "",
  count: "",
};

export const CartProvider = (props) => {
  const [Cart, setCart] = useState([]);
  const [newProductToCart, setNewProductToCart] = useState(
    ValuesnewProductToCart
  );
  const [productDetails, setproductDetails] = useState();
  const [TotalAmount, SetTotalAmount] = useState(0);

  const getData = async () => {
    const docs = [];
    db.collection("cart").onSnapshot((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      setCart(docs);
    });
  };

  const TotalAmountCart = () => {
    let suma = 0;
    Cart.map((Car) => (suma += Car.price));
    SetTotalAmount(Number.parseFloat(suma).toFixed(2));
  };

  const getDataByIdProduct = (idProduct) => {
    console.log("Prodcuto a Buscar: " + idProduct);
    // Recupero la informacion or ID de forma correcta
    db.collection("products")
      .doc(idProduct)
      .get()
      .then((snapshot) => setproductDetails(snapshot.data()));
    // Visualizo la misma LUEGO DEL SEGUNDO CLICK, YA QUE AL PRIMERO EL OBJETO ES UNDEFINED  !!! ESTE ERROR
  //console.log({ productDetails });
    // Resguardo en el Objeto para poder dar el alta en el Documento Cart de Firebase (cargo un nuevo objeto dado que difiere la estructura de Prodcut con cart)
    //  setNewProductToCart({ description : productDetails.description,img1 :productDetails.img1,price :productDetails.price, total: productDetails.price, count: "1"})
    // SaveNewProductToCart()

return productDetails;

    console.log({ newProductToCart });
  };

  /* const SaveNewProductToCart = async () => {
    await db.collection("cart").doc().set(newProductToCart);
    console.log("alta producto");
  }; */

  
  const AddProduct = (idProduct) => {
    getDataByIdProduct(idProduct);


if(productDetails){

console.log(productDetails)

}else{
  console.log("No existe")
}


// Aca debo validar su existe hago un Update a la cantidad de lo contario lo doy de alta     


  };

  const DeleteProdcuct = async (idProduct) => {
    if (window.confirm("Se eliminara el Producto, ¿Esta seguro?")) {
      await db.collection("cart").doc(idProduct).delete();
      console.log("Producto eliminado");
    }
  };

  const DeleteAllProdcuct = () => {
    setCart(Cart.filter((Car) => Car.id !== Car.id));
  };

  const UpdateProductCount = (idProduct,newcount) => { 
    const newProduct = Cart.map((elem) => {
      if (elem.id === idProduct) {
        return {
          ... elem,
          count: newcount,
        }
      }
      return elem
    });
// Aqui debo actualizar Firebase
    setCart(newProduct)
  };



  useEffect(() => {
    TotalAmountCart();
    getData();
  }, []);

  return (
    <CartContext.Provider
      value={{
        Cart,
        setCart,
        AddProduct,
        UpdateProductCount,
        TotalAmount,
        DeleteProdcuct,
        DeleteAllProdcuct,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};
