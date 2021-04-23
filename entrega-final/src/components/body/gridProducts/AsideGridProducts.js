import WidgetCategoryProduct from "./WidgetCategoryProduct";
import WidgetBrandFilter from "./WidgetBrandFilter";
import WidgetSizeFilter from "./WidgetSizeFilter";
import WidgetPriceRange from "./WidgetPriceRange"


const AsideGridProducts = () => {
  return (
    <aside className=" sidebar-offcanvas">
      <WidgetCategoryProduct />
      <WidgetBrandFilter />
      <WidgetPriceRange />
      <WidgetSizeFilter />
    </aside>
  );
};

export default AsideGridProducts;
