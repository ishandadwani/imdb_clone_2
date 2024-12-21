import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductPage = ({ match }) => {
  const [product, setProduct] = useState({});
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchProductData = async () => {
      const productId = match.params.id;
      const productRes = await axios.get(`/api/products/${productId}`);
      setProduct(productRes.data);
      const reviewsRes = await axios.get(`/api/products/${productId}/reviews`);
      setReviews(reviewsRes.data);
    };
    fetchProductData();
  }, [match.params.id]);

  return (
    <div>
      <h1>{product.name}</h1>
      <p>{product.description}</p>
      <div>
        <h2>Reviews</h2>
        {reviews.map(review => (
          <div key={review._id}>
            <h3>{review.title}</h3>
            <p>{review.content}</p>
            <p>Rating: {review.rating}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductPage;
