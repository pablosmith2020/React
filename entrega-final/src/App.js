import "../src/css/styles.css";
import "../src/css/App.css";
import "../src/css/vendor.css";

import CategoryFeatured from "./components/body/CategoryFeatured/CategoryFeatured";
import Slider_1 from "./components/body/Slider/Slider1";
import Footer from "./components/footer/Footer";
import Header from "./components/header/header";
import Desafio7 from './components/Desafio7'

import ItemDescription from './components/body/ItemDescription/ItemDescription'


  
function App() {


  return (
    <div className="App">
      <Header />
      <Slider_1 />
      <section className="container padding-top-3x">
        <h3 className="text-center mb-30">Categorias Destacadas</h3>
        <div >
          <CategoryFeatured  />
        </div>
        
  

        <div className="text-center">
          <a className="btn btn-outline-secondary margin-top-none" href="shop-categories.html">
            Ver Todas las Categorias
          </a>
        </div>

        
        <ItemDescription />

        <Desafio7 />
      </section>
      <Footer />
    </div>
  );
}

export default App;
