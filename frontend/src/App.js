import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';


function App() {
  return (
    <Router>
      <div className='App'>
        <SiteHeader />
        <Routes>
          <Route exact path="/">
            <Homepage />
          </Route>
          <Route path="/details/:id">
            <ProductDetails />
          </Route>
          <Route path="/category/:id">
            <Category />
          </Route>
        </Routes>
        <h1>ShoeDays</h1>
      </div>
    </Router>
  );
}

export default App;