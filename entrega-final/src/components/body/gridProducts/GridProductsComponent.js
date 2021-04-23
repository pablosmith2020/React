import React, { useState, useEffect } from "react";
import GridProductCard from "./GridProductCard";
import { Categorys } from "../../Product/ProductsGridCard";
import WidgetGridProductPagination from "./WidgetGridProductPagination";

const GridProductsComponent = () => {
  const [DataCategory, SetCategory] = useState([]);

  useEffect(() => {
    SetCategory(Categorys);
  }, []);

 

  

  return (
    <div className="col-xl-9 col-lg-8 order-lg-2">
      {/*       <!-- Shop Toolbar--> */}
      <div className="shop-toolbar paddingBottom-1x mb-2">
        <div className="column">
          <div className="shop-sorting">
            <label>Ordenar por:</label>
            <select className="form-control" id="sorting">
              <option>Mas Popular</option>
              <option>Menor Precio</option>
              <option>Mayor Precio</option>
              <option>Mejor Puntuacion</option>
              <option>A - Z </option>
              <option>Z - A </option>
            </select>
            <span className="text-muted">Visualizando:&nbsp;</span>
            <span>1 - 12 Items</span>
          </div>
        </div>
        <div className="column">
          <div className="shop-view">
            {/*   <a className="grid-view active" href="/#">
                        <span></span>
                        <span></span>
                        <span></span></a>
                        <a className="list-view" href="shop-list-ls.html">
                        <span></span>
                        <span></span>
                        <span></span>
                     </a> */}
          </div>
        </div>
      </div>

      {/* <!-- Products Grid--> */}

      <div
        className="isotope-grid cols-3 mb-2"
        style={{ position: "relative" }}
      >
        <div className="gutter-sizer"></div>
        <div className="grid-sizer"></div>

        {/* <!-- Product--> */}

        {DataCategory?.map((Category) => {
          //console.log(Category)
          return <GridProductCard data={Category} key={Category.product_id} />;
        })}
      </div>
      <WidgetGridProductPagination />
    </div>
  );
};

export default GridProductsComponent;
