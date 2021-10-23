import './assets/css/style.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import HomePage from './views/HomePage/HomePage';
import AllProducts from './views/AllProducts/AllProducts';
import ProductDetails from './views/ProductDetails/ProductDetails';


function App() {
  return (
    <div>
      <Router>
        <Switch>

          <Route exact path='/details'>
            <ProductDetails></ProductDetails>
          </Route>

          <Route exact path='/AllProducts'>
            <AllProducts></AllProducts>
          </Route>

          <Route exact path='/'>
            <HomePage></HomePage>
          </Route>

          <Route exact path='*'>
            <div> 404</div>
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
