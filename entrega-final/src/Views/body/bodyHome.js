import Slider from "./sliderPromotion";
import CategoryFeatured from "./SlideCategoryFeatured";

const bodyHome = () => {
  return (
    <div>
      <Slider />
      <h3 className="text-center mb-30">Categorias Destacadas</h3>
      <div className="text-center">
        <CategoryFeatured />
      </div>
     
      <a className="btn btn-outline-secondary margin-top-none" href="/#">
        Ver Todas las Categorias
      </a> 
    </div>
  );
};

export default bodyHome;
