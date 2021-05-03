import React, { useState, useEffect } from "react";
import GridProductCard from "./GridProductCard";
import { db } from "../../Firebase/Firebase";
import Loading from "../../Loading/Loading";
import WidgetGridProductPagination from "./WidgetGridProductPagination";

const GridProductsComponent = () => {
  const [isloading, setisLoading] = useState(true);
  const [DataProduct, SetDataProduct] = useState([]);

  const getData = async () => {
    db.collection("products").onSnapshot((querySnapshot) => {
      const docs = [];
      querySnapshot.forEach((doc) => {
        docs.push({ ...doc.data(), id: doc.id });
      });
      SetDataProduct(docs);
      setisLoading(false);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="col-xl-9 col-lg-8 order-lg-2">
      {isloading ? (
        <Loading />
      ) : (
        <div>
          <div
            className="isotope-grid cols-3 mb-2"
            style={{ position: "relative" }}
          >
            <div className="gutter-sizer"></div>
            <div className="grid-sizer"></div>
            {DataProduct?.map((Product) => {
              return <GridProductCard data={Product} key={Product.id} />;
            })}
          </div>
          <WidgetGridProductPagination />
        </div>
      )}
    </div>
  );
};

export default GridProductsComponent;
