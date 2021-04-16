const WidgetBrandFilter = () => {
  return (
    <div>
      <section className="widget">
        <h3 className="widget-title">Filtro X Marca</h3>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="adidas"
          ></input>
          <label className="custom-control-label">
            Adidas&nbsp;<span className="text-muted">(254)</span>
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="bilabong"
          ></input>
          <label className="custom-control-label">
            Bilabong&nbsp;<span className="text-muted">(39)</span>
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="klein"
          ></input>
          <label className="custom-control-label">
            Calvin Klein&nbsp;<span className="text-muted">(128)</span>
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="nike"
          ></input>
          <label className="custom-control-label">
            Nike&nbsp;<span className="text-muted">(310)</span>
          </label>
        </div>
        <div className="custom-control custom-checkbox">
          <input
            className="custom-control-input"
            type="checkbox"
            id="bahama"
          ></input>
          <label className="custom-control-label">
            Tommy Bahama&nbsp;<span className="text-muted">(42)</span>
          </label>
        </div>
      </section>
    </div>
  );
};

export default WidgetBrandFilter;
