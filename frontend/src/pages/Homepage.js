import React from 'react';
import useFetch from '../hooks/useFetch';
import { Link } from 'react-router-dom';

function ProductCard({ product }) {
    return (
      <div className="product-card">
         <h2>{product.attributes.name}</h2>
         <div className="image-container">
        <img src={`http://localhost:1337${product.attributes.image.data.attributes.url}`} alt={product.attributes.name} />      
       </div>
       <div className="card-content">
        <p>{product.attributes.description}</p>
        <Link to={`/products/${product.id}`}><p>Read more</p></Link>
        <h5><p>Price:</p>{product.attributes.price}</h5>
        </div>
      </div>
    );
  }
  
  

function Homepage() {
  // Construct the URL with the populate parameter
  const { loading, error, data } = useFetch('http://localhost:1337/api/products?populate=*');
  
  if (loading) {
    return <p>Loading products..</p>;
  }
  
  if (error) {
    return <p>Error occurred!</p>;
  }
  
  console.log(data)
  return (
    <div>
      {data.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Homepage;
