const WidgetSizeFilter = () => {
  return (
    <div>
      <section className="widget">
        <h3 className="widget-title">Filtro X Talle</h3>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="xl"
          ></input>
          <label className="custom-control-label">
            XL&nbsp;<span className="text-muted">(208)</span>
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="l"
          ></input>
          <label className="custom-control-label">
            L&nbsp;<span className="text-muted">(311)</span>
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="m"
          ></input>
          <label className="custom-control-label">
            M&nbsp;<span className="text-muted">(485)</span>
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="s"
          ></input>
          <label className="custom-control-label">
            S&nbsp;<span className="text-muted">(213)</span>
          </label>
        </div>
      </section>
    </div>
  );
};

export default WidgetSizeFilter;
