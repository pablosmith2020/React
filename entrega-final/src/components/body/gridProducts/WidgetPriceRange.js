const WidgetPriceRange = () => {
  return (
    <div>
      <section className="widget widget-categories">
        <h3 className="widget-title">Rango de Precios</h3>
        <form
          className="price-range-slider"
          method="post"
          data-start-min="250"
          data-start-max="650"
          data-min="0"
          data-max="1000"
          data-step="1"
        >
          <div className="ui-range-slider noUi-target noUi-ltr noUi-horizontal noUi-background">
            <div className="noUi-base">
              <div className="noUi-origin noUi-connect" style="left: 25%;">
                <div className="noUi-handle noUi-handle-lower"></div>
              </div>
              <div className="noUi-origin noUi-background" style="left: 65%;">
                <div className="noUi-handle noUi-handle-upper"></div>
              </div>
            </div>
          </div>
          <footer className="ui-range-slider-footer">
            <div className="column">
              <button className="btn btn-outline-primary btn-sm" type="submit">
                Filter
              </button>
            </div>
            <div className="column">
              <div className="ui-range-values">
                <div className="ui-range-value-min">
                  $<span>250</span>
                  <input type="hidden" value="250"></input>
                </div>
                &nbsp;-&nbsp;
                <div className="ui-range-value-max">
                  $<span>650</span>
                  <input type="hidden" value="650"></input>
                </div>
              </div>
            </div>
          </footer>
        </form>
      </section>
    </div>
  );
};

export default WidgetPriceRange;
