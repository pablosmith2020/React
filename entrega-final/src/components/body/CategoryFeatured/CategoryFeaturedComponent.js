const CategoryFeaturedComponent = ({ data }) => {
  return (
    <div className="col-md-4 col-sm-6 ">
      <div className="card mb-30">
        <a className="card-img-tiles" href="shop-grid-ls.html">
          <div className="inner">
            <div className="main-img">
              <img
                key={data.category_id}
                id={data.category_id}
                src={data.img1}
                alt="Category"
              ></img>
              ,
            </div>
            <div className="thumblist">
              <img key="1" src={data.img2} alt="Category"></img>,
              <img key="2" src={data.img3} alt="Category"></img>
            </div>
          </div>
        </a>
        <div className="card-body text-center">
          <h4 className="card-title">{data.description}</h4>
          <p className="text-muted">A Partir de $ {data.price}</p>
          <a
            className="btn btn-outline-primary btn-sm"
            href="shop-grid-ls.html"
          >
            Ver Productos
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryFeaturedComponent;
