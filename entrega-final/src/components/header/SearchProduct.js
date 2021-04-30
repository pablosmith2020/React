import React, { useContext, useState } from "react";
import { HeaderContext } from "../HeaderContext/HeaderContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";

const SearchProduct = () => {
  const { setMenu } = useContext(HeaderContext);

  const [productSearched, setproductSearched] = useState("");

  const handleInputChange = (e) => {
    setproductSearched(...productSearched, e.target.value);

    console.log(e.target.value);

    if (e.charCode === 13) {
      console.log(" Presione Enter");
    }
  };

  const handleClearInput = (e) => {
    setproductSearched("");
    console.log("deberia borrar");
  };

  return (
    <form className="site-search search-visible">
      <input
        type="text"
        name="productSearched"
        placeholder="Ingrese Producto a Buscar..."
        onKeyPress={handleInputChange}
      />

      <div className="search-tools">
        <span className="clear-search" onClick={handleClearInput}>
          Limpiar
        </span>
        <span className="close-search">
          <i onClick={() => setMenu()}>
            <FontAwesomeIcon icon={faWindowClose} />
          </i>
        </span>
      </div>
    </form>
  );
};
export default SearchProduct;
