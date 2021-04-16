import GridProductComponent from "../../components/body/gridProducts/GridProductsComponent";
import WidgetTitlePage from "../../components/body/gridProducts/WidgetTitlePage";
import AsideGridProducts from "../../components/body/gridProducts/AsideGridProducts";

const viewGridProducts = () => {
  return (
    <div>
      <WidgetTitlePage />

      <div className="container padding-bottom-3x mb-1">
        <div className="row">
          <GridProductComponent />
          <AsideGridProducts />
        </div>
      </div>
    </div>
  );
};

export default viewGridProducts;
