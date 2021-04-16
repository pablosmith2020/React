import ItemDescriptionCarrusel from "./ItemDescriptionCarrusel";

import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import img1 from "../../../img/reviews/01.jpg";
import img2 from "../../../img/reviews/02.jpg";
import img3 from "../../../img/reviews/03.jpg";


const ProductId = 1;

export const itemDescription = () => {
  return (
    <div className="container padding-bottom-3x mb-1">
      <div className="row">
        {/*  <!-- Poduct Gallery--> */}
        <div className="col-md-6">
          <div className="product-gallery">
            <span className="product-badge text-danger">30% Off</span>
            <ItemDescriptionCarrusel
              items={ProductId}
              showPlayButton={false}
              showBullets={false}
              showNav={false}
            />
          </div>
        </div>

        {/*<!-- Product Info--> */}
        <div className="col-md-6">
          <div className="padding-top-2x mt-2 hidden-md-up"></div>
          <div className="rating-stars">
            <i className="icon-star filled"></i>
            <i className="icon-star filled"></i>
            <i className="icon-star filled"></i>
            <i className="icon-star filled"></i>
            <i className="icon-star"></i>
          </div>
          <span className="text-muted align-middle">
            &nbsp;&nbsp;4.2 | 3 Opiniones de los usuarios
          </span>
          <h2 className="padding-top-1x text-normal">
            Reebok Royal CL Jogger 2
          </h2>
          <span className="h2 d-block">
            <del className="text-muted text-normal">$68.00</del>&nbsp; $47.60
          </span>
          <p>
            Este calzado está diseñado para las actividades Indoor, si lo tuyo
            es el Gimnasio, en este modelo encontrarás comodidad, estabilidad,
            ligereza y estilo. La parte delantera del pie no muestra una sola
            costura, toda la capellada está tejida en una sola pieza, con puntos
            más abiertos en la zona donde debe respirar el pie y más ajustados
            donde el pie necesita sujeción. Los pasa-cordones son elastizados y
            el tobillo está protegido por un cuello alto y anatómico. La suela
            es una suela de entrenamiento por excelencia gracias a su tecnología
            A-Livezone que ofrece dos capas de distinta densidad en su parte
            media. El impacto está amortiguado por el vacío entre ambas piezas
            de la suela.
          </p>
          <div className="row margin-top-1x">
            <div className="col-sm-4">
              <div className="form-group">
                <label htmlFor="size">Talle</label>
                <select className="form-control" id="size">
                  <option>Seleccione</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                  <option>41</option>
                  <option>42</option>
                </select>
              </div>
            </div>
            <div className="col-sm-5">
              <div className="form-group">
                <label htmlFor="color">Color</label>
                <select className="form-control" id="color">
                  <option>Blanco/Rojo/Azul</option>
                  <option>Negro/Naranja/Verde</option>
                  <option>Gris/Morado/Blanco</option>
                </select>
              </div>
            </div>
            <div className="col-sm-3">
              <div className="form-group">
                <label htmlFor="quantity">Cantidad </label>
                <select className="form-control" id="quantity">
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                </select>
              </div>
            </div>
          </div>
          <div className="pt-1 mb-2">
            <span className="text-medium">SKU:</span> #21457832
          </div>
          <div className="padding-bottom-1x mb-2">
            <span className="text-medium">Categories:&nbsp;</span>
            <a className="navi-link" href="/#">
              Calzado de hombre,
            </a>
            <a className="navi-link" href="/#">
              zapatillas deportivas,
            </a>
            <a className="navi-link" href="/#">
              calzado deportivo
            </a>
          </div>
          <div className="mb-3">
            <div className="d-flex flex-wrap justify-content-between">
              <div className="entry-share mt-2 mb-2">
                <span className="text-muted">Compartir:</span>
                <div className="share-links">
                  <a
                    className="social-button shape-circle sb-facebook"
                    href="/#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Facebook"
                  >
                    <i className="socicon-facebook"></i>
                  </a>
                  <a
                    className="social-button shape-circle sb-twitter"
                    href="/#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Twitter"
                  >
                    <i className="socicon-twitter"></i>
                  </a>
                  <a
                    className="social-button shape-circle sb-instagram"
                    href="/#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Instagram"
                  >
                    <i className="socicon-instagram"></i>
                  </a>
                  <a
                    className="social-button shape-circle sb-google-plus"
                    href="/#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title=""
                    data-original-title="Google +"
                  >
                    <i className="socicon-googleplus"></i>
                  </a>
                </div>
              </div>
              <div className="sp-buttons mt-2 mb-2">
                <button
                  className="btn btn-outline-secondary btn-sm btn-wishlist"
                  data-toggle="tooltip"
                  title=""
                  data-original-title="Favoritos"
                >
                  <i className="icon-heart"></i>
                </button>
                <button
                  className="btn btn-primary"
                  data-toast=""
                  data-toast-type="success"
                  data-toast-position="topRight"
                  data-toast-icon="icon-circle-check"
                  data-toast-title="Product"
                  data-toast-message="Añadido con éxito al carrito!"
                >
                  <i className="icon-bag"></i>Comprar
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Product Tabs--> */}
        <div className="col-lg-10 offset-lg-1">
          <Tabs defaultActiveKey="description" id="uncontrolled-tab-example">
            <Tab eventKey="description" title="Descripcion">
              <p>
                Este calzado está diseñado para las actividades Indoor, si lo
                tuyo es el Gimnasio, en este modelo encontrarás comodidad,
                estabilidad, ligereza y estilo. La parte delantera del pie no
                muestra una sola costura, toda la capellada está tejida en una
                sola pieza, con puntos más abiertos en la zona donde debe
                respirar el pie y más ajustados donde el pie necesita sujeción.
                Los pasa-cordones son elastizados y el tobillo está protegido
                por un cuello alto y anatómico. La suela es una suela de
                entrenamiento por excelencia gracias a su tecnología A-Livezone
                que ofrece dos capas de distinta densidad en su parte media. El
                impacto está amortiguado por el vacío entre ambas piezas de la
                suela.
              </p>
              <p className="mb-30">
                Este calzado está diseñado para las actividades Indoor, si lo
                tuyo es el Gimnasio, en este modelo encontrarás comodidad,
                estabilidad, ligereza y estilo. La parte delantera del pie no
                muestra una sola costura, toda la capellada está tejida en una
                sola pieza, con puntos más abiertos en la zona donde debe
                respirar el pie y más ajustados donde el pie necesita sujeción.
                Los pasa-cordones son elastizados y el tobillo está protegido
                por un cuello alto y anatómico. La suela es una suela de
                entrenamiento por excelencia gracias a su tecnología A-Livezone
                que ofrece dos capas de distinta densidad en su parte media. El
                impacto está amortiguado por el vacío entre ambas piezas de la
                suela.
              </p>
              <div className="row">
                <div className="col-sm-6">
                  <dl>
                    <dt>Materiales:</dt>
                    <dd>Cuero, Algodón, Caucho, Espuma</dd>
                    <dt>Talles Disponibles:</dt>
                    <dd>37,38, 39, 40, 41, 42, 43</dd>
                    <dt>olores Disponibles:</dt>
                    <dd>Blanco / rojo / azul, negro / naranja / verde</dd>
                  </dl>
                </div>
                <div className="col-sm-6">
                  <dl>
                    <dt>Modelo:</dt>
                    <dd>2016</dd>
                    <dt>Fabricante:</dt>
                    <dd>Reebok Inc.</dd>
                    <dt>Hecho en:</dt>
                    <dd>Taiwan</dd>
                  </dl>
                </div>
              </div>
            </Tab>
            <Tab eventKey="profile" title="Comentarios">
              <div className="comment">
                <div className="comment-author-ava">
                  <img src={img1} alt="Review author"></img>
                </div>
                <div className="comment-body">
                  <div className="comment-header d-flex flex-wrap justify-content-between">
                    <h4 className="comment-title">
                      Calidad media por el precio
                    </h4>
                    <div className="mb-2">
                      <div className="rating-stars">
                        <i className="icon-star filled"></i>
                        <i className="icon-star filled"></i>
                        <i className="icon-star filled"></i>
                        <i className="icon-star"></i>
                        <i className="icon-star"></i>
                      </div>
                    </div>
                  </div>
                  <p className="comment-text">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                    corrupti quos dolores et quas molestias excepturi sint
                    occaecati cupiditate non provident, similique sunt in culpa
                    qui officia deserunt mollitia animi, id est laborum et
                    dolorum fuga.
                  </p>
                  <div className="comment-footer">
                    <span className="comment-meta">Pedro Gomez</span>
                  </div>
                </div>
              </div>

              {/* <!-- Review--> */}
              <div className="comment">
                <div className="comment-author-ava">
                  <img src={img2} alt="Review author"></img>
                </div>
                <div className="comment-body">
                  <div className="comment-header d-flex flex-wrap justify-content-between">
                    <h4 className="comment-title">
                      Mi esposo ama a su nuevo ...
                    </h4>
                    <div className="mb-2">
                      <div className="rating-stars">
                        <i className="icon-star filled"></i>
                        <i className="icon-star filled"></i>
                        <i className="icon-star filled"></i>
                        <i className="icon-star filled"></i>
                        <i className="icon-star filled"></i>
                      </div>
                    </div>
                  </div>
                  <p className="comment-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  <div className="comment-footer">
                    <span className="comment-meta">Claudia Gonzalez</span>
                  </div>
                </div>
              </div>

              {/* <!-- Review--> */}
              <div className="comment">
                <div className="comment-author-ava">
                  <img src={img3} alt="Review author"></img>
                </div>
                <div className="comment-body">
                  <div className="comment-header d-flex flex-wrap justify-content-between">
                    <h4 className="comment-title">
                      Suave, cómoda, bastante duradera ...
                    </h4>
                    <div className="mb-2">
                      <div className="rating-stars">
                        <i className="icon-star filled"></i>
                        <i className="icon-star filled"></i>
                        <i className="icon-star filled"></i>
                        <i className="icon-star filled"></i>
                        <i className="icon-star"></i>
                      </div>
                    </div>
                  </div>
                  <p className="comment-text">
                    Sed ut perspiciatis unde omnis iste natus error sit
                    voluptatem accusantium doloremque laudantium, totam rem
                    aperiam, eaque ipsa quae ab illo inventore veritatis et
                    quasi architecto beatae vitae dicta sunt explicabo. Nemo
                    enim ipsam voluptatem quia voluptas sit aspernatur aut odit
                    aut fugit, sed quia consequuntur magni dolores eos qui
                    ratione voluptatem sequi nesciunt.
                  </p>
                  <div className="comment-footer">
                    <span className="comment-meta">Herna crespo</span>
                  </div>
                </div>
              </div>

              {/* <!-- Review Form--> */}
              <div className="mb-30 padding-top-1x">Deje opinión</div>
              <form className="row" method="post">
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="review_name">Nombre y Apellido</label>
                    <input
                      className="form-control form-control-rounded"
                      type="text"
                      id="review_name"
                      required=""
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="review_email">Email</label>
                    <input
                      className="form-control form-control-rounded"
                      type="email"
                      id="review_email"
                      required=""
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="review_subject">Asunto</label>
                    <input
                      className="form-control form-control-rounded"
                      type="text"
                      id="review_subject"
                      required=""
                    ></input>
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="form-group">
                    <label htmlFor="review_rating">Clasificación</label>
                    <select
                      className="form-control form-control-rounded"
                      id="review_rating"
                    >
                      <option>5 Estrellas</option>
                      <option>4 Estrellas</option>
                      <option>3 Estrellas</option>
                      <option>2 Estrellas</option>
                      <option>1 Estrellas</option>
                    </select>
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group">
                    <label htmlFor="review_text">Comentarios </label>
                    <textarea
                      className="form-control form-control-rounded"
                      id="review_text"
                      rows="8"
                      required=""
                    ></textarea>
                  </div>
                </div>
                <div className="col-12 text-right">
                  <button className="btn btn-outline-primary" type="submit">
                    Enviar
                  </button>
                </div>
              </form>
            </Tab>
          </Tabs>
        </div>
      </div>
    </div>
  );
};
export default itemDescription;
