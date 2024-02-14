import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';


function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Switch>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route exact path="/details/:id">
            <ProductDetails />
          </Route>
          <Route exact path="/category/:id">
            <Category />
          </Route>
        </Switch>
        <h1>ShoeDays</h1>
      </div>
    </Router>
  );
}

export default App;