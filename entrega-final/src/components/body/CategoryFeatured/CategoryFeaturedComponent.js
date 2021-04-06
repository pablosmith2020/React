import React, { Component } from "react";

const CategoryFeaturedComponent = ({ Category }) => {

    {console.log(Category.brand_description)}

  <div className="col-md-4 col-sm-6 ">
    <div className="card mb-30">
      <a className="card-img-tiles" href="shop-grid-ls.html">
        <div className="inner">
          <div className="main-img">
            <img src={Category.imgs.img1} alt="Category"></img>
          </div>
          <div className="thumblist">
            <img src={Category.imgs.img2} alt="Category"></img>
            <img src={Category.imgs.img3} alt="Category"></img>
          </div>
        </div>
      </a>
      <div className="card-body text-center">
        <h4 className="card-title">{Category.brand_description}</h4>
        <p className="text-muted">A Partir de {Category.price}</p>
        <a className="btn btn-outline-primary btn-sm" href="shop-grid-ls.html">
          Ver Productos
        </a>
      </div>
    </div>
  </div>;
};

export default CategoryFeaturedComponent;