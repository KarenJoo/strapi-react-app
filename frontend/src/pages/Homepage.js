import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="image">{product.attributes.name}</div>
      <h2>{product.attributes.name}</h2>
      <p>{product.attributes.description}</p>
      <Link to={`/products/${product.id}`}>Read more</Link>
      <h3><p>Price:</p>{product.attributes.price}<p>$</p></h3>
    </div>
  );
}

function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/products?populate=*');
  
  if (loading) {
    return <p>Loading products..</p>;
  }
  
  if (error) {
    return <p>Error occurred!</p>;
  }
  
  return (
    <div>
      {data.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Homepage;
