import React, { useState, useEffect } from "react";
import { Categorys } from "../../Product/CategoryFeaturedData";
import CategoryFeaturedComponent from "./CategoryFeaturedComponent";

const CategoryFeatured = () => {
  const [DataCategory, SetDataCategory] = useState([]);

  useEffect(() => {
    SetDataCategory(Categorys);
  }, []);

  const ItemPromise = new Promise((data, error) => {
    setTimeout(() => {
      data(Categorys);
    }, 2000);
  });

  console.log(ItemPromise);
  //console.log('data', this.state.DataCategory)
  return (
    <div className="row">
      {DataCategory?.map((Category) => {
        //console.log(Category)
        return (
          <CategoryFeaturedComponent
            data={Category}
            key={Category.product_id}
          />
        );
      })}
    </div>
  );
};

export default CategoryFeatured;
