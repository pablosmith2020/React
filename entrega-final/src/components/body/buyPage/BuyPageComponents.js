import StepsBuys from './StepsBuys'
import WidgetOrderSummary from './WidgetOrderSummary'
import WidgetRecentlyViewed from './WidgetRecentlyViewed'

const BuyPageComponents = () => {
  return (
    <div>
      {/* Page Title */}
      <div className="page-title">
        <div className="container">
          <div className="column">
            <h1>Finalizar Compra</h1>
          </div>
          <div className="column">
            <ul className="breadcrumbs">
              <li>
                <a href="/#">Home</a>
              </li>
              <li className="separator">&nbsp;</li>
              <li>Finalizar Compra</li>
            </ul>
          </div>
        </div>
      </div>
      {/* Body */}

      <div className="container padding-bottom-3x mb-2">
        <div className="row">
         
          <div className="col-xl-9 col-lg-8">
            <StepsBuys />
          </div>
          <div className="col-xl-3 col-lg-4">
            <WidgetOrderSummary />
            <WidgetRecentlyViewed />
          </div>
        

         
        </div>
      </div>
    </div>
  );
};
export default BuyPageComponents;
