const WidgetGridProductPagination = () => {
  return (
    <nav className="pagination">
      <div className="column">
        <ul className="pages">
          <li className="active">
            <a href="/#">1</a>
          </li>
          <li>
            <a href="/#">2</a>
          </li>
          <li>
            <a href="/#">3</a>
          </li>
          <li>
            <a href="/#">4</a>
          </li>
          <li>...</li>
          <li>
            <a href="/#">12</a>
          </li>
        </ul>
      </div>
      <div className="column text-right hidden-xs-down">
        <a className="btn btn-outline-secondary btn-sm" href="/#">
          Next&nbsp;
          <i className="icon-arrow-right"></i>
        </a>
      </div>
    </nav>
  );
};

export default WidgetGridProductPagination;
