import Category1Img1 from "../../../img/shop/categories/category1/01.jpg";
import Category1Img2 from "../../../img/shop/categories/category1/02.jpg";
import Category1Img3 from "../../../img/shop/categories/category1/03.jpg";

import Category2Img1 from "../../../img/shop/categories/category2/01.jpg";
import Category2Img2 from "../../../img/shop/categories/category2/02.jpg";
import Category2Img3 from "../../../img/shop/categories/category2/03.jpg";

import Category3Img1 from "../../../img/shop/categories/category3/01.jpg";
import Category3Img2 from "../../../img/shop/categories/category3/02.jpg";
import Category3Img3 from "../../../img/shop/categories/category3/03.jpg";



const CategoryFeaturedComponent = ({ data }) => {
  const mySwitchFunctionHeaderImg = (param) => {
    switch (param) {
      case "1":
        return [
          <img
            key={data.category_id}
            id={data.category_id}
            src={Category1Img1}
            alt="Category"
          ></img>,
        ];
      case "2":
        return [
          <img
            key={data.category_id}
            id={data.category_id}
            src={Category2Img1}
            alt="Category"
          ></img>,
        ];
      case "3":
        return [
          <img
            key={data.category_id}
            id={data.category_id}
            src={Category3Img1}
            alt="Category"
          ></img>,
        ];
      default:
        return null;
    }
  };

  const mySwitchFunctionBodyImg = (param) => {
    switch (param) {
      case "1":
        return [
          <img key="1" src={Category1Img2} alt="Category"></img>,
          <img key="2" src={Category1Img3} alt="Category"></img>,
        ];
      case "2":
        return [
          <img key="1" src={Category2Img2} alt="Category"></img>,
          <img key="2" src={Category2Img3} alt="Category"></img>,
        ];
      case "3":
        return [
          <img key="1" src={Category3Img2} alt="Category"></img>,
          <img key="2" src={Category3Img3} alt="Category"></img>,
        ];
      default:
        return null;
    }
  };


  return (
    <div className="col-md-4 col-sm-6 ">
      <div className="card mb-30">
        <a className="card-img-tiles" href="shop-grid-ls.html">
          <div className="inner">
            <div className="main-img">
              {mySwitchFunctionHeaderImg(data.category_id)}
            </div>
            <div className="thumblist">
              {mySwitchFunctionBodyImg(data.category_id)}
            </div>
          </div>
        </a>
        <div className="card-body text-center">
          <h4 className="card-title">{data.description}</h4>
          <p className="text-muted">A Partir de {data.price}</p>
          <a
            className="btn btn-outline-primary btn-sm"
            href="shop-grid-ls.html"
          
          >
            Ver Productos
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryFeaturedComponent;
