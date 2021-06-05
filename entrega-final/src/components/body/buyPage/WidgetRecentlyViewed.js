import foto1 from "../../../img/widget/01.jpg";

const WidgetRecentlyViewed = () => {
  return (
    <div className="widget widget-featured-products">
      <h3 className="widget-title">VISTO RECIENTEMENTE</h3>

      <div className="entry">
        <div className="entry-thumb">
          <a href="#/">
            <img src={foto1} alt="Product"></img>
          </a>
        </div>
        <div className="entry-content">
          <h4 className="entry-title">
            <a href="#/">Lentes de Sol</a>
          </h4>
          <span className="entry-meta">$155.00</span>
        </div>
      </div>
    </div>
  );
};
export default WidgetRecentlyViewed;
