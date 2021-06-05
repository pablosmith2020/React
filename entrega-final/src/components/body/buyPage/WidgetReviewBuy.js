import React, { useState, useContext, useEffect } from "react";
import { CartContext } from "../../CartContext/CartContext";
import { Link } from "react-router-dom";
const WidgetReviewBuy = () => {
  const { Cart, TotalAmount } = useContext(CartContext);

  const [state, setState] = useState(Cart);

  console.log(TotalAmount);

  return (
    <div>
      <h4>Revise su orden</h4>
      <hr className="padding-bottom-1x"></hr>

      {/* Product */}
      <div className="table-responsive shopping-cart">
        <table className="table">
          <thead>
            <tr>
              <th>Producto </th>
              <th className="text-center">Subtotal</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {Cart?.map((Car) => {
              //console.log(Car.colour)
              return (
                <tr id={`tr-${Car.id}`} key={`tr-${Car.id}`}>
                  <td>
                    <div className="product-item">
                      <Link to={`Product/${Car.id}`} className="product-thumb">
                        <img
                          id={`img-${Car.id}`}
                          src={Car.img1}
                          alt="Imagen"
                        ></img>
                      </Link>

                      <div className="product-info">
                        <h4 className="product-title">
                          <Link to={`Product/${Car.id}`}>
                            {Car.description}
                            <small>x {Car.count}</small>
                          </Link>
                        </h4>
                        <span>
                          <em>{`Tamaño: ${Car.size}`} </em>
                        </span>
                        <span>
                          <em>{`Color: ${Car.colour}`}</em>
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="text-center text-lg text-medium">
                    $ {Car.total}
                  </td>
                  <td className="text-center">
                    <Link
                      to={"/Cart"}
                      className="btn btn-outline-primary btn-sm"
                    >
                      Editar
                    </Link>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        {/* SubTotal */}
        <div className="shopping-cart-footer">
          <div className="column"></div>
          <div className="column text-lg">
            Subtotal: <span className="text-medium">${TotalAmount}</span>
          </div>
        </div>
        <div className="row padding-top-1x mt-3">
          <div className="col-sm-6">
            <h5>Shipping to:</h5>
            <ul className="list-unstyled">
              <li>
                <span className="text-muted">Client:</span>Daniel Adams
              </li>
              <li>
                <span className="text-muted">Address:</span>44 Shirley Ave. West
                Chicago, IL 60185, USA
              </li>
              <li>
                <span className="text-muted">Phone:</span>+1(808) 764 554 330
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <h5>Payment method:</h5>
            <ul className="list-unstyled">
              <li>
                <span className="text-muted">Credit Card:</span>**** **** ****
                5300
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
export default WidgetReviewBuy;
