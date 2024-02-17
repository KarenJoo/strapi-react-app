import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
      <div className="product-card">
        {/* Assuming image is directly available under product.attributes */}
        <img src={`http://localhost:1337${product.attributes.image.url}`} alt={product.attributes.name} />      
        <h2>{product.attributes.name}</h2>
        <p>{product.attributes.description}</p>
        <Link to={`/products/${product.id}`}>Read more</Link>
        <h5><p>Price:</p>{product.attributes.price}</h5>
      </div>
    );
}

function Homepage() {
  // Construct the URL with the populate parameter
  const { loading, error, data } = useFetch('http://localhost:1337/api/products?populate[0]=image&populate[1]=image.formats.thumbnail&populate[2]=image.formats.small&populate[3]=image.formats.medium');
  
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
