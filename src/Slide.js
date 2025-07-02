import React, { useState, useEffect } from 'react';
import axios from 'axios'; 
import './App.css';

export default function Slide() {
  const [products, setProducts] = useState([]); 
 
  useEffect(() => {
    axios.get('https://fakestoreapi.com/products') 
      .then(response => {
        setProducts(response.data); 
      })
      .catch(error => {
       console.error('Error fetching the products: ', error);
      });
  }, []);

  return (
    <div>
      <div>
        <h1 className='text-center'>Welcome to our new website</h1>
      </div>

      <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
         
          {products.map((product, index) => (
            <div className={`carousel-item ${index === 0 ? 'active' : ''} c-item`} key={product.id}>
              <img src={product.image} className="d-block w-100 carousel-img c-img" alt={product.title} />
             
              <div className="carousel-caption d-none d-md-block">
                <h5>{product.title}</h5>
                <p>{product.description.slice(0, 50)}...</p>
              </div>
           
            </div>
          ))}
        
        </div>
       
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

