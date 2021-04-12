import React, { useState, useEffect } from "react";
import axios from "axios";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import img1 from "../../../img/shop/single/01.jpg";
import img2 from "../../../img/shop/single/02.jpg";
import img3 from "../../../img/shop/single/03.jpg";
import img4 from "../../../img/shop/single/04.jpg";
import img5 from "../../../img/shop/single/05.jpg";

const data = [
  {
    original: img1,
    thumbnail: img1,
  },
  {
    original: img2,
    thumbnail: img2,
  },
  {
    original: img3,
    thumbnail: img3,
  },
  {
    original: img4,
    thumbnail: img4,
  },
  {
    original: img5,
    thumbnail: img5,
  },
];

const ItemDescriptionCarrusel = (ProductId) => {
  const [images, setImages] = React.useState(ProductId);

  
  useEffect(() => {
    setImages(Array.from(data));
   }, []);

  return images ? (
    <ImageGallery
      items={data}
      showPlayButton={false}
      showBullets={false}
      showFullscreenButton={false}
      showNav={false}
    />
  ) : null;
};
export default ItemDescriptionCarrusel;
