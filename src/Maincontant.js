import React, { useState, useEffect } from 'react';
import axios from 'axios';


export default function MainContent(props) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching the products data: ', error);
      });
  }, []);

  return (
    <div className="container my-4">

      <h1 className="text-center mb-4 main-heading">Our Featured Products</h1>

      <div className="row">
        {products.map(product => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card product-card">
              <img src={product.image} className="card-img-top" alt={product.title} />
              <div className="card-body">
                <h5 className="card-title product-title">{product.title}</h5>
                <p className="card-text product-description">{product.description.slice(0, 100)}...</p>
                <a href="/" className="btn btn-primary btn-sm product-btn">Read more</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}