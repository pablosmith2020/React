import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
import CartEmpty from "../../../img/CartEmpty.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Select from "@material-ui/core/Select";
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';

const Card = () => {
  const { Cart, UpdateProductCount,  TotalAmount, DeleteProdcuct, DeleteAllProdcuct } = useContext(
    CartContext
  );

  const [state, setState] = useState(Cart);

  const handleChange = (event) => {
     setState( event.target.value);
   
    /* let cart2=[] */
    //alert('envio: ' + state.value);
    event.preventDefault();

    console.log(event.target.id)
    console.log(event.target.value)
    
    /* const newCart = Cart.filter((cart)=>  cart.id === event.target.id) 
    console.log(newCart)*/
   /*  console.log(event.target.id)
    const found = Cart.indexOf(event.target.id)

console.log(found )
 */
/* cart2.slice(Cart)
cart2[event.target.id].count= event.target.value; */

    //console.log(Cart[2].count)
    //console.log(event.target.value)
    //console.log(event.target.id) 
 };
const handleSubmit=(event)=>{
  
}


useEffect(() => {
  
console.log(Cart)


}, []);






  const StyleCartEmpty = {
    color: "blue",
    textAlign: "center",
  };

  return (
    <div>
      {Cart.length === 0 ? (
        <div>
          <section style={StyleCartEmpty}>
            <h1>No tienes ningún artículo en tu carrito de compras.</h1>
            <img src={CartEmpty} alt="Carrito Vacio"></img>
          </section>
        </div>
      ) : (
        <div id="shoppingCart" className="table-responsive shopping-cart">
          <table id="root" className="table">
            <thead id="thead1">
              <tr id="tr1">
                <th id="th1">Producto</th>
                <th className="text-center" id="th-header1">
                  Cantidad
                </th>
                <th className="text-center" id="th-header2">
                  Sub Total
                </th>
                <th className="text-center" id="th-header3">
                  Descuento
                </th>
                <th className="text-center" id="th-header4">
                  <a
                    className="btn btn-sm btn-outline-danger"
                    href="/#"
                    onClick={() => DeleteAllProdcuct()}
                  >
                    Eliminar Productos
                  </a>
                </th>
              </tr>
            </thead>
            <tbody id="tbody">
              {Cart?.map((Car) => {
                //console.log(Car.colour)
                return (
                  <tr id={`tr-${Car.id}`} key={`tr-${Car.id}`}>
                    <td id={`td-${Car.id}`}>
                      <div id={`divProduct-${Car.id}`} className="product-item">
                        <a
                          id={`a-${Car.id}`}
                          className="product-thumb"
                          href="/#"
                        >
                          <img
                            id={`img-${Car.id}`}
                            src={Car.img1}
                            alt="Imagen"
                          ></img>
                        </a>
                        <div
                          id={`divProduct2-${Car.id}`}
                          className="product-info"
                        >
                          <h4 id={`h4-${Car.id}`} className="product-title">
                            <a id={`a2-${Car.id}`} href="/#">
                              {Car.description}
                            </a>
                          </h4>
                          <span id={`span1-${Car.id}`}>
                            <em id={`em1-${Car.id}`}>
                              {`Tamaño: ${Car.size}`}{" "}
                            </em>
                          </span>
                          <span id={`span2-${Car.id}`}>
                            <em
                              id={`em-${Car.id}`}
                            >{`Color: ${Car.colour}`}</em>
                          </span>
                        </div>
                      </div>
                    </td>
                    <td id={`td2-${Car.id}`} className="text-center">
                      <div id={`div2-${Car.id}`} className="count-input">
                    
                     {/* 
                     <form autoComplete="off">
                     <FormControl >
            
                        <Select
                          className="form-control"
                          Id={`${Car.id}`}
                          
                          value={Car.count}
                          onChange={handleChange}
                          
                        >
                        <MenuItem value=""></MenuItem>
                        <MenuItem value={1}>1</MenuItem>
                        <MenuItem value={2}>2</MenuItem>
                        <MenuItem value={3}>3</MenuItem>
                        <MenuItem value={4}>4</MenuItem>
                        <MenuItem value={5}>5</MenuItem>

                        </Select>
                      </FormControl>
                      </form> */}


        <form onSubmit={handleSubmit}>
        <label>
          
          <select 
          value={Car.count} 
          onChange={handleChange} 
          id={Car.id}
          
          >
          
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        </label>
              </form>



                      </div>
                    </td>
                    <td
                      id={`td3-${Car.id}`}
                      className="text-center text-lg text-medium"
                    >
                      {" "}
                      $ {Car.total}
                    </td>
                    <td
                      id={`td4-${Car.id}`}
                      className="text-center text-lg text-medium"
                    >
                      {Car.discount} %
                    </td>
                    <td id={`td5-${Car.id}`} className="text-center">
                      <a
                        id={`a3-${Car.id}`}
                        className="remove-from-cart"
                        href="#/"
                      >
                        <i
                          id={`i2-${Car.id}`}
                          onClick={() => DeleteProdcuct(Car.id)}
                        >
                          <FontAwesomeIcon icon={faTrashAlt} />
                        </i>
                      </a>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>

          <div className="shopping-cart-footer">
            <div className="column">
              <form className="coupon-form" method="post">
                <input
                  className="form-control form-control-sm"
                  type="text"
                  placeholder="Numero de Cupon"
                  required=""
                ></input>
                <button
                  className="btn btn-outline-primary btn-sm"
                  type="submit"
                >
                  Aplicar Cupon
                </button>
              </form>
            </div>
            <div className="column text-lg">
              Subtotal:{" "}
              <span id="spanTotalAmount" className="text-medium">
                {TotalAmount}
              </span>
            </div>
          </div>

          <div className="shopping-cart-footer">
            <div className="column">
              <a
                className="btn btn-outline-secondary shop-grid-ls.html"
                href="/#"
              >
                <Link to="/">
                  <i className="icon-arrow-left"></i>&nbsp;Ir a la Tienda
                </Link>
              </a>
            </div>
            <div className="column">
              <a className="btn btn-success" href="/#">
                Comprar
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default Card;
