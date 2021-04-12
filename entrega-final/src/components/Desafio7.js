import React, { useState, useEffect } from "react";
import ReactJson from "react-json-view";

export const Desafio7 = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
  // setImages(Array.from());
   getData()
    console.log("Ingrese a Desafio 7");
  }, []);

  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setImages(data))// console.log(data))
      .catch((error) => console.error("Error !!!!!!!!!!"));
  };

  return(
  <div>
    <h1>Entre a Deasfio 7</h1>;
    <ReactJson src={images} />
  </div>
  )
};
export default Desafio7;
