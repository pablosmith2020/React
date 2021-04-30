import "../src/css/styles.css";
import "../src/css/App.css";
import "../src/css/vendor.css";
// Paso 1 - Importarnos tools de REACT ROUTER DOM
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Home from './Views/body/bodyHome'
import Footer from "./Views/footer/viewFooter";
import Header from "./Views/header/viewHeader";
import Product from './Views/body/viewProduct';
import gridProducts from './Views/body/viewGridProducts';
import CartPage from './Views/body/viewCard'
import {CartProvider} from './components/CartContext/CartContext'
import {BrandProvider} from './components/BrandContext/BrandContext'

import {HeaderProvider} from './components/HeaderContext/HeaderContext'



function App() {
  return (
    <CartProvider >
    <BrandProvider >
      <Router>
        <div className="offcanvas-wrapper">
        <HeaderProvider >
          <Header />
        </HeaderProvider >
          <Switch>
            <Route path='/' exact component={Home}/>
            <Route path='/GridProduct' exact  component={gridProducts}/>
            <Route path='/Product/:id' component={Product}/>
            <Route path='/Cart' component={CartPage}/>
            
          
          
          
          </Switch>
          <Footer />
        </div>
      </Router>
      </BrandProvider>
    </CartProvider>
  );
}

export default App;
