import WidgetCategoryProduct from "./WidgetCategoryProduct";
import WidgetBrandFilter from "./WidgetBrandFilter";
import WidgetSizeFilter from "./WidgetSizeFilter";


const AsideGridProducts = () => {
  return (
    <aside className=" sidebar-offcanvas">
      <WidgetCategoryProduct />
      <WidgetBrandFilter />
      <WidgetSizeFilter />
    </aside>
  );
};

export default AsideGridProducts;
