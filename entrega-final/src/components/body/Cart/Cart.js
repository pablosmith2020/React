import { render } from "@testing-library/react";



 const Card = () => {


    return(

<div id="shoppingCart" className="table-responsive shopping-cart">
      <table id="root" className="table">
        <thead id="thead1">
            <tr id="tr1">
                <th id="th1">Producto</th>
                <th className="text-center" id="th-header1">Cantidad</th>
                <th className="text-center" id="th-header2">Sub Total</th>
                <th className="text-center" id="th-header3">Descuento</th>
                <th className="text-center" id="th-header4">
                    <a className="btn btn-sm btn-outline-danger" href="#" onclick="removeAllElementCart()">Eliminar Productos</a>
                </th>
            </tr>
        </thead>
        <tbody id="tbody">
            <tr id="tr-1205">
                <td id="td-1205">
                    <div id="divProduct-1205" className="product-item">
                        <a id="a-1205" className="product-thumb" href="/#">
                            <img id="img-1205" src="img/cart-dropdown/00.jpg" alt="Imagen"></img>
                        </a>
                        <div id="divProduct2-1205" className="product-info">
                        <h4 id="h4-1205" className="product-title">
                            <a id="a2-1205" href="/#">Zapatilla Adidas</a>
                        </h4>
                        <span id="span1-1205">
                            <em id="em1-1205">Tamaño: Gris Oscuro</em>
                        </span>
                        <span id="span2-1205">
                            <em id="em-1205">Color: Mediano</em>
                        </span>
                    </div>
                    </div>
                </td>
                <td id="td2-1205" className="text-center">
                    <div id="div2-1205" className="count-input">
                        <select id="slect-1205" className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </td>
                <td id="td3-1205" className="text-center text-lg text-medium">43.90</td>
                <td id="td4-1205" className="text-center text-lg text-medium">0</td>
                <td id="td5-1205" className="text-center">
                    <a id="a3-1205" className="remove-from-cart" href="/#" data-toggle="tooltip" title="" data-original-title="Eliminar">
                        <i id="i2-1205" className="icon-cross" onclick="removeElementCart(0,1205)"></i>
                    </a>
                </td>
            </tr>
            <tr id="tr-1405"><td id="td-1405">
                <div id="divProduct-1405" className="product-item">
                    <a id="a-1405" className="product-thumb" href="/#">
                        <img id="img-1405" src="img/cart-dropdown/01.jpg" alt="Imagen"></img>
                    </a>
                <div id="divProduct2-1405" className="product-info">
                    <h4 id="h4-1405" className="product-title">
                        <a id="a2-1405" href="/#">Gorra Deportiva</a>
                    </h4>
                <span id="span1-1405">
                    <em id="em1-1405">Tamaño: Negra</em>
                </span>
                <span id="span2-1405">
                    <em id="em-1405">Color: Grande</em>
                </span>
            </div>
            </div>
                </td>
                    <td id="td2-1405" className="text-center">
                        <div id="div2-1405" className="count-input">
                            <select id="slect-1405" className="form-control">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </td>
                <td id="td3-1405" className="text-center text-lg text-medium">24.89</td>
                <td id="td4-1405" className="text-center text-lg text-medium">0</td>
                <td id="td5-1405" className="text-center">
                    <a id="a3-1405" className="remove-from-cart" href="/#" data-toggle="tooltip" title="" data-original-title="Eliminar">
                        <i id="i2-1405" className="icon-cross" onclick="removeElementCart(1,1405)"></i>
                    </a>
                </td>
            </tr>
            <tr id="tr-8805">
                <td id="td-8805">
                    <div id="divProduct-8805" className="product-item">
                        <a id="a-8805" className="product-thumb" href="/#">
                            <img id="img-8805" src="img/cart-dropdown/02.jpg" alt="Imagen"></img>
                        </a>
                        <div id="divProduct2-8805" className="product-info">    
                            <h4 id="h4-8805" className="product-title"> 
                                <a id="a2-8805" href="/#l">Cartera Ugart</a>
                            </h4>
                            <span id="span1-8805">
                                <em id="em1-8805">Tamaño: Verde</em>
                            </span>
                            <span id="span2-8805">
                                <em id="em-8805">Color: Extra Grande</em>
                            </span>
                        </div>
                    </div>
                </td>
                <td id="td2-8805" className="text-center">
                    <div id="div2-8805" className="count-input">
                        <select id="slect-8805" className="form-control">
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                </td>
                <td id="td3-8805" className="text-center text-lg text-medium">200.09</td>
                <td id="td4-8805" className="text-center text-lg text-medium">0</td>
                <td id="td5-8805" className="text-center">
                    <a id="a3-8805" className="remove-from-cart" href="/#" data-toggle="tooltip" title="" data-original-title="Eliminar">
                        <i id="i2-8805" className="icon-cross" onclick="removeElementCart(2,8805)"></i>
                    </a>
                </td>
            </tr>
        </tbody>
    </table>
</div> 



    )
};
export default ItemDescription;