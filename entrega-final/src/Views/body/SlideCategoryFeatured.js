import React, { useState, useEffect } from "react";
import { Categorys } from "../../components/Product/CategoryFeaturedData";
import CategoryFeaturedComponent from "../../components/body/CategoryFeatured/CategoryFeaturedComponent";

const SlideCategoryFeatured = () => {
  const [DataCategory, SetDataCategory] = useState([]);

  useEffect(() => {
    SetDataCategory(Categorys);
  }, []);

  return (
    <section className="container padding-top-3x">
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
    </section>
  );
};

export default SlideCategoryFeatured;
