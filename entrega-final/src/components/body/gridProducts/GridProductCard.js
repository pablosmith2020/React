import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";

import Img1 from "../../../img/products/01.jpg";
import Img2 from "../../../img/products/02.jpg";
import Img3 from "../../../img/products/03.jpg";
import Img4 from "../../../img/products/04.jpg";
import Img5 from "../../../img/products/05.jpg";
import Img6 from "../../../img/products/06.jpg";
import Img7 from "../../../img/products/07.jpg";
import Img8 from "../../../img/products/08.jpg";
import Img9 from "../../../img/products/09.jpg";
import React from "react";

const GridProductCard = ({ data }) => {
  const myStylePiture = { width: "224", height: "144" };

  const mySwitchFunctionImg = (param) => {
    switch (param) {
      case 1:
        return [
          <img
            key={data.product_id}
            id={data.product_id}
            src={Img1}
            alt="Product"
            style={{ myStylePiture }}
          ></img>,
        ];
      case 2:
        return [
          <img
            key={data.product_id}
            id={data.product_id}
            src={Img2}
            alt="Product"
          ></img>,
        ];
      case 3:
        return [
          <img
            key={data.product_id}
            id={data.product_id}
            src={Img3}
            alt="Product"
          ></img>,
        ];
      case 4:
        return [
          <img
            key={data.product_id}
            id={data.product_id}
            src={Img4}
            alt="Product"
          ></img>,
        ];
      case 5:
        return [
          <img
            key={data.product_id}
            id={data.product_id}
            src={Img5}
            alt="Product"
          ></img>,
        ];
      case 6:
        return [
          <img
            key={data.product_id}
            id={data.product_id}
            src={Img6}
            alt="Product"
          ></img>,
        ];
      case 7:
        return [
          <img
            key={data.product_id}
            id={data.product_id}
            src={Img7}
            alt="Product"
          ></img>,
        ];
      case 8:
        return [
          <img
            key={data.product_id}
            id={data.product_id}
            src={Img8}
            alt="Product"
          ></img>,
        ];
      case 9:
        return [
          <img
            key={data.product_id}
            id={data.product_id}
            src={Img9}
            alt="Product"
          ></img>,
        ];
      default:
        return null;
    }
  };

  const AddProduct = (idProducto) => {
    const [setCart] = useContext(CartContext);
    const addproduct = (e) => {
      e.preventDefault();
      setCart((prevCart) => [
        ...prevCart,
        {
          id: 4,
          description: "Nuevo Producto",
          price: 2500,
          count: 1,
          img: "4",
          total: 2500,
        },
      ]);
    };

    console.log("se presiono el boton");
  };

  // TODO- Estilos quemanejan la Card style="position: absolute; left: 0px; top: 0px;"*/
  //const myStyleBody = { position: 'absolute' , left: '0px', top:'0px' };
  //const myStyleBody = { width: "263", high: "308"};
  //console.log(myStyleBody)

  return (
    <div className="grid-item" style={{ width: 263, padding: 18 }}>
      <div className="product-card">
        <div className="product-badge text-danger">
          {data.discount_rate} Off
        </div>
        <Link
          to={`Product/${data.product_id}`}
          className="product-thumb"
        ></Link>
        {mySwitchFunctionImg(data.product_id)}
        <h3 className="product-title">
          <Link to={`Product/${data.product_id}`} className="product-thumb">
            {data.description}
          </Link>
        </h3>
        <h4 className="product-price">
          <del>{data.price_old}</del>
          {data.price}
        </h4>
        <div className="product-buttons">
          <button
            className="btn btn-outline-secondary btn-sm btn-wishlist"
            data-toggle="tooltip"
            title=""
            data-original-title="Favoritos"
          >
            <i className="icon-heart"></i>
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            id={data.product_id}
            onClick={AddProduct(data.product_id)}
          >
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridProductCard;
