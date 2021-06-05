import React from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Rating from "@material-ui/lab/Rating";
import "../../header/MenuBurger.css";

const GridProductCard = ({ data }) => {
  const { AddProduct } = useContext(CartContext);

  return (
    <div className="grid-item" style={{ width: 263, padding: 18 }}>
      <div className="product-card">
        <div className="rating-stars">
          <Rating name="half-rating" defaultValue={2} precision={1} readOnly />
        </div>
        <div className="product-badge text-danger">
          {data.discount_rate !== 0 ? data.discount_rate + "% off" : null}
        </div>
        <Link to={`Product/${data.product_id}`} className="product-thumb">
          <img
            key={data.product_id}
            id={data.product_id}
            src={data.img1}
            alt="Product"
            className="myStylePiture"
          ></img>
        </Link>
        <h3 className="product-title">
          <Link to={`Product/${data.id}`} className="product-thumb">
            {data.description}
          </Link>
        </h3>
        <h4 className="product-price">
          <del>{data.discount_rate !== 0 ? "$" + data.price_old : null}</del>
          {"$" + data.price}
        </h4>
        <div className="product-buttons">
          <button className="btn btn-outline-secondary btn-sm btn-wishlist">
            <FontAwesomeIcon icon={faHeart} fixedWidth color="#39B5F1" />
          </button>
          <button
            className="btn btn-outline-primary btn-sm"
            id={data.id}
            onClick={() => AddProduct(data.id)}
          >
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridProductCard;
