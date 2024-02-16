import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="image">{product.attributes.name}</div>
      <h2>{product.attributes.name}</h2>
      <h3>{product.attributes.price}</h3>
      <p>{product.attributes.description}</p>
      <Link to={`/products/${product.id}`}>Read more</Link>
    </div>
  );
}

function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/products');
  
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
