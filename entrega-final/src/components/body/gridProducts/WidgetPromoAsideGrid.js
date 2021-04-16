import img1 from "../../../img/banners/02.jpg";

const WidgetPromoAsideGrid = () => {
  const myStyle = { backgroundImage: "url({img1})" };

  return (
    <div>
      <section className="promo-box" style={{ myStyle }}>
        <span className="overlay-dark" style={{ opacity: 0.45 }}></span>
        <div className="promo-box-content text-center padding-top-3x padding-bottom-2x">
          <h4 className="text-light text-thin text-shadow">
            Nueva colección de
          </h4>
          <h3 className="text-bold text-light text-shadow">Lentes de sol</h3>
          <a className="btn btn-sm btn-primary" href="/#">
            Compra ahora
          </a>
        </div>
      </section>
    </div>
  );
};

export default WidgetPromoAsideGrid;
