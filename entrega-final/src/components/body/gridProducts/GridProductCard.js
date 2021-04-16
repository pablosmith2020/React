import Img1 from "../../../img/products/01.jpg";
import Img2 from "../../../img/products/02.jpg";
import Img3 from "../../../img/products/03.jpg";
import Img4 from "../../../img/products/04.jpg";
import Img5 from "../../../img/products/05.jpg";
import Img6 from "../../../img/products/06.jpg";
import Img7 from "../../../img/products/07.jpg";
import Img8 from "../../../img/products/08.jpg";
import Img9 from "../../../img/products/09.jpg";

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

  {
    /* TODO- Estilos quemanejan la Card style="position: absolute; left: 0px; top: 0px;"*/
  }
  //const myStyleBody = { position: 'absolute' , left: '0px', top:'0px' };
  //const myStyleBody = { width: "263", high: "308"};
  //console.log(myStyleBody)

  return (
    <div className="grid-item" style={{ width: 263, padding: 18 }}>
      <div className="product-card">
        <div className="product-badge text-danger">
          {data.discount_rate} Off
        </div>
        <a className="product-thumb" href="/#">
          {/* <img src={Img1} alt="Product"></img> */}
          {mySwitchFunctionImg(data.product_id)}
        </a>
        <h3 className="product-title">
          <a href="/#">{data.description}</a>
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
            data-toast=""
            data-toast-type="success"
            data-toast-position="topRight"
            data-toast-icon="icon-circle-check"
            data-toast-title="Product"
            data-toast-message="Añadido con éxito al carrito!"
          >
            AGREGAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default GridProductCard;
