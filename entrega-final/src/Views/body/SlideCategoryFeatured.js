import React, { useState, useEffect } from "react";
import CategoryFeaturedComponent from "../../components/body/CategoryFeatured/CategoryFeaturedComponent";
import { db } from "../../components/Firebase/Firebase";
import Loading from "../../components/Loading/Loading";

const SlideCategoryFeatured = () => {
  const [isloading, setisLoading] = useState(true);
  const [DataCategory, SetDataCategory] = useState([]);

  useEffect(() => {
    const getData = async () => {
      const { docs } = await db.collection("categorys").get();
      const data = docs.map((item) => ({ id: item.id, ...item.data() }));
      SetDataCategory(data);
      setisLoading(false);
    };

    getData();
  }, []);

  return (
    <div>
      {isloading ? (
        <Loading />
      ) : (
        <section className="container padding-top-3x">
          <div className="row">
            {DataCategory?.map((DataCategory) => {
              return (
                <CategoryFeaturedComponent
                  data={DataCategory}
                  key={DataCategory.id}
                />
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
};

export default SlideCategoryFeatured;
