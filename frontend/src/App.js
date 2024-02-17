import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Homepage from './pages/Homepage';
import ProductDetails from './pages/ProductDetails';
import Category from './pages/Category';
import SiteHeader from './components/SiteHeader';


function App() {
  return (
    <Router>
      <div className="App">
        <SiteHeader />
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route path="/products/:id" element={<ProductDetails />} />
          <Route path="/category/:id" element={<Category />} />
        </Routes>
        <h1>Products</h1>
      </div>
    </Router>
  );
}

export default App;
