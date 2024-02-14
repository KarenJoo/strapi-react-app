import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';

function App() {
  return (
    <div className="App">
      <SiteHeader/ >
      <Switch>
        <Route path="/">
          <Homepage />
        </Route>
        <Route path="/details/:id">
          <ProductDetails />
        </Route>
        <Route path="/category/:id">
          <Category />
        </Route>
      </Switch>
      <h1>ShoeDays</h1>
    </div>
  );
}

export default App;
