import React, { useState, createContext } from "react";
import { v4 as uuidv4 } from "uuid";

export const BrandContext = createContext();
export const BrandProvider = (props) => {
  const [Brands] = useState({
    id: "root",
    count: "(1139)",
    name: "Zapatos",
    children: [
      {
        id: "root2",
        count: "(508)",
        name: "Mujer",
        children: [
          {
            id: uuidv4(),
            name: "Zapatillas",
          },
          {
            id: uuidv4(),
            name: "Zapatos Tacos",
          },
          {
            id: uuidv4(),
            name: "Mocasines",
          },
          {
            id: uuidv4(),
            name: "Sandalias",
          },
        ],
      },

      {
        id: "root3",
        count: "(423)",
        name: "Hombres",

        children: [
          {
            id: uuidv4(),
            name: "Botas",
          },
          {
            id: uuidv4(),
            name: "Zapatillas",
          },
          {
            id: uuidv4(),
            name: "Mocasines",
          },
          {
            id: uuidv4(),
            name: "Sandalias",
          },
        ],
      },
    ],

    /* {id: "root3", count: "(2356)", name: "Ropa" },
     {id: "root4", count: "(420)", name: "Bolsos"} ,
     {id: "root5", count: "(874)", name: "Accesorios" } */
  });

  return (
    <BrandContext.Provider value={{ Brands }}>
      {props.children}
    </BrandContext.Provider>
  );
};
