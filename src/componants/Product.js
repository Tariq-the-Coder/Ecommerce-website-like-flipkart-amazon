import React from 'react'
import Rating from './Rating';
import { Link } from 'react-router-dom';

export default function Product(props) {
  const { product } = props;
  return (
    <div key={product._id} className="card">
      <Link to={`/product/${product._id}`}>
        <img id='card' className="medium" src={product.image} alt={product.name} />
      </Link>
      <Link to={`/product/${product._id}`}>
        <div className="card-body">
          <h2>{product.name}</h2>
          <Rating rating={product.rating} numReviews={product.numReviews} />
          <div className="price">${product.price}</div>
        </div>
      </Link>
    </div>
  )
}
