import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <div className="image-container">
        {product.attributes.image && product.attributes.image.data && (
          <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt={product.attributes.name} />
        )}
      </div>
      <div className="card-content">
        <h2>{product.attributes.name}</h2>
        <p>{product.attributes.description}</p>
        <h3>{product.attributes.price}$</h3>
        <Link to={`/products/${product.id}`}><p>view product</p></Link>
      </div>
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

  console.log(data);
  return (
    <div className="product-list">
      {data.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Homepage;
