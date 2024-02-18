import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

export default function ProductDetails() {
  const { id } = useParams();
  const { loading, error, data } = useFetch(`http://localhost:1337/api/products/${id}?populate=*`);
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (!loading && !error && data) {
      setProduct(data);
    }
  }, [loading, error, data]);

  if (loading) return <p>Loading single product...</p>;
  if (error || !product) return <p>Could not load single product.</p>;

  const { attributes } = product;

  return (
    <div className="product-details">
      <div className="image-container">
        {attributes.image && attributes.image.data && (
          <img src={`http://localhost:1337${attributes.image.data.attributes.url}`} alt={attributes.name} />
        )}
      </div>
      <div className="card-content">
        <h2>{attributes.name}</h2>
        <p>{attributes.description}</p>
        <p>Price: ${attributes.price}</p>
      </div>
    </div>
  );
}
